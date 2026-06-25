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

### Claim 1 — Distributed Time Sync & UWB-Anchored Bearing Fusion
* **Why it matters:** This is the core accessibility payoff. One phone can tell you *something* happened; two phones can tell you **where**. Acting in concert across phones — firing or sampling in phase — needs a shared time reference, and bearing fusion needs a spatial baseline.
* **Concept:** Acting in concert across phones needs a shared time reference, and recovering location from bearings needs geometry. Classic arrays demand surveyed positions and wired sync; hand-held phones have neither.
* **Mechanism:** An **NTP-style ping/pong** over the local P2P mesh (`handleSyncPing`/`handleSyncPong`) estimates each node's clock offset to schedule actions on a shared monotonic timeline. Concurrently, each node derives a compass-referenced bearing from local stereo GCC-PHAT TDOA. The mesh **ray-intersects** the bearings, correcting the inter-phone **baseline with UWB ranging** when phones are in range (~9 m). Output: a single located source.
* **Why it's unique:** A usable shared clock and bearing-fusion array assembled ad-hoc from hand-held consumer phones over a P2P mesh. UWB supplies the baseline a fixed array gets from its mounts.
* **Honest scope:** This demonstrates coordinated scheduling (millisecond-domain offset) and bearings-only triangulation, not microsecond live-audio TDOA multilateration.

### Claim 2 — Distributed Asynchronous Threat Boosting (Array Gain)
* **Why it matters:** The siren you almost didn't hear is the one that kills you. A distant or muffled emergency sound often sits *just below* what one phone will alert on. Array gain catches what any single ear missed.
* **Concept:** Traditional systems require an event to breach a hard threshold on a single microphone. Our mesh broadcasts *sub-threshold* detections (gate: `confidence > revealThreshold * 0.5`) to peers as metadata.
* **Mechanism:** A probabilistic-OR fusion `1 − (1 − a)(1 − b)` combines the confidence scores of the same event heard by different nodes. Two faint detections that each miss their own gate can fuse into one actionable event when the **geometry-weighted** fused confidence crosses the reveal threshold.
* **Why it's unique:** It operates on **asynchronous metadata, not raw audio** — one ~few-hundred-byte `SharedSoundEvent` per detection vs. ~32 KB/s/node to stream PCM.
* **Caveat:** Statistical, not coherent, gain. Requires ≥2 nodes hearing the same event within the fusion window.

### Claim 3 — Resiliency & Anti-Spoofing Protocol
* **Why it matters:** An array that drops a peer the moment the link hiccups is useless in the real world (elevators, crowds). Additionally, an acoustic mesh must protect itself against adversarial nodes injecting false threat metadata or spoofing GPS coordinates to trigger false spatial alarms.
* **Mechanism (Jamming):** The Constellation link is connectionless and self-healing — a 1 Hz heartbeat + 15 s wire-liveness window holds a peer through a jam, and packets resume with no re-pairing.
* **Mechanism (Spoof Cordon):** `ConstellationManager.detectGpsSpoof` flags a node whose GPS teleports at an impossible ground speed (>~80 m/s) while its UWB range to a peer holds steady; the node's telemetry then falls back to its **last trusted position**, so peers + fusion keep the array on real geometry instead of the spoofed GPS.

### Claim 4 — Secure Metadata Payloads
* **Why it matters:** Deaf users coordinate with the people around them constantly — captions and short text need to move phone-to-phone when LTE doesn't, without waiting on a server. Communicating acoustic events across consumer devices must not leak raw audio or identifiable voice data.
* **Mechanism:** Captions/text and acoustic metadata relay peer-to-peer over the same UWB-anchored P2P channel. The mesh transmits only highly compressed, one-way semantic descriptors (e.g., `ML label`, `confidence`, `timestamp`, `bearing`). Raw audio never leaves the device.

