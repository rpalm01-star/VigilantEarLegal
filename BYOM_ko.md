# 커스텀 사운드 팩 — 직접 만들고 가져오는 방법

Vigilant Ear는 새로운 소리를 학습할 수 있습니다. **커스텀 사운드 팩**은 Apple 기본 감지기가 모르는 소리 — 동네 새, 직장 특정 기계, 건물 복도의 이상한 부저 등 — 를 앱이 인식하도록 가르칩니다. Mac에서 작은 모델을 학습하고(코딩 불필요), 두 개의 작은 텍스트 파일과 함께 zip으로 묶어 iPhone에 가져오면 됩니다.

커스텀 팩은 기본 감지기 **위에 겹쳐** 동작합니다. 팩을 켜도 다른 것은 꺼지지 않습니다 — 사이렌, 알람, 그 밖의 모든 안전 소리는 이전과 똑같이 계속 작동합니다.

**필요한 것:** Xcode의 **Create ML** 앱이 있는 Mac(무료), 대상 소리의 오디오 녹음, iPhone의 Power Pack+(무료 체험도 해당).

---

## 필수 조건 — 정확히 지키세요

아래 중 하나라도 무시하면 팩은 가져오지만 동작이 나빠집니다(끊임없는 오경보, 또는 아무것도 감지되지 않음). 권장 사항이 아닙니다:

1. **`Background` 클래스를 포함하세요 — 선택이 아니라 필수입니다.** 모델에는 실제 주변 환경(조용한 방, 거리, 선풍기 소리 등)으로 학습한 클래스가 있어야 합니다. 실제 녹음 15개 이상을 넣고, `profiles.json`에서 `"category": "ignored"`와 `"threshold": 1.1`로 표시하세요. **Background 클래스가 없으면 팩이 침묵 속에서도 계속 울립니다** — 사운드 분류기는 매 순간 오디오를 자기 클래스 중 하나로 골라야 하므로, "해당 없음" 버킷이 없으면 조용한 방도 가장 비슷한 소리로 라벨링합니다.
2. **학습 클립에서 침묵을 잘라 내세요.** "Owl"이라고 라벨된 클립이 20초 침묵에 울음 한 번이면, 모델은 *침묵이 올빼미*라고 배웁니다. 대상 소리에 맞게 클립을 타이트하게 자르지 않으면 모델이 빈 구간까지 학습합니다.
3. **모델 파일 이름은 정확히 `model.mlmodel` 또는 `model.mlpackage`로 하세요.** 다른 이름 → 가져오기 실패.
4. **Create ML *Sound Classification* 모델을 사용하세요.** 이미지/텍스트/표 형식 모델은 거부됩니다.
5. **`profiles.json` 키는 모델의 클래스 라벨과 정확히 일치해야 합니다** — 즉 학습 폴더 이름, 대소문자와 밑줄(_ ) 포함.
6. **`gateClasses`를 추가하세요**(아래 참고). 없으면 음악과 TV가 팩을 트리거합니다. 오경보를 줄이는 가장 큰 수단입니다.
7. **파일을 최상위에서 zip으로 묶으세요**(또는 한 단계 폴더 안 — 더 깊게는 안 됨). `pack.json`을 찾을 수 있어야 합니다.
8. **클래스 균형을 맞추세요.** 한 클래스에 클립 100개, 다른 클래스에 10개를 주지 마세요 — 모델이 많은 쪽으로 치우칩니다. 많이 모은 클래스는 잘라서 개수가 서로 약 3배 이내가 되게 하세요.

이 가이드의 나머지는 위를 순서대로 다룹니다.

---

## 1단계 — 학습용 오디오 모으기

인식할 소리마다 그 이름으로 폴더를 만들고, 예제 녹음으로 채우세요:

```
TrainingData/
  Mourning_Dove/        ← 20+ clips of mourning doves
  House_Finch/          ← 20+ clips of house finches
  Background/           ← 20+ clips of your ambient environment WITHOUT the sounds
```

실제로 차이를 만드는 팁:

- **항상 `Background` 클래스를 포함하세요.** 모델은 오디오의 매 순간을 *무언가*로 라벨해야 합니다 — 배경 클래스가 없으면 침묵과 거리 소음이 실제 클래스로 밀려 들어가 오경보가 납니다. 팩을 실제로 쓸 장소를 녹음하세요: 마당, 작업장 바닥, 주방 등.
- **폴더 이름이 라벨이 됩니다**(밑줄은 공백으로: `Mourning_Dove` → "Mourning Dove"). 나중에 `profiles.json`에서 표시 이름을 덮어쓸 수 있습니다.
- 길이보다 다양성: 거리, 시간대, 배경 조건을 다르게. 수 초짜리 클립도 충분합니다.
- 일반적인 형식은 모두 됩니다(.m4a, .wav, .mp3, .aiff).

## 2단계 — Create ML에서 모델 학습

1. **Create ML**을 엽니다(Xcode가 있는 Mac: Xcode 메뉴 → Open Developer Tool → Create ML). 새 **Sound Classification** 프로젝트를 만듭니다.
2. `TrainingData` 폴더를 **Training Data**로 끌어다 놓습니다.
3. **Train**을 클릭합니다. 클립 수백 개면 수 분 안에 학습됩니다.
4. 정확도 탭을 확인하세요 — 한 클래스 점수가 나쁘면 더 많거나 더 다양한 클립이 필요합니다.
5. **Output** 탭에서 **Get**을 클릭하고 모델을 **`model.mlmodel`**(또는 `model.mlpackage` — 둘 다 가능)로 저장합니다. 파일 이름은 정확히 `model.mlmodel` 또는 `model.mlpackage`여야 합니다.

## 3단계 — `pack.json` 작성

팩을 설명하는 작은 매니페스트:

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

- **`name`**은 필수 — 앱의 팩 목록에 표시되는 이름입니다.
- **`id`**는 업데이트용 식별자: 같은 `id`로 다시 가져오면 이전 버전을 그 자리에서 교체합니다. 고유한 reverse-DNS 스타일 문자열이면 됩니다.
- **`classes`**는 문서용일 뿐입니다. 앱은 실제 클래스 목록을 모델에서 읽으므로, 불일치해도 동작이 깨지지는 않습니다(로그만 남음).
- **`gateClasses`**(선택, 강력 권장)는 오탐을 막는 가장 효과적인 도구입니다. 아래를 보세요.

### `gateClasses` — Apple 모델을 문지기로 쓰기

당신의 모델은 *전문가*입니다: *어떤* 대상 소리인지 구분하는 데는 좋지만, "내 소리가 아님"이 무엇인지는 모릅니다(Background 클래스가 그 역할을 돕습니다). Apple 기본 분류기는 일상 소리 약 300개로 학습된 *범용* 모델이라, "새가 있는지?" 같은 거친 질문에 매우 강합니다.

`gateClasses`는 둘을 연결합니다: **팩의 감지는 Apple 모델이 나열된 기본 카테고리 중 하나를 *동시에* 듣고 있을 때만 보고됩니다.** 새 팩은 Apple의 새 라벨로 게이트하므로, Apple이 새라고 보지 않으면 팩이 아무리 확신해도 조용합니다. 이 한 줄이 음악·TV·조용한 방 오경보의 대부분을 없앱니다 — Apple 모델이 그런 소리에 게이트 아래로 점수를 주기 때문입니다. 빼 두면 게이트 없이 동작합니다(테스트에는 괜찮고, 실사용에서는 말이 많아집니다).

**게이트는 Apple에 이미 해당 소리에 가까운 카테고리가 있을 때만 가능합니다.** Apple의 약 300클래스 모델이 모르는 것 — 특정 공장 기계, 의료기기 비프, 커스텀 초인종 — 이면 게이트할 기본 라벨이 없으므로 `gateClasses`를 비우고 게이트 없이 돌립니다. 예상된 동작이지 실수가 아닙니다. 그런 팩에서는 **Background 클래스가 여러 방어 중 하나가 아니라, 끊임없는 오경보와 당신 사이에 선 유일한 방어**가 됩니다 — 실제 주변 녹음에 많이 투자하고, 클래스별 threshold를 올리세요.

