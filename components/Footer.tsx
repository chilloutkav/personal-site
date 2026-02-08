import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-3 md:gap-8 md:px-8 md:py-20 lg:px-10">
        {/* Brand column */}
        <div>
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase tracking-[0.2em] text-[var(--text)]"
          >
            Kaven Kim
          </Link>
          {/* TODO: Review and finalize copy */}
          <p className="mt-4 max-w-[260px] text-[14px] leading-relaxed text-[var(--muted)]">
            Building products, scaling brands, and turning growth loops into
            revenue.
          </p>
        </div>

        {/* Navigation column */}
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            Navigate
          </p>
          <div className="flex flex-col gap-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Connect column */}
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            Connect
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/kavenkim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn &rarr;
            </a>
            <a
              href="mailto:hi@kavenkim.com"
              className="text-[14px] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              hi@kavenkim.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-8 lg:px-10">
          <p className="text-[12px] text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Kaven Kim
          </p>
          <p className="text-[12px] text-[var(--muted)]">
            Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
