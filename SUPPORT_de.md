# VigilantEar Support 👂🛰️

Vielen Dank, dass Sie **VigilantEar** nutzen. Unsere Mission ist es, durch fortschrittliche akustische Ereigniserkennung und Echtzeit-Notfallwarnungen ein verbessertes Situationsbewusstsein zu bieten.

## Kontakt

Wenn Sie technische Probleme haben, Fragen zur Genauigkeit der Warnungen haben oder Feedback geben möchten, erreichen Sie uns per E-Mail unter:

**E-Mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Häufig gestellte Fragen

### Wie funktioniert VigilantEar im Hintergrund?

VigilantEar hört nur zu, wenn Sie die Überwachung aktivieren. Es läuft effizient im Hintergrund und sendet Vibrationen oder visuelle Warnungen, wenn es wichtige Geräusche erkennt.

### Entlädt VigilantEar meinen Akku?

Nein. VigilantEar verbraucht sehr wenig Akku. Wir haben die App sorgfältig optimiert, sodass Sie sie den ganzen Tag ohne Bedenken ausführen können.

Hier ist genau, wie wir den Akkuverbrauch niedrig halten:  
- Wir verwenden effiziente On-Device-Machine-Learning-Modelle, die fast keinen Strom benötigen.  
- Wir hören automatisch auf zuzuhören, wenn die App nicht im Vordergrund ist, sofern Sie alle Warnungen in den Einstellungen deaktivieren.
- Wir vermeiden fast alle Cloud-Datenaufrufe und belassen die Verarbeitung auf Ihrem Telefon.  
- Wir haben eine intelligente Drosselung hinzugefügt, um die Verarbeitungsanforderungen zu reduzieren.
- Unsere Algorithmen sind präzise mathematische Berechnungen, die abseits des Display-Threads ausgeführt werden und nur dann laufen, wenn sie benötigt werden.

### Warum erkennt die App keine Sirenen?

Stellen Sie sicher, dass Sie die **Mikrofon**-Berechtigungen in den Einstellungen Ihres Telefons erteilt haben. VigilantEar benötigt aktiven Mikrofonzugriff, um akustische Signaturen zu verarbeiten. Stellen Sie außerdem sicher, dass sich Ihr Gerät nicht im "Lautlos-Modus" befindet, wenn Sie haptisches Feedback wünschen.

### Wie genau sind die Wetterwarnungen?

VigilantEar fragt offizielle staatliche CAP-Feeds (Common Alerting Protocol) ab. Die Warnungen sind so genau wie die vom Nationalen Wetterdienst (National Weather Service) und anderen internationalen Behörden bereitgestellten Daten. Standortsimulationen oder Netzwerkverzögerungen können gelegentlich die Aktualisierungshäufigkeit beeinträchtigen.

### Funktioniert die App im Hintergrund?

Ja, VigilantEar ist so konzipiert, dass es auf kritische akustische Ereignisse im Hintergrund überwacht, vorausgesetzt, die erforderlichen Berechtigungen sind aktiviert.

### Was steuern die Warnungsschalter (Toggles)?

Die Hauptwarnungsschalter im **Einstellungsmenü** steuern, ob VigilantEar Ihnen eine Benachrichtigung sendet, wenn es übereinstimmende Geräusche erkennt.  

Diese Schalter wirken sich nur auf Benachrichtigungen aus, die gesendet werden, während sich die App im Hintergrund befindet oder nicht aktiv geöffnet ist. Sie haben **keinen** Einfluss auf die Bildschirmanzeige von Warnungen, wenn die App geöffnet und im Vordergrund ist.

Die Hauptschalter sind:  
- **Sirenenwarnungen (Siren Alerts)** — Sirenen von Einsatzfahrzeugen (Polizei, Feuerwehr, Krankenwagen usw.)  
- **Alarme (Alarms)** — Rauchmelder und Feueralarme  
- **Klopfen (Knocks)** — Türklopfen und Türklingeln
- **Wetterwarnungen (Weather Alerts)** — Unwetterwarnungen von offiziellen staatlichen Quellen  
- **Personenwarnungen (People Alerts)** — Personen in der Nähe (in ruhigen Umgebungen)  

### Wie verwalte ich externe Datenquellen und Shazam?

Zusätzlich zu den auf dem Hauptmikrofon basierenden akustischen Warnungen können Sie im Menü **Datenquellen (Data Sources)** weitere externe Datenfeeds aktivieren:
- **Shazam (Music ID)** — Echtzeit-Musikerkennung aus der Umgebung, die dynamisch auf Ihrem räumlichen Radar abgebildet wird.
- **Externe Wetter-Feeds** — Zusätzliche internationale Wetterdatenquellen wie MeteoGate (Europa) und CMA/MEM-Feeds (China).  

### Wie deaktiviere ich das Mikrofon, wenn die App nicht im Vordergrund ist?

Die App nutzt das Mikrofon im Hintergrundmodus überhaupt nicht mehr, wenn *alle* Warnungsschalter über das Einstellungsmenü der App ausgeschaltet sind. Sie hört nicht zu und sendet keine Hintergrundbenachrichtigungen, wenn alle Schalter deaktiviert sind. Wenn mindestens eine Warnung aktiviert ist, wird das Mikrofon für die Hintergrundgeräuscherfassung aktiviert.

### Warum erkennt die App nicht immer *alle* Geräusche konstant?

Akute Geräusche wie Alarme und Feuerwehrsirenen sind für die ML-Verarbeitungs-Engine relativ leicht zu erkennen. Breitbandige Geräusche (wie Automotoren oder Reifen) sind schwieriger, aber wir leisten in Anbetracht der begrenzten Fähigkeiten des Telefons selbst angemessene (wenn auch unvollkommene) Arbeit. TDOA-Algorithmen (Time Distance of Arrival) sind angesichts des kurzen Abstands zwischen den Mikrofonen nur bis zu einem gewissen Grad präzise.

---

*VigilantEar ist ein mit Sorgfalt entwickeltes Hilfsmittel für die Barrierefreiheit. Bitte nutzen Sie es verantwortungsvoll.* 

Mit ❤️ für die Gehörlosen- und Schwerhörigen-Community und die akustische Forschung entwickelt.

© 2026 Wingdings, Inc.
Alle Rechte vorbehalten
