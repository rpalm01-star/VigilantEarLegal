# Pacotes de Som Personalizados — Como Criar e Importar os Seus

O Vigilant Ear pode aprender novos sons. Um **pacote de som personalizado** ensina o app a reconhecer sons que o detector integrado da Apple não conhece — os pássaros da sua região, uma máquina específica no trabalho, o interfone estranho do corredor do prédio. Você treina um modelo pequeno em um Mac (sem precisar programar), compacta em zip com dois pequenos arquivos de texto e importa no iPhone.

Os pacotes personalizados **se somam ao** detector integrado. Ativar um pacote nunca desliga nada — sirenes, alarmes e todos os outros sons de segurança continuam funcionando exatamente como antes.

**Você vai precisar de:** um Mac com o app **Create ML** do Xcode (gratuito), gravações de áudio dos seus sons e Power Pack+ no iPhone (o período de avaliação gratuito conta).

---

## Requisitos obrigatórios — acerte estes pontos com precisão

Um pacote que ignorar qualquer um destes vai importar, mas se comportar mal (alertas falsos constantes, ou nada detectado). Isto não é sugestão:

1. **Inclua uma classe `Background` — obrigatória, não opcional.** Seu modelo deve ter uma classe treinada nos seus ambientes reais de fundo (quarto quieto, rua, ventilador ligado). Preencha com 15+ gravações reais e marque com `"category": "ignored"` e `"threshold": 1.1` em `profiles.json`. **Sem uma classe Background, seu pacote vai disparar o tempo todo no silêncio** — um classificador de som é forçado a escolher uma das suas classes a cada momento de áudio, então sem um “balde” de “nenhum destes” ele rotula seu quarto quieto como o que mais se parece.
2. **Corte o silêncio dos trechos de treino.** Um clipe rotulado “Owl” que é 20 segundos de silêncio com um piado ensina o modelo que *silêncio é uma coruja*. Corte os clipes bem rente ao som-alvo, ou o modelo aprende os intervalos.
3. **Nomeie o arquivo do modelo exatamente `model.mlmodel` ou `model.mlpackage`.** Qualquer outro nome → a importação falha.
4. **Use um modelo Create ML de *Sound Classification*.** Modelos de imagem/texto/tabela são rejeitados.
5. **As chaves de `profiles.json` devem corresponder exatamente aos rótulos de classe do modelo** — ou seja, os nomes das pastas de treino, incluindo maiúsculas/minúsculas e underscores.
6. **Adicione `gateClasses`** (veja abaixo). Sem isso, música e TV vão acionar o pacote. Este é o maior controle de alarme falso.
7. **Compacte os arquivos no nível superior** (ou dentro de uma pasta — não mais fundo). `pack.json` precisa ser encontrável.
8. **Equilibre suas classes.** Não dê 100 clipes a uma classe e 10 a outra — o modelo vai pender para a maior. Limite as classes com muitas amostras para que as contagens fiquem dentro de cerca de ~3× umas das outras.

O restante deste guia percorre cada um destes pontos em ordem.

---

## Passo 1 — Reúna o áudio de treino

Crie uma pasta para cada som que você quer reconhecer, com o nome desse som, e preencha com gravações de exemplo:

```
TrainingData/
  Mourning_Dove/        ← 20+ clipes de rolas-torcazes
  House_Finch/          ← 20+ clipes de tentilhões-domésticos
  Background/           ← 20+ clipes do seu ambiente de fundo SEM os sons
```

Dicas que realmente fazem diferença:

- **Sempre inclua uma classe `Background`.** O modelo precisa rotular cada momento de áudio como *algo* — sem uma classe de fundo, silêncio e barulho de rua são empurrados para suas classes reais e você verá alertas falsos. Grave os lugares onde você realmente vai usar o pacote: o quintal, o chão de fábrica, a cozinha.
- **Os nomes das pastas viram os rótulos** que o app mostra (underscores viram espaços: `Mourning_Dove` → "Mourning Dove"). Você pode sobrescrever os nomes de exibição depois em `profiles.json`.
- Mais variedade vale mais que mais duração: distâncias diferentes, horários do dia e condições de fundo. Clipes de poucos segundos cada um estão ok.
- Formatos comuns funcionam (.m4a, .wav, .mp3, .aiff).

## Passo 2 — Treine o modelo no Create ML

1. Abra o **Create ML** (em um Mac com Xcode: menu Xcode → Open Developer Tool → Create ML) e crie um novo projeto **Sound Classification**.
2. Arraste sua pasta `TrainingData` para **Training Data**.
3. Clique em **Train**. Algumas centenas de clipes treinam em minutos.
4. Confira a aba de acurácia — se uma classe pontuar mal, ela precisa de mais clipes ou de clipes mais variados.
5. Na aba **Output**, clique em **Get** e salve o modelo como **`model.mlmodel`** (ou `model.mlpackage` — os dois funcionam). O nome do arquivo deve ser exatamente `model.mlmodel` ou `model.mlpackage`.

## Passo 3 — Escreva o `pack.json`

Um manifesto pequeno descrevendo o pacote:

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

