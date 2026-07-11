# Eigene Sound-Packs — So baust und importierst du deine eigenen

Vigilant Ear kann neue Geräusche lernen. Ein **eigenes Sound-Pack** bringt der App bei, Geräusche zu erkennen, die Apples integrierter Detektor nicht kennt — deine lokalen Vögel, eine bestimmte Maschine bei der Arbeit, den merkwürdigen Flur-Summer deines Gebäudes. Du trainierst ein kleines Modell auf einem Mac (ohne Programmieren), packst es mit zwei kleinen Textdateien in eine Zip und importierst es auf deinem iPhone.

Eigene Packs **ergänzen** den integrierten Detektor. Ein aktiviertes Pack schaltet nichts anderes ab — Sirenen, Alarme und alle anderen Sicherheitsgeräusche funktionieren weiterhin genau wie zuvor.

**Du brauchst:** einen Mac mit Xcodes **Create ML**-App (kostenlos), Audioaufnahmen deiner Geräusche und Power Pack+ auf deinem iPhone (die kostenlose Testphase zählt).

---

## Harte Anforderungen — diese musst du exakt einhalten

Ein Pack, das eine davon missachtet, lässt sich zwar importieren, verhält sich aber schlecht (ständige Fehlalarme oder gar nichts erkannt). Das sind keine Vorschläge:

1. **Eine `Background`-Klasse einbinden — Pflicht, nicht optional.** Dein Modell muss eine Klasse haben, die auf deinen echten Umgebungsgeräuschen trainiert ist (ruhiger Raum, Straße, laufender Ventilator). Fülle sie mit 15+ echten Aufnahmen und markiere sie in `profiles.json` mit `"category": "ignored"` und `"threshold": 1.1`. **Ohne Background-Klasse feuert dein Pack ständig bei Stille** — ein Sound-Klassifikator muss für jeden Audio-Moment eine seiner Klassen wählen; ohne „nichts davon“-Eimer etikettiert er deinen ruhigen Raum als das, was ihm am ähnlichsten ist.
2. **Stille aus deinen Trainingsclips herausschneiden.** Ein Clip mit der Bezeichnung „Owl“, der 20 Sekunden Stille und einen einzigen Ruf enthält, lehrt das Modell, dass *Stille eine Eule ist*. Schneide Clips eng auf das Zielgeräusch zu, sonst lernt das Modell die Lücken.
3. **Die Modelldatei exakt `model.mlmodel` oder `model.mlpackage` nennen.** Jeder andere Name → Import schlägt fehl.
4. **Ein Create-ML-*Sound-Classification*-Modell verwenden.** Bild-/Text-/Tabellenmodelle werden abgelehnt.
5. **Die Schlüssel in `profiles.json` müssen exakt mit den Klassenbezeichnungen des Modells übereinstimmen** — also mit deinen Trainingsordnernamen, inklusive Groß-/Kleinschreibung und Unterstrichen.
6. **`gateClasses` hinzufügen** (siehe unten). Ohne sie lösen Musik und Fernsehen das Pack aus. Das ist die mit Abstand wirksamste Fehlalarm-Kontrolle.
7. **Die Dateien auf oberster Ebene zippen** (oder in einem Ordner — nicht tiefer). `pack.json` muss auffindbar sein.
8. **Deine Klassen ausbalancieren.** Gib nicht einer Klasse 100 Clips und einer anderen 10 — das Modell neigt zur großen. Begrenze gut bestückte Klassen so, dass die Anzahlen ungefähr im Faktor ~3× zueinander liegen.

Der Rest dieses Leitfadens geht der Reihe nach durch jeden dieser Punkte.

---

## Schritt 1 — Trainingsaudio sammeln

Lege für jedes Geräusch, das erkannt werden soll, einen Ordner an, benannt nach diesem Geräusch, und fülle ihn mit Beispielaufnahmen:

```
TrainingData/
  Mourning_Dove/        ← 20+ clips of mourning doves
  House_Finch/          ← 20+ clips of house finches
  Background/           ← 20+ clips of your ambient environment WITHOUT the sounds
```

Tipps, die echten Unterschied machen:

- **Immer eine `Background`-Klasse einbinden.** Das Modell muss jeden Audio-Moment als *etwas* labeln — ohne Background-Klasse werden Stille und Straßenlärm in deine echten Klassen gedrängt und du siehst Fehlalarme. Nimm die Orte auf, an denen du das Pack tatsächlich nutzt: deinen Garten, deine Werkstatt, deine Küche.
- **Ordnernamen werden zu den Labels**, die die App anzeigt (Unterstriche werden zu Leerzeichen: `Mourning_Dove` → „Mourning Dove“). Anzeigenamen kannst du später in `profiles.json` überschreiben.
- Mehr Vielfalt schlägt mehr Länge: unterschiedliche Entfernungen, Tageszeiten und Hintergrundbedingungen. Clips von wenigen Sekunden sind in Ordnung.
- Gängige Formate funktionieren (.m4a, .wav, .mp3, .aiff).

## Schritt 2 — Das Modell in Create ML trainieren

1. Öffne **Create ML** (auf einem Mac mit Xcode: Xcode-Menü → Open Developer Tool → Create ML) und erstelle ein neues **Sound Classification**-Projekt.
2. Ziehe deinen `TrainingData`-Ordner in **Training Data**.
3. Klicke auf **Train**. Ein paar hundert Clips trainieren in Minuten.
4. Prüfe den Accuracy-Tab — wenn eine Klasse schlecht abschneidet, braucht sie mehr oder vielfältigere Clips.
5. Auf dem Tab **Output** klicke auf **Get** und speichere das Modell als **`model.mlmodel`** (oder `model.mlpackage` — beides funktioniert). Der Dateiname muss exakt `model.mlmodel` oder `model.mlpackage` sein.

## Schritt 3 — `pack.json` schreiben

Ein kleines Manifest, das das Pack beschreibt:

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

- **`name`** ist erforderlich — so erscheint es in der Pack-Liste der App.
- **`id`** identifiziert das Pack für Updates: Ein erneuter Import mit derselben `id` ersetzt die alte Version an Ort und Stelle. Jeder eindeutige String im Reverse-DNS-Stil funktioniert.
- **`classes`** dient nur der Dokumentation. Die App liest die echte Klassenliste aus dem Modell selbst; eine Abweichung bricht nichts (sie wird nur im Log vermerkt).
- **`gateClasses`** (optional, stark empfohlen) ist das wirksamste Werkzeug gegen Fehlalarme. Siehe unten.

### `gateClasses` — lass Apples Modell dein Türsteher sein

Dein Modell ist ein *Spezialist*: Es ist gut darin zu unterscheiden, *welches* deiner Geräusche es hört, hat aber keine Ahnung, was „keines meiner Geräusche“ ist (dafür hilft die Background-Klasse). Apples integrierter Klassifikator ist ein *Generalist*, trainiert auf ~300 Alltagsgeräuschen — er ist sehr gut bei der groben Frage „gibt es überhaupt einen Vogel?“

`gateClasses` kettet beides: **Erkennungen deines Packs werden nur gemeldet, wenn Apples Modell *gleichzeitig* eine der aufgeführten integrierten Kategorien hört.** Ein Vogel-Pack gattet auf Apples Vogel-Labels; denkt Apple, es gibt keinen Vogel, bleibt dein Pack still — egal wie sicher es sich ist. Diese eine Zeile eliminiert die große Mehrheit von Musik-, TV- und Ruhe-Raum-Fehlalarmen, weil Apples Modell die weit unter dem Gate bewertet. Lässt du sie weg, läuft das Pack ungegated (ok zum Testen, geschwätzig in der echten Welt).

**Gating ist nur verfügbar, wenn Apple bereits eine Kategorie in der Nähe deines Geräuschs hat.** Ist dein Pack für etwas, das Apples ~300-Klassen-Modell nicht kennt — eine bestimmte Fabrikmachine, ein Medizingerät-Piepton, eine eigene Türklingel —, gibt es kein integriertes Label zum Gaten; du lässt `gateClasses` weg und das Pack läuft ungegated. Das ist erwartet, kein Fehler. Bei solchen Packs ist deine **Background-Klasse nicht mehr eine von mehreren Verteidigungen, sondern das Einzige zwischen dir und ständigen Fehlalarmen** — investiere also stark darin (viele echte Umgebungsaufnahmen) und erhöhe deine Schwellen pro Klasse.

