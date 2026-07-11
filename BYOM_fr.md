# Packs de sons personnalisés — Comment créer et importer le vôtre

Vigilant Ear peut apprendre de nouveaux sons. Un **pack de sons personnalisé** apprend à l’app à reconnaître des sons que le détecteur intégré d’Apple ne connaît pas — les oiseaux de votre région, une machine précise au travail, le drôle de bip du couloir de votre immeuble. Vous entraînez un petit modèle sur un Mac (aucun code requis), vous le compressez avec deux petits fichiers texte, et vous l’importez sur votre iPhone.

Les packs personnalisés **s’ajoutent par-dessus** le détecteur intégré. Activer un pack n’en désactive jamais un autre — sirènes, alarmes et tous les autres sons de sécurité continuent de fonctionner exactement comme avant.

**Vous aurez besoin :** d’un Mac avec l’app **Create ML** d’Xcode (gratuite), d’enregistrements audio de vos sons, et de Power Pack+ sur votre iPhone (l’essai gratuit compte).

---

## Exigences strictes — respectez-les à la lettre

Un pack qui ignore l’une de ces règles s’importera mais se comportera mal (fausses alertes constantes, ou aucune détection). Ce ne sont pas des suggestions :

1. **Incluez une classe `Background` — obligatoire, pas optionnelle.** Votre modèle doit avoir une classe entraînée sur vos vrais environnements ambiants (pièce calme, rue, ventilateur en marche). Remplissez-la avec 15+ vrais enregistrements et marquez-la avec `"category": "ignored"` et `"threshold": 1.1` dans `profiles.json`. **Sans classe Background, votre pack se déclenchera constamment sur le silence** — un classifieur de sons est forcé de choisir l’une de ses classes à chaque instant d’audio ; sans seau « aucun de ceux-ci », il étiquette votre pièce calme comme ce qui lui ressemble le plus.
2. **Découpez le silence de vos extraits d’entraînement.** Un extrait étiqueté « Owl » qui est 20 secondes de silence avec un seul hululement apprend au modèle que *le silence est un hibou*. Recadrez les extraits serrés autour du son cible, sinon le modèle apprend les silences.
3. **Nommez le fichier modèle exactement `model.mlmodel` ou `model.mlpackage`.** Tout autre nom → l’import échoue.
4. **Utilisez un modèle Create ML *Sound Classification*.** Les modèles image/texte/tabulaires sont refusés.
5. **Les clés de `profiles.json` doivent correspondre exactement aux libellés de classes du modèle** — c’est-à-dire les noms de vos dossiers d’entraînement, majuscules et underscores compris.
6. **Ajoutez `gateClasses`** (voir ci-dessous). Sans cela, la musique et la télé déclencheront le pack. C’est de loin le meilleur contrôle des fausses alertes.
7. **Compressez les fichiers au niveau supérieur** (ou dans un seul dossier — pas plus profond). `pack.json` doit être trouvable.
8. **Équilibrez vos classes.** Ne donnez pas 100 extraits à une classe et 10 à une autre — le modèle penchera vers la plus grande. Plafonnez les classes généreusement échantillonnées pour que les effectifs restent dans un rapport d’environ 3× les uns des autres.

Le reste de ce guide reprend chacun de ces points dans l’ordre.

---

## Étape 1 — Rassembler l’audio d’entraînement

Créez un dossier pour chaque son à reconnaître, nommé d’après ce son, et remplissez-le d’exemples d’enregistrements :

```
TrainingData/
  Mourning_Dove/        ← 20+ clips of mourning doves
  House_Finch/          ← 20+ clips of house finches
  Background/           ← 20+ clips of your ambient environment WITHOUT the sounds
```

Astuces qui font vraiment la différence :

