# Informativa sulla Privacy di Vigilant Ear 👂🛰️

**Data di entrata in vigore:** 28 agosto 2026

## Introduzione

Vigilant Ear ("noi", "ci" o "nostro") si impegna a proteggere la sua privacy. La presente Informativa sulla Privacy spiega quali informazioni l'applicazione elabora, cosa rimane sul suo dispositivo e quando dati limitati possono essere inviati tramite Internet per fornire funzioni specifiche.

## La Privacy in Sintesi

- **Il rilevamento acustico principale viene eseguito sul suo dispositivo.** La classificazione dei suoni, il tracciamento direzionale, i sottotitoli in tempo reale e la logica degli avvisi sono progettati per funzionare localmente utilizzando il microfono e i sensori del suo telefono.
- **Non vendiamo i suoi dati** e non utilizziamo SDK pubblicitari o di analisi comportamentale.
- **Non memorizziamo né carichiamo registrazioni audio.** L'audio del microfono viene elaborato in tempo reale per il rilevamento e (quando la funzione è abilitata) per i sottotitoli; non viene mai salvato come file sonoro né inviato per analisi nel cloud. Fino a circa venti secondi di suono vengono trattenuti brevemente nella memoria di lavoro del telefono mentre vengono trascritti — quel breve buffer è ciò che consente ai sottotitoli di cogliere le prime parole di chi parla invece di perderle — e non tocca mai l'archiviazione, non viene mai trasmesso da nessuna parte e scompare nel momento in cui l'applicazione si chiude. La funzione Rewind ripropone soltanto il **testo** dei sottotitoli recenti; nessun suono viene conservato per la riproduzione.
- **Alcune funzioni utilizzano Internet** — mappe, feed di condizioni meteorologiche estreme, identificazione musicale opzionale, dati stradali, acquisti sull'app store, traffico opzionale della mesh multi-telefono tra i *suoi* dispositivi, il caricamento delle pagine legali nell'applicazione e (solo se lei sceglie di partecipare) i rapporti del Research Array (rete di ricerca). Queste funzioni sono descritte di seguito.
- **Lei mantiene il controllo.** Può disabilitare l'identificazione musicale Shazam, disattivare le categorie di avvisi, lasciare Constellation disattivato, lasciare il **Research Array** disattivato (lo è per impostazione predefinita), revocare le autorizzazioni nelle impostazioni di sistema o interrompere l'ascolto in background in qualsiasi momento.

## Informazioni Elaborate sul Suo Dispositivo

Con la sua autorizzazione, Vigilant Ear accede a quanto segue **localmente**:

- **Audio del microfono** — Utilizzato in tempo reale per rilevare i suoni ambientali (sirene, veicoli, campanelli, pianto di neonato, persone nelle vicinanze, ecc.), stimare la direzione e (quando la Modalità parlante è attiva) produrre sottotitoli in tempo reale e la traduzione opzionale sul dispositivo.
- **Riconoscimento vocale (sul dispositivo)** — Quando i sottotitoli sono abilitati, i framework vocali del suo dispositivo trascrivono in testo il parlato circostante sul telefono. Il testo dei sottotitoli viene mostrato in tempo reale e non viene archiviato da Vigilant Ear come cronologia permanente delle trascrizioni; i log di debug non includono il contenuto dei sottotitoli.
- **Posizione** — Utilizzata per collocare sulla mappa i suoni rilevati e le aree di allerta meteorologica e per migliorare la guida direzionale.
- **Orientamento e movimento del dispositivo** — Utilizzati per migliorare la precisione del rilevamento della direzione.
- **Fotocamera (opzionale)** — Utilizzata solo se apre la vista AR della fotocamera "vedere il suono", affinché i marcatori possano essere fissati nell'anteprima in tempo reale della fotocamera. I fotogrammi della fotocamera sono utilizzati per la visualizzazione sul dispositivo; non vengono caricati da Vigilant Ear per il riconoscimento dei suoni.
- **Apple Watch (opzionale)** — Quando è disponibile un'app companion per Watch, le etichette degli avvisi e le indicazioni di direzione possono essere inoltrate al Watch abbinato, così da poter dare un'occhiata al polso.
- **Diario dei suoni Witness Ear (opzionale, disattivato per impostazione predefinita)** — Quando attiva Witness Ear, l'applicazione conserva un registro continuo, **sul dispositivo e di 24 ore**, delle classificazioni sonore (ora, etichetta, confidenza, livello di picco, direzione quando misurata e la posizione del telefono in quel momento; oltre alle voci condivise dai suoi telefoni Constellation collegati). Il diario è memorizzato esclusivamente nella sandbox privata dell'applicazione su questo telefono e non viene mai caricato da Vigilant Ear. Lascia il telefono soltanto all'interno di un rapporto PDF che **lei** sceglie di esportare e condividere. Le voci più vecchie di 24 ore vengono eliminate automaticamente; disattivare Witness Ear mette in pausa la registrazione (le voci conservate continuano a scadere) e il comando cestino nell'applicazione elimina immediatamente il registro. Consulti la guida di Witness Ear per i dettagli.

