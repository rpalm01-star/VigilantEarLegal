# VigilantEar Constellation Mode — Implementation Plan

**Platform:** Apple (iOS) only  
**Codebase:** `../VigilantEar/apple/VigilantEar/`  
**Status:** Phase 1 complete; Phase 2+ planned below  
**Last updated:** 2026-06-20

---

## Summary

Constellation Mode turns multiple VigilantEar iPhones (with UWB) into a **Wireless Acoustic Sensor Network (WASN)** — a distributed microphone array that delivers better real-time sound awareness than any single device.

A lone phone has a ~10–15 cm mic baseline and is vulnerable to occlusion, wind, and reverb. A constellation adds:

- **Larger effective aperture** — better angular resolution, especially at low frequencies
- **Spatial diversity** — redundancy across viewpoints; multi-phone voting reduces false positives
- **3D multilateration** — true source position and range when geometry is known
- **Array processing gains** — beamforming for higher SNR on high-interest events
- **Improved tracking** — fused Doppler from multiple angles for moving sources (sirens, vehicles)

### What exists today (Phase 1)

Phase 1 is live in the iOS app:

| Component | File | Role |
|-----------|------|------|
| Transport + UWB | Sources/Managers/ConstellationManager.swift | MultipeerConnectivity discovery, per-peer NISession ranging, wire protocol |
| Sound reconciliation | Sources/Managers/SharedSoundStore.swift | Label + GPS/range fusion; confirm badges; behind-you peer alerts |
| Caption relay | Sources/Managers/VoiceCaptionStore.swift | Remote caption ingest + translation |
| Egress | Sources/AudioEngine/AcousticCoordinator.swift | Pipeline events to map/HUD to mesh broadcast |
| Single-phone DSP | Sources/Physics/FFTProcessor.swift | GCC-PHAT TDOA, delay-and-sum beamforming |
| Detection pipeline | Sources/AudioEngine/AcousticProcessingPipeline.swift | ML classification, bearing, Doppler, GPS placement |
| DI wiring | Sources/AudioEngine/Core/DependencyContainer.swift | Auto-start when constellation_enabled + premium |

Phase 1 fusion is **metadata reconciliation** (same label, live, co-located in GPS). The file header in ConstellationManager.swift explicitly defers **acoustic bearing fusion / triangulation** to a later phase.

### What Phase 2+ adds

True distributed acoustic localization:

- Fuse per-device GCC-PHAT bearings with UWB-known geometry
- Ray intersection (2 phones), then TDOA multilateration (3+), then SRP-PHAT grid search
- Optional selective cross-phone audio/feature streaming for distributed beamforming
- Kalman/particle tracking over fused observations + Doppler
- Clock synchronization (UWB timing + waveform SRO)

### Safety invariants (non-negotiable)

Carried forward from SharedSoundStore:

1. **Additive only** — peer fusion never suppresses, gates, or delays local emergency alerts
2. **Relayed is not tracked** — peer-exclusive sources stay out of MapManager.processNewEvent unless promoted via an explicit fused layer with confidence thresholds
3. **Re-classify locally** — never trust wire category; use SoundProfile.classify
4. **Mesh opt-out** — respect SoundProfile.shareToMesh (e.g. music stays local)
5. **Premium + permissions** — keep constellation_enabled + AppGlobals.isPremiumActive gates

---

## Architecture

### Star topology (initial)

**Hub device**

- ConstellationManager: transport, UWB, wire
- SharedSoundStore: safety fusion, UI
- ConstellationFusionEngine: geometry + acoustic math
- AcousticCoordinator: ingest fused output to HUD

**Nodes** send MCSession metadata to the hub. Hub may request optional audio on high-interest events.

### Responsibility split

**Do not** convert ConstellationManager to a Swift actor. It is correctly an @MainActor NSObject hosting MCSession / NISession delegates. Add new Swift 6 actors for compute-heavy fusion.

| Layer | Type | Responsibility |
|-------|------|----------------|
| ConstellationManager | @MainActor class | Discovery, UWB, wire encode/decode, peer roster |
| SharedSoundStore | @MainActor class | Safety reconciliation, confirm badges, behind-you |
| ConstellationFusionEngine | actor | Geometry, ray intersection, multilateration, SRP-PHAT |
| ConstellationTracker | actor | Kalman/particle track over fused sources |
| FFTProcessor | Sendable | GCC-PHAT, beamforming, SRP-PHAT grid (vDSP) |
| ConstellationGeometry | Pure Swift | ENU transforms, bearing to world azimuth (unit-tested) |

