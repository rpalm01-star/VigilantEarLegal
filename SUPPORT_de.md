# Vigilant Ear Support 👂🛰️

Vielen Dank, dass Sie **Vigilant Ear** verwenden. Unsere Mission ist es, durch fortschrittliche akustische Ereigniserkennung und Echtzeit-Notfallwarnungen ein verbessertes Situationsbewusstsein zu bieten.

## Kontaktiere uns

Wenn Sie technische Probleme haben, Fragen zur Genauigkeit von Warnungen haben oder Feedback geben möchten, erreichen Sie uns per E-Mail unter:

**E-Mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Videos

Kurze Videos mit allem auf dem Bildschirm — nichts, was Sie hören müssen. Einige haben zusätzlich eine Erzählung, aber nichts ist nur als Ton verfügbar.

- **[Untertitel-Sprache ändern](https://youtu.be/bBTjlWnbFr4)** — die App-Sprache umstellen und **Speaker Auto-Translate** einschalten, inklusive des Schritts, den die meisten übersehen: Untertitel kommen so lange in der alten Sprache an, bis Sie die App vollständig schließen und neu öffnen.
- **[So sehen die Warnungen aus](https://youtu.be/1NCXHqQ-BR8)** — Rauchmelder, Klopfen an der Tür, Babyweinen, Sirene, Unwetter und eine Erdbeben-Bestätigung, jeweils mit Richtung.

Mehr: **[Tutorials](https://www.youtube.com/playlist?list=PLV5sYptGyafo)** · **[Beispiele](https://www.youtube.com/playlist?list=PLYc8NrtyfisY)**

## Häufig gestellte Fragen

### Wie funktioniert Vigilant Ear im Hintergrund?

Vigilant Ear hört zu, wenn die Überwachung eingeschaltet ist und die erforderlichen Berechtigungen erteilt wurden. Es läuft effizient im Hintergrund und kann Haptik, Bildschirmwarnungen, optionale Push-Benachrichtigungen und (wenn gekoppelt) Richtungshinweise der Apple Watch senden, wenn es wichtige Geräusche erkennt.

### Entlädt Vigilant Ear meine Batterie?

Nein. Vigilant Ear ist so konstruiert, dass es wenig Batterie verbraucht, sodass Sie es eingeschaltet lassen können.

So halten wir den Batterieverbrauch niedrig:  
- Effiziente On-Device Machine-Learning-Modelle, die (sofern verfügbar) auf der Neural Engine laufen.  
- Das Zuhören im Hintergrund geht in den Ruhezustand über, wenn *alle* Warnkategorien ausgeschaltet sind.  
- Fast die gesamte Verarbeitung bleibt auf Ihrem Telefon; das Netzwerk ist auf Karten, öffentliche Wetter-Feeds, optionale Musik-ID und Käufe beschränkt.  
- Intelligente Drosselung reduziert die Arbeit, wenn die akustische Szene ruhig ist.  
- Schwere Mathematik läuft außerhalb des Anzeige-Threads und nur, wenn sie benötigt wird.

### Warum erkennt die App keine Sirenen?

Stellen Sie sicher, dass Sie in den iOS-Einstellungen die Berechtigung **Mikrofon** erteilt haben. Vigilant Ear benötigt das Mikrofon, um akustische Signaturen zu verarbeiten. Vergewissern Sie sich, dass **Sirene** (oder die entsprechende Kategorie) in den Einstellungen aktiviert ist und dass Benachrichtigungen zugelassen wurden, wenn Sie Push-Warnungen erwarten. Haptik kann leiser sein, wenn sich das Gerät je nach Systemeinstellungen im Stumm-Modus befindet.

### Wie genau sind die Wetterwarnungen?

Vigilant Ear fragt offizielle staatliche CAP-Feeds (Common Alerting Protocol) ab. Warnungen sind so genau wie die vom National Weather Service und anderen internationalen Agenturen (einschließlich MeteoGate Europa, CMA China, KMA Korea, der japanischen Wetterbehörde JMA, Environment and Climate Change Canada und dem brasilianischen INMET) bereitgestellten Daten. Standortsimulation, Abdeckungslücken oder Netzwerkverzögerungen können gelegentlich die Aktualisierungshäufigkeit beeinträchtigen. Europäische Warnungen werden über einen kleinen, von uns betriebenen Cache ausgeliefert, der die offiziellen MeteoGate-Daten etwa alle 15 Minuten auffrischt — so bleiben Warnungen für alle zuverlässig, während unsere Nutzerbasis über die Anfragelimits des öffentlichen Feeds hinauswächst.

### Funktioniert die App im Hintergrund?

Ja. Vigilant Ear ist so konzipiert, dass es im Hintergrund auf kritische akustische Ereignisse überwacht, wenn die erforderlichen Berechtigungen aktiviert sind und mindestens eine Warnkategorie eingeschaltet ist.

### Was steuern die Warnungsschalter?

Die Warnungskategorie-Schalter unter **Einstellungen** steuern, ob Vigilant Ear diese Geräusche bei Erkennung übereinstimmender Geräusche als warnungswürdig für **Benachrichtigungen** (und damit verbundene Zustellung) behandelt.

Diese Schalter wirken sich hauptsächlich auf die Zustellung im **Hintergrund / bei Benachrichtigungen** aus. Sie schalten die Warnungen auf dem Bildschirm von Karte und Radar **nicht** aus, wenn die App im Vordergrund geöffnet ist.

Typische Kategorien sind:  
- **Sirenenwarnungen** — Sirenen von Einsatzfahrzeugen (Polizei, Feuerwehr, Krankenwagen usw.)  
- **Alarme** — Rauchmelder und Feueralarme  
- **Klopfen** — Anklopfen an Türen und Türklingeln  
- **Baby** — Babygeschrei (wenn aktiviert)  
- **Wetterwarnungen** — Unwetterwarnungen aus offiziellen staatlichen CAP-Quellen  
- **Personenwarnungen** — Personen in der Nähe (oft am besten in ruhigeren Umgebungen; kann Opt-in bleiben)

Die **Benachrichtigungsberechtigung** ist der Master-Schalter auf Systemebene. Wenn Sie Benachrichtigungen auf dem Startüberprüfungsbildschirm (oder später in den iOS-Einstellungen) verweigern, erhalten Sie keine Push-Warnungen, selbst wenn einzelne Kategorien eingeschaltet sind. Bildschirmwarnungen können weiterhin angezeigt werden, während die App geöffnet ist.

### Was ist kostenlos und was ist Power Pack+?

Der Sicherheitskern ist **kostenlos, für immer**:

- Lokale Geräuschwarnungen (Sirenen, Alarme, Klopfen/Türklingeln, Baby, Person in der Nähe) mit Bildschirm- und optionaler Push-Zustellung  
- Live-Untertitel im **Sprechermodus** (auf dem Gerät; richtungsbezogen, wo die Hardware dies zulässt)  
- Unwetter-Feeds für Ihre Region — **NWS** in den USA, **MeteoGate** in Europa, **CMA** in China, **KMA** in Korea, **JMA** in Japan, **ECCC** in Kanada und **INMET** in Brasilien  
- Übungswarnungen in der **Feature-Spielwiese** (mit Wasserzeichen, sodass sie nie wie ein echter Notfall aussehen)  
- Richtungshinweise der **Apple Watch** als Begleiter und **Live-Aktivität** (Sperrbildschirm / Dynamic Island / Watch-Smart-Stapel), wo verfügbar  

**Power Pack+** ist eine einmalige Freischaltung (**kein Abonnement**) mit einer **kostenlosen 90-Tage-Testversion**. Es fügt hinzu:

- **Automatische Sprecher-Übersetzung** — On-Device-Übersetzung von Sprache in der Nähe in Ihre Sprache  
- **Constellation** — geteiltes Hören mit mehreren iPhones über Ultra-Wideband  
- **Musik-ID** — ShazamKit-Songerkennung  

Alles für die Erkennung läuft weiterhin auf Ihrem Gerät; Power Pack+ ändert nur, welche Funktionen freigeschaltet sind, niemals, wohin rohes Audio zur Analyse gesendet wird.

### Wie verwalte ich Shazam und Übersetzungen?

Diese befinden sich unter **Power Pack+** in der App (Aktionsfächer-Glitzern / Menü):

- **Shazam (Musik-ID)** — Erkennung von Umgebungsmusik auf dem räumlichen Radar (Power Pack+)  
- **Automatische Sprecher-Übersetzung** — Live-Untertitel in Ihre Sprache übersetzen (Power Pack+)  

Unwetter-Feeds sind **kostenlos** und werden in den Wetter- / Warneinstellungen verwaltet — sie sind kein Power Pack+-Zusatz.

### Wie deaktiviere ich das Mikrofon, wenn die App nicht im Vordergrund ist?

Die App hört auf, das Mikrofon für die Hintergrundüberwachung zu verwenden, wenn *alle* Warnkategorie-Schalter in den Einstellungen ausgeschaltet sind. Sie hört nicht auf Hintergrundgeräusche und sendet keine Benachrichtigungen darüber, wenn alle Kategorien deaktiviert sind. Wenn mindestens eine Warnung aktiviert ist, kann das Mikrofon für die Audiosammlung im Hintergrund verwendet werden.

Sie können den Mikrofonzugriff in den iOS-Einstellungen auch vollständig widerrufen (dadurch werden alle akustischen Funktionen gestoppt, einschließlich des Zuhörens im Vordergrund).

### Warum erkennt die App nicht konsequent *alle* Geräusche?

Akute Geräusche wie Alarme und Feuerwehrsirenen sind für die Geräusch-ML-Engine relativ leicht zu erkennen. Breitbandige Geräusche (wie Automotoren oder Reifen) sind schwieriger; wir leisten angesichts der Hardwaregrenzen von Telefonen angemessene, aber unvollkommene Arbeit. TDOA-Algorithmen (Time Difference of Arrival) sind angesichts des kurzen Abstands zwischen den Mikrofonen nur bedingt präzise. Die Richtung erfordert ein Stereo-Mikrofon-iPhone; iPads konzentrieren sich auf Untertitel ohne volle Peilung.

### Wie funktionieren die Feature-Spielwiese und die Übungswarnungen?

Öffnen Sie die **Feature-Spielwiese** (Zauberstab), um Home- & Street-Übungsgeräusche und andere Vorschauen auszuprobieren. Übungsereignisse sind deutlich als **PREVIEW** markiert, sodass sie niemals einen echten Notfall vortäuschen. Beim Schließen der Feature-Spielwiese wird der Übungsstatus abgebaut (einschließlich temporärem GPS-Spoofing, das in einigen Demos verwendet wird).

### Warum hat sich eine Untertitelzeile kurz nach dem Erscheinen geändert?

Das ist die App, die sich selbst überprüft. Direkt nach dem Finalisieren eines Satzes liest Vigilant Ear die letzten Sekunden Audio mit vollem Kontext erneut und kann — innerhalb von etwa zwei Sekunden — ein verpasstes Wort wiederherstellen oder ein falsch verstandenes korrigieren. Danach ändert sich der Text nie wieder. Alles geschieht auf Ihrem Gerät, wie immer.

---

*Vigilant Ear ist ein mit Sorgfalt entwickeltes Hilfsmittel zur Barrierefreiheit. Bitte nutzen Sie es verantwortungsbewusst.* 

Gemacht mit ❤️ für die D/HH-Gemeinschaft und die Akustikforschung.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Alle Rechte vorbehalten.<br />
  Patent angemeldet
</p>
