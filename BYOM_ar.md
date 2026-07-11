# حزم الأصوات المخصصة — كيفية بناء واستيراد حزمتك الخاصة

يمكن لتطبيق Vigilant Ear تعلّم أصوات جديدة. **حزمة أصوات مخصصة** تعلّم التطبيق التعرّف على أصوات لا يعرفها كاشف Apple المدمج — طيور منطقتك المحلية، آلة معيّنة في العمل، جرس الممر الغريب في مبنانك. تدرّب نموذجًا صغيرًا على Mac (لا حاجة للبرمجة)، وتضغطه مع ملفي نص صغيرين، ثم تستورده على iPhone.

الحزم المخصصة **تتراكم فوق** الكاشف المدمج. تفعيل حزمة لا يوقف أي شيء آخر أبدًا — تظل صفارات الإنذار وأجهزة الإنذار وكل صوت سلامة آخر يعمل تمامًا كما كان.

**ستحتاج إلى:** Mac مع تطبيق **Create ML** من Xcode (مجاني)، تسجيلات صوتية لأصواتك، وPower Pack+ على iPhone (التجربة المجانية تُحسب).

---

## متطلبات صارمة — طبّقها بدقة تامة

حزمة تتجاهل أيًا من هذه ستُستورد لكنها تتصرف بشكل سيئ (تنبيهات كاذبة مستمرة، أو لا يُكتشف شيء). هذه ليست اقتراحات:

1. **ضمّن فئة `Background` — إلزامية، وليست اختيارية.** يجب أن يحتوي نموذجك على فئة مدرَّبة على بيئاتك المحيطة الحقيقية (غرفة هادئة، شارع، تشغيل المروحة). املأها بـ 15+ تسجيلًا حقيقيًا وعلّمها بـ `"category": "ignored"` و `"threshold": 1.1` في `profiles.json`. **بدون فئة Background ستُطلق حزمتك تنبيهات باستمرار على الصمت** — يُجبر مصنّف الصوت على اختيار إحدى فئاته لكل لحظة صوتية، فبدون «دلو» لـ «لا شيء من هذه» يُصنّف غرفتك الهادئة كأقرب ما يشبهها.
2. **اقتطع الصمت من مقاطع التدريب.** مقطع مُسمّى "Owl" مدته 20 ثانية من الصمت مع نعيق واحد يعلّم النموذج أن *الصمت بومة*. اقتطع المقاطع بإحكام حول الصوت المستهدف، وإلا يتعلّم النموذج الفجوات.
3. **سمِّ ملف النموذج بالضبط `model.mlmodel` أو `model.mlpackage`.** أي اسم آخر → يفشل الاستيراد.
4. **استخدم نموذج Create ML من نوع *Sound Classification*.** تُرفض نماذج الصور/النص/الجداول.
5. **مفاتيح `profiles.json` يجب أن تطابق تسميات فئات النموذج تمامًا** — أي أسماء مجلدات التدريب، بما في ذلك حالة الأحرف والشرطات السفلية.
6. **أضف `gateClasses`** (انظر أدناه). بدونها، سيُطلق الموسيقى والتلفزيون الحزمة. هذا هو أكبر عامل تحكم في الإنذارات الكاذبة.
7. **اضغط الملفات على المستوى الأعلى** (أو داخل مجلد واحد — بلا أعماق أكثر). يجب أن يكون `pack.json` قابلاً للعثور عليه.
8. **وازن فئاتك.** لا تعطِ فئة 100 مقطعًا وأخرى 10 — سيميل النموذج نحو الأكبر. قلّل الفئات ذات العينات الكثيرة بحيث تبقى الأعداد ضمن ~3× من بعضها.

بقية هذا الدليل تمرّ على كل نقطة بالترتيب.

---

## الخطوة 1 — اجمع صوت التدريب

أنشئ مجلدًا لكل صوت تريد التعرّف عليه، مسمّى بذلك الصوت، واملأه بتسجيلات أمثلة:

```
TrainingData/
  Mourning_Dove/        ← 20+ clips of mourning doves
  House_Finch/          ← 20+ clips of house finches
  Background/           ← 20+ clips of your ambient environment WITHOUT the sounds
```

نصائح تحدث فرقًا حقيقيًا:

- **ضمّن دائمًا فئة `Background`.** يجب أن يُسمّي النموذج كل لحظة صوتية *بشيء ما* — بدون فئة خلفية، يُدفع الصمت وضوضاء الشارع إلى فئاتك الحقيقية وسترى تنبيهات كاذبة. سجّل الأماكن التي ستستخدم فيها الحزمة فعليًا: حديقتك، أرضية ورشتك، مطبخك.
- **أسماء المجلدات تصبح التسميات** التي يعرضها التطبيق (الشرطات السفلية تتحول إلى مسافات: `Mourning_Dove` → "Mourning Dove"). يمكنك تجاوز أسماء العرض لاحقًا في `profiles.json`.
- التنوّع أهم من الطول: مسافات مختلفة، أوقات من اليوم، وظروف خلفية مختلفة. مقاطع بضع ثوانٍ لكل منها مناسبة.
- الصيغ الشائعة تعمل (.m4a، .wav، .mp3، .aiff).

