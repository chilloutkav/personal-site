"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type Tab = {
  label: string;
  href: string;
  id: string;
};

const HAS_ANALYTICS = Boolean(process.env.NEXT_PUBLIC_GTM_ID);

// Approximate char dimensions of the body font (JetBrains Mono ~13.5px, line-height 1.6).
// Used only for the cosmetic cols×rows viewport label in the title bar.
const CHAR_WIDTH_PX = 8.8;
const CHAR_HEIGHT_PX = 17;

const TABS: Tab[] = [
  { id: "home", label: "~/home", href: "/" },
  { id: "work", label: "work/", href: "/results" },
  { id: "writing", label: "writing/", href: "/blog" },
  { id: "about", label: "about.md", href: "/about" },
  { id: "contact", label: "contact", href: "/contact" },
];

function matchesTab(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function TerminalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [clock, setClock] = useState("--:--:-- --");
  const [clockShort, setClockShort] = useState("--:-- --");
  const [viewport, setViewport] = useState("--×--");

  // The inline script in app/layout.tsx already set the data-theme attribute
  // to avoid a theme flash. This effect only syncs React state to the DOM.
  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-theme");
    setTheme(attr === "light" ? "light" : "dark");
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  // clock
  useEffect(() => {
    function tick() {
      const d = new Date();
      setClock(
        d.toLocaleTimeString("en-US", {
          hour12: true,
          timeZone: "America/New_York",
        })
      );
      setClockShort(
        d.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/New_York",
        })
      );
    }
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  // live viewport (cols × rows, terminal-style)
  useEffect(() => {
    function update() {
      const cols = Math.round(window.innerWidth / CHAR_WIDTH_PX);
      const rows = Math.round(window.innerHeight / CHAR_HEIGHT_PX);
      setViewport(`${cols}×${rows}`);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // arrow key tab navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.matches("input, textarea") || target.isContentEditable)
      ) {
        return;
      }
      const currentIdx = TABS.findIndex((t) => matchesTab(pathname, t.href));
      if (currentIdx === -1) return;
      if (e.key === "ArrowRight") {
        const next = TABS[Math.min(currentIdx + 1, TABS.length - 1)];
        if (next && next.href !== pathname) router.push(next.href);
      }
      if (e.key === "ArrowLeft") {
        const next = TABS[Math.max(currentIdx - 1, 0)];
        if (next && next.href !== pathname) router.push(next.href);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pathname, router]);

  return (
    <div className="window">
      <div className="title-bar">
        <div className="dots" aria-hidden="true">
          <span className="r" />
          <span className="y" />
          <span className="g" />
        </div>
        <div className="title">
          <strong>kaven@kim</strong> · ~/portfolio
          <span className="vp">
            {" · "}
            <span>{viewport}</span>
          </span>
        </div>
        <button
          type="button"
          className="theme"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "paper" : "dark"}
        </button>
      </div>

      <nav className="tab-bar" aria-label="Primary">
        {TABS.map((tab) => {
          const on = matchesTab(pathname, tab.href);
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`tab${on ? " on" : ""}`}
              aria-current={on ? "page" : undefined}
            >
              <span className="dot" aria-hidden="true" />
              {tab.label}
            </Link>
          );
        })}
        <div className="sp" />
        <div className="meta" aria-hidden="true">
          <span>{clock}</span>
          <span>&nbsp;·&nbsp;NY</span>
        </div>
      </nav>

      <div className="window-body">{children}</div>

      <div className="status-bar">
        <span>
          <span className="ok" />
          <strong>online</strong> · {HAS_ANALYTICS ? "ga4" : "no trackers"}
        </span>
        <span>kavenkim.com</span>
        <span>NY {clockShort}</span>
      </div>
    </div>
  );
}