- **Incluez toujours une classe `Background`.** Le modèle doit étiqueter chaque instant d’audio comme *quelque chose* — sans classe d’arrière-plan, le silence et le bruit de rue sont poussés dans vos vraies classes et vous verrez des fausses alertes. Enregistrez les lieux où vous utiliserez réellement le pack : votre jardin, l’atelier, la cuisine.
- **Les noms de dossiers deviennent les libellés** affichés par l’app (les underscores deviennent des espaces : `Mourning_Dove` → « Mourning Dove »). Vous pouvez remplacer les noms d’affichage plus tard dans `profiles.json`.
- Plus de variété vaut mieux que plus de longueur : différentes distances, heures de la journée et conditions de fond. Des extraits de quelques secondes suffisent.
- Les formats courants fonctionnent (.m4a, .wav, .mp3, .aiff).

## Étape 2 — Entraîner le modèle dans Create ML

1. Ouvrez **Create ML** (sur un Mac avec Xcode : menu Xcode → Open Developer Tool → Create ML), et créez un nouveau projet **Sound Classification**.
2. Glissez votre dossier `TrainingData` dans **Training Data**.
3. Cliquez sur **Train**. Quelques centaines d’extraits s’entraînent en quelques minutes.
4. Consultez l’onglet de précision — si une classe score mal, elle a besoin de plus d’extraits, ou d’extraits plus variés.
5. Dans l’onglet **Output**, cliquez sur **Get** et enregistrez le modèle sous **`model.mlmodel`** (ou `model.mlpackage` — les deux fonctionnent). Le nom de fichier doit être exactement `model.mlmodel` ou `model.mlpackage`.

## Étape 3 — Écrire `pack.json`

Un petit manifeste décrivant le pack :

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

- **`name`** est obligatoire — c’est ce qui apparaît dans la liste des packs de l’app.
- **`id`** identifie le pack pour les mises à jour : réimporter un pack avec le même `id` remplace l’ancienne version sur place. Toute chaîne unique de style reverse-DNS convient.
- **`classes`** sert uniquement de documentation. L’app lit la vraie liste de classes depuis le modèle lui-même, donc un décalage ne cassera rien (il est juste noté dans le journal).
- **`gateClasses`** (optionnel, fortement recommandé) est l’outil le plus efficace pour stopper les faux positifs. Voir ci-dessous.

### `gateClasses` — laissez le modèle d’Apple faire le videur

Votre modèle est un *spécialiste* : il est bon pour dire *lequel* de vos sons il entend, mais il n’a aucune idée de ce qu’est « pas un de mes sons » (c’est ce que la classe Background aide à gérer). Le classifieur intégré d’Apple est un *généraliste* entraîné sur ~300 sons du quotidien — il est très bon sur la question grossière « y a-t-il un oiseau du tout ? »

`gateClasses` les enchaîne : **les détections de votre pack ne sont signalées que lorsque le modèle d’Apple entend *en même temps* l’une des catégories intégrées listées.** Un pack d’oiseaux se porte sur les libellés oiseaux d’Apple, donc si Apple ne pense pas qu’il y a un oiseau, votre pack reste silencieux — peu importe sa confiance. Cette seule ligne élimine la grande majorité des fausses alertes musique, télé et pièce calme, parce que le modèle d’Apple les score bien en dessous du seuil de porte. Laissez-le de côté et le pack tourne sans filtrage (correct pour les tests, bavard dans le monde réel).

**Le filtrage n’est disponible que lorsque Apple a déjà une catégorie proche de votre son.** Si votre pack vise quelque chose que le modèle ~300 classes d’Apple ne connaît pas — une machine d’usine précise, le bip d’un appareil médical, une sonnette sur mesure — il n’y a aucun libellé intégré sur lequel se porter, donc vous laissez `gateClasses` de côté et le pack tourne sans filtrage. C’est attendu, pas une erreur. Pour ces packs, votre **classe Background n’est plus une défense parmi d’autres : elle devient la seule chose entre vous et des fausses alertes constantes** — investissez-y donc massivement (beaucoup de vrais enregistrements ambiants) et relevez vos seuils par classe.

