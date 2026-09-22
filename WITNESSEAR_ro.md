# Witness Ear — Jurnal sonor opțional pe 24 de ore și raport PDF

**Witness Ear** este o funcție opțională a **Vigilant Ear**. Ține un jurnal scurt, pe dispozitiv, al sunetelor pe care aplicația le-a clasificat în jurul tău, ca să poți exporta un **raport PDF de sinteză** simplu când ai nevoie de o evidență scrisă — nu doar o hartă în direct.  Înregistrează **evenimente** sonore, nu audio sau conversații.

E **oprit implicit**, **gratuit** și conceput să stea deoparte până ai nevoie de el.

---

## Ce e

Cât timp Vigilant Ear monitorizează, clasifică deja sunetele din mediu (sirene, alarme, vehicule, categorii de lângă vorbire și altele). Witness Ear face un singur lucru în plus când îl pornești:

- **Stochează clasificările recente** pe telefonul tău până la **24 de ore**.
- Poți **exporta** acele evenimente ca **Raport PDF de sinteză** ca să le partajezi prin Mail, Files, AirDrop etc.
- Poți **șterge** jurnalul oricând cu controlul de coș. Oprirea Witness Ear doar **pune pauză** jurnalizării — ce e deja înregistrat e **păstrat** (și tot îmbătrânește după 24 de ore), astfel încât îl poți suspenda o vreme fără să pierzi ziua.

**Nu există un „mod de aplicație” Witness Ear separat** și nici un ecran dedicat. Controlul stă sub **Preferințe → JURNAL SONOR**: un comutator **Witness Ear** (cu un mic control **coș** lângă el cât jurnalul ține evenimente), plus un rând **Raport PDF de sinteză** cu **Exportă**.

Raportul listează lucruri ca **ora**, **încrederea**, **nivelul de vârf (dBFS)**, **direcția când e măsurată**, **care telefon l-a auzit** (acest dispozitiv sau un peer Constellation legat) și **eticheta sunetului**, grupată pe familie de sunete. E un **ajutor de observare a tiparelor și de conștientizare**, nu un sonometru certificat.

---

## De ce ți-ar trebui

Oamenii folosesc un jurnal scris scurt când memoria și punctele în direct nu ajung:

| Situație | Cum ajută Witness Ear |
|-----------|------------------------|
| **Discuție cu vecinul / HOA / proprietarul** | O listă datată a *ce a etichetat aplicația și când*, pe o noapte sau o zi, ca punct de plecare al conversației — nu ca metrologie de tribunal. |
| **„A fost în fiecare noapte sau o dată?”** | 24 de ore rulante, ca să verifici cât de recent e fără să ții o arhivă permanentă. |
| **Casă cu mai multe telefoane (Constellation)** | Telefoanele legate împart ce aud pe **mesh-ul local**. Detecțiile partajate pot ateriza și în jurnal, astfel încât raportul poate arăta **care telefon** a auzit un eveniment — nu doar acest microfon. |
| **Jurnal de accesibilitate / conștientizare** | Un export simplu pe care îl poți trimite unui membru al familiei sau unui contact de sprijin după o porțiune zgomotoasă. |

Dacă n-ai nevoie niciodată de un PDF, lasă Witness Ear **oprit**. Detecția și alertele merg exact ca înainte.

---

## Cum îl folosești (iPhone / iPad)

### 1. Pornește-l

1. Deschide **Preferințe** (calea clopot / Customizations din evantaiul de acțiuni sau din meniu).
2. Găsește secțiunea **JURNAL SONOR**.
3. Pornește **Witness Ear**.  
   - Atinge **ⓘ** de lângă nume pentru explicația scurtă din aplicație.
4. Lasă Vigilant Ear să monitorizeze ca de obicei (microfon activ pentru sunetele care te interesează).

Cât e pornit, clasificările care ating pragul de încredere al aplicației sunt adăugate la un jurnal **local** (cu un gol scurt pe etichetă, astfel încât fișierul nu e inundat de duplicate).

### 2. Exportă un PDF

1. Rămâi în **JURNAL SONOR**.
2. Pe rândul **Raport PDF de sinteză**, atinge **Exportă**.  
   - Atinge **ⓘ** pe acel rând pentru ce conține PDF-ul.
3. Așteaptă **foaia de partajare** a sistemului, apoi salvează sau trimite fișierul (`WitnessEar-Report-….pdf`).

