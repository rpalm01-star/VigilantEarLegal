# Własne pakiety dźwięków — jak zbudować i zaimportować własne

Vigilant Ear może nauczyć się nowych dźwięków. **Własny pakiet dźwięków** uczy aplikację rozpoznawać dźwięki, których nie zna wbudowany detektor Apple. Twoje lokalne ptaki, konkretna maszyna w pracy, dziwny brzęczyk na korytarzu budynku. Trenujesz mały model na Macu (bez pisania kodu), pakujesz go zipem z dwoma małymi plikami tekstowymi i importujesz na iPhonie.

Własne pakiety **dokładają się** do wbudowanego detektora, na wierzch. Włączenie pakietu nigdy nie wyłącza niczego innego. Syreny, alarmy i każdy inny dźwięk bezpieczeństwa działają dokładnie tak jak wcześniej.

**Potrzebujesz:** Maca z aplikacją **Create ML** z Xcode (za darmo), nagrań audio twoich dźwięków i Power Pack+ na iPhonie (darmowa próba się liczy).

---

## Twarde wymagania — zrób to dokładnie tak

Pakiet, który pominie którykolwiek z tych punktów, zaimportuje się, ale będzie działał źle (ciągłe fałszywe alerty albo nic nie wykryte). To nie są sugestie:

1. **Dodaj klasę `Background`. To obowiązek, nie opcja.** Model musi mieć klasę wytrenowaną na twoich prawdziwych otoczeniach (cichy pokój, ulica, włączony wentylator). Wypełnij ją 15+ prawdziwymi nagraniami i oznacz ją w `profiles.json` przez `"category": "ignored"` i `"threshold": 1.1`. **Bez klasy Background pakiet będzie odpalał alerty na ciszę bez przerwy.** Klasyfikator dźwięku musi wybrać jedną ze swoich klas w każdej chwili audio. Bez koszyka „żadne z tych” oznacza cichy pokój tym, co najbardziej przypomina.
2. **Wytnij ciszę z klipów treningowych.** Klip z etykietą „Owl”, który ma 20 sekund ciszy i jedno pohukiwanie, uczy model, że *cisza to sowa*. Przytnij klipy ciasno do dźwięku docelowego. Inaczej model uczy się przerw.
3. **Nazwij plik modelu dokładnie `model.mlmodel` albo `model.mlpackage`.** Inna nazwa → import się nie udaje.
4. **Użyj modelu Create ML *Sound Classification*.** Modele obrazu, tekstu i tabel są odrzucane.
5. **Klucze w `profiles.json` muszą dokładnie zgadzać się z etykietami klas modelu.** Czyli z nazwami folderów treningowych, razem z wielkością liter i podkreśleniami.
6. **Dodaj `gateClasses`** (niżej). Bez tego muzyka i TV będą odpalać pakiet. To największa kontrola fałszywych alertów.
7. **Spakuj pliki na najwyższym poziomie** (albo w jednym folderze, nie głębiej). `pack.json` musi dać się znaleźć.
8. **Wyrównaj klasy.** Nie dawaj jednej klasie 100 klipów, a drugiej 10. Model przechyli się w stronę tej większej. Przytnij klasy z dużą liczbą nagrań, żeby liczebności były w granicach około 3× jedna wobec drugiej.

Dalej ten przewodnik przechodzi przez każdy z tych punktów, po kolei.

---

## Krok 1 — Zbierz audio do treningu

Zrób folder na każdy dźwięk, który ma być rozpoznany. Nazwij go tym dźwiękiem i wypełnij przykładowymi nagraniami:

```
TrainingData/
  Mourning_Dove/        ← 20+ clips of mourning doves
  House_Finch/          ← 20+ clips of house finches
  Background/           ← 20+ clips of your ambient environment WITHOUT the sounds
```

Wskazówki, które naprawdę robią różnicę:

- **Zawsze dodawaj klasę `Background`.** Model musi oznaczyć każdą chwilę audio jako *coś*. Bez klasy tła cisza i szum ulicy wpadają do twoich prawdziwych klas i zobaczysz fałszywe alerty. Nagrywaj miejsca, w których naprawdę użyjesz pakietu: podwórko, hala, kuchnia.
- **Nazwy folderów stają się etykietami**, które pokazuje aplikacja (podkreślenia zamieniają się w spacje: `Mourning_Dove` → „Mourning Dove”). Później możesz nadpisać nazwy wyświetlane w `profiles.json`.
- Większa różnorodność bije większą długość: różne odległości, pory dnia i warunki tła. Klipy po kilka sekund są w porządku.
- Zwykłe formaty działają (.m4a, .wav, .mp3, .aiff).

