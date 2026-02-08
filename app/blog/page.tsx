import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import ScrollReveal from "@/components/ScrollReveal";
import ContactSection from "@/components/ContactSection";
import { buildCanonicalUrl, buildPageTitle, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: buildPageTitle("Blog"),
  description:
    "Writing about product management, growth marketing, ecommerce, and the work in between.",
  alternates: {
    canonical: buildCanonicalUrl("/blog"),
  },
  openGraph: {
    title: buildPageTitle("Blog"),
    description:
      "Writing about product management, growth marketing, ecommerce, and the work in between.",
    url: buildCanonicalUrl("/blog"),
    siteName: SITE_CONFIG.siteName,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-4 md:px-8 md:pt-20 lg:px-10">
        <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
          {/* TODO: Review and finalize copy */}
          Writing
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
          {/* TODO: Review and finalize copy */}
          Blog
        </h1>
        <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[var(--muted)]">
          {/* TODO: Review and finalize copy */}
          Thoughts on product management, growth marketing, ecommerce
          operations, and the messy overlap between all three.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-16 md:px-8 md:pb-20 lg:px-10">
        {posts.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {posts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 150}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-[16px] text-[var(--muted)]">
            No posts yet. Check back soon.
          </p>
        )}
      </section>

      <section className="border-t border-[var(--border)]">
        <ContactSection variant="compact" />
      </section>
    </>
  );
}
