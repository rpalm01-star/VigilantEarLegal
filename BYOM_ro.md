# Pachete de sunete personalizate — Cum să-ți construiești și să importi ale tale

Vigilant Ear poate învăța sunete noi. Un **pachet de sunete personalizat** învață aplicația să recunoască sunete pe care detectorul încorporat al Apple nu le cunoaște — păsările tale locale, o mașină anume de la lucru, soneria ciudată de pe holul clădirii. Antrenezi un model mic pe un Mac (fără programare), îl comprimi într-un zip cu două fișiere mici de text și îl imporți pe iPhone.

Pachetele personalizate **se stivuiesc peste** detectorul încorporat. Pornirea unui pachet nu oprește niciodată nimic altceva — sirenele, alarmele și orice alt sunet de siguranță continuă să meargă exact ca înainte.

**Îți trebuie:** un Mac cu aplicația **Create ML** din Xcode (gratuită), înregistrări audio ale sunetelor tale și Power Pack+ pe iPhone (perioada de probă gratuită contează).

---

## Cerințe stricte — respectă-le la literă

Un pachet care ignoră oricare dintre astea se va importa, dar se va comporta urât (alarme false constante, sau nimic detectat). Nu sunt sugestii:

1. **Include o clasă `Background` — obligatorie, nu opțională.** Modelul tău trebuie să aibă o clasă antrenată pe mediile tale reale de ambient (cameră liniștită, stradă, ventilatorul pornit). Umple-o cu 15+ înregistrări reale și marcheaz-o cu `"category": "ignored"` și `"threshold": 1.1` în `profiles.json`. **Fără o clasă Background, pachetul tău se va declanșa constant pe tăcere** — un clasificator de sunete e forțat să aleagă una dintre clasele sale pentru fiecare moment de audio, așa că fără un coș „niciuna dintre astea” etichetează camera ta liniștită ca orice îi seamănă cel mai mult.
2. **Taie tăcerea din clipurile de antrenare.** Un clip etichetat „Owl” care e 20 de secunde de tăcere cu un singur huhurit învață modelul că *tăcerea e o bufniță*. Decupează clipurile strâns pe sunetul-țintă, altfel modelul învață golurile.
3. **Numește fișierul modelului exact `model.mlmodel` sau `model.mlpackage`.** Orice alt nume → importul eșuează.
4. **Folosește un model Create ML *Sound Classification*.** Modelele imagine/text/tabelare sunt respinse.
5. **Cheile din `profiles.json` trebuie să se potrivească exact cu etichetele de clasă ale modelului** — adică numele dosarelor tale de antrenare, inclusiv majuscule și underscore.
6. **Adaugă `gateClasses`** (vezi mai jos). Fără el, muzica și TV-ul vor declanșa pachetul. Ăsta e de departe cel mai mare control al alarmelor false.
7. **Comprimă fișierele la nivelul de sus** (sau într-un singur dosar — nu mai adânc). `pack.json` trebuie să poată fi găsit.
8. **Echilibrează clasele.** Nu da unei clase 100 de clipuri și alteia 10 — modelul se va înclina spre cea mare. Limitează clasele eșantionate generos astfel încât numărătoarele să fie în ~3× una față de alta.

Restul acestui ghid trece prin fiecare dintre astea, în ordine.

---

## Pasul 1 — Adună audio-ul de antrenare

Fă un dosar pentru fiecare sunet pe care vrei să-l recunoști, numit după acel sunet, și umple-l cu înregistrări de exemplu:

```
TrainingData/
  Mourning_Dove/        ← 20+ clipuri de turturele
  House_Finch/          ← 20+ clipuri de cinteze de casă
  Background/           ← 20+ clipuri din ambientul tău FĂRĂ sunetele
```

Sfaturi care fac o diferență reală:

- **Include întotdeauna o clasă `Background`.** Modelul trebuie să eticheteze fiecare moment de audio ca *ceva* — fără o clasă de fundal, tăcerea și zgomotul de stradă sunt împinse în clasele tale reale și vei vedea alarme false. Înregistrează locurile în care vei folosi de fapt pachetul: curtea, hala, bucătăria.
- **Numele dosarelor devin etichetele** pe care le arată aplicația (underscore-urile se transformă în spații: `Mourning_Dove` → „Mourning Dove”). Poți suprascrie numele afișate mai târziu în `profiles.json`.
- Mai multă varietate bate mai multă lungime: distanțe diferite, ore ale zilei și condiții de fundal. Clipuri de câteva secunde fiecare sunt bune.
- Formatele obișnuite merg (.m4a, .wav, .mp3, .aiff).

## Pasul 2 — Antrenează modelul în Create ML

1. Deschide **Create ML** (pe un Mac cu Xcode: meniul Xcode → Open Developer Tool → Create ML) și creează un proiect nou **Sound Classification**.
2. Trage dosarul `TrainingData` în **Training Data**.
3. Apasă **Train**. Câteva sute de clipuri se antrenează în minute.
4. Verifică tab-ul de acuratețe — dacă o clasă scoate scor slab, are nevoie de mai multe clipuri sau de clipuri mai variate.
5. Pe tab-ul **Output**, apasă **Get** și salvează modelul ca **`model.mlmodel`** (sau `model.mlpackage` — ambele merg). Numele fișierului trebuie să fie exact `model.mlmodel` sau `model.mlpackage`.

## Pasul 3 — Scrie `pack.json`

Un manifest mic care descrie pachetul:

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

- **`name`** e obligatoriu — e ce apare în lista de pachete a aplicației.
- **`id`** identifică pachetul pentru actualizări: reimportul unui pachet cu același `id` înlocuiește versiunea veche pe loc. Orice șir unic în stil reverse-DNS merge.
- **`classes`** e doar documentație. Aplicația citește lista adevărată de clase din modelul însuși, așa că o nepotrivire nu strică nimic (e doar notată în jurnal).
- **`gateClasses`** (opțional, puternic recomandat) e cea mai eficientă unealtă pentru a opri falsele pozitive. Vezi mai jos.

### `gateClasses` — lasă modelul Apple să-ți fie portar

Modelul tău e un *specialist*: e bun la a spune *care* dintre sunetele tale le aude, dar n-are idee ce e „niciunul dintre sunetele mele” (de-asta ajută clasa Background). Clasificatorul încorporat Apple e un *generalist* antrenat pe ~300 de sunete de zi cu zi — e foarte bun la întrebarea grosieră „e o pasăre, da sau nu?”

`gateClasses` le înlănțuie: **detecțiile pachetului tău sunt raportate doar când modelul Apple aude *în același timp* una dintre categoriile încorporate listate.** Un pachet de păsări se poartă pe etichetele de păsări Apple, astfel încât dacă Apple nu crede că e o pasăre, pachetul tău tace — oricât de sigur ar fi. Linia asta singură elimină marea majoritate a alarmelor false de muzică, TV și cameră liniștită, pentru că modelul Apple le notează cu mult sub poartă. Las-o afară și pachetul rulează fără poartă (bine pentru teste, vorbăreț în lumea reală).

**Poarta e disponibilă doar când Apple are deja o categorie aproape de sunetul tău.** Dacă pachetul tău e pentru ceva ce modelul Apple de ~300 de clase nu cunoaște — o mașină anume de fabrică, un bip de dispozitiv medical, o sonerie personalizată — nu există o etichetă încorporată pe care să pui poartă, așa că lași `gateClasses` afară și pachetul rulează fără poartă. Asta e de așteptat, nu o greșeală. Pentru acele pachete, **clasa Background nu mai e o apărare printre mai multe, ci singurul lucru care stă între tine și alarme false constante** — deci investește greu în ea (multe înregistrări reale de ambient) și ridică pragurile pe clasă.

