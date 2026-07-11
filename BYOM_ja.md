# カスタムサウンドパック — 自分で作って取り込む方法

Vigilant Ear は新しい音を学習できます。**カスタムサウンドパック**は、Apple の組み込み検出器が知らない音 — 近所の鳥、職場の特定の機械、建物の奇妙な廊下のブザーなど — をアプリに認識させるためのものです。Mac 上で小さなモデルをトレーニングし（コーディング不要）、2 つの小さなテキストファイルと一緒に zip して、iPhone に取り込みます。

カスタムパックは組み込み検出器の**上に積み重ね**て動作します。パックをオンにしても他の機能はオフになりません — サイレン、アラーム、その他すべての安全音はこれまでどおり正確に動作し続けます。

**必要なもの:** Xcode の **Create ML** アプリが使える Mac（無料）、対象の音の録音、および iPhone 上の Power Pack+（無料トライアルでも可）。

---

## 必須要件 — これらを正確に守ってください

これらを無視したパックは取り込めますが、挙動が悪くなります（常に誤検知する、または何も検出されない）。提案ではなく必須です:

1. **`Background` クラスを必ず含める — 必須であり、任意ではありません。** モデルには、実際の周囲環境（静かな部屋、通り、ファンの稼働音など）でトレーニングしたクラスが必要です。15 本以上の実際の録音を入れ、`profiles.json` で `"category": "ignored"` と `"threshold": 1.1` を指定してください。**Background クラスがないと、パックは無音時に常に発火します** — 音分類器は音声のあらゆる瞬間にいずれかのクラスを選ばざるを得ないため、「どれでもない」バケツがないと、静かな部屋が最も似ている音としてラベル付けされてしまいます。
2. **トレーニングクリップから無音を切り落としてください。** 「Owl」とラベルされたクリップが、1 回のホーという鳴き声と 20 秒の無音だと、モデルは*無音がフクロウ*だと学習します。対象の音にクリップをきつくクロップしないと、モデルは隙間まで学習します。
3. **モデルファイル名は正確に `model.mlmodel` または `model.mlpackage` にしてください。** それ以外の名前 → 取り込み失敗。
4. **Create ML の *Sound Classification* モデルを使ってください。** 画像・テキスト・表形式のモデルは拒否されます。
5. **`profiles.json` のキーはモデルのクラスラベルと完全一致**させてください — つまりトレーニングフォルダ名と同じで、大文字小文字とアンダースコアも含めて一致。
6. **`gateClasses` を追加**してください（下記参照）。これがないと、音楽やテレビでパックが反応します。これが誤検知を抑える最大の手段です。
7. **ファイルはトップレベルで zip する**（または 1 フォルダの中 — それより深くしない）。`pack.json` が見つけられる必要があります。
8. **クラスのバランスを取ってください。** あるクラスに 100 クリップ、別のクラスに 10 クリップだと、モデルは多い方に偏ります。サンプルが多いクラスは抑え、クラス間の件数がおおよそ 3 倍以内に収まるようにしてください。

このガイドの残りでは、これらを順に説明します。

---

## ステップ 1 — トレーニング用オーディオを集める

認識させたい音ごとにフォルダを作り、その音の名前を付け、サンプル録音を入れます:

```
TrainingData/
  Mourning_Dove/        ← ハト（mourning dove）のクリップ 20 本以上
  House_Finch/          ← ハウスフィンチのクリップ 20 本以上
  Background/           ← 対象の音を含まない周囲環境のクリップ 20 本以上
```

実際に効くヒント:

- **必ず `Background` クラスを含めてください。** モデルは音声のあらゆる瞬間を*何か*としてラベル付けする必要があります — 背景クラスがないと、無音や通りの騒音が実際のクラスに押し込まれ、誤検知が出ます。パックを実際に使う場所を録音してください: 庭、作業場の床、キッチンなど。
- **フォルダ名がラベルになります**（アプリに表示される名前。アンダースコアはスペースに: `Mourning_Dove` → "Mourning Dove"）。表示名は後で `profiles.json` で上書きできます。
- 長さより多様性: 距離、時間帯、背景条件を変える。数秒のクリップで十分です。
- 一般的な形式が使えます（.m4a、.wav、.mp3、.aiff）。

## ステップ 2 — Create ML でモデルをトレーニングする

1. **Create ML** を開く（Xcode がある Mac: Xcode メニュー → Open Developer Tool → Create ML）、新しい **Sound Classification** プロジェクトを作成します。
2. `TrainingData` フォルダを **Training Data** にドラッグします。
3. **Train** をクリック。数百クリップなら数分でトレーニングできます。
4. 精度タブを確認 — あるクラスのスコアが悪い場合は、より多く、またはより多様なクリップが必要です。
5. **Output** タブで **Get** をクリックし、モデルを **`model.mlmodel`**（または `model.mlpackage` — どちらも可）として保存します。ファイル名は正確に `model.mlmodel` または `model.mlpackage` である必要があります。

## ステップ 3 — `pack.json` を書く

パックを記述する小さなマニフェスト:

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