Dacă jurnalul e gol, Exportă va spune că nu sunt evenimente în ultimele 24 de ore — pornește Witness Ear și așteaptă până clasificatorul s-a declanșat cel puțin o dată.

### 3. Pauză sau ștergere a jurnalului

- **Pauză:** oprește comutatorul **Witness Ear**. Jurnalizarea se oprește; ce e deja înregistrat e **păstrat** și tot îmbătrânește după 24 de ore. Pornește-l din nou ca să reiei.
- **Ștergere:** atinge micul **coș roșu** de pe rândul **Witness Ear** (apare doar cât jurnalul ține evenimente). Armează un scurt countdown **Anulează (5)…(1)** — atinge din nou ca să anulezi, sau lasă-l să treacă ca să ștergi totul imediat.

### 4. Constellation (opțional)

Dacă **Constellation** e legat cu alte telefoane pe mesh-ul tău:

- Telefoanele **împart deja multe detecții non-vorbire** pentru harta în direct și imaginea multi-telefon.
- Cu Witness Ear **pornit**, detecțiile **partajate de peer** pot fi **îmbinate în jurnalul acestui telefon** și apar în PDF sub **Heard by** (numele peer-ului) față de **this phone**.

Fiecare telefon ține tot **propriul** fișier de jurnal pe dispozitiv. **Nu există o arhivă Witness Ear în cloud**. Pentru cel mai complet PDF multi-telefon pe un singur dispozitiv, acel dispozitiv ar fi trebuit să fie legat și să jurnalizeze cât ceilalți partajau.

---

## Ce conține PDF-ul (formă de exemplu)

Layout-ul exact poate evolua; intenția e un raport citibil prin PDF sau pe hârtie tipărită.

```
WITNESS EAR — Jurnal sonor pe 24 de ore
Generat 7 aug, 09:30  ·  Fereastră 6 aug, 10:00 – 7 aug, 09:30
Surse: acest telefon + peer-uri Constellation.  Repetările în 30 s sunt jurnalizate o dată.

[dale de sinteză]       eșantioane ale clasificatorului · episoade (gol de 60 s) · grupuri de sunete · interval acoperit
[Activitate pe oră]     grafic cu bare al eșantioanelor pe oră
[Grupuri de sunete]     etichete brute reunite pe familia de profil (Music, Vehicles, …)
[Locații]               L1, L2, … — poziții grupate în ~110 m, cu note de acuratețe
[Dispozitive]           P1 (acest telefon, model · iOS · build aplicație), P2 … (peer-uri legate + model)

Episoade
#   Start         Durată   Eșant.    Vârf     Sunete              De
1   7 aug, 01:44  10m 40s  17        −12 dB   Music, Animals +4   P1, P2

Surse ale episodului (cele mai vechi primele)
Ora         Conf   dBFS   Dir    De   Sunet
08:12:03    87%    −21    —      P1   Emergency & alarms · Siren
08:12:04    71%    −25    207°   P2   Emergency & alarms · Siren
08:14:10    64%    −34    —      P1   Household & speech · Knock

Metodă și limite …

Integritate
SHA-256 al celor N rânduri de jurnal exportate în această fereastră (JSON, chei sortate):
a1b2c3… (digest hex complet)
Acuratețea locației / flaguri de GPS simulat / note de stare a dispozitivului / dispozitivul care exportă / baza de timp…

Atestare

Eu, _______________, atest că … Rânduri Semnătură / Dată pentru cerneală după tipar.
```

Fiecare pagină poartă o filigrană palidă Wingdings în spatele conținutului și un subsol cu marca Wingdings, „© 2026 Wingdings, Inc. All rights reserved. · Patent Pending”, și numărul paginii — o primă verificare ușoară că un PDF pe care ți-l dă cineva arată ca un export autentic.

**Cum să-l citești**

