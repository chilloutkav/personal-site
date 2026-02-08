import Link from "next/link";
import { format } from "date-fns";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group block h-full">
      <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--accent-light)] px-3 py-0.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--accent)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(1.15rem,2.5vw,1.35rem)] font-bold leading-[1.2] tracking-tight text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent)]">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[var(--muted)]">
          {post.excerpt}
        </p>

        {/* Footer divider */}
        <div className="mt-6 border-t border-[var(--border)] pt-4">
          <div className="flex items-center justify-between">
            <time
              dateTime={post.date}
              className="text-[13px] text-[var(--muted)]"
            >
              {format(new Date(post.date), "MMM d, yyyy")}
            </time>
            <span className="text-[13px] font-medium tracking-wide text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-1">
              Read &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
