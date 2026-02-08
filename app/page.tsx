import Link from "next/link";
import Hero from "@/components/Hero";
import HomepageResults from "@/components/HomepageResults";
import HomepageBlog from "@/components/HomepageBlog";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCard from "@/components/TestimonialCard";
import ContactSection from "@/components/ContactSection";
import { getFeaturedResults } from "@/lib/results";
import { getLatestPosts } from "@/lib/blog";
import {
  getFeaturedTestimonial,
  getNonFeaturedTestimonials,
} from "@/lib/testimonials";

export default function HomePage() {
  const featured = getFeaturedResults();
  const latestPosts = getLatestPosts(2);
  const featuredTestimonial = getFeaturedTestimonial();
  const otherTestimonials = getNonFeaturedTestimonials();

  return (
    <>
      <Hero />

      {/* Results preview */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20 lg:px-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
            {/* TODO: Review and finalize copy */}
            Selected Results
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
              {/* TODO: Review and finalize copy */}
              How I&apos;ve Helped
            </h2>
            <Link
              href="/results"
              className="text-[14px] font-medium tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              View all results &rarr;
            </Link>
          </div>

          <HomepageResults studies={featured} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20 lg:px-10">
          <ScrollReveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
              {/* TODO: Review and finalize copy */}
              Testimonials
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
              {/* TODO: Review and finalize copy */}
              What People Say
            </h2>
          </ScrollReveal>

          {featuredTestimonial && (
            <ScrollReveal className="mt-10" delay={100}>
              <TestimonialCard
                testimonial={featuredTestimonial}
                variant="featured"
              />
            </ScrollReveal>
          )}

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {otherTestimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.id} delay={150 * (i + 1)}>
                <TestimonialCard testimonial={testimonial} variant="default" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Writing */}
      {latestPosts.length > 0 && (
        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20 lg:px-10">
            <ScrollReveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
                {/* TODO: Review and finalize copy */}
                From the Blog
              </p>
              <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
                  {/* TODO: Review and finalize copy */}
                  Latest Writing
                </h2>
                <Link
                  href="/blog"
                  className="text-[14px] font-medium tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  All posts &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <HomepageBlog posts={latestPosts} />
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="border-t border-[var(--border)]">
        <ContactSection variant="compact" id="contact" />
      </section>
    </>
  );
}