## الخطوة 2 — درّب النموذج في Create ML

1. افتح **Create ML** (على Mac مع Xcode: قائمة Xcode → Open Developer Tool → Create ML)، وأنشئ مشروع **Sound Classification** جديد.
2. اسحب مجلد `TrainingData` إلى **Training Data**.
3. انقر **Train**. بضع مئات من المقاطع تُدرَّب خلال دقائق.
4. راجع تبويب الدقة — إذا سجّلت فئة نتائج ضعيفة، فهي تحتاج مقاطع أكثر أو أكثر تنوّعًا.
5. في تبويب **Output**، انقر **Get** واحفظ النموذج باسم **`model.mlmodel`** (أو `model.mlpackage` — كلاهما يعمل). يجب أن يكون اسم الملف بالضبط `model.mlmodel` أو `model.mlpackage`.

## الخطوة 3 — اكتب `pack.json`

بيان صغير يصف الحزمة:

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

- **`name`** مطلوب — هو ما يظهر في قائمة الحزم في التطبيق.
- **`id`** يعرّف الحزمة للتحديثات: إعادة استيراد حزمة بنفس `id` تستبدل النسخة القديمة في مكانها. أي سلسلة فريدة بأسلوب reverse-DNS تعمل.
- **`classes`** للتوثيق فقط. يقرأ التطبيق قائمة الفئات الحقيقية من النموذج نفسه، لذا عدم التطابق لن يكسر شيئًا (يُسجَّل فقط في السجل).
- **`gateClasses`** (اختياري، مُوصى به بشدة) هو الأداة الأكثر فاعلية لإيقاف الإيجابيات الكاذبة. انظر أدناه.

### `gateClasses` — دع نموذج Apple يكون حارسك

نموذجك *متخصص*: جيد في تمييز *أي* من أصواتك يسمعه، لكنه لا يعرف ما هو «ليس أحد أصواتي» (هنا تساعد فئة Background). مصنّف Apple المدمج *عام* مدرَّب على ~300 صوت يومي — وهو ممتاز في السؤال الخشن «هل هناك طائر أصلًا؟»

`gateClasses` يربطهما: **لا تُبلَّغ اكتشافات حزمتك إلا عندما يكون نموذج Apple يسمع *في الوقت نفسه* إحدى الفئات المدمجة المدرجة.** حزمة طيور تُفلتر على تسميات طيور Apple، فإذا لم يعتقد Apple أن هناك طائرًا، تبقى حزمتك صامتة — مهما كانت ثقتها. هذا السطر الواحد يقضي على الغالبية العظمى من إنذارات الموسيقى والتلفزيون والغرفة الهادئة الكاذبة، لأن نموذج Apple يقيّم تلك أقل بكثير من البوابة. احذفه وتعمل الحزمة بلا بوابة (مناسب للاختبار، ثرثار في العالم الحقيقي).

**البوابة متاحة فقط عندما يكون لدى Apple فئة قريبة من صوتك.** إذا كانت حزمتك لشيء لا يعرفه نموذج Apple ذو ~300 فئة — آلة مصنع معيّنة، صفير جهاز طبي، جرس باب مخصص — فلا توجد تسمية مدمجة للفلترة عليها، فاترك `gateClasses` فارغًا وتعمل الحزمة بلا بوابة. هذا متوقع، وليس خطأ. لتلك الحزم **تصبح فئة Background ليست دفاعًا واحدًا بين عدة بل الشيء الوحيد الذي يقف بينك وبين التنبيهات الكاذبة المستمرة** — فاستثمر فيها بقوة (كثير من تسجيلات البيئة المحيطة الحقيقية) وارفع عتبات كل فئة.

