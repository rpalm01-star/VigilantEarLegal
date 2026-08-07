# Witness Ear — Optional 24-Hour Sound Journal & PDF Report

**Witness Ear** is an optional feature of **Vigilant Ear**. It keeps a short, on-device log of sounds the app has classified around you, so you can export a simple **PDF summary report** when you need a written record—not only a live map.

It is **off by default**, **free**, and designed to stay out of the way until you need it.

---

## What it is

While Vigilant Ear is monitoring, it already classifies environmental sounds (sirens, alarms, vehicles, speech-adjacent categories, and more). Witness Ear does one extra thing when you turn it on:

- It **stores recent classifications** on this phone for up to **24 hours**.
- You can **export** those events as a **PDF Summary Report** (share via Mail, Files, AirDrop, etc.).
- You can **delete** the log at any time with the trash control. Turning Witness Ear **off** just **pauses** logging — what's already recorded is kept (and still ages out after 24 hours), so you can suspend it for a while without losing the day.

There is **no separate Witness Ear “app mode”** or full dashboard yet. The control lives under **Preferences → SOUND JOURNAL**: a **Witness Ear** switch (with a small **trash** control beside it while the log holds events), plus a **PDF Summary Report** row with **Export**.

The report lists things like **time**, **confidence**, **peak level (dBFS)**, **direction when measured**, **which phone heard it** (this device or a linked Constellation peer), and the **sound label** grouped by sound family. It is a **pattern and awareness aid**, not a certified noise meter.

---

## Why you might need it

People use a short written log when memory and live dots are not enough:

| Situation | How Witness Ear helps |
|-----------|------------------------|
| **Neighbor / HOA / landlord conversation** | A dated list of *what the app labeled and when*, over a night or a day, as a conversation starter—not as courtroom-grade metrology. |
| **“Was that every night or once?”** | Rolling 24 hours so you can check recency without keeping a permanent archive. |
| **Multi-phone home (Constellation)** | Linked phones share what they hear over your **local mesh**. Shared detections can land in the journal too, so the report can show **which phone** heard an event—not only this mic. |
| **Accessibility / awareness log** | A simple export you can send to a family member or support contact after a noisy stretch. |
| **Your own notes** | Export, annotate offline, discard the log when done. |

If you never need a PDF, leave Witness Ear **off**. Detection and alerts still work exactly as before.

---

## How to use it (iPhone / iPad)

### 1. Turn it on

1. Open **Preferences** (bell / Customizations path from the action fan or menu).
2. Find the section **SOUND JOURNAL**.
3. Turn **Witness Ear** **on**.  
   - Tap the **ⓘ** next to the name for the short in-app explanation.
4. Leave Vigilant Ear monitoring as usual (mic active for the sounds you care about).

While it is on, classifications that meet the app’s confidence floor are appended to a **local** log (with a short per-label gap so the file is not flooded with duplicates).

### 2. Export a PDF

1. Stay in **SOUND JOURNAL**.
2. On the **PDF Summary Report** row, tap **Export**.  
   - Tap **ⓘ** on that row for what the PDF contains.
3. Wait for the system **share sheet**, then save or send the file (`WitnessEar-Report-….pdf`).

If the log is empty, Export will say there are no events in the last 24 hours—turn Witness Ear on and wait until the classifier has fired at least once.

### 3. Pause or delete the log

- **Pause:** turn the **Witness Ear** switch off. Logging stops; what's already recorded is **kept** and still ages out after 24 hours. Turn it back on to resume.
- **Delete:** tap the small **red trash** on the **Witness Ear** row (it only appears while the log holds events). It arms a short **Cancel (5)…(1)** countdown — tap again to cancel, or wait it out to delete everything immediately.

### 4. Constellation (optional)

If **Constellation** is linked with other phones on your mesh:

- Phones already **share many non-speech detections** for the live map and multi-phone picture.
- With Witness Ear **on**, **peer-shared** detections can be **merged into this phone’s journal** and appear in the PDF under **Heard by** (peer name) vs **this phone**.

Each phone still keeps **its own** journal file on device. There is **no cloud Witness Ear archive**. For the fullest multi-phone PDF on one device, that device should have been linked and logging while the others were sharing.

---

## What the PDF contains (sample shape)

Exact layout may evolve; the intent is readable on paper and in Mail.

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

Every page carries a faint Wingdings watermark behind the content and a footer with the Wingdings mark, “© 2026 Wingdings, Inc. All rights reserved. · Patent Pending”, and the page number — an easy first check that a PDF someone hands you looks like a genuine export.

**How to read it**

- **Classifier samples** — number of stored windows (not “number of sirens in the city”).
- **Distinct episodes** — runs of samples separated by about a minute of quiet; a long continuous sound may be many samples but few episodes.
- **Conf** — model confidence (0–100%), **not** decibels SPL.
- **dBFS** — peak microphone level near the event, relative to that phone’s digital full scale (0 = the loudest the mic can record). Good for comparing moments; **not** calibrated dB SPL.
- **Dir** — the sound’s absolute compass bearing (0° = north), shown **only** when a two-microphone solve actually measured one; “—” means not measured. Never inferred from how the phone was pointed.
- **By** — device identifier from the **Devices** section (P1 = the exporting phone, P2… = linked peers), matching the L-ids in **Locations**.
- **Integrity hash** — fingerprint of the on-device journal used to build the PDF; helps detect post-export edits of the event table.
- **Attestation** — optional human signature block after print (you vouch for possession/location).

---

## Data privacy