Gate ein **Vogel**-Pack auf die *generischen* Apple-Vogel-Labels plus spezifische, die dein Modell tatsächlich benennen kann: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — und, falls dein Pack die passende Art hat, `crow_caw` und `pigeon_dove_coo`. Andere Pack-Typen wählen ihre Gates aus der [vollständigen Liste der integrierten Sound-Identifier](#appendix-built-in-sound-identifiers-ios-265) im Anhang unten — z. B. ein Hunderassen-Pack auf `dog_bark`/`dog_howl`, ein Fahrzeug-Pack auf `engine`/`truck`.

### `muteClasses` — bei Geräuschen, die dein Modell nicht benennen kann, Apple den Vortritt lassen

`gateClasses` öffnet dein Pack, wenn Apple einen Vogel vermutet. Apple kann aber *spezifisch* manche Vögel benennen, die dein Modell vielleicht nicht abdeckt — Ente, Gans, Eule, Truthahn, Huhn oder Hahn. Hört Apple eine Ente und dein Pack hat keine Enten-Klasse, sortiert dein Modell dieses Quaken in die nächstliegende Art und nennt sie selbstbewusst den falschen Vogel. Das ist eine Fehlidentifikation, kein Fehlalarm aus Stille — und `gateClasses` allein stoppt das nicht, weil eine Ente auch das generische `bird`-Gate auslöst.

`muteClasses` behebt das: **Wenn Apple bei einem dieser Labels sicher ist, bleibt dein Pack für diesen Moment still** und überlässt Apples spezifische Erkennung den Vortritt. Liste die integrierten Labels für Geräusche auf, die du *nicht* abdeckst:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

Faustregel: Ein spezifisches Apple-Vogel-Label gehört in **`gateClasses`**, wenn dein Modell eine passende (oder bessere) Klasse dafür hat, und in **`muteClasses`**, wenn nicht. Alles, was Apple benennen kann und du nicht → muten und Apple recht haben lassen.

## Schritt 4 — `profiles.json` schreiben (optional, empfohlen)

Das steuert, wie jedes Geräusch in der App aussieht und sich anfühlt — ein Eintrag pro Klasse, geschlüsselt mit dem **exakten** Ordner-/Labelnamen:

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

Jeder Schlüssel ist optional — lass etwas weg und ein sinnvoller Standard greift:

| Schlüssel | Was er bewirkt | Standard |
|---|---|---|
| `displayName` | Name auf der Karte und in Alarmen | Label mit Unterstrichen → Leerzeichen, großgeschrieben |
| `hapticCount` | Vibrationsimpulse, wenn das Geräusch erstmals angezeigt wird (0 = keine) | `0` |
| `emergencyTier` | `"none"` für normale Geräusche. Lass es `"none"`, es sei denn, das Geräusch rechtfertigt wirklich einen dringenden Alarm | `"none"` |
| `category` | Gruppierung: `animal`, `vehicle`, `medium`, `quiet` oder `misc` | `misc` |
| `icon` | Ein [SF Symbols](https://developer.apple.com/sf-symbols/)-Name, z. B. `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | Punkt-/Icon-Farbe: `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple` oder `"r,g,b"` mit Werten 0–1 | `teal` |
| `threshold` | Erforderliche Konfidenz (0–1), bevor das Geräusch zählt. Erhöhen bei Fehlalarmen einer Klasse; senken, wenn sie verpasst wird | `0.5` |
| `maxRange` | Ungefähre maximale Erkennungsreichweite auf der Karte, in Fuß | `150` |

**Deine `Background`-Klasse braucht den speziellen Eintrag oben**: `"threshold": 1.1` macht es unmöglich, sie zu melden (Konfidenz überschreitet nie 1.0), sodass sie Umgebungs-Audio still absorbiert und nie als Erkennung erscheint. Lass sie nicht einfach weg — eine nicht aufgeführte Klasse bekommt weiterhin den Standard-Schwellenwert 0.5 und *würde* in der App als generisches Geräusch erscheinen.

## Schritt 5 — Zippen

Wähle die drei Dateien — `pack.json`, `profiles.json`, `model.mlmodel` — Rechtsklick und **Compress**. Das Zippen des umschließenden Ordners funktioniert ebenfalls; die App sucht eine Ordnerebene tief.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

Bringe die Zip wie du magst aufs iPhone: AirDrop, iCloud Drive, Mail, Messages.

## Schritt 6 — Auf dem iPhone importieren

1. Öffne Vigilant Ear → Zahnrad-Menü → **Power Pack+**.
2. Scrolle zu **Custom Sound Packs (BYOM)** und tippe auf **Import Custom Pack (.zip)**.
3. Wähle deine Zip im Dateien-Browser.

Das Pack erscheint in der Liste mit seiner Geräuschanzahl, bereits **LIVE**. Von hier aus kannst du:

- **LIVE / OFF** — das Pack umschalten, ohne es zu löschen. Aus kostet null Akku.
- **Delete** — startet einen 5-Sekunden-Countdown (erneut tippen zum Abbrechen) und entfernt das Pack dann vollständig.
- Beliebig viele Packs importieren; sie laufen alle parallel zum integrierten Detektor. Jedes zusätzliche live Pack kostet etwas Akku — schalte Packs aus, die du nicht nutzt.

Erkannte Geräusche erscheinen wie alle anderen: ein Punkt auf der Karte mit deinem Icon und deiner Farbe, der Anzeigename in Alarmen und deine konfigurierten Haptics.

Ein paar integrierte Verhaltensweisen zum Mitnehmen: Erkennungen aus eigenen Packs werden **nicht** an Constellation-Mesh-Peers weitergegeben (andere Telefone haben dein Pack nicht installiert), und Pack-Geräusche brauchen zwei aufeinanderfolgende Erkennungen vor dem Alarm — das filtert Ein-Frame-Fehlalarme.

## Fehlerbehebung

| Meldung / Symptom | Ursache und Lösung |
|---|---|
| "No pack.json found in the zip" | Die Dateien in der Zip liegen mehr als eine Ordnerebene tief, oder `pack.json` ist falsch benannt. Neu zippen mit den drei Dateien auf oberster Ebene. |
| "pack.json could not be read" | JSON-Syntaxfehler — fehlendes Komma oder Anführungszeichen. Validieren (z. B. in einen JSON-Checker einfügen) und neu zippen. |
| "No model.mlpackage or model.mlmodel found" | Die Modelldatei hat einen anderen Namen. Exakt in `model.mlmodel` (oder `model.mlpackage`) umbenennen. |
| "The model is not a sound classifier…" | Das Modell ist kein Create-ML-**Sound-Classification**-Modell — Bild-/Text-/Tabellenmodelle sind nicht nutzbar. Mit der Sound-Classification-Vorlage neu trainieren. |
| Pack importiert, aber ein Geräusch löst nie aus | Die Konfidenz erreicht den Schwellenwert nicht. `threshold` dieser Klasse senken (z. B. `0.35`) und vielfältigere Trainingsclips hinzufügen. |
| Ein Geräusch löst ständig bei Umgebungslärm, Musik oder TV aus | `gateClasses` in `pack.json` hinzufügen (siehe oben) — das ist der mit Abstand größte Hebel. Auch die `Background`-Klasse mit Aufnahmen der störenden Umgebung ergänzen/erweitern, dann neu trainieren und importieren. Den Klassen-`threshold` erhöhen (z. B. `0.8`) hilft ebenfalls. |
| Echte Geräusche werden erkannt, aber auch ein paar falsche | Zwei aufeinanderfolgende Erkennungen sind bereits erforderlich, und `gateClasses` filtert den meisten Lärm. Bei den Restfällen den `threshold` dieser speziellen Klasse Richtung `0.85–0.9` anheben. |
| Namen/Haptics aus profiles.json greifen nicht | Die Schlüssel in `profiles.json` müssen exakt mit den Klassenlabels des Modells (deinen Trainingsordnernamen) übereinstimmen, inklusive Groß-/Kleinschreibung und Unterstrichen. |

## Ein Pack aktualisieren

Neu trainieren oder bearbeiten, neu zippen und erneut mit derselben `id` in `pack.json` importieren — die alte Version wird an Ort und Stelle ersetzt.

---

## Appendix: Built-in Sound Identifiers (iOS 26.5)

Das sind die integrierten Sound-Kategorien, die Apples On-Device-Sound-Analysis-Klassifikator erkennen kann — die Labels, die für `gateClasses` und `muteClasses` oben verfügbar sind. Apple veröffentlicht diese Liste nicht mehr auf der Developer-Website; die Tabelle unten wurde direkt vom Klassifikator auf dem Gerät gelesen (`SNClassifierIdentifier.version1`).

**Bekannte Klassifikationen Stand Juli 2026 (iOS 26.5) — 303 Labels.** Apple kann diese in jedem OS-Update hinzufügen, entfernen oder umbenennen; behandle die Liste als Momentaufnahme: Gating auf ein Label, das ein künftiges OS entfernt, bedeutet einfach, dass dieses Gate nie feuert (dein Pack bleibt still), und ein neu hinzugefügtes Label existiert erst, wenn du darauf gatest. Verwende die exakte Schreibweise (Kleinbuchstaben, Unterstriche).

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

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
