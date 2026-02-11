import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description: "I build products, run growth, and operate ecommerce stores. Twelve years of doing all three taught me they're the same job.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-16">

        {/* Left Column: Main Narrative */}
        <div>

          {/* Hero Heading Area */}
          <ScrollReveal delay={0}>
            <p className="font-[family-name:var(--font-heading)] text-[14px] uppercase tracking-[0.25em] text-[var(--muted)]">
              About
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight text-[var(--text)]">
              Three Disciplines. One Approach.
            </h1>
          </ScrollReveal>

          {/* Opening Paragraph with Drop Cap — periwinkle accent */}
          <ScrollReveal delay={100}>
            <p className="mt-10 text-[16px] leading-relaxed text-[var(--text)] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-[family-name:var(--font-heading)] first-letter:text-[4rem] first-letter:leading-[0.8] first-letter:text-[var(--accent)]">
              Most people pick a lane. Product management, growth marketing, or ecommerce. I&apos;ve spent 12+ years refusing to choose — because every time I got good at one, I realized the next one was the bottleneck.
            </p>
          </ScrollReveal>

          {/* Origin Story */}
          <div className="mt-8">
            <ScrollReveal delay={200}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2rem)] text-[var(--text)]">
                Where It Started
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                Started in 2013 running paid media. I was good at it — scaled budgets, built attribution models, turned ad spend into revenue. But I kept bumping into the same wall: the storefronts I was driving traffic to weren&apos;t converting. So I learned ecommerce. Then I realized the best growth comes from the product itself. So I learned product management.
              </p>
            </ScrollReveal>
          </div>

          {/* How It All Connects */}
          <div className="mt-8">
            <ScrollReveal delay={400}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2rem)] text-[var(--text)]">
                How It All Connects
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                I&apos;ve scaled ad spend from $5K to $80K/month and kept it profitable the whole way. 4-8X ROAS across DTC and B2B. <span className="font-bold text-[var(--text)]">Growth marketing</span> is the discipline, but the real skill is knowing when to pour fuel on something and when to fix the thing you&apos;re pouring fuel on.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                Cut customer acquisition costs by 50%. Doubled activation rates by redesigning onboarding. Built lead scoring models that actually made sales teams want to use the CRM. <span className="font-bold text-[var(--text)]">Product management</span> is where all the leverage is — one good decision at the product level is worth ten campaigns.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={700}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                Took a Shopify store from $800K to $2M+ in annual revenue. Lifted conversion rates by 400%. Built post-purchase flows that turned one-time buyers into repeat customers. <span className="font-bold text-[var(--text)]">Ecommerce</span> is where theory meets the cash register — every decision shows up in the numbers the same week.
              </p>
            </ScrollReveal>
          </div>

          {/* Why It Matters */}
          <div className="mt-8">
            <ScrollReveal delay={800}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2rem)] text-[var(--text)]">
                Why It Matters
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={900}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                Companies hire three people for this — or three agencies — then burn half their time in alignment meetings. I skip the translation layer. One person who understands product, growth, and ecommerce makes faster decisions, builds more coherent strategies, and compounds results instead of diluting them.
              </p>
            </ScrollReveal>
          </div>

          {/* Technical Background */}
          <div className="mt-8">
            <ScrollReveal delay={1000}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2rem)] text-[var(--text)]">
                The Technical Edge
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1100}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                I graduated from Flatiron School&apos;s software engineering program. Not to become a developer — because I was tired of being the PM who couldn&apos;t read the codebase. Now I spec features precisely, debug issues without waiting for engineering, and have honest conversations about what&apos;s actually possible in a sprint.
              </p>
            </ScrollReveal>
          </div>

          {/* Personal Touch */}
          <div className="mt-8">
            <ScrollReveal delay={1200}>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2rem)] text-[var(--text)]">
                Off the Clock
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1300}>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                When I&apos;m not optimizing conversion funnels or arguing about sprint priorities, I&apos;m probably walking my Shiba Inu, Barry. He has strong opinions about which routes we take and absolutely zero interest in my ROAS metrics.
              </p>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <div className="mt-12 border-t-2 border-dashed border-[var(--border-light)] pt-10">
            <ScrollReveal delay={1400}>
              <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                Have a product that needs to grow, a store that needs to convert, or a growth engine that needs building? Let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block bg-[var(--accent)] px-8 py-3 font-[family-name:var(--font-heading)] text-[16px] uppercase tracking-[0.15em] text-[var(--text-inverse)] transition-colors hover:bg-[var(--accent-hover)]"
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
              <div className="border-l-4 border-[var(--border)] p-5">
                <div className="font-[family-name:var(--font-heading)] text-[2.5rem] text-[var(--accent)]">
                  12+
                </div>
                <div className="text-[13px] text-[var(--muted)]">
                  Years of Experience
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="border-l-4 border-[var(--border)] p-5">
                <div className="font-[family-name:var(--font-heading)] text-[2.5rem] text-[var(--accent)]">
                  3
                </div>
                <div className="text-[13px] text-[var(--muted)]">
                  Disciplines
                </div>
              </div>
            </ScrollReveal>


          </div>
        </aside>

      </div>
    </section>
  );
}
