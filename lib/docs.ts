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
  { code: "zh-Hans", label: "中文" },
  { code: "ko", label: "한국어" },
  { code: "ru", label: "Русский" },
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
  { slug: "privacy", file: "PRIVACY", title: "Privacy Policy", translated: true, inNav: true },
  { slug: "terms", file: "TERMS", title: "Terms of Service", translated: true, inNav: true },
  { slug: "support", file: "SUPPORT", title: "Support", translated: true, inNav: true },
  { slug: "witness-ear", file: "WITNESSEAR", title: "Witness Ear", translated: true, inNav: true },
  { slug: "byom", file: "BYOM", title: "Bring Your Own Model", translated: true, inNav: true },
  { slug: "acoustic-scope", file: "ACOUSTICSCOPE", title: "Acoustic Scope", translated: false, inNav: true },
  { slug: "sound-packs", file: "iOSDynamicSoundPacks", title: "Sound Packs", translated: false, inNav: false },
];

const ROOT = process.cwd();

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