## Krok 2 — Wytrenuj model w Create ML

1. Otwórz **Create ML** (na Macu z Xcode: menu Xcode → Open Developer Tool → Create ML) i utwórz nowy projekt **Sound Classification**.
2. Przeciągnij folder `TrainingData` do **Training Data**.
3. Kliknij **Train**. Kilka setek klipów kończy trening w kilka minut.
4. Sprawdź kartę dokładności. Jeśli jedna klasa wypada słabo, potrzebuje więcej klipów albo bardziej różnorodnych.
5. Na karcie **Output** kliknij **Get** i zapisz model jako **`model.mlmodel`** (albo `model.mlpackage` — oba działają). Nazwa pliku musi być dokładnie `model.mlmodel` albo `model.mlpackage`.

## Krok 3 — Napisz `pack.json`

Mały manifest, który opisuje pakiet:

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

- **`name`** jest wymagane. To nazwa na liście pakietów w aplikacji.
- **`id`** identyfikuje pakiet przy aktualizacjach. Ponowny import pakietu z tym samym `id` podmienia starą wersję w miejscu. Wystarczy dowolny unikalny ciąg w stylu reverse-DNS.
- **`classes`** to tylko dokumentacja. Aplikacja czyta prawdziwą listę klas z samego modelu, więc rozjazd niczego nie psuje (jest tylko notatka w logu).
- **`gateClasses`** (opcjonalne, mocno zalecane) to najskuteczniejsze narzędzie przeciw fałszywym trafieniom. Niżej.

### `gateClasses` — niech model Apple będzie bramkarzem

Twój model to *specjalista*. Dobrze mówi, *który* z twoich dźwięków słyszy, ale nie wie, czym jest „żaden z moich dźwięków” (od tego jest klasa Background). Wbudowany klasyfikator Apple to *klasyfikator ogólny*, wytrenowany na około 300 codziennych dźwiękach. Bardzo dobrze odpowiada na grube pytanie „czy w ogóle jest tu ptak?”.

`gateClasses` spina je w łańcuch: **wykrycia twojego pakietu pojawiają się tylko wtedy, gdy model Apple *w tym samym momencie* słyszy jedną z wymienionych wbudowanych kategorii.** Pakiet ptaków stawia bramkę na etykietach ptaków Apple. Jeśli Apple nie uważa, że jest ptak, twój pakiet milczy. Nieważne, jak bardzo jest pewny. Ta jedna linia usuwa ogromną większość fałszywych alertów od muzyki, TV i cichego pokoju, bo model Apple punktuje je daleko poniżej bramki. Pomiń to, a pakiet działa bez bramki (w porządku do testów, gadatliwy w prawdziwym świecie).

**Bramka jest dostępna tylko wtedy, gdy Apple ma już kategorię bliską twojemu dźwiękowi.** Jeśli pakiet jest po coś, czego model Apple z około 300 klas nie zna (konkretna maszyna w fabryce, pik urządzenia medycznego, własny dzwonek), nie ma wbudowanej etykiety do bramki. Zostawiasz `gateClasses` puste i pakiet działa bez bramki. Tak ma być. To nie błąd. W takich pakietach klasa **Background przestaje być jedną z kilku obron i staje się jedyną rzeczą, która stoi między tobą a ciągłymi fałszywymi alertami**. Włóż w nią dużo pracy (dużo prawdziwych nagrań otoczenia) i podnieś progi poszczególnych klas.

