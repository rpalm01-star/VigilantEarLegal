/**
 * Raw markdown for the iOS and Android apps.
 *
 * WHY THIS EXISTS: both apps used to fetch
 * `raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/<FILE>.md` directly. That is not a
 * supported CDN — GitHub rate-limits it and may serve 429 — and it baked a repo path into two
 * shipping binaries. Robert, 2026-09-16: "i'd really rather it serve from my domain not github."
 *
 * The URL keeps the apps' EXISTING filename convention (`PRIVACY.md`, `PRIVACY_es.md`) on purpose,
 * even though the layout was free to change: it means each app moves one base-URL constant and
 * nothing else, which is the whole diff. The site's own pages keep their pretty
 * `/{lang}/{slug}/` routes and are unaffected — both read the same .md files at the repo root.
 *
 * 🔴 THIS SITE IS `output: export`, SO NOTHING HERE RUNS IN PRODUCTION. Next renders each path in
 * `generateStaticParams` at BUILD time and ships the result as a plain file; there is no lambda and
 * no filesystem access when a device asks for a document. A name that was not generated is a CDN
 * 404, which is why the name validation below is a build-time sanity check rather than the thing
 * standing between a request and the disk.
 *
 * It also means the English fallback has to be BAKED: `generateStaticParams` emits every
 * document × every language, and the handler resolves each one — so `AREADME_tr.md`, which has no
 * Turkish sibling in the repo, is generated containing the English text instead of 404ing the way
 * it does on GitHub today.
 */

import fs from "node:fs";
import path from "node:path";
import { ROOT, LANGUAGES } from "@/lib/docs";

/** `PRIVACY`, `PRIVACY_es`, `PRIVACY_zh-Hans`. No dots, slashes, or leading dashes. */
const NAME = /^[A-Za-z0-9]+(?:_[A-Za-z]{2}(?:-[A-Za-z]+)?)?$/;

const LANG_CODES = new Set<string>(LANGUAGES.map((l) => l.code));

export const dynamic = "force-static";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ name: string }> },
): Promise<Response> {
  const { name: raw } = await ctx.params;
  const notFound = () =>
    new Response("Not found\n", { status: 404, headers: { "content-type": "text/plain" } });

  if (!raw.endsWith(".md")) return notFound();
  const stem = raw.slice(0, -3);
  if (!NAME.test(stem)) return notFound();

  // 🔴 A language suffix must be a language we actually publish. Otherwise `FOO_zz.md` would be a
  // probe for arbitrary sibling files that happen to match the pattern.
  const underscore = stem.lastIndexOf("_");
  const suffix = underscore === -1 ? null : stem.slice(underscore + 1);
  if (suffix !== null && !LANG_CODES.has(suffix)) return notFound();
  const base = underscore === -1 ? stem : stem.slice(0, underscore);

  // Requested file first, then the English original. The apps do NOT fall back on their own — a
  // language with no translation 404s for them today (AREADME has no _tr sibling, for instance),
  // so doing it here quietly fixes that for both at once.
  for (const candidate of suffix ? [`${stem}.md`, `${base}.md`] : [`${stem}.md`]) {
    const full = path.resolve(ROOT, candidate);
    // Resolve-then-verify: the pattern should already prevent escape, but this is the check that
    // actually guarantees it.
    if (path.dirname(full) !== path.resolve(ROOT)) return notFound();
    if (!fs.existsSync(full)) continue;
    return new Response(fs.readFileSync(full, "utf8"), {
      headers: {
        "content-type": "text/markdown; charset=utf-8",
        "cache-control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  }
  return notFound();
}

/**
 * Every document in every language — not just the files that exist.
 *
 * 🔴 EMITTING ONLY THE REAL FILES WOULD SHIP THE BUG THIS REPLACES. The apps build
 * `<FILE>_<lang>.md` unconditionally and do not fall back, so a document with no translation is a
 * hard 404 for them on GitHub today. Generating the full matrix means the handler above runs once
 * per combination at build time and writes the English text under the translated name, so a
 * Turkish reader gets the English document rather than an error.
 */
export function generateStaticParams(): { name: string }[] {
  const bases = new Set<string>();
  for (const f of fs.readdirSync(ROOT).filter((f) => f.endsWith(".md"))) {
    const stem = f.slice(0, -3);
    const u = stem.lastIndexOf("_");
    const suffix = u === -1 ? null : stem.slice(u + 1);
    bases.add(suffix !== null && LANG_CODES.has(suffix) ? stem.slice(0, u) : stem);
  }
  const names: { name: string }[] = [];
  for (const base of bases) {
    names.push({ name: `${base}.md` });
    for (const l of LANGUAGES) {
      if (l.code !== "en") names.push({ name: `${base}_${l.code}.md` });
    }
  }
  return names;
}
