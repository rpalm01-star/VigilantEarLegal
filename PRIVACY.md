# Privacy Policy for Vigilant Ear 👂🛰️

**Effective Date:** October 8, 2026

## Introduction

Vigilant Ear ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains what information the app processes, what stays on your device, and when limited data may be sent over the internet to provide specific features.

## Privacy at a Glance

- **Core acoustic detection runs on your device.** Sound classification, directional tracking, live captions, and alert logic are designed to work locally, using your phone's microphone and sensors.
- **We do not sell your data,** and the app does not include advertising or usage-tracking tools.
- **We do not store or upload audio recordings.** Microphone audio is processed in real time for detection and, when you turn captions on, for speech-to-text. It is never saved as a sound file and never sent away for analysis. While a caption is being written, the phone holds up to about thirty seconds of sound in working memory, so the opening words are not lost and a line that takes a moment to finish can still be included. That buffer is not saved, is not transmitted, and is gone when you close the app. Rewind brings back recent caption **text** only. No sound is kept for replay.
- **Some features use the internet:** maps, weather, music identification, road data, app-store purchases, pages such as this policy, Constellation (which stays between your own phones), and Research Array reports while that feature is on. Each one is described below.
- **You stay in control.** You can turn off Shazam music identification, turn off alert categories, leave Constellation off, turn **Research Array** off (it is on until you do), revoke permissions in system settings, or stop background listening.

## Information Processed on Your Device

With your permission, Vigilant Ear uses the following **on your device**:

- **Microphone audio.** Used in real time to detect environmental sounds (sirens, vehicles, doorbells, a baby crying, people nearby, and similar sounds), estimate direction, and, when Speaker Mode is on, produce live captions and optional on-device translation.
- **Speech recognition (on-device).** When captions are on, the phone's own speech tools turn nearby speech into text. Caption text is shown live. Vigilant Ear does not keep a permanent transcript. Caption text is removed from a debug log before you can export it or email it to us. To spell names correctly, the app may give that on-device recognizer a short list of words already on this phone: the display names of Constellation phones you have linked, and the title and artist of a song Shazam has just identified. The app does **not** read your Contacts. That list never leaves the device.
- **Name Called (optional).** The names you list so the app can tell you when someone says them: yours, your children's, or the name a barista calls out. They are kept encrypted on this phone, left out of device backups, checked only against live captions on the device, and never sent anywhere.
- **Location.** Used to place detected sounds and weather-alert areas on the map, to improve directional guidance, and to remember how quiet a familiar place is so music detection does not have to relearn it every time you open the app. That last use saves a latitude on its own, with no longitude, rounded to about 100 meters, for at most eight places. It stays in the app's own settings on this phone and is never sent anywhere.
- **Device orientation and motion.** Used to improve direction.
- **Camera (optional).** Used only if you open the camera view that shows sound markers in the live preview. Those frames stay on the device. Vigilant Ear does not upload them for sound recognition.
- **Apple Watch (optional).** When a Watch companion is available, alert labels and direction cues may be sent to the paired Watch so you can glance at your wrist.
- **Witness Ear sound journal (optional, off by default).** When you turn Witness Ear on, the app keeps a rolling **24-hour** log on the device. Each entry records the time, what the sound was, how confident the app was, the peak level, the direction when one was measured, and the phone's location at that moment. An entry may also note whether the phone was charging, sitting still, or playing audio, how accurate the location fix was, and, for a sound shared by a linked Constellation phone, that phone's name and model. The journal stays in the app's private storage and is never uploaded by Vigilant Ear. It leaves the phone only inside a PDF report **you** choose to export and share. Entries older than 24 hours are deleted automatically. Turning Witness Ear off pauses logging, and kept entries still age out. The in-app trash control deletes the journal immediately. See the Witness Ear guide for details.

Listening, direction, and captions are meant to run on the phone, for the person holding it.

## Network & Third-Party Services

When you use certain features, or when the app needs them to function, **limited data may leave your device** and be handled by third-party services under their own privacy policies:

*   **Map display**
    *   *What is sent:* Map tile requests, including the part of the map on screen and the approximate location needed to draw it
    *   *Provider:* Apple Maps / MapKit on iPhone and iPad; Google Maps on Android
