# Custom Sound Packs — How to Build and Import Your Own

Vigilant Ear can learn new sounds. A **custom sound pack** teaches the app to recognize sounds Apple's built-in detector doesn't know — your local birds, a specific machine at work, your building's odd hallway buzzer. You train a small model on a Mac (no coding required), zip it up with two small text files, and import it on your iPhone.

Custom packs **stack on top of** the built-in detector. Turning a pack on never turns anything else off — sirens, alarms, and every other safety sound keep working exactly as before.

**You'll need:** a Mac with Xcode's **Create ML** app (free), audio recordings of your sounds, and Power Pack+ on your iPhone (the free trial counts).

---

## Hard requirements — get these exactly right

A pack that ignores any of these will import but behave badly (constant false alerts, or nothing detected). These are not suggestions:

1. **Include a `Background` class — mandatory, not optional.** Your model must have a class trained on your real ambient environments (quiet room, street, the fan running). Fill it with 15+ real recordings and mark it with `"category": "ignored"` and `"threshold": 1.1` in `profiles.json`. **Without a Background class your pack will fire constantly on silence** — a sound classifier is forced to pick one of its classes for every moment of audio, so with no "none of these" bucket it labels your quiet room as whatever it most resembles.
2. **Trim silence out of your training clips.** A clip labeled "Owl" that is 20 seconds of silence with one hoot teaches the model that *silence is an owl*. Crop clips tight to the target sound, or the model learns the gaps.
3. **Name the model file exactly `model.mlmodel` or `model.mlpackage`.** Any other name → import fails.
4. **Use a Create ML *Sound Classification* model.** Image/text/tabular models are rejected.
5. **`profiles.json` keys must exactly match the model's class labels** — i.e. your training folder names, case and underscores included.
6. **Add `gateClasses`** (see below). Without it, music and TV will trigger the pack. This is the single biggest false-alarm control.
7. **Zip the files at the top level** (or inside one folder — no deeper). `pack.json` must be findable.
8. **Balance your classes.** Don't give one class 100 clips and another 10 — the model will lean toward the big one. Cap generously-sampled classes so counts are within ~3× of each other.

The rest of this guide walks through each of these in order.

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
- **`classes`** is documentation only. The app reads the true class list from the model itself, so a mismatch won't break anything (it's just noted in the log).
- **`gateClasses`** (optional, strongly recommended) is the single most effective tool for stopping false positives. See below.

### `gateClasses` — let Apple's model be your bouncer

