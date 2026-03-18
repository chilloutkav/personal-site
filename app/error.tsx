"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[560px] flex-col items-center justify-center px-6 py-20 text-center md:px-8">
      <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-[var(--text)]">
        Something went wrong.
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
        An unexpected error occurred. Try again or head back to the homepage.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center bg-[var(--accent)] px-6 py-3 text-[14px] font-medium tracking-wide text-[var(--text-inverse)] transition-colors hover:bg-[var(--accent-hover)]"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center border-2 border-dashed border-[var(--border-light)] px-6 py-3 text-[14px] font-medium tracking-wide text-[var(--text)] transition-colors hover:border-[var(--border)]"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
