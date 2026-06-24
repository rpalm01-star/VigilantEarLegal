# VigilantEar: Synthetic Aperture Sonar Mesh
## Patent Strategy & Feature Analysis

The core patentable concept is the **ad-hoc acoustic sensor mesh**: turning a disparate collection of standard consumer phones into a coordinated, distributed acoustic array — without physical cabling, fixed/surveyed geometry, central infrastructure, or raw-audio streaming between devices. Each node detects locally and shares only **metadata**; the mesh fuses that metadata to do things no single phone can. Every stage runs **on the device** — no cloud, no server — and because only metadata ever crosses the link, **no raw audio ever leaves a phone**: collaborative sensing without surveillance.

> **A note on the name.** "Synthetic Aperture Sonar Mesh" is the umbrella brand. The *shipping* localization mechanism is **UWB-anchored bearing triangulation** (angle-of-arrival ray intersection), **not** coherent aperture synthesis or TDOA multilateration. The claims below are written to what the code actually does; the novelty is the **composition** of well-known primitives for an ad-hoc consumer-phone acoustic mesh.

This document is engineering input for patent counsel — not legal advice.

---

## The human problem (why this exists)

VigilantEar is an accessibility tool for **Deaf and hard-of-hearing** people, where the unmet need isn't just *whether* a sound happened but *where it is*. A hearing person reflexively turns toward a siren, a horn, a shout, or footsteps coming up behind them — getting both the warning and the direction for free. A Deaf person gets neither. Single-device sound detectors help a little, but they fail exactly when it matters most: a faint or distant siren, a noisy street, or a sound from behind where there's no line of sight.

The mesh exists because **one phone isn't enough ear.** Pooling what nearby phones hear lets the group catch an alert a single phone misses — and, the part no single device can do, fuses their separate vantage points into a **direction.** That turns "something happened" into "an emergency vehicle is coming up behind you," which for someone who can't orient to sound on their own is the difference between awareness and a near-miss.

Every mechanism below traces back to that need: array gain catches the faint warning; distributed AGC keeps the system listening through noise; bearing fusion supplies the *direction*; the spoof cordon keeps that direction trustworthy; and the on-device / no-cloud design means it works in the signal-dead places where danger actually happens — without turning the user's surroundings into a cloud recording. **The accessibility mission is the anchor; the patent mechanisms are how it's delivered.**

---

## Cross-cutting pillar — On-device, no cloud, private by architecture

**Why it matters:** A Deaf user already lives with enough surveillance anxiety — the last thing an accessibility tool should do is ship their environment to a server. Edge-only operation means the mesh still works when cell and Wi-Fi don't (transit tunnels, protests, rural roads, basement venues) — exactly where situational awareness matters and connectivity often doesn't. Metadata-only transport means friends can pool their ears without pooling their conversations.

This is the property that most sharply distinguishes the system from prior-art distributed sensing, which almost universally assumes a central server or cloud aggregator. It is woven through every claim below, not a separate mechanism.

* **Edge-only.** Every stage of the sensing + fusion pipeline runs **on the phones themselves** — acoustic classification (on-device CoreML `SoundAnalysis`), bearing estimation (on-device GCC-PHAT DSP), probabilistic fusion, distributed AGC, clock sync, the GPS-spoof cordon, and even translation + speech synthesis. There is **no cloud, no server, no central aggregator** in the loop. The mesh is pure device-to-device (P2P + UWB), so it keeps working in cellular/Wi-Fi-denied environments and has no infrastructure to attack, subscribe to, or take offline.
* **Private by architecture.** Only **derived metadata** crosses the link — a label, a bearing, a confidence, environment RMS — **never the microphone signal.** So the array performs collaborative acoustic sensing **without ever transmitting, centrally recording, or exposing private conversations**: there is nothing to eavesdrop on the wire and nothing to exfiltrate to a server. The same fact is simultaneously a bandwidth win (Claim 1), a resilience property (no infrastructure dependency), and a privacy guarantee — a strong combination-claim limitation.
* **Scope (honest).** This applies to the **Constellation acoustic mesh** — the patent subject matter. The broader VigilantEar app has separate, clearly-bounded networked features (ShazamKit music ID, public weather feeds, CloudKit trial status, push) that are **not** part of the mesh pipeline and are not claimed here. The claim is "the mesh sensing/fusion pipeline is edge-only and audio never leaves a node," not "the app makes zero network calls."

