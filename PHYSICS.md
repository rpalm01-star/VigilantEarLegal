# Vigilant Ear — Physics

*Engineering notes on the acoustics and sensing behind direction, distance, motion, multi-phone
fusion, and barometric detection. This is not a peer-reviewed paper; it is the measurement record
behind the product claims. Every figure is tagged by provenance:*

| Tag | Meaning |
|---|---|
| **MEASURED** | On device (“on glass”), with an independent truth (tape, dual-phone coincidence, …) |
| **BENCHED** | Simulated room or synthetic stream with known ground truth |
| **MODELLED** | Physics estimate or design threshold, not yet checked against a field recording |

*Last revised 2026-09-06. Internal protocols (field census, room-breach design, Sentinel ledger)
live in the Vigilant Ear engineering tree; they are cited by name where a recipe matters.*

---

## 0. Summary

A phone is a two-microphone instrument with a barometer, an accelerometer, and a clock. Along the
phone’s long axis the primary acoustic observable is the **inter-microphone arrival lag** τ. Under
a far-field plane-wave model that lag maps to an off-broadside angle θ via τ = (d/c) sin θ, which
gives *how far off the mic axis* a source is and *whether it is ahead or behind*. A two-element
array cannot resolve left from right (the cone of confusion); a second phone can. Loudness yields
only an *estimate* of distance — calibrated on a measured street and presented as such. A sustained
loudness trend yields “approaching / receding.” The barometer sees a door as a bipolar pressure
signature that building HVAC does not mimic. Claims below were accepted only after a tape measure
or a simulated room with known geometry said so.

---

## 1. The capture chain — what the microphones actually deliver

| Fact | Value | Status |
|---|---|---|
| Sample rate | 48 kHz (session preferred; read back after activation) | MEASURED |
| Buffer | 4096 frames (85.3 ms) per tap callback; the FFT size everywhere | code |
| ML front end | 16 kHz downsample; classifiers are blind above 8 kHz | code |
| Two-channel input | Apple's `.stereo` polar pattern on the built-in array, session mode `.videoRecording`, data source "Front" | MEASURED 2026-09-06 |
| `.measurement` mode | drops to one channel (Bottom, omnidirectional) — **there is no raw two-mic capture on iPhone** | MEASURED 2026-09-06 |
| Stereo input orientation | **pinned to landscape-left** (`AVAudioStereoOrientation` raw 4). iOS's implicit default was landscape-right (raw 3) | MEASURED 2026-09-06 |

**The stereo pair is a synthesized image, not two raw microphones.** Apple builds a left/right
image from the microphone array. In landscape orientation the image's left/right axis is the
phone's *long* side, so the inter-channel delay is the physical top-to-bottom delay — usable. In
portrait the image is a constant inter-channel processing delay with no directional content (it
read the same sign on two mirrored phones). In landscape the two channels also share a broadband
common component that plants a correlation spike at zero lag in roughly 80 % of frames; §2.4 is
the rule that handles it. The Python room simulator renders two *physical* microphones and cannot
reproduce any of this; it is a platform behavior, verified only on glass.

The orientation enum is a trap: `AVAudioStereoOrientation` numbers LandscapeRight = 3 and
LandscapeLeft = 4, the reverse of `UIDeviceOrientation`. The session log line
`MIC_PROBE SESSION mode=… inputOrientation=4 … polar=Stereo channels=2` is the proof on every
launch; anything else means direction is wrong before any algorithm runs.

---

## 2. Direction

### 2.1 What a two-microphone pair measures

Two microphones separated by baseline *d* see a far-field source with arrival lag
τ = (d / c)·sin θ, where θ is the angle from **broadside** (the plane perpendicular to the
baseline), c = 343 m/s, and the far-field / plane-wave assumption is implicit in the sine law.
For the iPhone pair, *d* is the phone’s long-axis mic spacing:

| Model | identifier | baseline *d* |
|---|---|---|
| iPhone 17 | iPhone18,3 | 0.1496 m (measured on the test phone) |
| iPhone 16 Pro Max | iPhone17,2 | 0.1630 m |
| iPhone 16 Pro / 16 / 16 Plus | 17,1 / 17,3 / 17,4 | 0.1496 / 0.1476 / 0.1609 m |
| unknown iPhone | — | 0.145 m (generic) |

At 48 kHz the maximum delay is ±21 samples (±437 µs on a 0.15 m pair). One sample of delay is
about 2.7° near broadside and much coarser toward the axis, because asin steepens; quadratic
interpolation of the correlation peak gives sub-sample resolution.

