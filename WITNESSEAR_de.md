# Witness Ear — optionales 24-Stunden-Klangtagebuch & PDF-Bericht

**Witness Ear** ist eine optionale Funktion von **Vigilant Ear**. Sie führt ein kurzes Protokoll auf dem Gerät über die Geräusche, die die App um Sie herum klassifiziert hat, damit Sie einen einfachen **zusammenfassenden PDF-Bericht** exportieren können, wenn Sie eine schriftliche Aufzeichnung benötigen — nicht nur eine Live-Karte.  Es protokolliert Klang-**Ereignisse**, kein Audio und keine Gespräche.

Sie ist **standardmäßig ausgeschaltet**, **kostenlos** und so gestaltet, dass sie nicht im Weg ist, bis Sie sie brauchen.

---

## Was es ist

Während Vigilant Ear überwacht, klassifiziert es bereits Umgebungsgeräusche (Sirenen, Alarme, Fahrzeuge, sprachnahe Kategorien und mehr). Witness Ear macht eine einzige zusätzliche Sache, wenn Sie es einschalten:

- Es **speichert aktuelle Klassifizierungen** auf Ihrem Telefon für bis zu **24 Stunden**.
- Sie können diese Ereignisse als **PDF Summary Report** **exportieren**, um sie über Mail, Files, AirDrop usw. zu teilen.
- Sie können das Protokoll jederzeit über das Papierkorb-Bedienelement **löschen**. Das Ausschalten von Witness Ear **pausiert** die Protokollierung lediglich — bereits Aufgezeichnetes bleibt **erhalten** (und läuft weiterhin nach 24 Stunden ab), sodass Sie die Funktion eine Weile aussetzen können, ohne den Tag zu verlieren.

Es gibt **keinen separaten „Witness Ear-App-Modus“** und keine eigene Anzeige. Die Steuerung befindet sich unter **Preferences → SOUND JOURNAL**: ein Schalter **Witness Ear** (mit einem kleinen **Papierkorb**-Bedienelement daneben, solange das Protokoll Ereignisse enthält) sowie eine Zeile **PDF Summary Report** mit **Export**.

Der Bericht listet Angaben wie **Zeit**, **Konfidenz**, **Spitzenpegel (dBFS)**, **Richtung, sofern gemessen**, **welches Telefon es gehört hat** (dieses Gerät oder ein verknüpfter Constellation-Peer) und das **Geräuschetikett**, gruppiert nach Geräuschfamilie. Es ist ein **Hilfsmittel für Muster und Aufmerksamkeit**, kein zertifizierter Schallpegelmesser.

---

## Warum Sie es brauchen könnten

Ein kurzes schriftliches Protokoll hilft, wenn Erinnerung und Live-Punkte nicht ausreichen:

| Situation | Wie Witness Ear hilft |
|-----------|------------------------|
| **Gespräch mit Nachbarn / HOA / Vermieter** | Eine datierte Liste dessen, *was die App wann etikettiert hat*, über eine Nacht oder einen Tag — als Gesprächsgrundlage, nicht als gerichtsfeste Messtechnik. |
| **„War das jede Nacht oder nur einmal?“** | Fortlaufende 24 Stunden (gleitendes Fenster), damit Sie die Aktualität prüfen können, ohne ein dauerhaftes Archiv zu führen. |
| **Mehrtelefon-Haushalt (Constellation)** | Verknüpfte Telefone teilen, was sie über Ihr **lokales Mesh** hören. Geteilte Erkennungen können ebenfalls im Tagebuch landen, sodass der Bericht zeigen kann, **welches Telefon** ein Ereignis gehört hat — nicht nur dieses Mikrofon. |
| **Barrierefreiheit / Aufmerksamkeitsprotokoll** | Ein einfacher Export, den Sie nach einer lauten Phase an ein Familienmitglied oder einen Unterstützer senden können. |

Wenn Sie nie ein PDF brauchen, lassen Sie Witness Ear **aus**. Erkennung und Warnungen funktionieren genau wie zuvor.

---

## So verwenden Sie es (iPhone / iPad)

### 1. Einschalten

