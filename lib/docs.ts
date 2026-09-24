/**
 * The document set, read from the markdown files that already live in this repo.
 *
 * 🔴 The .md files stay exactly where they are, at the repo root, with their existing names.
 * Three things read them and only one is this site:
 *   1. the iOS app, which fetches raw.githubusercontent.com/.../VigilantEarLegal/main/<FILE>.md
 *   2. the Google Sites embeds, until those are retired
 *   3. anyone reading the repo on GitHub
 * Renaming or moving them would break the first two silently, so this maps URLs onto the files
 * rather than reorganising the files to suit the URLs.
 */

import fs from "node:fs";
import path from "node:path";

/** Every language the docs are actually translated into. `en` has no suffix. */
export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt-BR", label: "Português" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "ar", label: "العربية" },
  { code: "ja", label: "日本語" },
  // Two Chinese entries, so each label names its script in that script — 简体 / 繁體 — the way
  // Apple's own language list does. "中文" twice would be two identical buttons.
  { code: "zh-Hans", label: "简体中文" },
  // 🔴 Traditional Chinese, added 2026-09-24 for 1.1.9. Same lesson as Turkish below: the
  // _zh-Hant.md files and the app's `LegalDocuments` mapping both existed before this line did,
  // and until it did a Taiwanese or Hong Kong reader got English on the site and in the app.
  { code: "zh-Hant", label: "繁體中文" },
  { code: "ko", label: "한국어" },
  { code: "ru", label: "Русский" },
  { code: "hi", label: "हिन्दी" },
  // 🔴 Turkish was MISSING here while every translated doc already had a `_tr.md` sibling and the
  // apps had shipped Turkish as their 13th language. The files existed, the readers existed, and
  // this list was the only thing keeping them apart — a Turkish user got English on the site and a
  // 404 in the app. Added 2026-09-16.
  { code: "tr", label: "Türkçe" },
  { code: "ro", label: "Română" },
] as const;

export const RTL_LANGUAGES = new Set(["ar"]);

export type Doc = {
  /** URL segment. The home page uses "" and renders README. */
  slug: string;
  /** Base filename without language suffix or extension. */
  file: string;
  title: string;
  /** False for docs that exist only in English (no _xx.md siblings). */
  translated: boolean;
  /** Shown in the header nav. */
  inNav: boolean;
};

export const DOCS: Doc[] = [
  { slug: "", file: "README", title: "Vigilant Ear", translated: true, inNav: true },
  // `translated: true` with no `WHY_xx.md` siblings on purpose: every language URL generates, and
  // `readDoc` falls back to WHY.md while reporting servedLang "en", so the page says it is showing
  // English rather than pretending otherwise. Drop real translations in later and nothing changes.
  { slug: "why", file: "WHY", title: "Why Vigilant Ear?", translated: true, inNav: true },
  { slug: "privacy", file: "PRIVACY", title: "Privacy Policy", translated: true, inNav: true },
  { slug: "terms", file: "TERMS", title: "Terms of Service", translated: true, inNav: true },
  { slug: "support", file: "SUPPORT", title: "Support", translated: true, inNav: true },
  { slug: "witness-ear", file: "WITNESSEAR", title: "Witness Ear", translated: true, inNav: true },
  { slug: "byom", file: "BYOM", title: "Bring Your Own Model", translated: true, inNav: true },
  // `translated: false` here was stale: ACOUSTICSCOPE has all 12 sibling translations on disk, so
  // the flag alone was serving English to every non-English reader. Verified against the files.
  { slug: "acoustic-scope", file: "ACOUSTICSCOPE", title: "Acoustic Scope", translated: true, inNav: true },
  { slug: "physics", file: "PHYSICS", title: "Physics", translated: false, inNav: true },
  { slug: "sound-packs", file: "iOSDynamicSoundPacks", title: "Sound Packs", translated: false, inNav: false },
];

/** Repo root — the .md files live here. Exported so /docs/[name] resolves against the same base. */
export const ROOT = process.cwd();

export function docBySlug(slug: string): Doc | undefined {
  return DOCS.find((d) => d.slug === slug);
}

/**
 * Markdown for one doc in one language, falling back to English when a translation does not
 * exist. Returns the language actually used, so the page can say so rather than pretending.
 */
export function readDoc(doc: Doc, lang: string): { markdown: string; servedLang: string } | null {
  const candidates = lang === "en" || !doc.translated
    ? [`${doc.file}.md`]
    : [`${doc.file}_${lang}.md`, `${doc.file}.md`];
  for (const name of candidates) {
    const p = path.join(ROOT, name);
    if (fs.existsSync(p)) {
      return {
        markdown: fs.readFileSync(p, "utf8"),
        servedLang: name.includes("_") ? lang : "en",
      };
    }
  }
  return null;
}

/** Every (lang, slug) pair that has a page. Drives generateStaticParams. */
export function allPages(): { lang: string; slug: string }[] {
  const out: { lang: string; slug: string }[] = [];
  for (const l of LANGUAGES) {
    for (const d of DOCS) {
      if (l.code !== "en" && !d.translated) continue;   // no fake translated URL for English-only docs
      out.push({ lang: l.code, slug: d.slug });
    }
  }
  return out;
}