Bramkuj pakiet **ptaków** na *ogólnych* etykietach ptaków Apple plus na tych konkretnych, które twój model naprawdę potrafi nazwać: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping`. A jeśli pakiet ma pasujący gatunek, też `crow_caw` i `pigeon_dove_coo`. Inne typy pakietów biorą własne bramki z [pełnej listy wbudowanych identyfikatorów dźwięków](#appendix-built-in-sound-identifiers-ios-265) w dodatku niżej. Na przykład pakiet ras psów stawia bramkę na `dog_bark`/`dog_howl`, pakiet pojazdów na `engine`/`truck`.

### `muteClasses` — ustąp Apple przy dźwiękach, których twój model nie nazywa

`gateClasses` otwiera pakiet, gdy Apple uważa, że jest ptak. Ale Apple potrafi *konkretnie* nazwać niektóre ptaki, których twój model może nie obejmować: kaczkę, gęś, sowę, indyka, kurę albo koguta. Jeśli Apple słyszy kaczkę, a pakiet nie ma klasy kaczki, model na siłę wrzuci to kwakanie w najbliższy gatunek i z dużą pewnością nazwie złego ptaka. To pomyłka identyfikacji, nie fałszywy alert z ciszy. Samo `gateClasses` tego nie zatrzyma, bo kaczka też włącza ogólną bramkę `bird`.

`muteClasses` to naprawia: **gdy Apple jest pewny jednej z tych etykiet, twój pakiet w tej chwili milczy** i ustępuje konkretnemu wskazaniu Apple. Wypisz wbudowane etykiety dźwięków, których *nie* pokrywasz:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

Zasada: konkretna etykieta ptaka Apple idzie do **`gateClasses`**, jeśli model ma dla niej pasującą (albo lepszą) klasę, i do **`muteClasses`**, jeśli nie ma. Wszystko, co Apple potrafi nazwać, a ty nie → wycisz to i niech Apple ma rację.

## Krok 4 — Napisz `profiles.json` (opcjonalnie, zalecane)

To steruje tym, jak każdy dźwięk wygląda i jak się czuje w aplikacji. Jeden wpis na klasę. Klucz to **dokładna** nazwa folderu albo etykiety:

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

Każdy klucz jest opcjonalny. Pomiń cokolwiek, a wejdzie rozsądna wartość domyślna:

| Klucz | Co robi | Domyślnie |
|---|---|---|
| `displayName` | Nazwa na mapie i w alertach | Etykieta: podkreślenia → spacje, z wielkimi literami |
| `hapticCount` | Impulsy wibracji, gdy dźwięk pojawia się pierwszy raz (0 = brak) | `0` |
| `emergencyTier` | `"none"` dla zwykłych dźwięków. Zostaw `"none"`, chyba że dźwięk naprawdę wymaga pilnego alertu | `"none"` |
| `category` | Grupa: `animal`, `vehicle`, `medium`, `quiet` albo `misc` | `misc` |
| `icon` | Nazwa z [SF Symbols](https://developer.apple.com/sf-symbols/), na przykład `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | Barwa kropki i ikony: `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple` albo `"r,g,b"` z wartościami 0–1 | `teal` |
| `threshold` | Pewność (0–1) wymagana, zanim dźwięk się zarejestruje. Podnieś, gdy klasa daje fałszywe alerty. Obniż, gdy dźwięk umyka | `0.5` |
| `maxRange` | Orientacyjny maksymalny zasięg wykrycia pokazany na mapie, w stopach | `150` |

**Klasa `Background` potrzebuje specjalnego wpisu pokazanego wyżej.** `"threshold": 1.1` sprawia, że nie da się jej zgłosić (pewność nigdy nie przekracza 1.0). Po cichu wchłania audio otoczenia i nigdy nie pojawia się jako wykrycie. Nie pomijaj jej. Klasa, której nie ma na liście, i tak dostaje domyślny próg 0.5 i *pojawiłaby się* w aplikacji jako ogólny dźwięk.

## Krok 5 — Spakuj zip

Zaznacz trzy pliki — `pack.json`, `profiles.json`, `model.mlmodel` — kliknij prawym przyciskiem i wybierz **Kompresuj**. Spakowanie folderu, w którym leżą, też działa. Aplikacja zagląda jeden folder w głąb.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

Przenieś zip na iPhone’a, jak chcesz: AirDrop, iCloud Drive, Poczta, Wiadomości.

## Krok 6 — Import na iPhonie

1. Otwórz Vigilant Ear → menu zębatki → **Power Pack+**.
2. Przewiń do **Własne pakiety dźwięków (BYOM)** i stuknij **Importuj własny pakiet (.zip)**.
3. Wybierz zip w przeglądarce Plików.

Pakiet pojawia się na liście z liczbą dźwięków, już **NA ŻYWO**. Stąd możesz:

