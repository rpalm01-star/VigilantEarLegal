# Privacy Policy for Vigilant Ear 👂🛰️

**Effective Date:** September 8, 2026

## Introduction

Vigilant Ear ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains what information the app processes, what stays on your device, and when limited data may be sent over the internet to provide specific features.

## Privacy at a Glance

- **Core acoustic detection runs on your device.** Sound classification, directional tracking, live captions, and alert logic are designed to work locally using your phone's microphone and sensors.
- **We do not sell your data** and we do not use advertising or behavioral analytics SDKs.
- **We do not store or upload audio recordings.** Microphone audio is processed in real time for detection and (when enabled) captions; it is never saved as a sound file or sent for cloud analysis. Up to about thirty seconds of sound are held briefly in the phone's working memory while it is being transcribed — that short buffer is what lets captions catch a speaker's opening words instead of losing them — and it never touches storage, is never transmitted anywhere, and is gone the moment the app closes. The Rewind feature brings back recent caption **text** only; no sound is kept for replay.
- **Some features use the internet** — maps, severe-weather feeds, optional music identification, road data, app-store purchases, optional multi-phone mesh traffic between *your* devices, loading of in-app legal pages, and (only if you opt in) Research Array reports. These are described below.
- **You stay in control.** You can disable Shazam music identification, turn off alert categories, leave Constellation off, leave **Research Array** off (it is off by default), revoke permissions in system settings, or stop background listening at any time.

## Information Processed on Your Device

With your permission, Vigilant Ear accesses the following **locally**:

- **Microphone audio** — Used in real time to detect environmental sounds (sirens, vehicles, doorbells, baby cry, people nearby, etc.), estimate direction, and (when Speaker Mode is on) produce live captions and optional on-device translation.
- **Speech recognition (on-device)** — When captions are enabled, your device’s speech frameworks transcribe nearby speech into text on the phone. Caption text is shown live and is not archived by Vigilant Ear as a permanent transcript history; debug logs do not include caption content. To spell names correctly, the app may also give that on-device recognizer a short list of words already present on this phone — the display names of Constellation phones you have linked, and the title and artist of a song Shazam has just identified. It does **not** read your Contacts, and that list never leaves the device.
- **Location** — Used to place detected sounds and weather-alert areas on the map, to improve directional guidance, and to remember how quiet a familiar room is so music detection does not have to relearn it every time you open the app. That last use saves a latitude on its own — no longitude — rounded to about 100 metres, for at most eight places. It stays in the app’s own settings on this phone and is never sent anywhere.
- **Device orientation and motion** — Used to improve bearing accuracy.
- **Camera (optional)** — Used only if you open the camera AR “see the sound” view, so markers can be pinned in the live camera preview. Camera frames are used for on-device display; they are not uploaded by Vigilant Ear for sound recognition.
- **Apple Watch (optional)** — When a Watch companion is available, alert labels and direction cues may be relayed to the paired Watch so you can glance at your wrist.
- **Witness Ear sound journal (optional, off by default)** — When you turn Witness Ear on, the app keeps a rolling **24-hour, on-device** log of sound classifications (time, label, confidence, peak level, direction when measured, and the phone’s location at that moment; plus entries shared by your linked Constellation phones). The journal is stored only in the app’s private sandbox on this phone and is never uploaded by Vigilant Ear. It leaves the phone only inside a PDF report **you** choose to export and share. Entries older than 24 hours are deleted automatically; turning Witness Ear off pauses logging (kept entries still age out), and the in-app trash control deletes the log immediately. See the Witness Ear guide for details.

This on-device processing is the heart of the app. Competitor apps often stream audio to the cloud for analysis and monetization. Vigilant Ear is built differently: your acoustic awareness pipeline is designed to run on the phone itself.

## Network & Third-Party Services

When you use certain features — or when the app needs them to function — **limited data may leave your device** and be handled by third-party services under their own privacy policies:

*   **Map display**
    *   *What is sent:* Map tile requests; your map viewport and approximate location as needed to render the map
    *   *Provider:* Apple Maps / MapKit
*   **Severe weather alerts (through our own alert service)**
    *   *Why it exists:* Official warnings come from national weather agencies around the world. Every phone used to contact those agencies directly — which meant each one could see your device's network address and how often you checked — and shared public feeds with request limits began dropping alerts as our user base grew. Our server now fetches the official data once, for everyone, and holds it for about **15 minutes**. The same official warnings, more reliably — and **your phone never contacts a foreign government's servers.** Starting in v1.1.0 or higher only.
    *   *What is sent:* A request to our service carries only the country/region code, your app language, and — at most — a location cell that your phone rounds to roughly **50 km (0.5°)** before it is ever sent, used solely to trim the reply to alerts near you. The precise "am I inside this warning area?" test happens **on your phone** and never leaves it. No name, account, or device identifier is attached. As with any HTTPS service, standard short-lived hosting logs exist to operate it; they are not a tracking feature and we do not sell them.
    *   *Provider:* Official data from the U.S. National Weather Service (NWS), MeteoAlarm / MeteoGate (Europe), the China Meteorological Administration (CMA), Korea Meteorological Administration (KMA), Japan Meteorological Agency (JMA), Environment and Climate Change Canada (ECCC), Brazil's INMET, Australia's Bureau of Meteorology (BoM) and India's National Disaster Management Authority (NDMA) — delivered to your phone through infrastructure we operate.
