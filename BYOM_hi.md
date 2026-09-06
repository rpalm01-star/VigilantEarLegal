# कस्टम साउंड पैक — अपना पैक कैसे बनाएँ और इंपोर्ट करें

Vigilant Ear नए साउंड सीख सकता है। एक **कस्टम साउंड पैक** ऐप को वे साउंड पहचानना सिखाता है जिन्हें Apple का बिल्ट-इन डिटेक्टर नहीं जानता — आपके इलाके के पक्षी, काम की कोई खास मशीन, या बिल्डिंग की अजीब हॉलवे बज़र। आप Mac पर एक छोटा मॉडल ट्रेन करते हैं (कोडिंग की ज़रूरत नहीं), उसे दो छोटी टेक्स्ट फ़ाइलों के साथ ज़िप करते हैं, और अपने iPhone पर इंपोर्ट कर लेते हैं।

कस्टम पैक बिल्ट-इन डिटेक्टर के **ऊपर स्टैक** होते हैं। पैक ऑन करने से बाकी कुछ बंद नहीं होता — सायरन, अलार्म और हर अन्य सुरक्षा साउंड पहले जैसे ही काम करते रहते हैं।

**आपको चाहिए:** Xcode का **Create ML** ऐप वाला Mac (मुफ़्त), आपके साउंड की ऑडियो रिकॉर्डिंग्स, और आपके iPhone पर Power Pack+ (मुफ़्त ट्रायल भी चलता है)।

---

## सख़्त ज़रूरतें — इन्हें बिल्कुल सही रखें

इनमें से किसी को भी नज़रअंदाज़ करने वाला पैक इंपोर्ट तो हो जाएगा, लेकिन व्यवहार खराब होगा (लगातार गलत अलर्ट, या कुछ भी डिटेक्ट न होना)। ये सुझाव नहीं हैं:

1. **`Background` क्लास ज़रूर शामिल करें — अनिवार्य, वैकल्पिक नहीं।** आपके मॉडल में आपके असली आसपास के माहौल (शांत कमरा, सड़क, पंखा चलना) पर ट्रेन की गई क्लास होनी चाहिए। उसमें 15+ असली रिकॉर्डिंग्स भरें और `profiles.json` में `"category": "ignored"` तथा `"threshold": 1.1` लगाएँ। **बिना Background क्लास के आपका पैक चुप्पी पर भी लगातार फायर करेगा** — साउंड क्लासिफ़ायर हर पल के ऑडियो के लिए कोई न कोई क्लास चुनने को मजबूर होता है, इसलिए "इनमें से कोई नहीं" वाला बकेट न होने पर वह आपके शांत कमरे को भी उस चीज़ का लेबल दे देता है जिससे वह सबसे ज़्यादा मिलता-जुलता लगे।
2. **ट्रेनिंग क्लिप्स से साइलेंस काट दें।** "Owl" लेबल वाली क्लिप अगर 20 सेकंड साइलेंस में एक हूट हो, तो मॉडल सीखता है कि *साइलेंस ही उल्लू है*। क्लिप्स को टारगेट साउंड के आसपास कसकर काटें, वरना मॉडल गैप्स सीख लेगा।
3. **मॉडल फ़ाइल का नाम ठीक `model.mlmodel` या `model.mlpackage` रखें।** कोई और नाम → इंपोर्ट फेल।
4. **Create ML का *Sound Classification* मॉडल इस्तेमाल करें।** इमेज/टेक्स्ट/टैबुलर मॉडल रिजेक्ट हो जाते हैं।
5. **`profiles.json` की कुंजियाँ मॉडल के क्लास लेबल से बिल्कुल मैच होनी चाहिए** — यानी आपकी ट्रेनिंग फ़ोल्डर के नाम, केस और अंडरस्कोर सहित।
6. **`gateClasses` जोड़ें** (नीचे देखें)। बिना इसके संगीत और टीवी पैक को ट्रिगर कर देंगे। यह सबसे बड़ा गलत-अलार्म कंट्रोल है।
7. **फ़ाइलें टॉप लेवल पर ज़िप करें** (या एक फ़ोल्डर के अंदर — उससे गहरा नहीं)। `pack.json` मिलना ज़रूरी है।
8. **क्लासेस को बैलेंस रखें।** एक क्लास को 100 क्लिप्स और दूसरी को 10 न दें — मॉडल बड़ी क्लास की तरफ़ झुक जाएगा। ज़्यादा सैंपल वाली क्लासेस को कैप करें ताकि गिनती लगभग ~3× के भीतर रहे।

बाकी गाइड इन्हीं को क्रम से समझाती है।

