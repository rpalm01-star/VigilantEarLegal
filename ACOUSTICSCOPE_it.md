# Acoustic Scope — La vista professionale di analisi del suono

L'**Acoustic Scope** trasforma Vigilant Ear in uno strumento tascabile di analisi del suono: una vista dal vivo di tutto ciò che il microfono sente, in sei modi diversi. Usalo per *vedere* la forma di un suono, misurarne l'altezza e il livello, congelare e riascoltare l'ultimo mezzo minuto, e catturare clip per addestrare il tuo pacchetto di suoni personalizzato.

Aprilo dal **ventaglio delle azioni** (il raggio rotante sulla barra superiore): tocca il raggio, poi l'**equalizzatore** (le barre animate verdi e ciano). L'Acoustic Scope è **gratuito per tutti**: le viste dal vivo qui sotto non richiedono alcun acquisto. Solo gli strumenti di cattura **Train** (più avanti), che registrano clip per i tuoi pacchetti di suoni personalizzati, fanno parte di Power Pack+.

---

## L'intestazione

- **Riquadro dB** — il livello a banda larga dal vivo. I quadrati **A / C / Z** scelgono la ponderazione in frequenza (A ≈ quanto forte suona a un orecchio umano; C conserva più bassi; Z è piatta/non ponderata). La ponderazione guida anche la vista a ⅓ d'ottava.
- **root** (solo nella vista Croma) — la classe di altezza musicale più forte nella stanza, aggiornata dal vivo.
- **✕** chiude lo scope. Rilevamento e avvisi continuano a funzionare per tutto il tempo in cui lo scope è aperto: è una finestra, non una modalità.

## Le sei viste

Cambia con la barra in basso.

| Vista | Cosa mostra |
|---|---|
| **Spettro** | Livello per frequenza, adesso: una curva dal vivo con una linea bianca di tenuta di picco. |
| **Spettrogramma** | Frequenza nel **tempo**: scorrono gli ultimi ~24 secondi, colore = livello. La maggior parte dei suoni ha qui una forma visiva riconoscibile. |
| **RTA a ⅓ d'ottava** | Le 28 bande ISO standard, come un analizzatore in tempo reale hardware. I trattini arancioni sono la tenuta di picco. |
| **Croma** | Le 12 classi di altezza musicale: quali note sono presenti, con la più forte evidenziata. |
| **Parziali** | I toni prominenti seguiti nel tempo come linee colorate, ciascuna etichettata con la sua nota musicale. I nomi delle note e la serie armonica hanno colonne proprie, e i suoni più acuti, come quelli dei rilevatori di fumo, sono etichettati con la loro altezza reale. Imposta una **nota di riferimento** e compare come una linea da seguire per cantare o accordare. Ottimo per fischi, sirene, canto degli uccelli e ronzii di macchinari. |
| **Visualizzatore** | La musica della stanza come uno spettacolo di luci dal vivo: i battiti fanno detonare anelli, i bassi gonfiano la scena, gli acuti piovono scintille. Ha una sua sezione completa più avanti. |

Le **bandierine** arancioni sullo Spettrogramma segnano i momenti in cui il classificatore di suoni è scattato, con la sua etichetta e la sua confidenza: così vedi esattamente a quale forma ha reagito il modello.

## Leggere e misurare

- **Cursore a sinistra** — scala di visualizzazione. Abbassa una vista satura o alza una silenziosa (solo visualizzazione; non influisce mai sul rilevamento).
- **Tocca** lo Spettrogramma — una lettura a mirino: frequenza, livello e quanto tempo fa.
- **Trascina** un riquadro — statistiche di quell'area: intervallo di frequenza, durata, picco, centroide, energia, fattore di cresta.
- **Pizzica** — ingrandisci l'asse delle frequenze. Il pulsante ⤢ reimposta.
- **ⓘ** — il pannello di telemetria (dettagli FFT, frequenza dominante, centroide spettrale) più un regolatore di **calibrazione** che sposta tutte le letture di livello se le hai confrontate con un misuratore di riferimento.

## Congelare e rivedere

Il pulsante **pausa** congela l'immagine (microfono e avvisi continuano a funzionare). Da congelato compare una barra di trasporto:

- **▶** riproduce visivamente il buffer; il pulsante della velocità alterna 1× / 2× / 0,5×.
- **🔍− / 🔍+** ingrandiscono la finestra temporale; la **minimappa** a destra mostra l'intero buffer: trascinala per scorrere.
- Spettrogramma e Parziali condividono lo stesso orologio, così puoi passare dall'uno all'altro esattamente sullo stesso istante congelato.

## Catturare suoni per un pacchetto personalizzato