Portez un pack **oiseaux** sur les libellés oiseaux *génériques* d’Apple plus tout libellé spécifique que votre modèle peut réellement nommer : `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — et, si votre pack a l’espèce correspondante, `crow_caw` et `pigeon_dove_coo`. Les autres types de packs choisissent leurs propres portes dans la [liste complète des identifiants de sons intégrés](#appendix-built-in-sound-identifiers-ios-265) en annexe ci-dessous — p. ex. un pack de races de chiens se porte sur `dog_bark`/`dog_howl`, un pack véhicules sur `engine`/`truck`.

### `muteClasses` — s’en remettre à Apple pour les sons que votre modèle ne peut pas nommer

`gateClasses` ouvre votre pack quand Apple pense qu’il y a un oiseau. Mais Apple peut *spécifiquement* nommer certains oiseaux que votre modèle ne couvre peut-être pas — un canard, une oie, un hibou, une dinde, un poulet ou un coq. Si Apple entend un canard et que votre pack n’a pas de classe canard, votre modèle forcera ce coin-coin dans l’espèce la plus proche et l’appellera avec assurance le mauvais oiseau. C’est une mauvaise identification, pas une fausse alerte due au silence — et `gateClasses` seul ne l’arrêtera pas, car un canard déclenche aussi la porte générique `bird`.

`muteClasses` corrige cela : **lorsque Apple est confiant sur l’un de ces libellés, votre pack reste silencieux pour cet instant** et s’en remet à l’appel spécifique d’Apple. Listez les libellés intégrés des sons que vous *ne* couvrez *pas* :

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

Règle empirique : un libellé oiseau spécifique d’Apple va dans **`gateClasses`** si votre modèle a une classe correspondante (ou meilleure) pour lui, et dans **`muteClasses`** s’il n’en a pas. Tout ce qu’Apple peut nommer et que vous ne pouvez pas → mettez-le en sourdine, et laissez Apple avoir raison.

## Étape 4 — Écrire `profiles.json` (optionnel, recommandé)

Cela contrôle l’apparence et le ressenti de chaque son dans l’app — une entrée par classe, indexée par le nom **exact** de dossier/libellé :

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

Chaque clé est optionnelle — omettez ce que vous voulez et un défaut raisonnable s’applique :

| Clé | Rôle | Défaut |
|---|---|---|
| `displayName` | Nom affiché sur la carte et dans les alertes | Libellé avec underscores → espaces, capitalisé |
| `hapticCount` | Impulsions de vibration à la première révélation du son (0 = aucune) | `0` |
| `emergencyTier` | `"none"` pour les sons normaux. Laissez `"none"` sauf si le son justifie vraiment une alerte urgente | `"none"` |
| `category` | Regroupement : `animal`, `vehicle`, `medium`, `quiet`, ou `misc` | `misc` |
| `icon` | Un nom [SF Symbols](https://developer.apple.com/sf-symbols/), p. ex. `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | Teinte du point/icône : `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple`, ou `"r,g,b"` avec des valeurs 0–1 | `teal` |
| `threshold` | Confiance (0–1) requise avant que le son soit enregistré. Augmentez-la si une classe fait des fausses alertes ; baissez-la si elle est manquée | `0.5` |
| `maxRange` | Portée max. de détection approximative affichée sur la carte, en pieds | `150` |

**Votre classe `Background` a besoin de l’entrée spéciale ci-dessus** : `"threshold": 1.1` la rend impossible à signaler (la confiance ne dépasse jamais 1.0), donc elle absorbe silencieusement l’audio ambiant au lieu de jamais apparaître comme une détection. Ne vous contentez pas de l’omettre — une classe non listée reçoit quand même le seuil par défaut 0.5 et *apparaîtrait* dans l’app comme un son générique.

## Étape 5 — Compresser

Sélectionnez les trois fichiers — `pack.json`, `profiles.json`, `model.mlmodel` — clic droit, puis **Compress**. Compresser le dossier englobant fonctionne aussi ; l’app regarde un dossier en profondeur.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

Transférez le zip sur votre iPhone comme vous le souhaitez : AirDrop, iCloud Drive, Mail, Messages.

## Étape 6 — Importer sur votre iPhone

1. Ouvrez Vigilant Ear → menu engrenage → **Power Pack+**.
2. Faites défiler jusqu’à **Custom Sound Packs (BYOM)** et appuyez sur **Import Custom Pack (.zip)**.
3. Choisissez votre zip dans le navigateur Fichiers.

Le pack apparaît dans la liste avec son nombre de sons, déjà **LIVE**. À partir de là vous pouvez :

