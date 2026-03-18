import Link from "next/link";
import { format } from "date-fns";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group block h-full">
      <article className="flex h-full flex-col border-2 border-dashed border-[var(--border-light)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border)] md:p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="border border-dashed border-[var(--border-light)] px-3 py-0.5 font-[family-name:var(--font-heading)] text-[12px] uppercase tracking-[0.15em] text-[var(--text)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(1.35rem,2.5vw,1.6rem)] leading-[1.2] tracking-tight text-[var(--text)]">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[var(--muted)]">
          {post.excerpt}
        </p>

        {/* Footer divider */}
        <div className="mt-6 border-t border-dashed border-[var(--border-light)] pt-4">
          <div className="flex items-center justify-between">
            <time
              dateTime={post.date}
              className="text-[13px] text-[var(--muted)]"
            >
              {format(new Date(post.date), "MMM d, yyyy")}
            </time>
            <span className="text-[13px] font-medium tracking-wide text-[var(--text)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
              Read &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
