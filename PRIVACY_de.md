# Datenschutzrichtlinie für Vigilant Ear 👂🛰️

**Datum des Inkrafttretens:** 28. August 2026

## Einführung

Vigilant Ear ("wir", "uns" oder "unser") verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzrichtlinie erklärt, welche Informationen die App verarbeitet, was auf Ihrem Gerät verbleibt und wann begrenzte Daten über das Internet gesendet werden können, um bestimmte Funktionen bereitzustellen.

## Datenschutz auf einen Blick

- **Die akustische Kernerkennung läuft auf Ihrem Gerät.** Geräuschklassifizierung, gerichtete Verfolgung, Live-Untertitel und Warnlogik sind so konzipiert, dass sie lokal über das Mikrofon und die Sensoren Ihres Telefons funktionieren.
- **Wir verkaufen Ihre Daten nicht** und wir verwenden keine SDKs für Werbung oder Verhaltensanalysen.
- **Wir speichern oder laden keine Audioaufnahmen hoch.** Mikrofon-Audio wird in Echtzeit zur Erkennung und (wenn aktiviert) für Untertitel verarbeitet; es wird niemals als Audiodatei gespeichert oder zur Cloud-Analyse gesendet. Bis zu etwa zwanzig Sekunden Ton werden kurz im Arbeitsspeicher des Telefons gehalten, während sie transkribiert werden — dieser kurze Puffer ist es, der Untertiteln erlaubt, die ersten Worte eines Sprechers zu erfassen statt sie zu verlieren — und er berührt niemals den Speicher, wird nirgendwohin übertragen und ist in dem Moment weg, in dem die App geschlossen wird. Die Rewind-Funktion bringt nur den **Text** kürzlicher Untertitel zurück; es wird kein Ton für die Wiedergabe aufbewahrt.
- **Einige Funktionen nutzen das Internet** — Karten, Unwetter-Feeds, optionale Musikidentifikation, Straßendaten, App-Store-Käufe, optionaler Multi-Telefon-Mesh-Verkehr zwischen *Ihren* Geräten, das Laden von In-App-Rechtsseiten und (nur wenn Sie sich aktiv dafür entscheiden) Berichte für das Research Array (Forschungsarray). Diese werden unten beschrieben.
- **Sie behalten die Kontrolle.** Sie können die Shazam-Musikidentifikation deaktivieren, Warnkategorien ausschalten, Constellation auslassen, **Research Array** ausgeschaltet lassen (es ist standardmäßig ausgeschaltet), Berechtigungen in den Systemeinstellungen widerrufen oder das Zuhören im Hintergrund jederzeit beenden.

## Auf Ihrem Gerät verarbeitete Informationen

Mit Ihrer Erlaubnis greift Vigilant Ear **lokal** auf Folgendes zu:

