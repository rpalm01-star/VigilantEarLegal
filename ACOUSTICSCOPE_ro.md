# Acoustic Scope — Vederea profesională de analiză a sunetului

**Acoustic Scope** transformă Vigilant Ear într-un instrument de buzunar de analiză a sunetului: o vedere în direct a tot ce aude microfonul, în șase feluri. Folosește-l ca să *vezi* forma unui sunet, să-i măsori înălțimea și nivelul, să îngheți și să derulezi înapoi prin ultimul jumătate de minut și să capturezi clipuri ca să-ți antrenezi propriul pachet de sunete personalizat.

Deschide-l din **evantaiul de acțiuni** (explozia care se învârte pe bara de sus): atinge explozia, apoi **egalizatorul** (barele animate verde și cian). Acoustic Scope e **gratuit pentru toată lumea** — vederile în direct de mai jos n-au nevoie de nicio cumpărare. Doar uneltele de captură **Train** (mai jos), care înregistrează clipuri pentru propriile tale pachete de sunete personalizate, fac parte din Power Pack+.

---

## Antetul

- **Căsuța dB** — nivelul live de bandă largă. Pătratele **A / C / Z** aleg ponderarea de frecvență (A ≈ cât de tare sună pentru o ureche umană; C păstrează mai mult bas; Z e plat/neponderat). Ponderarea conduce și vederea de ⅓ octavă.
- **rădăcină** (doar vederea Chroma) — cea mai puternică clasă de înălțime muzicală din cameră, actualizată în direct.
- **✕** închide scope-ul. Detecția și alertele continuă să ruleze tot timpul cât e deschis scope-ul — e o fereastră, nu un mod.

## Cele șase vederi

Comută cu bara de jos.

| Vedere | Ce arată |
|---|---|
| **Spectru** | Nivelul pe frecvență, chiar acum — o curbă în direct cu o linie albă de ținere a vârfului. |
| **Spectrogramă** | Frecvența în **timp** — ultimele ~24 de secunde se derulează, culoarea = nivelul. Majoritatea sunetelor au aici o formă vizuală recunoscută. |
| **RTA ⅓ oct.** | Cele 28 de benzi ISO standard, ca un analizor hardware în timp real. Liniuțele portocalii sunt ținerea vârfului. |
| **Chroma** | Cele 12 clase de înălțime muzicală — care note sunt prezente, cu cea mai puternică evidențiată. |
| **Parțiale** | Tonurile proeminente urmărite în timp ca linii colorate, fiecare etichetată cu nota sa muzicală. Numele notelor și seria armonică au coloane proprii, iar sunetele mai înalte, cum ar fi alarmele de fum, sunt etichetate cu înălțimea lor reală. Setează o **notă țintă** și apare ca o linie după care să cânți sau să acordezi. Excelent pentru fluierături, sirene, cântat de păsări, huruit de utilaje. |
| **Vizualizator** | Muzica camerei ca un spectacol de lumini în direct — bătăile detonază inele, basul umflă scena, înaltele plouă scântei. Are propria secțiune completă mai jos. |

**Steagurile** portocalii de pe Spectrogramă marchează momentele în care clasificatorul de sunete s-a declanșat, cu eticheta și încrederea lui — astfel vezi exact la ce formă a reacționat modelul.

## Citire și măsurare

- **Glisorul din stânga** — scara de afișare. Trage în jos o vedere saturată sau în sus una liniștită (doar afișare; nu afectează niciodată detecția).
- **Atinge** Spectrograma — o citire cu fir de cruce: frecvență, nivel și cât de demult.
- **Trage** o casetă — statistici pentru acea regiune: interval de frecvență, durată, vârf, centroid, energie, factor de crestă.
- **Ciupi** — zoom pe axa de frecvență. Butonul ⤢ resetează.
- **ⓘ** — panoul de telemetrie (detalii FFT, frecvență dominantă, centroid spectral) plus un stepper de **calibrare** care decalează toate citirile de nivel dacă le-ai comparat cu un metru de referință.

## Înghețare și reluare

Butonul **pauză** îngheață imaginea (microfonul și alertele continuă să ruleze). Cât e înghețat, apare o bară de transport:

- **▶** redă buffer-ul vizual; butonul de viteză ciclizează 1× / 2× / 0,5×.
- **🔍− / 🔍+** fac zoom pe fereastra de timp; **minimapa** din dreapta arată tot buffer-ul — trage-o ca să derulezi.
- Spectrograma și Parțialele împart un ceas, astfel încât poți sări între ele pe exact același moment înghețat.

## Capturarea sunetelor pentru un pachet personalizat

