# Witness Ear — Diario dei suoni opzionale di 24 ore e report PDF

**Witness Ear** è una funzione opzionale di **Vigilant Ear**. Conserva un breve registro, sul dispositivo, dei suoni che l'app ha classificato intorno a lei, così da poter esportare un semplice **report riepilogativo in PDF** quando le serve una traccia scritta — non solo una mappa in tempo reale.  Registra **eventi** sonori, non audio né conversazioni.

È **disattivata per impostazione predefinita**, **gratuita** e progettata per restare in disparte finché non ne ha bisogno.

---

## Che cos'è

Mentre Vigilant Ear è in monitoraggio, classifica già i suoni ambientali (sirene, allarmi, veicoli, categorie affini al parlato e altro). Witness Ear fa una sola cosa in più quando lei lo attiva:

- **Memorizza le classificazioni recenti** sul suo telefono per un massimo di **24 ore**.
- Può **esportare** quegli eventi come **PDF Summary Report** da condividere via Mail, Files, AirDrop, ecc.
- Può **eliminare** il registro in qualsiasi momento con il controllo del cestino. Disattivare Witness Ear si limita a **mettere in pausa** la registrazione — ciò che è già registrato viene **conservato** (e scade comunque dopo 24 ore), quindi può sospenderlo per un po' senza perdere la giornata.

**Non esiste una «modalità app» Witness Ear separata** né una schermata dedicata. Il controllo si trova in **Preferences → SOUND JOURNAL**: un interruttore **Witness Ear** (con un piccolo controllo **cestino** accanto finché il registro contiene eventi), più una riga **PDF Summary Report** con **Export**.

Il report elenca dati come l'**ora**, la **confidenza**, il **livello di picco (dBFS)**, la **direzione quando è stata misurata**, **quale telefono lo ha sentito** (questo dispositivo o un peer Constellation collegato) e l'**etichetta del suono**, raggruppata per famiglia di suoni. È un **ausilio per individuare schemi e prendere consapevolezza**, non un fonometro certificato.

---

## Perché potrebbe servirle

Le persone ricorrono a un breve registro scritto quando la memoria e i punti in tempo reale non bastano:

| Situazione | Come aiuta Witness Ear |
|-----------|------------------------|
| **Discussione con un vicino / HOA / padrone di casa** | Un elenco datato di *che cosa l'app ha etichettato e quando*, nell'arco di una notte o di una giornata, come punto di partenza per un dialogo — non come metrologia con valore probatorio in tribunale. |
| **«Era tutte le notti o una volta sola?»** | 24 ore a finestra mobile per verificare quanto è recente qualcosa senza conservare un archivio permanente. |
| **Casa con più telefoni (Constellation)** | I telefoni collegati condividono ciò che sentono sulla loro **mesh locale**. Anche le rilevazioni condivise possono entrare nel diario, così il report può mostrare **quale telefono** ha sentito un evento — non solo questo microfono. |
| **Registro di accessibilità / consapevolezza** | Un'esportazione semplice da inviare a un familiare o a un contatto di supporto dopo un periodo rumoroso. |

Se non le serve mai un PDF, lasci Witness Ear **disattivato**. Il rilevamento e gli avvisi continuano a funzionare esattamente come prima.

---

## Come si usa (iPhone / iPad)

### 1. Lo attivi

1. Apra **Preferences** (percorso campanella / Customizations dal ventaglio di azioni o dal menu).
2. Trovi la sezione **SOUND JOURNAL**.
3. Attivi **Witness Ear**.  
   - Tocchi la **ⓘ** accanto al nome per la breve spiegazione all'interno dell'app.
4. Lasci Vigilant Ear in monitoraggio come al solito (microfono attivo per i suoni che le interessano).

Mentre è attivo, le classificazioni che raggiungono la soglia di confidenza dell'app vengono aggiunte a un registro **locale** (con un breve intervallo per etichetta, così il file non si riempie di duplicati).

### 2. Esporti un PDF

1. Resti in **SOUND JOURNAL**.
2. Sulla riga **PDF Summary Report**, tocchi **Export**.  
   - Tocchi **ⓘ** su quella riga per sapere che cosa contiene il PDF.
3. Attenda il **foglio di condivisione** di sistema, poi salvi o invii il file (`WitnessEar-Report-….pdf`).

