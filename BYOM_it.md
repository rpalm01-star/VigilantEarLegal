# Pack di suoni personalizzati — Come creare e importare i tuoi

Vigilant Ear può imparare suoni nuovi. Un **pack di suoni personalizzato** insegna all'app a riconoscere suoni che il rilevatore integrato di Apple non conosce — gli uccelli della tua zona, una macchina specifica al lavoro, lo strano cicalino del corridoio del tuo palazzo. Alleni un piccolo modello su un Mac (senza scrivere codice), lo comprimi in uno zip con due piccoli file di testo e lo importi sul tuo iPhone.

I pack personalizzati **si aggiungono sopra** il rilevatore integrato. Attivare un pack non disattiva mai nient'altro — sirene, allarmi e tutti gli altri suoni di sicurezza continuano a funzionare esattamente come prima.

**Ti serviranno:** un Mac con l'app **Create ML** di Xcode (gratuita), registrazioni audio dei tuoi suoni e Power Pack+ sul tuo iPhone (la prova gratuita conta).

---

## Requisiti tassativi — rispettali alla lettera

Un pack che ignora anche uno solo di questi punti si importerà, ma si comporterà male (falsi allarmi continui, o nessun rilevamento). Non sono suggerimenti:

1. **Includi una classe `Background` — obbligatoria, non facoltativa.** Il tuo modello deve avere una classe allenata sui tuoi veri ambienti sonori (stanza silenziosa, strada, ventilatore acceso). Riempila con 15+ registrazioni reali e contrassegnala con `"category": "ignored"` e `"threshold": 1.1` in `profiles.json`. **Senza una classe Background il tuo pack scatterà di continuo sul silenzio** — un classificatore di suoni è costretto a scegliere una delle sue classi per ogni istante di audio, quindi senza un contenitore "nessuno di questi" etichetterà la tua stanza silenziosa come ciò che le somiglia di più.
2. **Taglia il silenzio dalle clip di allenamento.** Una clip etichettata "Owl" fatta di 20 secondi di silenzio con un solo bubolio insegna al modello che *il silenzio è un gufo*. Ritaglia le clip strette attorno al suono bersaglio, altrimenti il modello impara i vuoti.
3. **Chiama il file del modello esattamente `model.mlmodel` o `model.mlpackage`.** Qualsiasi altro nome → l'importazione fallisce.
4. **Usa un modello Create ML di *Sound Classification*.** I modelli immagine/testo/tabulari vengono rifiutati.
5. **Le chiavi di `profiles.json` devono corrispondere esattamente alle etichette di classe del modello** — cioè i nomi delle tue cartelle di allenamento, maiuscole e underscore compresi.
6. **Aggiungi `gateClasses`** (vedi sotto). Senza, musica e TV faranno scattare il pack. È di gran lunga il controllo più importante contro i falsi allarmi.
7. **Comprimi i file al livello superiore** (o dentro una sola cartella — non più in profondità). `pack.json` deve essere trovabile.
8. **Bilancia le classi.** Non dare a una classe 100 clip e a un'altra 10 — il modello penderà verso quella grande. Limita le classi campionate abbondantemente in modo che i conteggi restino entro ~3× l'uno dall'altro.

Il resto di questa guida ripercorre ciascuno di questi punti in ordine.

---

## Passo 1 — Raccogli l'audio di allenamento

Crea una cartella per ogni suono che vuoi riconoscere, con il nome di quel suono, e riempila di registrazioni di esempio:

```
TrainingData/
  Mourning_Dove/        ← 20+ clips of mourning doves
  House_Finch/          ← 20+ clips of house finches
  Background/           ← 20+ clips of your ambient environment WITHOUT the sounds
```

Consigli che fanno davvero la differenza:

