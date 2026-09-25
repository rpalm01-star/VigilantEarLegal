# Politică de confidențialitate pentru Vigilant Ear 👂🛰️

**Data de intrare în vigoare:** 24 septembrie 2026

## Introducere

Vigilant Ear („noi”, „nouă” sau „al nostru”) se angajează să-ți protejeze confidențialitatea. Această Politică de confidențialitate explică ce informații prelucrează aplicația, ce rămâne pe dispozitivul tău și când date limitate pot fi trimise pe internet ca să ofere funcții anume.

## Confidențialitatea pe scurt

- **Detectarea acustică de bază rulează pe dispozitivul tău.** Clasificarea sunetelor, urmărirea direcțională, subtitrările în direct și logica alertelor sunt concepute să funcționeze local, folosind microfonul și senzorii telefonului tău.
- **Nu-ți vindem datele** și nu folosim SDK-uri de publicitate sau de analiză comportamentală.
- **Nu stocăm și nu încărcăm înregistrări audio.** Audio-ul de la microfon e prelucrat în timp real pentru detectare și (când e activată) pentru subtitrări; nu e salvat niciodată ca fișier de sunet și nu e trimis pentru analiză în cloud. Până la vreo treizeci de secunde de sunet sunt ținute scurt în memoria de lucru a telefonului cât sunt transcrise — acel buffer scurt e ce le permite subtitrărilor să prindă primele cuvinte ale vorbitorului în loc să le piardă — și nu atinge niciodată stocarea, nu e transmis nicăieri și dispare în clipa în care se închide aplicația. Funcția Rewind aduce înapoi doar **textul** recent al subtitrărilor; niciun sunet nu e păstrat pentru redare.
- **Unele funcții folosesc internetul** — hărți, fluxuri de vreme severă, identificarea opțională a muzicii, date stradale, cumpărături din magazinul de aplicații, trafic opțional de mesh între *dispozitivele tale*, încărcarea paginilor legale din aplicație și (doar dacă optezi) rapoartele Research Array. Sunt descrise mai jos.
- **Tu rămâi la control.** Poți dezactiva identificarea muzicii Shazam, poți opri categoriile de alertă, poți lăsa Constellation oprit, poți lăsa **Research Array** oprit (e oprit implicit), poți revoca permisiunile în setările de sistem sau poți opri ascultarea în fundal oricând.

## Informații prelucrate pe dispozitivul tău

Cu permisiunea ta, Vigilant Ear accesează următoarele **local**:

- **Audio de la microfon** — Folosit în timp real ca să detecteze sunetele din mediu (sirene, vehicule, sonerii, plâns de bebeluș, persoane în apropiere etc.), să estimeze direcția și (când Speaker Mode e pornit) să producă subtitrări în direct și traducere opțională pe dispozitiv.
- **Recunoașterea vorbirii (pe dispozitiv)** — Când subtitrările sunt activate, framework-urile de vorbire ale dispozitivului tău transcriu vorbirea din apropiere în text pe telefon. Textul subtitrărilor e arătat în direct și nu e arhivat de Vigilant Ear ca istoric permanent de transcrieri; jurnalele de depanare nu includ conținutul subtitrărilor. Ca să scrie corect numele, aplicația poate da acelui recunoscător de pe dispozitiv o listă scurtă de cuvinte deja prezente pe acest telefon — numele afișate ale telefoanelor Constellation pe care le-ai legat, și titlul și artistul unei melodii pe care Shazam tocmai a identificat-o. **Nu** citește Contactele tale, iar lista aceea nu părăsește niciodată dispozitivul.
- **Voci numite (opțional)** — Dacă numești un vorbitor, acel nume și o amprentă vocală scurtă rămân în depozitul criptat al acestui telefon și **nu-l părăsesc niciodată**. Nu există backup în cloud al vocilor.
- **Locație** — Folosită ca să plaseze pe hartă sunetele detectate și zonele de alertă meteo, ca să îmbunătățească ghidarea direcțională și ca să-și amintească cât de liniștită e o cameră familiară, astfel încât detectarea muzicii să n-aibă nevoie să o reînvețe de fiecare dată când deschizi aplicația. Ultima folosire salvează o latitudine de una singură — fără longitudine — rotunjită la circa 100 de metri, pentru cel mult opt locuri. Rămâne în setările proprii ale aplicației pe acest telefon și nu e trimisă nicăieri.
- **Orientarea și mișcarea dispozitivului** — Folosite ca să îmbunătățească acuratețea direcției.
- **Cameră (opțional)** — Folosită doar dacă deschizi vederea AR a camerei „vezi sunetul”, ca marcajele să poată fi prinse în previzualizarea live a camerei. Cadrele camerei sunt folosite pentru afișare pe dispozitiv; nu sunt încărcate de Vigilant Ear pentru recunoașterea sunetelor.
- **Apple Watch (opțional)** — Când e disponibil un companion Watch, etichetele de alertă și indiciile de direcție pot fi transmise către Watch-ul asociat, ca să poți arunca o privire la încheietură.
- **Jurnalul sonor Witness Ear (opțional, oprit implicit)** — Când pornești Witness Ear, aplicația ține un jurnal rulant de **24 de ore, pe dispozitiv**, al clasificărilor de sunet (oră, etichetă, încredere, nivel de vârf, direcție când e măsurată și locația telefonului în acel moment; plus intrările partajate de telefoanele Constellation legate). Jurnalul e stocat doar în sandbox-ul privat al aplicației pe acest telefon și nu e încărcat niciodată de Vigilant Ear. Părăsește telefonul doar înăuntrul unui raport PDF pe care **tu** alegi să-l exporți și să-l partajezi. Intrările mai vechi de 24 de ore sunt șterse automat; oprirea Witness Ear pune pauză la jurnalizare (intrările păstrate tot îmbătrânesc), iar controlul de coș din aplicație șterge jurnalul imediat. Vezi ghidul Witness Ear pentru detalii.