### Hub election (v1)

- **Default hub:** lexicographically lowest VE-xxxx display name (reuses existing invite tiebreaker in ConstellationManager)
- Hub runs authoritative ConstellationFusionEngine.fuse() and may publish FusedSourceUpdate back to nodes
- For 2-phone field tests, symmetric local fusion is acceptable; hub-authoritative scales for 3+

---

## Wire Protocol

Existing 1-byte framing in ConstellationManager.Wire:

| Kind | Name | Status |
|------|------|--------|
| 0 | token | Done — NI discovery handshake |
| 1 | caption | Done — SharedCaption |
| 2 | event | Done — SharedSoundEvent |
| 3 | pose | Planned — PeerPose |
| 4 | fused | Planned — FusedSourceUpdate |
| 5 | feature | Planned — AcousticFeaturePacket |
| 6 | audio | Planned — compressed STFT chunk |

### New types

**PeerPose** fields: deviceID, lat, lon, headingDegrees (true north from MicrophoneManager), accuracyMeters, timestamp

**FusedSourceUpdate** fields: clusterKey, canonicalLabel, lat, lon, bearingDegrees, rangeMeters, confidence, contributingDevices, fusionMethod (rayIntersection / multilateration / srpPhat), isApproaching, timestamp

### Extended SharedSoundEvent fields

Add to existing SharedSoundEvent (backward-compatible decode):

- localBearingDegrees (device-relative TDOA bearing)
- compassBearingDegrees (true-north when GPS + heading valid)
- dopplerRate
- peakFrequencyHz
- captureTimestamp (audio frame time, not lastUpdateTime)

---

## Key Algorithms

Leverage existing FFTProcessor / vDSP / Accelerate stack:

| Algorithm | Method | Phase |
|-----------|--------|-------|
| GCC-PHAT TDOA | argmax of cross-correlation with PHAT weighting | Exists (single phone); extend pairwise |
| Bearing fusion | Ray intersection in ENU from compass bearings | Step 2 |
| TDOA multilateration | tau_ij from range difference / speed of sound + clock offsets | Step 4 |
| SRP-PHAT | Grid steered power map over ENU | Step 5 |
| Delay-and-sum / MVDR | N-mic beamforming at known positions | Step 7 |
| Tracking | Kalman filter over fused position + multi-angle Doppler | Step 6 |
| Clock sync | UWB timing + waveform SRO via correlation | Step 7+ |

---

## Implementation Steps

Work is organized into 8 PR-sized steps. Each step lists **goal**, **files to touch**, and **detailed activities**.

---

### Step 1 — Wire + Pose Foundation + Mesh HUD (in progress)

**Goal:** Richer metadata on the mesh without changing fusion logic yet. Every phone publishes its pose; sound events carry bearing, heading, and Doppler. **Acoustic HUD** shows live mesh debug at the **top** of the sonar panel.

**Implemented (2026-06-20):**

- Wire kinds: `telemetry=3`, `syncPing=7`, `syncPong=8`
- `MeshTelemetry` broadcast at 1 Hz (pose, heading, pitch/roll, GPS accuracy, battery, thermal, monotonic + wall clock)
- Controller election: lexicographically lowest `VE-xxxx` is CONTROLLER; others NODE
- Clock sync: hub NTP-style ping/pong every 3 s; offset + RTT on hub, offset estimate on nodes
- `ConstellationMeshHUDSection` at top of Acoustic HUD (orange dot = controller, cyan = node)
- Per-device stats: HDG, TILT, GPS accuracy, UWB dist/bearing/age, SYNC quality (OK / DRIFT / STALE / SOLO)

**Still TODO in Step 1:**

**Files:**

- Sources/Managers/ConstellationManager.swift
- Sources/Managers/SharedSoundStore.swift
- Sources/Managers/MicrophoneManager.swift
- Sources/AudioEngine/Core/Events/SoundEvent.swift (reference only; wire struct lives in ConstellationManager)

**Activities:**