- **`name`** は必須 — アプリのパック一覧に表示される名前です。
- **`id`** は更新用のパック識別子: 同じ `id` で再取り込みすると、古いバージョンがその場で置き換わります。一意の reverse-DNS 形式の文字列なら何でも使えます。
- **`classes`** はドキュメント用のみ。アプリは本当のクラス一覧をモデル自体から読むため、不一致でも壊れません（ログに記録されるだけです）。
- **`gateClasses`**（任意、強く推奨）は誤検知を止める最も効果的な手段です。下記参照。

### `gateClasses` — Apple のモデルを門番にする

あなたのモデルは*専門家*です: 自分の音の*どれ*を聞いているかを見分けるのは得意ですが、「自分の音のどれでもない」とは何かを知りません（そこを助けるのが Background クラスです）。Apple の組み込み分類器は、日常の音約 300 種でトレーニングされた*ジェネラリスト*で、「そもそも鳥がいるか？」という粗い問いには非常に強いです。

`gateClasses` はこれらを連鎖させます: **あなたのパックの検出は、Apple のモデルがリストされた組み込みカテゴリのいずれかを*同時に*聞いているときだけ報告されます。** 鳥のパックは Apple の鳥ラベルでゲートするため、Apple が鳥だと判断しない限り、あなたのパックはどれだけ自信があっても沈黙します。この 1 行で、音楽・テレビ・静かな部屋の誤検知の大半がなくなります — Apple のモデルはそれらをゲート閾値よりはるかに低くスコアするからです。省略するとパックはゲートなしで動きます（テストには問題ありませんが、実運用ではおしゃべりになります）。

**ゲーティングは、Apple があなたの音に近いカテゴリをすでに持っている場合にのみ使えます。** パックが Apple の約 300 クラスモデルが知らないもの — 特定の工場機械、医療機器のビープ、カスタムドアベルなど — 向けなら、ゲートに使える組み込みラベルがないため、`gateClasses` は省略し、パックはゲートなしで動きます。これは想定どおりであり、ミスではありません。そうしたパックでは、**Background クラスは複数の防御のひとつではなく、常時誤検知を防ぐ唯一の盾**になります — そのため実際の周囲録音を大量に用意し、クラスごとの閾値も上げてください。