1. Öffnen Sie **Preferences** (Glocke / Customizations-Pfad vom Aktionsfächer oder Menü).
2. Suchen Sie den Abschnitt **SOUND JOURNAL**.
3. Schalten Sie **Witness Ear** **ein**.  
   - Tippen Sie auf das **ⓘ** neben dem Namen für die kurze In-App-Erklärung.
4. Lassen Sie Vigilant Ear wie gewohnt überwachen (Mikrofon aktiv für die Geräusche, die Ihnen wichtig sind).

Solange es eingeschaltet ist, werden Klassifizierungen, die den Konfidenz-Schwellenwert der App erreichen, an ein **lokales** Protokoll angehängt (mit einer kurzen Pause pro Etikett, damit die Datei nicht mit Duplikaten überflutet wird).

### 2. PDF exportieren

1. Bleiben Sie in **SOUND JOURNAL**.
2. Tippen Sie in der Zeile **PDF Summary Report** auf **Export**.  
   - Tippen Sie auf **ⓘ** in dieser Zeile, um zu sehen, was das PDF enthält.
3. Warten Sie auf das System-**Freigabeblatt** und speichern oder senden Sie die Datei (`WitnessEar-Report-….pdf`).

Wenn das Protokoll leer ist, meldet Export, dass in den letzten 24 Stunden keine Ereignisse vorliegen — schalten Sie Witness Ear ein und warten Sie, bis der Klassifizierer mindestens einmal ausgelöst hat.

### 3. Protokoll pausieren oder löschen

- **Pausieren:** Schalten Sie den Schalter **Witness Ear** aus. Die Protokollierung stoppt; bereits Aufgezeichnetes bleibt **erhalten** und läuft weiterhin nach 24 Stunden ab. Wieder einschalten zum Fortsetzen.
- **Löschen:** Tippen Sie auf den kleinen **roten Papierkorb** in der Zeile **Witness Ear** (erscheint nur, solange das Protokoll Ereignisse enthält). Es startet einen kurzen Countdown **Cancel (5)…(1)** — erneut tippen zum Abbrechen, oder abwarten, um alles sofort zu löschen.

### 4. Constellation (optional)

Wenn **Constellation** mit anderen Telefonen in Ihrem Mesh verknüpft ist:

- Telefone **teilen bereits viele nicht-sprachliche Erkennungen** für die Live-Karte und das Mehrtelefon-Bild.
- Mit Witness Ear **ein** können **peer-geteilte** Erkennungen in **das Tagebuch dieses Telefons übernommen** werden und im PDF unter **Heard by** (Peer-Name) vs. **this phone** erscheinen.

Jedes Telefon behält **seine eigene** Tagebuchdatei auf dem Gerät. Es gibt **kein Cloud-Witness-Ear-Archiv**. Für das vollständigste Mehrtelefon-PDF auf einem Gerät sollte dieses Gerät verknüpft und protokollierend gewesen sein, während die anderen geteilt haben.

---

## Was das PDF enthält (Beispielaufbau)

Das genaue Layout kann sich weiterentwickeln; die Absicht ist ein lesbarer Bericht als PDF oder auf bedrucktem Papier.

