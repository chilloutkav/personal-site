import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

type TagTone = "default" | "note" | "rant" | "meta";

const TAG_TONES: Record<string, TagTone> = {
  ai: "default",
  growth: "default",
  product: "default",
  note: "note",
  rant: "rant",
  meta: "meta",
};

function toneFor(tag: string): TagTone {
  return TAG_TONES[tag.toLowerCase()] ?? "default";
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  const primaryTag = post.tags?.[0] ?? "note";
  const tone = toneFor(primaryTag);

  return (
    <Link
      href={`/blog/${post.id}`}
      className="post"
      style={{ display: "grid" }}
    >
      <span className="date">{formatDate(post.date)}</span>
      <span className={`tag${tone !== "default" ? ` ${tone}` : ""}`}>
        {primaryTag.toLowerCase()}
      </span>
      <span className="tt">
        <b>{post.title}</b>
        <small>{post.excerpt}</small>
      </span>
    </Link>
  );
}
