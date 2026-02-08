import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import ContactSection from "@/components/ContactSection";
import {
  buildCanonicalUrl,
  buildPageTitle,
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
      title: buildPageTitle(meta.title),
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
  } catch {
    return { title: buildPageTitle("Post Not Found") };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.meta.title, path: `/blog/${post.meta.id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="mx-auto max-w-[720px] px-6 pt-16 pb-16 md:px-8 md:pt-20 md:pb-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-block text-[14px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          &larr; All posts
        </Link>

        {/* Header */}
        <header className="mt-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--accent-light)] px-3 py-0.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--accent)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="mt-5 font-[family-name:var(--font-heading)] text-[clamp(1.75rem,5vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
            {post.meta.title}
          </h1>

          {/* Author + Date */}
          <div className="mt-5 flex items-center gap-3 text-[14px] text-[var(--muted)]">
            <span className="font-medium text-[var(--text)]">
              {SITE_CONFIG.author}
            </span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.meta.date}>
              {format(new Date(post.meta.date), "MMMM d, yyyy")}
            </time>
          </div>
        </header>

        {/* Divider */}
        <div className="my-10 border-t border-[var(--border)]" />

        {/* MDX content */}
        <div className="prose">{post.content}</div>
      </article>

      <section className="border-t border-[var(--border)]">
        <ContactSection variant="compact" />
      </section>
    </>
  );
}