Această prelucrare pe dispozitiv e inima aplicației. Aplicațiile concurente trimit adesea audio-ul în cloud pentru analiză și monetizare. Vigilant Ear e construit altfel: conducta ta de conștientizare acustică e concepută să ruleze pe telefonul însuși.

## Rețea și servicii terțe

Când folosești anumite funcții — sau când aplicația are nevoie de ele ca să funcționeze — **date limitate pot părăsi dispozitivul tău** și pot fi gestionate de servicii terțe după propriile lor politici de confidențialitate:

*   **Afișarea hărții**
    *   *Ce se trimite:* Cereri de dale de hartă; fereastra ta de hartă și locația aproximativă, atât cât e nevoie ca să deseneze harta
    *   *Furnizor:* Apple Maps / MapKit pe iPhone și iPad; Google Maps pe Android
*   **Alerte de vreme severă (prin propriul nostru serviciu de alerte)**
    *   *De ce există:* Avertizările oficiale vin de la agențiile naționale de meteorologie din lume. Fiecare telefon obișnuia să contacteze acele agenții direct — ceea ce însemna că fiecare putea vedea adresa de rețea a dispozitivului tău și cât de des verificai — iar fluxurile publice partajate, cu limite de cereri, au început să piardă alerte pe măsură ce baza noastră de utilizatori a crescut. Serverul nostru preia acum datele oficiale o dată, pentru toată lumea, și le ține circa **15 minute**. Aceleași avertizări oficiale, mai de încredere — și **telefonul tău nu contactează niciodată serverele unui guvern străin.** Începând doar cu v1.1.0 sau mai nou.
    *   *Ce se trimite:* O cerere către serviciul nostru poartă doar codul de țară/regiune, limba aplicației tale și — cel mult — o celulă de locație pe care telefonul tău o rotunjește la circa **50 km (0,5°)** înainte să fie trimisă, folosită doar ca să taie răspunsul la alertele de lângă tine. Testul precis „sunt înăuntrul acestei zone de avertizare?” se întâmplă **pe telefonul tău** și nu iese niciodată de acolo. Nu e atașat niciun nume, cont sau identificator de dispozitiv. Ca la orice serviciu HTTPS, există jurnale standard de hosting de scurtă durată ca să-l operăm; nu sunt o funcție de urmărire și nu le vindem.
    *   *Furnizor:* Date oficiale de la 53 de servicii meteorologice guvernamentale din 88 de țări și teritorii și de la serviciul de alertă de protecție civilă din Noua Zeelandă — livrate telefonului tău prin infrastructură pe care o operăm.
*   **Alerte de cutremur (prin propriul nostru serviciu de alerte)**
    *   *Ce se trimite:* Cereri către un singur flux public mondial de sinteză a cutremurelor, preluate prin același serviciu ca alertele meteo de mai sus, astfel încât telefonul tău nu contactează serverele unui guvern străin nici pentru acestea — cererea nu poartă nicio informație de locație sau regiune; locația dispozitivului tău e folosită doar pe dispozitiv ca să decidă dacă un cutremur raportat e lângă tine
    *   *Furnizor:* Fluxul public de cutremure al U.S. Geological Survey (USGS), retransmis de Wingdings
