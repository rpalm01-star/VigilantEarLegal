"use client";

import { useEffect } from "react";

/**
 * Renders ```mermaid fences into diagrams after hydration.
 *
 * `marked` turns a mermaid fence into a plain <pre><code class="language-mermaid"> block, so
 * without this the README's architecture diagrams render as walls of raw graph syntax. The Google
 * Sites embeds pulled mermaid from a CDN; this bundles it instead — no third-party request, no
 * version drifting under us, and nothing to break when a CDN is blocked on a school or corporate
 * network (the same networks a Deaf student might be on).
 *
 * Loaded DYNAMICALLY: mermaid is around a megabyte, and most pages here — every privacy policy,
 * every terms page, in eleven languages — contain no diagram at all. They should not pay for it.
 */
export default function Mermaid() {
  useEffect(() => {
    const blocks = Array.from(
      document.querySelectorAll<HTMLElement>("code.language-mermaid"),
    );
    if (blocks.length === 0) return;

    let cancelled = false;
    (async () => {
      const mermaid = (await import("mermaid")).default;
      if (cancelled) return;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        securityLevel: "strict",
        // 🔴 Real <text> elements, not foreignObject. Mermaid 11 defaults to HTML labels inside
        // <foreignObject>, and those come out EMPTY when the returned SVG is injected as markup —
        // the boxes and arrows draw, every label is blank, and the diagram reads as a handful of
        // empty rectangles. Verified: 7 foreignObjects, all with zero width and no text.
        htmlLabels: false,
        flowchart: { htmlLabels: false, useMaxWidth: true },
        themeVariables: {
          background: "#0a0f14",
          primaryColor: "#0f1720",
          primaryTextColor: "#e6edf3",
          primaryBorderColor: "#35d07f",
          lineColor: "#6fd3ff",
          fontSize: "15px",
        },
      });

      for (const [i, code] of blocks.entries()) {
        const source = code.textContent ?? "";
        if (!source.trim()) continue;
        const host = code.closest("pre") ?? code;
        try {
          const { svg } = await mermaid.render(`mmd-${i}`, source);
          if (cancelled) return;
          const wrap = document.createElement("div");
          wrap.className = "mermaid-figure";
          wrap.innerHTML = svg;
          host.replaceWith(wrap);
        } catch {
          // Leave the source visible rather than replacing a diagram with an error box: the raw
          // graph text is at least readable, and a broken diagram must never hide the document.
        }
      }
    })();

    return () => { cancelled = true; };
  }, []);

  return null;
}