فلتر حزمة **طيور** على تسميات طيور Apple *العامة* إضافة إلى أي تسميات محددة يمكن لنموذجك تسميتها فعليًا: `bird`، `fowl`، `bird_vocalization`، `bird_chirp_tweet`، `bird_squawk`، `bird_flapping` — وإذا كانت حزمتك تحتوي الأنواع المطابقة، `crow_caw` و `pigeon_dove_coo`. أنواع الحزم الأخرى تختار بواباتها من [القائمة الكاملة لمعرّفات الأصوات المدمجة](#appendix-built-in-sound-identifiers-ios-265) في الملحق أدناه — مثلًا حزمة سلالات كلاب تُفلتر على `dog_bark`/`dog_howl`، وحزمة مركبات على `engine`/`truck`.

### `muteClasses` — فوّض إلى Apple في الأصوات التي لا يستطيع نموذجك تسميتها

`gateClasses` يفتح حزمتك عندما يعتقد Apple أن هناك طائرًا. لكن Apple يمكنه *تحديدًا* تسمية بعض الطيور التي قد لا يغطيها نموذجك — بطة، إوزة، بومة، ديك رومي، دجاجة، أو ديك. إذا سمع Apple بطة وليس لدى حزمتك فئة بطة، سيفرض نموذجك تصنيف ذلك البطّة إلى أقرب نوع ويستدعيها بثقة الطائر الخطأ. هذا خطأ تعريف، وليس إنذارًا كاذبًا من الصمت — و`gateClasses` وحده لن يوقفه، لأن البطة تُفعّل أيضًا بوابة `bird` العامة.

`muteClasses` يصلح ذلك: **عندما يكون Apple واثقًا من إحدى هذه التسميات، تبقى حزمتك صامتة لتلك اللحظة** وتفوّض إلى نداء Apple المحدد. أدرج التسميات المدمجة للأصوات التي *لا* تغطيها:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

قاعدة عامة: تسمية طائر Apple محددة تذهب إلى **`gateClasses`** إذا كان لدى نموذجك فئة مطابقة (أو أفضل) لها، وإلى **`muteClasses`** إذا لم يكن. كل ما يستطيع Apple تسميته وأنت لا تستطيع → اكتمه، ودع Apple يكون على حق.

## الخطوة 4 — اكتب `profiles.json` (اختياري، مُوصى به)

يتحكم هذا في كيف يبدو ويُحسّ كل صوت في التطبيق — إدخال واحد لكل فئة، بمفتاح **الاسم الدقيق** للمجلد/التسمية:

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

كل مفتاح اختياري — احذف أي شيء ويُطبَّق افتراضي معقول:

| المفتاح | ماذا يفعل | الافتراضي |
|---|---|---|
| `displayName` | الاسم المعروض على الخريطة وفي التنبيهات | التسمية مع شرطات سفلية → مسافات، بحروف كبيرة |
| `hapticCount` | نبضات اهتزاز عند كشف الصوت أول مرة (0 = لا شيء) | `0` |
| `emergencyTier` | `"none"` للأصوات العادية. اتركه `"none"` إلا إذا كان الصوت يستحق تنبيهًا عاجلًا حقًا | `"none"` |
| `category` | التجميع: `animal`، `vehicle`، `medium`، `quiet`، أو `misc` | `misc` |
| `icon` | اسم [SF Symbols](https://developer.apple.com/sf-symbols/)، مثل `bird`، `pawprint`، `fan`، `bell` | `waveform` |
| `color` | لون النقطة/الأيقونة: `red`، `blue`، `cyan`، `pink`، `brown`، `mint`، `orange`، `gray`، `teal`، `purple`، أو `"r,g,b"` بقيم 0–1 | `teal` |
| `threshold` | الثقة (0–1) المطلوبة قبل تسجيل الصوت. ارفعها إذا أنذرت فئة كاذبًا؛ اخفضها إذا فاتت | `0.5` |
| `maxRange` | أقصى مدى كشف تقريبي يُعرض على الخريطة، بالأقدام | `150` |

**فئة `Background` لديك تحتاج الإدخال الخاص الموضّح أعلاه**: `"threshold": 1.1` يجعل من المستحيل الإبلاغ عنها (الثقة لا تتجاوز 1.0 أبدًا)، فتمتص الصوت المحيط بصمت بدل أن تظهر ككشف. لا تحذفها فقط — فئة غير مدرجة ما زالت تحصل على عتبة 0.5 الافتراضية و*ستظهر* في التطبيق كصوت عام.

## الخطوة 5 — اضغط الحزمة

حدّد الملفات الثلاثة — `pack.json`، `profiles.json`، `model.mlmodel` — انقر بزر الماوس الأيمن، و**Compress**. ضغط المجلد الحاوي بدلًا من ذلك يعمل أيضًا؛ يبحث التطبيق مجلدًا واحدًا عمقًا.

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

أوصل الملف المضغوط إلى iPhone بأي طريقة تريد: AirDrop، iCloud Drive، Mail، Messages.

## الخطوة 6 — الاستيراد على iPhone

1. افتح Vigilant Ear → قائمة الترس → **Power Pack+**.
2. مرّر إلى **Custom Sound Packs (BYOM)** وانقر **Import Custom Pack (.zip)**.
3. اختر ملفك المضغوط في متصفح Files.

تظهر الحزمة في القائمة مع عدد أصواتها، وهي **LIVE** بالفعل. من هنا يمكنك:

- **LIVE / OFF** — تبديل الحزمة دون حذفها. الإيقاف لا يستهلك بطارية.
- **Delete** — يبدأ عدًا تنازليًا 5 ثوانٍ (انقر مرة أخرى للإلغاء)، ثم يزيل الحزمة بالكامل.
- استورد ما تشاء من الحزم؛ كلها تعمل جنبًا إلى جنب مع الكاشف المدمج. كل حزمة live إضافية تستهلك بعض البطارية، فأوقف الحزم التي لا تستخدمها.

تظهر الأصوات المكتشفة كأي صوت آخر: نقطة على الخريطة بأيقونتك ولونك، اسم العرض في التنبيهات، والاهتزازات التي ضبطتها.

سلوكان مدمجان يجدر معرفتهما: اكتشافات الحزم المخصصة **لا** تُرحَّل إلى أقران شبكة Constellation (الهواتف الأخرى لن تملك حزمتك)، وأصوات الحزم تتطلب كشفين متتاليين قبل التنبيه، مما يصفّي الإيجابيات الكاذبة لإطار واحد.

## استكشاف الأخطاء

| الرسالة / العَرَض | السبب والإصلاح |
|---|---|
| "No pack.json found in the zip" | ملفات المضغوط متداخلة بأكثر من مجلد واحد عمقًا، أو `pack.json` مسمّى خطأ. أعد الضغط مع الملفات الثلاثة على المستوى الأعلى. |
| "pack.json could not be read" | خطأ في صياغة JSON — فاصلة أو علامة اقتباس ناقصة. تحقّق منه (مثلًا الصقه في فاحص JSON) وأعد الضغط. |
| "No model.mlpackage or model.mlmodel found" | ملف النموذج باسم مختلف. أعد تسميته بالضبط إلى `model.mlmodel` (أو `model.mlpackage`). |
| "The model is not a sound classifier…" | النموذج ليس نموذج Create ML من نوع **Sound Classification** — لا يمكن استخدام نماذج الصور/النص/الجداول. أعد التدريب بقالب Sound Classification. |
| الحزمة تُستورد لكن صوتًا لا يُطلق أبدًا | ثقته لا تصل إلى العتبة. اخفض `threshold` لتلك الفئة (جرّب `0.35`)، وأضف مقاطع تدريب أكثر تنوّعًا. |
| صوت يُطلق باستمرار على ضوضاء محيطة أو موسيقى أو تلفزيون | أضف `gateClasses` إلى `pack.json` (انظر أعلاه) — هذا أكبر رافعة بفارق كبير. أضف/وسّع أيضًا فئة `Background` بتسجيلات البيئة المسببة، ثم أعد التدريب والاستيراد. رفع `threshold` للفئة (مثلًا `0.8`) يساعد أيضًا. |
| تُكتشف الأصوات الحقيقية، لكن أيضًا بضعة أصوات خاطئة | كشفان متتاليان مطلوبان بالفعل، و`gateClasses` يصفّي معظم الضوضاء. للمتبقّي، ارفع `threshold` لتلك الفئة المحددة نحو `0.85–0.9`. |
| الأسماء/الاهتزازات من profiles.json لا تُطبَّق | مفاتيح `profiles.json` يجب أن تطابق تسميات فئات النموذج (أسماء مجلدات التدريب) تمامًا، بما في ذلك حالة الأحرف والشرطات السفلية. |

## تحديث حزمة

أعد التدريب أو التعديل، أعد الضغط، واستورد مرة أخرى بنفس `id` في `pack.json` — تُستبدل النسخة القديمة في مكانها.

---

## الملحق: معرّفات الأصوات المدمجة (iOS 26.5)

هذه فئات الأصوات المدمجة التي يستطيع مصنّف Sound Analysis على الجهاز من Apple التعرّف عليها — التسميات المتاحة لـ `gateClasses` و `muteClasses` أعلاه. لم تعد Apple تنشر هذه القائمة على موقع المطوّرين، لذا قُرئت الجدول أدناه مباشرة من المصنّف على الجهاز (`SNClassifierIdentifier.version1`).

**التصنيفات المعروفة اعتبارًا من يوليو 2026 (iOS 26.5) — 303 تسمية.** يمكن لـ Apple إضافة أو إزالة أو إعادة تسمية هذه في أي تحديث للنظام، فتعامل مع هذا كلقطة زمنية: الفلترة على تسمية يسقطها نظام مستقبلي تعني ببساطة أن تلك البوابة لا تُطلق أبدًا (حزمتك تبقى صامتة)، وتسمية مضافة حديثًا لن توجد حتى تفلتر عليها. استخدم التهجئة الدقيقة المعروضة (أحرف صغيرة، شرطات سفلية).

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