**새(bird)** 팩은 *일반적인* Apple 새 라벨과, 모델이 실제로 이름 붙일 수 있는 구체 라벨에 게이트하세요: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — 그리고 팩에 해당 종이 있으면 `crow_caw`, `pigeon_dove_coo`. 다른 팩 유형은 아래 부록의 [기본 사운드 식별자 전체 목록](#appendix-built-in-sound-identifiers-ios-265)에서 게이트를 고르세요 — 예: 견종 팩은 `dog_bark`/`dog_howl`, 차량 팩은 `engine`/`truck`.

### `muteClasses` — 모델이 이름 붙일 수 없는 소리는 Apple에 맡기기

`gateClasses`는 Apple이 새라고 생각할 때 팩을 엽니다. 하지만 Apple은 당신 모델이 다루지 않는 새를 *구체적으로* 이름 붙일 수 있습니다 — 오리, 거위, 올빼미, 칠면조, 닭, 수탉. Apple이 오리를 듣고 팩에 오리 클래스가 없으면, 모델은 그 꽥 소리를 가장 가까운 종으로 억지로 넣고 틀린 새라고 확신합니다. 침묵 오경보가 아니라 오식별이고, `gateClasses`만으로는 막히지 않습니다 — 오리도 일반 `bird` 게이트를 건드리기 때문입니다.

`muteClasses`가 고칩니다: **Apple이 이 라벨 중 하나에 확신하면, 그 순간 팩은 조용히 있고** Apple의 구체적 판정에 맡깁니다. *다루지 않는* 소리의 기본 라벨을 나열하세요:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

경험 법칙: 특정 Apple 새 라벨은, 모델에 맞는(또는 더 나은) 클래스가 있으면 **`gateClasses`**에, 없으면 **`muteClasses`**에 넣습니다. Apple이 이름 붙일 수 있고 당신은 못 하는 모든 것 → mute하고, Apple이 맞게 하도록 하세요.

## 4단계 — `profiles.json` 작성 (선택, 권장)

앱에서 각 소리가 어떻게 보이고 느껴질지를 제어합니다 — 클래스당 항목 하나, **정확한** 폴더/라벨 이름을 키로:

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

모든 키는 선택 — 생략하면 합리적인 기본값이 적용됩니다:

| 키 | 역할 | 기본값 |
|---|---|---|
| `displayName` | 지도와 알림에 표시되는 이름 | 라벨의 밑줄 → 공백, 대문자 처리 |
| `hapticCount` | 소리가 처음 드러날 때 진동 횟수 (0 = 없음) | `0` |
| `emergencyTier` | 일반 소리는 `"none"`. 정말 긴급 알림이 필요한 소리가 아니면 `"none"`으로 두세요 | `"none"` |
| `category` | 그룹: `animal`, `vehicle`, `medium`, `quiet`, 또는 `misc` | `misc` |
| `icon` | [SF Symbols](https://developer.apple.com/sf-symbols/) 이름, 예: `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | 점/아이콘 색: `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple`, 또는 값 0–1의 `"r,g,b"` | `teal` |
| `threshold` | 소리가 등록되기 전에 필요한 신뢰도 (0–1). 오경보가 많으면 올리고, 놓치면 내리세요 | `0.5` |
| `maxRange` | 지도에 표시되는 대략 최대 감지 거리(피트) | `150` |

**`Background` 클래스에는 위에 나온 특수 항목이 필요합니다**: `"threshold": 1.1`이면 보고가 불가능합니다(신뢰도가 1.0을 넘지 않음). 주변 오디오를 조용히 흡수하고 감지로 나타나지 않습니다. 그냥 생략하지 마세요 — 목록에 없는 클래스도 기본 threshold 0.5를 받아 *일반 소리*로 앱에 나타날 수 있습니다.

## 5단계 — Zip으로 묶기

세 파일 — `pack.json`, `profiles.json`, `model.mlmodel` — 을 선택하고 우클릭한 뒤 **Compress**합니다. 감싼 폴더를 zip해도 됩니다; 앱은 한 단계 아래까지 찾습니다.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

zip을 iPhone으로 옮기는 방법은 자유입니다: AirDrop, iCloud Drive, Mail, Messages.

## 6단계 — iPhone에서 가져오기

1. Vigilant Ear 열기 → 톱니 메뉴 → **Power Pack+**.
2. **Custom Sound Packs (BYOM)**까지 스크롤하고 **Import Custom Pack (.zip)**을 탭합니다.
3. Files 브라우저에서 zip을 고릅니다.

팩이 소리 개수와 함께 목록에 나타나며, 이미 **LIVE**입니다. 여기서 할 수 있는 것:

- **LIVE / OFF** — 삭제 없이 팩을 켜고 끕니다. Off는 배터리를 쓰지 않습니다.
- **Delete** — 5초 카운트다운이 시작되고(다시 탭하면 취소), 팩을 완전히 제거합니다.
- 원하는 만큼 팩을 가져올 수 있으며, 모두 기본 감지기와 함께 동작합니다. 켜 둔 팩마다 배터리를 쓰므로, 쓰지 않는 팩은 끄세요.

감지된 소리는 다른 것과 같습니다: 아이콘·색의 지도 점, 알림의 display name, 설정한 햅틱.

알아 둘 기본 동작: 커스텀 팩 감지는 Constellation 메시 피어로 **전달되지 않습니다**(다른 폰에는 팩이 없음). 또한 팩 소리는 알림 전에 연속 두 번 감지가 필요해, 한 프레임 오탐을 걸러 냅니다.

## 문제 해결

| Message / symptom | Cause and fix |
|---|---|
| "No pack.json found in the zip" | zip 파일이 한 폴더보다 깊게 중첩되었거나, `pack.json` 이름이 틀렸습니다. 세 파일을 최상위에 두고 다시 zip하세요. |
| "pack.json could not be read" | JSON 구문 오류 — 쉼표나 따옴표 누락. 검증(예: JSON 검사기에 붙여넣기) 후 다시 zip하세요. |
| "No model.mlpackage or model.mlmodel found" | 모델 파일 이름이 다릅니다. 정확히 `model.mlmodel`(또는 `model.mlpackage`)로 바꾸세요. |
| "The model is not a sound classifier…" | Create ML **Sound Classification** 모델이 아닙니다 — 이미지/텍스트/표 모델은 쓸 수 없습니다. Sound Classification 템플릿으로 다시 학습하세요. |
| Pack imports but a sound never triggers | 신뢰도가 threshold에 못 미칩니다. 그 클래스의 `threshold`를 낮추고(예: `0.35`), 더 다양한 학습 클립을 추가하세요. |
| A sound triggers constantly on ambient noise, music, or TV | `pack.json`에 `gateClasses`를 추가하세요(위 참고) — 가장 큰 레버입니다. 또한 문제 환경을 녹음해 `Background` 클래스를 추가/확장한 뒤 재학습·재가져오기. 클래스 `threshold`를 올리기(예: `0.8`)도 도움이 됩니다. |
| Real sounds are detected, but so are a few wrong ones | 이미 연속 두 번 감지가 필요하고, `gateClasses`가 대부분 잡음을 걸러 냅니다. 남는 것은 해당 클래스 `threshold`를 `0.85–0.9` 쪽으로 올리세요. |
| Names/haptics from profiles.json don't apply | `profiles.json` 키가 모델 클래스 라벨(학습 폴더 이름)과 정확히 일치해야 합니다. 대소문자와 밑줄 포함. |

## 팩 업데이트

다시 학습하거나 수정한 뒤, 다시 zip하고 `pack.json`의 같은 `id`로 가져오면 — 이전 버전이 그 자리에서 교체됩니다.

---

## Appendix: Built-in Sound Identifiers (iOS 26.5)

아래는 Apple 온디바이스 Sound Analysis 분류기가 인식하는 기본 사운드 카테고리 — 위에서 `gateClasses`와 `muteClasses`에 쓸 수 있는 라벨입니다. Apple은 더 이상 개발자 사이트에 이 목록을 게시하지 않으므로, 아래 표는 기기 분류기(`SNClassifierIdentifier.version1`)에서 직접 읽은 것입니다.

**2026년 7월 기준 알려진 분류 (iOS 26.5) — 라벨 303개.** Apple은 OS 업데이트에서 추가·삭제·이름 변경할 수 있으므로, 시점 스냅샷으로 보세요: 이후 OS에서 빠진 라벨에 게이트하면 그 게이트는 절대 안 울리고(팩은 조용), 새로 추가된 라벨은 게이트하기 전까지 존재하지 않습니다. 표시된 철자를 그대로 쓰세요(소문자, 밑줄).

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
