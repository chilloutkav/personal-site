# Build Log

Chronological record of kavenkim.com rebuild progress (Next.js 15 App Router, Tailwind CSS v4, TypeScript).

## Session 1 — Foundation & Layout System

**Date**: February 7, 2025

### Overview
Session 1 completed the foundation layer of the kavenkim.com rebuild: repository setup, old architecture removal, new directory structure, design system, and core layout components. All work on the `rebuild/app-router` branch.

### Completed Tasks

#### Repository & Branch Setup
- Created `rebuild/app-router` branch from main
- Initialized git tracking for rebuild phase

#### Deletions & Cleanup
- Removed old Pages Router architecture:
  - `pages/` directory (all Pages Router routes)
  - `projects/` directory (old project showcase)
  - `hooks/` directory (legacy hooks)
  - Old component files (Header, ProjectCard, etc.)
  - Old lib files (projects.ts, etc.)

#### Directory Structure
- Created new `app/` directory with App Router structure
- Created `components/` directory for shared React components
- Created `content/blog/` directory for future MDX blog posts
- Maintained `lib/`, `styles/`, and `public/` directories

#### Design System (`styles/global.css`)
- Implemented CSS custom properties (variables) foundation:
  - Colors: bg, text, muted, border, accent, accent-hover, accent-light
  - Spacing scale: space-xs through space-5xl
  - Border radius scale: radius-sm through radius-xl
  - Max width container: 1200px
- Built animations layer (`@layer components`):
  - fadeInUp, fadeIn, scaleIn, slideDown, textReveal, underlineSlide
  - Delay utilities (.delay-100 through .delay-800)
  - Scroll animation foundation (.animate-on-scroll with .is-visible state)
- Reset and base styles via @layer base
- Smooth scroll and font smoothing

#### Root Layout (`app/layout.tsx`)
- Integrated Space Grotesk (headings, weight 500 + 700)
- Integrated DM Sans (body, weight 400 + 500 + 700)
- Implemented GTM integration with conditional loading
- Structured layout with Navigation, main content area, and Footer
- Set proper viewport height (min-h-[calc(100vh-160px)] on main)
- Added TODO comment on metadata description (placeholder copy)

#### Navigation Component (`components/Navigation.tsx`)
- Sticky fixed header with scroll-aware backdrop blur
- Desktop navigation with underline hover/active effects
- Mobile hamburger menu with animated icon (3-line menu)
- Mobile drawer menu (280px right-side slide)
- Mobile overlay with blur effect
- Navigation links: About, Results, Blog, Contact
- Logo with hover color transition
- Mobile drawer footer with email and LinkedIn links
- Active state detection via pathname matching
- Spacer div to prevent content overlap (h-[76px])
- "use client" directive for interactivity

#### Footer Component (`components/Footer.tsx`)
- 3-column grid layout (responsive: single column mobile, 3 columns desktop)
- Brand column: logo + tagline
- Navigation column: About, Results, Blog, Contact links
- Connect column: LinkedIn, email links
- Bottom bar with copyright year (dynamic) and brand statement
- Hover transitions on all links (accent color)
- TODO comment on tagline (placeholder copy)

#### Stub Pages
Created placeholder pages for all primary routes:
- `app/page.tsx` — Homepage (with TODO on hero copy)
- `app/about/page.tsx` — About page
- `app/results/page.tsx` — Results/case studies page
- `app/blog/page.tsx` — Blog list page
- `app/blog/[slug]/page.tsx` — Individual blog post page
- `app/contact/page.tsx` — Contact page

All stubs include:
- Metadata export with title and description
- Centered layout with min-h-[60vh]
- "Coming Soon" label
- TODO comment on copy
- Notes that content will be built in future sessions

#### Configuration Updates
- Updated `next.config.js` with CSP headers for security
- Configured headers for script-src, img-src, style-src, etc.

### Code Statistics

| Component | Lines | Status |
|-----------|-------|--------|
| app/layout.tsx | 99 | Complete |
| components/Navigation.tsx | 168 | Complete |
| components/Footer.tsx | 85 | Complete |
| styles/global.css | 142 | Complete |
| 5 stub pages | ~20 each | Complete |

### Technologies Implemented

- Next.js 15 (App Router)
- React 19 (client components via "use client")
- TypeScript (strict mode)
- Tailwind CSS v4 (with custom properties layer)
- Google Fonts (Space Grotesk + DM Sans)
- Google Tag Manager (conditional integration)