Filtrează un pachet de **păsări** pe etichetele *generice* Apple de păsări plus orice specifice pe care modelul tău le poate numi de fapt: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — și, dacă pachetul tău are specia potrivită, `crow_caw` și `pigeon_dove_coo`. Alte tipuri de pachet își aleg propriile porți din [lista completă de identificatori de sunet încorporați](#appendix-built-in-sound-identifiers-ios-265) din anexa de mai jos — de ex. un pachet de rase de câini se filtrează pe `dog_bark`/`dog_howl`, un pachet de vehicule pe `engine`/`truck`.

### `muteClasses` — lasă Apple pe sunetele pe care modelul tău nu le poate numi

`gateClasses` deschide pachetul tău când Apple crede că e o pasăre. Dar Apple poate numi *anume* unele păsări pe care modelul tău poate să nu le acopere — o rață, o gâscă, o bufniță, un curcan, o găină sau un cocoș. Dacă Apple aude o rață și pachetul tău n-are clasă de rață, modelul tău va forța acel măcăit în specia cea mai apropiată și o va numi cu încredere pasărea greșită. Asta e o identificare greșită, nu o alarmă falsă din tăcere — și `gateClasses` singur n-o oprește, pentru că o rață declanșează și poarta generică `bird`.

`muteClasses` o repară: **când Apple e sigur pe una dintre aceste etichete, pachetul tău tace pentru acel moment** și lasă apelul specific al Apple. Listează etichetele încorporate pentru sunetele pe care *nu* le acoperi:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

Regulă de bază: o etichetă specifică Apple de pasăre merge în **`gateClasses`** dacă modelul tău are o clasă potrivită (sau mai bună) pentru ea, și în **`muteClasses`** dacă n-are. Tot ce poate numi Apple și tu nu → mutează-l, și lasă Apple să aibă dreptate.

## Pasul 4 — Scrie `profiles.json` (opțional, recomandat)

Asta controlează cum arată și se simte fiecare sunet în aplicație — o intrare pe clasă, cheiată după numele **exact** de dosar/etichetă:

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

Fiecare cheie e opțională — omite orice și se aplică un implicit rezonabil:

| Cheie | Ce face | Implicit |
|---|---|---|
| `displayName` | Numele arătat pe hartă și în alerte | Eticheta cu underscore-uri → spații, cu majusculă |
| `hapticCount` | Pulsuri de vibrație când sunetul e dezvăluit prima dată (0 = niciunul) | `0` |
| `emergencyTier` | `"none"` pentru sunete tipice. Lasă-l `"none"` dacă sunetul nu merită cu adevărat o alertă urgentă | `"none"` |
| `category` | Grupare: `animal`, `vehicle`, `medium`, `quiet` sau `misc` | `misc` |
| `icon` | Un nume [SF Symbols](https://developer.apple.com/sf-symbols/), de ex. `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | Nuanța punctului/iconiței: `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple` sau `"r,g,b"` cu valori 0–1 | `teal` |
| `threshold` | Încrederea (0–1) cerută înainte ca sunetul să se înregistreze. Ridic-o dacă o clasă dă alarme false; coboar-o dacă e ratată | `0.5` |
| `maxRange` | Raza maximă aproximativă de detecție arătată pe hartă, în picioare | `150` |

**Clasa ta `Background` are nevoie de intrarea specială arătată mai sus**: `"threshold": 1.1` o face imposibil de raportat (încrederea nu trece niciodată de 1.0), astfel încât absoarbe în tăcere audio-ul de ambient în loc să apară vreodată ca o detecție. Nu o omite pur și simplu — o clasă nelistată tot primește pragul implicit 0.5 și *ar* apărea în aplicație ca un sunet generic.

## Pasul 5 — Comprimă în zip

Selectează cele trei fișiere — `pack.json`, `profiles.json`, `model.mlmodel` — click dreapta și **Compress**. Comprimarea dosarului care le conține merge și ea; aplicația se uită un dosar în adâncime.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

Du zip-ul pe iPhone cum vrei: AirDrop, iCloud Drive, Mail, Messages.

## Pasul 6 — Importă pe iPhone

1. Deschide Vigilant Ear → meniul rotiță → **Power Pack+**.
2. Derulează la **Pachete de sunete personalizate (BYOM)** și atinge **Importă pachet personalizat (.zip)**.
3. Alege zip-ul în navigatorul Files.

Pachetul apare în listă cu numărul de sunete, deja **LIVE**. De aici poți:

- **LIVE / OFF** — comută pachetul fără să-l ștergi. Oprit costă zero baterie.
- **Șterge** — pornește un countdown de 5 secunde (atinge din nou ca să anulezi), apoi scoate pachetul complet.
- Importă câte pachete vrei; toate rulează alături de detectorul încorporat. Fiecare pachet live extra costă ceva baterie, deci oprește pachetele pe care nu le folosești.

Sunetele detectate apar ca oricare altele: un punct pe hartă cu iconița și culoarea ta, numele afișat în alerte și hapticul configurat.

Câteva comportamente încorporate de știut: detecțiile pachetelor personalizate **nu** sunt retransmise către peer-urile mesh Constellation (celelalte telefoane n-au pachetul tău instalat), iar sunetele de pachet cer două detecții consecutive înainte de alertă, ceea ce filtrează falsele pozitive de un cadru.

## Depanare

| Mesaj / simptom | Cauză și remediu |
|---|---|
| „No pack.json found in the zip” | Fișierele zip-ului sunt puse mai adânc de un dosar, sau `pack.json` e numit greșit. Comprimă din nou cu cele trei fișiere la nivelul de sus. |
| „pack.json could not be read” | Eroare de sintaxă JSON — o virgulă sau un ghilimele lipsă. Validează-l (de ex. lipește-l într-un verificator JSON) și comprimă din nou. |
| „No model.mlpackage or model.mlmodel found” | Fișierul modelului are alt nume. Redenumește-l exact `model.mlmodel` (sau `model.mlpackage`). |
| „The model is not a sound classifier…” | Modelul nu e un model Create ML **Sound Classification** — modelele imagine/text/tabelare nu pot fi folosite. Reantrenează cu șablonul Sound Classification. |
| Pachetul se importă dar un sunet nu se declanșează niciodată | Încrederea lui nu atinge pragul. Coboară `threshold`-ul acelei clase (încearcă `0.35`) și adaugă clipuri de antrenare mai variate. |
| Un sunet se declanșează constant pe zgomot de ambient, muzică sau TV | Adaugă `gateClasses` în `pack.json` (vezi mai sus) — asta e de departe cea mai mare pârghie. Adaugă/extinde și clasa `Background` cu înregistrări ale mediului vinovat, apoi reantrenează și reimportă. Ridicarea `threshold`-ului clasei (de ex. `0.8`) ajută și ea. |
| Sunetele reale sunt detectate, dar și câteva greșite | Două detecții consecutive sunt deja cerute, iar `gateClasses` filtrează majoritatea zgomotului. Pentru rămășițe, împinge `threshold`-ul acelei clase anume spre `0.85–0.9`. |
| Numele/hapticul din profiles.json nu se aplică | Cheile din `profiles.json` trebuie să se potrivească exact cu etichetele de clasă ale modelului (numele dosarelor de antrenare), inclusiv majuscule și underscore. |

## Actualizarea unui pachet

Reantrenează sau editează, comprimă din nou și importă din nou cu același `id` în `pack.json` — versiunea veche e înlocuită pe loc.

---

## Appendix: Built-in Sound Identifiers (iOS 26.5)

Astea sunt categoriile de sunet încorporate pe care le poate recunoaște clasificatorul Apple Sound Analysis de pe dispozitiv — etichetele disponibile pentru `gateClasses` și `muteClasses` de mai sus. Apple nu mai publică lista asta pe site-ul de dezvoltatori, așa că tabelul de mai jos a fost citit direct din clasificatorul de pe dispozitiv (`SNClassifierIdentifier.version1`).

**Clasificări cunoscute în iulie 2026 (iOS 26.5) — 303 etichete.** Apple poate adăuga, scoate sau redenumi astea în orice actualizare de OS, deci tratează asta ca un instantaneu la un moment dat: poarta pe o etichetă pe care un OS viitor o scapă înseamnă pur și simplu că poarta nu se declanșează niciodată (pachetul tău tace), iar o etichetă nou adăugată nu există până n-o pui pe poartă. Folosește ortografia exactă arătată (minuscule, underscore).

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
  Toate drepturile rezervate.<br />
  Brevet în curs de înregistrare
</p>