- **Mikrofon-Audio** — Wird in Echtzeit verwendet, um Umgebungsgeräusche (Sirenen, Fahrzeuge, Türklingeln, Babygeschrei, Personen in der Nähe usw.) zu erkennen, die Richtung abzuschätzen und (wenn der Sprechermodus aktiviert ist) Live-Untertitel und optionale On-Device-Übersetzung zu erstellen.
- **Spracherkennung (auf dem Gerät)** — Wenn Untertitel aktiviert sind, transkribieren die Sprach-Frameworks Ihres Geräts Sprache in der Nähe in Text auf dem Telefon. Untertiteltext wird live angezeigt und von Vigilant Ear nicht als permanenter Transkriptverlauf archiviert; Debug-Protokolle enthalten keinen Untertitelinhalt.
- **Standort** — Wird verwendet, um erkannte Geräusche und Wetterwarngebiete auf der Karte zu platzieren und die Richtungsführung zu verbessern.
- **Geräteausrichtung und -bewegung** — Wird verwendet, um die Peilungsgenauigkeit zu verbessern.
- **Kamera (optional)** — Wird nur verwendet, wenn Sie die Kamera-AR-Ansicht „das Geräusch sehen“ öffnen, damit Markierungen in der Live-Kamera-Vorschau angeheftet werden können. Kamera-Frames werden für die Anzeige auf dem Gerät verwendet; sie werden von Vigilant Ear nicht zur Geräuscherkennung hochgeladen.
- **Apple Watch (optional)** — Wenn ein Watch-Begleiter verfügbar ist, können Warnetiketten und Richtungshinweise an die gekoppelte Watch weitergeleitet werden, damit Sie einen Blick auf Ihr Handgelenk werfen können.
- **Witness Ear-Klangtagebuch (optional, standardmäßig ausgeschaltet)** — Wenn Sie Witness Ear einschalten, führt die App ein fortlaufendes **24-Stunden-Protokoll auf dem Gerät** über Geräuschklassifizierungen (Zeit, Etikett, Konfidenz, Spitzenpegel, Richtung sofern gemessen, sowie der Standort des Telefons zu diesem Zeitpunkt; hinzu kommen Einträge, die Ihre verknüpften Constellation-Telefone geteilt haben). Das Tagebuch wird ausschließlich in der privaten Sandbox der App auf diesem Telefon gespeichert und wird von Vigilant Ear niemals hochgeladen. Es verlässt das Telefon nur innerhalb eines PDF-Berichts, den **Sie** exportieren und teilen möchten. Einträge, die älter als 24 Stunden sind, werden automatisch gelöscht; das Ausschalten von Witness Ear pausiert die Protokollierung (behaltene Einträge laufen weiterhin ab), und das Papierkorb-Bedienelement in der App löscht das Protokoll sofort. Einzelheiten finden Sie im Witness Ear-Leitfaden.

Diese On-Device-Verarbeitung ist das Herzstück der App. Apps von Mitbewerbern streamen Audio oft in die Cloud zur Analyse und Monetarisierung. Vigilant Ear ist anders aufgebaut: Ihre Pipeline für akustisches Bewusstsein ist so konzipiert, dass sie auf dem Telefon selbst läuft.

## Netzwerk & Dienste von Drittanbietern

Wenn Sie bestimmte Funktionen nutzen — oder wenn die App diese zum Funktionieren benötigt — **können begrenzte Daten Ihr Gerät verlassen** und von Drittanbieterdiensten gemäß deren eigenen Datenschutzrichtlinien verarbeitet werden:

*   **Kartenanzeige**
    *   *Was gesendet wird:* Kartenkachel-Anforderungen; Ihr Kartenansichtsfenster und ungefährer Standort nach Bedarf, um die Karte zu rendern
    *   *Anbieter:* Apple Maps / MapKit
