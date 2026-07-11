# Datenschutzrichtlinie für Vigilant Ear 👂🛰️

**Datum des Inkrafttretens:** 11. Juli 2026

## Einleitung

Vigilant Ear („wir“, „uns“ oder „unser“) verpflichtet sich zum Schutz Ihrer Privatsphäre. Diese Datenschutzrichtlinie erläutert, welche Informationen die App verarbeitet, was auf Ihrem Gerät verbleibt und wann begrenzte Daten über das Internet gesendet werden können, um bestimmte Funktionen bereitzustellen.

## Datenschutz auf einen Blick

- **Die zentrale akustische Erkennung läuft auf Ihrem Gerät.** Klangklassifizierung, Richtungsverfolgung, Live-Untertitel und Alarmlogik sind dafür ausgelegt, lokal mithilfe des Mikrofons und der Sensoren Ihres Telefons zu funktionieren.
- **Wir verkaufen Ihre Daten nicht** und verwenden keine Werbe- oder Verhaltensanalyse-SDKs.
- **Wir speichern oder laden keine Audioaufzeichnungen hoch.** Mikrofon-Audio wird in Echtzeit zur Erkennung und (wenn aktiviert) für Untertitel verarbeitet; es wird von Vigilant Ear nicht als Sounddatei für spätere Wiedergabe oder Cloud-Analyse gespeichert.
- **Einige Funktionen nutzen das Internet** — Karten, Unwetter-Feeds, optionale Musikidentifikation, Straßendaten, App-Store-Käufe, optionaler Mehrtelefon-Mesh-Verkehr zwischen *Ihren* Geräten und das Laden rechtlicher In-App-Seiten. Diese werden nachfolgend beschrieben.
- **Sie behalten die Kontrolle.** Sie können die Shazam-Musikidentifikation deaktivieren, Alarmkategorien ausschalten, Constellation ausgeschaltet lassen, Berechtigungen in den Systemeinstellungen widerrufen oder das Hintergrundlauschen jederzeit stoppen.

## Auf Ihrem Gerät verarbeitete Informationen

Mit Ihrer Erlaubnis greift Vigilant Ear **lokal** auf Folgendes zu:

- **Mikrofonaudio** — Wird in Echtzeit verwendet, um Umgebungsgeräusche (Sirenen, Fahrzeuge, Türklingeln, Babyschreien, Personen in der Nähe usw.) zu erkennen, die Richtung zu schätzen und (wenn Speaker Mode aktiv ist) Live-Untertitel und optionale geräteinterne Übersetzung zu erzeugen.
- **Spracherkennung (geräteintern)** — Wenn Untertitel aktiviert sind, transkribieren die Sprach-Frameworks Ihres Geräts gesprochene Sprache in der Nähe auf dem Telefon in Text. Untertiteltext wird live angezeigt und von Vigilant Ear nicht als permanentes Transkript-Archiv gespeichert; Debug-Logs enthalten keinen Untertitelinhalt.
- **Standort** — Wird verwendet, um erkannte Geräusche und Unwetterwarngebiete auf der Karte zu platzieren und die Richtungsführung zu verbessern.
- **Geräteausrichtung und -bewegung** — Wird verwendet, um die Peilgenauigkeit zu verbessern.
- **Kamera (optional)** — Wird nur verwendet, wenn Sie die Kamera-AR-Ansicht „den Klang sehen“ öffnen, damit Marker in der Live-Kameravorschau gepinnt werden können. Kamerabilder werden für die geräteinterne Anzeige verwendet; sie werden von Vigilant Ear nicht zur Klangerkennung hochgeladen.
- **Apple Watch (optional)** — Wenn ein Watch-Companion verfügbar ist, können Alarmbezeichnungen und Richtungshinweise an die gekoppelte Watch weitergeleitet werden, damit Sie aufs Handgelenk schauen können.

Diese geräteseitige Verarbeitung ist das Herzstück der App. Konkurrierende Apps streamen Audio häufig zur Analyse und Monetarisierung in die Cloud. Vigilant Ear ist anders konzipiert: Ihre akustische Wahrnehmungs-Pipeline ist dafür ausgelegt, auf dem Telefon selbst zu laufen.

## Netzwerk & Drittanbieterdienste

Wenn Sie bestimmte Funktionen nutzen — oder wenn die App diese zur Ausführung benötigt — **können begrenzte Daten Ihr Gerät verlassen** und von Drittanbieterdiensten gemäß deren eigenen Datenschutzrichtlinien verarbeitet werden:

*   **Kartenanzeige**
    *   *Was gesendet wird:* Kartenkachel-Anfragen; Ihr Karten-Viewport und ungefährer Standort, soweit nötig, um die Karte darzustellen
    *   *Anbieter:* Apple Maps / MapKit
*   **Unwetterwarnungen**
    *   *Was gesendet wird:* Anfragen an öffentliche CAP/Atom-Wetter-Feeds; Ihre allgemeine Region kann aus der Feed-Auswahl und dem Gerätestandort abgeleitet werden
    *   *Anbieter:* U.S. National Weather Service, MeteoGate (Europa), China Meteorological Administration (CMA), Korea Meteorological Administration (KMA), WMO-bezogene öffentliche Quellen und ähnliche öffentliche Alarm-Feeds
