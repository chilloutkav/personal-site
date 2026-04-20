import type { Testimonial } from "@/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "featured" | "default";
}

export default function TestimonialCard({
  testimonial,
  variant = "default",
}: TestimonialCardProps) {
  if (variant === "featured") {
    return (
      <article className="tm-featured">
        <blockquote className="quote">&ldquo;{testimonial.quote}&rdquo;</blockquote>
        <div className="meta">
          <span className="author">{testimonial.author}</span>
          <span className="role">{testimonial.role}</span>
        </div>
      </article>
    );
  }

  return (
    <article className="tm-card">
      <blockquote className="quote">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <div className="author">{testimonial.author}</div>
      <div className="role">{testimonial.role}</div>
    </article>
  );
}
