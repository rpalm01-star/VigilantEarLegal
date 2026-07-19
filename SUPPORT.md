# Vigilant Ear Support 👂🛰️

Thank you for using **Vigilant Ear**. Our mission is to provide enhanced situational awareness through advanced acoustic event detection and real-time emergency alerts.

## Contact Us

If you are experiencing technical issues, have questions about alert accuracy, or would like to provide feedback, please reach us via email at:

**Email:** [vigilantear@wingdingssocial.com](mailto:vigilantear@wingdingssocial.com)

## Frequently Asked Questions

### How does Vigilant Ear work in the background?

Vigilant Ear listens when monitoring is on and the necessary permissions are granted. It runs efficiently in the background and can send haptics, on-screen alerts, optional push notifications, and (when paired) Apple Watch direction cues when it detects important sounds.

### Does Vigilant Ear drain my battery?

No. Vigilant Ear is engineered to use little battery so you can leave it on.

Here is how we keep battery use low:  
- Efficient on-device machine learning models that run on the Neural Engine where available.  
- Background listening hibernates when *all* alert categories are turned off.  
- Almost all processing stays on your phone; network is limited to maps, public weather feeds, optional music ID, and purchases.  
- Smart throttling reduces work when the acoustic scene is quiet.  
- Heavy math runs off the display thread and only when needed.

### Why isn't the app detecting sirens?

Ensure you have granted **Microphone** permission in iOS Settings. Vigilant Ear needs the mic to process acoustic signatures. Confirm that **Siren** (or the relevant category) is enabled in Preferences, and that notifications were allowed if you expect push alerts. Haptics may be quieter if the device is in Silent Mode depending on system settings.

### How accurate are the weather alerts?

Vigilant Ear polls official government CAP (Common Alerting Protocol) feeds. Alerts are as accurate as the data provided by the National Weather Service and other international agencies (including Europe MeteoGate, China CMA, and Korea KMA). Location simulation, coverage gaps, or network delays may occasionally affect update frequency.

### Does the app work in the background?

Yes. Vigilant Ear is designed to monitor for critical acoustic events while in the background when the necessary permissions are enabled and at least one alert category is on.

### What do the alert toggles control?

The alert category toggles in **Preferences** control whether Vigilant Ear treats those sounds as alert-worthy for **notifications** (and related delivery) when matching sounds are detected.

These toggles primarily affect **background / notification** delivery. They do **not** turn off the on-screen map and radar display when the app is open in the foreground.

Typical categories include:  
- **Siren Alerts** — Emergency vehicle sirens (police, fire, ambulance, etc.)  
- **Alarms** — Smoke detector and fire alarms  
- **Knocks** — Door knocks and doorbells  
- **Baby** — Baby cry (when enabled)  
- **Weather Alerts** — Severe weather warnings from official government CAP sources  
- **People Alerts** — People nearby (often best in quieter environments; may stay opt-in)

**Notification permission** is the system-level master switch. If you deny notifications on the startup verification screen (or later in iOS Settings), you will not receive push alerts even if individual categories are on. On-screen alerts while the app is open can still appear.

### What's free, and what's Power Pack+?

The safety core is **free, forever**:

- Local sound alerts (sirens, alarms, knocks/doorbells, baby, person nearby) with on-screen and optional push delivery  
- **Speaker Mode** live captions (on-device; directional where hardware allows)  
- Severe-weather CAP feeds for your region — U.S. **NWS**, Europe **MeteoGate**, **China CMA**, and **Korea KMA**  
- **Feature Playground** practice alerts (watermarked so they never look like a live emergency)  
- **Apple Watch** companion direction cues and **Live Activity** (Lock Screen / Dynamic Island / Watch Smart Stack), where available  

**Power Pack+** is a one-time unlock (**not a subscription**) with a **90-day free trial**. It adds:

- **Speaker Auto-Translate** — on-device translation of nearby speech into your language  
- **Constellation** — multi-iPhone shared hearing over Ultra-Wideband  
- **Music ID** — ShazamKit song recognition  

Everything for recognition still runs on your device; Power Pack+ only changes which features are unlocked, never where raw audio is sent for analysis.

### How do I manage Shazam and translation?

These live under **Power Pack+** in the app (action fan sparkles / menu):

- **Shazam (Music ID)** — environmental music identification on the spatial radar (Power Pack+)  
- **Speaker Auto-Translate** — translate live captions into your language (Power Pack+)  

Severe-weather feeds are **free** and managed with the weather / alert preferences — they are not a Power Pack+ add-on.

### How do I disable the microphone when the app is not in the foreground?

The app stops using the microphone for background monitoring when *all* alert category toggles are turned off in Preferences. It does not listen for or send background sound notifications when all categories are disabled. When at least one alert is enabled, the microphone may be used for background sound collection.

You can also revoke Microphone access entirely in iOS Settings (that stops all acoustic features, including foreground listening).

### Why doesn't the app consistently detect *all* sounds?

Acute sounds like alarms and firetruck sirens are relatively easy for the sound ML engine to detect. Broadband sounds (like car engines or tires) are harder; we do an adequate but imperfect job given phone hardware limits. Time Difference of Arrival (TDOA) algorithms are only so precise given the short distance between microphones. Direction needs a stereo-mic iPhone; iPads are captions-focused without full bearing.

### How do Feature Playground and practice alerts work?

Open **Feature Playground** (wand) to try Home & Street practice sounds and other previews. Practice events are clearly marked **PREVIEW** so they never pretend to be a real emergency. Closing Feature Playground tears practice state down (including temporary GPS spoof used in some demos).

---

*Vigilant Ear is an accessibility tool built with care. Please use it responsibly.* 

Made with ❤️ for the D/HH community and acoustic research.

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