- **Includi sempre una classe `Background`.** Il modello deve etichettare ogni istante di audio come *qualcosa* — senza una classe di sottofondo, il silenzio e il rumore della strada finiscono nelle tue classi vere e vedrai falsi allarmi. Registra i posti dove userai davvero il pack: il tuo giardino, il reparto in officina, la tua cucina.
- **I nomi delle cartelle diventano le etichette** mostrate dall'app (gli underscore diventano spazi: `Mourning_Dove` → "Mourning Dove"). Potrai sostituire i nomi visualizzati più avanti in `profiles.json`.
- Più varietà batte più durata: distanze diverse, orari diversi e condizioni di sottofondo diverse. Clip di pochi secondi ciascuna vanno benissimo.
- Funzionano i formati comuni (.m4a, .wav, .mp3, .aiff).

## Passo 2 — Allena il modello in Create ML

1. Apri **Create ML** (su un Mac con Xcode: menu Xcode → Open Developer Tool → Create ML) e crea un nuovo progetto **Sound Classification**.
2. Trascina la tua cartella `TrainingData` in **Training Data**.
3. Fai clic su **Train**. Qualche centinaio di clip si allena in pochi minuti.
4. Controlla la scheda della precisione — se una classe ottiene punteggi bassi, servono più clip, o clip più varie.
5. Nella scheda **Output**, fai clic su **Get** e salva il modello come **`model.mlmodel`** (o `model.mlpackage` — funzionano entrambi). Il nome del file deve essere esattamente `model.mlmodel` o `model.mlpackage`.

## Passo 3 — Scrivi `pack.json`

Un piccolo manifest che descrive il pack:

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

- **`name`** è obbligatorio — è ciò che compare nell'elenco dei pack dell'app.
- **`id`** identifica il pack per gli aggiornamenti: reimportare un pack con lo stesso `id` sostituisce la vecchia versione al suo posto. Va bene qualsiasi stringa unica in stile reverse-DNS.
- **`classes`** è solo documentazione. L'app legge il vero elenco delle classi dal modello stesso, quindi una discrepanza non rompe nulla (viene solo annotata nel log).
- **`gateClasses`** (facoltativo, fortemente consigliato) è lo strumento più efficace per fermare i falsi positivi. Vedi sotto.

### `gateClasses` — lascia che il modello di Apple faccia il buttafuori

Il tuo modello è uno *specialista*: è bravo a dire *quale* dei tuoi suoni sta sentendo, ma non ha idea di cosa sia "nessuno dei miei suoni" (è a questo che serve la classe Background). Il classificatore integrato di Apple è un *generalista* allenato su ~300 suoni quotidiani — è molto bravo nella domanda grossolana "c'è un uccello, sì o no?".

`gateClasses` li mette in catena: **i rilevamenti del tuo pack vengono segnalati solo quando il modello di Apple sta sentendo *contemporaneamente* una delle categorie integrate elencate.** Un pack di uccelli si filtra sulle etichette di uccelli di Apple, così se Apple non pensa che ci sia un uccello, il tuo pack resta in silenzio — per quanto sicuro sia. Questa sola riga elimina la stragrande maggioranza dei falsi allarmi da musica, TV e stanza silenziosa, perché il modello di Apple assegna a quei casi punteggi molto sotto la soglia del cancello. Se la ometti, il pack gira senza filtro (va bene per i test, chiacchierone nel mondo reale).

**Il filtraggio è disponibile solo quando Apple ha già una categoria vicina al tuo suono.** Se il tuo pack riguarda qualcosa che il modello di ~300 classi di Apple non conosce — una macchina di fabbrica specifica, il bip di un dispositivo medico, un campanello su misura — non c'è nessuna etichetta integrata su cui filtrare, quindi lasci fuori `gateClasses` e il pack gira senza filtro. È il comportamento previsto, non un errore. Per quei pack la tua **classe Background smette di essere una difesa tra tante e diventa l'unica cosa che ti separa da falsi allarmi continui** — quindi investici molto (tante registrazioni ambientali reali) e alza le soglie per classe.