---

### Claim 1 — Distributed Asynchronous Threat Boosting
* **Why it matters:** The siren you almost didn't hear is the one that kills you. A distant or muffled emergency sound often sits *just below* what one phone will alert on — especially in traffic, wind, or with the device in a pocket. Array gain is how the group catches what any single ear missed, before the user has to guess whether to look behind them.
* **Concept:** Traditional systems require an event to breach a hard threshold on a single microphone. Our mesh broadcasts *sub-threshold* detections (gate: `confidence > revealThreshold * 0.5`) to peers as metadata.
* **Mechanism:** A probabilistic-OR fusion `1 − (1 − a)(1 − b)` (in `ConstellationFusionEngine.intersectPair`) combines the confidence scores of the same event heard by different nodes. Two faint detections that each miss their own gate can fuse into one actionable event when the **geometry-weighted** fused confidence crosses the per-profile reveal threshold (`AcousticCoordinator` alert path). This is distinct from `SharedSoundStore`'s additive co-heard confirmation — that path never gates local alerts. *(Illustrative: 0.40 + 0.40 → 0.64. Real gates are per-profile, and the fused confidence is further weighted by geometry, GPS accuracy, and ray residual.)*
* **Why it's unique:** It operates on **asynchronous metadata, not raw audio** — one ~few-hundred-byte `SharedSoundEvent` per detection vs. ~32 KB/s/node to stream PCM (the Demo Director prints the measured figure live). This is a **statistical** analog of array gain — boosting marginal detections in the *confidence* domain — **not** coherent waveform summing / beamforming.
* **Caveat:** Statistical, not coherent, gain. Requires ≥2 nodes hearing the same event within the fusion window, with sufficient bearing separation for the fusion engine to produce a fused confidence.