*   **Earthquake alerts (through our own alert service)**
    *   *What is sent:* Requests for a single worldwide public earthquake summary feed, fetched through the same service as the weather alerts above, so your phone does not contact a foreign government's servers for these either — the request carries no location or region information at all; your device location is used only on-device to decide whether a reported quake is near you
    *   *Provider:* U.S. Geological Survey (USGS) public earthquake feed, relayed by Wingdings
*   **Music identification (optional, Power Pack+)**
    *   *What is sent:* Short audio fingerprints — never raw audio — when music is detected and Shazam is enabled (can be turned off in settings)
    *   *Provider:* Apple Shazam / ShazamKit
*   **Named-speaker roster backup (Android only, optional)**
    *   *What is sent:* When you enroll named voiceprints on Android, the phone may sync them to our roster service as **ciphertext only** (AES-GCM). Display names and embeddings are encrypted on the device with a Keystore-backed key that **never leaves the phone**; the server stores opaque bytes and cannot read names or voiceprints. No audio is uploaded.
    *   *Provider:* Wingdings roster service (same global-array host as Research Array ingest)
*   **Road context**
    *   *What is sent:* Anonymous Overpass API queries based on map sector around your location
    *   *Provider:* OpenStreetMap contributors via Overpass API
*   **Purchases & entitlements**
    *   *What is sent:* Purchase tokens and entitlement / trial status for the optional one-time Power Pack+ unlock (not a subscription)
    *   *Provider:* Apple App Store
*   **Constellation mesh (optional, Power Pack+)**
    *   *What is sent:* When you enable multi-phone Constellation, participating devices exchange acoustic metadata needed for a shared picture — for example relative pose / Ultra-Wideband ranging where available, bearings, sound labels, and ephemeral caption text. Traffic is peer-to-peer **only between phones that are running Vigilant Ear and that you link for Constellation**. Phones without the app cannot join that mesh or receive that metadata. Wingdings does not operate a cloud mesh relay for this audio pipeline.
    *   *Provider:* Apple frameworks (e.g. Network / Nearby Interaction) between your Vigilant Ear devices
*   **Remote Link (optional — starting a link needs Power Pack+; joining is free)**
    *   *Why it exists:* A Deaf or hard-of-hearing person cannot use a phone call. Remote Link is the substitute — a private video-only call with caption data: two people see each other, read each other's captions and typed text, and can sign to each other over the video.
    *   *What is sent:* **No audio, at any point** — a Remote Link session carries no audio track at all. The two phones talk to each other, not to us: live video, your live captions as text and anything you type travel **directly between the two phones** wherever the networks allow, encrypted end to end, so nothing in between can watch or read the call. To set a link up, our service holds the invitation code together with the connection details the two phones need in order to find each other. That mailbox holds **no video and no text**, and it expires within an hour.
    *   *Captions:* When your phone is listening, the captions it produces are sent to the linked phone as text, in the language they were heard in; that phone translates them into its own reader's language, on the device. This travels on the same encrypted connection as the video — never through our servers. **Pause** stops sending video and captions together, and captions stop entirely when you stop listening.
    *   *If a direct connection is impossible:* when the two phones cannot reach each other directly — different networks, a strict router — the encrypted video, captions and text are forwarded by a relay that **cannot decrypt them**. The relay does see that a connection exists, the network addresses involved, and how much data passes — as any relay must — and nothing more. The app shows plainly whether a link is **Direct** or **Relayed**. A relayed link closes itself after one hour.
    *   *Nothing is recorded:* no video, audio or text from a Remote Link is written to disk on either phone, or stored on any server.
    *   *Provider:* Wingdings (invitation mailbox), Cloudflare (relay — used only when a direct connection is impossible)
*   **In-app legal documents**
    *   *What is sent:* Standard web requests when you open Privacy Policy, Terms, Support, or product README pages in the app
    *   *Provider:* GitHub (document hosting)
*   **Research Array live map (view-only)**
    *   *What is sent:* Standard web requests when you tap **Map** to open the public array dashboard in your browser — like visiting any website. Viewing sends nothing from your journal or detections.
    *   *Provider:* Wingdings research service (web application host)