È il superpotere dello scope: prendere esempi reali di un suono *nel momento in cui lo senti*, direttamente dalla vista dal vivo.

1. Tocca il pulsante magenta **Train** (quadrato tratteggiato). La vista si congela e compare una **banda** magenta.
2. Trascina i bordi della banda attorno a un esempio pulito del tuo suono: l'etichetta mostra la durata selezionata. Un paio di secondi attorno al suono è l'ideale.
3. Tocca **Salva** (il pulsante con la freccia nel vassoio). L'audio sotto la banda viene scritto in una clip e compare un riquadro numerato. La banda resta armata: scorri fino all'esempio successivo e salva di nuovo (fino a 6 per sessione). Tocca due volte un riquadro numerato per eliminare quella clip.
4. Tocca il **martello** per aprire il pannello **Build**:
   - **Nome del modello** — il pacchetto (ad esempio *Gufi del giardino*).
   - **Nome del suono** — ciò che gli utenti vedono sulla mappa.
   - **Etichetta di classe** — l'etichetta esatta che il modello addestrato emetterà (derivata automaticamente; minuscole e trattini bassi).
   - **Quando rilevato** — *solo mappa* (un punto, identificazione) o *in movimento* (seguito come un veicolo). I suoni personalizzati identificano; non generano avvisi di emergenza: di quello si occupa sempre il rilevamento di sicurezza integrato.
   - Icona, colore, soglia di confidenza e portata massima: la scheda di anteprima dal vivo mostra esattamente come apparirà un rilevamento.
5. Tocca **Build & Export**. Ottieni uno zip con le tue clip (già nella struttura di cartelle di Create ML) più i file del pacchetto, pronti da inviare a un Mac.
6. Sul Mac, addestra un **Sound Classifier** in Create ML partendo dalla cartella `clips/`, metti il `model.mlpackage` esportato nella cartella del pacchetto, ricomprimi e importalo sul telefono in **Sorgenti di avviso → Pacchetti di suoni personalizzati**.

La parte di addestramento e importazione — inclusa la **classe Background obbligatoria** e il controllo che evita i falsi allarmi — è spiegata passo passo nella **[guida ai Pacchetti di Suoni Personalizzati](https://vigilantear.com/it/byom/)**.

## La scheda Visualizzatore — la musica come luce

La scheda **Visualizzatore** trasforma la musica della stanza in uno spettacolo di luci che uno
spettatore Sordo, ipoudente o CODA può *sentire con gli occhi*. Nulla al suo interno è decorazione:
ogni elemento è guidato da una caratteristica acustica reale, dal vivo, dai microfoni:

- **Ogni battito fa detonare un anello** — un rilevatore di attacco innesca esplosioni di anelli e
  un lampo dello schermo esattamente quando una persona udente sentirebbe la cassa.
- **I bassi respirano** — l'anello di ancoraggio al centro e gli anelli testurizzati alla deriva si
  gonfiano con l'energia delle basse frequenze.
- **Gli acuti piovono scintille** — piatti e charleston cadono come gocce luminose.
- **Il titolo del brano cavalca un globo** — una volta riconosciuto il brano, il suo titolo avvolge
  l'equatore di un globo invisibile che attraversa la scena, e l'artista occupa l'angolo in alto a destra.

Imposta il tuo **nome DJ** (e il suo colore) in **Preferenze → Acoustic Visualizer**: occupa
l'angolo in alto a sinistra, nello stile dell'etichetta dell'artista.

**Mandalo su un televisore:** tocca il **pulsante tv** nell'intestazione dello scope, collega un
cavo USB-C–HDMI o la Duplicazione schermo AirPlay e premi **Mirror** — lo schermo grande mostra solo
la grafica, mentre questo telefono resta i comandi e il microfono. Cambia scheda dello scope sul
telefono e il televisore segue: lo stesso Mirror mette quindi lo Spettrogramma o il Visualizzatore sulla parete.

## Buono a sapersi

- Lo scope non costa nulla quando è chiuso: l'analisi aggiuntiva gira solo mentre è sullo schermo.
- Anche lasciarlo aperto costa poco: lo Spettrogramma non costa quasi nulla, quindi non scalderà il telefono per quanto a lungo tu lo guardi, e Spettrogramma e Parziali si ridisegnano a un ritmo regolare e leggibile senza perdere nulla di ciò che sentono.
- I valori assoluti in dB non sono calibrati per impostazione predefinita; sono coerenti e confrontabili, e il regolatore di calibrazione in ⓘ permette di allinearli a un misuratore di riferimento.
- Lo scope legge il canale del microfono principale. Rilevamento, individuazione della direzione e avvisi non sono influenzati da nulla di ciò che fai qui.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
