import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Section = {
  title: string;
  content: ReactNode;
};

const legalLinks = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-and-conditions"],
  ["Disclaimer", "/disclaimer"],
  ["Cancellation & Refunds", "/cancellation-and-refund"],
] as const;

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: Section[] }) {
  return (
    <main className="legal-page">
      <a className="skip-link" href="#legal-content">Skip to main content</a>
      <header className="site-header legal-header">
        <div className="site-shell nav-wrap">
          <Link className="brand" href="/" aria-label="Hi-Tech Industries home">
            <Image src="/hitech-logo.jpeg" alt="Hi-Tech Industries and Engineering" width={225} height={75} sizes="(max-width: 640px) 150px, 190px" priority />
          </Link>
          <Link className="legal-home-link" href="/">← Back to home</Link>
        </div>
      </header>

      <section className="legal-hero" id="legal-content" tabIndex={-1}>
        <div className="site-shell legal-hero-inner">
          <p className="section-kicker">Website information</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span>Last updated: 28 September 2026</span>
        </div>
      </section>

      <div className="site-shell legal-layout">
        <aside aria-label="Legal pages">
          <strong>Legal information</strong>
          <nav>
            {legalLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </aside>
        <article className="legal-content">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}
        </article>
      </div>

      <footer>
        <div className="site-shell legal-footer">
          <p>© 2026 Hi-Tech Industries. All rights reserved.</p>
          <nav aria-label="Legal links">
            {legalLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </div>
      </footer>
    </main>
  );
}
