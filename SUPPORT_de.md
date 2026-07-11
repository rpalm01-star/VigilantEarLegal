# Vigilant Ear Support 👂🛰️

Vielen Dank, dass Sie **Vigilant Ear** nutzen. Unsere Mission ist es, verbesserte Situationswahrnehmung durch fortschrittliche akustische Ereigniserkennung und Echtzeit-Notfallalarme bereitzustellen.

## Kontakt

Wenn Sie technische Probleme haben, Fragen zur Alarmgenauigkeit haben oder Feedback geben möchten, erreichen Sie uns per E-Mail unter:

**E-Mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Häufig gestellte Fragen

### Wie funktioniert Vigilant Ear im Hintergrund?

Vigilant Ear hört zu, wenn die Überwachung eingeschaltet ist und die erforderlichen Berechtigungen erteilt wurden. Es läuft effizient im Hintergrund und kann Haptik, Bildschirm-Alarme, optionale Push-Benachrichtigungen und (wenn gekoppelt) Apple-Watch-Richtungshinweise senden, wenn es wichtige Geräusche erkennt.

### Entlädt Vigilant Ear meinen Akku?

Nein. Vigilant Ear ist so konstruiert, dass es wenig Akku verbraucht, sodass Sie es eingeschaltet lassen können.

So halten wir den Akkuverbrauch niedrig:  
- Effiziente geräteinterne Machine-Learning-Modelle, die wo verfügbar auf der Neural Engine laufen.  
- Hintergrundlauschen geht in den Ruhezustand, wenn *alle* Alarmkategorien ausgeschaltet sind.  
- Fast die gesamte Verarbeitung bleibt auf Ihrem Telefon; das Netzwerk ist auf Karten, öffentliche Wetter-Feeds, optionale Musik-ID und Käufe beschränkt.  
- Intelligentes Throttling reduziert die Arbeit, wenn die akustische Szene ruhig ist.  
- Schwere Mathematik läuft abseits des Display-Threads und nur bei Bedarf.

### Warum erkennt die App keine Sirenen?

Stellen Sie sicher, dass Sie die **Mikrofon**-Berechtigung in den iOS-Einstellungen erteilt haben. Vigilant Ear braucht das Mikrofon, um akustische Signaturen zu verarbeiten. Bestätigen Sie, dass **Sirene** (oder die relevante Kategorie) in den Einstellungen aktiviert ist und dass Benachrichtigungen erlaubt wurden, wenn Sie Push-Alarme erwarten. Haptik kann leiser sein, wenn das Gerät im Stummmodus ist, je nach Systemeinstellungen.

### Wie genau sind die Wetteralarme?

Vigilant Ear fragt offizielle staatliche CAP-Feeds (Common Alerting Protocol) ab. Alarme sind so genau wie die Daten des National Weather Service und anderer internationaler Agenturen (einschließlich Europa MeteoGate, China CMA und Korea KMA). Standortsimulation, Abdeckungslücken oder Netzwerkverzögerungen können die Update-Häufigkeit gelegentlich beeinflussen.

### Funktioniert die App im Hintergrund?

Ja. Vigilant Ear ist darauf ausgelegt, kritische akustische Ereignisse im Hintergrund zu überwachen, wenn die erforderlichen Berechtigungen aktiviert sind und mindestens eine Alarmkategorie eingeschaltet ist.

### Was steuern die Alarm-Schalter?

Die Alarmkategorie-Schalter in den **Einstellungen** steuern, ob Vigilant Ear diese Geräusche bei erkannten Treffern als alarmwürdig für **Benachrichtigungen** (und verwandte Zustellung) behandelt.

Diese Schalter betreffen vor allem die **Hintergrund-/Benachrichtigungs**-Zustellung. Sie schalten **nicht** die Bildschirm-Karten- und Radar-Anzeige aus, wenn die App im Vordergrund geöffnet ist.

Typische Kategorien umfassen:  
- **Sirenen-Alarme** — Einsatzfahrzeug-Sirenen (Polizei, Feuerwehr, Krankenwagen usw.)  
- **Alarme** — Rauchmelder und Feueralarme  
- **Klopfen** — Türklopfen und Türklingeln  
- **Baby** — Babyschreien (wenn aktiviert)  
- **Wetteralarme** — Unwetterwarnungen aus offiziellen staatlichen CAP-Quellen  
- **Personen-Alarme** — Personen in der Nähe (oft am besten in ruhigeren Umgebungen; kann opt-in bleiben)

