"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section>
      <div className="boot" aria-label="error log">
        <span className="line">
          <span className="err">[ ERR ]</span> unhandled exception
        </span>
      </div>

      <h2 className="sh">Something broke</h2>
      <p className="sh-sub">An unexpected error occurred.</p>

      <div className="about-body">
        <p>Try rerunning the command or head back home.</p>
      </div>

      <div className="btn-row">
        <button type="button" onClick={reset} className="btn">
          retry
        </button>
        <Link href="/" className="btn-ghost">
          cd ~
        </Link>
      </div>
    </section>
  );
}
