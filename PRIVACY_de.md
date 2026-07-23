# Datenschutzrichtlinie für Vigilant Ear 👂🛰️

**Datum des Inkrafttretens:** 11. Juli 2026

## Einführung

Vigilant Ear ("wir", "uns" oder "unser") verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzrichtlinie erklärt, welche Informationen die App verarbeitet, was auf Ihrem Gerät verbleibt und wann begrenzte Daten über das Internet gesendet werden können, um bestimmte Funktionen bereitzustellen.

## Datenschutz auf einen Blick

- **Die akustische Kernerkennung läuft auf Ihrem Gerät.** Geräuschklassifizierung, gerichtete Verfolgung, Live-Untertitel und Warnlogik sind so konzipiert, dass sie lokal über das Mikrofon und die Sensoren Ihres Telefons funktionieren.
- **Wir verkaufen Ihre Daten nicht** und wir verwenden keine SDKs für Werbung oder Verhaltensanalysen.
- **Wir speichern oder laden keine Audioaufnahmen hoch.** Mikrofon-Audio wird in Echtzeit zur Erkennung und (wenn aktiviert) für Untertitel verarbeitet; es wird von Vigilant Ear nicht als Audiodatei für spätere Wiedergabe oder Cloud-Analysen gespeichert.
- **Einige Funktionen nutzen das Internet** — Karten, Unwetter-Feeds, optionale Musikidentifikation, Straßendaten, App-Store-Käufe, optionaler Multi-Telefon-Mesh-Verkehr zwischen *Ihren* Geräten und das Laden von In-App-Rechtsseiten. Diese werden unten beschrieben.
- **Sie behalten die Kontrolle.** Sie können die Shazam-Musikidentifikation deaktivieren, Warnkategorien ausschalten, Constellation auslassen, Berechtigungen in den Systemeinstellungen widerrufen oder das Zuhören im Hintergrund jederzeit beenden.

## Auf Ihrem Gerät verarbeitete Informationen

Mit Ihrer Erlaubnis greift Vigilant Ear **lokal** auf Folgendes zu:

- **Mikrofon-Audio** — Wird in Echtzeit verwendet, um Umgebungsgeräusche (Sirenen, Fahrzeuge, Türklingeln, Babygeschrei, Personen in der Nähe usw.) zu erkennen, die Richtung abzuschätzen und (wenn der Sprechermodus aktiviert ist) Live-Untertitel und optionale On-Device-Übersetzung zu erstellen.
- **Spracherkennung (auf dem Gerät)** — Wenn Untertitel aktiviert sind, transkribieren die Sprach-Frameworks Ihres Geräts Sprache in der Nähe in Text auf dem Telefon. Untertiteltext wird live angezeigt und von Vigilant Ear nicht als permanenter Transkriptverlauf archiviert; Debug-Protokolle enthalten keinen Untertitelinhalt.
- **Standort** — Wird verwendet, um erkannte Geräusche und Wetterwarngebiete auf der Karte zu platzieren und die Richtungsführung zu verbessern.
- **Geräteausrichtung und -bewegung** — Wird verwendet, um die Peilungsgenauigkeit zu verbessern.
- **Kamera (optional)** — Wird nur verwendet, wenn Sie die Kamera-AR-Ansicht „das Geräusch sehen“ öffnen, damit Markierungen in der Live-Kamera-Vorschau angeheftet werden können. Kamera-Frames werden für die Anzeige auf dem Gerät verwendet; sie werden von Vigilant Ear nicht zur Geräuscherkennung hochgeladen.
- **Apple Watch (optional)** — Wenn ein Watch-Begleiter verfügbar ist, können Warnetiketten und Richtungshinweise an die gekoppelte Watch weitergeleitet werden, damit Sie einen Blick auf Ihr Handgelenk werfen können.

Diese On-Device-Verarbeitung ist das Herzstück der App. Apps von Mitbewerbern streamen Audio oft in die Cloud zur Analyse und Monetarisierung. Vigilant Ear ist anders aufgebaut: Ihre Pipeline für akustisches Bewusstsein ist so konzipiert, dass sie auf dem Telefon selbst läuft.

## Netzwerk & Dienste von Drittanbietern

Wenn Sie bestimmte Funktionen nutzen — oder wenn die App diese zum Funktionieren benötigt — **können begrenzte Daten Ihr Gerät verlassen** und von Drittanbieterdiensten gemäß deren eigenen Datenschutzrichtlinien verarbeitet werden:

*   **Kartenanzeige**
    *   *Was gesendet wird:* Kartenkachel-Anforderungen; Ihr Kartenansichtsfenster und ungefährer Standort nach Bedarf, um die Karte zu rendern
    *   *Anbieter:* Apple Maps / MapKit
*   **Unwetterwarnungen**
    *   *Was gesendet wird:* Anfragen an öffentliche CAP/Atom-Wetter-Feeds; Ihre allgemeine Region kann aus der Feed-Auswahl und dem Gerätestandort abgeleitet werden
    *   *Anbieter:* U.S. National Weather Service, MeteoGate (Europa), China Meteorological Administration (CMA), Korea Meteorological Administration (KMA), WMO-bezogene öffentliche Quellen und ähnliche öffentliche Warn-Feeds
*   **Erdbebenwarnungen**
    *   *Was gesendet wird:* Anfragen an einen einzigen weltweiten öffentlichen Erdbeben-Übersichtsfeed — die Anfrage enthält keinerlei Standort- oder Regionsinformationen; Ihr Gerätestandort wird ausschließlich auf dem Gerät verwendet, um zu entscheiden, ob ein gemeldetes Beben in Ihrer Nähe ist
    *   *Anbieter:* Öffentlicher Erdbeben-Feed des U.S. Geological Survey (USGS)