Filtra un pack di **uccelli** sulle etichette di uccelli *generiche* di Apple più quelle specifiche che il tuo modello sa davvero nominare: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — e, se il tuo pack ha la specie corrispondente, `crow_caw` e `pigeon_dove_coo`. Gli altri tipi di pack scelgono i propri cancelli dalla [lista completa degli identificatori di suoni integrati](#appendix-built-in-sound-identifiers-ios-265) nell'appendice qui sotto — p. es. un pack di razze canine filtra su `dog_bark`/`dog_howl`, un pack di veicoli su `engine`/`truck`.

### `muteClasses` — rimettiti ad Apple per i suoni che il tuo modello non sa nominare

`gateClasses` apre il tuo pack quando Apple pensa che ci sia un uccello. Ma Apple sa nominare *specificamente* alcuni uccelli che il tuo modello forse non copre — un'anatra, un'oca, un gufo, un tacchino, una gallina o un gallo. Se Apple sente un'anatra e il tuo pack non ha una classe anatra, il tuo modello forzerà quel qua qua nella specie più vicina e lo chiamerà con sicurezza l'uccello sbagliato. È un'identificazione errata, non un falso allarme da silenzio — e `gateClasses` da solo non lo fermerà, perché anche un'anatra fa scattare il cancello generico `bird`.

`muteClasses` lo risolve: **quando Apple è sicura di una di queste etichette, il tuo pack resta in silenzio per quell'istante** e si rimette alla chiamata specifica di Apple. Elenca le etichette integrate dei suoni che *non* copri:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

Regola pratica: un'etichetta specifica di uccello di Apple va in **`gateClasses`** se il tuo modello ha una classe corrispondente (o migliore), e in **`muteClasses`** se non ce l'ha. Tutto ciò che Apple sa nominare e tu no → silenzialo, e lascia che Apple abbia ragione.

## Passo 4 — Scrivi `profiles.json` (facoltativo, consigliato)

Questo controlla l'aspetto e il comportamento di ogni suono nell'app — una voce per classe, con chiave il nome **esatto** di cartella/etichetta:

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

Ogni chiave è facoltativa — ometti quello che vuoi e si applica un valore predefinito ragionevole:

| Chiave | Cosa fa | Predefinito |
|---|---|---|
| `displayName` | Nome mostrato sulla mappa e negli avvisi | Etichetta con underscore → spazi, con iniziali maiuscole |
| `hapticCount` | Impulsi di vibrazione quando il suono viene rivelato per la prima volta (0 = nessuno) | `0` |
| `emergencyTier` | `"none"` per i suoni normali. Lascialo `"none"` a meno che il suono non giustifichi davvero un avviso urgente | `"none"` |
| `category` | Raggruppamento: `animal`, `vehicle`, `medium`, `quiet` o `misc` | `misc` |
| `icon` | Un nome di [SF Symbols](https://developer.apple.com/sf-symbols/), p. es. `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | Tinta del punto/icona: `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple`, oppure `"r,g,b"` con valori 0–1 | `teal` |
| `threshold` | Confidenza (0–1) richiesta prima che il suono venga registrato. Alzala se una classe dà falsi allarmi; abbassala se il suono viene perso | `0.5` |
| `maxRange` | Portata massima approssimativa di rilevamento mostrata sulla mappa, in piedi | `150` |

**La tua classe `Background` ha bisogno della voce speciale mostrata sopra**: `"threshold": 1.1` la rende impossibile da segnalare (la confidenza non supera mai 1.0), così assorbe in silenzio l'audio ambientale invece di comparire mai come rilevamento. Non limitarti a ometterla — una classe non elencata riceve comunque la soglia predefinita 0.5 e *comparirebbe* nell'app come suono generico.

## Passo 5 — Comprimi lo zip

Seleziona i tre file — `pack.json`, `profiles.json`, `model.mlmodel` —, fai clic con il tasto destro e scegli **Compress**. Funziona anche comprimere la cartella che li contiene; l'app guarda una cartella in profondità.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

Porta lo zip sul tuo iPhone come preferisci: AirDrop, iCloud Drive, Mail, Messaggi.

## Passo 6 — Importa sul tuo iPhone

1. Apri Vigilant Ear → menu dell'ingranaggio → **Power Pack+**.
2. Scorri fino a **Custom Sound Packs (BYOM)** e tocca **Import Custom Pack (.zip)**.
3. Scegli il tuo zip nel browser di File.

Il pack compare nell'elenco con il suo conteggio di suoni, già **LIVE**. Da lì puoi:

- **LIVE / OFF** — attivare o disattivare il pack senza eliminarlo. Spento non consuma batteria.
- **Delete** — avvia un conto alla rovescia di 5 secondi (tocca di nuovo per annullare), poi rimuove completamente il pack.
- Importare tutti i pack che vuoi; girano tutti accanto al rilevatore integrato. Ogni pack attivo in più consuma un po' di batteria, quindi spegni i pack che non usi.

I suoni rilevati compaiono come tutti gli altri: un punto sulla mappa con la tua icona e il tuo colore, il nome visualizzato negli avvisi e i feedback aptici che hai configurato.

Un paio di comportamenti integrati da conoscere: i rilevamenti dei pack personalizzati **non** vengono inoltrati ai peer della mesh Constellation (gli altri telefoni non avranno il tuo pack installato), e i suoni del pack richiedono due rilevamenti consecutivi prima di avvisare, il che filtra i falsi positivi da singolo frame.

## Risoluzione dei problemi

| Messaggio / sintomo | Causa e soluzione |
|---|---|
| "No pack.json found in the zip" | I file dello zip sono annidati a più di una cartella di profondità, oppure `pack.json` ha il nome sbagliato. Ricomprimi con i tre file al livello superiore. |
| "pack.json could not be read" | Errore di sintassi JSON — una virgola o una virgoletta mancante. Validalo (p. es. incollalo in un verificatore JSON) e ricomprimi. |
| "No model.mlpackage or model.mlmodel found" | Il file del modello ha un altro nome. Rinominalo esattamente in `model.mlmodel` (o `model.mlpackage`). |
| "The model is not a sound classifier…" | Il modello non è un modello Create ML di **Sound Classification** — quelli immagine/testo/tabulari non si possono usare. Riallena con il template Sound Classification. |
| Il pack si importa ma un suono non scatta mai | La sua confidenza non raggiunge la soglia. Abbassa il `threshold` di quella classe (prova `0.35`) e aggiungi clip di allenamento più varie. |
| Un suono scatta di continuo su rumore ambientale, musica o TV | Aggiungi `gateClasses` a `pack.json` (vedi sopra) — è di gran lunga la leva più grande. Aggiungi/amplia anche la classe `Background` con registrazioni dell'ambiente incriminato, poi riallena e reimporta. Anche alzare il `threshold` della classe (p. es. `0.8`) aiuta. |
| I suoni veri vengono rilevati, ma anche qualcuno sbagliato | Due rilevamenti consecutivi sono già richiesti, e `gateClasses` filtra la maggior parte del rumore. Per quelli che restano, spingi il `threshold` di quella classe specifica verso `0.85–0.9`. |
| I nomi/gli aptici di profiles.json non vengono applicati | Le chiavi di `profiles.json` devono corrispondere esattamente alle etichette di classe del modello (i nomi delle tue cartelle di allenamento), maiuscole e underscore compresi. |

## Aggiornare un pack

Riallena o modifica, ricomprimi e importa di nuovo con lo stesso `id` in `pack.json` — la vecchia versione viene sostituita al suo posto.

---

## Appendix: Built-in Sound Identifiers (iOS 26.5)

Queste sono le categorie di suoni integrate che il classificatore Sound Analysis on-device di Apple sa riconoscere — le etichette disponibili per `gateClasses` e `muteClasses` qui sopra. Apple non pubblica più questa lista sul suo sito per sviluppatori, quindi la tabella seguente è stata letta direttamente dal classificatore sul dispositivo (`SNClassifierIdentifier.version1`).

**Classificazioni note a luglio 2026 (iOS 26.5) — 303 etichette.** Apple può aggiungere, rimuovere o rinominare queste etichette in qualsiasi aggiornamento del sistema, quindi trattala come un'istantanea in un momento preciso: filtrare su un'etichetta che un OS futuro elimina significa semplicemente che quel cancello non scatta mai (il tuo pack resta in silenzio), e un'etichetta appena aggiunta non esisterà finché non la usi per filtrare. Usa la grafia esatta mostrata (minuscole, underscore).

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