Se il registro è vuoto, Export indicherà che non ci sono eventi nelle ultime 24 ore — attivi Witness Ear e attenda che il classificatore sia scattato almeno una volta.

### 3. Metta in pausa o elimini il registro

- **Pausa:** disattivi l'interruttore **Witness Ear**. La registrazione si ferma; ciò che è già registrato viene **conservato** e continua a scadere dopo 24 ore. Lo riattivi per riprendere.
- **Eliminazione:** tocchi il piccolo **cestino rosso** sulla riga **Witness Ear** (compare solo finché il registro contiene eventi). Si arma un breve conto alla rovescia **Cancel (5)…(1)** — tocchi di nuovo per annullare, oppure lo lasci scorrere fino in fondo per eliminare tutto immediatamente.

### 4. Constellation (opzionale)

Se **Constellation** è collegato ad altri telefoni sulla sua mesh:

- I telefoni **condividono già molte rilevazioni non vocali** per la mappa in tempo reale e il quadro multi-telefono.
- Con Witness Ear **attivo**, le rilevazioni **condivise dai peer** possono essere **unite nel diario di questo telefono** e comparire nel PDF sotto **Heard by** (nome del peer) rispetto a **this phone**.

Ogni telefono conserva comunque **il proprio** file di diario sul dispositivo. **Non esiste un archivio Witness Ear nel cloud**. Per il PDF multi-telefono più completo su un solo dispositivo, quel dispositivo deve essere stato collegato e in registrazione mentre gli altri condividevano.

---

## Che cosa contiene il PDF (esempio di struttura)

Il layout esatto può evolvere; l'intento è un report leggibile in PDF o su carta stampata.

```
WITNESS EAR — Diario dei suoni di 24 ore
Generato 7 ago, 09:30  ·  Finestra 6 ago, 10:00 – 7 ago, 09:30
Fonti: questo telefono + peer Constellation.  Le ripetizioni entro 30 s vengono registrate una sola volta.

[riquadri di riepilogo]  campioni del classificatore · episodi (intervallo di 60 s) · gruppi di suoni · arco coperto
[Attività per ora]       grafico a barre dei campioni per ora
[Gruppi di suoni]        etichette grezze unificate per famiglia di profilo (Music, Vehicles, …)
[Posizioni]              L1, L2, … — posizioni raggruppate entro ~110 m, con note di precisione
[Dispositivi]            P1 (questo telefono, modello · iOS · build dell'app), P2 … (peer collegati + modello)

Episodi
#   Inizio        Durata   Campioni  Picco    Suoni               Da
1   7 ago, 01:44  10m 40s  17        −12 dB   Music, Animals +4   P1, P2

Fonti degli episodi (dal più vecchio al più recente)
Ora         Conf   dBFS   Dir    Da   Suono
08:12:03    87%    −21    —      P1   Emergency & alarms · Siren
08:12:04    71%    −25    207°   P2   Emergency & alarms · Siren
08:14:10    64%    −34    —      P1   Household & speech · Knock

Metodo e limiti …

Integrità
SHA-256 delle N righe del diario esportate in questa finestra (JSON, chiavi ordinate):
a1b2c3… (digest esadecimale completo)
Precisione della posizione / indicatori di GPS simulato / note sullo stato del dispositivo / dispositivo esportatore / base temporale…

Attestazione

Io, _______________, attesto che … Righe Firma / Data da compilare a penna dopo la stampa.
```

Ogni pagina reca una filigrana discreta Wingdings dietro il contenuto e un piè di pagina con il marchio Wingdings, «© 2026 Wingdings, Inc. All rights reserved. · Patent Pending», e il numero di pagina — una prima verifica semplice che un PDF consegnato da qualcuno sembri un'esportazione autentica.

**Come leggerlo**

