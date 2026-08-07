# Witness Ear — optionales 24-Stunden-Klangtagebuch & PDF-Bericht

**Witness Ear** ist eine optionale Funktion von **Vigilant Ear**. Sie führt ein kurzes Protokoll auf dem Gerät über die Geräusche, die die App um Sie herum klassifiziert hat, damit Sie einen einfachen **zusammenfassenden PDF-Bericht** exportieren können, wenn Sie eine schriftliche Aufzeichnung benötigen — nicht nur eine Live-Karte.

Sie ist **standardmäßig ausgeschaltet**, **kostenlos** und so gestaltet, dass sie nicht im Weg ist, bis Sie sie brauchen.

---

## Was es ist

Während Vigilant Ear überwacht, klassifiziert es bereits Umgebungsgeräusche (Sirenen, Alarme, Fahrzeuge, sprachnahe Kategorien und mehr). Witness Ear macht eine einzige zusätzliche Sache, wenn Sie es einschalten:

- Es **speichert aktuelle Klassifizierungen** auf diesem Telefon für bis zu **24 Stunden**.
- Sie können diese Ereignisse als **PDF Summary Report** (zusammenfassenden PDF-Bericht) **exportieren** (teilen über Mail, Dateien, AirDrop usw.).
- Sie können das Protokoll jederzeit über das Papierkorb-Bedienelement **löschen**. Das Ausschalten von Witness Ear **pausiert** die Protokollierung lediglich — bereits Aufgezeichnetes bleibt erhalten (und läuft weiterhin nach 24 Stunden ab), sodass Sie die Funktion eine Weile aussetzen können, ohne den Tag zu verlieren.

Einen separaten „Witness Ear-App-Modus“ oder ein vollständiges Dashboard gibt es **noch nicht**. Die Steuerung befindet sich unter **Preferences → SOUND JOURNAL** (Einstellungen → Klangtagebuch): ein Schalter **Witness Ear** (mit einem kleinen **Papierkorb**-Bedienelement daneben, solange das Protokoll Ereignisse enthält) sowie eine Zeile **PDF Summary Report** mit **Export**.

Der Bericht listet Angaben wie **Zeit**, **Konfidenz**, **Spitzenpegel (dBFS)**, **Richtung, sofern gemessen**, **welches Telefon es gehört hat** (dieses Gerät oder ein verknüpfter Constellation-Peer) und das **Geräuschetikett**, gruppiert nach Geräuschfamilie. Es ist ein **Hilfsmittel für Muster und Aufmerksamkeit**, kein zertifizierter Schallpegelmesser.

---

## Warum Sie es brauchen könnten

Ein kurzes schriftliches Protokoll hilft, wenn Erinnerung und Live-Punkte nicht ausreichen:

| Situation | Wie Witness Ear hilft |
|-----------|------------------------|
| **Gespräch mit Nachbarn / Eigentümergemeinschaft / Vermieter** | Eine datierte Liste dessen, *was die App wann etikettiert hat*, über eine Nacht oder einen Tag — als Gesprächsgrundlage, nicht als gerichtsfeste Messtechnik. |
| **„War das jede Nacht oder nur einmal?“** | Fortlaufende 24 Stunden, damit Sie die Aktualität prüfen können, ohne ein dauerhaftes Archiv zu führen. |
| **Haushalt mit mehreren Telefonen (Constellation)** | Verknüpfte Telefone teilen, was sie hören, über Ihr **lokales Mesh**. Geteilte Erkennungen können ebenfalls im Tagebuch landen, sodass der Bericht zeigen kann, **welches Telefon** ein Ereignis gehört hat — nicht nur dieses Mikrofon. |
| **Protokoll für Barrierefreiheit / Aufmerksamkeit** | Ein einfacher Export, den Sie nach einer lauten Phase an ein Familienmitglied oder eine Vertrauensperson senden können. |
| **Ihre eigenen Notizen** | Exportieren, offline kommentieren, das Protokoll danach verwerfen. |

Wenn Sie nie ein PDF brauchen, lassen Sie Witness Ear **ausgeschaltet**. Erkennung und Warnungen funktionieren weiterhin genau wie zuvor.

---

## So verwenden Sie es (iPhone / iPad)

### 1. Einschalten

