import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="boot" aria-label="error log">
        <span className="line">
          <span className="err">[ ERR ]</span> file not found
        </span>
        <span className="line">
          <span className="err">[ ERR ]</span> path does not resolve
        </span>
      </div>

      <h2 className="sh">404 / page not found</h2>
      <p className="sh-sub">What you&apos;re looking for isn&apos;t here.</p>

      <div className="about-body">
        <p>
          The page may have been moved, renamed, or never existed. Head back
          home and try the tabs.
        </p>
      </div>

      <div className="ls">
        <Link href="/" className="item">
          <span className="k">~/home</span>
          <span className="d">Back to the start.</span>
        </Link>
      </div>
    </section>
  );
}
