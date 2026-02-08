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
      <article className="relative overflow-hidden rounded-[var(--radius-lg)] border-l-4 border-[var(--accent)] bg-[var(--accent-light)] p-8 md:p-12">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-4 left-4 select-none font-serif text-[12rem] leading-none text-[var(--accent)] opacity-10 md:left-8"
        >
          &ldquo;
        </span>

        <div className="relative">
          <blockquote className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-relaxed tracking-tight text-[var(--text)]">
            {testimonial.quote}
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div>
              <p className="font-[family-name:var(--font-heading)] text-[16px] font-bold text-[var(--text)]">
                {testimonial.author}
              </p>
              <p className="text-[14px] text-[var(--muted)]">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
            <span className="rounded-full bg-white/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              {testimonial.discipline}
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
        {testimonial.discipline}
      </p>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-4 select-none font-serif text-[6rem] leading-none text-[var(--accent)] opacity-10 md:right-6"
      >
        &ldquo;
      </span>

      <blockquote className="relative mt-4 text-[15px] leading-relaxed text-[var(--text)]">
        {testimonial.quote}
      </blockquote>

      <div className="mt-6 border-t border-[var(--border)] pt-5">
        <p className="font-[family-name:var(--font-heading)] text-[14px] font-bold text-[var(--text)]">
          {testimonial.author}
        </p>
        <p className="text-[13px] text-[var(--muted)]">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </article>
  );
}