---

## चरण 1 — ट्रेनिंग ऑडियो इकट्ठा करें

हर उस साउंड के लिए एक फ़ोल्डर बनाएँ जिसे आप पहचानना चाहते हैं, उसी साउंड के नाम से, और उसमें उदाहरण रिकॉर्डिंग्स भरें:

```
TrainingData/
  Mourning_Dove/        ← mourning doves की 20+ क्लिप्स
  House_Finch/          ← house finches की 20+ क्लिप्स
  Background/           ← आपके आसपास के माहौल की 20+ क्लिप्स, उन साउंड के बिना
```

वे टिप्स जो सच में फ़र्क डालती हैं:

- **हमेशा `Background` क्लास शामिल करें।** मॉडल हर पल के ऑडियो को *कुछ न कुछ* लेबल करना ही है — बिना बैकग्राउंड क्लास के साइलेंस और सड़क का शोर आपकी असली क्लासेस में धकेल दिया जाता है और आपको गलत अलर्ट दिखेंगे। उन जगहों को रिकॉर्ड करें जहाँ आप पैक सच में इस्तेमाल करेंगे: आपका आँगन, वर्कशॉप फ़्लोर, किचन।
- **फ़ोल्डर नाम ही लेबल बनते हैं** जो ऐप दिखाता है (अंडरस्कोर स्पेस बन जाते हैं: `Mourning_Dove` → "Mourning Dove")। डिस्प्ले नाम बाद में `profiles.json` में ओवरराइड कर सकते हैं।
- लंबाई से ज़्यादा विविधता बेहतर है: अलग दूरियाँ, दिन के अलग समय, और बैकग्राउंड हालात। कुछ सेकंड की क्लिप्स भी ठीक हैं।
- आम फ़ॉर्मैट चलते हैं (.m4a, .wav, .mp3, .aiff)।

## चरण 2 — Create ML में मॉडल ट्रेन करें

1. **Create ML** खोलें (Xcode वाले Mac पर: Xcode मेनू → Open Developer Tool → Create ML), और नया **Sound Classification** प्रोजेक्ट बनाएँ।
2. अपना `TrainingData` फ़ोल्डर **Training Data** में खींचकर डालें।
3. **Train** पर क्लिक करें। कुछ सौ क्लिप्स मिनटों में ट्रेन हो जाती हैं।
4. एक्यूरेसी टैब देखें — अगर कोई क्लास कमज़ोर स्कोर करे, तो उसे और या ज़्यादा विविध क्लिप्स चाहिए।
5. **Output** टैब पर **Get** क्लिक करें और मॉडल को **`model.mlmodel`** (या `model.mlpackage` — दोनों चलते हैं) के नाम से सेव करें। फ़ाइलनेम ठीक `model.mlmodel` या `model.mlpackage` होना चाहिए।

## चरण 3 — `pack.json` लिखें

पैक का छोटा मैनिफ़ेस्ट:

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

- **`name`** ज़रूरी है — यही ऐप की पैक लिस्ट में दिखता है।
- **`id`** अपडेट के लिए पैक की पहचान करता है: उसी `id` वाला पैक दोबारा इंपोर्ट करने पर पुराना वर्शन उसी जगह बदल जाता है। कोई भी यूनिक reverse-DNS स्टाइल स्ट्रिंग चलती है।
- **`classes`** सिर्फ़ डॉक्यूमेंटेशन है। ऐप असली क्लास लिस्ट मॉडल से ही पढ़ता है, इसलिए मिसमैच कुछ तोड़ता नहीं (सिर्फ़ लॉग में नोट हो जाता है)।
- **`gateClasses`** (वैकल्पिक, लेकिन बहुत अनुशंसित) गलत पॉज़िटिव रोकने का सबसे असरदार टूल है। नीचे देखें।

### `gateClasses` — Apple के मॉडल को अपना बाउंसर बनाएँ

आपका मॉडल एक *विशेषज्ञ* है: वह बताने में अच्छा है कि *आपके* साउंड में से कौन सा सुन रहा है, लेकिन "मेरे साउंड में से कोई नहीं" क्या है, यह नहीं जानता (यहीं Background क्लास मदद करती है)। Apple का बिल्ट-इन क्लासिफ़ायर एक *जनरलिस्ट* है जो ~300 रोज़मर्रा के साउंड पर ट्रेन है — वह मोटा सवाल "क्या बिल्कुल पक्षी है?" बहुत अच्छे से पूछता है।

