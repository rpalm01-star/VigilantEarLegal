# 自定義聲音包 — 如何構建並匯入你自己的聲音包

Vigilant Ear 可以學習新聲音。**自定義聲音包**讓應用識別 Apple 內建檢測器不認識的聲音——你家附近的鳥、工作中某臺特定機器、大樓走廊裡奇怪的門鈴。你在 Mac 上訓練一個小模型（無需程式設計），把它和兩個小文字檔案打包成 zip，再在 iPhone 上匯入即可。

自定義聲音包**疊加在**內建檢測器之上。開啟某個聲音包不會關閉其他任何功能——警報器、報警聲以及其他所有安全相關聲音會一如既往地工作。

**你需要：** 一臺裝有 Xcode **Create ML** 應用的 Mac（免費）、你要識別聲音的音訊錄音，以及 iPhone 上的 Power Pack+（免費試用期也算）。

---

## 硬性要求 — 請嚴格做到

忽略以下任一項的聲音包雖能匯入，但表現會很差（持續誤報，或什麼都檢測不到）。這些不是建議，而是必須遵守：

1. **必須包含 `Background` 類 — 強制，不可省略。** 你的模型必須有一個用真實環境噪聲訓練的類（安靜房間、街道、風扇運轉聲）。用 15 段以上真實錄音填充它，並在 `profiles.json` 中標記為 `"category": "ignored"` 且 `"threshold": 1.1`。**沒有 Background 類，你的聲音包會在安靜時不斷誤報**——聲音分類器必須把每一段音訊都歸入某個類；若沒有「都不是這些」的桶，它就會把安靜房間標成最像的那個目標類。
2. **從訓練片段中剪掉靜音。** 一段標為 「Owl」 的片段若是 20 秒靜音加一聲貓頭鷹叫，模型會學成*靜音就是貓頭鷹*。把片段裁剪到緊貼目標聲音，否則模型會把間隙也學進去。
3. **模型檔案必須精確命名為 `model.mlmodel` 或 `model.mlpackage`。** 任何其他名字 → 匯入失敗。
4. **使用 Create ML 的 *Sound Classification*（聲音分類）模型。** 影象/文字/表格模型會被拒絕。
5. **`profiles.json` 的鍵必須與模型的類標籤完全一致** — 即你的訓練資料夾名稱，包括大小寫和下劃線。
6. **新增 `gateClasses`**（見下文）。沒有它，音樂和電視會觸發該聲音包。這是控制誤報最重要的手段。
7. **把檔案 zip 在頂層**（或放在一層資料夾內——不要更深）。必須能找到 `pack.json`。
8. **平衡各類樣本數量。** 不要一個類 100 段、另一個類 10 段——模型會偏向樣本多的類。對樣本充足的類設上限，使各類數量相差約在 3 倍以內。

本指南其餘部分會按順序講解上述各項。

---

## 第 1 步 — 收集訓練音訊

為每個要識別的聲音建一個資料夾，以該聲音命名，並填入示例錄音：

```
TrainingData/
  Mourning_Dove/        ← 20+ clips of mourning doves
  House_Finch/          ← 20+ clips of house finches
  Background/           ← 20+ clips of your ambient environment WITHOUT the sounds
```

真正有用的提示：

- **務必包含 `Background` 類。** 模型必須把每一時刻的音訊標成*某種東西*——沒有背景類，靜音和街道噪聲會被硬塞進你的真實類，從而產生誤報。在你會實際使用該聲音包的地方錄音：院子、車間、廚房。
- **資料夾名稱會成為標籤**（應用裡顯示時下劃線會變成空格：`Mourning_Dove` → 「Mourning Dove」）。你之後可以在 `profiles.json` 中覆蓋顯示名稱。
- 多樣性比單純加長更重要：不同距離、時段和背景條件。每段幾秒即可。
- 常見格式均可（.m4a、.wav、.mp3、.aiff）。

## 第 2 步 — 在 Create ML 中訓練模型

1. 開啟 **Create ML**（在裝有 Xcode 的 Mac 上：Xcode 選單 → Open Developer Tool → Create ML），新建一個 **Sound Classification** 專案。
2. 將你的 `TrainingData` 資料夾拖入 **Training Data**。
3. 點選 **Train**。幾百段片段通常幾分鐘就能訓完。
4. 檢視準確率選項卡——若某一類分數偏低，需要更多或更多樣的片段。
5. 在 **Output** 選項卡點選 **Get**，將模型儲存為 **`model.mlmodel`**（或 `model.mlpackage`——兩者均可）。檔名必須精確為 `model.mlmodel` 或 `model.mlpackage`。

## 第 3 步 — 編寫 `pack.json`

一份描述該聲音包的極簡清單：

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