Die **Benachrichtigungsberechtigung** ist der systemweite Master-Schalter. Wenn Sie Benachrichtigungen auf dem Start-Verifizierungsbildschirm (oder später in den iOS-Einstellungen) ablehnen, erhalten Sie keine Push-Alarme, auch wenn einzelne Kategorien eingeschaltet sind. Bildschirm-Alarme, während die App geöffnet ist, können weiterhin erscheinen.

### Was ist kostenlos, und was ist Power Pack+?

Der Sicherheitskern ist **für immer kostenlos**:

- Lokale Klangalarme (Sirenen, Alarme, Klopfen/Türklingeln, Baby, Person in der Nähe) mit Bildschirm- und optionaler Push-Zustellung  
- **Speaker Mode** Live-Untertitel (geräteintern; mit Richtung, wo die Hardware es zulässt)  
- Unwetter-CAP-Feeds für Ihre Region — US-**NWS**, Europa-**MeteoGate**, **China CMA** und **Korea KMA**  
- **Demo Mode** Übungsalarme (mit Wasserzeichen, sodass sie nie wie ein Live-Notfall aussehen)  
- **Apple Watch** Companion-Richtungshinweise und **Live Activity** (Sperrbildschirm / Dynamic Island / Watch Smart Stack), wo verfügbar  

**Power Pack+** ist ein einmaliges Freischalten (**kein Abo**) mit einer **90-tägigen kostenlosen Testphase**. Es fügt hinzu:

- **Speaker Auto-Translate** — geräteinterne Übersetzung von Sprache in der Nähe in Ihre Sprache  
- **Constellation** — gemeinsames Hören über mehrere iPhones via Ultra-Wideband  
- **Music ID** — ShazamKit-Song-Erkennung  

Alles zur Erkennung läuft weiterhin auf Ihrem Gerät; Power Pack+ ändert nur, welche Funktionen freigeschaltet sind, nie wohin Rohaudio zur Analyse gesendet wird.

### Wie verwalte ich Shazam und Übersetzung?

Diese befinden sich unter **Power Pack+** in der App (Action-Fan-Sparkles / Menü):

- **Shazam (Music ID)** — Umgebungs-Musikidentifikation auf dem räumlichen Radar (Power Pack+)  
- **Speaker Auto-Translate** — Live-Untertitel in Ihre Sprache übersetzen (Power Pack+)  

Unwetter-Feeds sind **kostenlos** und werden über die Wetter-/Alarm-Einstellungen verwaltet — sie sind kein Power-Pack+-Add-on.

### Wie deaktiviere ich das Mikrofon, wenn die App nicht im Vordergrund ist?

Die App stoppt die Mikrofonnutzung für die Hintergrundüberwachung, wenn *alle* Alarmkategorie-Schalter in den Einstellungen ausgeschaltet sind. Sie hört nicht und sendet keine Hintergrund-Klangbenachrichtigungen, wenn alle Kategorien deaktiviert sind. Wenn mindestens ein Alarm aktiviert ist, kann das Mikrofon für die Hintergrund-Klangerfassung verwendet werden.

Sie können den Mikrofonzugriff auch vollständig in den iOS-Einstellungen widerrufen (das stoppt alle akustischen Funktionen, einschließlich Vordergrund-Lauschen).

### Warum erkennt die App nicht durchgängig *alle* Geräusche?

Akute Geräusche wie Alarme und Feuerwehrsirenen sind für die Sound-ML-Engine relativ leicht zu erkennen. Breitband-Geräusche (wie Auto-Motoren oder Reifen) sind schwerer; wir leisten angesichts der Grenzen der Telefon-Hardware eine angemessene, aber unvollkommene Arbeit. Time-Difference-of-Arrival-(TDOA)-Algorithmen sind bei dem kurzen Abstand zwischen Mikrofonen nur begrenzt präzise. Richtung braucht ein Stereo-Mikrofon-iPhone; iPads sind untertitelfokussiert ohne volle Peilung.

### Wie funktionieren Demo Mode und Übungsalarme?

Öffnen Sie **Demo Mode** (Zauberstab), um Home- & Street-Übungssounds und andere Vorschauen auszuprobieren. Übungsereignisse sind klar mit **DEMO:** markiert, sodass sie nie als echter Notfall vorgetäuscht werden. Das Schließen von Demo Mode baut den Übungszustand ab (einschließlich temporärem GPS-Spoof, der in manchen Demos verwendet wird).

---

*Vigilant Ear ist ein Barrierefreiheits-Hilfsmittel, das mit Sorgfalt gebaut wurde. Bitte nutzen Sie es verantwortungsvoll.* 

Made with ❤️ for the D/HH community and acoustic research.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Alle Rechte vorbehalten.<br />
  Patent angemeldet
</p>
