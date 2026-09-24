# Acoustic Scope — Die Profi-Ansicht zur Klanganalyse

Das **Acoustic Scope** macht aus Vigilant Ear ein Klanganalyse-Instrument für die Hosentasche: eine Live-Ansicht von allem, was das Mikrofon hört, auf sechs verschiedene Arten. Damit *sehen* Sie die Form eines Klangs, messen seine Tonhöhe und seinen Pegel, frieren die letzte halbe Minute ein und spulen sie durch, und schneiden Clips mit, um Ihr eigenes Sound-Paket zu trainieren.

Öffnen Sie es über den **Aktionsfächer** (der rotierende Stern in der oberen Leiste): Tippen Sie auf den Stern und dann auf den **Equalizer** (die animierten grün-türkisen Balken). Das Acoustic Scope ist **für alle kostenlos** — die Live-Ansichten unten benötigen keinen Kauf. Nur die **Train**-Aufnahmewerkzeuge (weiter unten), die Clips für Ihre eigenen Sound-Pakete aufzeichnen, gehören zu Power Pack+.

---

## Die Kopfzeile

- **dB-Feld** — der Live-Breitbandpegel. Die Quadrate **A / C / Z** wählen die Frequenzbewertung (A ≈ wie laut es für ein menschliches Ohr klingt; C behält mehr Bass; Z ist linear/unbewertet). Die Bewertung steuert auch die ⅓-Oktav-Ansicht.
- **root** (nur in der Chroma-Ansicht) — die stärkste musikalische Tonklasse im Raum, live aktualisiert.
- **✕** schließt das Scope. Erkennung und Warnungen laufen die ganze Zeit weiter, solange das Scope geöffnet ist — es ist ein Fenster, kein Modus.

## Die sechs Ansichten

Umschalten über die Leiste am unteren Rand.

| Ansicht | Was sie zeigt |
|---|---|
| **Spektrum** | Pegel nach Frequenz, jetzt gerade — eine Live-Kurve mit einer weißen Peak-Hold-Linie. |
| **Spektrogramm** | Frequenz über die **Zeit** — die letzten ~24 Sekunden scrollen vorbei, Farbe = Pegel. Die meisten Klänge haben hier eine wiedererkennbare visuelle Form. |
| **⅓-Okt-RTA** | Die 28 ISO-Standardbänder, wie ein Echtzeitanalysator aus Hardware. Orange Striche sind Peak-Hold. |
| **Chroma** | Die 12 musikalischen Tonklassen — welche Noten vorhanden sind, die stärkste hervorgehoben. |
| **Teiltöne** | Die markanten Töne über die Zeit verfolgt als farbige Linien, jede mit ihrer Note beschriftet. Notennamen und die Obertonreihe haben eigene Spalten, und höhere Klänge wie Rauchmelder werden mit ihrer tatsächlichen Tonhöhe beschriftet. Legen Sie einen **Zielton** fest, und er erscheint als Linie, an der Sie sich beim Singen oder Stimmen orientieren können. Ideal für Pfeifen, Sirenen, Vogelgesang und Maschinenbrummen. |
| **Visualizer** | Die Musik im Raum als Live-Lichtshow — Beats zünden Ringe, Bässe lassen die Szene anschwellen, Höhen regnen als Funken. Hat weiter unten einen eigenen Abschnitt. |

Orange **Fähnchen** im Spektrogramm markieren die Momente, in denen der Klangklassifikator ausgelöst hat, mit Label und Konfidenz — so sehen Sie genau, auf welche Form das Modell reagiert hat.

## Ablesen und messen

- **Linker Regler** — Anzeigeskala. Ziehen Sie eine übersteuerte Ansicht herunter oder eine leise herauf (nur Anzeige; beeinflusst die Erkennung nie).
- **Tippen** Sie auf das Spektrogramm — eine Fadenkreuz-Anzeige: Frequenz, Pegel und wie lange es her ist.
- **Ziehen** Sie einen Rahmen auf — Statistiken für diesen Bereich: Frequenzspanne, Dauer, Spitze, Schwerpunkt, Energie, Crest-Faktor.
- **Aufziehen** — die Frequenzachse zoomen. Die Taste ⤢ setzt zurück.
- **ⓘ** — das Telemetrie-Panel (FFT-Details, dominante Frequenz, spektraler Schwerpunkt) sowie ein **Kalibrierungs**-Regler, der alle Pegelanzeigen verschiebt, falls Sie mit einem Referenzmessgerät verglichen haben.

## Einfrieren und nachsehen

Die **Pause**-Taste friert das Bild ein (Mikrofon und Warnungen laufen weiter). Im eingefrorenen Zustand erscheint eine Transportleiste:

- **▶** spielt den Puffer visuell ab; die Geschwindigkeitstaste wechselt zwischen 1× / 2× / 0,5×.
- **🔍− / 🔍+** zoomen das Zeitfenster; die **Übersichtskarte** rechts zeigt den gesamten Puffer — ziehen Sie sie zum Scrubben.
- Spektrogramm und Teiltöne teilen sich eine Uhr, sodass Sie im exakt selben eingefrorenen Moment zwischen ihnen wechseln können.

## Klänge für ein eigenes Paket mitschneiden

Das ist die Superkraft des Scopes: echte Beispiele eines Klangs *genau dann* mitnehmen, wenn Sie ihn hören, direkt aus der Live-Ansicht.