1. Öffnen Sie die **Einstellungen** (Glocke / Anpassungen über den Aktionsfächer oder das Menü).
2. Suchen Sie den Abschnitt **SOUND JOURNAL** (Klangtagebuch).
3. Schalten Sie **Witness Ear** **ein**.  
   - Tippen Sie auf das **ⓘ** neben dem Namen für die kurze Erklärung in der App.
4. Lassen Sie Vigilant Ear wie gewohnt überwachen (Mikrofon aktiv für die Geräusche, die Ihnen wichtig sind).

Solange die Funktion eingeschaltet ist, werden Klassifizierungen, die die Konfidenzschwelle der App erreichen, an ein **lokales** Protokoll angehängt (mit einem kurzen Mindestabstand je Etikett, damit die Datei nicht mit Duplikaten überflutet wird).

### 2. Ein PDF exportieren

1. Bleiben Sie in **SOUND JOURNAL**.
2. Tippen Sie in der Zeile **PDF Summary Report** auf **Export**.  
   - Tippen Sie auf das **ⓘ** dieser Zeile, um zu erfahren, was das PDF enthält.
3. Warten Sie auf das systemeigene **Teilen-Menü** und speichern oder senden Sie dann die Datei (`WitnessEar-Report-….pdf`).

Wenn das Protokoll leer ist, meldet der Export, dass es in den letzten 24 Stunden keine Ereignisse gibt — schalten Sie Witness Ear ein und warten Sie, bis der Klassifizierer mindestens einmal ausgelöst hat.

### 3. Das Protokoll pausieren oder löschen

- **Pausieren:** Schalten Sie den Schalter **Witness Ear** aus. Die Protokollierung stoppt; bereits Aufgezeichnetes **bleibt erhalten** und läuft weiterhin nach 24 Stunden ab. Schalten Sie ihn wieder ein, um fortzufahren.
- **Löschen:** Tippen Sie auf den kleinen **roten Papierkorb** in der Zeile **Witness Ear** (er erscheint nur, solange das Protokoll Ereignisse enthält). Damit startet ein kurzer Countdown **Cancel (5)…(1)** (Abbrechen) — tippen Sie erneut, um abzubrechen, oder lassen Sie ihn ablaufen, um alles sofort zu löschen.

### 4. Constellation (optional)

Wenn **Constellation** mit anderen Telefonen in Ihrem Mesh verknüpft ist:

- Die Telefone **teilen bereits viele nicht-sprachliche Erkennungen** für die Live-Karte und das Mehrtelefon-Bild.
- Bei **eingeschaltetem** Witness Ear können **von Peers geteilte** Erkennungen **in das Tagebuch dieses Telefons übernommen** werden und im PDF unter **Heard by** (gehört von: Peer-Name) gegenüber **this phone** (dieses Telefon) erscheinen.

Jedes Telefon behält weiterhin **seine eigene** Tagebuchdatei auf dem Gerät. **Ein Witness Ear-Cloud-Archiv gibt es nicht.** Für das vollständigste Mehrtelefon-PDF auf einem Gerät muss dieses Gerät verknüpft gewesen sein und protokolliert haben, während die anderen Daten geteilt haben.

---

## Was das PDF enthält (Beispielform)

Das genaue Layout kann sich weiterentwickeln; das Ziel ist Lesbarkeit auf Papier und in Mail. (Der Bericht selbst wird in englischer Sprache erzeugt; das Beispiel unten ist wortgetreu wiedergegeben.)

```
WITNESS EAR — 24-Hour Sound Journal
Generated Aug 7, 09:30  ·  Window Aug 6, 10:00 – Aug 7, 09:30
Sources: this phone + Constellation peers.  Repeats within 30 s are logged once.

[summary tiles]  classifier samples · episodes (60 s gap) · sound groups · span covered
[Activity by hour]      bar chart of samples per hour
[Sound groups]          raw labels coalesced by profile family (Music, Vehicles, …)
[Locations]             L1, L2, … — positions grouped within ~110 m, with accuracy notes
[Devices]               P1 (this phone, model · iOS · app build), P2 … (linked peers + model)

Episodes
#   Start         Length   Samples   Peak     Sounds              By
1   Aug 7, 01:44  10m 40s  17        −12 dB   Music, Animals +4   P1, P2

Episode Source Feeds (oldest first)
Time        Conf   dBFS   Dir    By   Sound
08:12:03    87%    −21    —      P1   Emergency & alarms · Siren
08:12:04    71%    −25    207°   P2   Emergency & alarms · Siren
08:14:10    64%    −34    —      P1   Household & speech · Knock

Method & Limits …

Integrity
SHA-256 of the N journal rows exported in this window (JSON, sorted keys):
a1b2c3… (full hex digest)
Location accuracy / simulated-GPS flags / device-state notes / exporting device / time base…

Attestation
I, _______________, attest that … Signature / Date lines for ink after print.
```