- **`name`** é obrigatório — é o que aparece na lista de pacotes do app.
- **`id`** identifica o pacote para atualizações: reimportar um pacote com o mesmo `id` substitui a versão antiga no lugar. Qualquer string única no estilo reverse-DNS funciona.
- **`classes`** é só documentação. O app lê a lista real de classes do próprio modelo, então uma divergência não quebra nada (só é anotada no log).
- **`gateClasses`** (opcional, fortemente recomendado) é a ferramenta mais eficaz para impedir falsos positivos. Veja abaixo.

### `gateClasses` — deixe o modelo da Apple ser o porteiro

Seu modelo é um *especialista*: é bom em dizer *qual* dos seus sons está ouvindo, mas não tem ideia do que é “nenhum dos meus sons” (é nisso que a classe Background ajuda). O classificador integrado da Apple é um *generalista* treinado em ~300 sons do dia a dia — é muito bom na pergunta grosseira “há um pássaro de algum tipo?”

`gateClasses` encadeia os dois: **as detecções do seu pacote só são reportadas quando o modelo da Apple está *ao mesmo tempo* ouvindo uma das categorias integradas listadas.** Um pacote de pássaros faz gate nos rótulos de pássaros da Apple, então se a Apple não achar que há um pássaro, seu pacote fica em silêncio — não importa quão confiante ele esteja. Esta única linha elimina a grande maioria dos alarmes falsos de música, TV e quarto quieto, porque o modelo da Apple pontua esses bem abaixo do gate. Deixe de fora e o pacote roda sem gate (ok para testes, tagarela no mundo real).

**O gate só está disponível quando a Apple já tem uma categoria próxima do seu som.** Se o seu pacote for para algo que o modelo de ~300 classes da Apple não conhece — uma máquina de fábrica específica, o bip de um aparelho médico, uma campainha customizada — não há rótulo integrado para fazer gate, então você deixa `gateClasses` de fora e o pacote roda sem gate. Isso é esperado, não um erro. Nesses pacotes, sua **classe Background deixa de ser uma defesa entre várias e passa a ser a única coisa entre você e alertas falsos constantes** — então invista pesado nela (muitas gravações reais de ambiente) e eleve os limiares por classe.

