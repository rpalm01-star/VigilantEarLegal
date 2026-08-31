# Supporto di Vigilant Ear 👂🛰️

Grazie per usare **Vigilant Ear**. La nostra missione è offrire una maggiore consapevolezza situazionale attraverso il rilevamento avanzato di eventi acustici e gli avvisi di emergenza in tempo reale.

## Contattaci

Se riscontri problemi tecnici, hai domande sulla precisione degli avvisi o desideri inviarci un feedback, contattaci via e-mail all'indirizzo:

**E-mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Video

Brevi video con tutto sullo schermo — niente che serva ascoltare. Alcuni hanno anche una narrazione, ma nulla esiste solo in audio.

- **[Cambiare la lingua dei sottotitoli](https://youtu.be/bBTjlWnbFr4)** — come cambiare la lingua dell'app e attivare **Speaker Auto-Translate**, incluso il passaggio che sfugge alla maggior parte delle persone: i sottotitoli continuano ad arrivare nella vecchia lingua finché non chiudi completamente l'app e la riapri.
- **[Come appaiono gli avvisi](https://youtu.be/1NCXHqQ-BR8)** — rilevatore di fumo, bussata alla porta, pianto di un bambino, sirena, maltempo severo e una conferma di terremoto, ciascuno con la sua direzione.

Altro: **[Tutorial](https://www.youtube.com/playlist?list=PLV5sYptGyafo)** · **[Esempi](https://www.youtube.com/playlist?list=PLYc8NrtyfisY)**

## Domande Frequenti

### Come funziona Vigilant Ear in background?

Vigilant Ear ascolta quando il monitoraggio è attivo e le autorizzazioni necessarie sono state concesse. Funziona in modo efficiente in background e può inviare feedback aptici, avvisi sullo schermo, notifiche push opzionali e (quando è abbinato) indicazioni di direzione su Apple Watch quando rileva suoni importanti.

### Vigilant Ear scarica la batteria?

No. Vigilant Ear è progettato per consumare poca batteria, così puoi lasciarlo sempre attivo.

Ecco come manteniamo basso il consumo della batteria:  
- Modelli di apprendimento automatico efficienti sul dispositivo, eseguiti sul Neural Engine dove disponibile.  
- L'ascolto in background va in ibernazione quando *tutte* le categorie di avviso sono disattivate.  
- Quasi tutta l'elaborazione resta sul tuo telefono; la rete è limitata a mappe, feed meteo pubblici, identificazione musicale opzionale e acquisti.  
- Una limitazione intelligente riduce il lavoro quando l'ambiente acustico è silenzioso.  
- I calcoli pesanti vengono eseguiti fuori dal thread di visualizzazione e solo quando necessario.

### Perché l'app non rileva le sirene?

Assicurati di aver concesso l'autorizzazione del **Microfono** nelle Impostazioni di iOS. Vigilant Ear ha bisogno del microfono per elaborare le firme acustiche. Verifica che la categoria **Sirena** (o quella pertinente) sia abilitata nelle Preferenze e che le notifiche siano state consentite se ti aspetti avvisi push. I feedback aptici possono risultare più deboli se il dispositivo è in Modalità Silenziosa, a seconda delle impostazioni di sistema.

### Quanto sono precisi gli avvisi meteo?

Vigilant Ear interroga i feed governativi ufficiali CAP (Common Alerting Protocol). Gli avvisi sono precisi quanto i dati forniti dal National Weather Service e dalle altre agenzie internazionali (tra cui MeteoGate per l'Europa, la CMA cinese, la KMA coreana, l'Agenzia Meteorologica del Giappone, Environment and Climate Change Canada e l'INMET del Brasile). La simulazione della posizione, le lacune di copertura o i ritardi di rete possono occasionalmente influire sulla frequenza di aggiornamento. Le allerte europee vengono servite tramite una piccola cache che gestiamo e che aggiorna i dati ufficiali MeteoGate circa ogni 15 minuti — così le allerte restano affidabili per tutti mentre la nostra base utenti supera i limiti di richieste del feed pubblico.

### L'app funziona in background?

Sì. Vigilant Ear è progettato per monitorare gli eventi acustici critici mentre è in background, quando le autorizzazioni necessarie sono attive e almeno una categoria di avviso è abilitata.

### Cosa controllano gli interruttori degli avvisi?

Gli interruttori delle categorie di avviso nelle **Preferenze** controllano se Vigilant Ear considera quei suoni degni di avviso ai fini delle **notifiche** (e della relativa consegna) quando vengono rilevati suoni corrispondenti.

Questi interruttori riguardano principalmente la consegna in **background / tramite notifica**. **Non** disattivano la mappa e il radar sullo schermo quando l'app è aperta in primo piano.

Le categorie tipiche includono:  
- **Avvisi Sirena** — Sirene dei veicoli di emergenza (polizia, vigili del fuoco, ambulanza, ecc.)  
- **Allarmi** — Rilevatori di fumo e allarmi antincendio  
- **Bussate** — Bussate alla porta e campanelli  
- **Bambino** — Pianto di bambino (quando abilitato)  
- **Avvisi Meteo** — Allerte di maltempo severo da fonti governative ufficiali CAP  
- **Avvisi Persone** — Persone nelle vicinanze (spesso funziona meglio in ambienti più silenziosi; può restare facoltativo)

**L'autorizzazione alle notifiche** è l'interruttore generale a livello di sistema. Se neghi le notifiche nella schermata di verifica iniziale (o in seguito nelle Impostazioni di iOS), non riceverai avvisi push anche se le singole categorie sono attive. Gli avvisi sullo schermo mentre l'app è aperta possono comunque apparire.

### Cosa è gratuito e cosa è Power Pack+?

Il nucleo di sicurezza è **gratuito, per sempre**:

- Avvisi sonori locali (sirene, allarmi, bussate/campanelli, bambino, persona nelle vicinanze) con consegna sullo schermo e notifiche push opzionali  
- Sottotitoli in tempo reale della **Modalità parlante** (sul dispositivo; direzionali dove l'hardware lo consente)  
- Feed di maltempo severo per la tua regione — **NWS** per gli Stati Uniti, **MeteoGate** per l'Europa, **CMA** per la Cina, **KMA** per la Corea, **JMA** per il Giappone, **ECCC** per il Canada e **INMET** per il Brasile  
- Avvisi di prova del **Parco giochi delle funzionalità** (con filigrana, così non sembrano mai un'emergenza reale)  
- Indicazioni di direzione dell'app complementare per **Apple Watch** e **Live Activity** (Schermata di blocco / Dynamic Island / Smart Stack del Watch), dove disponibili  

**Power Pack+** è uno sblocco una tantum (**non un abbonamento**) con una **prova gratuita di 90 giorni**. Aggiunge:

- **Speaker Auto-Translate** — traduzione sul dispositivo del parlato circostante nella tua lingua  
- **Constellation** — ascolto condiviso tra più iPhone tramite Ultra-Wideband  
- **Music ID** — riconoscimento dei brani con ShazamKit  

Tutto ciò che riguarda il riconoscimento continua a essere eseguito sul tuo dispositivo; Power Pack+ cambia soltanto quali funzioni sono sbloccate, mai dove viene inviato l'audio grezzo per l'analisi.

### Come gestisco Shazam e la traduzione?

Si trovano sotto **Power Pack+** nell'app (scintille del ventaglio delle azioni / menu):

- **Shazam (Music ID)** — identificazione della musica ambientale sul radar spaziale (Power Pack+)  
- **Speaker Auto-Translate** — traduce i sottotitoli in tempo reale nella tua lingua (Power Pack+)  

I feed di maltempo severo sono **gratuiti** e si gestiscono dalle preferenze meteo / avvisi — non sono un componente aggiuntivo di Power Pack+.

### Come disattivo il microfono quando l'app non è in primo piano?

L'app smette di usare il microfono per il monitoraggio in background quando *tutti* gli interruttori delle categorie di avviso sono disattivati nelle Preferenze. Non ascolta né invia notifiche sonore in background quando tutte le categorie sono disabilitate. Quando almeno un avviso è abilitato, il microfono può essere usato per la raccolta dei suoni in background.

Puoi anche revocare completamente l'accesso al Microfono nelle Impostazioni di iOS (questo interrompe tutte le funzioni acustiche, incluso l'ascolto in primo piano).

### Perché l'app non rileva in modo affidabile *tutti* i suoni?

I suoni acuti come gli allarmi e le sirene dei camion dei pompieri sono relativamente facili da rilevare per il motore ML del suono. I suoni a banda larga (come i motori delle auto o gli pneumatici) sono più difficili; facciamo un lavoro adeguato ma imperfetto, dati i limiti hardware del telefono. Gli algoritmi di Differenza dei Tempi di Arrivo (TDOA) hanno una precisione limitata, vista la breve distanza tra i microfoni. La direzione richiede un iPhone con microfono stereo; gli iPad sono orientati ai sottotitoli, senza rilevamento completo della direzione.

### Come funzionano il Parco giochi delle funzionalità e gli avvisi di prova?

Apri il **Parco giochi delle funzionalità** (bacchetta) per provare i suoni di esercitazione Casa e Strada e altre anteprime. Gli eventi di prova sono chiaramente contrassegnati come **PREVIEW**, così non fingono mai di essere una vera emergenza. Chiudendo il Parco giochi delle funzionalità lo stato di prova viene eliminato (inclusa la posizione GPS fittizia temporanea usata in alcune demo).

### Perché un sottotitolo è cambiato subito dopo essere apparso?

È l'app che si ricontrolla da sola. Subito dopo la finalizzazione di una frase, Vigilant Ear rilegge gli ultimi secondi di audio con il contesto completo e — entro circa due secondi — può recuperare una parola persa o correggerne una fraintesa. Dopo, il testo non cambia mai più. Tutto avviene sul suo dispositivo, come sempre.

---

*Vigilant Ear è uno strumento di accessibilità costruito con cura. Ti preghiamo di usarlo in modo responsabile.* 

Fatto con ❤️ per la comunità sorda e con ipoacusia e per la ricerca acustica.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Tutti i diritti riservati.<br />
  In attesa di brevetto
</p>
