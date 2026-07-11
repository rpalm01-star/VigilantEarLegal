# Packs de sonidos personalizados — Cómo crear e importar los tuyos

Vigilant Ear puede aprender sonidos nuevos. Un **pack de sonidos personalizado** enseña a la app a reconocer sonidos que el detector integrado de Apple no conoce: aves locales, una máquina concreta del trabajo, el zumbador raro del pasillo de tu edificio. Entrenas un modelo pequeño en un Mac (sin programar), lo empaquetas en un zip con dos archivos de texto pequeños y lo importas en tu iPhone.

Los packs personalizados **se suman al** detector integrado. Activar un pack nunca desactiva nada más: sirenas, alarmas y el resto de sonidos de seguridad siguen funcionando exactamente igual.

**Necesitarás:** un Mac con la app **Create ML** de Xcode (gratis), grabaciones de audio de tus sonidos y Power Pack+ en tu iPhone (cuenta el periodo de prueba gratuito).

---

## Requisitos estrictos — respétalos al pie de la letra

Un pack que ignore cualquiera de estos se importará, pero se comportará mal (alertas falsas constantes o nada detectado). No son sugerencias:

1. **Incluye una clase `Background` — obligatoria, no opcional.** Tu modelo debe tener una clase entrenada con tus entornos ambientales reales (habitación en silencio, calle, ventilador encendido). Llénala con 15+ grabaciones reales y márcala con `"category": "ignored"` y `"threshold": 1.1` en `profiles.json`. **Sin una clase Background, tu pack se disparará sin parar en silencio** — un clasificador de sonidos se ve obligado a elegir una de sus clases en cada instante de audio, así que sin un cubo de “ninguno de estos” etiquetará tu habitación en silencio como lo que más se le parezca.
2. **Recorta el silencio de tus clips de entrenamiento.** Un clip etiquetado “Owl” que es 20 segundos de silencio con un solo ulular enseña al modelo que *el silencio es un búho*. Recorta los clips al sonido objetivo, o el modelo aprende los huecos.
3. **Nombra el archivo del modelo exactamente `model.mlmodel` o `model.mlpackage`.** Cualquier otro nombre → falla la importación.
4. **Usa un modelo Create ML de *Sound Classification*.** Los modelos de imagen/texto/tabulares se rechazan.
5. **Las claves de `profiles.json` deben coincidir exactamente con las etiquetas de clase del modelo** — es decir, los nombres de tus carpetas de entrenamiento, incluidas mayúsculas y guiones bajos.
6. **Añade `gateClasses`** (ver más abajo). Sin eso, la música y la TV activarán el pack. Es el control de falsas alarmas más importante.
7. **Comprime los archivos en el nivel superior** (o dentro de una sola carpeta — no más profundo). `pack.json` debe ser localizable.
8. **Equilibra tus clases.** No des a una clase 100 clips y a otra 10: el modelo se inclinará hacia la grande. Limita las clases con muchas muestras para que los conteos queden dentro de ~3× entre sí.

El resto de esta guía recorre cada uno de estos puntos en orden.

---

## Paso 1 — Reúne el audio de entrenamiento

Crea una carpeta por cada sonido que quieras reconocer, nombrada según ese sonido, y llénala con grabaciones de ejemplo:

```
TrainingData/
  Mourning_Dove/        ← 20+ clips de mourning doves
  House_Finch/          ← 20+ clips de house finches
  Background/           ← 20+ clips de tu entorno ambiental SIN esos sonidos
```

Consejos que marcan la diferencia:

- **Incluye siempre una clase `Background`.** El modelo debe etiquetar cada instante de audio como *algo*: sin una clase de fondo, el silencio y el ruido de la calle se meten en tus clases reales y verás alertas falsas. Graba los lugares donde usarás el pack de verdad: tu jardín, el piso del taller, tu cocina.
- **Los nombres de carpeta se convierten en las etiquetas** que muestra la app (los guiones bajos se vuelven espacios: `Mourning_Dove` → "Mourning Dove"). Puedes anular los nombres visibles más tarde en `profiles.json`.
- Más variedad vence a más duración: distintas distancias, horas del día y condiciones de fondo. Clips de unos pocos segundos están bien.
- Funcionan los formatos habituales (.m4a, .wav, .mp3, .aiff).

## Paso 2 — Entrena el modelo en Create ML

1. Abre **Create ML** (en un Mac con Xcode: menú Xcode → Open Developer Tool → Create ML) y crea un proyecto nuevo de **Sound Classification**.
2. Arrastra tu carpeta `TrainingData` a **Training Data**.
3. Pulsa **Train**. Unos cientos de clips se entrenan en minutos.
4. Revisa la pestaña de precisión: si una clase puntúa mal, necesita más clips o clips más variados.
5. En la pestaña **Output**, pulsa **Get** y guarda el modelo como **`model.mlmodel`** (o `model.mlpackage` — ambos sirven). El nombre del archivo debe ser exactamente `model.mlmodel` o `model.mlpackage`.

## Paso 3 — Escribe `pack.json`

Un manifiesto pequeño que describe el pack:

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

- **`name`** es obligatorio: es lo que aparece en la lista de packs de la app.
- **`id`** identifica el pack para actualizaciones: reimportar un pack con el mismo `id` reemplaza la versión anterior en su sitio. Cualquier cadena única al estilo reverse-DNS sirve.
- **`classes`** es solo documentación. La app lee la lista real de clases del propio modelo, así que un desajuste no rompe nada (solo se anota en el log).
- **`gateClasses`** (opcional, muy recomendado) es la herramienta más eficaz para frenar falsos positivos. Ver más abajo.

### `gateClasses` — deja que el modelo de Apple sea tu portero

Tu modelo es un *especialista*: es bueno para decir *cuál* de tus sonidos está oyendo, pero no sabe qué es “ninguno de mis sonidos” (para eso ayuda la clase Background). El clasificador integrado de Apple es un *generalista* entrenado en ~300 sonidos cotidianos: es muy bueno en la pregunta gruesa “¿hay un ave en absoluto?”.

`gateClasses` los encadena: **las detecciones de tu pack solo se reportan cuando el modelo de Apple está oyendo *al mismo tiempo* una de las categorías integradas listadas.** Un pack de aves se filtra con las etiquetas de aves de Apple, de modo que si Apple no cree que hay un ave, tu pack se queda en silencio — por muy confiado que esté. Esta sola línea elimina la gran mayoría de falsas alarmas por música, TV y habitación en silencio, porque el modelo de Apple las puntúa muy por debajo del umbral de la puerta. Si lo omites, el pack corre sin filtro (vale para pruebas; en el mundo real habla demasiado).

**El filtrado solo está disponible cuando Apple ya tiene una categoría cercana a tu sonido.** Si tu pack es para algo que el modelo de ~300 clases de Apple no conoce — una máquina de fábrica concreta, un pitido de dispositivo médico, un timbre personalizado — no hay etiqueta integrada con la que filtrar, así que dejas `gateClasses` fuera y el pack corre sin filtro. Es lo esperado, no un error. En esos packs, tu **clase Background deja de ser una defensa entre varias y se convierte en lo único que te separa de alertas falsas constantes** — invierte mucho en ella (muchas grabaciones ambientales reales) y sube los umbrales por clase.