```
WITNESS EAR — 24-Stunden-Klangtagebuch
Erstellt 7. Aug., 09:30  ·  Fenster 6. Aug., 10:00 – 7. Aug., 09:30
Quellen: dieses Telefon + Constellation-Peers.  Wiederholungen innerhalb von 30 s werden einmal protokolliert.

[Zusammenfassungs-Kacheln]  Klassifizierer-Samples · Episoden (60-s-Lücke) · Geräuschgruppen · abgedeckte Spanne
[Aktivität nach Stunde]     Balkendiagramm der Samples pro Stunde
[Geräuschgruppen]           Roh-Etiketten nach Profilfamilie zusammengeführt (Music, Vehicles, …)
[Standorte]                 L1, L2, … — Positionen gruppiert innerhalb von ~110 m, mit Genauigkeitshinweisen
[Geräte]                    P1 (dieses Telefon, Modell · iOS · App-Build), P2 … (verknüpfte Peers + Modell)

Episoden
#   Start         Dauer    Samples   Peak     Geräusche           Von
1   7. Aug., 01:44 10m 40s 17        −12 dB   Music, Animals +4   P1, P2

Episoden-Quellen (älteste zuerst)
Zeit        Konf   dBFS   Dir    Von  Geräusch
08:12:03    87%    −21    —      P1   Emergency & alarms · Siren
08:12:04    71%    −25    207°   P2   Emergency & alarms · Siren
08:14:10    64%    −34    —      P1   Household & speech · Knock

Methode & Grenzen …

Integrität
SHA-256 der N in diesem Fenster exportierten Tagebuchzeilen (JSON, sortierte Schlüssel):
a1b2c3… (vollständige Hex-Prüfsumme)
Standortgenauigkeit / simulierter-GPS-Flags / Gerätezustandsnotizen / exportierendes Gerät / Zeitbasis…

Bestätigung

Ich, _______________, bestätige, dass … Unterschrift-/Datumszeilen zum Ausfüllen mit Tinte nach dem Druck.
```

Jede Seite trägt ein dezentes Wingdings-Wasserzeichen hinter dem Inhalt und eine Fußzeile mit dem Wingdings-Zeichen, „© 2026 Wingdings, Inc. All rights reserved. · Patent Pending“ und der Seitenzahl — eine einfache erste Prüfung, ob ein PDF, das man Ihnen übergibt, wie ein echter Export aussieht.

**So lesen Sie es**

- **Klassifizierer-Samples** — Anzahl gespeicherter Fenster (nicht „Anzahl der Sirenen in der Stadt“).
- **Unterscheidbare Episoden** — Folgen von Samples, getrennt durch etwa eine Minute Ruhe; ein langes, durchgehendes Geräusch kann viele Samples, aber wenige Episoden sein.
- **Conf** — Modellkonfidenz (0–100 %), **nicht** Dezibel SPL.
- **dBFS** — Spitzenpegel des Mikrofons nahe dem Ereignis, relativ zur digitalen Vollaussteuerung dieses Telefons (0 = das Lauteste, was das Mikrofon aufnehmen kann). Gut zum Vergleichen von Momenten; **kein** kalibriertes dB SPL.
- **Dir** — absolute Kompassrichtung des Geräuschs (0° = Norden), angezeigt **nur**, wenn eine Zwei-Mikrofon-Lösung tatsächlich eine gemessen hat; „—“ bedeutet nicht gemessen. Niemals aus der Ausrichtung des Telefons abgeleitet.
- **By** — Gerätekennung aus dem Abschnitt **Devices** (P1 = das exportierende Telefon, P2… = verknüpfte Peers), passend zu den L-IDs in **Locations**.
- **Integritäts-Hash** — Fingerabdruck des geräteinternen Tagebuchs, aus dem das PDF gebaut wurde; hilft, nachträgliche Änderungen der Ereignistabelle nach dem Export zu erkennen.
- **Bestätigung** — optionaler menschlicher Unterschriftsblock nach dem Druck (Sie bestätigen Besitz/Standort).

---

## Datenschutz

| Thema | Richtlinie |
|-------|------------|
| **Standard** | **Aus.** Kein Witness-Ear-Protokoll, bis Sie es aktivieren. |
| **Wo die Daten liegen** | Nur auf **diesem Gerät**, in der privaten **Application Support**-Sandbox der App (siehe unten). |
| **Was gespeichert wird** | Klassifizierungs-Metadaten: Zeit, Etikett, Konfidenz, optional Standort/Richtung, falls die App sie bereits hat, optionale Peer-ID, wenn ein Mesh-Ereignis übernommen wird. **Kein** durchgehendes Audio der Tagesstrecke für das Tagebuch und keine transkribierten (oder übersetzten) gesprochenen Wörter. |
| **Aufbewahrung** | **Gleitende 24 Stunden.** Ältere Zeilen werden bereinigt. |
| **Wenn Sie es ausschalten** | Die Protokollierung **pausiert**; gespeicherte Einträge bleiben erhalten und laufen weiterhin nach 24 Stunden ab. |
| **Löschsteuerung** | Papierkorb in der Witness-Ear-Zeile (sichtbar, solange das Protokoll Ereignisse enthält), mit abbrechbarem Countdown. |
| **Upload** | Witness Ear lädt das Tagebuch **nicht** zu Wingdings oder in eine Witness-Ear-Cloud hoch. |
| **Export** | **Sie** entscheiden, das PDF zu teilen (Mail, Files, AirDrop usw.). Einmal geteilt, liegt diese Kopie außerhalb der Kontrolle der App. |
| **Constellation** | Mesh-Sharing von Live-Erkennungen ist eine **lokale Netzwerk**-Produktfunktion zwischen Ihren verknüpften Telefonen. Übernommene Tagebuchzeilen bleiben auf dem Telefon, das sie empfangen hat, bis Sie exportieren oder löschen. |
| **Kinder / sensibler Gebrauch** | Verwenden Sie das Protokoll nicht, um Personen zu identifizieren oder zu verfolgen. Es dient **Orten, Zeiten und Geräuschkategorien**, nicht persönlichen Dossiers. |