Jede Seite trägt hinter dem Inhalt ein blasses Wingdings-Wasserzeichen und eine Fußzeile mit dem Wingdings-Zeichen, dem Vermerk „© 2026 Wingdings, Inc. All rights reserved. · Patent Pending“ und der Seitenzahl — eine einfache erste Prüfung, ob ein PDF, das Ihnen jemand aushändigt, wie ein echter Export aussieht.

**So lesen Sie ihn**

- **Classifier samples** (Klassifizierer-Stichproben) — Anzahl der gespeicherten Zeitfenster (nicht „Anzahl der Sirenen in der Stadt“).
- **Distinct episodes** (eigenständige Episoden) — Folgen von Stichproben, die durch etwa eine Minute Stille getrennt sind; ein langes durchgehendes Geräusch kann viele Stichproben, aber wenige Episoden ergeben.
- **Conf** — Modellkonfidenz (0–100 %), **keine** Dezibel SPL.
- **dBFS** — Spitzenpegel des Mikrofons nahe dem Ereignis, relativ zur digitalen Vollaussteuerung dieses Telefons (0 = das Lauteste, was das Mikrofon aufnehmen kann). Gut zum Vergleichen von Momenten; **keine** kalibrierten dB SPL.
- **Dir** — der absolute Kompasskurs des Geräuschs (0° = Norden), wird **nur** angezeigt, wenn eine Zwei-Mikrofon-Lösung ihn tatsächlich gemessen hat; „—“ bedeutet nicht gemessen. Wird niemals daraus abgeleitet, wohin das Telefon gerichtet war.
- **By** — Gerätekennung aus dem Abschnitt **Devices** (P1 = das exportierende Telefon, P2… = verknüpfte Peers), passend zu den L-Kennungen unter **Locations**.
- **Integrity hash** (Integritäts-Hash) — Fingerabdruck des Tagebuchs auf dem Gerät, aus dem das PDF erstellt wurde; hilft, nachträgliche Änderungen an der Ereignistabelle zu erkennen.
- **Attestation** (Erklärung) — optionaler Unterschriftenblock nach dem Ausdruck (Sie bürgen für Besitz/Ort).

---

## Datenschutz

| Thema | Regelung |
|-------|--------|
| **Standard** | **Aus.** Kein Witness Ear-Protokoll, bis Sie sich aktiv dafür entscheiden. |
| **Wo die Daten liegen** | Nur auf **diesem Gerät**, in der privaten **Application Support**-Sandbox der App (siehe unten). |
| **Was gespeichert wird** | Klassifizierungs-Metadaten: Zeit, Etikett, Konfidenz, optional Standort/Kurs, sofern die App sie ohnehin hat, optional eine Peer-Kennung, wenn ein Mesh-Ereignis übernommen wird. **Keine** durchgehende Audioaufnahme des Tages für das Tagebuch. |
| **Aufbewahrung** | **Fortlaufende 24 Stunden.** Ältere Zeilen werden entfernt. |
| **Wenn Sie es ausschalten** | Die Protokollierung **pausiert**; gespeicherte Einträge bleiben erhalten und laufen weiterhin nach 24 Stunden ab. |
| **Löschfunktion** | Papierkorb in der Witness Ear-Zeile (sichtbar, solange das Protokoll Ereignisse enthält), mit abbrechbarem Countdown. |
| **Upload** | Witness Ear lädt das Tagebuch **nicht** zu Wingdings oder in eine Witness Ear-Cloud hoch. |
| **Export** | **Sie** entscheiden, das PDF zu teilen (Mail, Dateien, AirDrop usw.). Nach dem Teilen liegt diese Kopie außerhalb der Kontrolle der App. |
| **Constellation** | Das Mesh-Teilen von Live-Erkennungen ist eine Produktfunktion im **lokalen Netzwerk** zwischen Ihren verknüpften Telefonen. Übernommene Tagebuchzeilen bleiben trotzdem auf dem Telefon, das sie empfangen hat, bis Sie exportieren oder löschen. |
| **Kinder / sensible Nutzung** | Verwenden Sie das Protokoll nicht, um Personen zu identifizieren oder zu verfolgen. Es dient **Orten, Zeiten und Geräuschkategorien**, nicht persönlichen Dossiers. |

