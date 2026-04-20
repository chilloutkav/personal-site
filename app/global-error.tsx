"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--bg, #0F1411)",
          color: "var(--fg, #E4E6DF)",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem", maxWidth: 520 }}>
          <p
            style={{
              color: "var(--red, #E87560)",
              fontSize: 13,
              marginBottom: 8,
            }}
          >
            [ ERR ] fatal exception
          </p>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            Something went wrong.
          </h1>
          <p
            style={{
              marginTop: "1rem",
              color: "var(--fg-muted, #A8ADA0)",
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            An unexpected error occurred.
          </p>
          <button
            onClick={reset}
            className="btn"
            style={{ marginTop: "1.5rem" }}
          >
            retry
          </button>
        </div>
      </body>
    </html>
  );
}
