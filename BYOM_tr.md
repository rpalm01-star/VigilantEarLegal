# Özel Ses Paketleri — Kendinizinkini Nasıl Kurar ve İçe Aktarırsınız

Vigilant Ear yeni sesler öğrenebilir. Bir **özel ses paketi** uygulamaya Apple’ın yerleşik algılayıcısının bilmediği sesleri — yerel kuşlarınız, işteki belirli bir makine, binanızın tuhaf koridor zili — tanımayı öğretir. Küçük bir modeli Mac’te eğitirsiniz (kod gerekmez), iki küçük metin dosyasıyla zip’lersiniz ve iPhone’unuza içe aktarırsınız.

Özel paketler yerleşik algılayıcının **üstüne yığılır**. Bir paketi açmak başka hiçbir şeyi kapatmaz — sirenler, alarmlar ve diğer tüm güvenlik sesleri eskisi gibi çalışır.

**Gerekenler:** Xcode’un **Create ML** uygulaması olan bir Mac (ücretsiz), seslerinizin kayıtları ve iPhone’unuzda Power Pack+ (ücretsiz deneme sayılır).

---

## Sert gereksinimler — bunları tam doğru yapın

Bunlardan herhangi birini yok sayan bir paket içe aktarılır ama kötü davranır (sürekli yanlış uyarı veya hiçbir şey algılanmaz). Bunlar öneri değildir:

1. **Bir `Background` sınıfı ekleyin — zorunlu, isteğe bağlı değil.** Modelinizin gerçek ortamlarınızda (sessiz oda, sokak, çalışan fan) eğitilmiş bir sınıfı olmalı. 15+ gerçek kayıt doldurun ve `profiles.json` içinde `"category": "ignored"` ve `"threshold": 1.1` ile işaretleyin. **Background sınıfı olmadan paketiniz sessizlikte sürekli ateşler** — bir ses sınıflandırıcı her ses anı için sınıflarından birini seçmek zorundadır; “bunlardan hiçbiri” kovası yoksa sessiz odanızı en çok benzediği şeye etiketler.
2. **Eğitim kliplerindeki sessizliği kesin.** “Baykuş” etiketli, bir ötüşle 20 saniye sessizlik olan bir klip modele *sessizliğin baykuş olduğunu* öğretir. Klipleri hedef sese sıkı kırpın, yoksa model boşlukları öğrenir.
3. **Model dosyasını tam olarak `model.mlmodel` veya `model.mlpackage` adlandırın.** Başka ad → içe aktarma başarısız.
4. **Create ML *Sound Classification* modeli kullanın.** Görüntü/metin/tablo modelleri reddedilir.
5. **`profiles.json` anahtarları modelin sınıf etiketleriyle tam eşleşmeli** — yani eğitim klasör adlarınız, büyük/küçük harf ve alt çizgiler dahil.
6. **`gateClasses` ekleyin** (aşağıya bakın). Olmadan müzik ve TV paketi tetikler. Bu, en büyük yanlış alarm denetimidir.
7. **Dosyaları üst düzeyde zip’leyin** (veya bir klasörün içinde — daha derin değil). `pack.json` bulunabilir olmalı.
8. **Sınıfları dengeleyin.** Bir sınıfa 100 klip, diğerine 10 vermeyin — model büyüğe yaslanır. Bol örnekli sınıfları birbirinin ~3×’i içinde tutacak şekilde sınırlayın.

Kılavuzun geri kalanı bunları sırayla yürür.

---

## Adım 1 — Eğitim sesi toplayın

Tanınmasını istediğiniz her ses için o sesin adıyla bir klasör yapın ve örnek kayıtlarla doldurun:

```
TrainingData/
  Mourning_Dove/        ← 20+ yas güvercini klibi
  House_Finch/          ← 20+ ev ispinozu klibi
  Background/           ← 20+ o sesler OLMADAN ortamınız
```

Gerçek fark yaratan ipuçları:

- **Her zaman bir `Background` sınıfı ekleyin.** Model her ses anını *bir şey* olarak etiketlemek zorundadır — arka plan sınıfı yoksa sessizlik ve sokak gürültüsü gerçek sınıflarınıza itilir ve yanlış uyarı görürsünüz. Paketi gerçekten kullanacağınız yerleri kaydedin: bahçe, atölye, mutfak.
- **Klasör adları uygulamanın gösterdiği etiket olur** (alt çizgiler boşluğa döner: `Mourning_Dove` → "Mourning Dove"). Görünen adları sonra `profiles.json` içinde değiştirebilirsiniz.
- Daha fazla çeşit, daha uzun kayıttan iyidir: farklı uzaklıklar, günün saatleri, arka plan koşulları. Birkaç saniyelik klipler yeter.
- Yaygın biçimler çalışır (.m4a, .wav, .mp3, .aiff).

## Adım 2 — Modeli Create ML’de eğitin

1. **Create ML**’i açın (Xcode’lu bir Mac’te: Xcode menüsü → Open Developer Tool → Create ML) ve yeni bir **Sound Classification** projesi oluşturun.
2. `TrainingData` klasörünü **Training Data**’ya sürükleyin.
3. **Train**’e tıklayın. Birkaç yüz klip dakikalar içinde eğitilir.
4. Doğruluk sekmesine bakın — bir sınıf kötü puan alırsa daha fazla veya daha çeşitli klip ister.
5. **Output** sekmesinde **Get**’e tıklayın ve modeli **`model.mlmodel`** (veya `model.mlpackage` — ikisi de çalışır) olarak kaydedin. Dosya adı tam olarak `model.mlmodel` veya `model.mlpackage` olmalı.

## Adım 3 — `pack.json` yazın

Paketi tarif eden küçük bir bildirge:

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

- **`name`** zorunludur — uygulamanın paket listesinde görünen addır.
- **`id`** güncellemeler için paketi tanımlar: aynı `id` ile yeniden içe aktarmak eski sürümü yerinde değiştirir. Benzersiz ters-DNS tarzı herhangi bir dize işe yarar.
- **`classes`** yalnızca belgedir. Uygulama gerçek sınıf listesini modelin kendisinden okur; uyumsuzluk bir şeyi kırmaz (yalnızca günlükte not edilir).
- **`gateClasses`** (isteğe bağlı, güçlü önerilir) yanlış pozitifleri durdurmanın en etkili aracıdır. Aşağıya bakın.

### `gateClasses` — Apple’ın modeli kapıcınız olsun

Modeliniz bir *uzmandır*: *hangi* sesinizi duyduğunu ayırmakta iyidir ama “seslerimden biri değil”in ne olduğunu bilmez (Background sınıfının yardım ettiği yer). Apple’ın yerleşik sınıflandırıcısı ~300 gündelik ses üzerinde eğitilmiş bir *genelcidir* — kaba soruda çok iyidir: “hiç kuş var mı?”

`gateClasses` onları zincirler: **paketinizin algılamaları yalnızca Apple’ın modeli listelenen yerleşik kategorilerden birini *aynı anda* duyuyorsa bildirilir.** Bir kuş paketi Apple’ın kuş etiketlerinde kapılanır; Apple kuş düşünmüyorsa paketiniz ne kadar emin olursa olsun susar. Bu tek satır müzik, TV ve sessiz oda yanlış alarmlarının büyük çoğunluğunu eker, çünkü Apple’ın modeli onları kapının çok altında puanlar. Çıkarın, paket kapısız çalışır (test için iyi, gerçek dünyada geveze).

**Kapılama yalnızca Apple’ın sesinize yakın bir kategorisi varsa vardır.** Paketiniz Apple’ın ~300 sınıflı modelinin bilmediği bir şey içinse — belirli bir fabrika makinesi, tıbbi cihaz bip’i, özel bir kapı zili — kapılanacak yerleşik etiket yoktur, `gateClasses`’ı boş bırakırsınız ve paket kapısız çalışır. Bu beklenir, hata değildir. O paketlerde **Background sınıfı birkaç savundan biri olmaktan çıkar ve sizi sürekli yanlış uyarıdan ayıran tek şey olur** — bu yüzden ona ağır yatırım yapın (çok gerçek ortam kaydı) ve sınıf başına eşikleri yükseltin.