*   **Identificarea muzicii (opțional, Power Pack+)**
    *   *Ce se trimite:* Amprente audio scurte — niciodată audio brut — când e detectată muzică și Shazam e activat (poate fi oprit în setări)
    *   *Furnizor:* Apple Shazam / ShazamKit
*   **Context stradal**
    *   *Ce se trimite:* **Latitudinea și longitudinea dumneavoastră exacte**, într-o interogare despre ce drumuri se află la câteva sute de metri de dumneavoastră, astfel încât vehiculele detectate să poată fi plasate pe drumul pe care se află cu adevărat, nu în mijlocul unui câmp. Aceasta este o poziție precisă, nu o celulă rotunjită — spre deosebire de cererea meteo de mai sus, care este intenționat aproximativă. Nu se atașează niciun nume, cont sau identificator de dispozitiv și nu se include nimic din ceea ce a auzit telefonul.
    *   *Furnizor:* Contribuitorii OpenStreetMap prin API-ul public Overpass
*   **Rutare rutieră**
    *   *Ce se trimite:* **Latitudinea și longitudinea dumneavoastră exacte**, împreună cu poziția unui sunet urmărit, pentru ca pe hartă să poată fi trasată o rută rutieră între cele două. Din nou o poziție precisă, fără identificator și fără nimic despre detecția în sine.
    *   *Furnizor:* Serviciul public de rutare OSRM (project-osrm.org)
*   **Cumpărături și drepturi**
    *   *Ce se trimite:* Tokenuri de cumpărare și starea drepturilor / a perioadei de probă pentru deblocarea unică opțională Power Pack+ (nu un abonament)
    *   *Furnizor:* Apple App Store pe iPhone și iPad; Google Play Billing pe Android
*   **Mesh Constellation (opțional, Power Pack+)**
    *   *Ce se trimite:* Când activezi Constellation pe mai multe telefoane, dispozitivele participante schimbă metadate acustice necesare pentru o imagine partajată — de exemplu poziție relativă / telemetrie Ultra-Wideband acolo unde e disponibilă, direcții, etichete de sunet și text efemer de subtitrare. Traficul e peer-to-peer **doar între telefoanele care rulează Vigilant Ear și pe care le legi pentru Constellation**. Telefoanele fără aplicație nu se pot alătura acelei mesh și nu pot primi acele metadate. Wingdings nu operează un releu mesh în cloud pentru această conductă audio.
    *   *Furnizor:* Framework-uri Apple (de ex. Network / Nearby Interaction) între dispozitivele tale Vigilant Ear **Constellation este o funcție pentru iPhone și iPad; aplicația Android nu o implementează**, așa că un telefon Android nici nu se alătură acelei rețele, nici nu schimbă aceste metadate.
*   **Remote Link (opțional — pornirea unui link are nevoie de Power Pack+; alăturarea e gratuită)**
    *   *De ce există:* O persoană surdă sau hipoacuzică nu poate folosi un apel telefonic. Remote Link e substitutul — un apel privat doar video, cu date de subtitrare: două persoane se văd, citesc subtitrările și textul tastat una alteia și pot semna una către cealaltă prin video.
    *   *Ce se trimite:* **Niciun audio, în niciun moment** — o sesiune Remote Link nu poartă nicio pistă audio. Cele două telefoane vorbesc între ele, nu cu noi: video-ul în direct, subtitrările tale în direct ca text și tot ce tastezi călătoresc **direct între cele două telefoane** oriunde rețelele permit, criptate cap-la-cap, astfel încât nimic pe drum nu poate privi sau citi apelul. Ca să stabilești un link, serviciul nostru ține codul de invitație împreună cu detaliile de conexiune de care au nevoie cele două telefoane ca să se găsească. Acea cutie poștală nu ține **nici video, nici text** și expiră într-o oră.
    *   *Subtitrări:* Când telefonul tău ascultă, subtitrările pe care le produce sunt trimise telefonului legat ca text, în limba în care au fost auzite; acel telefon le traduce în limba propriului cititor, pe dispozitiv. Asta călătorește pe aceeași conexiune criptată ca video-ul — niciodată prin serverele noastre. **Pauză** oprește trimiterea video-ului și a subtitrărilor împreună, iar subtitrările se opresc cu totul când încetezi să asculți.
    *   *Dacă o conexiune directă e imposibilă:* când cele două telefoane nu pot ajunge unul la altul direct — rețele diferite, un router strict — video-ul, subtitrările și textul criptate sunt înaintate de un releu care **nu le poate decripta**. Releul vede totuși că există o conexiune, adresele de rețea implicate și cât trafic trece — cum trebuie orice releu — și nimic mai mult. Aplicația arată limpede dacă un link e **Direct** sau **Relayed**. Un link Relayed se închide singur după o oră.
    *   *Nimic nu e înregistrat:* niciun video, audio sau text dintr-un Remote Link nu e scris pe disc pe niciunul dintre telefoane, sau stocat pe vreun server.
    *   *Furnizor:* Wingdings (cutia de invitații), Cloudflare (releu — folosit doar când o conexiune directă e imposibilă)
