"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-8 lg:px-10">
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase tracking-[0.2em] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          >
            Kaven Kim
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-1 text-[14px] font-medium tracking-wide text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[var(--accent)] transition-transform duration-300 origin-left ${
                    isActive(link.href) ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-[2px] w-6 bg-[var(--text)] transition-all duration-300 ${
                mobileOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-[var(--text)] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-[var(--text)] transition-all duration-300 ${
                mobileOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-[280px] bg-[var(--bg)] shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 px-8 pt-28">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block border-b border-[var(--border)] py-4 text-[20px] font-medium tracking-wide transition-colors ${
                isActive(link.href)
                  ? "text-[var(--accent)]"
                  : "text-[var(--text)]"
              }`}
              style={{
                animation: mobileOpen
                  ? `slideDown 0.4s ease-out ${100 + i * 80}ms both`
                  : "none",
              }}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="mt-8 flex flex-col gap-3"
            style={{
              animation: mobileOpen
                ? "fadeIn 0.5s ease-out 500ms both"
                : "none",
            }}
          >
            <a
              href="mailto:hi@kavenkim.com"
              className="text-[13px] tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              hi@kavenkim.com
            </a>
            <a
              href="https://www.linkedin.com/in/kavenkim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn &rarr;
            </a>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[76px]" />
    </>
  );
}