**鳥**パックは、*一般的な* Apple の鳥ラベルと、モデルが実際に名前を付けられる具体的なものをゲートにします: `bird`、`fowl`、`bird_vocalization`、`bird_chirp_tweet`、`bird_squawk`、`bird_flapping` — さらに、パックに該当種があるなら `crow_caw` と `pigeon_dove_coo`。他の種類のパックは、下記付録の[組み込みサウンド識別子の完全リスト](#appendix-built-in-sound-identifiers-ios-265)からゲートを選びます — 例: 犬種パックは `dog_bark`/`dog_howl`、車両パックは `engine`/`truck`。

### `muteClasses` — モデルが名付けられない音は Apple に任せる

`gateClasses` は Apple が鳥だと思うときにパックを開きます。しかし Apple は、あなたのモデルがカバーしていない鳥 — アヒル、ガチョウ、フクロウ、七面鳥、ニワトリ、オンドリ — を*具体的に*名付けることもあります。Apple がアヒルを聞き、パックにアヒルクラスがないと、モデルはそのガーガーを最も近い種に押し込み、自信満々で誤った鳥と呼びます。これは無音からの誤検知ではなく誤識別であり、アヒルも一般的な `bird` ゲートを踏むため、`gateClasses` だけでは止まりません。

`muteClasses` がそれを直します: **Apple がこれらのラベルのいずれかに自信があるとき、その瞬間パックは沈黙し**、Apple の具体的な判定に委ねます。*カバーしていない*音の組み込みラベルを列挙してください:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

目安: 特定の Apple の鳥ラベルは、モデルに対応する（またはより良い）クラスがあるなら **`gateClasses`** に、ないなら **`muteClasses`** に入れます。Apple が名付けられてあなたが名付けられないものすべて → ミュートし、Apple を正しくさせます。

## ステップ 4 — `profiles.json` を書く（任意、推奨）

各音がアプリでどう見え、どう感じるかを制御します — クラスごとに 1 エントリ、**正確な**フォルダ/ラベル名をキーにします:

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

すべてのキーは任意 — 省略すると妥当なデフォルトが適用されます:

| キー | 役割 | デフォルト |
|---|---|---|
| `displayName` | マップとアラートに表示される名前 | ラベルのアンダースコア → スペース、先頭大文字 |
| `hapticCount` | 音が初めて明らかになったときの振動パルス数（0 = なし） | `0` |
| `emergencyTier` | 通常の音は `"none"`。本当に緊急アラートが妥当な音でなければ `"none"` のまま | `"none"` |
| `category` | グループ: `animal`、`vehicle`、`medium`、`quiet`、または `misc` | `misc` |
| `icon` | [SF Symbols](https://developer.apple.com/sf-symbols/) の名前、例: `bird`、`pawprint`、`fan`、`bell` | `waveform` |
| `color` | ドット/アイコンの色: `red`、`blue`、`cyan`、`pink`、`brown`、`mint`、`orange`、`gray`、`teal`、`purple`、または 0–1 の値の `"r,g,b"` | `teal` |
| `threshold` | 音が登録されるまでに必要な信頼度（0–1）。誤検知が多いクラスは上げ、見逃しが多いクラスは下げる | `0.5` |
| `maxRange` | マップに表示するおおよその最大検出距離（フィート） | `150` |

**`Background` クラスには上記の特別なエントリが必要です**: `"threshold": 1.1` により報告が不可能になり（信頼度は 1.0 を超えない）、周囲のオーディオを静かに吸収し、検出として表示されることはありません。単に省略しないでください — リストにないクラスでもデフォルトの 0.5 閾値が付き、*アプリに一般的な音として表示されてしまいます*。

## ステップ 5 — zip する

3 つのファイル — `pack.json`、`profiles.json`、`model.mlmodel` — を選択し、右クリックして **Compress**。囲んでいるフォルダごと zip しても動きます; アプリは 1 フォルダ深くまで探します。

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

zip を iPhone に届ける方法は自由です: AirDrop、iCloud Drive、Mail、Messages。

## ステップ 6 — iPhone で取り込む

1. Vigilant Ear を開く → 歯車メニュー → **Power Pack+**。
2. **Custom Sound Packs (BYOM)** までスクロールし、**Import Custom Pack (.zip)** をタップ。
3. Files ブラウザで zip を選びます。

パックは音の数付きで一覧に現れ、すでに **LIVE** です。ここからできること:

- **LIVE / OFF** — 削除せずにパックを切り替え。オフはバッテリー消費ゼロ。
- **Delete** — 5 秒カウントダウンが始まり（再タップでキャンセル）、その後パックを完全に削除。
- 好きなだけパックを取り込めます; すべて組み込み検出器と並行して動きます。ライブな追加パックごとにバッテリーを使うので、使っていないパックはオフにしてください。

検出された音は他と同様に表示されます: マップ上のドットにアイコンと色、アラートに表示名、設定した触覚フィードバック。

知っておくべき組み込みの挙動: カスタムパックの検出は Constellation メッシュのピアには**中継されません**（他の端末にあなたのパックはないため）。また、パックの音はアラート前に連続 2 回の検出を必要とし、1 フレームの誤検知をフィルタします。

## トラブルシューティング

| メッセージ / 症状 | 原因と対処 |
|---|---|
| "No pack.json found in the zip" | zip 内のファイルが 1 フォルダより深くネストされている、または `pack.json` の名前が違う。3 ファイルをトップレベルで再 zip する。 |
| "pack.json could not be read" | JSON 構文エラー — カンマや引用符の欠落。検証（例: JSON チェッカーに貼り付け）して再 zip。 |
| "No model.mlpackage or model.mlmodel found" | モデルファイルの名前が違う。正確に `model.mlmodel`（または `model.mlpackage`）にリネーム。 |
| "The model is not a sound classifier…" | モデルが Create ML の **Sound Classification** モデルではない — 画像・テキスト・表形式は使えない。Sound Classification テンプレートで再トレーニング。 |
| 取り込めているが音が一度も反応しない | 信頼度が閾値に達していない。そのクラスの `threshold` を下げる（`0.35` を試す）、より多様なトレーニングクリップを追加。 |
| 周囲の騒音・音楽・テレビで常に反応する | `pack.json` に `gateClasses` を追加（上記参照）— これが圧倒的に効くレバー。問題の環境の録音で `Background` クラスを追加/拡充し、再トレーニングして再取り込み。クラスの `threshold` を上げる（例: `0.8`）のも有効。 |
| 本物の音は検出されるが、いくつか誤った音も出る | 連続 2 回検出はすでに必須で、`gateClasses` が大半のノイズをフィルタする。残りには、そのクラスの `threshold` を `0.85–0.9` 付近まで上げる。 |
| profiles.json の名前/触覚が適用されない | `profiles.json` のキーはモデルのクラスラベル（トレーニングフォルダ名）と、大文字小文字とアンダースコアを含め完全一致させる。 |

## パックの更新

再トレーニングまたは編集し、再 zip し、`pack.json` の同じ `id` で再取り込み — 古いバージョンがその場で置き換わります。

---

## Appendix: Built-in Sound Identifiers (iOS 26.5)

これらは、Apple のオンデバイス Sound Analysis 分類器が認識できる組み込みサウンドカテゴリです — 上記の `gateClasses` と `muteClasses` で使えるラベルです。Apple はデベロッパサイトでこのリストを公開しなくなったため、下表はオンデバイスの分類器（`SNClassifierIdentifier.version1`）から直接読み取ったものです。

**2026 年 7 月時点の既知分類（iOS 26.5）— 303 ラベル。** Apple は OS 更新でこれらを追加・削除・改名し得るため、時点スナップショットとして扱ってください: 将来の OS で消えたラベルへのゲートは単に発火せず（パックは沈黙）、新しく追加されたラベルはゲートするまで存在しません。表示どおりの正確な綴りを使ってください（小文字、アンダースコア）。

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