*   **Unwetterwarnungen (über unseren eigenen Dienst)**
    *   *Warum es das gibt:* Amtliche Warnungen stammen von nationalen Wetterdiensten weltweit. Früher kontaktierte jedes Telefon diese Dienste direkt — jeder von ihnen konnte also die Netzwerkadresse Ihres Geräts sehen und wie oft Sie nachsahen — und gemeinsam genutzte öffentliche Feeds mit Anfragegrenzen begannen mit wachsender Nutzerzahl Warnungen zu verlieren. Unser Server holt die amtlichen Daten jetzt einmal, für alle, und hält sie etwa **15 Minuten** vor. Dieselben amtlichen Warnungen, zuverlässiger — und **Ihr Telefon kontaktiert nie die Server einer ausländischen Regierung.**
    *   *Was gesendet wird:* Eine Anfrage an unseren Dienst enthält nur den Länder-/Regionscode, Ihre App-Sprache und höchstens eine Standortzelle, die Ihr Telefon vor dem Senden auf rund **50 km (0,5°)** rundet und die ausschließlich dazu dient, die Antwort auf Warnungen in Ihrer Nähe zu beschränken. Die genaue Prüfung „Bin ich in diesem Warngebiet?“ geschieht **auf Ihrem Telefon** und verlässt es nie. Kein Name, kein Konto und keine Gerätekennung wird angehängt. Wie bei jedem HTTPS-Dienst existieren übliche, kurzlebige Hosting-Protokolle für den Betrieb; sie sind keine Tracking-Funktion und wir verkaufen sie nicht.
    *   *Anbieter:* Amtliche Daten des US National Weather Service (NWS), von MeteoAlarm / MeteoGate (Europa), der China Meteorological Administration (CMA), der Korea Meteorological Administration (KMA), der Japan Meteorological Agency (JMA), von Environment and Climate Change Canada (ECCC), Brasiliens INMET und Australiens Bureau of Meteorology (BoM) — über von uns betriebene Infrastruktur an Ihr Telefon geliefert. Ältere App-Versionen kontaktieren diese Feeds direkt.
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
    *   *Was gesendet wird:* Wenn Sie die Multi-Telefon-Constellation aktivieren, tauschen die teilnehmenden Geräte akustische Metadaten aus, die für ein gemeinsames Bild erforderlich sind — zum Beispiel relative Pose / Ultra-Wideband-Ranging (wo verfügbar), Peilungen, Geräuschetiketten und flüchtigen Untertiteltext. Der Datenverkehr erfolgt Peer-to-Peer **ausschließlich zwischen Telefonen, auf denen Vigilant Ear läuft und die Sie für Constellation verknüpfen**. Telefone ohne die App können diesem Mesh nicht beitreten und diese Metadaten nicht empfangen. Wingdings betreibt kein Cloud-Mesh-Relay für diese Audio-Pipeline.
    *   *Anbieter:* Apple Frameworks (z. B. Network / Nearby Interaction) zwischen Ihren Vigilant Ear-Geräten
*   **In-App-Rechtsdokumente**
    *   *Was gesendet wird:* Standard-Webanfragen, wenn Sie Seiten zu Datenschutzrichtlinien, Nutzungsbedingungen, Support oder Produkt-README in der App öffnen
    *   *Anbieter:* GitHub (Dokumenten-Hosting)
*   **Research Array-Livekarte (nur Ansicht)**
    *   *Was gesendet wird:* Standard-Webanfragen, wenn Sie auf **Map** (Karte) tippen, um das öffentliche Array-Dashboard in Ihrem Browser zu öffnen — wie beim Besuch einer beliebigen Website. Das bloße Ansehen sendet nichts aus Ihrem Tagebuch oder Ihren Erkennungen.
    *   *Anbieter:* Wingdings-Forschungsdienst (Host der Webanwendung)
*   **Research Array (optional — standardmäßig ausgeschaltet)**
    *   *Was gesendet wird:* Nur wenn Sie die Funktion einschalten: kleine Erkennungsberichte, die ausschließlich Metadaten enthalten, wenn ein qualifizierendes Ereignis registriert wird (Zeit, ungefährer Standort, grundlegende Signalmerkmale, App-Version). Siehe **Research Array** unten.
    *   *Anbieter:* Von uns betriebene Infrastruktur (Anwendungs-Host und Datenbankanbieter wie unsere Web- und Postgres-Hosts). Einzelheiten und Grenzen stehen im Abschnitt Research Array.

Wir wählen diese Dienste aus, um Karten-, Wetter-, Musiketiketten-, Kauf-, Multi-Geräte- und (wenn Sie sich aktiv dafür entscheiden) Research-Array-Funktionen bereitzustellen. **Wingdings erhält von diesen Anbietern weder Ihr Mikrofon-Audio noch Ihren kontinuierlichen Standortverlauf oder Ihre Kontaktinformationen.**

## Was Wingdings sammelt

### Keine Remote-Telemetrie oder Diagnose

Vigilant Ear ist so konzipiert, dass die zentralen Funktionen zum Zuhören und für Untertitel auf Ihrem Gerät laufen. Wir sammeln **keine** Remote-Absturzanalysen, keine Werbetelemetrie und keine SDKs für allgemeine Nutzungsanalysen.