*   **Severe weather alerts (through our own alert service)**
    *   *Why it exists:* Official warnings come from national weather agencies. Each phone used to contact those agencies directly, so an agency could see the phone's network address and how often it checked. Those public feeds limit how many requests they will answer, and they began dropping alerts as more people used the app. Our relay now collects the official warnings about every **5 minutes** and sends the cached copy when your phone asks. They are the same official warnings. **Your phone does not contact a government server for them.**
    *   *What is sent:* The request carries your app language, a version number for the reply, a radius of 150 km, and a location the phone has already rounded to about **50 km (half a degree)**. That rough area is used only to limit the reply to warnings near you. The precise "am I inside this warning?" test happens **on your phone**. The request includes no name, account, or device identifier.
    *   *What we keep:* Our service keeps a 30-day record of these requests: the time, which feed answered, and the country or place the request was about. The saved record does not keep the network address, the device identifier, or the location cell itself. It is there so we can operate the service. When your phone shows a warning, it also reports how many it has shown for each feed and warning level (for example, "two orange warnings from Japan's weather service"), so we can tell whether a feed is reaching anyone. That count carries no warning identifier, no location, and no device identifier. Your phone keeps the list of warnings it has already counted. Ordinary short-lived hosting logs also exist, as they do for any encrypted web service. We do not use these records to build a profile of you, and we do not sell them.
    *   *Provider:* Official data from government weather and warning services in more than 140 countries and territories, delivered through infrastructure we operate: the Wingdings, Inc. relay
*   **Earthquake alerts (through our own alert service)**
    *   *What is sent:* A request for one worldwide public earthquake list, through the same relay as the weather alerts above, so your phone does not contact a government server for these either. The request carries no location and no region. Your phone decides on its own whether a reported quake is near you.
    *   *Provider:* Official public earthquake feeds, relayed by Wingdings, Inc.