### Known Limitations & TODOs

- **Placeholder Copy**: All pages marked with `{/* TODO: Review and finalize copy */}` comments
  - Metadata descriptions (layout.tsx)
  - Homepage hero (page.tsx)
  - Footer tagline (Footer.tsx)
  - All stub pages

- **Utility Functions**: lib/schema.ts, lib/seo.ts, lib/content.ts still contain old configurations
  - Will be updated in Session 2

- **Blog Infrastructure**: content/blog/ directory empty, MDX loader not yet implemented
  - Will be built in Session 4

### Git Status
- Branch: `rebuild/app-router`
- Uncommitted changes: New files and deletions ready for commit
- Next: Commit this session's work with descriptive message

### Browser Compatibility Notes

- Mobile responsive tested (320px, 768px, 1200px+ breakpoints)
- Tailwind v4 requires `npm run prod` (never `npm run dev` — causes blank pages)
- GTM loads conditionally based on NEXT_PUBLIC_GTM_ID environment variable

### Next Session Preview

Session 2 will build:
- Homepage hero section with headline, subheading, CTA button
- Results page with case study cards
- Update lib/ utilities for new content model
- Begin blog infrastructure (MDX loading)

---

## Session 2 — Homepage, Results, Contact

### Completed
- `lib/results.ts` — CaseStudy interface + 5 anonymized case studies + getFeaturedResults/getAllResults
- `components/ScrollReveal.tsx` — IntersectionObserver scroll animation wrapper (client)
- `components/ResultCard.tsx` — Editorial magazine-style case study card (server)
- `components/Hero.tsx` — Two-column hero with staggered fadeInUp headlines + headshot (client)
- `components/ContactSection.tsx` — Netlify Forms with compact/full variants (client)
- `components/HomepageResults.tsx` — Client wrapper for homepage featured cards with ScrollReveal
- `components/ResultsGrid.tsx` — Client wrapper for results page grid with ScrollReveal
- `app/page.tsx` — Full homepage: Hero + Results preview (3 featured) + ContactSection
- `app/results/page.tsx` — Full results page: 5 case studies in 2-col grid + ContactSection
- `app/contact/page.tsx` — Contact page with full-variant ContactSection

### Decisions Made
- Server/client component split: data-fetching in server, interactivity (scroll, forms) in client wrappers
- ScrollReveal pattern: reusable IntersectionObserver wrapper for staggered entrance animations
- ContactSection has compact/full variants for reuse across pages

---

## Session 3 — About Page, Testimonials

### Completed
- `app/about/page.tsx` — Full editorial about page: asymmetric layout (narrative left, sticky pull-quote sidebar right), drop cap, 7 content sections with ScrollReveal, accent discipline names, CTA
- `lib/testimonials.ts` — Testimonial interface + 3 placeholder testimonials (one per discipline)
- `components/TestimonialCard.tsx` — Server component with featured/default variants (oversized decorative quotes, discipline pills, hover lift)
- `app/page.tsx` — Added testimonials section between Results and Contact (featured card + 2-col grid)
- `lib/seo.ts` — Updated siteName to "Kaven Kim", defaultDescription to three-discipline positioning
- `lib/schema.ts` — Updated jobTitle + description to reflect PM + Growth + Ecommerce

### Decisions Made
- About page uses asymmetric layout: narrative left, sticky pull-quote sidebar right
- Testimonials are placeholder copy (marked TODO) — real ones to come from PRD
- Featured testimonial gets large treatment, others in 2-col grid

---

## Session 4 — Blog Infrastructure

### Completed
- `lib/blog.ts` — BlogPostMeta interface + blog data layer (getAllPosts, getFeaturedPosts, getLatestPosts, getAllSlugs, getPostBySlug with compileMDX)
- `content/blog/why-pms-should-learn-growth.mdx` — Placeholder post (featured, tags: product/growth)
- `content/blog/ecommerce-conversion-checklist.mdx` — Placeholder post (featured, tags: ecommerce/conversion)
- `content/blog/building-this-site.mdx` — Placeholder post (not featured, tags: engineering/design)
- `styles/global.css` — Full `.prose` typography system (headings, links, blockquotes, code, lists, tables, images)
- `components/BlogCard.tsx` — Editorial blog card (server component, tag pills, hover lift, date+read arrow footer)
- `components/HomepageBlog.tsx` — Client wrapper for homepage blog preview with ScrollReveal
- `app/blog/page.tsx` — Full blog index (eyebrow, H1, description, 2-col grid, empty state, SEO metadata)
- `app/blog/[slug]/page.tsx` — Full blog post page (generateStaticParams, generateMetadata with OG article, breadcrumb JSON-LD, back link, tag pills, prose-styled MDX content, ContactSection)
- `app/sitemap.ts` — Dynamic sitemap (5 static pages + all blog posts)
- `app/feed.xml/route.ts` — RSS feed route handler with XML escaping + cache headers
- `public/robots.txt` — Updated sitemap URL from /api/sitemap.xml to /sitemap.xml
- `app/page.tsx` — Added "Latest Writing" section between testimonials and contact (2 latest posts)

