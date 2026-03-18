import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[560px] flex-col items-center justify-center px-6 py-20 text-center md:px-8">
      <p className="font-[family-name:var(--font-heading)] text-[14px] uppercase tracking-[0.25em] text-[var(--muted)]">
        404
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-[var(--text)]">
        Page not found.
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center bg-[var(--accent)] px-6 py-3 text-[14px] font-medium tracking-wide text-[var(--text-inverse)] transition-colors hover:bg-[var(--accent-hover)]"
      >
        Back to Home
      </Link>
    </section>
  );
}