- **Eșantioane ale clasificatorului** — numărul de ferestre stocate (nu „numărul de sirene din oraș”).
- **Episoade distincte** — serii de eșantioane separate de circa un minut de liniște; un sunet lung continuu poate fi multe eșantioane, dar puține episoade.
- **Conf** — încrederea modelului (0–100%), **nu** decibeli SPL.
- **dBFS** — nivelul de vârf al microfonului lângă eveniment, relativ la scala digitală plină a acelui telefon (0 = cel mai tare pe care îl poate înregistra microfonul). Bun pentru a compara momente; **nu** e dB SPL calibrat.
- **Dir** — direcția absolută de busolă a sunetului (0° = nord), arătată **doar** când o rezolvare cu două microfoane a măsurat-o de fapt; „—” înseamnă nemeasurată. Niciodată dedusă din cum era îndreptat telefonul.
- **By** — identificatorul dispozitivului din secțiunea **Dispozitive** (P1 = telefonul care exportă, P2… = peer-uri legate), potrivit cu L-id-urile din **Locații**.
- **Hash de integritate** — amprenta jurnalului de pe dispozitiv folosit ca să construiască PDF-ul; ajută să detecteze editări ale tabelului de evenimente după export.
- **Atestare** — bloc opțional de semnătură umană după tipar (tu garantezi posesia/locația).

---

## Confidențialitatea datelor

| Subiect | Politică |
|-------|--------|
| **Implicit** | **Oprit.** Niciun jurnal Witness Ear până optezi. |
| **Unde stau datele** | Doar pe **acest dispozitiv**, în sandbox-ul privat **Application Support** al aplicației (vezi mai jos). |
| **Ce e stocat** | Metadate de clasificare: oră, etichetă, încredere, locație/orientare opționale dacă aplicația le are deja, id de peer opțional când e îmbinat un eveniment de mesh. **Nu** o înregistrare audio continuă a zilei pentru jurnal și nici vorbe transcrise (sau traduse). |
| **Păstrare** | **24 de ore rulante.** Rândurile mai vechi sunt tăiate. |
| **Când îl oprești** | Jurnalizarea **pune pauză**; intrările stocate sunt păstrate și tot îmbătrânesc după 24 de ore. |
| **Control de ștergere** | Coș pe rândul Witness Ear (arătat cât jurnalul ține evenimente), cu un countdown care se poate anula. |
| **Încărcare** | Witness Ear **nu** încarcă jurnalul către Wingdings sau un cloud Witness Ear. |
| **Export** | **Tu** alegi să partajezi PDF-ul (Mail, Files, AirDrop etc.). Odată partajat, copia aceea e în afara controlului aplicației. |
| **Constellation** | Partajarea pe mesh a detecțiilor în direct e o funcție de produs pe **rețea locală** între telefoanele tale legate. Rândurile de jurnal îmbinate rămân tot pe telefonul care le-a primit până exporți sau ștergi. |
| **Copii / folosire sensibilă** | Nu folosi jurnalul ca să identifici sau să urmărești oameni. E pentru **locuri, ore și categorii de sunete**, nu dosare personale. |

### Ce înseamnă „Application Support”

**Application Support** e un dosar privat care aparține doar Vigilant Ear pe acest telefon. **Nu** e un drive în cloud, **nu** e un album public „Files” și **nu** e e-mail către suport. Alte aplicații nu-l pot citi după regulile standard iOS.

Pe un iPhone cu **cod de dispozitiv** (sau biometrie), iOS **criptează datele aplicației în repaus** folosind protecție susținută de hardware. Witness Ear **nu** încarcă jurnalul și **nu** adaugă un al doilea strat de criptare gestionat de aplicație deasupra. Când dispozitivul e blocat, accesul urmează clasele standard Apple de protecție a datelor (de obicei protejate până la prima deblocare după pornire, dacă nu se aplică setări mai stricte). Backup-urile (backup criptat pe calculator / regulile de backup iCloud) sunt separate de „a sta pe discul telefonului”.

---

## Folosirea acestui raport în dispute

Witness Ear poate produce un **registru digital autentificat de metadate acustice** (ce au etichetat clasificatorii de pe dispozitiv, când și care telefon a contribuit) — util pentru conversații **informale** cu vecini, proprietari, HOA sau mediatori. **Nu** e un substitut pentru un studiu certificat Clasa 1/2 sau pentru consultanță juridică.

**Pași practici:**