### Claim 5 — On-Device Synthesis & Mesh-Aware Distributed AGC
* **Why it matters:** Urban noise makes sounds harder to place. A loud horn reflected off a building can look like it's coming from the wrong block. Furthermore, a multilingual group shouldn't need cloud round-trips to understand each other.
* **Mechanism (AGC):** Each node broadcasts its local acoustic environment (`audioAmbient`, `audioSpeech`, `audioNoiseFloor`). `ConstellationManager.updateGlobalAcousticEnvironment` computes a **global noise floor** and a **global duck target** (MAX speech RMS). `AudioEnvironmentObserver` retunes each node's local AGC to match.
* **Mechanism (Synthesis):** Mesh text is translated and synthesized entirely on-device (`TTSAudioGenerator` + the Translation framework), fully offline.
* **Why it's unique:** The array self-levels from shared metadata alone, and translation + speech synthesis is handled on edge devices adapting to the shared acoustic baseline.

---

## Proof of Concept: What's actually built

The original plan proposed three demo *options* (ghost-node log replay; 3-simulator injection; live-desk). These are now superseded by the in-app **Demo Director** — a live-on-device harness whose readouts are pulled from the real engine, so an examiner can probe any figure. (One exception: **Sub-Threshold Boost** illustrates the noisy-OR with example confidences; only its bandwidth figure is measured live.) Each claim has a button:

| Demo | Proves | How |
|---|---|---|
| **Time-Synced Fire** | Claim 1 | Fires one sound on the shared ns clock; reports the RTT-bounded offset estimate. |
| **Triangulation Sim** | Claim 1 | Runs the **real** `ConstellationFusionEngine` on two synthetic bearings (one with a 2° heading error) to a known truth point; reports metres-from-truth. Deterministic, no peer — boardroom-safe. |
| **Triangulation Live-Desk** | Claim 1 | Two real phones hear one external sound (e.g. a third device's speaker); reads the live fused source. The real product path. |
| **Sub-Threshold Boost** | Claim 2 | Two sub-threshold detections fuse via noisy-OR across nodes; prints the measured metadata-vs-PCM byte contrast. |
| **GPS Spoofing** | Claim 3 | Teleports the GPS; the real detector flags it and the cordon holds the last trusted fix. |
| **Packet Jamming** | Claim 3 | Drops outbound packets; the link recovers with no re-pairing. |
| **V1/V2 Text · V1/V2 TTS** | Claim 4 & 5 | Caption relay over the mesh (Claim 4); on-device translate + TTS (Claim 5). |
| **Distributed AGC** | Claim 5 | Reads the live global floor + max-speech duck + this node's retuned AGC. |

**Recommendation:** Use **Triangulation Sim** and the metadata-byte readout for deterministic, repeatable proof (CI-friendly), and the **Live-Desk** demos (Triangulation Live-Desk, Distributed AGC, GPS Spoofing) on 2–3 real phones for investor/examiner demonstrations — the HUD visualizes the fusion live.

---

## Combination claim shape (for counsel)

Patent the **combination**, with dependent claims on each mechanism as an element of the integrated system. A plausible independent-claim shape:

> A method on a mesh of consumer mobile devices wherein each node (a) detects acoustic events locally; (b) transmits **detection metadata, not raw audio** — including sub-threshold confidences, a compass-referenced bearing, and environmental RMS; (c) fuses peer metadata via probabilistic-OR to boost marginal detections; (d) harmonizes per-node AGC from the aggregated mesh acoustic environment; (e) locates sources by **UWB-anchored bearing triangulation** over a **clock-synchronized** metadata mesh; and (f) cordons a node whose self-reported GPS contradicts its UWB geometry — **the detecting, fusing, locating, and any translation/synthesis all performed entirely on the devices with no cloud or central server, and no raw audio leaving any node.**

That closing limitation is doing real work, not boilerplate: it is the cleanest distinguisher over prior-art distributed sensing (which aggregates at a server) and the basis for both the resilience and privacy stories — worth its own dependent claims (edge-only operation; metadata-only / no-raw-audio transport; offline operation with no infrastructure).

The individual primitives (noisy-OR fusion, NTP sync, UWB ranging, AGC, GCC-PHAT bearing) are prior art. The novelty — if it survives a prior-art search — is **how they are composed** into an **ad-hoc, infrastructure-free, edge-only consumer-phone acoustic mesh that fuses metadata and never streams raw audio off any device.**