Optionale **lokale** Debug-Protokolle können zur Fehlerbehebung auf das Gerät geschrieben werden; sie werden von der App nicht als Telemetrie-Pipeline hochgeladen, und Untertiteltext ist nicht im exportierten Debug-Inhalt enthalten.

**Ausnahme — Research Array und der europäische Wetter-Cache:** Wenn Sie sich für Research Array entscheiden (siehe unten), kann Wingdings die begrenzten Ereignisberichte erhalten, die Sie beitragen möchten. Getrennt davon liest Ihr Telefon europäische Wetterwarnungen aus dem von uns betriebenen Wetter-Cache (oben beschrieben); diese Anfragen enthalten eine grobe ~50-km-Standortzelle und keine persönlichen oder Geräte-Identifikatoren. Keiner der beiden Wege ist Werbeanalyse — beide existieren, damit eine bestimmte Funktion funktioniert, nicht um ein Profil von Ihnen zu erstellen.

## Research Array (optional, standardmäßig ausgeschaltet)

Vigilant Ear kann optional Erkennungsberichte, die **ausschließlich Metadaten** enthalten, zu einem Forschungsarray beitragen, das dabei hilft, ein gemeinsames Bild von Erdbeben und anderen niederfrequenten / infraschallbezogenen Ereignissen aufzubauen. **Diese Funktion ist standardmäßig ausgeschaltet und läuft ausschließlich dann, wenn Sie sie einschalten** — dort, wo der Schalter **Research Array** in den Einstellungen der App erscheint (oder die entsprechende Bezeichnung in Ihrer Sprache), können Sie ihn jederzeit ein- oder ausschalten. Das Ansehen der öffentlichen **Map**-Seite (Karte) des Arrays ist etwas anderes als das Beitragen und teilt nichts aus Ihrem Protokoll.

Wenn sie eingeschaltet ist — und nur wenn Ihr Gerät ein **qualifizierendes** Ereignis registriert (zum Beispiel einen ausreichend starken nicht-lokalen Infraschall- oder seismisch bezogenen Kandidaten oder bestimmte bebenbezogene Audit-Signale, wo dieser Weg aktiviert ist) —, kann die App einen kleinen Bericht senden, der Folgendes enthält:

- die Zeit des Ereignisses (anhand der Uhr des Geräts in einer globalen Zeitdomäne)
- einen ungefähren Standort, gerundet auf etwa **1 Kilometer** (nicht Ihre genaue Adresse und keine kontinuierliche Spur)
- grundlegende Merkmale des Ereignisses, etwa den Sensorkanal, ob der Pfad über Luft oder Boden verläuft, die Spitzenfrequenz sofern zutreffend und ein dimensionsloses Stärkemaß (zum Beispiel STA/LTA)
- die Art des Berichts (zum Beispiel Infraschall-Einsatz, seismischer Kandidat oder Bestätigungs-Audit für ein Beben)
- die App-Version

**Was für Research Array niemals gesendet wird:** Audio, Wellenformen, Aufnahmen, Transkripte, Untertitel, Kontakte, Kennungen, die die App erfindet, um *Sie* als Person oder Installation zu kennzeichnen, Ihre genaue GPS-Position (über die oben genannte grobe Rundung hinaus) oder irgendeine kontinuierliche Aufzeichnung darüber, wohin Sie gehen. Audio verlässt Ihr Gerät niemals — weder zu diesem noch zu einem anderen Zweck.

### Wohin die Berichte gehen