**Geometry.** Ahead or behind along the long axis is *endfire*: |θ| → 90°, maximum |τ|.
Straight out the long side is *broadside*: θ = 0, τ = 0. The sign of τ says which microphone leads —
**ahead versus behind** — and nothing about left versus right: sources at +50° and −50° about the
axis produce identical lags. That cone of confusion is fundamental to any two-element array, not a
tuning defect.

### 2.2 The estimator — coherence-weighted, frame-averaged GCC-PHAT

Implementation: `FFTProcessor.calculateTDOA`, continuously warmed by `accumulateTDOA` on every
stereo buffer (so the average is already settled when a detection asks for a bearing).

1. **FFT** both channels at N = 4096 (unwindowed in the TDOA path — the Hann window is used only
   on the magnitude analyzer). Form the cross-spectrum S_xy = L · conj(R) and the auto-spectra
   S_xx, S_yy. Recursively average with effective length ≈ 6 buffers (≈ 0.5 s at 48 kHz / 4096);
   reset after a ≥ 1 s gap.
2. **Weight and PHAT-normalize.** Per bin, magnitude-squared coherence
   γ² = |S_xy|² / (S_xx · S_yy) is near 1 for shared direct-path energy and near 0 where
   reverberation or noise decorrelates the channels. Apply weight γ² and PHAT (unit magnitude,
   phase only).
3. **Band-limit.** Zero bins above **8 kHz**, and DC / Nyquist. Inverse FFT → lag domain.
4. **Peak pick.** Search the physical lag window ±⌈d/c · f_s⌉ (+1 sample for the quadratic
   neighbourhood), apply the zero-lag competitor rule (§2.4), refine the peak quadratically, map
   τ → θ = arcsin(c τ / d) with the product’s sign convention.

**Why 8 kHz.** A PHAT main lobe is roughly f_s / (2 · f_cutoff) samples wide. At a 1.2 kHz cutoff
that is ≈ 20 samples — comparable to the entire ±21-sample lag range of a 0.15 m pair at 48 kHz —
so the peak was as wide as the answer space. Lag-domain GCC has no spatial-aliasing limit of the
kind that constrains *phase-difference* methods; reverberant high-frequency bins are attenuated by
coherence rather than hard-discarded.

**Bench** (`scripts/bench_tdoa.py`, 2026-09-05): pyroomacoustics shoebox; one 0.15 m pair on a
table; real speech fixtures; source at 0°/20°/40°/60° and 1.0/2.5 m; RT60 ∈ {0.2, 0.5, 0.8} s;
SNR ∈ {20, 5} dB; four corner noise sources. Truth is the **geometric path-length difference**
through the sine law (not a compass bearing — at 1 m those two differ by ≈ 3°).

Ablation on the RT60 0.5 s / 10 dB subset (median / 90th percentile / fraction of frames within 10°):

| Estimator | med | p90 | within 10° |
|---|---|---|---|
| Shipped previously (1.2 kHz, single frame) | 16.6° | 25° | 41% |
| Low-pass → 8 kHz only | 3.7° | 36° | 56% |
| + average over 6 buffers | 1.2° | 14° | 81% |
| + coherence weight γ² (β = 1) — **shipped** | 1.4° | 7° | 79% |
| + onset / precedence gate | 1.2° | 7° | 74% |

The onset gate was **not** shipped: once coherence weighting was present it measured neutral to
slightly negative. Full grid (96 scenes): previous estimator median 10.2° / p90 26.8° / within-10°
46%; shipped estimator **0.9° / 3.7° / 77%**. Residual failure mode: RT60 0.8 s at high SNR (quiet
noise floor), where reflections remain coherent enough to compete (p90 still large on that cell).

### 2.3 Measured on glass

Rig (2026-09-05/06): a 14" MacBook Pro's speaker grille, one channel only, each phone flat in
portrait with its top toward the Mac, taped from the grille's center to the phone's top edge and to
its charging-port center. Truth is the path-length difference, immune to the baseline constant.

| Phone | tape: top / port | Δd | expected θ | census median θ | scatter (IQR) | Δd read |
|---|---|---|---|---|---|---|
| 17 | 19.0" / 22.5" | 88.9 mm | 37.8° | 39.8° | **0.6°** | +3.9 mm |
| 16 Pro Max | 19.0" / 21.5" | 63.5 mm | 23.4° | 32.2° | **1.5°** | +21.8 mm |

Usable frames 189/200 and 188/195 respectively at four readings per second. The census logs the
estimator output directly (no additional 25 s median). Per-window scatter is well under the 10°
graduation bar set for this work (IQR 0.6° / 1.5°). Remaining open items for a marked-angle day:
absolute bias (mic acoustic centers are not the chassis points the tape was pulled to — larger on
the 16 Pro Max) and a full per-device map of front/back sign beyond the two test phones
(MeasurementDay protocol).

