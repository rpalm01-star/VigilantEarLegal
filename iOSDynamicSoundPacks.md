# Custom Sound Packs — How to Build and Import Your Own

Vigilant Ear can learn new sounds. A **custom sound pack** teaches the app to recognize sounds Apple's built-in detector doesn't know — your local birds, a specific machine at work, your building's odd hallway buzzer. You train a small model on a Mac (no coding required), zip it up with two small text files, and import it on your iPhone.

Custom packs **stack on top of** the built-in detector. Turning a pack on never turns anything else off — sirens, alarms, and every other safety sound keep working exactly as before.

**You'll need:** a Mac with Xcode's **Create ML** app (free), audio recordings of your sounds, and Power Pack+ on your iPhone (the free trial counts).

---

## Step 1 — Gather training audio

Make a folder for each sound you want recognized, named for that sound, and fill it with example recordings:

```
TrainingData/
  Mourning_Dove/        ← 20+ clips of mourning doves
  House_Finch/          ← 20+ clips of house finches
  Background/           ← 20+ clips of your ambient environment WITHOUT the sounds
```

Tips that make a real difference:

- **Always include a `Background` class.** The model must label every moment of audio as *something* — without a background class, silence and street noise get shoved into your real classes and you'll see false alerts. Record the places you'll actually use the pack: your yard, your shop floor, your kitchen.
- **Folder names become the labels** the app shows (underscores turn into spaces: `Mourning_Dove` → "Mourning Dove"). You can override display names later in `profiles.json`.
- More variety beats more length: different distances, times of day, and background conditions. Clips of a few seconds each are fine.
- Common formats work (.m4a, .wav, .mp3, .aiff).

## Step 2 — Train the model in Create ML

1. Open **Create ML** (on a Mac with Xcode: Xcode menu → Open Developer Tool → Create ML), and create a new **Sound Classification** project.
2. Drag your `TrainingData` folder into **Training Data**.
3. Click **Train**. A few hundred clips train in minutes.
4. Check the accuracy tab — if one class scores poorly, it needs more or more-varied clips.
5. On the **Output** tab, click **Get** and save the model as **`model.mlmodel`** (or `model.mlpackage` — both work). The filename must be exactly `model.mlmodel` or `model.mlpackage`.

## Step 3 — Write `pack.json`

A tiny manifest describing the pack:

```json
{
  "id": "com.example.pack.socalbirds",
  "name": "SoCal Birder's Companion",
  "version": "1.0",
  "author": "Your Name",
  "classes": ["Mourning_Dove", "House_Finch", "Background"],
  "gateClasses": ["bird", "bird_vocalization", "bird_chirp_tweet", "pigeon_dove_coo", "crow_caw"]
}
```

- **`name`** is required — it's what appears in the app's pack list.
- **`id`** identifies the pack for updates: re-importing a pack with the same `id` replaces the old version in place. Any unique reverse-DNS-style string works.
- **`classes`** is documentation for humans. The app reads the true class list from the model itself, so a mismatch won't break anything (it's just noted in the log).
- **`gateClasses`** (optional, strongly recommended) is the single most effective tool for stopping false positives. See below.

### `gateClasses` — let Apple's model be your bouncer

