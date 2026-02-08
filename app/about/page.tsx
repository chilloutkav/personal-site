import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description: "Product manager, growth marketer, and ecommerce operator — 12+ years driving measurable results across three disciplines.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-16">

        {/* Left Column: Main Narrative */}
        <div>

          {/* Hero Heading Area */}
          <ScrollReveal delay={0}>
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
              About
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
              Three Disciplines. One Approach.
            </h1>
          </ScrollReveal>

          {/* Opening Paragraph with Drop Cap */}
          <ScrollReveal delay={100}>
            <p className="mt-10 text-[16px] leading-relaxed text-[var(--text)] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-[family-name:var(--font-heading)] first-letter:text-[3.5rem] first-letter:font-bold first-letter:leading-[0.8] first-letter:text-[var(--accent)]">
              I sit at the intersection of product management, growth marketing, and ecommerce — and I've spent the last 12+ years proving these disciplines work better together than apart. While most operators specialize in one lane, I've built my career across all three.
            </p>
          </ScrollReveal>

          {/* Origin Story */}
          <div className="mt-8">
            <ScrollReveal delay={200}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-[var(--text)]">
                Where It Started
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                It started in 2013 with growth marketing — running paid media, building attribution models, and figuring out how to turn ad spend into revenue. But I kept bumping into the same wall: the products and storefronts I was driving traffic to weren't converting. So I learned ecommerce. Then I realized the best growth comes from the product itself. So I learned product management.
              </p>
            </ScrollReveal>
          </div>

          {/* How It All Connects */}
          <div className="mt-8">
            <ScrollReveal delay={400}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-[var(--text)]">
                How It All Connects
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                <span className="font-bold text-[var(--accent)]">Growth Marketing</span> means I don't just ship features and hope people find them. I've scaled ad spend from $5K to $80K/month profitably, built full-funnel attribution models, and consistently delivered 4-8X ROAS across DTC and B2B.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                <span className="font-bold text-[var(--accent)]">Product Management</span> means I don't just drive traffic — I make sure the product converts. I've cut customer acquisition costs by 50%, redesigned onboarding flows that doubled activation, and built lead scoring models that transformed sales pipelines.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={700}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                <span className="font-bold text-[var(--accent)]">Ecommerce</span> means I understand the entire revenue stack. I've taken Shopify stores from $800K to $2M+ in annual revenue, lifted conversion rates by 400%, and built post-purchase experiences that turn one-time buyers into repeat customers.
              </p>
            </ScrollReveal>
          </div>

          {/* Why It Matters */}
          <div className="mt-8">
            <ScrollReveal delay={800}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-[var(--text)]">
                Why It Matters
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={900}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                Most companies hire three different people — or three different agencies — to cover product, growth, and ecommerce. Then they spend half their time in meetings trying to get everyone aligned. I eliminate that translation layer. When one person understands all three disciplines, decisions are faster, strategies are more coherent, and results compound instead of competing.
              </p>
            </ScrollReveal>
          </div>

          {/* Technical Background */}
          <div className="mt-8">
            <ScrollReveal delay={1000}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-[var(--text)]">
                The Technical Edge
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1100}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                I also graduated from Flatiron School's software engineering program — not to become a full-time developer, but because I was tired of being the PM who couldn't read the codebase. Technical fluency means I can spec features precisely, debug issues without waiting for engineering, and have honest conversations about what's actually possible in a sprint.
              </p>
            </ScrollReveal>
          </div>

          {/* Personal Touch */}
          <div className="mt-8">
            <ScrollReveal delay={1200}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-[var(--text)]">
                Off the Clock
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1300}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                When I'm not optimizing conversion funnels or arguing about sprint priorities, I'm probably walking my Shiba Inu, Barry, through Brooklyn. He has strong opinions about which routes we take and absolutely zero interest in my ROAS metrics.
              </p>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <div className="mt-12 border-t border-[var(--border)] pt-10">
            <ScrollReveal delay={1400}>
              <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                Interested in working together? I'm always open to conversations about product strategy, growth challenges, or ecommerce operations.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-[var(--radius-md)] bg-[var(--accent)] px-8 py-3 text-[14px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                Let&apos;s Talk
              </Link>
            </ScrollReveal>
          </div>

        </div>

        {/* Right Column: Pull-Quote Sidebar */}
        <aside className="hidden lg:block lg:sticky lg:top-32 lg:self-start">
          <div className="space-y-6">

            <ScrollReveal delay={200}>
              <div className="rounded-[var(--radius-lg)] border-l-4 border-[var(--accent)] bg-[var(--accent-light)] p-5">
                <div className="font-[family-name:var(--font-heading)] text-[2rem] font-bold text-[var(--text)]">
                  12+
                </div>
                <div className="text-[13px] text-[var(--muted)]">
                  Years of Experience
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="rounded-[var(--radius-lg)] border-l-4 border-[var(--accent)] bg-[var(--accent-light)] p-5">
                <div className="font-[family-name:var(--font-heading)] text-[2rem] font-bold text-[var(--text)]">
                  3
                </div>
                <div className="text-[13px] text-[var(--muted)]">
                  Disciplines
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="rounded-[var(--radius-lg)] border-l-4 border-[var(--accent)] bg-[var(--accent-light)] p-5">
                <div className="font-[family-name:var(--font-heading)] text-[2rem] font-bold text-[var(--text)]">
                  NYC
                </div>
                <div className="text-[13px] text-[var(--muted)]">
                  Brooklyn, New York
                </div>
              </div>
            </ScrollReveal>

          </div>
        </aside>

      </div>
    </section>
  );
}