### Was „Application Support“ bedeutet

**Application Support** ist ein privater Ordner, der auf diesem Telefon nur Vigilant Ear gehört. Es ist **kein** Cloud-Laufwerk, **kein** öffentliches „Dateien“-Album und **keine** E-Mail an den Support. Andere Apps können ihn unter den normalen iOS-Regeln nicht lesen.

Auf einem iPhone mit **Gerätecode** (oder Biometrie) **verschlüsselt iOS App-Daten im Ruhezustand** mit hardwaregestütztem Schutz. Witness Ear lädt das Tagebuch **nicht** hoch und fügt **keine** zweite, von der App verwaltete Verschlüsselungsschicht darüber hinzu. Wenn das Gerät gesperrt ist, folgt der Zugriff den Standard-Datenschutzklassen von Apple (typischerweise geschützt bis zur ersten Entsperrung nach dem Start, sofern keine strengeren Einstellungen gelten). Backups (Regeln für verschlüsselte Computer-Backups / iCloud-Backups) sind etwas anderes als „liegt auf dem Speicher des Telefons“.

---

## Diesen Bericht in Streitfällen verwenden

Witness Ear kann ein **authentifiziertes digitales Register akustischer Metadaten** erzeugen (was die Klassifizierer auf dem Gerät etikettiert haben, wann, und welches Telefon beigetragen hat) — nützlich für **informelle** Gespräche mit Nachbarn, Vermietern, Eigentümergemeinschaften oder Mediatoren. Es ist **kein** Ersatz für eine zertifizierte Messung der Klasse 1/2 oder für Rechtsberatung.

**Praktische Schritte:**

1. Lassen Sie **Witness Ear eingeschaltet** für den Zeitraum, der Sie interessiert (bis zu 24 Stunden werden aufbewahrt).
2. **Exportieren** Sie das PDF; bewahren Sie die Originaldatei auf, ohne sie erneut über einen Editor zu speichern, der PDFs neu schreibt.
3. **Drucken** Sie eine Kopie, wenn eine Papierspur hilft; füllen Sie den Block **Attestation** (Erklärung: Name, Ort, Unterschrift, Datum) mit Tinte aus.
4. Weisen Sie Empfänger auf den Abschnitt **Integrity** (Integrität) hin: den **SHA-256**-Fingerabdruck der Tagebuchzeilen. Ein späterer erneuter Export aus **demselben unveränderten Protokoll auf dem Gerät** sollte übereinstimmen; das Bearbeiten der Ereignistabelle in einem PDF-Editor aktualisiert diesen Hash nicht korrekt, es sei denn, der Angreifer baut den Bericht zusätzlich aus passenden Quelldaten neu auf.
5. Seien Sie deutlich: Dies sind **von der App erzeugte Metadaten**, die Zeit stammt von der **Geräteuhr**, die Pegel sind **kein rechtsverbindlicher SPL**, und Etiketten können falsch sein.
6. Wir betreiben derzeit **keine** öffentliche Website nach dem Muster „PDF hochladen, um die Signatur zu prüfen“. Der Hash ist ein **in sich geschlossener Integritätsvermerk**, keine Cloud-Beglaubigung von Wingdings.

**Erfinden Sie keine** Ereignisse, schneiden Sie den Integritätsblock nicht heraus und behaupten Sie nicht, das PDF sei eine zertifizierte Lärmmessung.

---

## Haftungsausschlüsse (bitte lesen)

1. **Kein zertifiziertes Messgerät.** Telefonmikrofone sind **keine** Schallpegelmesser der Klasse 1/2. Konfidenzwerte und alle damit verbundenen Pegel sind **relativ**, nicht kalibriert und **dürfen nicht** als absolute dBA/dBC für Vollzug, Bußgelder oder gesetzliche Messtechnik dargestellt werden. Bei ehrlicher Verwendung kann der Bericht dennoch als **authentifiziertes digitales Register akustischer Metadaten** nützlich sein.