Berichte werden ausschließlich über einen **verschlüsselten Kanal (HTTPS)** an einen von uns betriebenen Wingdings-Forschungsdienst gesendet (Anwendungs-Host und Datenbank). Die App hängt **keine Forschungs-ID pro Nutzer oder pro Gerät** und **keine Apple-Account-Kennung** an die Nutzdaten an. Ein gemeinsames Anwendungsgeheimnis kann verwendet werden, damit nur unsere App in den Dienst schreiben kann; dieses Geheimnis ist **keine** personenbezogene Kennung. Standardmäßige Hosting- und Sicherheitsprotokolle (zum Beispiel kurzlebige Netzwerk-Metadaten, die für den Betrieb des Dienstes verwendet werden) können wie bei jedem HTTPS-Dienst existieren; sie sind keine Produktfunktion, um Sie zu verfolgen, und wir verkaufen sie nicht.

Das Ausschalten von **Research Array** stoppt **alle künftigen** Berichte sofort. Es löscht **nicht** die bereits gesendeten Berichte. Da die Berichte **keine Kennung pro Nutzer oder pro Gerät** tragen, können wir „alles, was Sie beigetragen haben“ nachträglich weder nachschlagen noch löschen — wir haben keine verlässliche Möglichkeit zu wissen, welche früheren Berichte von Ihnen stammen. Das ist beabsichtigt: Es verhindert, dass der Forschungsstrom zu einer persönlichen Historie unter unserer Kontrolle wird.

## Was wir nicht tun

Wir tun **nicht**:

- Ihre persönlichen Informationen verkaufen oder vermieten
- Audioaufnahmen der Umgebung auf unseren Servern speichern
- Werbenetzwerke, anwendungsübergreifende Tracker oder Verhaltensprofil-SDKs ausführen
- Ihren kontinuierlichen Standortverlauf zu Wingdings hochladen
- Rohes Mikrofon-Audio zur Cloud-Sprach- oder Geräuscherkennung hochladen
- Research Array für die Kernfunktionen der App voraussetzen — es ist optional und standardmäßig ausgeschaltet

## Ihre Entscheidungen & Kontrollen

Sie können:

- **Berechtigungen widerrufen** (Mikrofon, Standort, Kamera, Benachrichtigungen, Spracherkennung) in den iOS-Einstellungen
- **Die Shazam-Musikidentifikation deaktivieren** unter Power Pack+ / Einstellungen
- **Einzelne Warnkategorien ausschalten** (Sirenen, Wetter, Türklingeln, Baby usw.)
- **Das Zuhören im Hintergrund beenden**, wenn alle Warnkategorien deaktiviert sind
- **Constellation auslassen**, sodass keine Mesh-Metadaten mit anderen Telefonen geteilt werden, auf denen Vigilant Ear läuft. Telefone ohne die App können diese Metadaten nicht teilen.
- **Research Array ausgeschaltet lassen** (Standard) oder es jederzeit in den Einstellungen ausschalten, um keine Berichte mehr beizutragen
- **Die Feature-Spielwiese verwenden**, um Warnungen und Funktionen lokal mit einem klaren PREVIEW-Wasserzeichen in der Vorschau anzuzeigen, ohne einen echten Notfall zu implizieren

## Plattform-Richtlinien

Vigilant Ear befolgt die Datenschutzanforderungen des Apple App Store und Apples Richtlinien für Apps, die Menschen mit Barrierefreiheitsbedürfnissen dienen. Wir aktualisieren diese Richtlinie, wenn sich unsere Praktiken oder Plattformverpflichtungen ändern.

## Änderungen an dieser Richtlinie

Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wesentliche Änderungen werden durch Aktualisierung des **Datums des Inkrafttretens** oben auf dieser Seite angezeigt.

## Kontaktiere uns

Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns unter:

**E-Mail:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear ist mit Liebe und Respekt für die Gemeinschaft der Gehörlosen, Schwerhörigen und CODAs gebaut. Ihr Vertrauen ist uns wichtig.

*Vigilant Ear ist ein mit Sorgfalt entwickeltes Hilfsmittel zur Barrierefreiheit. Bitte nutzen Sie es verantwortungsbewusst.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Alle Rechte vorbehalten.<br />
  Patent angemeldet
</p>
