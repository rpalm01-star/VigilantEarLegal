// Checks the static export in out/ after `next build`. Exits 1 on any failure.
//   1. No page loads anything from raw.githubusercontent.com (third-party, rate-limited, 300 s cache).
//   2. Every site-relative <img src> on a page exists in out/.
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
console.log(`${pages.length} pages checked, ${failures.length} failures`);
for (const f of failures.slice(0, 20)) console.log("  " + f);
process.exit(pages.length === 0 || failures.length ? 1 : 0);