Bir **kuş** paketini *genel* Apple kuş etiketlerinde artı modelinizin gerçekten adlandırabildiği özgül olanlarda kapılayın: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — ve paketinizde eşleşen tür varsa `crow_caw` ve `pigeon_dove_coo`. Diğer paket türleri kapılarını aşağıdaki ekteki [yerleşik ses kimliklerinin tam listesinden](#ek-yerlesik-ses-kimlikleri-ios-265) seçer — ör. bir köpek ırkı paketi `dog_bark`/`dog_howl`, bir araç paketi `engine`/`truck`.

### `muteClasses` — modelinizin adlandıramadığı seslerde Apple’a bırakın

`gateClasses` Apple kuş düşündüğünde paketinizi açar. Ama Apple sizin modelinizin kapsamayabileceği bazı kuşları *özgül* adlandırabilir — ördek, kaz, baykuş, hindi, tavuk veya horoz. Apple bir ördek duyar ve paketinizde ördek sınıfı yoksa modeliniz o vakvakı en yakın türüne zorla sıralar ve yanlış kuşu kendinden emin çağırır. Bu sessizlikten gelen yanlış alarm değil, yanlış kimliktir — ve `gateClasses` tek başına durdurmaz, çünkü bir ördek genel `bird` kapısını da çalar.

`muteClasses` düzeltir: **Apple bu etiketlerden birinden eminken paketiniz o an susar** ve Apple’ın özgül çağrısına bırakır. *Kapsamadığınız* seslerin yerleşik etiketlerini listeleyin:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

Kural: özgül bir Apple kuş etiketi, modelinizde eşleşen (veya daha iyi) bir sınıfınız varsa **`gateClasses`**’a, yoksa **`muteClasses`**’a gider. Apple’ın adlandırıp sizin adlandıramadığınız her şey → susturun, Apple haklı olsun.

## Adım 4 — `profiles.json` yazın (isteğe bağlı, önerilir)

Bu, her sesin uygulamada nasıl görünüp hissettirdiğini kontrol eder — sınıf başına bir girdi, **tam** klasör/etiket adıyla anahtarlı:

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

Her anahtar isteğe bağlıdır — atlayın, makul bir varsayılan uygulanır:

| Anahtar | Ne yapar | Varsayılan |
|---|---|---|
| `displayName` | Haritada ve uyarılarda görünen ad | Alt çizgiler → boşluk, büyük harfle |
| `hapticCount` | Ses ilk ortaya çıktığında titreşim darbeleri (0 = yok) | `0` |
| `emergencyTier` | Tipik sesler için `"none"`. Ses gerçekten ivedi bir uyarı hak etmedikçe `"none"` bırakın | `"none"` |
| `category` | Grup: `animal`, `vehicle`, `medium`, `quiet` veya `misc` | `misc` |
| `icon` | Bir [SF Symbols](https://developer.apple.com/sf-symbols/) adı, ör. `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | Nokta/simge rengi: `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple` veya 0–1 değerli `"r,g,b"` | `teal` |
| `threshold` | Ses kaydolmadan gereken güven (0–1). Bir sınıf yanlış alarm verirse yükseltin; kaçırılıyorsa düşürün | `0.5` |
| `maxRange` | Haritada gösterilen kabaca azami algılama menzili, feet | `150` |

**`Background` sınıfınız yukarıda gösterilen özel girdiyi ister**: `"threshold": 1.1` bildirmeyi imkânsız kılar (güven asla 1.0’ı aşmaz), böylece ortam sesini sessizce emer ve algılama olarak asla görünmez. Yalnızca atlamayın — listelenmemiş bir sınıf hâlâ varsayılan 0.5 eşiğini alır ve uygulamada genel bir ses olarak *görünürdü*.

## Adım 5 — Zip’leyin

Üç dosyayı seçin — `pack.json`, `profiles.json`, `model.mlmodel` — sağ tıklayın ve **Compress**. Kapsayan klasörü zip’lemek de çalışır; uygulama bir klasör derinliğine bakar.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

Zip’i iPhone’unuza nasıl isterseniz götürün: AirDrop, iCloud Drive, Mail, Messages.

## Adım 6 — iPhone’unuzda içe aktarın

1. Vigilant Ear’ı açın → dişli menü → **Power Pack+**.
2. **Custom Sound Packs (BYOM)**’a kaydırın ve **Import Custom Pack (.zip)**’e dokunun.
3. Files tarayıcısında zip’inizi seçin.

Paket, ses sayısıyla listede görünür, zaten **LIVE**. Buradan:

- **LIVE / OFF** — silmeden paketi açıp kapatın. Kapalı sıfır pil yer.
- **Delete** — 5 saniyelik geri sayım başlar (iptal için yeniden dokunun), sonra paketi tamamen kaldırır.
- İstediğiniz kadar paket içe aktarın; hepsi yerleşik algılayıcının yanında çalışır. Her ekstra canlı paket biraz pil yer, kullanmadıklarınızı kapatın.

Algılanan sesler diğerleri gibi görünür: haritada sizin simge ve renginizin noktası, uyarılarda görünen ad ve ayarladığınız dokunsal.

Bilmeniz gereken birkaç yerleşik davranış: özel paket algılamaları Constellation ağı eşlerine **iletilmez** (diğer telefonlarda paketiniz yüklü olmaz) ve paket sesleri uyarmadan önce iki ardışık algılama ister; bu tek karelik yanlış pozitifleri süzgeçler.

## Sorun giderme

| İleti / belirti | Neden ve çözüm |
|---|---|
| "No pack.json found in the zip" | Zip’in dosyaları bir klasörden daha derin iç içe veya `pack.json` yanlış adlı. Üç dosyayı üst düzeyde yeniden zip’leyin. |
| "pack.json could not be read" | JSON sözdizimi hatası — eksik virgül veya tırnak. Doğrulayın (ör. bir JSON denetleyicisine yapıştırın) ve yeniden zip’leyin. |
| "No model.mlpackage or model.mlmodel found" | Model dosyasının adı farklı. Tam olarak `model.mlmodel` (veya `model.mlpackage`) olarak yeniden adlandırın. |
| "The model is not a sound classifier…" | Model bir Create ML **Sound Classification** modeli değil — görüntü/metin/tablo modelleri kullanılamaz. Sound Classification şablonuyla yeniden eğitin. |
| Paket içe aktarılır ama bir ses hiç tetiklenmez | Güven eşiğe ulaşmıyor. O sınıfın `threshold` değerini düşürün (`0.35` deneyin) ve daha çeşitli eğitim klipleri ekleyin. |
| Bir ses ortam gürültüsü, müzik veya TV’de sürekli tetiklenir | `pack.json`’a `gateClasses` ekleyin (yukarıya bakın) — açık ara en büyük kaldıraç. Ayrıca `Background` sınıfına rahatsız eden ortamın kayıtlarını ekleyin/genişletin, yeniden eğitin ve yeniden içe aktarın. Sınıf `threshold` yükseltmek (ör. `0.8`) da yardım eder. |
| Gerçek sesler algılanıyor ama birkaç yanlış da var | İki ardışık algılama zaten gerekir ve `gateClasses` çoğu gürültüyü süzgeçler. Kalanlar için o özgül sınıfın `threshold` değerini `0.85–0.9`’a doğru itin. |
| profiles.json’dan adlar/dokunsal uygulanmıyor | `profiles.json` anahtarları modelin sınıf etiketleriyle (eğitim klasör adlarınız) tam eşleşmeli, büyük/küçük harf ve alt çizgiler dahil. |

## Bir paketi güncellemek

Yeniden eğitin veya düzenleyin, yeniden zip’leyin ve `pack.json` içinde aynı `id` ile yeniden içe aktarın — eski sürüm yerinde değişir.

---

## Ek: Yerleşik ses kimlikleri (iOS 26.5)

Bunlar Apple’ın cihazda Sound Analysis sınıflandırıcısının tanıyabildiği yerleşik ses kategorileridir — yukarıdaki `gateClasses` ve `muteClasses` için kullanılabilir etiketler. Apple bu listeyi artık geliştirici sitesinde yayımlamıyor; aşağıdaki tablo sınıflandırıcıdan cihazda okundu (`SNClassifierIdentifier.version1`).

**Temmuz 2026 (iOS 26.5) itibarıyla bilinen sınıflandırmalar — 303 etiket.** Apple bunları herhangi bir OS güncellemesinde ekleyebilir, kaldırabilir veya yeniden adlandırabilir; bunu anlık bir görüntü olarak alın: gelecekte düşen bir etikette kapılama o kapının hiç ateşlememesi demektir (paketiniz susar) ve yeni eklenen bir etiket siz kapılayana kadar var olmaz. Gösterilen tam yazımı kullanın (küçük harf, alt çizgiler).

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
  Tüm hakları saklıdır.<br />
  Patent Pending
</p>