Your model is a *specialist*: it's good at telling *which* of your sounds it's hearing, but it has no idea what "not one of my sounds" is (that's what the Background class helps with). Apple's built-in classifier is a *generalist* trained on ~300 everyday sounds — it's very good at the coarse question "is there a bird at all?"

`gateClasses` chains them: **your pack's detections are only reported when Apple's model is *concurrently* hearing one of the listed built-in categories.** A bird pack gates on Apple's bird labels, so if Apple doesn't think there's a bird, your pack stays silent — no matter how confident it is. This single line eliminates the vast majority of music, TV, and quiet-room false alarms, because Apple's model scores those far below the gate. Leave it out and the pack runs ungated (fine for testing, chatty in the real world).

**Gating is only available when Apple already has a category near your sound.** If your pack is for something Apple's ~300-class model doesn't know — a specific factory machine, a medical-device beep, a custom doorbell — there is no built-in label to gate on, so you leave `gateClasses` out and the pack runs ungated. That's expected, not a mistake. For those packs your **Background class stops being one defense among several and becomes the only thing standing between you and constant false alerts** — so invest heavily in it (lots of real ambient recordings) and raise your per-class thresholds.

Gate a **bird** pack on the *generic* Apple bird labels plus any specific ones your model can actually name: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — and, if your pack has the matching species, `crow_caw` and `pigeon_dove_coo`. Other pack types pick their own gates from the [full list of built-in sound identifiers](#appendix-built-in-sound-identifiers-ios-265) in the appendix below — e.g. a dog-breed pack gates on `dog_bark`/`dog_howl`, a vehicle pack on `engine`/`truck`.

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

---

## Appendix: Built-in Sound Identifiers (iOS 26.5)

These are the built-in sound categories Apple's on-device Sound Analysis classifier can recognize — the labels available for `gateClasses` and `muteClasses` above. Apple no longer publishes this list on their developer site, so the table below was read directly from the classifier on-device (`SNClassifierIdentifier.version1`).

**Known classifications as of July 2026 (iOS 26.5) — 303 labels.** Apple can add, remove, or rename these in any OS update, so treat this as a point-in-time snapshot: gating on a label that a future OS drops simply means that gate never fires (your pack stays silent), and a newly added label won't exist until you gate on it. Use the exact spelling shown (lowercase, underscores).

| # | Identifier | Identifier | Identifier | Identifier |
|---|---|---|---|---|
| 1 | `accordion` | `crowd` | `humming` | `singing_bowl` |
| 2 | `acoustic_guitar` | `crumpling_crinkling` | `insect` | `sink_filling_washing` |
| 3 | `air_conditioner` | `crushing` | `keyboard_musical` | `siren` |
| 4 | `air_horn` | `crying_sobbing` | `keys_jangling` | `sitar` |
| 5 | `aircraft` | `cutlery_silverware` | `knock` | `skateboard` |
| 6 | `airplane` | `cymbal` | `laughter` | `skiing` |
| 7 | `alarm_clock` | `didgeridoo` | `lawn_mower` | `slap_smack` |
| 8 | `ambulance_siren` | `disc_scratching` | `lion_roar` | `slurp` |
| 9 | `applause` | `dishes_pots_pans` | `liquid_dripping` | `smoke_detector` |
| 10 | `artillery_fire` | `dog` | `liquid_filling_container` | `snake_hiss` |
| 11 | `babble` | `dog_bark` | `liquid_pouring` | `snake_rattle` |
| 12 | `baby_crying` | `dog_bow_wow` | `liquid_sloshing` | `snare_drum` |
| 13 | `baby_laughter` | `dog_growl` | `liquid_splashing` | `sneeze` |
| 14 | `bagpipes` | `dog_howl` | `liquid_spraying` | `snicker` |
| 15 | `banjo` | `dog_whimper` | `liquid_squishing` | `snoring` |
| 16 | `basketball_bounce` | `door` | `liquid_trickle_dribble` | `speech` |
| 17 | `bass_drum` | `door_bell` | `mallet_percussion` | `squeak` |
| 18 | `bass_guitar` | `door_slam` | `mandolin` | `steel_guitar_slide_guitar` |
| 19 | `bassoon` | `door_sliding` | `marimba_xylophone` | `steelpan` |
| 20 | `bathtub_filling_washing` | `double_bass` | `mechanical_fan` | `stream_burbling` |
| 21 | `battle_cry` | `drawer_open_close` | `microwave_oven` | `subway_metro` |
| 22 | `bee_buzz` | `drill` | `mosquito_buzz` | `synthesizer` |
| 23 | `beep` | `drum` | `motorboat_speedboat` | `tabla` |
| 24 | `bell` | `drum_kit` | `motorcycle` | `tambourine` |
| 25 | `belly_laugh` | `duck_quack` | `music` | `tap` |
| 26 | `bicycle` | `electric_guitar` | `nose_blowing` | `tearing` |
| 27 | `bicycle_bell` | `electric_piano` | `oboe` | `telephone` |
| 28 | `bird` | `electric_shaver` | `ocean` | `telephone_bell_ringing` |
| 29 | `bird_chirp_tweet` | `electronic_organ` | `orchestra` | `theremin` |
| 30 | `bird_flapping` | `elk_bugle` | `organ` | `thump_thud` |
| 31 | `bird_squawk` | `emergency_vehicle` | `owl_hoot` | `thunder` |
| 32 | `bird_vocalization` | `engine` | `percussion` | `thunderstorm` |
| 33 | `biting` | `engine_accelerating_revving` | `person_running` | `tick` |
| 34 | `blender` | `engine_idling` | `person_shuffling` | `tick_tock` |
| 35 | `boat_water_vehicle` | `engine_knocking` | `person_walking` | `timpani` |
| 36 | `boiling` | `engine_starting` | `piano` | `toilet_flush` |
| 37 | `booing` | `eruption` | `pig_oink` | `toothbrush` |
| 38 | `boom` | `finger_snapping` | `pigeon_dove_coo` | `traffic_noise` |
| 39 | `bowed_string_instrument` | `fire` | `playing_badminton` | `train` |
| 40 | `bowling_impact` | `fire_crackle` | `playing_hockey` | `train_horn` |
| 41 | `brass_instrument` | `fire_engine_siren` | `playing_squash` | `train_wheels_squealing` |
| 42 | `breathing` | `firecracker` | `playing_table_tennis` | `train_whistle` |
| 43 | `burp` | `fireworks` | `playing_tennis` | `trombone` |
| 44 | `bus` | `flute` | `playing_volleyball` | `truck` |
| 45 | `camera` | `fly_buzz` | `plucked_string_instrument` | `trumpet` |
| 46 | `car_horn` | `foghorn` | `police_siren` | `tuning_fork` |
| 47 | `car_passing_by` | `fowl` | `power_tool` | `turkey_gobble` |
| 48 | `cat` | `french_horn` | `power_windows` | `typewriter` |
| 49 | `cat_meow` | `frog` | `printer` | `typing` |
| 50 | `cat_purr` | `frog_croak` | `race_car` | `typing_computer_keyboard` |
| 51 | `cello` | `frying_food` | `rail_transport` | `ukulele` |
| 52 | `chainsaw` | `gargling` | `railroad_car` | `underwater_bubbling` |
| 53 | `chatter` | `gasp` | `rain` | `vacuum_cleaner` |
| 54 | `cheering` | `giggling` | `raindrop` | `vehicle_skidding` |
| 55 | `chewing` | `glass_breaking` | `rapping` | `vibraphone` |
| 56 | `chicken` | `glass_clink` | `ratchet_and_pawl` | `violin_fiddle` |
| 57 | `chicken_cluck` | `glockenspiel` | `rattle_instrument` | `water` |
| 58 | `children_shouting` | `gong` | `reverse_beeps` | `water_pump` |
| 59 | `chime` | `goose_honk` | `ringtone` | `water_tap_faucet` |
| 60 | `choir_singing` | `guitar` | `rooster_crow` | `waterfall` |
| 61 | `chopping_food` | `guitar_strum` | `rope_skipping` | `whale_vocalization` |
| 62 | `chopping_wood` | `guitar_tapping` | `rowboat_canoe_kayak` | `whispering` |
| 63 | `chuckle_chortle` | `gunshot_gunfire` | `sailing` | `whistling` |
| 64 | `church_bell` | `gurgling` | `saw` | `whoosh_swoosh_swish` |
| 65 | `civil_defense_siren` | `hair_dryer` | `saxophone` | `wind` |
| 66 | `clapping` | `hammer` | `scissors` | `wind_chime` |
| 67 | `clarinet` | `hammond_organ` | `screaming` | `wind_instrument` |
| 68 | `click` | `harmonica` | `scuba_diving` | `wind_noise_microphone` |
| 69 | `clock` | `harp` | `sea_waves` | `wind_rustling_leaves` |
| 70 | `coin_dropping` | `harpsichord` | `sewing_machine` | `wood_cracking` |
| 71 | `cough` | `hedge_trimmer` | `sheep_bleat` | `writing` |
| 72 | `cow_moo` | `helicopter` | `shofar` | `yell` |
| 73 | `cowbell` | `hi_hat` | `shout` | `yodeling` |
| 74 | `coyote_howl` | `hiccup` | `sigh` | `zipper` |
| 75 | `cricket_chirp` | `horse_clip_clop` | `silence` | `zither` |
| 76 | `crow_caw` | `horse_neigh` | `singing` |  |