`gateClasses` दोनों को जोड़ता है: **आपके पैक की डिटेक्शन तभी रिपोर्ट होती है जब Apple का मॉडल *साथ ही साथ* लिस्ट की किसी बिल्ट-इन कैटेगरी को सुन रहा हो।** पक्षी पैक Apple के पक्षी लेबल पर गेट होता है, इसलिए अगर Apple को पक्षी नहीं लगता, तो आपका पैक चुप रहता है — चाहे वह कितना भी कॉन्फ़िडेंट हो। यह एक लाइन ही संगीत, टीवी और शांत-कमरे के ज़्यादातर गलत अलार्म हटा देती है, क्योंकि Apple का मॉडल उन पर गेट से बहुत नीचे स्कोर करता है। इसे छोड़ दें तो पैक अनगेटेड चलता है (टेस्टिंग के लिए ठीक, असली दुनिया में बहुत बातूनी)।

**गेटिंग तभी उपलब्ध है जब Apple के पास आपके साउंड के पास कोई कैटेगरी हो।** अगर आपका पैक ऐसी चीज़ के लिए है जिसे Apple का ~300-क्लास मॉडल नहीं जानता — कोई खास फ़ैक्टरी मशीन, मेडिकल-डिवाइस बीप, कस्टम डोरबेल — तो गेट करने के लिए कोई बिल्ट-इन लेबल नहीं है, इसलिए `gateClasses` छोड़ दें और पैक अनगेटेड चलेगा। यह अपेक्षित है, गलती नहीं। ऐसे पैक में आपकी **Background क्लास कई सुरक्षाओं में से एक नहीं रह जाती — वह लगातार गलत अलर्ट और आपके बीच खड़ी अकेली दीवार बन जाती है** — इसलिए उसमें अच्छी-खासी असली अम्बिएंट रिकॉर्डिंग्स डालें और प्रति-क्लास थ्रेशहोल्ड बढ़ाएँ।

