# 自定义声音包 — 如何构建并导入你自己的声音包

Vigilant Ear 可以学习新声音。**自定义声音包**让应用识别 Apple 内置检测器不认识的声音——你家附近的鸟、工作中某台特定机器、大楼走廊里奇怪的门铃。你在 Mac 上训练一个小模型（无需编程），把它和两个小文本文件打包成 zip，再在 iPhone 上导入即可。

自定义声音包**叠加在**内置检测器之上。开启某个声音包不会关闭其他任何功能——警报器、报警声以及其他所有安全相关声音会一如既往地工作。

**你需要：** 一台装有 Xcode **Create ML** 应用的 Mac（免费）、你要识别声音的音频录音，以及 iPhone 上的 Power Pack+（免费试用期也算）。

---

## 硬性要求 — 请严格做到

忽略以下任一项的声音包虽能导入，但表现会很差（持续误报，或什么都检测不到）。这些不是建议，而是必须遵守：

1. **必须包含 `Background` 类 — 强制，不可省略。** 你的模型必须有一个用真实环境噪声训练的类（安静房间、街道、风扇运转声）。用 15 段以上真实录音填充它，并在 `profiles.json` 中标记为 `"category": "ignored"` 且 `"threshold": 1.1`。**没有 Background 类，你的声音包会在安静时不断误报**——声音分类器必须把每一段音频都归入某个类；若没有“都不是这些”的桶，它就会把安静房间标成最像的那个目标类。
2. **从训练片段中剪掉静音。** 一段标为 “Owl” 的片段若是 20 秒静音加一声猫头鹰叫，模型会学成*静音就是猫头鹰*。把片段裁剪到紧贴目标声音，否则模型会把间隙也学进去。
3. **模型文件必须精确命名为 `model.mlmodel` 或 `model.mlpackage`。** 任何其他名字 → 导入失败。
4. **使用 Create ML 的 *Sound Classification*（声音分类）模型。** 图像/文本/表格模型会被拒绝。
5. **`profiles.json` 的键必须与模型的类标签完全一致** — 即你的训练文件夹名称，包括大小写和下划线。
6. **添加 `gateClasses`**（见下文）。没有它，音乐和电视会触发该声音包。这是控制误报最重要的手段。
7. **把文件 zip 在顶层**（或放在一层文件夹内——不要更深）。必须能找到 `pack.json`。
8. **平衡各类样本数量。** 不要一个类 100 段、另一个类 10 段——模型会偏向样本多的类。对样本充足的类设上限，使各类数量相差约在 3 倍以内。

本指南其余部分会按顺序讲解上述各项。

---

## 第 1 步 — 收集训练音频

为每个要识别的声音建一个文件夹，以该声音命名，并填入示例录音：

```
TrainingData/
  Mourning_Dove/        ← 20+ clips of mourning doves
  House_Finch/          ← 20+ clips of house finches
  Background/           ← 20+ clips of your ambient environment WITHOUT the sounds
```

真正有用的提示：

- **务必包含 `Background` 类。** 模型必须把每一时刻的音频标成*某种东西*——没有背景类，静音和街道噪声会被硬塞进你的真实类，从而产生误报。在你会实际使用该声音包的地方录音：院子、车间、厨房。
- **文件夹名称会成为标签**（应用里显示时下划线会变成空格：`Mourning_Dove` → “Mourning Dove”）。你之后可以在 `profiles.json` 中覆盖显示名称。
- 多样性比单纯加长更重要：不同距离、时段和背景条件。每段几秒即可。
- 常见格式均可（.m4a、.wav、.mp3、.aiff）。

## 第 2 步 — 在 Create ML 中训练模型

1. 打开 **Create ML**（在装有 Xcode 的 Mac 上：Xcode 菜单 → Open Developer Tool → Create ML），新建一个 **Sound Classification** 项目。
2. 将你的 `TrainingData` 文件夹拖入 **Training Data**。
3. 点击 **Train**。几百段片段通常几分钟就能训完。
4. 查看准确率选项卡——若某一类分数偏低，需要更多或更多样的片段。
5. 在 **Output** 选项卡点击 **Get**，将模型保存为 **`model.mlmodel`**（或 `model.mlpackage`——两者均可）。文件名必须精确为 `model.mlmodel` 或 `model.mlpackage`。

## 第 3 步 — 编写 `pack.json`

一份描述该声音包的极简清单：

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

