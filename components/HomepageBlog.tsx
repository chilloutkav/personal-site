"use client";

import type { BlogPostMeta } from "@/lib/blog";
import BlogCard from "./BlogCard";
import ScrollReveal from "./ScrollReveal";

export default function HomepageBlog({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {posts.map((post, i) => (
        <ScrollReveal key={post.id} delay={i * 150}>
          <BlogCard post={post} />
        </ScrollReveal>
      ))}
    </div>
  );
}