- Add Wire.pose = 3 and PeerPose Codable struct
- Add sendPose and decode handler routing to fusion engine placeholder (no-op initially)
- In MicrophoneManager, start 1 Hz PeerPose broadcast when constellation is running and GPS fix is valid
- Extend SharedSoundEvent with localBearingDegrees, compassBearingDegrees, dopplerRate, peakFrequencyHz, captureTimestamp
- Update SharedSoundStore.broadcastIfNeeded() to populate new fields from SoundEvent + TrackedTarget + MicrophoneManager.currentHeading
- Ensure JSONDecoder tolerates missing new fields from older peers (backward compatibility)
- Add unit tests: PeerPose round-trip encode/decode; extended SharedSoundEvent with partial JSON
- Log pose + extended event fields at CONSTEL debug level for field validation

**Exit criteria:** Two phones on mismatched builds still connect; newer build sends pose + bearing; older build ignores unknown wire kinds gracefully.

---

### Step 2 — ConstellationGeometry + 2-Phone Ray Fusion

**Goal:** First measurable Constellation improvement — fused source position from two phones' bearing rays. Delivers refined map coordinates before any cross-phone audio.

**Files (new):**

- Sources/Constellation/ConstellationGeometry.swift
- Sources/Constellation/ConstellationFusionEngine.swift
- Sources/Constellation/FusedSource.swift

**Files (modify):**

- Sources/Managers/ConstellationManager.swift — feed peer poses + UWB into fusion engine
- Sources/Managers/SharedSoundStore.swift — call fusionEngine.ingestRemote on receive
- Sources/AudioEngine/AcousticCoordinator.swift — call fusionEngine.ingestLocal + fuse() on heartbeat
- Sources/AudioEngine/Core/DependencyContainer.swift — wire ConstellationFusionEngine
- Sources/Views/MapView.swift, ThreatHUD.swift, CaptionFeedView.swift — fused source layer
- VigilantEarTests/Constellation/RayIntersectionTests.swift

**Activities:**

- Create ConstellationGeometry with ENU frame anchored at hub GPS; worldAzimuth; rayFrom; intersectRays; micPosition when UWB available
- Create FusedSource model with FusionMethod enum (rayIntersection initially)
- Implement ConstellationFusionEngine actor: updateGeometry, ingestLocal, ingestRemote, fuse (cluster by label + time window; ray-intersect bearings; weight by confidence)
- Run fusion at 1 Hz from AcousticCoordinator heartbeat (not per audio frame)
- Add UI layer for fused sources — distinct from cyan relayed peer dots (e.g. violet fused styling)
- Keep SharedSoundStore safety path unchanged; fused layer is additive display
- Unit tests: known 2-phone geometry to expected lat/lon; parallel rays return nil intersection
- DEBUG log fusion confidence and method per cluster

**Exit criteria:** Two UWB iPhones hearing the same siren show a single fused dot closer to ground truth than either phone's solo GPS placement.

---

### Step 3 — Complete Phase 1 UX (Caption Merge)

**Goal:** Best-mic-per-speaker caption merge in the main caption UI. Improves the Constellation product in parallel with acoustic fusion; no DSP changes.

**Files:**

- Sources/Views/CaptionFeedView.swift
- Sources/Managers/VoiceCaptionStore.swift
- Sources/Managers/ConstellationManager.swift (reference — captions already wire correctly)

**Activities:**

- In CaptionGridModel.tick(), merge store.remoteCaptions using qualityFeet (closer mic wins per voice)
- Place remote caption rows by peer-reported bearing or compassBearing to peer GPS
- Update SpeakerCaptionListView.currentRows() to include remote rows with sourceName badge
- Handle voice-number namespace: sender's local voiceNumber keyed by sourceDeviceID
- Ensure remote captions respect translation pipeline in VoiceCaptionStore
- UI test: two phones, one closer to speaker — hub shows cleaner transcript with peer badge
- Document deferred scope: remote captions were intentionally excluded from grid in v1 (see CaptionFeedView comment)

**Exit criteria:** Live two-phone caption session shows best-mic text per speaker with peer attribution; no duplicate rows for same talker.

---

### Step 4 — 3-Phone TDOA Multilateration

**Goal:** Source position from known mic geometry and pairwise time-difference estimates when 3 or more phones are connected.

**Files:**

- Sources/Constellation/ConstellationGeometry.swift — extend
- Sources/Constellation/ConstellationFusionEngine.swift — add multilateration path
- Sources/Physics/FFTProcessor.swift — expose gccPhatDelay returning seconds

