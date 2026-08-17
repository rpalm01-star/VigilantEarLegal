# Privacy Policy for Vigilant Ear 👂🛰️

**Effective Date:** August 4, 2026

## Introduction

Vigilant Ear ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains what information the app processes, what stays on your device, and when limited data may be sent over the internet to provide specific features.

## Privacy at a Glance

- **Core acoustic detection runs on your device.** Sound classification, directional tracking, live captions, and alert logic are designed to work locally using your phone's microphone and sensors.
- **We do not sell your data** and we do not use advertising or behavioral analytics SDKs.
- **We do not store or upload audio recordings.** Microphone audio is processed in real time for detection and (when enabled) captions; it is never saved as a sound file or sent for cloud analysis. A few seconds of sound are held briefly in the phone's working memory while it is being transcribed — that short buffer is what lets captions catch a speaker's opening words instead of losing them — and it never touches storage, is never transmitted anywhere, and is gone the moment the app closes. The Rewind feature brings back recent caption **text** only; no sound is kept for replay.
- **Some features use the internet** — maps, severe-weather feeds, optional music identification, road data, app-store purchases, optional multi-phone mesh traffic between *your* devices, loading of in-app legal pages, and (only if you opt in) Research Array reports. These are described below.
- **You stay in control.** You can disable Shazam music identification, turn off alert categories, leave Constellation off, leave **Research Array** off (it is off by default), revoke permissions in system settings, or stop background listening at any time.

## Information Processed on Your Device

With your permission, Vigilant Ear accesses the following **locally**:

- **Microphone audio** — Used in real time to detect environmental sounds (sirens, vehicles, doorbells, baby cry, people nearby, etc.), estimate direction, and (when Speaker Mode is on) produce live captions and optional on-device translation.
- **Speech recognition (on-device)** — When captions are enabled, your device’s speech frameworks transcribe nearby speech into text on the phone. Caption text is shown live and is not archived by Vigilant Ear as a permanent transcript history; debug logs do not include caption content.
- **Location** — Used to place detected sounds and weather-alert areas on the map and to improve directional guidance.
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
*   **Severe weather alerts**
    *   *What is sent:* Requests to public CAP/Atom weather feeds; your general region may be inferred from feed selection and device location
    *   *Provider:* U.S. National Weather Service, MeteoGate (Europe), China Meteorological Administration (CMA), Korea Meteorological Administration (KMA), Japan Meteorological Agency (JMA), Environment and Climate Change Canada (ECCC), WMO-related public sources, and similar public alert feeds
*   **Earthquake alerts**
    *   *What is sent:* Requests for a single worldwide public earthquake summary feed — the request carries no location or region information at all; your device location is used only on-device to decide whether a reported quake is near you
    *   *Provider:* U.S. Geological Survey (USGS) public earthquake feed
*   **Music identification (optional, Power Pack+)**
    *   *What is sent:* Short audio fingerprints — never raw audio — when music is detected and Shazam is enabled (can be turned off in settings)
    *   *Provider:* Apple Shazam / ShazamKit
*   **Road context**
    *   *What is sent:* Anonymous Overpass API queries based on map sector around your location
    *   *Provider:* OpenStreetMap contributors via Overpass API
*   **Purchases & entitlements**
    *   *What is sent:* Purchase tokens and entitlement / trial status for the optional one-time Power Pack+ unlock (not a subscription)
    *   *Provider:* Apple App Store
*   **Constellation mesh (optional, Power Pack+)**
    *   *What is sent:* When you enable multi-phone Constellation, participating devices exchange acoustic metadata needed for a shared picture — for example relative pose / Ultra-Wideband ranging where available, bearings, sound labels, and ephemeral caption text. Traffic is peer-to-peer **only between phones that are running Vigilant Ear and that you link for Constellation**. Phones without the app cannot join that mesh or receive that metadata. Wingdings does not operate a cloud mesh relay for this audio pipeline.
    *   *Provider:* Apple frameworks (e.g. Network / Nearby Interaction) between your Vigilant Ear devices
*   **In-app legal documents**
    *   *What is sent:* Standard web requests when you open Privacy Policy, Terms, Support, or product README pages in the app
    *   *Provider:* GitHub (document hosting)
*   **Research Array live map (view-only)**
    *   *What is sent:* Standard web requests when you tap **Map** to open the public array dashboard in your browser — like visiting any website. Viewing sends nothing from your journal or detections.
    *   *Provider:* Wingdings research service (web application host)
*   **Research Array (optional — off by default)**
    *   *What is sent:* Only if you turn the feature on: small, metadata-only detection reports when a qualifying event is registered (time, approximate location, basic signal characteristics, app version). See **Research Array** below.
    *   *Provider:* Infrastructure we operate (application host and database providers such as our web and Postgres hosts). Details and limits are in the Research Array section.

We choose these services to deliver map, weather, music-label, purchase, multi-device, and (when you opt in) research-array functionality. **Wingdings does not receive your microphone audio, continuous location history, or contact information from these providers.**

## What Wingdings Collects

### No Remote Telemetry or Diagnostics

Vigilant Ear is designed so that core listening and caption features run on your device. We do **not** collect remote crash analytics, advertising telemetry, or general usage analytics SDKs.

Optional **local** debug logs may be written on the device for troubleshooting; they are not uploaded by the app as a telemetry pipeline, and caption text is not included in exported debug content.

**Exception — Research Array only:** if you opt in (see below), Wingdings may receive the limited event reports you choose to contribute. That path is not advertising analytics; it is an optional research contribution you control and can turn off at any time.

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