1. Tippen Sie auf die magentafarbene Taste **Train** (gestricheltes Quadrat). Die Ansicht friert ein und ein magentafarbenes **Band** erscheint.
2. Ziehen Sie die Kanten des Bandes um ein sauberes Beispiel Ihres Klangs — die Beschriftung zeigt die gewählte Dauer. Ein paar Sekunden rund um den Klang sind ideal.
3. Tippen Sie auf **Sichern** (die Taste mit dem Pfeil in die Ablage). Das Audio unter dem Band wird in einen Clip geschrieben und ein nummeriertes Kästchen erscheint. Das Band bleibt scharf — spulen Sie zum nächsten Beispiel und sichern Sie erneut (bis zu 6 pro Sitzung). Tippen Sie zweimal auf ein nummeriertes Kästchen, um den Clip zu löschen.
4. Tippen Sie auf den **Hammer**, um das **Build**-Panel zu öffnen:
   - **Modellname** — das Paket (z. B. *Eulen im Garten*).
   - **Klangname** — was Nutzer auf der Karte sehen.
   - **Klassenlabel** — genau das Label, das das trainierte Modell ausgibt (automatisch abgeleitet; Kleinbuchstaben und Unterstriche).
   - **Bei Erkennung** — *nur Karte* (ein Punkt, Identifikation) oder *bewegt* (wie ein Fahrzeug verfolgt). Eigene Klänge identifizieren; sie lösen keine Notfallwarnungen aus — dafür ist immer die eingebaute Sicherheitserkennung zuständig.
   - Symbol, Farbe, Konfidenzschwelle und maximale Reichweite — die Live-Vorschaukarte zeigt genau, wie eine Erkennung aussehen wird.
5. Tippen Sie auf **Build & Export**. Sie erhalten ein ZIP mit Ihren Clips (bereits in der Ordnerstruktur von Create ML) sowie den Paketdateien, bereit zur Übertragung auf einen Mac.
6. Trainieren Sie auf dem Mac in Create ML einen **Sound Classifier** aus dem Ordner `clips/`, legen Sie das exportierte `model.mlpackage` in den Paketordner, packen Sie neu und importieren Sie es auf dem Telefon unter **Warnquellen → Eigene Sound-Pakete**.

Die Hälfte mit Training und Import — einschließlich der **verpflichtenden Background-Klasse** und der Absicherung gegen Fehlalarme — ist Schritt für Schritt im **[Leitfaden für eigene Sound-Pakete](https://vigilantear.com/de/byom/)** beschrieben.

## Der Visualizer-Tab — Musik als Licht

Der Tab **Visualizer** verwandelt die Musik im Raum in eine Lichtshow, die gehörlose, schwerhörige
oder CODA-Zuschauer *mit den Augen fühlen* können. Nichts daran ist Dekoration — jedes Element wird
von einem echten akustischen Merkmal angetrieben, live aus den Mikrofonen:

- **Jeder Beat zündet einen Ring** — ein Onset-Detektor löst Ringexplosionen und einen
  Bildschirmblitz genau dann aus, wenn eine hörende Person die Bassdrum spüren würde.
- **Der Bass atmet** — der Ankerring in der Mitte und die treibenden texturierten Ringe schwellen
  mit der Energie tiefer Frequenzen an.
- **Die Höhen regnen als Funken** — Becken und Hi-Hats fallen als helle Tropfen.
- **Der Songtitel reitet auf einem Globus** — sobald der Song erkannt ist, legt sich sein Titel um
  den Äquator eines unsichtbaren Globus, der durch die Szene treibt, und der Interpret hält die obere rechte Ecke.

Legen Sie Ihren **DJ-Namen** (und seine Farbe) unter **Einstellungen → Acoustic Visualizer** fest —
er hält die obere linke Ecke, im Stil des Interpreten-Tags.

**Auf einen Fernseher bringen:** Tippen Sie auf die **tv-Taste** in der Kopfzeile des Scopes,
verbinden Sie per USB-C-HDMI-Kabel oder AirPlay-Bildschirmsynchronisierung und drücken Sie
**Mirror** — der große Bildschirm zeigt nur die Grafik, während dieses Telefon Bedienung und
Mikrofon bleibt. Wechseln Sie am Telefon den Scope-Tab, folgt der Fernseher: derselbe Mirror bringt also das Spektrogramm oder den Visualizer an die Wand.

## Gut zu wissen

- Geschlossen kostet das Scope nichts — die zusätzliche Analyse läuft nur, solange es auf dem Bildschirm ist.
- Auch geöffnet bleibt es sparsam: Das Spektrogramm kostet so gut wie nichts, sodass Ihr Telefon nicht warm wird, egal wie lange Sie zusehen, und Spektrogramm und Teiltöne werden in einem gleichmäßigen, gut lesbaren Tempo neu gezeichnet, ohne etwas von dem zu verpassen, was sie hören.
- Absolute dB-Werte sind standardmäßig nicht kalibriert; sie sind konsistent und vergleichbar, und der Kalibrierungsregler unter ⓘ erlaubt den Abgleich mit einem Referenzmessgerät.
- Das Scope liest den primären Mikrofonkanal. Erkennung, Richtungsbestimmung und Warnungen bleiben von allem, was Sie hier tun, unberührt.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