**Activities:**

- Refactor FFTProcessor.calculateTDOA to expose raw delay in seconds; bearing derivation stays separate
- Build full mic position graph from UWB edges + GPS poses in ENU
- v1 TDOA proxy: derive tau_ij from difference in reported range + bearing cones (metadata-only, no cross-phone audio)
- Implement nonlinear least-squares solver for source position and clock offsets (Accelerate or simd)
- Add FusionMethod.multilateration; prefer over ray intersection when 3+ constraints and solver converges
- Hub publishes FusedSourceUpdate via Wire.fused = 4 for nodes to display without re-solving
- Unit tests: synthetic tau_ij for known source — recovered position within tolerance
- Field test script: 3 phones in triangle, stationary siren source

**Exit criteria:** 3-phone configuration produces fused position with lower variance than 2-phone ray intersection.

---

### Step 5 — SRP-PHAT Grid Search

**Goal:** Coarse grid-based steered power mapping for low-frequency sources where single-phone TDOA is weak.

**Files:**

- Sources/Physics/FFTProcessor.swift — or new Sources/Constellation/SRPPhatEngine.swift
- Sources/Constellation/ConstellationFusionEngine.swift

**Activities:**

- Implement srpPhatGrid: coarse ENU grid (e.g. 2 m cells, 200 m radius); score each cell with steered GCC-PHAT power across all mic pairs
- Pre-allocate GCC buffers at engine init; target under 5 ms on A17 for coarse grid
- Integrate into fuse(): use SRP-PHAT when bearing rays disagree or frequency is below TDOA reliable band
- Add FusionMethod.srpPhat to FusedSource and wire update
- Unit tests: simulated delayed source at known grid cell — peak within one cell
- Profile CPU on oldest supported UWB device (iPhone 11)

**Exit criteria:** Low-frequency test tone localizes via SRP-PHAT when stereo TDOA on one phone is ambiguous.

---

### Step 6 — ConstellationTracker (Kalman + Doppler Fusion)

**Goal:** Smooth fused source tracks over time; combine multi-angle Doppler for approach/recede detection.

**Files (new):**

- Sources/Constellation/ConstellationTracker.swift

**Files (modify):**

- Sources/Constellation/ConstellationFusionEngine.swift — feed tracker
- Sources/AudioEngine/AcousticProcessingPipeline.swift — optional bearing hint subscription
- Sources/Views/ThreatMarker.swift — fused track chevrons

**Activities:**

- Implement Kalman filter state [x, y, vx, vy] in ENU
- Observation model: fused position + bearing from FusedSource
- Incorporate per-device dopplerRate as pseudo-velocity observation; vote across contributors
- Output TrackedFusedSource with smoothed coordinate, velocity, isApproaching
- Optional: subscribe local TrackedTarget to hub fused hints for bearing EMA refinement (display only)
- Unit tests: synthetic track with noise — filtered path within bounds
- Preserve safety invariant: tracker never suppresses local emergency path

**Exit criteria:** Moving siren shows stable fused track with correct approach chevrons across handoffs between contributing phones.

---

### Step 7 — Selective Audio / Feature Streaming

**Goal:** On-demand cross-phone acoustic data for distributed beamforming on high-interest alert-class events only.

**Files:**

- Sources/Managers/ConstellationManager.swift — Wire.feature = 5, Wire.audio = 6
- Sources/AudioEngine/AcousticEngine.swift — capture window on hub request
- Sources/Physics/FFTProcessor.swift — N-mic delayAndSumBeamform / MVDR
- Sources/Constellation/ConstellationFusionEngine.swift — trigger conditions

**Activities:**

- Define AcousticFeaturePacket: band-limited GCC vector or STFT magnitude snapshot (~KB, not PCM stream)
- Hub trigger: alert-class, fusion confidence above threshold, 2+ peers, source persists N seconds
- Node: capture 1–2 s window from AcousticEngine tap on request; send via reliable MC data
- Generalize delayAndSumBeamform to N microphones at known ENU positions
- Optional MVDR for SNR gain when 3+ mics and geometry is well-conditioned
- Bandwidth guard: max 1 feature request per source per 10 s; never stream music/speech profiles
- Privacy: raw audio never leaves device unless user has constellation enabled + premium
- Implement waveform SRO estimation for clock refinement (joint with position solve)