- **`name`** 为必填——会显示在应用的声音包列表中。
- **`id`** 用于标识声音包以便更新：用相同 `id` 重新导入会就地替换旧版本。任意唯一的 reverse-DNS 风格字符串均可。
- **`classes`** 仅作文档说明。应用从模型本身读取真实类列表，因此不匹配不会导致故障（只会记在日志中）。
- **`gateClasses`**（可选，强烈建议）是抑制误报最有效的工具。见下文。

### `gateClasses` — 让 Apple 的模型当你的门卫

你的模型是*专家*：擅长分辨*你*关心的那些声音中是哪一种，但不清楚什么是“不是我的声音”（这正是 Background 类要帮忙解决的）。Apple 的内置分类器是*通才*，在约 300 种日常声音上训练过——非常擅长回答粗粒度问题：“到底有没有鸟？”

`gateClasses` 把两者串起来：**只有当 Apple 的模型*同时*听到所列内置类别之一时，你的声音包检测结果才会上报。** 鸟类声音包以 Apple 的鸟类标签为门控，因此若 Apple 认为没有鸟，你的声音包就保持沉默——无论它自身有多自信。这一行就能消除绝大部分音乐、电视和安静房间的误报，因为 Apple 的模型对那些场景的门控分数远低于门槛。省略它则声音包以无门控方式运行（适合测试，真实环境会很吵）。

**仅当 Apple 已有接近你目标声音的类别时，门控才可用。** 若你的声音包针对的是 Apple 约 300 类模型不认识的内容——某台特定工厂机器、医疗设备蜂鸣、定制门铃——就没有可门控的内置标签，应省略 `gateClasses`，让声音包无门控运行。这是预期行为，不是错误。对此类声音包，你的 **Background 类不再是多道防线之一，而是唯一挡在你和持续误报之间的东西**——因此要大力投入（大量真实环境录音），并提高各类阈值。