### Claim 2 — Mesh-Aware Distributed AGC
* **Why it matters:** Urban noise doesn't just make sounds harder to hear — it makes them harder to *place*. A loud horn reflected off a building can look like it's coming from the wrong block on a distant phone, sending the user the wrong way. Self-leveling the array from shared environment data keeps the map honest in the noisy streets where Deaf users actually walk.
* **Concept:** A loud event near one phone makes distant phones pick up multipath echoes that pollute the spatial map.
* **Mechanism:** Each node broadcasts its local acoustic environment (`audioAmbient`, `audioSpeech`, `audioNoiseFloor`). `ConstellationManager.updateGlobalAcousticEnvironment` computes a **global noise floor** (averaged, so one noisy node can't desensitize the array) and a **global duck target** (the MAX speech RMS across nodes). `AudioEnvironmentObserver` retunes each node's local AGC to match. Telemetry is **staleness-filtered** (a quiet-but-connected peer ages out after ~6 s) and recomputed on the 1 Hz tick.
* **Why it's unique:** The array self-levels from shared metadata alone — no raw-audio streaming.
* **Caveat:** Needs ≥2 connected nodes with recent telemetry. The multipath-suppression benefit is mechanistic; it is best *shown* with a live 2–3-phone desk demo (one loud node, watch a distant node's gain duck), which the code supports but does not numerically self-validate.

### Claim 3A — Coordinated Mesh Timing
* **Why it matters:** A mesh that can't act together is just separate alarms going off at random times. Shared timing lets the group fire, sample, or inject in concert — so coordinated demonstrations (and future coordinated sensing) actually behave as one array, not a bag of phones.
* **Concept:** Acting in concert across phones — firing or sampling in phase — needs a shared time reference. Classic coherent arrays demand microsecond sync and surveyed positions; hand-held phones have neither.
* **Mechanism:** An **NTP-style ping/pong** over the local P2P mesh (`handleSyncPing`/`handleSyncPong`) estimates each node's clock offset; coordinated actions (e.g. an audio injection) are then scheduled on a **shared monotonic-nanosecond timeline** (`DispatchTime.uptimeNanoseconds`) so every node fires phase-aligned.
* **Why it's unique:** A usable shared clock from consumer phones over an ad-hoc P2P mesh — no GPS-disciplined oscillator, no wired PTP, no infrastructure. Coordinated actions ride one timeline.
* **Honest scope:** The offset is a **millisecond-domain estimate bounded by the live round-trip time** — the *nanosecond* granularity is the **scheduling clock**, not the offset precision. This demonstrates **coordinated playback**, not microsecond cross-phone sample alignment of live mic streams (i.e. not live TDOA).

### Claim 3B — UWB-Anchored Bearing Fusion
* **Why it matters:** This is the core accessibility payoff. One phone can tell you *something* happened; two phones can tell you **where** — behind you, to your left, approaching from the cross street. Bearing fusion is how "alert" becomes "orient," which is what a hearing person gets for free and a Deaf person doesn't.
* **Concept:** One phone hears only a **bearing** — a direction, not a place. Two phones hearing one source from different angles can recover its **location**.
* **Mechanism:** Each node derives one compass-referenced bearing from its **own local stereo GCC-PHAT TDOA** (`FFTProcessor`) and shares it as metadata with a confidence. The mesh **ray-intersects** the two bearings (`ConstellationGeometry.intersectRays`), correcting the inter-phone **baseline with UWB ranging** when phones are in range (~9 m), and fuses the two confidences via the Claim-1 noisy-OR. Output: a single located source with a residual + a fused confidence neither phone could produce alone. Every fused source is tagged `.rayIntersection`.
  * **GPS-spoof cordon:** `ConstellationManager.detectGpsSpoof` flags a node whose GPS teleports at an impossible ground speed (>~80 m/s) while its UWB range to a peer holds steady; the node's telemetry then falls back to its **last trusted position**, so peers + fusion keep the array on real geometry instead of the spoofed GPS.
* **Why it's unique:** A bearing-fusion array assembled ad-hoc from hand-held phones — UWB supplies the baseline a fixed array gets from its mounts, so the phones can be anywhere, and the geometry survives active GPS spoofing.
* **Honest scope:** This is **bearings-only triangulation, not TDOA multilateration and not a coherent synthetic aperture.** Today's solver fuses 2 bearings (`.rayIntersection`); a 3+-phone **over-determined least-squares** solve (`.triangulationLSQ`) is a defined future path that needs a 3rd app-running phone to validate. Bearings are field-accurate; **range** is GPS/UWB-baseline-limited (close-range range leans on UWB; wide-baseline orientation is GPS-limited). For an acoustic source, TDOA multilateration would require µs cross-phone sync we don't have, and SRP-PHAT would require raw-audio streaming that contradicts Claim 1 — both are deliberately out of scope.

### Supporting mechanisms

* **Mesh resiliency (packet jamming)**
  * **Why it matters:** An array that drops a peer the moment the link hiccups is useless in the real world — elevators, crowds, RF congestion. Self-healing keeps the safety net up when the network gets ugly.
  * **Mechanism:** the Constellation link is connectionless and self-healing — a 1 Hz heartbeat + 15 s wire-liveness window holds a peer through a jam, and packets resume with no re-pairing (`NetworkMeshLink`).

* **Secure mesh payloads**
  * **Why it matters:** Deaf users coordinate with the people around them constantly — captions and short text need to move phone-to-phone when LTE doesn't, without waiting on a server.
  * **Mechanism:** captions/text relay peer-to-peer over the same UWB-anchored P2P channel as ranging + sync — no cell/Wi-Fi infrastructure (`broadcastCaption`).

* **On-device translation + neural TTS**
  * **Why it matters:** A multilingual group shouldn't need cloud round-trips to understand each other in the field. On-device translate + speak keeps latency human and keeps the conversation off the wire.
  * **Mechanism:** mesh text is translated and synthesized entirely on-device (`TTSAudioGenerator` + the Translation framework), fully offline.

---

## Proof of Concept: What's actually built

The original plan proposed three demo *options* (ghost-node log replay; 3-simulator injection; live-desk). These are now superseded by the in-app **Demo Director** — a live-on-device harness whose readouts are pulled from the real engine, so an examiner can probe any figure. (One exception: **Sub-Threshold Boost** illustrates the noisy-OR with example confidences; only its bandwidth figure is measured live.) Each claim has a button:

| Demo | Proves | How |
|---|---|---|
| **Sub-Threshold Boost** | Claim 1 | Two sub-threshold detections fuse via noisy-OR across nodes; prints the measured metadata-vs-PCM byte contrast. |
| **Distributed AGC** | Claim 2 | Reads the live global floor + max-speech duck + this node's retuned AGC. |
| **Time-Synced Fire** | Claim 3A | Fires one sound on the shared ns clock; reports the RTT-bounded offset estimate. |
| **Triangulation Sim** | Claim 3B | Runs the **real** `ConstellationFusionEngine` on two synthetic bearings (one with a 2° heading error) to a known truth point; reports metres-from-truth. Deterministic, no peer — boardroom-safe. |
| **Triangulation Live-Desk** | Claim 3B | Two real phones hear one external sound (e.g. a third device's speaker); reads the live fused source. The real product path. |
| **GPS Spoofing** | Claim 3B | Teleports the GPS; the real detector flags it and the cordon holds the last trusted fix. |
| **Packet Jamming** | Supporting | Drops outbound packets; the link recovers with no re-pairing. |
| **V1/V2 Text · V1/V2 TTS** | Supporting | Caption relay over the mesh; on-device translate + TTS. |

**Recommendation:** Use **Triangulation Sim** and the metadata-byte readout for deterministic, repeatable proof (CI-friendly), and the **Live-Desk** demos (Triangulation Live-Desk, Distributed AGC, GPS Spoofing) on 2–3 real phones for investor/examiner demonstrations — the HUD visualizes the fusion live.

---

## Combination claim shape (for counsel)

Patent the **combination**, with dependent claims on each mechanism as an element of the integrated system. A plausible independent-claim shape:

> A method on a mesh of consumer mobile devices wherein each node (a) detects acoustic events locally; (b) transmits **detection metadata, not raw audio** — including sub-threshold confidences, a compass-referenced bearing, and environmental RMS; (c) fuses peer metadata via probabilistic-OR to boost marginal detections; (d) harmonizes per-node AGC from the aggregated mesh acoustic environment; (e) locates sources by **UWB-anchored bearing triangulation** over a **clock-synchronized** metadata mesh; and (f) cordons a node whose self-reported GPS contradicts its UWB geometry — **the detecting, fusing, locating, and any translation/synthesis all performed entirely on the devices with no cloud or central server, and no raw audio leaving any node.**

That closing limitation is doing real work, not boilerplate: it is the cleanest distinguisher over prior-art distributed sensing (which aggregates at a server) and the basis for both the resilience and privacy stories — worth its own dependent claims (edge-only operation; metadata-only / no-raw-audio transport; offline operation with no infrastructure).

The individual primitives (noisy-OR fusion, NTP sync, UWB ranging, AGC, GCC-PHAT bearing) are prior art. The novelty — if it survives a prior-art search — is **how they are composed** into an **ad-hoc, infrastructure-free, edge-only consumer-phone acoustic mesh that fuses metadata and never streams raw audio off any device.**