Your model is a *specialist*: it's good at telling *which* of your sounds it's hearing, but it has no idea what "not one of my sounds" is (that's what the Background class helps with). Apple's built-in classifier is a *generalist* trained on ~300 everyday sounds — it's very good at the coarse question "is there a bird at all?"

`gateClasses` chains them: **your pack's detections are only reported when Apple's model is *concurrently* hearing one of the listed built-in categories.** A bird pack gates on Apple's bird labels, so if Apple doesn't think there's a bird, your pack stays silent — no matter how confident it is. This single line eliminates the vast majority of music, TV, and quiet-room false alarms, because Apple's model scores those far below the gate. Leave it out and the pack runs ungated (fine for testing, chatty in the real world).

Gate a **bird** pack on the *generic* Apple bird labels plus any specific ones your model can actually name: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — and, if your pack has the matching species, `crow_caw` and `pigeon_dove_coo`. Other pack types pick their own gates from Apple's [Sound Analysis sound identifiers](https://developer.apple.com/documentation/soundanalysis/sn_classifier_identifier_version1) — e.g. a dog-breed pack gates on `dog_bark`/`dog_howl`, a vehicle pack on `vehicle`/`engine`.

### `muteClasses` — defer to Apple on sounds your model can't name

`gateClasses` opens your pack when Apple thinks there's a bird. But Apple can *specifically* name some birds your model may not cover — a duck, goose, owl, turkey, chicken, or rooster. If Apple hears a duck and your pack has no duck class, your model will force-sort that quack into its nearest species and confidently call it the wrong bird. That's a misidentification, not a false alarm from silence — and `gateClasses` alone won't stop it, because a duck also trips the generic `bird` gate.

`muteClasses` fixes it: **when Apple is confident about one of these labels, your pack stays silent for that moment** and defers to Apple's specific call. List the built-in labels for sounds you *don't* cover:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

Rule of thumb: a specific Apple bird label goes in **`gateClasses`** if your model has a matching (or better) class for it, and in **`muteClasses`** if it doesn't. Everything Apple can name that you can't → mute it, and let Apple be right.

## Step 4 — Write `profiles.json` (optional, recommended)

This controls how each sound looks and feels in the app — one entry per class, keyed by the **exact** folder/label name:

```json
{
  "Mourning_Dove": {
    "displayName": "Mourning Dove",
    "hapticCount": 1,
    "emergencyTier": "none",
    "category": "animal",
    "icon": "bird",
    "color": "teal",
    "threshold": 0.5,
    "maxRange": 150
  },
  "House_Finch": {
    "displayName": "House Finch",
    "hapticCount": 1,
    "category": "animal",
    "icon": "bird"
  },
  "Background": {
    "category": "ignored",
    "threshold": 1.1
  }
}
```

Every key is optional — omit anything and a sensible default applies:

| Key | What it does | Default |
|---|---|---|
| `displayName` | Name shown on the map and in alerts | Label with underscores → spaces, capitalized |
| `hapticCount` | Vibration pulses when the sound is first revealed (0 = none) | `0` |
| `emergencyTier` | `"none"` for normal sounds. Leave it `"none"` unless the sound genuinely warrants an urgent alert | `"none"` |
| `category` | Grouping: `animal`, `vehicle`, `medium`, `quiet`, or `misc` | `misc` |
| `icon` | An [SF Symbols](https://developer.apple.com/sf-symbols/) name, e.g. `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | Dot/icon tint: `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple`, or `"r,g,b"` with values 0–1 | `teal` |
| `threshold` | Confidence (0–1) required before the sound registers. Raise it if a class false-alarms; lower it if it's missed | `0.5` |
| `maxRange` | Rough maximum detection range shown on the map, in feet | `150` |

**Your `Background` class needs the special entry shown above**: `"threshold": 1.1` makes it impossible to report (confidence never exceeds 1.0), so it silently absorbs ambient audio instead of ever showing up as a detection. Don't just omit it — an unlisted class still gets the default 0.5 threshold and *would* appear in the app as a generic sound.

## Step 5 — Zip it

Select the three files — `pack.json`, `profiles.json`, `model.mlmodel` — right-click, and **Compress**. Zipping the enclosing folder instead also works; the app looks one folder deep.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

Get the zip to your iPhone however you like: AirDrop, iCloud Drive, Mail, Messages.

## Step 6 — Import on your iPhone

1. Open Vigilant Ear → gear menu → **Power Pack+**.
2. Scroll to **Custom Sound Packs (BYOM)** and tap **Import Custom Pack (.zip)**.
3. Pick your zip in the Files browser.

The pack appears in the list with its sound count, already **LIVE**. From here you can:

- **LIVE / OFF** — toggle the pack without deleting it. Off costs zero battery.
- **Delete** — starts a 5-second countdown (tap again to cancel), then removes the pack completely.
- Import as many packs as you like; they all run alongside the built-in detector. Each extra live pack costs some battery, so switch off packs you aren't using.

Detected sounds show up like any other: a dot on the map with your icon and color, the display name in alerts, and your configured haptics.

A couple of built-in behaviors to know about: custom pack detections are **not** relayed to Constellation mesh peers (other phones won't have your pack installed), and pack sounds require two consecutive detections before alerting, which filters one-frame false positives.

## Troubleshooting

| Message / symptom | Cause and fix |
|---|---|
| "No pack.json found in the zip" | The zip's files are nested more than one folder deep, or `pack.json` is misnamed. Re-zip with the three files at the top level. |
| "pack.json could not be read" | JSON syntax error — a missing comma or quote. Validate it (e.g. paste into a JSON checker) and re-zip. |
| "No model.mlpackage or model.mlmodel found" | The model file has a different name. Rename it to exactly `model.mlmodel` (or `model.mlpackage`). |
| "The model is not a sound classifier…" | The model isn't a Create ML **Sound Classification** model — image/text/tabular models can't be used. Retrain with the Sound Classification template. |
| Pack imports but a sound never triggers | Its confidence isn't reaching the threshold. Lower that class's `threshold` (try `0.35`), and add more varied training clips. |
| A sound triggers constantly on ambient noise, music, or TV | Add `gateClasses` to `pack.json` (see above) — this is the biggest lever by far. Also add/expand the `Background` class with recordings of the offending environment, then retrain and re-import. Raising the class `threshold` (e.g. `0.8`) helps too. |
| Real sounds are detected, but so are a few wrong ones | Two consecutive detections are already required, and `gateClasses` filters most noise. For the stragglers, nudge that specific class's `threshold` up toward `0.85–0.9`. |
| Names/haptics from profiles.json don't apply | The keys in `profiles.json` must match the model's class labels (your training folder names) exactly, including case and underscores. |

## Updating a pack

Retrain or edit, re-zip, and import again with the same `id` in `pack.json` — the old version is replaced in place.
