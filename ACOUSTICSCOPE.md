# Acoustic Scope — The Pro Sound-Analysis View

The **Acoustic Scope** turns Vigilant Ear into a pocket sound-analysis instrument: a live view of everything the microphone hears, five different ways. Use it to *see* a sound's shape, measure its pitch and level, freeze and scrub back through the last half minute, and capture clips to train your own custom sound pack.

Open it from the **action fan** (the spinning burst on the top rail): tap the burst, then tap the **equalizer** (the animated green-and-cyan bars). The Acoustic Scope is part of **Power Pack+** (the free trial counts).

---

## The header

- **dB box** — the live broadband level. The **A / C / Z** squares pick the frequency weighting (A ≈ how loud it sounds to a human ear; C keeps more bass; Z is flat/unweighted). The weighting also drives the ⅓-octave view.
- **root** (Chroma view only) — the strongest musical pitch class in the room, updated live.
- **✕** closes the scope. Detection and alerts keep running the whole time the scope is open — it's a window, not a mode.

## The five views

Switch with the bar along the bottom.

| View | What it shows |
|---|---|
| **Spectrum** | Level by frequency, right now — a live curve with a white peak-hold line. |
| **Spectrogram** | Frequency over **time** — the last ~24 seconds scroll by, color = level. Most sounds have a recognizable visual shape here. |
| **⅓-Oct RTA** | The 28 standard ISO bands, like a hardware real-time analyzer. Orange ticks are peak-hold. |
| **Chroma** | The 12 musical pitch classes — which notes are present, with the strongest highlighted. |
| **Partials** | The prominent tones tracked over time as colored lines, each labeled with its musical note. Great for whistles, sirens, birdsong, machinery hum. |

Orange **flags** on the Spectrogram mark the moments the sound classifier fired, with its label and confidence — so you can see exactly what shape the model reacted to.

## Reading and measuring

- **Left slider** — display scale. Pull a maxed-out view down or a quiet one up (display only; never affects detection).
- **Tap** the Spectrogram — a crosshair readout: frequency, level, and how long ago.
- **Drag** a box — stats for that region: frequency span, duration, peak, centroid, energy, crest factor.
- **Pinch** — zoom the frequency axis. The ⤢ button resets.
- **ⓘ** — the telemetry panel (FFT details, dominant frequency, spectral centroid) plus a **calibration** stepper that offsets all level readouts if you've compared against a reference meter.

## Freeze and review

The **pause** button freezes the picture (the mic and alerts keep running). While frozen, a transport bar appears:

- **▶** plays the buffer back visually; the speed button cycles 1× / 2× / 0.5×.
- **🔍− / 🔍+** zoom the time window; the **minimap** at the right shows the whole buffer — drag it to scrub.
- Spectrogram and Partials share one clock, so you can flip between them on the exact same frozen moment.

## Capturing sounds for a custom pack

This is the scope's superpower: grab real examples of a sound *as you hear it*, straight from the live view.

1. Tap the magenta **Train** button (dashed square). The view freezes and a magenta **band** appears.
2. Drag the band's edges around one clean example of your sound — the label shows the selected duration. A couple of seconds around the sound is ideal.
3. Tap **Save** (the arrow-into-tray button). The audio under the band is written to a clip, and a numbered box appears. The band stays armed — scrub to the next example and Save again (up to 6 per session). Tap a numbered box twice to delete that clip.
4. Tap the **hammer** to open the **Build** panel:
   - **Model name** — the pack (e.g. *Backyard Owls*).
   - **Sound name** — what users see on the map.
   - **Class label** — the exact label the trained model will emit (auto-derived; lowercase and underscores).
   - **When detected** — *map only* (a dot, identification) or *moving* (tracked like a vehicle). Custom sounds identify; they don't raise emergency alerts — the built-in safety detection always handles that.
   - Icon, color, confidence threshold, and max range — the live preview card shows exactly how a detection will look.
5. Tap **Build & Export**. You get a zip containing your clips (already in Create ML's folder layout) plus the pack files, ready to share to a Mac.
6. On the Mac, train a **Sound Classifier** in Create ML from the `clips/` folder, drop the exported `model.mlpackage` into the pack folder, re-zip, and import it on the phone under **Alert Sources → Custom Sound Packs**.

The training and import half — including the **mandatory Background class** and the gating that prevents false alarms — is covered step-by-step in the **[Custom Sound Packs guide](https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/BYOM.md)**.

## Good to know

- The scope costs nothing when closed — the extra analysis only runs while it's on screen.
- Absolute dB values are uncalibrated by default; they're consistent and comparable, and the ⓘ calibration stepper lets you align them to a reference meter.
- The scope reads the primary microphone channel. Detection, direction-finding, and alerts are unaffected by anything you do here.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