*   **Musikidentifikation (optional, Power Pack+)**
    *   *Was gesendet wird:* Kurze Audio-Fingerabdrücke — niemals rohes Audio — wenn Musik erkannt wird und Shazam aktiviert ist (kann in den Einstellungen ausgeschaltet werden)
    *   *Anbieter:* Apple Shazam / ShazamKit
*   **Straßenkontext**
    *   *Was gesendet wird:* Anonyme Overpass-API-Abfragen basierend auf dem Kartensektor um Ihren Standort
    *   *Anbieter:* OpenStreetMap-Mitwirkende über die Overpass API
*   **Käufe & Berechtigungen**
    *   *Was gesendet wird:* Kauftoken und Berechtigungs- / Teststatus für die optionale einmalige Power Pack+-Freischaltung (kein Abonnement)
    *   *Anbieter:* Apple App Store
*   **Constellation-Mesh (optional, Power Pack+)**
    *   *Was gesendet wird:* Wenn Sie die Multi-Telefon-Constellation aktivieren, tauschen die teilnehmenden Geräte akustische Metadaten aus, die für ein gemeinsames Bild erforderlich sind — zum Beispiel relative Pose / Ultra-Wideband-Ranging (wo verfügbar), Peilungen, Geräuschetiketten und flüchtigen Untertiteltext. Der Datenverkehr erfolgt Peer-to-Peer zwischen den von Ihnen verknüpften Telefonen; Wingdings betreibt kein Cloud-Mesh-Relay für diese Audio-Pipeline.
    *   *Anbieter:* Apple Frameworks (z. B. Network / Nearby Interaction) zwischen Ihren Geräten
*   **In-App-Rechtsdokumente**
    *   *Was gesendet wird:* Standard-Webanfragen, wenn Sie Seiten zu Datenschutzrichtlinien, Nutzungsbedingungen, Support oder Produkt-README in der App öffnen
    *   *Anbieter:* GitHub (Dokumenten-Hosting)

Wir wählen diese Dienste aus, um Karten-, Wetter-, Musiketiketten-, Kauf- und Multi-Geräte-Funktionen bereitzustellen. **Wingdings erhält von diesen Anbietern weder Ihr Mikrofon-Audio noch Ihren kontinuierlichen Standortverlauf oder Ihre Kontaktinformationen.**

## Was Wingdings sammelt

### Keine Remote-Telemetrie oder Diagnose

Vigilant Ear ist so konzipiert, dass es vollständig lokal auf Ihrem Gerät arbeitet. Wir sammeln, übertragen oder speichern keine Remote-Telemetrie, Absturzprotokolle, Diagnoseaufzeichnungen oder Nutzungsanalysen auf Wingdings-Servern. Optionale **lokale** Debug-Protokolle können zur Fehlerbehebung auf das Gerät geschrieben werden; sie werden von der App nicht als Telemetrie-Pipeline hochgeladen, und Untertiteltext ist nicht im exportierten Debug-Inhalt enthalten.

## Was wir nicht tun

Wir tun **nicht**:

- Ihre persönlichen Informationen verkaufen oder vermieten
- Audioaufnahmen der Umgebung auf unseren Servern speichern
- Werbenetzwerke, anwendungsübergreifende Tracker oder Verhaltensprofil-SDKs ausführen
- Ihren kontinuierlichen Standortverlauf zu Wingdings hochladen
- Rohes Mikrofon-Audio zur Cloud-Sprach- oder Geräuscherkennung hochladen

## Ihre Entscheidungen & Kontrollen

Sie können:

- **Berechtigungen widerrufen** (Mikrofon, Standort, Kamera, Benachrichtigungen, Spracherkennung) in den iOS-Einstellungen
- **Die Shazam-Musikidentifikation deaktivieren** unter Power Pack+ / Einstellungen
- **Einzelne Warnkategorien ausschalten** (Sirenen, Wetter, Türklingeln, Baby usw.)
- **Das Zuhören im Hintergrund beenden**, wenn alle Warnkategorien deaktiviert sind
- **Constellation auslassen**, sodass keine Mesh-Metadaten mit anderen Telefonen geteilt werden
- **Die Feature-Spielwiese verwenden**, um Warnungen und Funktionen lokal mit einem klaren PREVIEW-Wasserzeichen in der Vorschau anzuzeigen, ohne einen echten Notfall zu implizieren

## Plattform-Richtlinien

Vigilant Ear befolgt die Datenschutzanforderungen des Apple App Store und Apples Richtlinien für Apps, die Menschen mit Barrierefreiheitsbedürfnissen dienen. Wir aktualisieren diese Richtlinie, wenn sich unsere Praktiken oder Plattformverpflichtungen ändern.

## Änderungen an dieser Richtlinie

Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wesentliche Änderungen werden durch Aktualisierung des **Datums des Inkrafttretens** oben auf dieser Seite angezeigt.

## Kontaktiere uns

Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns unter:

**E-Mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear ist mit Liebe und Respekt für die Gehörlosen- und Schwerhörigengemeinschaft gebaut. Ihr Vertrauen ist uns wichtig.

*Vigilant Ear ist ein mit Sorgfalt entwickeltes Hilfsmittel zur Barrierefreiheit. Bitte nutzen Sie es verantwortungsbewusst.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Alle Rechte vorbehalten.<br />
  Patent angemeldet
</p>