Questa elaborazione sul dispositivo è il cuore dell'applicazione. Le applicazioni concorrenti spesso trasmettono l'audio al cloud per analizzarlo e monetizzarlo. Vigilant Ear è costruito diversamente: la sua pipeline di consapevolezza acustica è progettata per funzionare sul telefono stesso.

## Rete e Servizi di Terze Parti

Quando utilizza determinate funzioni — o quando l'applicazione ne ha bisogno per funzionare — **dati limitati possono lasciare il suo dispositivo** ed essere gestiti da servizi di terze parti secondo le loro rispettive informative sulla privacy:

*   **Visualizzazione della mappa**
    *   *Cosa viene inviato:* Richieste di tessere della mappa; la sua area di visualizzazione della mappa e la sua posizione approssimativa nella misura necessaria a renderizzare la mappa
    *   *Fornitore:* Apple Maps / MapKit
*   **Avvisi di maltempo (tramite il nostro servizio)**
    *   *Perché esiste:* Gli avvisi ufficiali provengono dalle agenzie meteorologiche nazionali di tutto il mondo. Prima ogni telefono contattava direttamente quelle agenzie — ciascuna poteva quindi vedere l'indirizzo di rete del tuo dispositivo e con quanta frequenza controllavi — e i feed pubblici condivisi con limiti di richieste hanno iniziato a perdere avvisi con la crescita degli utenti. Ora il nostro server recupera i dati ufficiali una sola volta, per tutti, e li conserva per circa **15 minuti**. Gli stessi avvisi ufficiali, in modo più affidabile — e **il tuo telefono non contatta mai i server di un governo straniero.** Solo a partire dalla versione 1.1.0.
    *   *Cosa viene inviato:* Una richiesta al nostro servizio contiene solo il codice di Paese/regione, la lingua dell'app e, al massimo, una cella di posizione che il tuo telefono arrotonda a circa **50 km (0,5°)** prima dell'invio, usata solo per limitare la risposta agli avvisi vicini. La verifica esatta «sono dentro quest'area di allerta?» avviene **sul tuo telefono** e non ne esce mai. Non viene allegato alcun nome, account o identificativo del dispositivo. Come per ogni servizio HTTPS esistono log di hosting standard e di breve durata necessari a farlo funzionare; non sono una funzione di tracciamento e non li vendiamo.
    *   *Fornitore:* Dati ufficiali del National Weather Service statunitense (NWS), MeteoAlarm / MeteoGate (Europa), China Meteorological Administration (CMA), Korea Meteorological Administration (KMA), Japan Meteorological Agency (JMA), Environment and Climate Change Canada (ECCC), INMET del Brasile e Bureau of Meteorology australiano (BoM) — consegnati al tuo telefono tramite infrastruttura che gestiamo.
*   **Allerte sismiche**
    *   *Cosa viene inviato:* Richieste a un unico feed pubblico mondiale di sintesi dei terremoti — la richiesta non contiene alcuna informazione di posizione o regione; la posizione del suo dispositivo viene utilizzata solo sul dispositivo per determinare se un terremoto segnalato è vicino a lei
    *   *Fornitore:* Feed pubblico dei terremoti dello U.S. Geological Survey (USGS)
*   **Identificazione musicale (opzionale, Power Pack+)**
    *   *Cosa viene inviato:* Brevi impronte audio — mai audio grezzo — quando viene rilevata musica e Shazam è abilitato (può essere disattivato nelle impostazioni)
    *   *Fornitore:* Apple Shazam / ShazamKit
*   **Contesto stradale**
    *   *Cosa viene inviato:* Interrogazioni anonime all'API Overpass basate sul settore della mappa intorno alla sua posizione
    *   *Fornitore:* Contributori di OpenStreetMap tramite l'API Overpass
*   **Acquisti e diritti d'uso**
    *   *Cosa viene inviato:* Token di acquisto e stato dei diritti / della prova per lo sblocco una tantum opzionale Power Pack+ (non un abbonamento)
    *   *Fornitore:* Apple App Store