### Was „Application Support“ bedeutet

**Application Support** ist ein privater Ordner, der nur Vigilant Ear auf diesem Telefon gehört. Es ist **kein** Cloud-Laufwerk, **kein** öffentliches „Files“-Album und **keine** E-Mail an den Support. Andere Apps können ihn unter normalen iOS-Regeln nicht lesen.

Auf einem iPhone mit **Gerätecode** (oder Biometrie) **verschlüsselt iOS App-Daten im Ruhezustand** mit hardwaregestütztem Schutz. Witness Ear lädt das Tagebuch **nicht** hoch und fügt **keine** zweite, app-verwaltete Verschlüsselungsschicht darüber. Wenn das Gerät gesperrt ist, folgt der Zugriff den standardmäßigen Datenschutzklassen von Apple (typischerweise geschützt bis zur ersten Entsperrung nach dem Boot, sofern keine strengeren Einstellungen gelten). Backups (verschlüsseltes Computer-Backup / iCloud-Backup-Regeln) sind etwas anderes als „auf der Festplatte des Telefons liegen“.

---

## Verwendung dieses Berichts bei Streitigkeiten

Witness Ear kann ein **authentifiziertes digitales Register akustischer Metadaten** erzeugen (was die geräteinternen Klassifizierer etikettiert haben, wann und welches Telefon beigetragen hat) — nützlich für **informelle** Gespräche mit Nachbarn, Vermietern, HOAs oder Mediatoren. Es ist **kein** Ersatz für eine zertifizierte Klasse-1/2-Messung oder rechtlichen Beistand.

**Praktische Schritte:**

1. Lassen Sie **Witness Ear ein** für den Zeitraum, der Sie interessiert (bis zu 24 Stunden Aufbewahrung).
2. **Exportieren** Sie das PDF; bewahren Sie die Originaldatei auf, ohne sie über einen Editor zu speichern, der PDFs neu schreibt.
3. **Drucken** Sie eine Kopie, wenn eine Papier-Spur hilft; füllen Sie den Block **Bestätigung** (Name, Ort, Unterschrift, Datum) mit Tinte aus.
4. Verweisen Sie Empfänger auf den Abschnitt **Integrity**: den **SHA-256**-Fingerabdruck der Tagebuchzeilen. Ein späterer erneuter Export aus dem **selben unveränderten geräteinternen Protokoll** sollte übereinstimmen; das Bearbeiten der Ereignistabelle in einem PDF-Editor aktualisiert diesen Hash nicht korrekt, es sei denn, der Angreifer baut auch aus passenden Quelldaten neu.
5. Seien Sie klar: Dies sind **app-generierte Metadaten**, die Zeit ist die **Geräteuhr**, Pegel sind **kein rechtliches SPL**, und Etiketten können falsch sein.
6. Wir betreiben derzeit **keine** öffentliche Website „PDF hochladen, um Signatur zu prüfen“. Der Hash ist eine **in sich geschlossene Integritätsnotiz**, keine Wingdings-Cloud-Bestätigung.

