# Why Vigilant Ear?

*Updated September 2026.*

**This is not a sound-detection app.** Those recognize a short list of noises and put an icon on your screen. Nearly everything that actually costs you is outside that list.

Someone behind you says your name. You don't turn around. They decide you're rude.

A barista calls your order. A nurse calls you at a window. Same three seconds, same conclusion.

Your phone heard every one of them. It just had no way to tell you.

Vigilant Ear changes that — on the phone already in your pocket, and the audio never leaves it.

- **You never pick a language** — it works out what is being spoken
- **Who said it** — voices separated by color, and nameable
- **Where it came from** — a bearing and a distance, on a live map
- **When it isn't sure** — a confidence mark on every line
- **When it's *you* being called** — a distinct tap for your own name
- **No subscription** — captions and alerts free forever

And it is not one problem, it is three. A doorbell is the easy case: loud, sharp, over in a second. Traffic building on the road outside is the hard one — far off, broadband, no clean edge to grab hold of. An earthquake is the case nobody hears at all: it arrives as motion and pressure beneath human hearing. Your phone's barometer and accelerometer feel it, and Vigilant Ear tells you whether it reached you **through the air** or **from the ground**.

Assistive apps solve the first. No other one does all three. Vigilant Ear does them at once.

## The part nobody puts in the brochure

Every listening app leads with the smoke alarm. The smoke alarm is the easy part — it is loud, it is rare, and you will probably find out anyway. What costs you is the subtle stuff. A stressed word. A quiet person walking nearby at night. A baby's cry in another room.

**Name Called** is a list you type — yours, a kid's, a partner's — and a distinct tap when those words land, with a direction on the Watch and the Standing Watch lamp. The sentence still appears in captions like any other speech. The alert is not *someone spoke*. It is **they were addressing you**.

## Where it came from

A siren is not information until you know which way it is coming from. Every sound Vigilant Ear hears goes onto a live map with a bearing and a rough distance, so an alert answers the question you actually have: *do I need to move, and which way?*

Direction Tones can send that bearing to one ear, for single-sided hearing.

## Who is speaking, and how much to trust it

Live captions separate the people around you by voice, each in their own color, so a conversation reads as a conversation instead of one unbroken block. Name the voices you know and the app keeps recognizing them.

Most captioning apps hand you every word with the same quiet confidence and leave you to find out later which ones were wrong. Every line here carries a three-bar mark — three bars means it heard clearly, one means take it with a grain of salt — and the individual words it was unsure of are underlined. In a noisy room, knowing which words to trust matters as much as the words.

You never pick a language first. Vigilant Ear works out what is being spoken and captions it. A room with three languages in the air is still a room you can follow.

Almost all of those it can also translate into yours. Where it cannot, it tells you so and shows you the original, rather than handing you a guess dressed up as a translation.

## One phone points. Two triangulate.

One phone's microphones sit a few inches apart, which is enough to tell you a direction. Put a second phone across the room and the array is as wide as the room: the bearing from each one crosses the other, and a direction becomes a position. Captions merge instead of competing, and phones that have never met form that array on the spot, working out to the foot where each of them is standing. Nobody has to be in the same conversation for it to help.

**Remote Link** reaches someone who is not with you: video and caption text, with **no audio track at any point** — so nothing about it depends on hearing at either end, and it gives you a way to sign. Your captions cross as text and arrive in the other reader's language. You send a code; they join from inside the app without buying anything.

It is encrypted end to end between the two phones. The relay that forwards it cannot read it, we cannot read it, and nothing is recorded — not on either phone, not on any server. The app tells you plainly whether you are **Direct** or **Relayed**. [The full path](PRIVACY.md).

## Warnings from the people who issue them

Severe weather comes from nine government sources — the United States, Europe, Japan, China, Korea, India, Canada, Australia and Brazil — filtered to where you actually are. Earthquake alerts wait for USGS confirmation rather than guessing.

Those warnings arrive through our aggregation service rather than your phone calling each agency directly, which means **your phone never contacts a foreign government's servers**, and a shared public feed cannot drop your alert because too many people were asking at once. The precise *am I inside this warning area?* test runs on your phone and never leaves it.

## Several small experts, not one big one

The obvious way to build a listening app is to run one model and report whatever it says. Vigilant Ear runs a handful of specialists instead, each doing one job it is actually good at: one recognizes everyday sounds, a second checks the first one's work, another works out where a sound came from, another separates the voices in a room, another decides whether music is really playing.

They disagree often, and that is the point. A siren-shaped moment inside a song is identical to a siren if you only ask one model. Asking three, and requiring them to agree before anything interrupts you, is the difference between an alert you trust and an app you eventually mute.

It also lets the app say it is unsure instead of guessing — the confidence marks on captions, the voice shown as unattributed rather than wearing the wrong name, the alert that waits one more frame for corroboration. A single model has no way to know it is wrong. Several do — so long as something is deciding, frame by frame, which of them has earned the benefit of the doubt.

The **Acoustic Scope** puts that raw perception on screen — spectrum, spectrogram, ⅓-octave bands, chroma, harmonic partials. It is **free for everyone**, because for a lot of people watching the shape of a sound is the fastest way to understand it. There is a [field guide to reading it](ACOUSTICSCOPE.md).

## What we cannot see

Listening, transcription, translation and sound classification all run on your phone. The work that touches what you say and what you hear is not something we can read, because it never reaches us. That is a deliberate constraint rather than a flourish: models small enough to live in your pocket are models that never need to send what they hear anywhere.

A few things do use the network, and they are worth naming rather than rounding down to none: maps; the weather and earthquake alerts above; Music ID, which sends a short audio fingerprint and never recorded audio; road context; App Store purchases; and Remote Link, which travels between the two phones by definition — encrypted end to end, so nothing in between can read it.

No ads. Nothing sold. No account required.

## What it costs

Free for the first 90 days. After that, captions and alerts stay free forever — the safety floor is not the thing we sell.

A single one-time payment keeps **Power Pack+**: Auto-Translate, which turns a language you do not read into one you do, as it is spoken; and Music ID, which names the song in the room so you know what everyone else is hearing. **No subscription, ever** — and no new hardware to buy.

---

*Vigilant Ear is an experimental research and accessibility aid — not a certified or life-saving device. Always use your own situational awareness.*

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Three U.S. patents pending
</p>