- **`name`** 為必填——會顯示在應用的聲音包列表中。
- **`id`** 用於標識聲音包以便更新：用相同 `id` 重新匯入會就地替換舊版本。任意唯一的 reverse-DNS 風格字串均可。
- **`classes`** 僅作文件說明。應用從模型本身讀取真實類列表，因此不匹配不會導致故障（只會記在日誌中）。
- **`gateClasses`**（可選，強烈建議）是抑制誤報最有效的工具。見下文。

### `gateClasses` — 讓 Apple 的模型當你的門衛

你的模型是*專家*：擅長分辨*你*關心的那些聲音中是哪一種，但不清楚什麼是「不是我的聲音」（這正是 Background 類要幫忙解決的）。Apple 的內建分類器是*通才*，在約 300 種日常聲音上訓練過——非常擅長回答粗粒度問題：「到底有沒有鳥？」

`gateClasses` 把兩者串起來：**只有當 Apple 的模型*同時*聽到所列內建類別之一時，你的聲音包檢測結果才會上報。** 鳥類聲音包以 Apple 的鳥類標籤為門控，因此若 Apple 認為沒有鳥，你的聲音包就保持沉默——無論它自身有多自信。這一行就能消除絕大部分音樂、電視和安靜房間的誤報，因為 Apple 的模型對那些場景的門控分數遠低於門檻。省略它則聲音包以無門控方式執行（適合測試，真實環境會很吵）。

**僅當 Apple 已有接近你目標聲音的類別時，門控才可用。** 若你的聲音包針對的是 Apple 約 300 類模型不認識的內容——某臺特定工廠機器、醫療裝置蜂鳴、定製門鈴——就沒有可門控的內建標籤，應省略 `gateClasses`，讓聲音包無門控執行。這是預期行為，不是錯誤。對此類聲音包，你的 **Background 類不再是多道防線之一，而是唯一擋在你和持續誤報之間的東西**——因此要大力投入（大量真實環境錄音），並提高各類閾值。

