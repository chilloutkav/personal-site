import Link from "next/link";
import Hero from "@/components/Hero";
import ResultsGrid from "@/components/ResultsGrid";
import HomepageBlog from "@/components/HomepageBlog";
import TestimonialCard from "@/components/TestimonialCard";
import AsciiDivider from "@/components/AsciiDivider";
import { getFeaturedResults } from "@/lib/results";
import { getLatestPosts } from "@/lib/blog";
import {
  getFeaturedTestimonial,
  getNonFeaturedTestimonials,
} from "@/lib/testimonials";

export default function HomePage() {
  const featured = getFeaturedResults();
  const latestPosts = getLatestPosts(3);
  const featuredTestimonial = getFeaturedTestimonial();
  const otherTestimonials = getNonFeaturedTestimonials();

  return (
    <>
      <Hero />

      <AsciiDivider />

      <h2 className="sh">Receipts</h2>
      <p className="sh-sub">Case studies. Real numbers, metrics verified. Some clients under NDA.</p>
      <ResultsGrid studies={featured} />
      <div style={{ marginTop: 4 }}>
        <Link href="/results">view all &rarr;</Link>
      </div>

      <AsciiDivider />

      <h2 className="sh">What clients say</h2>
      <p className="sh-sub">On paid media work. Unedited, from Upwork and direct engagements.</p>
      {featuredTestimonial ? (
        <TestimonialCard testimonial={featuredTestimonial} variant="featured" />
      ) : null}
      {otherTestimonials.length > 0 ? (
        <div className="tm-grid">
          {otherTestimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} variant="default" />
          ))}
        </div>
      ) : null}

      {latestPosts.length > 0 ? (
        <>
          <AsciiDivider />
          <h2 className="sh">Dispatches</h2>
          <p className="sh-sub">
            Mostly about what I&apos;m playing with. Sometimes useful.
          </p>
          <HomepageBlog posts={latestPosts} />
          <div style={{ marginTop: 4 }}>
            <Link href="/blog">all posts &rarr;</Link>
          </div>
        </>
      ) : null}
    </>
  );
}