1. Lasă **Witness Ear pornit** pe perioada care te interesează (până la 24 de ore păstrate).
2. **Exportă** PDF-ul; păstrează fișierul original fără să-l resalvezi printr-un editor care rescrie PDF-uri.
3. **Tipărește** o copie dacă o urmă pe hârtie ajută; completează blocul **Atestare** (nume, locație, semnătură, dată) cu cerneală.
4. Îndreaptă destinatarii către secțiunea **Integritate**: amprenta **SHA-256** a rândurilor de jurnal. Un re-export ulterior din **același jurnal nealterat de pe dispozitiv** ar trebui să se potrivească; editarea tabelului de evenimente într-un editor PDF nu va actualiza corect acel hash decât dacă atacatorul reconstruiește și din date-sursă potrivite.
5. Fii explicit: astea sunt **metadate generate de aplicație**, ora e **ceasul dispozitivului**, nivelurile **nu sunt SPL legal**, iar etichetele pot fi greșite.
6. **Nu** operăm momentan un site public „încarcă PDF-ul ca să verifici semnătura”. Hash-ul e o **notă de integritate de sine stătătoare**, nu o atestare Wingdings în cloud.

**Nu** inventa evenimente, nu tăia blocul de integritate și nu pretinde că PDF-ul e o măsurătoare certificată de zgomot.

---

## Avertismente

1. **Nu e un instrument certificat.** Microfoanele de telefon **nu** sunt sonometre Clasa 1/2. Scorurile de încredere și orice niveluri înrudite sunt **relative**, necalibrate, și **nu trebuie** prezentate ca dBA/dBC absolute pentru aplicare, amenzi sau metrologie legală. Raportul poate totuși fi util ca **registru digital autentificat de metadate acustice** când e folosit cinstit.

2. **Nu e o garanție de completețe.** Jurnalul include doar ce au etichetat **clasificatorii de pe dispozitiv** cât monitorizarea era activă și Witness Ear era **pornit**. Perioadele liniștite, microfonul oprit, aplicația care nu rulează, încrederea joasă sau duplicatele limitate pot lăsa goluri. Absența unui rând **nu** e dovadă că un sunet nu s-a întâmplat niciodată.

3. **Etichetele pot fi greșite.** Motoarele de învățare automată pot clasifica greșit. Un rând „Siren” înseamnă cea mai bună presupunere a modelului în acel moment — nu un vehicul de urgență garantat. Tratează PDF-ul ca **note de sprijin**, nu ca adevăr de teren.

4. **Nu e un dispozitiv de siguranță.** Vigilant Ear / Witness Ear sunt **ajutoare de conștientizare și accesibilitate**. Nu înlocuiesc judecata umană, alarmele certificate sau serviciile oficiale de urgență.

5. **Dovezi și dispute.** Dacă partajezi un PDF cu un proprietar, o HOA sau o agenție, fii cinstit despre ce e: un **jurnal de clasificare generat de aplicație**, cu păstrare limitată, exportat de utilizator, cu un hash de integritate pe dispozitiv. Nu altera tabelul de evenimente și nu inventa evenimente. Nu oferim consultanță juridică; regulile locale despre înregistrări și dovezi variază — la îndoială, întreabă un profesionist calificat.

6. **Rapoarte multi-telefon.** Rândurile de peer depind de conectivitatea Constellation și de regulile de partajare (de ex. surse non-vorbire). Ceasurile și GPS-ul de pe telefoanele de consum au eroare; acordul multi-telefon pe „aceeași noapte” e context util, nu sincronizare de laborator.

7. **Baza de timp.** Marcajele de timp folosesc **ceasul de perete al dispozitivului**, pe care utilizatorul îl poate schimba. PDF-ul notează asta; nu e verificat automat față de ora de rețea în produsul actual.

8. **Responsabilitatea ta la partajare.** Odată ce trimiți un raport prin AirDrop sau e-mail, destinatarii pot păstra copii. Exportă doar ce intenționezi să partajezi.

---

## Note de platformă

- **iOS / iPadOS:** controalele Witness Ear se livrează sub **Preferințe → JURNAL SONOR**, cum e descris mai sus.

---

## Bun de știut

- Lăsarea Witness Ear **oprit** nu costă nimic în termeni de CPU sau baterie a telefonului.
- Pornirea lui **adaugă** stocare locală ușoară și scrieri ocazionale de evenimente ca să construiască raportul.
- **Exportă** construiește PDF-ul fără să ceară un meniu de utilizator separat.
- Pentru alertele și direcția de fiecare zi, folosește harta principală Vigilant Ear și HUD-urile; folosește Witness Ear când ai nevoie de o **instantanee scrisă, portabilă** a evenimentelor sonore din ultima zi.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Toate drepturile rezervate.<br />
  Brevet în curs de înregistrare
</p>