*   **Documente legale din aplicație**
    *   *Ce se trimite:* Cereri web standard când deschizi Politica de confidențialitate, Termenii, Suportul sau paginile README ale produsului în aplicație
    *   *Furnizor:* GitHub (găzduirea documentelor)
*   **Harta în direct Research Array (doar vizualizare)**
    *   *Ce se trimite:* Cereri web standard când atingi **Map** ca să deschizi tabloul de bord public al rețelei în browser — ca atunci când vizitezi orice site. Vizualizarea nu trimite nimic din jurnalul sau detecțiile tale.
    *   *Furnizor:* Serviciul de cercetare Wingdings (gazda aplicației web)
*   **Research Array (opțional — oprit implicit)**
    *   *Ce se trimite:* Doar dacă pornești funcția: rapoarte mici, doar metadate, de detecție, când e înregistrat un eveniment eligibil (oră, locație aproximativă, caracteristici de bază ale semnalului, versiunea aplicației). Vezi **Research Array** mai jos.
    *   *Furnizor:* Infrastructură pe care o operăm (gazda aplicației și furnizori de baze de date, cum ar fi gazdele noastre web și Postgres). Detaliile și limitele sunt în secțiunea Research Array.

Alegem aceste servicii ca să livrăm funcțiile de hartă, meteo, etichetă muzicală, cumpărături, multi-dispozitiv și (când optezi) Research Array. **Wingdings nu primește de la acești furnizori audio-ul microfonului tău, istoricul continuu al locației sau informațiile de contact.**

## Ce colectează Wingdings

### Fără telemetrie sau diagnosticare la distanță

Vigilant Ear e conceput astfel încât funcțiile de bază de ascultare și subtitrare să ruleze pe dispozitivul tău. **Nu** colectăm analize de crash la distanță, telemetrie publicitară sau SDK-uri generale de analiză a folosirii.

Jurnale opționale de depanare **locale** pot fi scrise pe dispozitiv pentru depanare; nu sunt încărcate de aplicație ca o conductă de telemetrie, iar textul subtitrărilor nu e inclus în conținutul de depanare exportat.

**Excepție — Research Array și cache-ul meteo european:** dacă optezi pentru Research Array (vezi mai jos), Wingdings poate primi rapoartele limitate de eveniment pe care alegi să le contribui. Separat, când alertele meteo europene sunt activate, telefonul tău le citește din cache-ul meteo pe care îl operăm (descris mai sus); acele cereri poartă o celulă de locație grosieră de ~50 km și niciun identificator personal sau de dispozitiv. Niciuna dintre căi nu e analiză publicitară, și ambele există ca să facă o funcție anume să meargă — nu ca să construiască un profil al tău.

## Research Array (opțional, oprit implicit)

Vigilant Ear poate contribui opțional rapoarte de detecție **doar metadate** către o rețea de cercetare care ajută să construiască o imagine partajată a cutremurelor și a altor evenimente de joasă frecvență / legate de infrasunet. **Asta e oprită implicit și rulează doar dacă o pornești** — acolo unde comutatorul **Research Array** apare în preferințele aplicației (sau eticheta echivalentă în limba ta), îl poți porni sau opri oricând. Vizualizarea paginii publice **Map** a rețelei e separată de contribuție și nu partajează nimic din jurnalul tău.

Când e pornită — și doar când dispozitivul tău înregistrează un eveniment **eligibil** (de exemplu un candidat destul de puternic de infrasunet non-local sau legat de seismic, sau anumite semnale de audit legate de cutremur acolo unde acea cale e activată) — aplicația poate trimite un raport mic care conține:

- ora evenimentului (folosind ceasul de perete al dispozitivului într-un domeniu de timp global)
- o locație aproximativă, rotunjită la circa **1 kilometru** (nu adresa ta exactă de stradă sau o urmă continuă)
- caracteristici de bază ale evenimentului, cum ar fi canalul senzorului, dacă calea e aer sau sol, frecvența de vârf acolo unde se aplică și o măsură adimensională de intensitate (de exemplu STA/LTA)
- tipul de raport (de exemplu debut de infrasunet, candidat seismic sau audit de confirmare de cutremur)
- versiunea aplicației

**Ce nu se trimite niciodată pentru Research Array:** audio, forme de undă, înregistrări, transcrieri, subtitrări, contacte, identificatori pe care aplicația îi inventează ca să te eticheteze *pe tine* ca persoană sau instalare, fixul tău GPS precis (dincolo de rotunjirea grosieră de mai sus) sau orice înregistrare continuă a unde te duci. Audio-ul nu părăsește niciodată dispozitivul tău, nici pentru asta, nici pentru orice alt scop.

### Unde merg rapoartele

Rapoartele sunt trimise doar pe un **canal criptat (HTTPS)** către un serviciu de cercetare Wingdings pe care îl operăm (gazda aplicației și baza de date). Aplicația nu atașează **niciun ID de cercetare per utilizator sau per dispozitiv** și **niciun identificator de Apple Account** în payload. Un secret de aplicație partajat poate fi folosit astfel încât doar aplicația noastră să poată scrie la serviciu; acel secret **nu** e un identificator personal. Pot exista jurnale standard de hosting și securitate (de exemplu metadate de rețea de scurtă durată folosite ca să operăm serviciul), ca la orice serviciu HTTPS; nu sunt o funcție de produs ca să te urmărească, și nu le vindem.

Oprirea **Research Array** oprește **toate rapoartele viitoare** imediat. **Nu** șterge rapoartele deja trimise. Pentru că rapoartele nu poartă **niciun identificator per utilizator sau per dispozitiv**, nu putem căuta sau șterge „tot ce ai contribuit” după fapt — n-avem niciun mod de încredere să știm care rapoarte din trecut au venit de la tine. Asta e intenționat: ține fluxul de cercetare să nu devină un istoric personal sub controlul nostru.

## Ce nu facem

Noi **nu**:

- Vindem sau închiriem informațiile tale personale
- Stocăm înregistrări audio de mediu pe serverele noastre
- Operăm rețele de reclame, trackere între aplicații sau SDK-uri de profilare comportamentală
- Încărcăm urma ta continuă de locație către Wingdings
- Încărcăm audio brut de la microfon pentru recunoaștere vocală sau de sunet în cloud
- Cerem Research Array pentru funcțiile de bază ale aplicației — e opțional și oprit implicit

## Alegerile și controalele tale

Poți:

- **Revoca permisiunile** (microfon, locație, cameră, notificări, recunoașterea vorbirii) în Setările iOS, sau în Setările Android la Aplicații → Vigilant Ear → Permisiuni
- **Dezactivează identificarea muzicii Shazam** în Power Pack+ / preferințe
- **Opri categorii individuale de alertă** (sirene, meteo, sonerii, bebeluș etc.)
- **Opri ascultarea în fundal** când toate categoriile de alertă sunt dezactivate
- **Lăsa Constellation oprit** astfel încât nicio metadată de mesh să nu fie partajată cu alte telefoane care rulează Vigilant Ear. Telefoanele fără aplicație nu pot partaja acele metadate.
- **Lăsa Research Array oprit** (implicit), sau să-l oprești oricând în Setări ca să nu mai contribui rapoarte
- **Folosi Feature Playground** ca să previzualizezi alerte și funcții local, cu o filigrană PREVIEW clară, fără a implica o urgență reală

## Linii directoare ale platformei

Vigilant Ear urmează cerințele de confidențialitate ale Apple App Store și ghidurile Apple pentru aplicațiile destinate persoanelor cu nevoi de accesibilitate. Actualizăm această politică când practicile noastre sau obligațiile față de platformă se schimbă.

## Modificări ale acestei politici

Putem actualiza această Politică de confidențialitate din când în când. Modificările substanțiale vor fi reflectate actualizând **Data de intrare în vigoare** din capul acestei pagini.

## Contactează-ne

Dacă ai întrebări despre această Politică de confidențialitate, contactează-ne la:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear e construit cu dragoste și respect pentru comunitatea surzilor, hipoacuzicilor și CODA. Încrederea ta contează pentru noi.

*Vigilant Ear este un instrument de accesibilitate construit cu grijă. Folosește-l responsabil.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Toate drepturile rezervate.<br />
  Brevet în curs de înregistrare
</p>
