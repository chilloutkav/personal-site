import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import PageHeader from "@/components/PageHeader";
import BottomPrompt from "@/components/BottomPrompt";
import AsciiDivider from "@/components/AsciiDivider";
import { buildCanonicalUrl, SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dispatches",
  description:
    "Dispatches from Kav. Mostly about what I'm playing with. Sometimes useful.",
  alternates: { canonical: buildCanonicalUrl("/blog") },
  openGraph: {
    title: "Dispatches",
    description:
      "Dispatches from Kav. Mostly about what I'm playing with. Sometimes useful.",
    url: buildCanonicalUrl("/blog"),
    siteName: SITE_CONFIG.siteName,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section>
      <PageHeader
        path="~/writing"
        cmd="ls -lat *.md"
        title="Dispatches"
        subtitle="Mostly about what I'm playing with. Sometimes useful."
      />

      <AsciiDivider title="log: tail -f ~/writing" />

      {posts.length > 0 ? (
        <div className="feed">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="prose-md" style={{ color: "var(--fg-muted)" }}>
          No posts yet. Check back soon.
        </p>
      )}

      {posts.length > 0 ? (
        <p className="rss-note">
          Infrequent by design. Subscribe via <a href="/feed.xml">RSS</a> if you
          don&apos;t want to check back.
        </p>
      ) : null}

      <BottomPrompt path="~/writing" />
    </section>
  );
}
