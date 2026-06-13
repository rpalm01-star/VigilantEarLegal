# Datenschutzrichtlinie für VigilantEar 👂🛰️

**Inkrafttreten:** 7. Juni 2026

## Einführung

VigilantEar ("wir", "uns" oder "unser") verpflichtet sich zum Schutz Ihrer Privatsphäre. Diese Datenschutzrichtlinie erklärt, welche Informationen die App verarbeitet, was auf Ihrem Gerät verbleibt und wann begrenzte Daten über das Internet gesendet werden können, um bestimmte Funktionen bereitzustellen.

## Datenschutz auf einen Blick

- **Die akustische Kernerkennung läuft auf Ihrem Gerät.** Die Geräuschklassifizierung, direktionale Verfolgung und Alarm-Logik sind darauf ausgelegt, lokal unter Verwendung des Mikrofons und der Sensoren Ihres Telefons zu funktionieren.
- **Wir verkaufen Ihre Daten nicht** und wir verwenden keine SDKs für Werbung oder Verhaltensanalysen.
- **Wir speichern oder laden keine Audioaufnahmen hoch.** Mikrofon-Audio wird in Echtzeit zur Erkennung verarbeitet; es wird von VigilantEar nicht als Audiodatei gespeichert.
- **Einige Funktionen nutzen das Internet** — Karten, Unwetter-Feeds, optionale Musikerkennung, Straßendaten, App-Store-Käufe und (unter iOS) minimale Diagnoseprotokollierung. Diese werden unten beschrieben.
- **Sie behalten die Kontrolle.** Sie können die Shazam-Musikerkennung deaktivieren, Alarmkategorien ausschalten, Berechtigungen in den Systemeinstellungen widerrufen oder das Zuhören im Hintergrund jederzeit stoppen.

## Auf Ihrem Gerät verarbeitete Informationen

Mit Ihrer Erlaubnis greift VigilantEar **lokal** auf Folgendes zu:

- **Mikrofon-Audio** — Wird in Echtzeit verwendet, um Umgebungsgeräusche (Sirenen, Fahrzeuge, Türklingeln, Personen in der Nähe usw.) zu erkennen und Alarme auszulösen.
- **Standort** — Wird verwendet, um erkannte Geräusche und Unwetter-Alarmgebiete auf der Karte zu platzieren und die Richtungsführung zu verbessern.
- **Geräteausrichtung und -bewegung** — Wird verwendet, um die Genauigkeit der Peilung zu verbessern.

Diese On-Device-Verarbeitung ist das Herzstück der App. Apps von Mitbewerbern streamen oft Audio zur Analyse und Monetarisierung in die Cloud. VigilantEar ist anders aufgebaut: Ihre Pipeline zur akustischen Wahrnehmung ist so konzipiert, dass sie auf dem Telefon selbst läuft.

## Netzwerk & Dienste von Drittanbietern

Wenn Sie bestimmte Funktionen nutzen — oder wenn die App diese benötigt, um zu funktionieren —, **können begrenzte Daten Ihr Gerät verlassen** und von Drittanbieterdiensten gemäß deren eigenen Datenschutzrichtlinien verarbeitet werden:

*   **Kartenanzeige**
    *   *Was gesendet wird:* Anfragen für Kartenkacheln; Ihr Kartenausschnitt und ungefährer Standort, sofern erforderlich, um die Karte zu rendern
    *   *Anbieter:* Google Maps (Android) · Apple Maps / MapKit (iOS)
*   **Unwetterwarnungen**
    *   *Was gesendet wird:* Anfragen an öffentliche CAP/Atom-Wetter-Feeds; Ihre allgemeine Region kann aus der Feed-Auswahl und dem Gerätestandort abgeleitet werden
    *   *Anbieter:* U.S. National Weather Service, MeteoGate, WMO und verwandte öffentliche Alarmquellen
*   **Musikerkennung (optional)**
    *   *Was gesendet wird:* Kurze Audio-Fingerabdrücke, wenn Musik erkannt wird und Shazam aktiviert ist (kann in den Einstellungen deaktiviert werden)
    *   *Anbieter:* Apple Shazam / ShazamKit
*   **Straßenkontext**
    *   *Was gesendet wird:* Anonyme Overpass-API-Abfragen basierend auf dem Kartensektor um Ihren Standort
    *   *Anbieter:* OpenStreetMap-Mitwirkende via Overpass API
*   **Abonnements & Käufe**
    *   *Was gesendet wird:* Kauf-Token und Abonnementstatus
    *   *Anbieter:* Google Play (Android) · Apple App Store (iOS)
*   **In-App-Rechtsdokumente**
    *   *Was gesendet wird:* Standard-Webanfragen, wenn Sie Datenschutzrichtlinien, Nutzungsbedingungen oder Support-Seiten in der App öffnen
    *   *Anbieter:* GitHub Pages (Dokumenten-Hosting)

Wir wählen diese Dienste, um Karten-, Wetter-, Musik-Label- und Kauf-Funktionen bereitzustellen. **Wingdings erhält von diesen Anbietern weder Ihr Mikrofon-Audio noch Ihren Standortverlauf oder Ihre Kontaktinformationen.**

## Was Wingdings sammelt

### Keine Remote-Telemetrie oder Diagnose

VigilantEar ist so konzipiert, dass es vollständig lokal auf Ihrem Gerät läuft. Wir erfassen, übertragen oder speichern keine Remote-Telemetrie, Absturzberichte, Diagnoseprotokolle oder Nutzungsanalysen auf unseren Servern. Die gesamte Verarbeitung verbleibt lokal auf Ihrer Hardware.

## Was wir nicht tun

Wir tun Folgendes **nicht**:

- Ihre persönlichen Daten verkaufen oder vermieten
- Audioaufnahmen der Umgebung auf unseren Servern speichern
- Werbenetzwerke, anwendungsübergreifende Tracker oder SDKs für Verhaltensprofilerstellung ausführen
- Ihren kontinuierlichen Standortverlauf zu Wingdings hochladen

## Ihre Wahlmöglichkeiten & Kontrollen

Sie können:

- **Berechtigungen widerrufen** (Mikrofon, Standort, Benachrichtigungen) in den iOS-Einstellungen oder Android-Systemeinstellungen
- **Shazam-Musikerkennung deaktivieren** in den App-Einstellungen
- **Einzelne Alarmkategorien ausschalten** (Sirenen, Wetter, Türklingeln usw.)
- **Zuhören im Hintergrund stoppen**, wenn alle Alarmkategorien deaktiviert sind
- **Beispiel-Alarme-Demos verwenden** in Anpassungen, um Benachrichtigungen lokal in der Vorschau anzuzeigen, ohne einen echten Notfall zu implizieren

## Plattformrichtlinien

VigilantEar befolgt die Datenschutzanforderungen des Apple App Store und von Google Play. Wir aktualisieren diese Richtlinie, wenn sich unsere Praktiken oder Plattformverpflichtungen ändern.

## Änderungen an dieser Richtlinie

Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wesentliche Änderungen werden durch die Aktualisierung des **Inkrafttretens** oben auf dieser Seite widergespiegelt.

## Kontaktieren Sie uns

Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns unter:

**E-Mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ VigilantEar wurde mit Liebe und Respekt für die Gehörlosen- und Schwerhörigengemeinschaft entwickelt. Ihr Vertrauen ist uns wichtig.

*VigilantEar ist ein Barrierefreiheitswerkzeug, das mit Sorgfalt entwickelt wurde. Bitte verwenden Sie es verantwortungsbewusst.*

© 2026 Wingdings, Inc. · Alle Rechte vorbehalten