"use client";

import { useState } from "react";

const COOKIE_NAME = "analytics_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 12 months

export default function CookieConsent() {
  const [hidden, setHidden] = useState(false);

  function setConsent(value: "accepted" | "declined") {
    document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
    if (value === "declined") {
      // Reload so the server drops GTM on the next render.
      window.location.reload();
    } else {
      setHidden(true);
    }
  }

  if (hidden) return null;

  return (
    <div
      className="consent-banner"
      role="dialog"
      aria-label="Analytics notice"
    >
      <div className="consent-banner-inner">
        <p>
          Analytics is on (GA4, no personal tracking, no ads). Opt out if
          you&apos;d rather not.
        </p>
        <div className="consent-actions">
          <button
            type="button"
            className="btn"
            onClick={() => setConsent("accepted")}
          >
            sounds good
          </button>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => setConsent("declined")}
          >
            opt out
          </button>
        </div>
      </div>
    </div>
  );
}