- **LIVE / OFF** — basculer le pack sans le supprimer. Off ne consomme aucune batterie.
- **Delete** — lance un compte à rebours de 5 secondes (appuyez à nouveau pour annuler), puis retire complètement le pack.
- Importer autant de packs que vous voulez ; ils tournent tous en parallèle du détecteur intégré. Chaque pack live supplémentaire coûte un peu de batterie, donc désactivez ceux que vous n’utilisez pas.

Les sons détectés apparaissent comme les autres : un point sur la carte avec votre icône et couleur, le nom d’affichage dans les alertes, et vos retours haptiques configurés.

Quelques comportements intégrés à connaître : les détections de packs personnalisés **ne** sont **pas** relayées aux pairs du maillage Constellation (les autres téléphones n’auront pas votre pack installé), et les sons de pack exigent deux détections consécutives avant d’alerter, ce qui filtre les faux positifs d’une seule image.

## Dépannage

| Message / symptôme | Cause et solution |
|---|---|
| "No pack.json found in the zip" | Les fichiers du zip sont imbriqués à plus d’un dossier de profondeur, ou `pack.json` est mal nommé. Recompressez avec les trois fichiers au niveau supérieur. |
| "pack.json could not be read" | Erreur de syntaxe JSON — virgule ou guillemet manquant. Validez-le (p. ex. collez-le dans un vérificateur JSON) et recompressez. |
| "No model.mlpackage or model.mlmodel found" | Le fichier modèle a un autre nom. Renommez-le exactement en `model.mlmodel` (ou `model.mlpackage`). |
| "The model is not a sound classifier…" | Le modèle n’est pas un modèle Create ML **Sound Classification** — les modèles image/texte/tabulaires ne peuvent pas être utilisés. Réentraînez avec le modèle Sound Classification. |
| Le pack s’importe mais un son ne se déclenche jamais | Sa confiance n’atteint pas le seuil. Baissez le `threshold` de cette classe (essayez `0.35`), et ajoutez des extraits d’entraînement plus variés. |
| Un son se déclenche constamment sur le bruit ambiant, la musique ou la télé | Ajoutez `gateClasses` à `pack.json` (voir ci-dessus) — c’est de loin le levier le plus fort. Ajoutez/élargissez aussi la classe `Background` avec des enregistrements de l’environnement en cause, puis réentraînez et réimportez. Relever le `threshold` de la classe (p. ex. `0.8`) aide aussi. |
| Les vrais sons sont détectés, mais aussi quelques mauvais | Deux détections consécutives sont déjà exigées, et `gateClasses` filtre la plupart du bruit. Pour les récalcitrants, poussez le `threshold` de cette classe précise vers `0.85–0.9`. |
| Les noms/haptiques de profiles.json ne s’appliquent pas | Les clés de `profiles.json` doivent correspondre exactement aux libellés de classes du modèle (noms de vos dossiers d’entraînement), majuscules et underscores compris. |

## Mettre à jour un pack

Réentraînez ou modifiez, recompressez, et réimportez avec le même `id` dans `pack.json` — l’ancienne version est remplacée sur place.

---

## Appendix: Built-in Sound Identifiers (iOS 26.5)

Voici les catégories de sons intégrées que le classifieur Sound Analysis d’Apple sur l’appareil peut reconnaître — les libellés disponibles pour `gateClasses` et `muteClasses` ci-dessus. Apple ne publie plus cette liste sur son site développeur, donc le tableau ci-dessous a été lu directement depuis le classifieur sur l’appareil (`SNClassifierIdentifier.version1`).

**Classifications connues en juillet 2026 (iOS 26.5) — 303 libellés.** Apple peut ajouter, retirer ou renommer ceux-ci à chaque mise à jour du système, donc traitez ceci comme un instantané à un moment donné : se porter sur un libellé qu’un futur OS retire signifie simplement que cette porte ne se déclenche jamais (votre pack reste silencieux), et un libellé nouvellement ajouté n’existera pas tant que vous ne vous y portez pas. Utilisez l’orthographe exacte indiquée (minuscules, underscores).

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