| Topic | Policy |
|-------|--------|
| **Default** | **Off.** No Witness Ear log until you opt in. |
| **Where data lives** | On **this device** only, in the app’s private **Application Support** sandbox (see below). |
| **What is stored** | Classification metadata: time, label, confidence, optional location/heading if the app already has them, optional peer id when a mesh event is merged. **Not** a continuous audio recording of the day for the journal. |
| **Retention** | **Rolling 24 hours.** Older rows are pruned. |
| **When you turn it off** | Logging **pauses**; stored entries are kept and still age out after 24 hours. |
| **Delete control** | Trash on the Witness Ear row (shown while the log holds events), with a cancelable countdown. |
| **Upload** | Witness Ear does **not** upload the journal to Wingdings or a Witness Ear cloud. |
| **Export** | **You** choose to share the PDF (Mail, Files, AirDrop, etc.). Once shared, that copy is outside the app’s control. |
| **Constellation** | Mesh sharing of live detections is a **local network** product feature between your linked phones. Merged journal rows still stay on the phone that received them until you export or clear. |
| **Children / sensitive use** | Do not use the log to identify or track people. It is for **places, times, and sound categories**, not personal dossiers. |

### What “Application Support” means

**Application Support** is a private folder that belongs only to Vigilant Ear on this phone. It is **not** a cloud drive, **not** a public “Files” album, and **not** email to support. Other apps cannot read it under normal iOS rules.

On an iPhone with a **device passcode** (or biometrics), iOS **encrypts app data at rest** using hardware-backed protection. Witness Ear does **not** upload the journal and does **not** add a second, app-managed encryption layer on top of that. When the device is locked, access follows Apple’s standard data-protection classes (typically protected until first unlock after boot, unless stronger settings apply). Backups (encrypted computer backup / iCloud backup rules) are separate from “sitting on the phone’s disk.”

---

## Using this report in disputes

Witness Ear can produce an **authenticated digital ledger of acoustic metadata** (what the on-device classifiers labeled, when, and which phone contributed)—useful for **informal** conversations with neighbors, landlords, HOAs, or mediators. It is **not** a substitute for a certified Class 1/2 survey or legal counsel.

**Practical steps:**

1. Leave **Witness Ear on** for the period you care about (up to 24 hours retained).
2. **Export** the PDF; keep the original file without re-saving through an editor that rewrites PDFs.
3. **Print** a copy if a paper trail helps; complete the **Attestation** block (name, location, signature, date) in ink.
4. Point recipients to the **Integrity** section: the **SHA-256** fingerprint of the journal rows. A later re-export from the **same unaltered on-device log** should match; editing the event table in a PDF editor will not update that hash correctly unless the attacker also rebuilds from matching source data.
5. Be explicit: this is **app-generated metadata**, time is the **device clock**, levels are **not legal SPL**, and labels can be wrong.
6. We do **not** currently operate a public “upload PDF to verify signature” website. The hash is a **self-contained integrity note**, not a Wingdings cloud attestation.

**Do not** invent events, crop the integrity block, or claim the PDF is a certified noise measurement.

---

## Disclaimers (please read)

1. **Not a certified instrument.** Phone microphones are **not** Class 1/2 sound level meters. Confidence scores and any related levels are **relative**, uncalibrated, and **must not** be presented as absolute dBA/dBC for enforcement, fines, or legal metrology. The report may still be useful as an **authenticated digital ledger of acoustic metadata** when used honestly.

2. **Not a guarantee of completeness.** The log only includes what the **on-device classifiers** labeled while monitoring was active and Witness Ear was **on**. Quiet periods, muted mic, app not running, low confidence, or throttled duplicates may leave gaps. Absence of a row is **not** proof that a sound never happened.

3. **Labels can be wrong.** Machine learning misclassifies. A “Siren” row means the model’s top guess at that moment—not a guaranteed emergency vehicle. Treat the PDF as **supporting notes**, not ground truth.

4. **Not a safety device.** Vigilant Ear / Witness Ear are **awareness and accessibility aids**. They do not replace human judgment, certified alarms, or official emergency services.

5. **Evidence and disputes.** If you share a PDF with a landlord, HOA, or agency, be honest about what it is: an **app-generated classification log**, retention-limited, user-exported, with an on-device integrity hash. Do not alter the event table or invent events. We do not offer legal advice; local rules on recordings and evidence vary—when in doubt, ask a qualified professional.

6. **Multi-phone reports.** Peer rows depend on Constellation connectivity and sharing rules (e.g. non-speech sources). Clocks and GPS on consumer phones have error; “same night” multi-phone agreement is useful context, not lab-grade timing.

7. **Time base.** Timestamps use the **device wall clock**, which the user can change. The PDF notes this; it is not automatically cross-checked against network time in the current product.

8. **Your responsibility for sharing.** Once you AirDrop or email a report, recipients can keep copies. Export only what you intend to share.

---

## Platform notes

- **iOS / iPadOS:** Witness Ear controls ship under **Preferences → SOUND JOURNAL** as described above.
- **Android:** A fuller “Witness Ear” surface (including richer PDF charts in development) may appear later; product packaging can differ by platform. Core idea remains: **opt-in, short retention, on-device, user-initiated export.**

---

## Good to know

- Leaving Witness Ear **off** costs essentially nothing beyond normal monitoring.
- Turning it **on** adds light local storage and occasional writes—not a second full UI.
- **Export** builds the PDF without requiring a separate Witness Ear screen.
- For day-to-day alerts and direction, use the main Vigilant Ear map and HUDs; use Witness Ear when you need a **portable written snapshot** of the last day.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