*   **Research Array (optional — off by default)**
    *   *What is sent:* Only if you turn the feature on: small, metadata-only detection reports when a qualifying event is registered (time, approximate location, basic signal characteristics, app version). See **Research Array** below.
    *   *Provider:* Infrastructure we operate (application host and database providers such as our web and Postgres hosts). Details and limits are in the Research Array section.

We choose these services to deliver map, weather, music-label, purchase, multi-device, Android nametag roster backup (ciphertext only), and (when you opt in) research-array functionality. **Wingdings does not receive your microphone audio, continuous location history, or contact information from these providers.**

## What Wingdings Collects

### No Remote Telemetry or Diagnostics

Vigilant Ear is designed so that core listening and caption features run on your device. We do **not** collect remote crash analytics, advertising telemetry, or general usage analytics SDKs.

Optional **local** debug logs may be written on the device for troubleshooting; they are not uploaded by the app as a telemetry pipeline, and caption text is not included in exported debug content.

**Exception — Research Array and the European weather cache:** if you opt in to Research Array (see below), Wingdings may receive the limited event reports you choose to contribute. Separately, when European weather alerts are enabled, your phone reads them from the weather cache we operate (described above); those requests carry a coarse ~50 km location cell and no personal or device identifiers. Neither path is advertising analytics, and both exist to make a specific feature work — not to build a profile of you.

## Research Array (optional, off by default)

Vigilant Ear can optionally contribute **metadata-only** detection reports to a research array that helps build a shared picture of earthquakes and other low-frequency / infrasound-related events. **This is turned off by default and only ever runs if you switch it on** — where the **Research Array** switch appears in the app's preferences (or the equivalent label in your language), you can turn it on or off at any time. Viewing the array's public **Map** page is separate from contributing and shares nothing from your log.

When it is on — and only when your device registers a **qualifying** event (for example a strong enough non-local infrasound or seismic-related candidate, or certain quake-related audit signals where that path is enabled) — the app may send a small report containing:

- the time of the event (using the device’s wall clock in a global time domain)
- an approximate location, rounded to about **1 kilometre** (not your exact street address or continuous track)
- basic characteristics of the event, such as sensor channel, whether the path is air or ground, peak frequency where applicable, and a dimensionless strength measure (for example STA/LTA)
- the type of report (for example infrasound onset, seismic candidate, or quake confirmation audit)
- the app version

**What is never sent for Research Array:** audio, waveforms, recordings, transcripts, captions, contacts, identifiers the app invents to label *you* as a person or install, your precise GPS fix (beyond the coarse rounding above), or any continuous record of where you go. Audio never leaves your device for this or any other purpose.

### Where reports go

Reports are sent only over an **encrypted (HTTPS) channel** to a Wingdings research service we operate (application host and database). The app attaches **no per-user or per-device research ID** and **no Apple Account identifier** in the payload. A shared application secret may be used so only our app can write to the service; that secret is **not** a personal identifier. Standard hosting and security logs (for example short-lived network metadata used to operate the service) may exist as with any HTTPS service; they are not a product feature for tracking you, and we do not sell them.

Turning **Research Array** off stops **all future** reports immediately. It does **not** delete reports already sent. Because reports carry **no per-user or per-device identifier**, we cannot look up or erase “everything you contributed” after the fact — we have no reliable way to know which past reports came from you. That is intentional: it keeps the research stream from becoming a personal history under our control.

## What We Do Not Do

We do **not**:

- Sell or rent your personal information
- Store environmental audio recordings on our servers
- Run ad networks, cross-app trackers, or behavioral profiling SDKs
- Upload your continuous location trail to Wingdings
- Upload raw microphone audio for cloud speech or sound recognition
- Require Research Array for core app features — it is optional and off by default

## Your Choices & Controls

You can:

- **Revoke permissions** (microphone, location, camera, notifications, speech recognition) in iOS Settings
- **Disable Shazam music identification** in Power Pack+ / preferences
- **Turn off individual alert categories** (sirens, weather, doorbells, baby, etc.)
- **Stop background listening** when all alert categories are disabled
- **Leave Constellation off** so no mesh metadata is shared with other phones running Vigilant Ear. Phones without the app cannot share that metadata.
- **Leave Research Array off** (default), or turn it off anytime in Settings to stop contributing reports
- **Use Feature Playground** to preview alerts and features locally with a clear PREVIEW watermark, without implying a real emergency

## Platform Guidelines

Vigilant Ear follows Apple App Store privacy requirements and Apple's guidelines for apps serving people with accessibility needs. We update this policy when our practices or platform obligations change.

## Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be reflected by updating the **Effective Date** at the top of this page.

## Contact Us

If you have questions about this Privacy Policy, contact us at:

**Email:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear is built with love and respect for the Deaf, hard-of-hearing, and CODA community. Your trust matters to us.

*Vigilant Ear is an accessibility tool built with care. Please use it responsibly.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