**Erfinden Sie keine** Ereignisse, schneiden Sie den Integritätsblock nicht ab und behaupten Sie nicht, das PDF sei eine zertifizierte Lärmmessung.

---

## Haftungsausschlüsse

1. **Kein zertifiziertes Messgerät.** Telefonmikrofone sind **keine** Klasse-1/2-Schallpegelmesser. Konfidenzwerte und zugehörige Pegel sind **relativ**, unkalibriert und **dürfen nicht** als absolute dBA/dBC für Durchsetzung, Bußgelder oder rechtliche Metrologie dargestellt werden. Der Bericht kann dennoch als **authentifiziertes digitales Register akustischer Metadaten** nützlich sein, wenn er ehrlich verwendet wird.

2. **Keine Vollständigkeitsgarantie.** Das Protokoll enthält nur, was die **geräteinternen Klassifizierer** etikettiert haben, während die Überwachung aktiv und Witness Ear **ein** war. Ruhige Phasen, stummgeschaltetes Mikrofon, nicht laufende App, niedrige Konfidenz oder drosselte Duplikate können Lücken hinterlassen. Das Fehlen einer Zeile ist **kein** Beweis, dass ein Geräusch nie stattgefunden hat.

3. **Etiketten können falsch sein.** Machine-Learning-Engines können fehlklassifizieren. Eine „Siren“-Zeile bedeutet die beste Vermutung des Modells in diesem Moment — kein garantiertes Einsatzfahrzeug. Behandeln Sie das PDF als **unterstützende Notizen**, nicht als Bodenwahrheit.

4. **Kein Sicherheitsgerät.** Vigilant Ear / Witness Ear sind **Aufmerksamkeits- und Barrierefreiheitshilfen**. Sie ersetzen weder menschliches Urteilsvermögen noch zertifizierte Alarme oder offizielle Notdienste.

5. **Beweise und Streitigkeiten.** Wenn Sie ein PDF mit einem Vermieter, einer HOA oder einer Behörde teilen, seien Sie ehrlich darüber, was es ist: ein **app-generiertes Klassifizierungsprotokoll**, aufbewahrungsbegrenzt, vom Nutzer exportiert, mit geräteinternem Integritäts-Hash. Ändern Sie die Ereignistabelle nicht und erfinden Sie keine Ereignisse. Wir geben keine Rechtsberatung; lokale Regeln zu Aufzeichnungen und Beweisen variieren — im Zweifel fragen Sie eine qualifizierte Fachperson.

6. **Mehrtelefon-Berichte.** Peer-Zeilen hängen von Constellation-Konnektivität und Sharing-Regeln ab (z. B. nicht-sprachliche Quellen). Uhren und GPS von Consumer-Telefonen haben Fehler; Mehrtelefon-Übereinstimmung „in derselben Nacht“ ist nützlicher Kontext, keine Labor-Zeitsynchronisation.

7. **Zeitbasis.** Zeitstempel verwenden die **Gerätewanduhr**, die der Nutzer ändern kann. Das PDF vermerkt dies; im aktuellen Produkt wird nicht automatisch gegen Netzwerkzeit geprüft.

8. **Ihre Verantwortung beim Teilen.** Sobald Sie einen Bericht per AirDrop oder E-Mail senden, können Empfänger Kopien behalten. Exportieren Sie nur, was Sie teilen wollen.

---

## Plattformhinweise

- **iOS / iPadOS:** Die Witness-Ear-Steuerungen erscheinen unter **Preferences → SOUND JOURNAL** wie oben beschrieben.

---

## Gut zu wissen

- Witness Ear **aus** zu lassen kostet nichts an Telefon-CPU oder Akkunutzung.
- Es **einzuschalten** fügt leichten lokalen Speicher und gelegentliche Schreibvorgänge von Ereignissen hinzu, um den Bericht aufzubauen.
- **Export** erzeugt das PDF, ohne ein separates Benutzermenü zu erfordern.
- Für alltägliche Warnungen und Richtung nutzen Sie die Hauptkarte und HUDs von Vigilant Ear; nutzen Sie Witness Ear, wenn Sie einen **tragbaren schriftlichen Snapshot** der Klangereignisse des letzten Tages brauchen.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