**पक्षी** पैक को *जेनेरिक* Apple पक्षी लेबल प्लस उन खास लेबल पर गेट करें जिन्हें आपका मॉडल सच में नाम दे सकता है: `bird`, `fowl`, `bird_vocalization`, `bird_chirp_tweet`, `bird_squawk`, `bird_flapping` — और अगर आपके पैक में मैचिंग प्रजाति हो तो `crow_caw` तथा `pigeon_dove_coo`। अन्य पैक प्रकार नीचे अपेंडिक्स की [बिल्ट-इन साउंड आइडेंटिफ़ायर की पूरी लिस्ट](#appendix-built-in-sound-identifiers-ios-265) से अपने गेट चुनें — जैसे डॉग-ब्रीड पैक `dog_bark`/`dog_howl` पर, वाहन पैक `engine`/`truck` पर।

### `muteClasses` — जिन साउंड को आपका मॉडल नाम नहीं दे सकता, उन पर Apple को आगे रहने दें

`gateClasses` तब आपका पैक खोलता है जब Apple को पक्षी लगे। लेकिन Apple कुछ ऐसे पक्षी *खास तौर पर* नाम दे सकता है जिन्हें आपका मॉडल कवर न करे — बत्तख, हंस, उल्लू, टर्की, मुर्गी या मुर्गा। अगर Apple बत्तख सुने और आपके पैक में बत्तख क्लास न हो, तो आपका मॉडल उस क्वैक को अपनी सबसे नज़दीकी प्रजाति में ज़बरदस्ती डालकर गलत पक्षी बता देगा। यह साइलेंस से गलत अलार्म नहीं — गलत पहचान है — और अकेला `gateClasses` इसे नहीं रोकेगा, क्योंकि बत्तख जेनेरिक `bird` गेट भी ट्रिप करती है।

`muteClasses` इसे ठीक करता है: **जब Apple इन लेबल में से किसी पर कॉन्फ़िडेंट हो, तो उस पल आपका पैक चुप रहता है** और Apple की खास कॉल को आगे रखता है। उन बिल्ट-इन लेबल की लिस्ट करें जिन्हें आप *कवर नहीं करते*:

```json
"muteClasses": ["owl_hoot", "duck_quack", "goose_honk", "turkey_gobble", "chicken", "chicken_cluck", "rooster_crow"]
```

अंगूठे का नियम: कोई खास Apple पक्षी लेबल **`gateClasses`** में जाए अगर आपके मॉडल के पास उसके लिए मैचिंग (या बेहतर) क्लास हो, और **`muteClasses`** में जाए अगर न हो। जो Apple नाम दे सकता है और आप नहीं → उसे म्यूट करें, और Apple को सही रहने दें।

## चरण 4 — `profiles.json` लिखें (वैकल्पिक, अनुशंसित)

यह नियंत्रित करता है कि ऐप में हर साउंड कैसा दिखे और लगे — प्रति क्लास एक एंट्री, **ठीक** फ़ोल्डर/लेबल नाम से कीड:

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

हर कुंजी वैकल्पिक है — जो छोड़ दें, उसके लिए समझदार डिफ़ॉल्ट लागू होता है:

| कुंजी | यह क्या करती है | डिफ़ॉल्ट |
|---|---|---|
| `displayName` | मैप और अलर्ट पर दिखने वाला नाम | लेबल जिसमें अंडरस्कोर → स्पेस, कैपिटलाइज़्ड |
| `hapticCount` | साउंड पहली बार दिखने पर कंपन पल्स (0 = कोई नहीं) | `0` |
| `emergencyTier` | आम साउंड के लिए `"none"`। इसे `"none"` ही रखें जब तक साउंड सच में जरूरी अलर्ट न माँगे | `"none"` |
| `category` | ग्रुपिंग: `animal`, `vehicle`, `medium`, `quiet`, या `misc` | `misc` |
| `icon` | कोई [SF Symbols](https://developer.apple.com/sf-symbols/) नाम, जैसे `bird`, `pawprint`, `fan`, `bell` | `waveform` |
| `color` | डॉट/आइकन टिंट: `red`, `blue`, `cyan`, `pink`, `brown`, `mint`, `orange`, `gray`, `teal`, `purple`, या `"r,g,b"` मान 0–1 | `teal` |
| `threshold` | साउंड रजिस्टर होने से पहले ज़रूरी कॉन्फ़िडेंस (0–1)। अगर क्लास गलत अलार्म दे तो बढ़ाएँ; अगर मिस हो तो घटाएँ | `0.5` |
| `maxRange` | मैप पर दिखने वाली अनुमानित अधिकतम डिटेक्शन रेंज, फ़ीट में | `150` |

**आपकी `Background` क्लास को ऊपर दिखाया गया खास एंट्री चाहिए**: `"threshold": 1.1` उसे रिपोर्ट करना असंभव बना देता है (कॉन्फ़िडेंस कभी 1.0 से ऊपर नहीं जाता), इसलिए वह अम्बिएंट ऑडियो चुपचाप सोख लेती है और कभी डिटेक्शन के रूप में नहीं दिखती। सिर्फ़ छोड़ देना काफ़ी नहीं — अनलिस्टेड क्लास को भी डिफ़ॉल्ट 0.5 थ्रेशहोल्ड मिलता है और वह ऐप में जेनेरिक साउंड के रूप में *दिखेगी*।

## चरण 5 — ज़िप करें

तीनों फ़ाइलें चुनें — `pack.json`, `profiles.json`, `model.mlmodel` — राइट-क्लिक करें, और **Compress**। बाहरी फ़ोल्डर को ज़िप करना भी चलता है; ऐप एक फ़ोल्डर गहराई तक देखता है।

```
MyPack.zip
├── pack.json
├── profiles.json
└── model.mlmodel
```

ज़िप को iPhone तक जैसे चाहें भेजें: AirDrop, iCloud Drive, Mail, Messages।

## चरण 6 — iPhone पर इंपोर्ट करें

1. Vigilant Ear खोलें → गियर मेनू → **Power Pack+**।
2. **Custom Sound Packs (BYOM)** तक स्क्रॉल करें और **Import Custom Pack (.zip)** टैप करें।
3. Files ब्राउज़र में अपनी ज़िप चुनें।

पैक अपनी साउंड गिनती के साथ लिस्ट में आ जाता है, पहले से **LIVE**। यहाँ से आप:

- **LIVE / OFF** — पैक हटाए बिना टॉगल करें। ऑफ पर बैटरी खर्च शून्य।
- **Delete** — 5-सेकंड काउंटडाउन शुरू होता है (रद्द करने के लिए फिर टैप करें), फिर पैक पूरी तरह हट जाता है।
- जितने चाहें पैक इंपोर्ट करें; सब बिल्ट-इन डिटेक्टर के साथ चलते हैं। हर अतिरिक्त लाइव पैक कुछ बैटरी खर्च करता है, इसलिए जो इस्तेमाल नहीं कर रहे उन्हें बंद रखें।

डिटेक्टेड साउंड बाकी जैसे ही दिखते हैं: मैप पर आपके आइकन और रंग वाला डॉट, अलर्ट में डिस्प्ले नाम, और आपके कॉन्फ़िगर किए हैप्टिक्स।

कुछ बिल्ट-इन व्यवहार जान लें: कस्टम पैक डिटेक्शन Constellation मेश पीयर्स को **रिले नहीं** होती (दूसरे फ़ोन पर आपका पैक इंस्टॉल नहीं होगा), और पैक साउंड अलर्ट से पहले दो लगातार डिटेक्शन माँगते हैं, जिससे एक-फ़्रेम गलत पॉज़िटिव फ़िल्टर हो जाते हैं।

## समस्या निवारण

| संदेश / लक्षण | कारण और समाधान |
|---|---|
| "No pack.json found in the zip" | ज़िप की फ़ाइलें एक फ़ोल्डर से ज़्यादा गहराई में नेस्ट हैं, या `pack.json` का नाम गलत है। तीनों फ़ाइलें टॉप लेवल पर रखकर दोबारा ज़िप करें। |
| "pack.json could not be read" | JSON सिंटैक्स एरर — कोई कॉमा या कोट मिसिंग। वैलिडेट करें (जैसे JSON चेकर में पेस्ट करें) और दोबारा ज़िप करें। |
| "No model.mlpackage or model.mlmodel found" | मॉडल फ़ाइल का नाम अलग है। नाम ठीक `model.mlmodel` (या `model.mlpackage`) रखें। |
| "The model is not a sound classifier…" | मॉडल Create ML **Sound Classification** मॉडल नहीं है — इमेज/टेक्स्ट/टैबुलर मॉडल इस्तेमाल नहीं हो सकते। Sound Classification टेम्पलेट से दोबारा ट्रेन करें। |
| पैक इंपोर्ट हो गया लेकिन साउंड कभी ट्रिगर नहीं होता | कॉन्फ़िडेंस थ्रेशहोल्ड तक नहीं पहुँच रहा। उस क्लास का `threshold` घटाएँ (`0.35` आज़माएँ), और ज़्यादा विविध ट्रेनिंग क्लिप्स जोड़ें। |
| साउंड अम्बिएंट शोर, संगीत या टीवी पर लगातार ट्रिगर होता है | `pack.json` में `gateClasses` जोड़ें (ऊपर देखें) — यह सबसे बड़ा लीवर है। अपमानजनक माहौल की रिकॉर्डिंग्स के साथ `Background` क्लास जोड़ें/बढ़ाएँ, फिर रीट्रेन और री-इंपोर्ट करें। क्लास `threshold` बढ़ाना (जैसे `0.8`) भी मदद करता है। |
| असली साउंड डिटेक्ट होते हैं, लेकिन कुछ गलत भी | दो लगातार डिटेक्शन पहले से ज़रूरी हैं, और `gateClasses` ज़्यादातर शोर फ़िल्टर करता है। बचे हुए के लिए उस खास क्लास का `threshold` `0.85–0.9` की तरफ़ बढ़ाएँ। |
| profiles.json के नाम/हैप्टिक्स लागू नहीं होते | `profiles.json` की कुंजियाँ मॉडल के क्लास लेबल (आपकी ट्रेनिंग फ़ोल्डर नाम) से बिल्कुल मैच होनी चाहिए, केस और अंडरस्कोर सहित। |

## पैक अपडेट करना

दोबारा ट्रेन या एडिट करें, दोबारा ज़िप करें, और `pack.json` में वही `id` रखकर दोबारा इंपोर्ट करें — पुराना वर्शन उसी जगह बदल जाता है।

---

## Appendix: Built-in Sound Identifiers (iOS 26.5)

ये वे बिल्ट-इन साउंड कैटेगरी हैं जिन्हें Apple का ऑन-डिवाइस Sound Analysis क्लासिफ़ायर पहचान सकता है — ऊपर `gateClasses` और `muteClasses` के लिए उपलब्ध लेबल। Apple अब यह लिस्ट अपनी डेवलपर साइट पर पब्लिश नहीं करता, इसलिए नीचे की टेबल सीधे ऑन-डिवाइस क्लासिफ़ायर (`SNClassifierIdentifier.version1`) से पढ़ी गई है।

**जुलाई 2026 (iOS 26.5) तक ज्ञात क्लासिफ़िकेशन — 303 लेबल।** Apple किसी भी OS अपडेट में इन्हें जोड़, हटा या नाम बदल सकता है, इसलिए इसे समय-बिंदु का स्नैपशॉट समझें: भविष्य के OS में हट जाने वाले लेबल पर गेट करने का मतलब है कि वह गेट कभी फायर नहीं होगा (आपका पैक चुप रहेगा), और नया जोड़ा लेबल तब तक मौजूद नहीं जब तक आप उस पर गेट न करें। ठीक वही स्पेलिंग इस्तेमाल करें जो दिखी है (लोअरकेस, अंडरस्कोर)।

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