Asta e superputerea scope-ului: iei exemple reale ale unui sunet *pe măsură ce îl auzi*, drept din vederea în direct.

1. Atinge butonul magenta **Train** (pătrat întrerupt). Vederea îngheață și apare o **bandă** magenta.
2. Trage marginile benzii în jurul unui exemplu curat al sunetului tău — eticheta arată durata selectată. Câteva secunde în jurul sunetului e ideal.
3. Atinge **Salvează** (butonul săgeată-în-tavă). Audio-ul de sub bandă e scris într-un clip, și apare o casetă numerotată. Banda rămâne armată — derulează la următorul exemplu și Salvează din nou (până la 6 pe sesiune). Atinge de două ori o casetă numerotată ca să ștergi acel clip.
4. Atinge **ciocanul** ca să deschizi panoul **Build**:
   - **Nume model** — pachetul (de ex. *Bufnițe din curte*).
   - **Nume sunet** — ce văd utilizatorii pe hartă.
   - **Etichetă de clasă** — eticheta exactă pe care o va emite modelul antrenat (derivată automat; minuscule și underscore).
   - **Când e detectat** — *doar hartă* (un punct, identificare) sau *în mișcare* (urmărit ca un vehicul). Sunetele personalizate identifică; nu ridică alerte de urgență — detecția de siguranță încorporată se ocupă întotdeauna de asta.
   - Iconiță, culoare, prag de încredere și rază maximă — cardul de anteprimă în direct arată exact cum va arăta o detecție.
5. Atinge **Creează și exportă**. Primești un zip care conține clipurile tale (deja în structura de dosare a Create ML) plus fișierele pachetului, gata de partajat către un Mac.
6. Pe Mac, antrenează un **Sound Classifier** în Create ML din dosarul `clips/`, pune `model.mlpackage` exportat în dosarul pachetului, comprimă din nou și importă-l pe telefon sub **Surse de alerte → Pachete de sunete personalizate**.

Jumătatea de antrenare și import — inclusiv **clasa Background obligatorie** și poarta care previne alarmele false — e acoperită pas cu pas în **[ghidul Pachete de sunete personalizate](https://vigilantear.com/ro/byom/)**.

## Tab-ul Vizualizator — muzica ca lumină

Tab-ul **Vizualizator** transformă muzica camerei într-un spectacol de lumini pe care un
privitor surd, hipoacuzic sau CODA îl poate *simți cu ochii*. Nimic de pe el nu e decorație —
fiecare element e condus de o caracteristică acustică reală, în direct de la microfoane:

- **Fiecare bătaie detonază un inel** — un detector de onset declanșează explozii de inele și
  un flash de ecran exact când o persoană auzitoare ar simți kick-ul.
- **Basul respiră** — inelul de ancoră din centru și inelele texturate care plutesc se umflă
  cu energia de joasă frecvență.
- **Înaltele plouă scântei** — cinele și hi-hat cad ca picături luminoase.
- **Titlul melodiei călărește un glob** — odată recunoscută melodia, titlul ei înfășoară
  ecuatorul unui glob invizibil care plutește prin scenă, iar artistul ține colțul din dreapta-sus.

Setează-ți **numele de DJ** (și culoarea lui) sub **Preferințe → Acoustic Visualizer** — ține
colțul din stânga-sus, stilat ca eticheta artistului.

**Pune-l pe un televizor:** atinge **butonul tv** din antetul scope-ului, conectează cu un cablu
USB-C–HDMI sau Duplicare ecran AirPlay și apasă **Duplică** — ecranul mare arată doar
grafica, în timp ce acest telefon rămâne comenzile și microfonul. Schimbă tab-urile scope-ului pe
telefon și televizorul urmează, astfel încât aceeași Duplicare pune Spectrograma sau Vizualizatorul pe perete.

## Bun de știut

- Scope-ul nu costă nimic când e închis — analiza extra rulează doar cât e pe ecran.
- Nici lăsat deschis nu costă mult: Spectrograma nu consumă aproape nimic, deci nu-ți încălzește telefonul oricât de mult te-ai uita, iar Spectrograma și Parțialele se redesenează într-un ritm constant, ușor de citit, fără să rateze nimic din ce aud.
- Valorile absolute în dB sunt necalibrate implicit; sunt consistente și comparabile, iar stepper-ul de calibrare din ⓘ îți permite să le aliniezi la un metru de referință.
- Scope-ul citește canalul principal al microfonului. Detecția, găsirea direcției și alertele nu sunt afectate de nimic din ce faci aici.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Toate drepturile rezervate.<br />
  Brevet în curs de înregistrare
</p>