對**鳥類**聲音包，門控應使用*通用* Apple 鳥類標籤，以及你的模型實際能命名的具體標籤：`bird`、`fowl`、`bird_vocalization`、`bird_chirp_tweet`、`bird_squawk`、`bird_flapping`——若你的聲音包有對應物種，還可加 `crow_caw` 和 `pigeon_dove_coo`。其他型別的聲音包可從下文附錄中的[內建聲音識別符號完整列表](#附錄內建聲音識別符號-ios-265)自行選擇門控——例如犬種聲音包門控 `dog_bark`/`dog_howl`，車輛聲音包門控 `engine`/`truck`。

### `muteClasses` — 在你的模型叫不出的聲音上讓位給 Apple

`gateClasses` 在 Apple 認為有鳥時開啟你的聲音包。但 Apple 還能*具體*命名一些你的模型可能未覆蓋的鳥——鴨、鵝、貓頭鷹、火雞、雞或公雞。若 Apple 聽到鴨叫而你的聲音包沒有鴨類，你的模型會把那聲呱呱硬分到最近的物種，並自信地報錯鳥。這是誤識別，不是靜音導致的誤報——而僅靠 `gateClasses` 擋不住，因為鴨也會觸發通用的 `bird` 門控。

`muteClasses` 解決這個問題：**當 Apple 對下列某一標籤有信心時，你的聲音包在該時刻保持沉默**，把結果讓給 Apple 的具體判定。列出你*未覆蓋*的聲音所對應的內建標籤：

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

經驗法則：若你的模型有與之匹配（或更好）的類，某個具體的 Apple 鳥類標籤應放進 **`gateClasses`**；若沒有，則放進 **`muteClasses`**。凡是 Apple 能命名而你不能的 → 靜音它，讓 Apple 說對。

## 第 4 步 — 編寫 `profiles.json`（可選，建議）

這控制每個聲音在應用中的外觀和體感——每個類一條，鍵為**精確**的資料夾/標籤名：

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

每個鍵都可選——省略則使用合理預設值：

| 鍵 | 作用 | 預設值 |
|---|---|---|
| `displayName` | 地圖與提醒中顯示的名稱 | 標籤下劃線 → 空格，並首字母大寫 |
| `hapticCount` | 聲音首次揭曉時的震動次數（0 = 無） | `0` |
| `emergencyTier` | 常見聲音用 `"none"`。除非該聲音確實需要緊急提醒，否則保持 `"none"` | `"none"` |
| `category` | 分組：`animal`、`vehicle`、`medium`、`quiet` 或 `misc` | `misc` |
| `icon` | [SF Symbols](https://developer.apple.com/sf-symbols/) 名稱，例如 `bird`、`pawprint`、`fan`、`bell` | `waveform` |
| `color` | 圓點/圖示著色：`red`、`blue`、`cyan`、`pink`、`brown`、`mint`、`orange`、`gray`、`teal`、`purple`，或取值 0–1 的 `"r,g,b"` | `teal` |
| `threshold` | 登記該聲音前所需的置信度（0–1）。某類誤報多就調高；漏檢就調低 | `0.5` |
| `maxRange` | 地圖上顯示的大致最大檢測距離，單位英尺 | `150` |

**你的 `Background` 類需要上方所示的特殊條目**：`"threshold": 1.1` 使其不可能被上報（置信度從不超過 1.0），從而靜默吸收環境音訊，而不會作為檢測結果顯示。不要只是省略它——未列出的類仍會使用預設 0.5 閾值，*會*在應用中以通用聲音出現。

## 第 5 步 — 打包為 zip

選中三個檔案——`pack.json`、`profiles.json`、`model.mlmodel`——右鍵，選擇 **Compress**（壓縮）。壓縮外層資料夾也可以；應用會向下查詢一層資料夾。

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

用你喜歡的方式把 zip 傳到 iPhone：AirDrop、iCloud Drive、郵件、資訊。

## 第 6 步 — 在 iPhone 上匯入

1. 開啟 Vigilant Ear → 齒輪選單 → **Power Pack+**。
2. 滾動到 **Custom Sound Packs (BYOM)**，點按 **Import Custom Pack (.zip)**。
3. 在「檔案」瀏覽器中選擇你的 zip。

聲音包會出現在列表中，顯示聲音數量，並已為 **LIVE**。之後你可以：

- **LIVE / OFF** — 切換聲音包而不刪除。關閉時不耗電。
- **Delete** — 啟動 5 秒倒計時（再點一次可取消），然後徹底移除該聲音包。
- 可匯入任意數量的聲音包；它們都會與內建檢測器並行執行。每多一個 LIVE 聲音包都會增加一些耗電，因此不用的請關掉。

檢測到的聲音與其他聲音一樣顯示：地圖上帶有你設定圖示與顏色的圓點、提醒中的顯示名稱，以及你配置的觸感。

還需瞭解幾項內建行為：自定義聲音包的檢測結果**不會**中繼到 Constellation 網格中的對等裝置（其他手機沒有安裝你的聲音包），且聲音包聲音需連續兩次檢測後才會提醒，以過濾單幀誤報。

## 故障排除

| 資訊 / 症狀 | 原因與處理 |
|---|---|
| "No pack.json found in the zip" | zip 內檔案巢狀超過一層，或 `pack.json` 命名錯誤。把三個檔案放在頂層重新打包。 |
| "pack.json could not be read" | JSON 語法錯誤——缺逗號或引號。校驗後（例如貼上到 JSON 檢查器）重新打包。 |
| "No model.mlpackage or model.mlmodel found" | 模型檔名不同。將其精確重新命名為 `model.mlmodel`（或 `model.mlpackage`）。 |
| "The model is not a sound classifier…" | 該模型不是 Create ML **Sound Classification** 模型——影象/文字/表格模型不可用。用 Sound Classification 模板重新訓練。 |
| 聲音包已匯入但某聲音從不觸發 | 置信度未達到閾值。降低該類的 `threshold`（可試 `0.35`），並增加更多樣的訓練片段。 |
| 某聲音在環境噪聲、音樂或電視上不斷觸發 | 在 `pack.json` 中新增 `gateClasses`（見上文）——這是目前最有力的手段。同時用引發問題的環境錄音新增/擴充 `Background` 類，然後重新訓練並重新匯入。提高該類 `threshold`（例如 `0.8`）也有幫助。 |
| 真實聲音能檢出，但也有少量錯誤檢出 | 已要求連續兩次檢測，且 `gateClasses` 會濾掉大部分噪聲。對殘留誤報，將該具體類的 `threshold` 調高至約 `0.85–0.9`。 |
| profiles.json 中的名稱/觸感未生效 | `profiles.json` 中的鍵必須與模型的類標籤（訓練資料夾名稱）完全一致，包括大小寫和下劃線。 |

## 更新聲音包

重新訓練或編輯後，重新打包，並用 `pack.json` 中相同的 `id` 再次匯入——舊版本會就地替換。

---

## 附錄：內建聲音識別符號（iOS 26.5）

這些是 Apple 裝置端 Sound Analysis 分類器可識別的內建聲音類別——即可用於上文 `gateClasses` 與 `muteClasses` 的標籤。Apple 已不再在其開發者網站上公佈此列表，因此下表直接從裝置上的分類器讀取（`SNClassifierIdentifier.version1`）。

**截至 2026 年 7 月（iOS 26.5）的已知分類 — 303 個標籤。** Apple 可在任意系統更新中增刪或重新命名這些標籤，因此請將其視為某一時間點的快照：若未來系統移除某個標籤，門控它只會導致該門控永不觸發（你的聲音包保持沉默）；新增加的標籤在你對其設定門控之前也不存在。請使用所示的精確拼寫（小寫、下劃線）。

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
