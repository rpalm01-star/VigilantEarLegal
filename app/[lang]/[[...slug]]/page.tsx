import { marked } from "marked";
import { notFound } from "next/navigation";
import {
  DOCS, LANGUAGES, RTL_LANGUAGES, allPages, docBySlug, readDoc,
} from "@/lib/docs";

/**
 * Every doc page, in every language, rendered at BUILD time.
 *
 * The Google Sites version fetched raw markdown from GitHub in the browser and rendered it with
 * marked.js, which meant a doc page could show a spinner — or nothing — when GitHub was slow, and
 * meant the text was invisible to search engines. It also machine-translated the English with a
 * Google Translate widget, while this repo has held real translations in eleven languages the
 * whole time. Those translations are what get served here.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return allPages().map((p) => ({
    lang: p.lang,
    slug: p.slug === "" ? [] : [p.slug],
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string; slug?: string[] }> },
) {
  const { lang, slug } = await params;
  const doc = docBySlug(slug?.[0] ?? "");
  return {
    title: doc ? (doc.slug === "" ? "Vigilant Ear" : `${doc.title} · Vigilant Ear`) : "Vigilant Ear",
    // Every translation of a page points at the others, so a search engine (and a reader who
    // lands on the wrong one) can find the right language.
    alternates: doc
      ? {
          languages: Object.fromEntries(
            LANGUAGES.filter((l) => l.code === "en" || doc.translated)
              .map((l) => [l.code, `/${l.code}/${doc.slug}`]),
          ),
        }
      : undefined,
    other: { lang },
  };
}

export default async function DocPage(
  { params }: { params: Promise<{ lang: string; slug?: string[] }> },
) {
  const { lang, slug } = await params;
  const doc = docBySlug(slug?.[0] ?? "");
  if (!doc) notFound();
  const found = readDoc(doc, lang);
  if (!found) notFound();

  const html = await marked.parse(found.markdown, { gfm: true, breaks: false });
  const rtl = RTL_LANGUAGES.has(lang);
  const langs = LANGUAGES.filter((l) => l.code === "en" || doc.translated);

  return (
    <div className="shell" dir={rtl ? "rtl" : "ltr"}>
      <header className="site">
        <a className="brand" href={`/${lang}/`}>Vigilant Ear</a>
        <nav className="docs">
          {DOCS.filter((d) => d.inNav).map((d) => {
            // English-only docs always link to their English URL — a /de/ prefix on a page that
            // has no German would promise a translation that does not exist.
            const href = d.translated ? `/${lang}/${d.slug}` : `/en/${d.slug}`;
            return (
              <a key={d.slug || "home"} href={href}
                 aria-current={d.slug === doc.slug ? "page" : undefined}>
                {d.title}
              </a>
            );
          })}
        </nav>
        <div className="langbar">
          {langs.map((l) => (
            <a key={l.code} href={`/${l.code}/${doc.slug}`}
               aria-current={l.code === lang ? "true" : undefined}
               hrefLang={l.code}>
              {l.label}
            </a>
          ))}
        </div>
      </header>

      {found.servedLang !== lang && (
        // Say so rather than silently serving English under a German URL.
        <p className="notice">
          This page has not been translated yet — showing the English text.
        </p>
      )}

      <article dangerouslySetInnerHTML={{ __html: html }} />

      <footer className="site">
        <p>
          Vigilant Ear is made by Wingdings, Inc. ·{" "}
          <a href="https://apps.apple.com/us/app/vigilant-ear/id6761978703">App Store</a> ·{" "}
          <a href="https://github.com/rpalm01-star/VigilantEarLegal">Source of these documents</a>
        </p>
      </footer>
    </div>
  );
}