*   **Mesh Constellation (opzionale, Power Pack+)**
    *   *Cosa viene inviato:* Quando abilita Constellation multi-telefono, i dispositivi partecipanti si scambiano i metadati acustici necessari per un quadro condiviso — per esempio la posa relativa / la telemetria Ultra-Wideband dove disponibile, le direzioni, le etichette dei suoni e il testo effimero dei sottotitoli. Il traffico è peer-to-peer **solo tra i telefoni che eseguono Vigilant Ear e che lei collega per Constellation**. I telefoni senza l'applicazione non possono unirsi a quella mesh né ricevere quei metadati. Wingdings non gestisce un relay mesh nel cloud per questa pipeline audio.
    *   *Fornitore:* Framework Apple (per es. Network / Nearby Interaction) tra i suoi dispositivi con Vigilant Ear
*   **Documenti legali nell'applicazione**
    *   *Cosa viene inviato:* Richieste web standard quando apre nell'applicazione le pagine Informativa sulla Privacy, Termini, Supporto o le pagine README del prodotto
    *   *Fornitore:* GitHub (hosting dei documenti)
*   **Mappa in tempo reale del Research Array (sola visualizzazione)**
    *   *Cosa viene inviato:* Richieste web standard quando tocca **Map** (Mappa) per aprire nel suo browser la dashboard pubblica della rete — come quando visita un qualsiasi sito web. La visualizzazione non invia nulla del suo diario né dei suoi rilevamenti.
    *   *Fornitore:* Servizio di ricerca Wingdings (hosting dell'applicazione web)
*   **Research Array (opzionale — disattivato per impostazione predefinita)**
    *   *Cosa viene inviato:* Solo se attiva la funzione: piccoli rapporti di rilevamento composti esclusivamente da metadati quando viene registrato un evento idoneo (ora, posizione approssimativa, caratteristiche di base del segnale, versione dell'applicazione). Veda **Research Array** più avanti.
    *   *Fornitore:* Infrastruttura gestita da noi (fornitori di hosting dell'applicazione e del database, come i nostri host web e Postgres). I dettagli e i limiti sono nella sezione Research Array.

Scegliamo questi servizi per offrire le funzionalità di mappa, meteo, etichette musicali, acquisti, multi-dispositivo e (quando lei sceglie di partecipare) della rete di ricerca (Research Array). **Wingdings non riceve da questi fornitori l'audio del suo microfono, la cronologia continua della sua posizione né le sue informazioni di contatto.**

## Cosa Raccoglie Wingdings

### Nessuna Telemetria o Diagnostica Remota

Vigilant Ear è progettato affinché le funzioni principali di ascolto e sottotitolazione vengano eseguite sul suo dispositivo. **Non** raccogliamo analisi remote degli arresti anomali, telemetria pubblicitaria né SDK di analisi dell'uso generale.

Log di debug **locali** opzionali possono essere scritti sul dispositivo per la risoluzione dei problemi; l'applicazione non li carica come una pipeline di telemetria e il testo dei sottotitoli non è incluso nel contenuto di debug esportato.

**Eccezione — Research Array e la cache meteo europea:** se sceglie di partecipare a Research Array (veda più avanti), Wingdings può ricevere i rapporti limitati sugli eventi che lei sceglie di contribuire. Separatamente, quando le allerte meteo europee sono attive, il telefono le legge dalla cache meteo che gestiamo (descritta sopra); quelle richieste contengono una cella di posizione approssimativa di ~50 km e nessun identificatore personale o del dispositivo. Nessuno dei due percorsi è analisi pubblicitaria — entrambi esistono per far funzionare una funzione specifica, non per costruire un suo profilo.

## Research Array (opzionale, disattivato per impostazione predefinita)

Vigilant Ear può, in via opzionale, contribuire rapporti di rilevamento composti **esclusivamente da metadati** a una rete di ricerca che aiuta a costruire un quadro condiviso dei terremoti e di altri eventi a bassa frequenza / legati agli infrasuoni. **Questa funzione è disattivata per impostazione predefinita e funziona soltanto se lei la attiva** — dove l'interruttore **Research Array** appare nelle preferenze dell'applicazione (o l'etichetta equivalente nella sua lingua), può attivarlo o disattivarlo in qualsiasi momento. Consultare la pagina pubblica **Map** (Mappa) della rete è cosa distinta dal contribuire e non condivide nulla del suo registro.

Quando è attiva — e soltanto quando il suo dispositivo registra un evento **idoneo** (per esempio un candidato infrasonoro non locale o legato ad attività sismica sufficientemente forte, oppure determinati segnali di audit legati ai terremoti dove quel percorso è abilitato) — l'applicazione può inviare un piccolo rapporto contenente:

- l'ora dell'evento (secondo l'orologio del dispositivo in un dominio temporale globale)
- una posizione approssimativa, arrotondata a circa **1 chilometro** (non il suo indirizzo esatto né una traccia continua)
- le caratteristiche di base dell'evento, come il canale del sensore, se il percorso è aereo o terrestre, la frequenza di picco ove applicabile e una misura di intensità adimensionale (per esempio STA/LTA)
- il tipo di rapporto (per esempio inizio di infrasuono, candidato sismico o audit di conferma di terremoto)
- la versione dell'applicazione

**Cosa non viene mai inviato per il Research Array:** audio, forme d'onda, registrazioni, trascrizioni, sottotitoli, contatti, identificatori che l'applicazione inventi per etichettare *lei* come persona o installazione, la sua posizione GPS precisa (oltre l'arrotondamento grossolano di cui sopra), né alcuna registrazione continua dei suoi spostamenti. L'audio non lascia mai il suo dispositivo, né per questo né per alcun altro scopo.

### Dove vanno i rapporti

I rapporti vengono inviati esclusivamente tramite un **canale cifrato (HTTPS)** a un servizio di ricerca Wingdings gestito da noi (hosting dell'applicazione e database). L'applicazione non allega **alcun ID di ricerca per utente o per dispositivo** né **alcun identificatore dell'Account Apple** nel payload. Può essere utilizzato un segreto applicativo condiviso affinché solo la nostra applicazione possa scrivere sul servizio; quel segreto **non** è un identificatore personale. Possono esistere log standard di hosting e sicurezza (per esempio metadati di rete di breve durata utilizzati per gestire il servizio), come per qualsiasi servizio HTTPS; non sono una funzione del prodotto destinata a tracciarla, e non li vendiamo.

Disattivare il **Research Array** interrompe immediatamente **tutti i rapporti futuri**. **Non** elimina i rapporti già inviati. Poiché i rapporti non recano **alcun identificatore per utente o per dispositivo**, non possiamo cercare né cancellare a posteriori "tutto ciò che lei ha contribuito" — non abbiamo alcun modo affidabile di sapere quali rapporti passati provenissero da lei. Ciò è intenzionale: impedisce che il flusso di ricerca diventi una cronologia personale sotto il nostro controllo.

## Cosa Non Facciamo

Noi **non**:

- Vendiamo né cediamo in locazione le sue informazioni personali
- Memorizziamo registrazioni audio ambientali sui nostri server
- Gestiamo reti pubblicitarie, tracker tra applicazioni o SDK di profilazione comportamentale
- Carichiamo la sua traccia di posizione continua verso Wingdings
- Carichiamo audio grezzo del microfono per il riconoscimento vocale o dei suoni nel cloud
- Richiediamo il Research Array per le funzioni principali dell'applicazione — è opzionale e disattivato per impostazione predefinita

## Le Sue Scelte e i Suoi Controlli

Lei può:

- **Revocare le autorizzazioni** (microfono, posizione, fotocamera, notifiche, riconoscimento vocale) nelle Impostazioni di iOS
- **Disabilitare l'identificazione musicale Shazam** in Power Pack+ / preferenze
- **Disattivare singole categorie di avvisi** (sirene, meteo, campanelli, neonato, ecc.)
- **Interrompere l'ascolto in background** quando tutte le categorie di avvisi sono disattivate
- **Lasciare Constellation disattivato** affinché nessun metadato della mesh venga condiviso con altri telefoni che eseguono Vigilant Ear. I telefoni senza l'applicazione non possono condividere quei metadati.
- **Lasciare il Research Array disattivato** (impostazione predefinita), oppure disattivarlo in qualsiasi momento nelle Impostazioni per smettere di contribuire rapporti
- **Utilizzare il Parco giochi delle funzionalità** per visualizzare in anteprima gli avvisi e le funzioni localmente con una chiara filigrana PREVIEW, senza far intendere una vera emergenza

## Linee Guida della Piattaforma

Vigilant Ear rispetta i requisiti di privacy dell'Apple App Store e le linee guida di Apple per le applicazioni destinate alle persone con esigenze di accessibilità. Aggiorniamo questa informativa quando cambiano le nostre pratiche o i nostri obblighi verso la piattaforma.

## Modifiche alla Presente Informativa

Potremmo aggiornare la presente Informativa sulla Privacy di tanto in tanto. Le modifiche sostanziali saranno riflesse aggiornando la **Data di entrata in vigore** in cima a questa pagina.

## Contatti

Se ha domande sulla presente Informativa sulla Privacy, ci contatti a:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear è costruito con amore e rispetto per la comunità Sorda, con problemi di udito e CODA. La sua fiducia è importante per noi.

*Vigilant Ear è uno strumento di accessibilità costruito con cura. La preghiamo di usarlo in modo responsabile.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Tutti i diritti riservati.<br />
  Brevetto in attesa di concessione
</p>