*   **Weather radar**
    *   *What is sent:* When the radar is on, a request for the list of radar images, then the image tiles for the part of the map on screen. Each tile request names a zoom level, a square of the map, and the time of that image. At the closest zoom the square is roughly 40 km across. In some countries the closest image is coarser, so the square is larger. Nothing else is included: no identifier, no account, and no detection data.
    *   *Source:* Radar and satellite images from national weather services (each listed with its license at [vigilantear.com/en/sources](https://vigilantear.com/en/sources)), delivered through our Wingdings relay so your phone does not contact those agencies directly.
    *   *Provider:* Wingdings, Inc.
*   **Help list (the life ring on the map)**
    *   *What is sent:* When you open it, a two-letter country code (from your location if the app has it, otherwise your phone's region setting) and your app language, so the list can show the relevant emergency number and organizations.
    *   *Provider:* Wingdings, Inc.
*   **Caption Support download (iPhones with at least 8 GB of memory)**
    *   *What is sent:* Ordinary web requests for a one-time download of speech-recognition models (about 1 GB), and for the list of those files. Nothing about you, your location, or your audio is included. Once downloaded, the models run on the device, as the rest of captioning does.
    *   *Provider:* Wingdings, Inc. via Cloudflare
*   **Music identification (optional, Power Pack+)**
    *   *What is sent:* A short audio fingerprint, never the recording itself, when music is detected and Shazam is on. You can turn this off in settings.
    *   *Provider:* Apple Shazam / ShazamKit
*   **Road context**
    *   *What is sent:* A position the phone has rounded to about **110 meters**, inside a request for the roads within **500 meters** of that point, so a detected vehicle can be placed on the road it is actually on. The request includes no name, account, or device identifier, and nothing about what the phone heard.
    *   *Provider:* OpenStreetMap contributors, via the public Overpass API
*   **Road routing**
    *   *What is sent:* Your position and the position of a tracked sound, so a driving route between them can be drawn on the map. These positions are sent at the precision the phone has, which is finer than the road-context request above. No name or account is attached, and nothing about the detection itself is included.
    *   *Provider:* Apple Maps / MapKit on iPhone and iPad
*   **Purchases and entitlements**
    *   *What is sent:* Purchase tokens and entitlement or trial status for the optional one-time Power Pack+ unlock (not a subscription)
    *   *Provider:* the Apple App Store on iPhone and iPad; Google Play Billing on Android
*   **Constellation mesh (optional, Power Pack+)**
    *   *What is sent:* When you turn on Constellation, the phones you link exchange what they need for one shared picture. That includes how the phones are aimed relative to each other, Ultra-Wideband distance where the phones support it, bearings, sound labels, where each sound was placed on the map, live caption text, the display name set on each phone, and a signature of each voice so the same person keeps the same number and color on every linked phone. Those voice signatures are held only in the phones' working memory. They are not saved, and they are not sent anywhere except to the phones you have linked.
    *   *Who can join:* Only phones running Vigilant Ear that you link for Constellation. A phone without the app cannot join or receive this information. Wingdings does not operate a cloud relay for it.
    *   *How it is protected:* Each link agrees on a new encryption key that exists only in the two phones' memory (X25519). Every message is encrypted with that key (ChaCha20-Poly1305). The key is thrown away when the connection ends.
    *   *Provider:* Apple's Network and Nearby Interaction frameworks, between your Vigilant Ear devices. **Constellation is an iPhone and iPad feature. The Android app does not include it.**
*   **Remote Link (optional. Starting a link needs Power Pack+; joining is free)**
    *   *Why it exists:* A Deaf or hard-of-hearing person cannot use a voice call. Remote Link is a private video conversation with captions. Two people see each other, read each other's captions and typed text, and can sign on the video.
    *   *What is sent:* **No audio, at any point.** A Remote Link session has no audio track. Where the network allows it, live video, caption text, and anything you type travel **directly between the two phones**, encrypted end to end, so nothing in between can watch or read the call. To set the link up, our service holds the invitation code and the connection details the phones need in order to find each other. That mailbox holds **no video and no text**. It expires after about five minutes. Once the phones are connected, the call no longer depends on it. To limit abuse, the service keeps the network address of the phone that creates a code for up to an hour, and it counts how many links are started and joined. The count carries no address, no code, and no device identifier.
    *   *Captions:* Each phone captions the speech it hears and sends that text to the other phone, in the language it was heard in. The receiving phone translates it, on the device, into the reader's language. This uses the same encrypted connection as the video and does not pass through our servers. **Pause** stops sending video and captions together. Captions also stop when you stop listening.
    *   *If the phones cannot connect directly:* When they are far apart, on different networks, or behind a router that will not allow a direct connection, the encrypted video, captions, and text are forwarded by a relay that **cannot read them**. The relay can see that a connection exists, the network addresses involved, and how much data passes, as any relay must, and nothing more. The app shows whether a link is **Direct** or **Relayed**. A relayed link closes itself after one hour. A direct link does not have that limit.
    *   *Nothing is recorded:* No video, audio, or text from a Remote Link is written to storage on either phone, or stored on any server.
    *   *Provider:* Wingdings, Inc. (the invitation mailbox) and Cloudflare (the relay, used only when a direct connection is not possible)
*   **In-app legal documents**
    *   *What is sent:* Ordinary web requests when you open the Privacy Policy, Terms, Support, or product README pages in the app
    *   *Provider:* Wingdings, Inc.
*   **Research Array live map (view only)**
    *   *What is sent:* Ordinary web requests when you tap **Map** to open the public array dashboard in your browser, the same as visiting any website. Viewing sends nothing from your journal or your detections.
    *   *Provider:* Wingdings, Inc.
*   **Research Array (on until you turn it off)**
    *   *What is sent:* A small, metadata-only report when the phone registers a qualifying event: the time, an approximate location, basic facts about the signal, and the app version. See **Research Array** below.
    *   *Provider:* Wingdings, Inc.

We use these services for maps, weather, music titles, purchases, linked phones, and Research Array reports while that feature is on. **Wingdings does not receive your microphone audio, a continuous location history, or your contacts from these providers.**

## What We Do (and Do Not) Collect

### No remote crash reports or usage tracking

Core listening and captions run on your device. We do **not** collect remote crash reports, advertising data, or general usage statistics.

The app may keep **local** debug logs on the device for troubleshooting. The app does not upload them. Caption text is removed from a log before it can be exported. You may choose to email a log to us.

**Research Array and our own services.** While Research Array is on, Wingdings receives the limited event reports described below. Separately, some features talk to servers we operate: weather and earthquake alerts, weather radar, the help list, the Caption Support download, and setting up a Remote Link. Those requests carry no account and no personal identifier. The weather request includes, at most, a location rounded to about 50 km. None of this is advertising. Each request exists to make one feature work.

## Research Array (on until you turn it off)

Vigilant Ear can contribute **metadata-only** reports to a research array, to help build a shared picture of earthquakes and other very low sounds, including rumbles below the range of hearing.

**The switch is on until you turn it off.** The first time you use a version that includes this, if you have never set the switch yourself, the app turns it on and asks on the map: "Would you like to anonymously participate in our earthquake research service?" Nothing is sent until that question has appeared. After it has appeared, reports can be sent while the switch remains on, including while you are still deciding. Tap **I'm in!** to keep contributing. **No** waits a few seconds and then turns the switch off. Tap it again during that wait to cancel. You can also turn it off in Preferences at any time. Opening the public **Map** page is separate from contributing, and that visit shares nothing from your phone.

While the switch is on, and only when the phone registers a **qualifying** event, the app may send a small report. A qualifying event is a strong enough rumble that does not seem to come from the room around you, a possible seismic signal, or a note that the phone showed an official earthquake confirmation. The report contains:

- the time of the event, from the phone's clock, in universal time
- an approximate location, rounded to about **1 kilometer**, not a street address and not a continuous track
- a few facts about the signal: whether the phone heard it in the air or felt it as motion, the main frequency when there is one, and how sharp the onset was
- the kind of report (a low-frequency onset, a seismic candidate, or an official quake confirmation)
- the app version

**What a Research Array report never includes:** audio, waveforms, recordings, transcripts, captions, contacts, any identifier the app creates for you or for this install, your precise GPS position (finer than the rounding above), or a continuous record of where you go. No feature uploads a recording. Music identification, when you leave Shazam on, sends a fingerprint of the sound rather than the sound itself.

### Where reports go

Reports are sent over an **encrypted (HTTPS)** connection to the Wingdings research service we operate. The report includes **no per-person or per-device research ID** and **no Apple or Google account identifier**. A shared app secret may be used so that only our app can submit reports. That secret does not identify you. Ordinary hosting logs, such as short-lived network records needed to run the service, may exist. They are not a product feature for tracking you, and we do not sell them.

Turning **Research Array** off stops **all future** reports immediately. It does **not** delete reports already sent. Because a report carries **no per-person or per-device identifier**, we cannot look up "everything you contributed" and erase it later. We have no reliable way to know which past reports came from you. That is intentional. It keeps the research stream from becoming a personal history we could reconstruct.

## What We Avoid

We do **not**:

- Sell or rent your personal information
- Record or store microphone audio on our servers
- Run ad networks, cross-app trackers, or tools that profile how you use other apps
- Upload a continuous trail of your location to Wingdings
- Upload raw microphone audio for cloud speech or sound recognition
- Require Research Array for the rest of the app to work. Turning it off leaves every other feature available.

Information the app keeps on the phone, such as the sound journal and the Name Called list, is described above. It is not a copy we hold.

## Your Choices and Controls

You can:

- **Revoke system permissions** for the microphone, location, camera, notifications, and speech recognition. On iPhone or iPad, open Settings → Apps → Vigilant Ear. You can also change those permissions under Settings → Privacy & Security. On Android, open Settings → Apps → Vigilant Ear → Permissions.
- **Turn off Shazam** music identification in Power Pack+ / Preferences
- **Turn off individual alert categories** (sirens, weather, doorbells, baby, and the others)
- **Let the microphone sleep in the background** by turning off the sound alerts: sirens, alarms, knocks and doorbells, baby, and people nearby. Weather and earthquake alerts do not keep the microphone on.
- **Leave Constellation off,** so no mesh information is shared with other phones running Vigilant Ear. A phone without the app cannot receive that information.
- **Turn Research Array off** at any time in Preferences. It stays on until you do. The question on the map controls the same switch.

## Platform Guidelines

Vigilant Ear follows Apple App Store and Google Play privacy requirements, and each vendor's guidelines for apps that serve people with accessibility needs. We update this policy when our practices change, or when a platform's rules change.

## Changes to This Policy

We may update this Privacy Policy from time to time. A material change is shown by updating the **Effective Date** at the top of this page.

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