Filtra un pack de **aves** con las etiquetas *genéricas* de aves de Apple más las específicas que tu modelo pueda nombrar de verdad: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — y, si tu pack tiene la especie correspondiente, `crow_caw` y `pigeon_dove_coo`. Otros tipos de pack eligen sus propias puertas de la [lista completa de identificadores de sonido integrados](#appendix-built-in-sound-identifiers-ios-265) del apéndice más abajo — p. ej. un pack de razas de perro filtra con `dog_bark`/`dog_howl`, un pack de vehículos con `engine`/`truck`.

### `muteClasses` — cede a Apple en sonidos que tu modelo no puede nombrar

`gateClasses` abre tu pack cuando Apple cree que hay un ave. Pero Apple puede nombrar *específicamente* algunas aves que tu modelo quizá no cubre: un pato, un ganso, un búho, un pavo, una gallina o un gallo. Si Apple oye un pato y tu pack no tiene clase de pato, tu modelo forzará ese graznido a la especie más cercana y lo llamará con confianza el ave equivocada. Eso es una identificación errónea, no una falsa alarma por silencio — y `gateClasses` solo no lo detiene, porque un pato también activa la puerta genérica `bird`.

`muteClasses` lo corrige: **cuando Apple está seguro de una de estas etiquetas, tu pack se queda en silencio en ese momento** y cede a la llamada específica de Apple. Lista las etiquetas integradas de sonidos que *no* cubres:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

Regla práctica: una etiqueta específica de ave de Apple va en **`gateClasses`** si tu modelo tiene una clase equivalente (o mejor) para ella, y en **`muteClasses`** si no. Todo lo que Apple puede nombrar y tú no → siléncialo y deja que Apple acierte.

## Paso 4 — Escribe `profiles.json` (opcional, recomendado)

Esto controla cómo se ve y se siente cada sonido en la app: una entrada por clase, con clave el nombre **exacto** de carpeta/etiqueta:

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

Cada clave es opcional: omite lo que quieras y se aplica un valor por defecto razonable:

| Clave | Qué hace | Por defecto |
|---|---|---|
| `displayName` | Nombre mostrado en el mapa y en las alertas | Etiqueta con guiones bajos → espacios, capitalizada |
| `hapticCount` | Pulsos de vibración cuando el sonido se revela por primera vez (0 = ninguno) | `0` |
| `emergencyTier` | `"none"` para sonidos normales. Déjalo en `"none"` salvo que el sonido justifique de verdad una alerta urgente | `"none"` |
| `category` | Agrupación: `animal`, `vehicle`, `medium`, `quiet` o `misc` | `misc` |
| `icon` | Un nombre de [SF Symbols](https://developer.apple.com/sf-symbols/), p. ej. `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | Tinte del punto/icono: `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple`, o `"r,g,b"` con valores 0–1 | `teal` |
| `threshold` | Confianza (0–1) necesaria antes de que el sonido se registre. Súbelo si una clase da falsas alarmas; bájalo si se pierde | `0.5` |
| `maxRange` | Alcance máximo aproximado de detección mostrado en el mapa, en pies | `150` |

**Tu clase `Background` necesita la entrada especial de arriba**: `"threshold": 1.1` hace imposible reportarla (la confianza nunca supera 1.0), así que absorbe en silencio el audio ambiental en lugar de aparecer nunca como detección. No te limites a omitirla: una clase no listada sigue recibiendo el umbral por defecto 0.5 y *aparecería* en la app como un sonido genérico.

## Paso 5 — Comprime el zip

Selecciona los tres archivos — `pack.json`, `profiles.json`, `model.mlmodel` —, haz clic con el botón derecho y **Compress**. Comprimir la carpeta contenedora también funciona; la app busca un nivel de carpeta hacia abajo.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

Lleva el zip a tu iPhone como prefieras: AirDrop, iCloud Drive, Mail, Messages.

## Paso 6 — Importa en tu iPhone

1. Abre Vigilant Ear → menú del engranaje → **Power Pack+**.
2. Desplázate a **Custom Sound Packs (BYOM)** y toca **Import Custom Pack (.zip)**.
3. Elige tu zip en el explorador de Files.

El pack aparece en la lista con su conteo de sonidos, ya en **LIVE**. Desde ahí puedes:

- **LIVE / OFF** — activar o desactivar el pack sin borrarlo. Apagado no consume batería.
- **Delete** — inicia una cuenta atrás de 5 segundos (toca de nuevo para cancelar) y luego elimina el pack por completo.
- Importa tantos packs como quieras; todos corren junto al detector integrado. Cada pack en vivo extra consume algo de batería, así que apaga los que no uses.

Los sonidos detectados se muestran como cualquier otro: un punto en el mapa con tu icono y color, el nombre visible en las alertas y tus hápticos configurados.

Un par de comportamientos integrados a tener en cuenta: las detecciones de packs personalizados **no** se retransmiten a pares de la malla Constellation (otros teléfonos no tendrán tu pack instalado), y los sonidos del pack exigen dos detecciones consecutivas antes de alertar, lo que filtra falsos positivos de un solo fotograma.

## Solución de problemas

| Mensaje / síntoma | Causa y solución |
|---|---|
| "No pack.json found in the zip" | Los archivos del zip están anidados a más de una carpeta de profundidad, o `pack.json` está mal nombrado. Vuelve a comprimir con los tres archivos en el nivel superior. |
| "pack.json could not be read" | Error de sintaxis JSON: una coma o comilla faltante. Valídalo (p. ej. pégalo en un comprobador JSON) y vuelve a comprimir. |
| "No model.mlpackage or model.mlmodel found" | El archivo del modelo tiene otro nombre. Renómbralo exactamente a `model.mlmodel` (o `model.mlpackage`). |
| "The model is not a sound classifier…" | El modelo no es un modelo Create ML de **Sound Classification** — los de imagen/texto/tabulares no se pueden usar. Reentrena con la plantilla Sound Classification. |
| El pack se importa pero un sonido nunca se activa | Su confianza no alcanza el umbral. Baja el `threshold` de esa clase (prueba `0.35`) y añade clips de entrenamiento más variados. |
| Un sonido se activa sin parar con ruido ambiental, música o TV | Añade `gateClasses` a `pack.json` (ver arriba) — es con diferencia la palanca más grande. También añade/amplía la clase `Background` con grabaciones del entorno problemático, reentrena y reimporta. Subir el `threshold` de la clase (p. ej. `0.8`) también ayuda. |
| Se detectan sonidos reales, pero también algunos incorrectos | Ya se exigen dos detecciones consecutivas, y `gateClasses` filtra la mayor parte del ruido. Para los que queden, sube el `threshold` de esa clase concreta hacia `0.85–0.9`. |
| Los nombres/hápticos de profiles.json no se aplican | Las claves de `profiles.json` deben coincidir exactamente con las etiquetas de clase del modelo (nombres de tus carpetas de entrenamiento), incluidas mayúsculas y guiones bajos. |

## Actualizar un pack

Reentrena o edita, vuelve a comprimir e importa de nuevo con el mismo `id` en `pack.json`: la versión anterior se reemplaza en su sitio.

---

## Appendix: Built-in Sound Identifiers (iOS 26.5)

Estas son las categorías de sonido integradas que el clasificador on-device Sound Analysis de Apple puede reconocer: las etiquetas disponibles para `gateClasses` y `muteClasses` arriba. Apple ya no publica esta lista en su sitio de desarrolladores, así que la tabla siguiente se leyó directamente del clasificador en el dispositivo (`SNClassifierIdentifier.version1`).

**Clasificaciones conocidas a julio de 2026 (iOS 26.5) — 303 etiquetas.** Apple puede añadir, quitar o renombrar estas en cualquier actualización del SO, así que trátala como una instantánea en un momento dado: filtrar con una etiqueta que un SO futuro elimine simplemente significa que esa puerta nunca se dispara (tu pack se queda en silencio), y una etiqueta nueva no existirá hasta que la uses. Usa la ortografía exacta mostrada (minúsculas, guiones bajos).

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