*   **Musikidentifikation (optional, Power Pack+)**
    *   *Was gesendet wird:* Kurze Audio-Fingerprints — niemals Rohaudio —, wenn Musik erkannt wird und Shazam aktiviert ist (kann in den Einstellungen ausgeschaltet werden)
    *   *Anbieter:* Apple Shazam / ShazamKit
*   **Straßenkontext**
    *   *Was gesendet wird:* Anonyme Overpass-API-Abfragen basierend auf dem Kartensektor um Ihren Standort
    *   *Anbieter:* OpenStreetMap-Beitragende über die Overpass API
*   **Käufe & Berechtigungen**
    *   *Was gesendet wird:* Kauf-Token und Berechtigungs-/Teststatus für das optionale einmalige Power-Pack+-Freischalten (kein Abo)
    *   *Anbieter:* Apple App Store
*   **Constellation-Mesh (optional, Power Pack+)**
    *   *Was gesendet wird:* Wenn Sie Mehrtelefon-Constellation aktivieren, tauschen teilnehmende Geräte akustische Metadaten aus, die für ein gemeinsames Bild nötig sind — zum Beispiel relative Pose / Ultra-Wideband-Ranging, wo verfügbar, Peilungen, Klangbezeichnungen und flüchtiger Untertiteltext. Der Verkehr ist Peer-to-Peer zwischen den Telefonen, die Sie verbinden; Wingdings betreibt kein Cloud-Mesh-Relay für diese Audio-Pipeline.
    *   *Anbieter:* Apple-Frameworks (z. B. Network / Nearby Interaction) zwischen Ihren Geräten
*   **Rechtliche In-App-Dokumente**
    *   *Was gesendet wird:* Standard-Webanfragen, wenn Sie Datenschutzrichtlinie, Nutzungsbedingungen, Support oder Produkt-README-Seiten in der App öffnen
    *   *Anbieter:* GitHub (Dokumenten-Hosting)

Wir wählen diese Dienste, um Karten-, Wetter-, Musiklabel-, Kauf- und Mehrgeräte-Funktionalität bereitzustellen. **Wingdings erhält von diesen Anbietern weder Ihr Mikrofonaudio, noch eine fortlaufende Standortverlaufs-Historie oder Kontaktinformationen.**

## Was Wingdings erhebt

### Keine Remote-Telemetrie oder Diagnostik

Vigilant Ear ist darauf ausgelegt, vollständig lokal auf Ihrem Gerät zu arbeiten. Wir erheben, übertragen oder speichern keine Remote-Telemetrie, Absturzprotokolle, Diagnosedatensätze oder Nutzungsanalysen auf Wingdings-Servern. Optionale **lokale** Debug-Logs können auf dem Gerät zur Fehlerbehebung geschrieben werden; sie werden von der App nicht als Telemetrie-Pipeline hochgeladen, und Untertiteltext ist in exportierten Debug-Inhalten nicht enthalten.

## Was wir nicht tun

Wir **tun nicht**:

- Ihre personenbezogenen Informationen verkaufen oder vermieten
- Umwelt-Audioaufzeichnungen auf unseren Servern speichern
- Werbenetzwerke, Cross-App-Tracker oder Verhaltensprofilierungs-SDKs betreiben
- Ihren fortlaufenden Standort-Trail an Wingdings hochladen
- Roh-Mikrofonaudio zur Cloud-Sprach- oder Klangerkennung hochladen

## Ihre Wahlmöglichkeiten & Kontrollen

Sie können:

- **Berechtigungen widerrufen** (Mikrofon, Standort, Kamera, Benachrichtigungen, Spracherkennung) in den iOS-Einstellungen
- **Shazam-Musikidentifikation deaktivieren** in Power Pack+ / Einstellungen
- **Einzelne Alarmkategorien ausschalten** (Sirenen, Wetter, Türklingeln, Baby usw.)
- **Hintergrundlauschen stoppen**, wenn alle Alarmkategorien deaktiviert sind
- **Constellation ausgeschaltet lassen**, sodass keine Mesh-Metadaten mit anderen Telefonen geteilt werden
- **Demo Mode nutzen**, um Alarme und Funktionen lokal mit einem klaren DEMO-Wasserzeichen vorzuschauen, ohne eine echte Notlage zu implizieren

## Plattform-Richtlinien

Vigilant Ear folgt den Datenschutzanforderungen des Apple App Store und Apples Richtlinien für Apps, die Menschen mit Barrierefreiheitsbedarf dienen. Wir aktualisieren diese Richtlinie, wenn sich unsere Praktiken oder Plattformverpflichtungen ändern.

## Änderungen an dieser Richtlinie

Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wesentliche Änderungen werden durch Aktualisierung des **Datums des Inkrafttretens** oben auf dieser Seite widergespiegelt.

## Kontakt

Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns unter:

**E-Mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear wird mit Liebe und Respekt für die gehörlose und schwerhörige Community gebaut. Ihr Vertrauen ist uns wichtig.

*Vigilant Ear ist ein Barrierefreiheits-Hilfsmittel, das mit Sorgfalt gebaut wurde. Bitte nutzen Sie es verantwortungsvoll.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Alle Rechte vorbehalten.<br />
  Patent angemeldet
</p>