2. **Keine Garantie für Vollständigkeit.** Das Protokoll enthält nur das, was die **Klassifizierer auf dem Gerät** etikettiert haben, während die Überwachung aktiv und Witness Ear **eingeschaltet** war. Ruhige Phasen, stummgeschaltetes Mikrofon, nicht laufende App, niedrige Konfidenz oder gedrosselte Duplikate können Lücken hinterlassen. Das Fehlen einer Zeile ist **kein** Beweis dafür, dass ein Geräusch nie aufgetreten ist.

3. **Etiketten können falsch sein.** Maschinelles Lernen klassifiziert mitunter falsch. Eine Zeile „Siren“ (Sirene) bedeutet die beste Vermutung des Modells in diesem Moment — kein garantiertes Einsatzfahrzeug. Behandeln Sie das PDF als **unterstützende Notizen**, nicht als gesicherte Wahrheit.

4. **Kein Sicherheitsgerät.** Vigilant Ear / Witness Ear sind **Hilfsmittel für Aufmerksamkeit und Barrierefreiheit**. Sie ersetzen weder menschliches Urteilsvermögen noch zertifizierte Alarmanlagen oder offizielle Rettungsdienste.

5. **Beweise und Streitfälle.** Wenn Sie ein PDF mit einem Vermieter, einer Eigentümergemeinschaft oder einer Behörde teilen, seien Sie ehrlich darüber, was es ist: ein **von einer App erzeugtes Klassifizierungsprotokoll**, mit begrenzter Aufbewahrung, vom Nutzer exportiert, mit einem Integritäts-Hash vom Gerät. Verändern Sie die Ereignistabelle nicht und erfinden Sie keine Ereignisse. Wir bieten keine Rechtsberatung; lokale Regeln zu Aufnahmen und Beweismitteln unterscheiden sich — fragen Sie im Zweifel eine qualifizierte Fachperson.

6. **Berichte mit mehreren Telefonen.** Peer-Zeilen hängen von der Constellation-Verbindung und den Freigaberegeln ab (z. B. nicht-sprachliche Quellen). Uhren und GPS in Consumer-Telefonen haben Fehler; eine Übereinstimmung mehrerer Telefone „in derselben Nacht“ ist nützlicher Kontext, keine Zeitmessung in Laborqualität.

7. **Zeitbasis.** Zeitstempel verwenden die **Geräteuhr**, die der Nutzer ändern kann. Das PDF weist darauf hin; im aktuellen Produkt wird sie nicht automatisch gegen die Netzwerkzeit geprüft.

8. **Ihre Verantwortung beim Teilen.** Sobald Sie einen Bericht per AirDrop oder E-Mail versenden, können Empfänger Kopien behalten. Exportieren Sie nur das, was Sie tatsächlich teilen möchten.

---

## Hinweise zu den Plattformen

- **iOS / iPadOS:** Die Witness Ear-Bedienelemente werden unter **Preferences → SOUND JOURNAL** ausgeliefert, wie oben beschrieben.
- **Android:** Eine umfassendere „Witness Ear“-Oberfläche (einschließlich reichhaltigerer PDF-Diagramme in Entwicklung) kann später erscheinen; die Produktausgestaltung kann sich je nach Plattform unterscheiden. Die Kernidee bleibt: **aktive Zustimmung, kurze Aufbewahrung, auf dem Gerät, vom Nutzer angestoßener Export.**

---

## Gut zu wissen

- Witness Ear **ausgeschaltet** zu lassen kostet über die normale Überwachung hinaus praktisch nichts.
- Das **Einschalten** fügt leichte lokale Speicherung und gelegentliche Schreibvorgänge hinzu — keine zweite vollständige Oberfläche.
- **Export** erzeugt das PDF, ohne dass ein separater Witness Ear-Bildschirm nötig wäre.
- Für alltägliche Warnungen und Richtungen nutzen Sie die Hauptkarte und die HUDs von Vigilant Ear; nutzen Sie Witness Ear, wenn Sie eine **tragbare schriftliche Momentaufnahme** des letzten Tages brauchen.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
