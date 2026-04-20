import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import TopPrompt from "@/components/TopPrompt";
import BottomPrompt from "@/components/BottomPrompt";
import {
  buildCanonicalUrl,
  buildOGImageUrl,
  SITE_CONFIG,
} from "@/lib/seo";
import { createBreadcrumbSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = await getPostBySlug(slug);

    return {
      title: meta.title,
      description: meta.excerpt,
      alternates: {
        canonical: buildCanonicalUrl(`/blog/${meta.id}`),
      },
      openGraph: {
        title: meta.title,
        description: meta.excerpt,
        url: buildCanonicalUrl(`/blog/${meta.id}`),
        siteName: SITE_CONFIG.siteName,
        type: "article",
        publishedTime: meta.date,
        authors: [SITE_CONFIG.author],
        images: [{ url: buildOGImageUrl(meta.title) }],
      },
    };
  } catch (error) {
    console.error(`Failed to generate metadata for blog/${slug}:`, error);
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.error(`Failed to load blog post "${slug}":`, error);
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.meta.title, path: `/blog/${post.meta.id}` },
  ]);

  const primaryTag = post.meta.tags?.[0] ?? "note";

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <TopPrompt path="~/writing" cmd={`cat ${post.meta.id}.md`} />

      <Link href="/blog" className="back-link">
        &larr; all dispatches
      </Link>

      <header className="post-header">
        <div className="post-meta">
          <span>{format(new Date(post.meta.date), "yyyy-MM-dd")}</span>
          <span>·</span>
          <span className={`tag ${primaryTag.toLowerCase()}`}>
            {primaryTag}
          </span>
        </div>
        <h1>{post.meta.title}</h1>
        <p className="post-byline">by {SITE_CONFIG.author}</p>
      </header>

      <hr className="rule" />

      <div className="prose" style={{ maxWidth: "68ch" }}>
        {post.content}
      </div>

      <BottomPrompt path="~/writing" />
    </section>
  );
}
