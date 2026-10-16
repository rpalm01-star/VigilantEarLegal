// Checks the static export in out/ after `next build`. Exits 1 on any failure.
//   1. No page loads anything from raw.githubusercontent.com (third-party, rate-limited, 300 s cache).
//   2. Every site-relative <img src> on a page exists in out/.
//   3. vercel.json gives /docs/*.md a Cache-Control with max-age > 0. Static export drops headers
//      set in route.ts, so vercel.json is the only place they can come from.
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve(process.argv[2] ?? "out");
const pages = fs.readdirSync(OUT, { recursive: true }).filter((f) => f.endsWith(".html"));
const failures = [];
for (const rel of pages) {
  const html = fs.readFileSync(path.join(OUT, rel), "utf8");
  // Only the rendered markup: the RSC payload repeats it as escaped text.
  const markup = html.replace(/<script>self\.__next_f\.push\(.*?\)<\/script>/gs, "");
  if (markup.includes("raw.githubusercontent.com")) failures.push(`${rel}: loads from raw.githubusercontent.com`);
  for (const [, src] of markup.matchAll(/<img[^>]*\ssrc="(\/[^"]*)"/g)) {
    if (!fs.existsSync(path.join(OUT, decodeURIComponent(src.split("?")[0])))) failures.push(`${rel}: missing ${src}`);
  }
}
const vercel = JSON.parse(fs.readFileSync(process.argv[3] ?? "vercel.json", "utf8"));
// Sources here use regex groups, e.g. "/docs/(.*)", which read as a plain RegExp.
const docRule = (vercel.headers ?? []).find((r) => new RegExp(`^${r.source}$`).test("/docs/PRIVACY.md"));
const docCache = docRule?.headers.find((h) => h.key.toLowerCase() === "cache-control")?.value ?? "";
if (!(Number(/max-age=(\d+)/.exec(docCache)?.[1] ?? 0) > 0)) failures.push(`vercel.json: /docs/*.md has no Cache-Control max-age > 0 (${docCache || "no rule"})`);

console.log(`${pages.length} pages checked, ${failures.length} failures`);
for (const f of failures.slice(0, 20)) console.log("  " + f);
process.exit(pages.length === 0 || failures.length ? 1 : 0);
