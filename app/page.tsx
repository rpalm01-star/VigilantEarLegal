/**
 * Bare `/` → the English home. Language-prefixed URLs are the canonical form.
 *
 * 🔴 NOT `redirect()` from `next/navigation`. Under `output: "export"` there is no server to issue
 * the 307: the redirect throws at BUILD time and Next writes its own ERROR page as `index.html`.
 * That shipped — vigilantear.com served `__next_error__` while all twelve `/<lang>/` routes were
 * fine. The worst possible split, because the bare domain is the URL on the App Store listing and
 * in outreach, and a search engine crawling it saw an error page.
 *
 * Two layers now, deliberately:
 *   1. `vercel.json` issues a real 308 — no HTML is served for `/` at all, so this is what users
 *      and crawlers actually get. Fast, correct status code, no flash.
 *   2. This page is the FLOOR: if the platform config is ever bypassed — `out/` served from any
 *      other static host, or a local preview — the artifact is still a valid redirect page rather
 *      than an error. The visible link is what a crawler and a no-JS reader follow.
 */
"use client";

import { useEffect } from "react";

const TARGET = "/en/";

export default function Root() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return (
    <main style={{ padding: "3rem 1.5rem", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "1.25rem", fontWeight: 500 }}>Vigilant Ear</h1>
      <p>
        Continue to <a href={TARGET}>vigilantear.com/en/</a>.
      </p>
    </main>
  );
}