- **Campioni del classificatore** — numero di finestre memorizzate (non il «numero di sirene in città»).
- **Episodi distinti** — serie di campioni separate da circa un minuto di quiete; un suono lungo e continuo può dare molti campioni ma pochi episodi.
- **Conf** — confidenza del modello (0–100%), **non** decibel SPL.
- **dBFS** — livello di picco del microfono in prossimità dell'evento, relativo al fondo scala digitale di quel telefono (0 = il massimo che il microfono può registrare). Utile per confrontare momenti; **non** è dB SPL calibrato.
- **Dir** — rilevamento/direzione assoluta della bussola del suono (0° = nord), mostrata **solo** quando una risoluzione a due microfoni ne ha effettivamente misurata una; «—» significa non misurata. Mai dedotta da come era orientato il telefono.
- **By** — identificativo del dispositivo dalla sezione **Devices** (P1 = il telefono che esporta, P2… = peer collegati), corrispondente agli L-id in **Locations**.
- **Hash di integrità** — impronta del diario sul dispositivo usata per costruire il PDF; aiuta a rilevare modifiche alla tabella degli eventi successive all'esportazione.
- **Attestazione** — blocco opzionale di firma umana dopo la stampa (lei attesta il possesso/la posizione).

---

## Privacy dei dati

| Tema | Politica |
|-------|--------|
| **Predefinito** | **Disattivato.** Nessun registro Witness Ear finché lei non sceglie di attivarlo. |
| **Dove risiedono i dati** | Solo su **questo dispositivo**, nella sandbox privata **Application Support** dell'app (si veda più avanti). |
| **Che cosa viene memorizzato** | Metadati di classificazione: ora, etichetta, confidenza, posizione/orientamento opzionali se l'app li ha già, id del peer opzionale quando viene unito un evento di mesh. **Non** una registrazione audio continua della giornata per il diario, né parole pronunciate trascritte (o tradotte). |
| **Conservazione** | **24 ore a finestra mobile.** Le righe più vecchie vengono eliminate. |
| **Quando lo disattiva** | La registrazione **si mette in pausa**; le voci memorizzate vengono conservate e continuano a scadere dopo 24 ore. |
| **Controllo di eliminazione** | Cestino sulla riga Witness Ear (visibile finché il registro contiene eventi), con conto alla rovescia annullabile. |
| **Caricamento** | Witness Ear **non** carica il diario su Wingdings né su un cloud Witness Ear. |
| **Esportazione** | È **lei** a scegliere di condividere il PDF (Mail, Files, AirDrop, ecc.). Una volta condivisa, quella copia è fuori dal controllo dell'app. |
| **Constellation** | La condivisione via mesh delle rilevazioni in tempo reale è una funzione di prodotto su **rete locale** tra i suoi telefoni collegati. Le righe del diario unite restano comunque sul telefono che le ha ricevute finché lei non esporta o cancella. |
| **Minori / usi sensibili** | Non usi il registro per identificare o tracciare le persone. Serve per **luoghi, orari e categorie di suoni**, non per dossier personali. |

### Che cosa significa «Application Support»

**Application Support** è una cartella privata che appartiene solo a Vigilant Ear su questo telefono. **Non** è un'unità cloud, **non** è un album pubblico di «Files» e **non** è un'e-mail al supporto. Le altre app non possono leggerla secondo le regole standard di iOS.

