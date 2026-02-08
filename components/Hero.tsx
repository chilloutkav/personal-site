"use client";

import Image from "next/image";
import Link from "next/link";

const TITLES = [
  "Product Manager.",
  "Growth Marketer.",
  "Ecommerce Operator.",
] as const;

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-76px)] max-w-[1200px] items-center px-6 py-16 md:px-8 md:py-20 lg:px-10">
      <div className="grid w-full items-center gap-12 md:grid-cols-[1fr_0.7fr] md:gap-16 lg:gap-20">
        {/* Text column — shows second on mobile (order-2), first on desktop (md:order-1) */}
        <div className="order-2 md:order-1">
          {/* Label */}
          <p
            className="mb-6 text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]"
            style={{ animation: "fadeIn 0.6s ease-out both" }}
          >
            {/* TODO: Review and finalize copy */}
            Kaven Kim
          </p>

          {/* Staggered headline */}
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--text)]">
            {TITLES.map((title, i) => (
              <span
                key={title}
                className="block"
                style={{
                  animation: `fadeInUp 0.7s ease-out ${200 + i * 200}ms both`,
                }}
              >
                {title}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p
            className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-[var(--muted)] md:text-[17px]"
            style={{ animation: "fadeInUp 0.7s ease-out 900ms both" }}
          >
            {/* TODO: Review and finalize copy */}
            I build products, scale brands, and turn growth loops into revenue.
            From zero-to-one launches to full-funnel optimization — I get things
            across the finish line.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-wrap items-center gap-4"
            style={{ animation: "fadeInUp 0.7s ease-out 1100ms both" }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center rounded-[var(--radius-md)] bg-[var(--accent)] px-6 py-3 text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Get in Touch
            </Link>
            <a
              href="https://www.linkedin.com/in/kavenkim/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[14px] font-medium tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn &rarr;
            </a>
          </div>
        </div>

        {/* Headshot column — shows first on mobile (order-1), second on desktop (md:order-2) */}
        <div
          className="order-1 flex justify-center md:order-2 md:justify-end"
          style={{ animation: "scaleIn 0.8s ease-out 300ms both" }}
        >
          <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[var(--radius-lg)] md:max-w-none">
            <Image
              src="/images/profile.jpg"
              alt="Kaven Kim"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 320px, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