**Exit criteria:** High-interest siren event triggers one-shot feature exchange; hub SNR on fused bearing improves measurably vs metadata-only fusion.

---

### Step 8 — Simulation + Field Harness

**Goal:** Develop and tune Constellation algorithms without requiring two physical phones for every iteration.

**Files:**

- Sources/Simulators/ConstellationSimulator.swift (new)
- Sources/Simulators/DebugSimulationManager.swift
- ../VigilantEar/docs/REAL_WORLD_TEST_1PAGER.md (field script update)

**Activities:**

- ConstellationSimulator: inject fake PeerPose, SharedSoundEvent, and UWB ranges into ConstellationFusionEngine + SharedSoundStore without MCSession
- Scenarios: 2-phone siren at known offset; 3-phone triangle; occlusion (one phone low confidence); same-label distinct emergencies 40 m apart
- DEBUG UI toggle in DebugSimulationManager or Preferences debug panel
- Extend ThreatSimulator with optional virtual peer mode that feeds fusion engine
- Write field test checklist: hardware (2x iPhone 11+ UWB), positions, expected fused vs solo bearing variance
- Log export: fusion method, confidence, contributing devices per cluster for post-field analysis

**Exit criteria:** All fusion methods (ray, multilateration, SRP-PHAT) pass simulator scenarios; field checklist ready for two-phone validation.

---

## Data Flow (Target State)

1. AVAudioEngine tap to AcousticProcessingPipeline (GCC-PHAT bearing, ML, Doppler, GPS)
2. AcousticCoordinator.ingest to MapManager (local targets) and SharedSoundStore.broadcastIfNeeded
3. ConstellationManager sends over MCSession to peers
4. Peers: SharedSoundStore.ingestRemote (safety) and ConstellationFusionEngine.ingestRemote
5. MicrophoneManager publishes pose at 1 Hz to ConstellationManager and fusion engine geometry update
6. Heartbeat at 1 Hz: ConstellationFusionEngine.fuse to Map / Sonar HUD / Direction Ring
7. Hub optionally broadcasts fused updates back to nodes

---

## File Index (Planned Additions)

**New Sources/Constellation/**

- ConstellationGeometry.swift
- ConstellationFusionEngine.swift
- ConstellationTracker.swift
- FusedSource.swift
- SRPPhatEngine.swift (optional split from FFTProcessor)

**New Sources/Simulators/**

- ConstellationSimulator.swift

**Modify**

- Sources/Managers/ConstellationManager.swift (extend wire + feed fusion)

**New VigilantEarTests/Constellation/**

- ConstellationGeometryTests.swift
- RayIntersectionTests.swift
- MultilaterationTests.swift

---

## Performance and Concurrency

- **Hot path in actors:** AcousticProcessingPipeline, ConstellationFusionEngine, ConstellationTracker
- **MainActor for UI:** ConstellationManager, SharedSoundStore, AcousticCoordinator
- **Fusion budget:** 1 Hz on heartbeat; cache mic positions between UWB updates (~10 Hz)
- **Memory:** Pre-allocate SRP-PHAT grid + GCC buffers at engine init

---

## Out of Scope

- Android Constellation (no UWB/NI stack wired)
- Multi-hop mesh (stay direct-peer / star)
- Continuous raw audio mesh (selective on-demand only)
- Replacing SharedSoundStore (it remains the safety/display reconciliation layer)

---

## Suggested First Sprint (~2 weeks)

| Day | Work |
|-----|------|
| 1 | Step 1 — wire + pose foundation |
| 2–4 | Step 2 — geometry + 2-phone ray fusion + simulator stub |
| 5 | Step 8 (partial) — basic ConstellationSimulator for ray tests |
| 6–7 | Field test with 2 UWB iPhones; tune fusion confidence thresholds |
| Parallel | Step 3 — caption merge (independent UX track) |

---

## References

- WASN literature: TDOA localization, adaptive GCC-PHAT, SRP-PHAT steered response
- In-repo: FFTProcessor.swift (GCC-PHAT), AcousticProcessingPipeline.swift (bearing + Doppler), ConstellationManager.swift (mesh transport), SharedSoundStore.swift (safety fusion)
- Existing compass helper: compassBearing(from:to:) in TrackedTarget.swift