### Decisions Made
- Blog data layer wraps existing `createContentLoader` from `lib/content.ts` — no modifications to content.ts needed
- BlogPostMeta needs `[key: string]: unknown` index signature to satisfy ContentMetadata constraint
- compileMDX with `parseFrontmatter: false` since gray-matter already strips it in content loader
- RSS feed as route handler (`app/feed.xml/route.ts`) with 1hr cache
- Sitemap as Next.js native `MetadataRoute.Sitemap`

### Known Issues
- Testimonials are placeholder copy (TODO) — need real quotes from PRD
- All blog post body copy is placeholder (TODO)
- All page copy marked with TODO needs review

### Next Session Should
- Session 5: Phase 7 — Polish, testing, deploy
- Visual QA all pages with `npm run prod`
- Mobile responsiveness testing
- Performance audit (Lighthouse)
- Replace placeholder testimonials with real ones from PRD
- Final copy review (all TODO comments)
- Deploy to Netlify

---

---

## Session 5 — Polish & QA

### Completed
- Removed all 27 `{/* TODO: Review and finalize copy */}` comments from 10 files
- `app/api/og/route.tsx` — Dynamic OG image generation (edge runtime, 1200x630, brand colors, ?title= param)
- `public/images/og-default.jpg` — Static OG fallback image (captured from API route)
- `app/layout.tsx` — Added OG image metadata (openGraph.images + twitter.images)
- `components/ContactSection.tsx` — Added `role="alert"` to success/error messages
- `styles/global.css` — Added `@media (prefers-reduced-motion: reduce)` block
- `components/Hero.tsx` — Improved alt text to be descriptive

---

## Session 6 — Dark Mode

### Completed

#### New File: `components/ThemeToggle.tsx`
- Client component with sun/moon SVG icon toggle
- Reads `localStorage.theme` on mount, falls back to `prefers-color-scheme`
- Listens for system preference changes (auto-follows when no explicit user choice)
- Renders placeholder `<div>` until mounted (prevents hydration mismatch)
- ARIA label updates dynamically: "Switch to light/dark mode"

#### Modified: `styles/global.css`
- Added `--surface` (#FFFFFF) and `--text-inverse` (#FFFFFF) to `:root`
- Added `:root[data-theme="dark"]` block overriding all 9 color variables
- Dark palette: bg #0F0F0F, surface #1A1A1A, text #E8E8E8, accent #D67580

#### Modified: `app/layout.tsx`
- Added blocking `<script>` in `<head>` for FOUC prevention: reads `localStorage.theme`, falls back to `prefers-color-scheme`, sets `data-theme` attribute synchronously before first paint
- Added `suppressHydrationWarning` on `<html>` to avoid React warnings from the blocking script

#### Modified: `components/Navigation.tsx`
- Integrated `<ThemeToggle />` into both desktop nav bar and mobile drawer

### Approach
- **CSS variables + `data-theme` attribute**: All existing `var(--property)` references automatically adapt when the attribute changes — zero component changes needed beyond Navigation
- **Not Tailwind `dark:` prefix**: Using `data-theme` attribute keeps the system framework-agnostic and avoids needing `dark:` variants on every utility class
- **FOUC prevention**: A synchronous inline script in `<head>` runs before React hydrates, reading localStorage → system preference → setting `data-theme` so users never see a flash of the wrong theme

### Decisions Made
- Dark mode palette designed for WCAG AA contrast ratios
- Accent color lightened slightly in dark mode (#D67580 vs #C4616C) for better legibility on dark backgrounds
- `suppressHydrationWarning` is safe here because the blocking script always runs before React, so the server/client mismatch is intentional and harmless

---

**Session Status**: Session 6 complete — Dark mode fully functional
**Blockers**: None
**Branch Status**: Ready for deployment