Faça o gate de um pacote de **pássaros** nos rótulos *genéricos* de pássaros da Apple mais quaisquer específicos que o seu modelo realmente possa nomear: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — e, se o seu pacote tiver a espécie correspondente, `crow_caw` e `pigeon_dove_coo`. Outros tipos de pacote escolhem seus próprios gates na [lista completa de identificadores de som integrados](#apêndice-identificadores-de-som-integrados-ios-265) no apêndice abaixo — p.ex. um pacote de raças de cães faz gate em `dog_bark`/`dog_howl`, um de veículos em `engine`/`truck`.

### `muteClasses` — ceda à Apple em sons que o seu modelo não nomeia

`gateClasses` abre o seu pacote quando a Apple acha que há um pássaro. Mas a Apple pode nomear *especificamente* alguns pássaros que o seu modelo pode não cobrir — um pato, ganso, coruja, peru, galinha ou galo. Se a Apple ouvir um pato e o seu pacote não tiver classe de pato, o seu modelo vai forçar aquele grasnido para a espécie mais próxima e confiantemente chamar de pássaro errado. Isso é uma identificação errada, não um alarme falso do silêncio — e `gateClasses` sozinho não impede, porque um pato também aciona o gate genérico `bird`.

`muteClasses` corrige isso: **quando a Apple está confiante em um desses rótulos, o seu pacote fica em silêncio naquele momento** e cede à chamada específica da Apple. Liste os rótulos integrados dos sons que você *não* cobre:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

Regra prática: um rótulo específico de pássaro da Apple vai em **`gateClasses`** se o seu modelo tiver uma classe correspondente (ou melhor) para ele, e em **`muteClasses`** se não tiver. Tudo que a Apple pode nomear e você não → mute, e deixe a Apple estar certa.

## Passo 4 — Escreva o `profiles.json` (opcional, recomendado)

Isso controla como cada som aparece e se comporta no app — uma entrada por classe, com chave no nome **exato** da pasta/rótulo:

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

Toda chave é opcional — omita o que quiser e um padrão sensato se aplica:

| Chave | O que faz | Padrão |
|---|---|---|
| `displayName` | Nome mostrado no mapa e nos alertas | Rótulo com underscores → espaços, capitalizado |
| `hapticCount` | Pulsos de vibração quando o som é revelado pela primeira vez (0 = nenhum) | `0` |
| `emergencyTier` | `"none"` para sons normais. Deixe `"none"` a menos que o som realmente justifique um alerta urgente | `"none"` |
| `category` | Agrupamento: `animal`, `vehicle`, `medium`, `quiet` ou `misc` | `misc` |
| `icon` | Um nome de [SF Symbols](https://developer.apple.com/sf-symbols/), p.ex. `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | Tonalidade do ponto/ícone: `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple`, ou `"r,g,b"` com valores 0–1 | `teal` |
| `threshold` | Confiança (0–1) necessária antes de o som ser registrado. Aumente se uma classe der alarme falso; diminua se for perdida | `0.5` |
| `maxRange` | Alcance máximo aproximado de detecção mostrado no mapa, em pés | `150` |

**Sua classe `Background` precisa da entrada especial mostrada acima**: `"threshold": 1.1` torna impossível reportá-la (a confiança nunca ultrapassa 1.0), então ela absorve silenciosamente o áudio ambiente em vez de aparecer como detecção. Não basta omiti-la — uma classe não listada ainda recebe o limiar padrão 0.5 e *apareceria* no app como um som genérico.

## Passo 5 — Compacte em zip

Selecione os três arquivos — `pack.json`, `profiles.json`, `model.mlmodel` — clique com o botão direito e **Compress**. Compactar a pasta que os contém também funciona; o app procura um nível de pasta abaixo.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

Leve o zip ao iPhone como preferir: AirDrop, iCloud Drive, Mail, Messages.

## Passo 6 — Importe no iPhone

1. Abra o Vigilant Ear → menu da engrenagem → **Power Pack+**.
2. Role até **Custom Sound Packs (BYOM)** e toque em **Import Custom Pack (.zip)**.
3. Escolha o seu zip no navegador de Arquivos.

O pacote aparece na lista com a contagem de sons, já **LIVE**. A partir daí você pode:

- **LIVE / OFF** — ligar e desligar o pacote sem apagá-lo. Desligado consome zero bateria.
- **Delete** — inicia uma contagem regressiva de 5 segundos (toque de novo para cancelar) e depois remove o pacote por completo.
- Importe quantos pacotes quiser; todos rodam junto com o detector integrado. Cada pacote extra ao vivo consome alguma bateria, então desligue os que não estiver usando.

Os sons detectados aparecem como qualquer outro: um ponto no mapa com o seu ícone e cor, o nome de exibição nos alertas e as vibrações configuradas.

Alguns comportamentos integrados a saber: detecções de pacotes personalizados **não** são retransmitidas a pares da malha Constellation (outros telefones não terão o seu pacote instalado), e sons do pacote exigem duas detecções consecutivas antes de alertar, o que filtra falsos positivos de um único frame.

## Solução de problemas

| Mensagem / sintoma | Causa e correção |
|---|---|
| "No pack.json found in the zip" | Os arquivos do zip estão aninhados em mais de uma pasta de profundidade, ou `pack.json` está com o nome errado. Recompacte com os três arquivos no nível superior. |
| "pack.json could not be read" | Erro de sintaxe JSON — vírgula ou aspas faltando. Valide (p.ex. cole em um verificador JSON) e recompacte. |
| "No model.mlpackage or model.mlmodel found" | O arquivo do modelo tem outro nome. Renomeie para exatamente `model.mlmodel` (ou `model.mlpackage`). |
| "The model is not a sound classifier…" | O modelo não é um modelo Create ML **Sound Classification** — modelos de imagem/texto/tabela não podem ser usados. Retreine com o template Sound Classification. |
| O pacote importa, mas um som nunca dispara | A confiança não está atingindo o limiar. Baixe o `threshold` dessa classe (tente `0.35`) e adicione clipes de treino mais variados. |
| Um som dispara o tempo todo em ruído ambiente, música ou TV | Adicione `gateClasses` ao `pack.json` (veja acima) — esta é de longe a maior alavanca. Também adicione/expanda a classe `Background` com gravações do ambiente problemático, depois retreine e reimporte. Elevar o `threshold` da classe (p.ex. `0.8`) também ajuda. |
| Sons reais são detectados, mas alguns errados também | Já são exigidas duas detecções consecutivas, e `gateClasses` filtra a maior parte do ruído. Para os remanescentes, suba o `threshold` dessa classe específica em direção a `0.85–0.9`. |
| Nomes/vibrações do profiles.json não se aplicam | As chaves em `profiles.json` devem corresponder exatamente aos rótulos de classe do modelo (os nomes das pastas de treino), incluindo maiúsculas/minúsculas e underscores. |

## Atualizando um pacote

Retreine ou edite, recompacte e importe de novo com o mesmo `id` em `pack.json` — a versão antiga é substituída no lugar.

---

## Apêndice: Identificadores de Som Integrados (iOS 26.5)

Estes são as categorias de som integradas que o classificador on-device Sound Analysis da Apple consegue reconhecer — os rótulos disponíveis para `gateClasses` e `muteClasses` acima. A Apple não publica mais esta lista no site de desenvolvedores, então a tabela abaixo foi lida diretamente do classificador no dispositivo (`SNClassifierIdentifier.version1`).

**Classificações conhecidas em julho de 2026 (iOS 26.5) — 303 rótulos.** A Apple pode adicionar, remover ou renomear estes em qualquer atualização do SO, então trate isto como um instantâneo no tempo: fazer gate em um rótulo que um SO futuro remover simplesmente significa que esse gate nunca dispara (seu pacote fica em silêncio), e um rótulo recém-adicionado não existirá até você fazer gate nele. Use a grafia exata mostrada (minúsculas, underscores).

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