- **NA ŻYWO / OFF** — włączasz i wyłączasz pakiet bez kasowania. OFF nie zużywa baterii.
- **Usuń** — startuje 5-sekundowe odliczanie (stuknij jeszcze raz, żeby anulować), potem usuwa pakiet całkowicie.
- Importuj tyle pakietów, ile chcesz. Wszystkie działają obok wbudowanego detektora. Każdy dodatkowy pakiet na żywo kosztuje trochę baterii, więc wyłącz pakiety, których nie używasz.

Wykryte dźwięki wyglądają jak każde inne: kropka na mapie z twoją ikoną i kolorem, nazwa wyświetlana w alertach i ustawiona haptyka.

Kilka wbudowanych zachowań, które warto znać: aplikacja **nie** przekazuje wykryć z własnych pakietów do peerów mesh Constellation (na innych telefonach nie ma twojego pakietu), a dźwięki pakietu potrzebują dwóch wykryć z rzędu, zanim pojawi się alert. To odcina fałszywe trafienia z jednej klatki.

## Rozwiązywanie problemów

| Komunikat / objaw | Przyczyna i naprawa |
|---|---|
| „Nie znaleziono pack.json w zipie” | Pliki w zipie są głębiej niż jeden folder albo `pack.json` ma złą nazwę. Spakuj jeszcze raz, z trzema plikami na najwyższym poziomie. |
| „Nie dało się odczytać pack.json” | Błąd składni JSON: brakujący przecinek albo cudzysłów. Sprawdź go (na przykład wklej do walidatora JSON) i spakuj jeszcze raz. |
| „Nie znaleziono model.mlpackage ani model.mlmodel” | Plik modelu ma inną nazwę. Zmień ją dokładnie na `model.mlmodel` (albo `model.mlpackage`). |
| „Model nie jest klasyfikatorem dźwięków…” | Model nie jest modelem Create ML **Sound Classification**. Modeli obrazu, tekstu i tabel nie użyjesz. Wytrenuj jeszcze raz z szablonu Sound Classification. |
| Pakiet się importuje, ale dźwięk nigdy nie odpala | Pewność nie dochodzi do progu. Obniż `threshold` tej klasy (spróbuj `0.35`) i dodaj bardziej różnorodne klipy treningowe. |
| Dźwięk odpala się bez przerwy na szum otoczenia, muzykę albo TV | Dodaj `gateClasses` do `pack.json` (wyżej). To zdecydowanie największa dźwignia. Dodaj albo rozszerz klasę `Background` nagraniami tego otoczenia, potem wytrenuj i zaimportuj jeszcze raz. Podniesienie `threshold` klasy (na przykład `0.8`) też pomaga. |
| Prawdziwe dźwięki są wykrywane, ale też kilka złych | Dwa wykrycia z rzędu są już wymagane, a `gateClasses` odsiewa większość szumu. Przy reszcie podnieś `threshold` tej konkretnej klasy w stronę `0.85–0.9`. |
| Nazwy i haptyka z profiles.json nie działają | Klucze w `profiles.json` muszą dokładnie zgadzać się z etykietami klas modelu (nazwami folderów treningowych), razem z wielkością liter i podkreśleniami. |

## Aktualizacja pakietu

Wytrenuj jeszcze raz albo edytuj, spakuj od nowa i zaimportuj ponownie z tym samym `id` w `pack.json`. Aplikacja podmienia starą wersję w miejscu.

---

## Appendix: Built-in Sound Identifiers (iOS 26.5)

To wbudowane kategorie dźwięków, które rozpoznaje klasyfikator Sound Analysis Apple na urządzeniu. Te etykiety są dostępne wyżej dla `gateClasses` i `muteClasses`. Apple nie publikuje już tej listy na stronie dla deweloperów, więc tabelę niżej odczytano wprost z klasyfikatora na urządzeniu (`SNClassifierIdentifier.version1`).

**Znane klasyfikacje na lipiec 2026 (iOS 26.5): 303 etykiety.** Apple może dodać, usunąć albo zmienić nazwę w każdej aktualizacji systemu. Traktuj to jako zdjęcie z jednej chwili. Bramka na etykiecie, którą przyszły system usunie, po prostu nigdy nie zadziała (pakiet milczy). Nowo dodana etykieta nie istnieje, dopóki na niej nie zrobisz bramki. Użyj dokładnie takiej pisowni, jaka jest w tabeli (małe litery, podkreślenia).

| # | Identyfikator | Identyfikator | Identyfikator | Identyfikator |
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
  Wszelkie prawa zastrzeżone.<br />
  Wiele patentów w toku
</p>