Su un iPhone con **codice di sblocco del dispositivo** (o biometria), iOS **cifra i dati dell'app a riposo** con una protezione basata sull'hardware. Witness Ear **non** carica il diario e **non** aggiunge un secondo livello di cifratura gestito dall'app sopra a quello. Quando il dispositivo è bloccato, l'accesso segue le classi standard di protezione dei dati di Apple (in genere protetti fino al primo sblocco dopo l'avvio, salvo impostazioni più rigorose). I backup (backup cifrato su computer / regole di backup iCloud) sono cosa distinta dallo «stare sul disco del telefono».

---

## Uso di questo report nelle controversie

Witness Ear può produrre un **registro digitale autenticato di metadati acustici** (che cosa hanno etichettato i classificatori sul dispositivo, quando e quale telefono ha contribuito) — utile per conversazioni **informali** con vicini, padroni di casa, HOA o mediatori. **Non** sostituisce un rilievo certificato di Classe 1/2 né una consulenza legale.

**Passi pratici:**

1. Lasci **Witness Ear attivo** per il periodo che le interessa (fino a 24 ore di conservazione).
2. **Esporti** il PDF; conservi il file originale senza risalvarlo con un editor che riscrive i PDF.
3. **Stampi** una copia se una traccia cartacea aiuta; compili il blocco di **Attestazione** (nome, luogo, firma, data) a penna.
4. Indichi ai destinatari la sezione **Integrity**: l'impronta **SHA-256** delle righe del diario. Una riesportazione successiva dallo **stesso registro sul dispositivo, non alterato,** dovrebbe coincidere; modificare la tabella degli eventi in un editor PDF non aggiornerà correttamente quell'hash, a meno che l'attaccante non ricostruisca anche a partire da dati sorgente corrispondenti.
5. Sia esplicito: si tratta di **metadati generati dall'app**, l'ora è quella dell'**orologio del dispositivo**, i livelli **non sono SPL legale** e le etichette possono essere sbagliate.
6. Attualmente **non** gestiamo un sito web pubblico per «caricare il PDF e verificare la firma». L'hash è una **nota di integrità autonoma**, non un'attestazione cloud di Wingdings.

**Non** inventi eventi, non ritagli il blocco di integrità e non affermi che il PDF è una misurazione del rumore certificata.

---

## Avvertenze

1. **Non è uno strumento certificato.** I microfoni dei telefoni **non** sono fonometri di Classe 1/2. I punteggi di confidenza e qualsiasi livello correlato sono **relativi**, non calibrati, e **non devono** essere presentati come dBA/dBC assoluti a fini sanzionatori, di multe o di metrologia legale. Il report può comunque essere utile come **registro digitale autenticato di metadati acustici** quando usato con onestà.

2. **Non garantisce la completezza.** Il registro include solo ciò che i **classificatori sul dispositivo** hanno etichettato mentre il monitoraggio era attivo e Witness Ear era **attivo**. Periodi di quiete, microfono disattivato, app non in esecuzione, bassa confidenza o duplicati limitati possono lasciare lacune. L'assenza di una riga **non** è prova che un suono non sia mai avvenuto.

3. **Le etichette possono essere sbagliate.** I motori di apprendimento automatico possono classificare in modo errato. Una riga «Siren» significa la migliore ipotesi del modello in quel momento — non un veicolo di emergenza garantito. Tratti il PDF come **note di supporto**, non come verità assoluta.

4. **Non è un dispositivo di sicurezza.** Vigilant Ear / Witness Ear sono **ausili di consapevolezza e accessibilità**. Non sostituiscono il giudizio umano, gli allarmi certificati né i servizi di emergenza ufficiali.

5. **Prove e controversie.** Se condivide un PDF con un padrone di casa, una HOA o un ente, sia onesto su che cosa è: un **registro di classificazione generato dall'app**, a conservazione limitata, esportato dall'utente, con un hash di integrità sul dispositivo. Non alteri la tabella degli eventi e non inventi eventi. Non offriamo consulenza legale; le norme locali su registrazioni e prove variano — in caso di dubbio, si rivolga a un professionista qualificato.

6. **Report multi-telefono.** Le righe dei peer dipendono dalla connettività Constellation e dalle regole di condivisione (per es. sorgenti non vocali). Gli orologi e il GPS dei telefoni consumer hanno un margine di errore; la concordanza multi-telefono sulla «stessa notte» è un contesto utile, non una sincronizzazione da laboratorio.

7. **Base temporale.** Le marche temporali usano l'**orologio del dispositivo**, che l'utente può modificare. Il PDF lo segnala; nel prodotto attuale non viene verificato automaticamente rispetto all'ora di rete.

8. **La sua responsabilità nella condivisione.** Una volta inviato un report via AirDrop o e-mail, i destinatari possono conservarne copie. Esporti solo ciò che intende condividere.

---

## Note di piattaforma

- **iOS / iPadOS:** i controlli di Witness Ear si trovano in **Preferences → SOUND JOURNAL** come descritto sopra.

---

## Buono a sapersi

- Lasciare Witness Ear **disattivato** non costa nulla in termini di CPU o batteria del telefono.
- **Attivarlo** aggiunge un leggero uso di archiviazione locale e scritture occasionali di eventi per costruire il report.
- **Export** genera il PDF senza richiedere un menu utente separato.
- Per gli avvisi e la direzione di tutti i giorni, usi la mappa principale di Vigilant Ear e gli HUD; usi Witness Ear quando le serve un'**istantanea scritta portatile** degli eventi sonori dell'ultima giornata.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
