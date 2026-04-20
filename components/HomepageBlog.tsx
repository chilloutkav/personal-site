import type { BlogPostMeta } from "@/lib/blog";
import BlogCard from "./BlogCard";

export default function HomepageBlog({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div className="feed">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