对**鸟类**声音包，门控应使用*通用* Apple 鸟类标签，以及你的模型实际能命名的具体标签：`bird`、`fowl`、`bird_vocalization`、`bird_chirp_tweet`、`bird_squawk`、`bird_flapping`——若你的声音包有对应物种，还可加 `crow_caw` 和 `pigeon_dove_coo`。其他类型的声音包可从下文附录中的[内置声音标识符完整列表](#附录内置声音标识符-ios-265)自行选择门控——例如犬种声音包门控 `dog_bark`/`dog_howl`，车辆声音包门控 `engine`/`truck`。

### `muteClasses` — 在你的模型叫不出的声音上让位给 Apple

`gateClasses` 在 Apple 认为有鸟时打开你的声音包。但 Apple 还能*具体*命名一些你的模型可能未覆盖的鸟——鸭、鹅、猫头鹰、火鸡、鸡或公鸡。若 Apple 听到鸭叫而你的声音包没有鸭类，你的模型会把那声呱呱硬分到最近的物种，并自信地报错鸟。这是误识别，不是静音导致的误报——而仅靠 `gateClasses` 挡不住，因为鸭也会触发通用的 `bird` 门控。

`muteClasses` 解决这个问题：**当 Apple 对下列某一标签有信心时，你的声音包在该时刻保持沉默**，把结果让给 Apple 的具体判定。列出你*未覆盖*的声音所对应的内置标签：

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

经验法则：若你的模型有与之匹配（或更好）的类，某个具体的 Apple 鸟类标签应放进 **`gateClasses`**；若没有，则放进 **`muteClasses`**。凡是 Apple 能命名而你不能的 → 静音它，让 Apple 说对。

## 第 4 步 — 编写 `profiles.json`（可选，建议）

这控制每个声音在应用中的外观和体感——每个类一条，键为**精确**的文件夹/标签名：

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

每个键都可选——省略则使用合理默认值：

| 键 | 作用 | 默认值 |
|---|---|---|
| `displayName` | 地图与提醒中显示的名称 | 标签下划线 → 空格，并首字母大写 |
| `hapticCount` | 声音首次揭晓时的震动次数（0 = 无） | `0` |
| `emergencyTier` | 普通声音用 `"none"`。除非该声音确实需要紧急提醒，否则保持 `"none"` | `"none"` |
| `category` | 分组：`animal`、`vehicle`、`medium`、`quiet` 或 `misc` | `misc` |
| `icon` | [SF Symbols](https://developer.apple.com/sf-symbols/) 名称，例如 `bird`、`pawprint`、`fan`、`bell` | `waveform` |
| `color` | 圆点/图标着色：`red`、`blue`、`cyan`、`pink`、`brown`、`mint`、`orange`、`gray`、`teal`、`purple`，或取值 0–1 的 `"r,g,b"` | `teal` |
| `threshold` | 登记该声音前所需的置信度（0–1）。某类误报多就调高；漏检就调低 | `0.5` |
| `maxRange` | 地图上显示的大致最大检测距离，单位英尺 | `150` |

**你的 `Background` 类需要上方所示的特殊条目**：`"threshold": 1.1` 使其不可能被上报（置信度从不超过 1.0），从而静默吸收环境音频，而不会作为检测结果显示。不要只是省略它——未列出的类仍会使用默认 0.5 阈值，*会*在应用中以通用声音出现。

## 第 5 步 — 打包为 zip

选中三个文件——`pack.json`、`profiles.json`、`model.mlmodel`——右键，选择 **Compress**（压缩）。压缩外层文件夹也可以；应用会向下查找一层文件夹。

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

用你喜欢的方式把 zip 传到 iPhone：AirDrop、iCloud Drive、邮件、信息。

## 第 6 步 — 在 iPhone 上导入

1. 打开 Vigilant Ear → 齿轮菜单 → **Power Pack+**。
2. 滚动到 **Custom Sound Packs (BYOM)**，点按 **Import Custom Pack (.zip)**。
3. 在“文件”浏览器中选择你的 zip。

声音包会出现在列表中，显示声音数量，并已为 **LIVE**。之后你可以：

- **LIVE / OFF** — 切换声音包而不删除。关闭时不耗电。
- **Delete** — 启动 5 秒倒计时（再点一次可取消），然后彻底移除该声音包。
- 可导入任意数量的声音包；它们都会与内置检测器并行运行。每多一个 LIVE 声音包都会增加一些耗电，因此不用的请关掉。

检测到的声音与其他声音一样显示：地图上带有你设定图标与颜色的圆点、提醒中的显示名称，以及你配置的触感。

还需了解几项内置行为：自定义声音包的检测结果**不会**中继到 Constellation 网格中的对等设备（其他手机没有安装你的声音包），且声音包声音需连续两次检测后才会提醒，以过滤单帧误报。

## 故障排除

| 信息 / 症状 | 原因与处理 |
|---|---|
| "No pack.json found in the zip" | zip 内文件嵌套超过一层，或 `pack.json` 命名错误。把三个文件放在顶层重新打包。 |
| "pack.json could not be read" | JSON 语法错误——缺逗号或引号。校验后（例如粘贴到 JSON 检查器）重新打包。 |
| "No model.mlpackage or model.mlmodel found" | 模型文件名不同。将其精确重命名为 `model.mlmodel`（或 `model.mlpackage`）。 |
| "The model is not a sound classifier…" | 该模型不是 Create ML **Sound Classification** 模型——图像/文本/表格模型不可用。用 Sound Classification 模板重新训练。 |
| 声音包已导入但某声音从不触发 | 置信度未达到阈值。降低该类的 `threshold`（可试 `0.35`），并增加更多样的训练片段。 |
| 某声音在环境噪声、音乐或电视上不断触发 | 在 `pack.json` 中添加 `gateClasses`（见上文）——这是目前最有力的手段。同时用引发问题的环境录音添加/扩充 `Background` 类，然后重新训练并重新导入。提高该类 `threshold`（例如 `0.8`）也有帮助。 |
| 真实声音能检出，但也有少量错误检出 | 已要求连续两次检测，且 `gateClasses` 会滤掉大部分噪声。对残留误报，将该具体类的 `threshold` 调高至约 `0.85–0.9`。 |
| profiles.json 中的名称/触感未生效 | `profiles.json` 中的键必须与模型的类标签（训练文件夹名称）完全一致，包括大小写和下划线。 |

## 更新声音包

重新训练或编辑后，重新打包，并用 `pack.json` 中相同的 `id` 再次导入——旧版本会就地替换。

---

## 附录：内置声音标识符（iOS 26.5）

这些是 Apple 设备端 Sound Analysis 分类器可识别的内置声音类别——即可用于上文 `gateClasses` 与 `muteClasses` 的标签。Apple 已不再在其开发者网站上公布此列表，因此下表直接从设备上的分类器读取（`SNClassifierIdentifier.version1`）。

**截至 2026 年 7 月（iOS 26.5）的已知分类 — 303 个标签。** Apple 可在任意系统更新中增删或重命名这些标签，因此请将其视为某一时间点的快照：若未来系统移除某个标签，门控它只会导致该门控永不触发（你的声音包保持沉默）；新增加的标签在你对其设置门控之前也不存在。请使用所示的精确拼写（小写、下划线）。

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
