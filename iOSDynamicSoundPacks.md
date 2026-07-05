# Dynamic Sound Packs — Design Doc (v1)

*Vigilant Ear · drafted 2026-07-02 · status: design only, targets 1.0.8/2.0*

## The idea in one sentence

Let new sound-recognition capability be **added to a running app** — installable classifier packs and user-taught sounds that run *alongside* Apple's built-in ~300-class model, feeding the same alert pipeline, without an app update.

## Why

- **Personal sounds**: no global model knows *your* doorbell, *your* kettle, *your* building's weird hallway buzzer. For a Deaf user these are exactly the sounds that matter daily.
- **Vertical & Industrial packs**: institutions can author domain packs — e.g., a **factory pack** that detects malfunctioning equipment, or an **aviation pack** that classifies aircraft types by engine signature. Users can easily import these packs natively via the iOS Files app.
- **Inactive Built-ins**: The app could ship with several bundled niche models that are inactive by default to save memory, allowing users to just check them off to activate.
- **Coverage gaps**: Apple's classifier is broad but generic; it says "siren" where a pack can say "ambulance (EU two-tone), approaching."

## What we already have (the seams this design plugs into)

1. **`NativeAudioAnalyzer`** — one `SNAudioStreamAnalyzer` fed per-buffer, currently hosting a single `SNClassifySoundRequest(classifierIdentifier: .version1)`. SoundAnalysis **natively supports multiple requests on one analyzer**.
2. **`SoundProfiles.json` registry** — every class's behavior is already *data*.
3. **Voiceprint pattern** — embedder → cosine threshold → anti-churn hysteresis, already shipped for Speaker Mode.
4. **Energy discipline** — broadband energy gate, duty cycling, ANE preference.

## Architecture

### Layer 1 — Multi-request classifier host

`NativeAudioAnalyzer` grows from "the request" to "a request set":

```
[.version1 (always)] + [Active Sound Pack] + [few-shot matcher]
```

- Each added request wraps a compiled `MLModel` via `SNClassifySoundRequest(mlModel:)`.
- **Cap: built-in + at most ONE extra neural model resident at a time.** Because packs share a single execution slot, the UI enforces this via a mutually exclusive selector (e.g., radio buttons or checkmarks).

### Layer 2 — Sound Packs (file import, versioned)

A pack is a single `.zip` archive:

```
pack.json            manifest: id, name, version, author, class list
model.mlpackage      Core ML classifier (Create ML MLSoundClassifier or converted head)
profiles.json        SoundProfiles fragment — one entry per class
```

Client flow: user selects `.zip` via `UIDocumentPickerViewController` → app extracts `.mlpackage` → `MLModel.compileModel(at:)` → cache compiled `.mlmodelc` in Application Support → attach request. "Delete pack" removes model + registry fragment.

**App Review Safety**: Treating custom packs as documents loaded via standard iOS file pickers (rather than an in-app URL downloader) ensures we comply with App Review Guideline 2.5.2. We are simply processing a user-provided document file, avoiding any appearance of a hidden marketplace or unreviewed code execution.

### Layer 3 — Few-shot user-taught sounds ("Teach Vigilant Ear")

- Bundle a small general **audio embedding model** (~1–4 MB).
- Teach flow: user records 3–5 short samples of the target sound.
- Runtime: embed incoming audio windows, cosine-match against taught exemplars.

## Arbitration & calibration (the honest 20%)

- **Per-source thresholds.** Confidences are NOT comparable across models. Never apply built-in thresholds to pack outputs.
- **Specific beats generic.** Manifest declares `refines: ["siren"]` style mappings.
- **No cross-model vetoes.** A pack can add and refine; it can never suppress a built-in detection.

## Licensing & gating — "Bring Your Own Model" (BYOM) via File Import

We explicitly want to support dynamic, third-party models (like factories or hobbyists) without writing complex networking code or risking App Review flags.

- **iOS Files Integration**: Users obtain the `.zip` pack via Safari, Mail, AirDrop, etc. In the app, they tap "Import Custom Pack" and select it using the native iOS `UIDocumentPickerViewController`. 
- **Trust Boundary**: When loading a pack from a custom file, the UI presents a clear warning that this model is third-party and unverified. 
- **Curated / Built-in Gallery**: Alongside BYOM file imports, we can offer a gallery of our own pre-trained, optional models that the user can activate from a list.

## Safety rules (non-non-negotiable)

1. **Namespacing**: pack classes live under `pack.<id>.<class>` — a pack cannot shadow or overwrite a built-in class's registry entry.
2. **Emergency tier is capped**: Custom BYOM packs cannot trigger red-ring emergency theater. Only built-in/curated packs can do this.
3. **Integrity**: ZIP extraction check and compile validation.

## Energy budget

- Second model runs **behind the broadband energy gate** and at **half cadence**.
- Compute units pinned to ANE (`MLModelConfiguration.computeUnits = .cpuAndNeuralEngine`).

## Phasing

- **P0 (spike)**: second hardcoded `SNClassifySoundRequest(mlModel:)` behind a DEBUG flag; measure energy.
- **P1**: `.zip` pack format, `UIDocumentPickerViewController` integration, unzipper, model compiler, settings UI with mutually exclusive active pack selection. Support BYOM file import.
- **P2**: Teach-a-sound (embedder, teach flow UI).
- **P3**: Android parity (ONNX format).
