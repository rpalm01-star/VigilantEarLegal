# Privacy Policy for Vigilant Ear 👂🛰️

**Effective Date:** July 11, 2026

## Introduction

Vigilant Ear ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains what information the app processes, what stays on your device, and when limited data may be sent over the internet to provide specific features.

## Privacy at a Glance

- **Core acoustic detection runs on your device.** Sound classification, directional tracking, live captions, and alert logic are designed to work locally using your phone's microphone and sensors.
- **We do not sell your data** and we do not use advertising or behavioral analytics SDKs.
- **We do not store or upload audio recordings.** Microphone audio is processed in real time for detection and (when enabled) captions; it is not saved as a sound file by Vigilant Ear for later playback or cloud analysis.
- **Some features use the internet** — maps, severe-weather feeds, optional music identification, road data, app-store purchases, optional multi-phone mesh traffic between *your* devices, and loading of in-app legal pages. These are described below.
- **You stay in control.** You can disable Shazam music identification, turn off alert categories, leave Constellation off, revoke permissions in system settings, or stop background listening at any time.

## Information Processed on Your Device

With your permission, Vigilant Ear accesses the following **locally**:

- **Microphone audio** — Used in real time to detect environmental sounds (sirens, vehicles, doorbells, baby cry, people nearby, etc.), estimate direction, and (when Speaker Mode is on) produce live captions and optional on-device translation.
- **Speech recognition (on-device)** — When captions are enabled, your device’s speech frameworks transcribe nearby speech into text on the phone. Caption text is shown live and is not archived by Vigilant Ear as a permanent transcript history; debug logs do not include caption content.
- **Location** — Used to place detected sounds and weather-alert areas on the map and to improve directional guidance.
- **Device orientation and motion** — Used to improve bearing accuracy.
- **Camera (optional)** — Used only if you open the camera AR “see the sound” view, so markers can be pinned in the live camera preview. Camera frames are used for on-device display; they are not uploaded by Vigilant Ear for sound recognition.
- **Apple Watch (optional)** — When a Watch companion is available, alert labels and direction cues may be relayed to the paired Watch so you can glance at your wrist.

This on-device processing is the heart of the app. Competitor apps often stream audio to the cloud for analysis and monetization. Vigilant Ear is built differently: your acoustic awareness pipeline is designed to run on the phone itself.

## Network & Third-Party Services

When you use certain features — or when the app needs them to function — **limited data may leave your device** and be handled by third-party services under their own privacy policies:

*   **Map display**
    *   *What is sent:* Map tile requests; your map viewport and approximate location as needed to render the map
    *   *Provider:* Apple Maps / MapKit
*   **Severe weather alerts**
    *   *What is sent:* Requests to public CAP/Atom weather feeds; your general region may be inferred from feed selection and device location
    *   *Provider:* U.S. National Weather Service, MeteoGate (Europe), China Meteorological Administration (CMA), Korea Meteorological Administration (KMA), WMO-related public sources, and similar public alert feeds
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
    *   *What is sent:* When you enable multi-phone Constellation, participating devices exchange acoustic metadata needed for a shared picture — for example relative pose / Ultra-Wideband ranging where available, bearings, sound labels, and ephemeral caption text. Traffic is peer-to-peer between the phones you link; Wingdings does not operate a cloud mesh relay for this audio pipeline.
    *   *Provider:* Apple frameworks (e.g. Network / Nearby Interaction) between your devices
*   **In-app legal documents**
    *   *What is sent:* Standard web requests when you open Privacy Policy, Terms, Support, or product README pages in the app
    *   *Provider:* GitHub (document hosting)

We choose these services to deliver map, weather, music-label, purchase, and multi-device functionality. **Wingdings does not receive your microphone audio, continuous location history, or contact information from these providers.**

## What Wingdings Collects

### No Remote Telemetry or Diagnostics

Vigilant Ear is designed to operate entirely locally on your device. We do not collect, transmit, or store remote telemetry, crash logs, diagnostic records, or usage analytics on Wingdings servers. Optional **local** debug logs may be written on the device for troubleshooting; they are not uploaded by the app as a telemetry pipeline, and caption text is not included in exported debug content.

## What We Do Not Do

We do **not**:

- Sell or rent your personal information
- Store environmental audio recordings on our servers
- Run ad networks, cross-app trackers, or behavioral profiling SDKs
- Upload your continuous location trail to Wingdings
- Upload raw microphone audio for cloud speech or sound recognition

## Your Choices & Controls

You can:

- **Revoke permissions** (microphone, location, camera, notifications, speech recognition) in iOS Settings
- **Disable Shazam music identification** in Power Pack+ / preferences
- **Turn off individual alert categories** (sirens, weather, doorbells, baby, etc.)
- **Stop background listening** when all alert categories are disabled
- **Leave Constellation off** so no mesh metadata is shared with other phones
- **Use Feature Playground** to preview alerts and features locally with a clear PREVIEW watermark, without implying a real emergency

## Platform Guidelines

Vigilant Ear follows Apple App Store privacy requirements and Apple's guidelines for apps serving people with accessibility needs. We update this policy when our practices or platform obligations change.

## Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be reflected by updating the **Effective Date** at the top of this page.

## Contact Us

If you have questions about this Privacy Policy, contact us at:

**Email:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

---

❤️ Vigilant Ear is built with love and respect for the Deaf and hard-of-hearing community. Your trust matters to us.

*Vigilant Ear is an accessibility tool built with care. Please use it responsibly.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