### 2.4 The zero-lag competitor rule

Because Apple's image carries a common component, the correlation often shows a sharp spike at lag
0 *beside* the true peak (on the 17: true peak at lag −14, median 0.79× the spike's height, present
in 80 % of frames). Rule: when lag 0 (or ±1) wins but a **separate local maximum at |lag| ≥ 3
samples** reaches ≥ 0.6× its height, that peak is the bearing. It must be a separate maximum; the
main lobe at 8 kHz is ~3 samples wide, so "best value at |lag| ≥ 2" sat on a broadside source's own
shoulder and misfired.

Measured effect: zero-degree frames 80 % → 2 % on the 17, 37 % → 1 % on the 16, with the true lock
unchanged. Cost, benched on genuinely broadside sources: no misfires in a dry room (RT60 0.2 s),
about 10 % of frames at RT60 0.5 s / 10 dB, worse in a wet room — a reflection can pass 0.6×. No
height-only test separates that case; a real broadside point is an open measurement.

### 2.5 The frame — from side angle to azimuth, honestly

`BearingGeometry.azimuths(sideAngle:frontWhenNegative:)`:

- off-axis angle from the forward direction: α = 90° − |θ|
- front or back: the sign of θ, through a per-device calibration `tdoaFrontWhenNegative`
  (17: negative = ahead; 16 Pro Max: positive = ahead — measured on the rig; the two phones map
  Apple's image onto the channels oppositely)
- azimuth candidates: **primary** = α (front) or 180° − α (behind) on the right side;
  **mirror** = −primary on the left. Both are published; `SoundEvent.bearingSideAmbiguous` says so.

Every surface honors the ambiguity: the direction ring, the map and the AR view draw the mirror
as a 35 %-opacity ghost; the watch and Live Activity draw a faint second arrow; Standing Watch says
*ahead / behind / beside you*; the alert title does the same. Device proof (2026-09-06, baby-cry
fixture through the right grille at the 17): raw θ −38.8° → published azimuth 51.2° against a
taped 44–50°; banner "Baby Crying — beside you".

### 2.6 Two phones settle the side

`ConstellationFusionEngine.intersectPair` tries every candidate ray pair — up to four when both
phones are ambiguous — keeps the forward crossings under an 80 m residual cap, and scores each by
agreement with the two phones' own loudness distance estimates, residual as tie-breaker. The
winning side is reported per device (`FusedSource.mirrorChosenByDevice`) and the coordinator flips
that phone's local event to the resolved side: ghost gone, left/right allowed again. Unit-tested on
a 40 m baseline with a source 50 m away (fix within 2 m, correct side chosen whether the published
guess was right or wrong); not yet field-run (needs both phones and an off-axis source).

---

## 3. Distance

### 3.1 The model

A single microphone cannot recover absolute distance: level says how loud a sound is *here*, and
turning that into metres requires assuming how loud it is *there*. The app's estimate is exactly
that assumption, fitted:

    ratio = (distanceCeiling − peak) / (distanceCeiling − ambientFloor)
    range = max(minEst, ratio^power × maxRange)   # reported in profile units (ft in US builds)

with power = 2.5 (3.2 for vehicles) and maxRange / distanceCeiling per sound profile. Loud and
close → small ratio → near; faint → ratio → 1 → far. Replacing the power law with a literal
inverse-square free-field model would change the fit coefficients, not the epistemology: level
still underdetermines range without a source-level prior.

### 3.2 Calibration (MEASURED, Coronado, June 2026)

A measured intersection cross-section — 8′ parking + 12′ + 12′ near lanes + 35′ median +
12′ + 12′ far lanes + 8′ ≈ 99′, moving cars at 14 / 26 / 73 / 85 ft — set the car profile to
`maxRange` 140 ft with `power` 3.2. Replaying 1131 field car peaks through it: median 46 ft, far
lanes 78/87 ft (real 73/85), 73 % of cars inside the 100 ft road. Near lanes compress to 10–13 ft
(real 14–26): it errs *close*, the safe direction. Honest limit: a loud truck at 26 ft out-peaks a
quiet sedan at 14 ft — right on average, not per car. That value is now locked by a unit test.

### 3.3 Presentation

The figure is an estimate and is shown as one (`DistanceEstimate`): a leading "≈", coarse rounding
(1/5/10 m or 5/10/50 ft tiers), locale units, and where there is room the band the true distance
most likely sits in — ×2 for vehicles (the calibration's own scatter), ×2.5 for road-going sirens
(no field anchor beyond one fire engine at ~55 ft), ×1.5 for close speech, ×2 for music. In-space
alarms (smoke alarm, doorbell) pin their peak to the ceiling by design so they plot "next to you";
they carry no quotable distance at all. The sonar rings are **signal strength**, not distance — a
deliberate product decision, unchanged.

---

## 4. Motion — "approaching"

For cars and sirens, a sustained rise in level is treated as closing range (and a fall as
opening), not a Doppler-frequency tracker — the earlier peak-frequency “Doppler” path was removed
after it proved unstable on real sirens. `ApproachTrendTracker` takes the same peak level the
distance model reads, converts to dB, and fits a least-squares slope over a 4 s window.

Approaching requires slope ≥ +1.5 dB/s **and** ≥ +3 dB end-to-end (three-frame medians at each end,
so a single horn tap cannot fire); receding is the mirror. A decision holds 4 s past its last
threshold crossing, then releases — a parked idle does not keep reading as motion.

Threshold motivation (MODELLED, free-field 1/r): a vehicle at 15 m/s closing 60→30 m gains 6 dB in
2 s (3 dB/s); 100→50 m gains 6 dB in ≈ 3.3 s (≈ 1.8 dB/s). Idle and traffic hum typically wobble
±2 dB without a sustained slope. Nine synthetic unit tests pin the shape. **Not yet MEASURED:** no
street pass-by recording has been replayed through the tracker. The signal feeds Sentinel’s
MOTION_WITNESS and FAINT_SIREN_MOTION rules.

---

## 5. Multi-phone fusion (Constellation)

Two or more phones on a local mesh (Network.framework, no internet) share each sound's bearing,
distance estimate and their own GPS pose at 1 Hz. Fusion is **bearings-only triangulation**: each
phone's true-north ray (compass heading + phone-relative azimuth) is intersected with the others'.

| Fact | Value | Status |
|---|---|---|
| Baseline | GPS positions; length rescaled to the UWB range when phones are within ~9 m | MEASURED |
| UWB direction | never available on the 16/17 lying flat (NearbyInteraction reports nil; rear-camera cone points into the table) — UWB is **length only** | MEASURED (48,195 updates, 0 with direction) |
| Two-ray residual | structurally 0 in 2D — becomes meaningful at 3+ phones | geometry |
| Confidence | noisy-OR of every co-hearing phone's detection confidence × geometry × GPS accuracy × residual | code |
| Field | Coronado 2026-06-21: 127/134 crossings fused at ~11 m spacing; bearings steady, single-phone range the bottleneck | MEASURED |

The side tie-break (§2.6) is the newest piece and turns the single-phone ambiguity into an asset:
two mirrored pairs cross consistently at only one of four candidates.

---

## 6. Barometer and infrasound

### 6.1 The sensors

`CMAltimeter` pressure at ~1 Hz in **kilopascals** (1 Pa ≈ 8 cm of altitude); accelerometer and
gyroscope at 100 Hz; the microphone's 0.5–40 Hz sub-band. The lab runs unconditionally to arm a
USGS earthquake poll burst on ground onsets; USGS makes the claim, the phone never does.

### 6.2 What 14 hours of quiet look like (MEASURED 2026-09-05→06, both phones, ~47 000 samples)

| quiet drift | p50 | p95 | p99 | max |
|---|---|---|---|---|
| rate, 1 s, Pa/s | 0.021 | 0.078 | 0.12 | 0.55 |
| deviation from slow baseline, Pa | 2.8 | 6.9 | 7.6 | 8.0 |

Eight pressure episodes overnight, **all eight paired across the two phones** within a minute, same
sign, peaks within half a pascal, lasting up to 7.5 minutes at 0.11–0.46 Pa/s: the air conditioning.
A building-wide event is identical on every phone in the building; a room event is not.

### 6.3 What a door looks like (MEASURED 2026-09-06, front door 14 ft, both phones)

| event | rate peak, Pa/s | pressure swing | signature |
|---|---|---|---|
| normal open + close, ×10 | 0.6–1.8 (median ~1.0) | 1.2–4.1 Pa | **bipolar pair**: open spike, then close spike of opposite sign ~5 s later |
| hard slam, ×5 | 1.1–2.5 (median ~1.5) | 4–6.2 Pa | same pair, taller |
| walk past the desk, sneeze | none | none | motion veto fires (0.02–0.06 g) |
| screen door open 2.5 min | none | slow +1.2 Pa drift | invisible — an unsealed aperture |

Doors sit 5–15× above the quiet floor and above every AC episode in **rate**; in **level** they never
reach 8 Pa while the AC reaches 16. A rate gate near 0.4–0.5 Pa/s with a ≥1 Pa swing, ideally
requiring the bipolar pair, passes every door measured and nothing the night produced. Two-phone
coincidence labels building-wide events; it is a measurement instrument, not a product requirement
— the detector must work on one phone in one bedroom.

### 6.4 Ground → air ranging

A ground arrival on the accelerometer followed by an air arrival at the microphone or barometer
from the same event gives a range from the two-speed geometry: Δt × 1/(1/343 − 1/5000) ≈ 368 m/s
of Δt, assuming a 5 km/s crustal wave (real 2–6 km/s — a labelled guess). Shown only in the
developer bench; no user surface prints a kilometre figure.

### 6.5 What ships and what is dark

"Deep rumbles" (default on): non-local onsets above an STA/LTA of 7 bloom on the map with honest
copy ("door slams, heavy bass, distant impacts, pressure changes"). Room Breach (a night-time
door-plus-pressure conjunction) stays shadow-only until the rate/pair gate exists in code and a
second, leakier room is measured. The instrument for both is the `BARO_TRACE` line and
`scripts/baro_trace_report.py`.

---

## 7. Ultrasonic (shelved)

Near-ultrasound signalling at 18–20.5 kHz (Nyquist is fine at 48 kHz) was built, field-decoded
through music, and shelved: phone speakers and microphones are weak and inconsistent there,
teenagers hear 18–19 kHz, cymbals leak into the band, and hearing aids can frequency-lower it. The
code stays behind a compile-time kill switch.

---

## 8. Owned hardware — the mic bar

Everything in §1–2 is bounded by Apple's synthesized image. A clip-on bar for the iPad with two
ICS-43434 capsules on a rigid **163 mm** baseline (an RP2040 speaking USB audio) escapes it: real
microphones, known geometry, ±1–2° with sub-sample interpolation, and a third capsule 9 mm off the
line breaks the front/back cone for full 360°. Rev-A boards are ordered; acceptance is the same
tape-measure protocol as the phone.

---

## 9. How things get believed here

The judge stack, in order of trust:

1. **Simulation with truth** — `scripts/bench_tdoa.py` (rooms) and `scripts/room_sim.py`
   (multi-phone scenes). Truth is a path-length difference or a coordinate, never a compass guess.
2. **Shape tests** — unit tests that synthesise the failure being fixed (a common component at
   zero lag; a +15 dB spike in a flat stream; a door-like bipolar pair) so a regression cannot be
   silent. Suites: `FFTProcessorTests`, `BearingGeometryTests`, `ApproachTrendTrackerTests`,
   `DistanceEstimateTests`, `ConstellationFusionSideTests`, `StandingWatchCoreTests`.
3. **Glass** — the phone, a tape measure, and an instrument that logs the raw quantity:
   `t1TdoaCensus` (raw side angle `b=`, published azimuth `az=`, four per second), `BARO_TRACE`
   (pressure, deviation, 1 s and 3 s rates, motion, veto verdict, one per second), `sonar.events`
   (what the HUD is showing), all armed over the USB command channel.

**Open items** (each has a measurement recipe; none is papered over):

- Absolute bearing bias vs. true mic acoustic centers (glass residual on the 16 Pro Max).
- Front/back sign map on devices beyond the two test phones.
- Genuinely broadside sources in reverberant rooms (zero-lag rule false-positive rate).
- Constellation side tie-break on glass with two phones and an off-axis source.
- Street pass-by replay through `ApproachTrendTracker`.
- Door rate/pair gate in product code, plus a second, leakier room for Room Breach.

---

## 10. Glossary

**TDOA** — Time Difference of Arrival between two microphones. **GCC-PHAT** — generalized
cross-correlation with phase transform: cross-spectrum normalized to unit magnitude so every
frequency contributes phase, not level, to the delay estimate. **Coherence (γ²)** —
magnitude-squared coherence; fraction of power at a frequency shared by the two channels (a
direct-path / shared-component detector). **Endfire / broadside** — along the microphone baseline /
perpendicular to it. **Cone of confusion** — directions a two-element array cannot distinguish
(mirror images about the baseline). **RT60** — time for reverberant energy to decay 60 dB.
**STA/LTA** — short-term / long-term average ratio (onset detector). **Bipolar pair** — door
open/close pressure signature (opposite-sign peaks seconds apart). **UWB** — ultra-wideband
ranging between phones (length; direction unavailable for the flat-on-table 16/17 geometry).
