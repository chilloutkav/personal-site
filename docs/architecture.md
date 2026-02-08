# Architecture Reference

Current file structure and component organization for kavenkim.com (Next.js 15 App Router).

## Directory Tree

```
personal-site/
├── app/                           # Next.js 15 App Router
│   ├── layout.tsx                 # Root layout: fonts, GTM, Navigation, Footer
│   ├── page.tsx                   # Homepage (Hero + Results + Testimonials + Blog + Contact)
│   ├── sitemap.ts                 # Dynamic sitemap (static pages + blog posts)
│   ├── about/
│   │   └── page.tsx               # About page (asymmetric layout, pull-quotes)
│   ├── results/
│   │   └── page.tsx               # Results/case studies page (5 studies, 2-col grid)
│   ├── blog/
│   │   ├── page.tsx               # Blog index (2-col grid of BlogCards)
│   │   └── [slug]/
│   │       └── page.tsx           # Blog post (MDX rendering, generateStaticParams)
│   ├── contact/
│   │   └── page.tsx               # Contact page (full-variant form)
│   └── feed.xml/
│       └── route.ts               # RSS feed route handler
│
├── components/                     # Reusable React components
│   ├── Navigation.tsx              # Sticky header + mobile drawer (client)
│   ├── Footer.tsx                  # 3-column footer grid (server)
│   ├── Hero.tsx                    # Two-column hero with staggered headlines (client)
│   ├── ResultCard.tsx              # Editorial case study card (server)
│   ├── BlogCard.tsx                # Editorial blog card with tag pills (server)
│   ├── TestimonialCard.tsx         # Testimonial with featured/default variants (server)
│   ├── ContactSection.tsx          # Netlify Forms, compact/full variants (client)
│   ├── ScrollReveal.tsx            # IntersectionObserver animation wrapper (client)
│   ├── HomepageResults.tsx         # Homepage results grid wrapper (client)
│   ├── HomepageBlog.tsx            # Homepage blog preview wrapper (client)
│   └── ResultsGrid.tsx             # Results page grid wrapper (client)
│
├── lib/                            # Utility functions & data
│   ├── blog.ts                     # Blog data layer (wraps content.ts + compileMDX)
│   ├── content.ts                  # Generic MDX content loader factory
│   ├── results.ts                  # Case study data (5 studies)
│   ├── testimonials.ts             # Testimonial data (3 testimonials)
│   ├── schema.ts                   # Structured data (Person + Breadcrumb schemas)
│   └── seo.ts                      # SEO config + helpers
│
├── styles/
│   └── global.css                  # Tailwind v4 + design system + .prose typography
│
├── content/
│   └── blog/                       # MDX blog post files
│       ├── why-pms-should-learn-growth.mdx
│       ├── ecommerce-conversion-checklist.mdx
│       └── building-this-site.mdx
│
├── public/
│   ├── images/
│   │   └── profile.jpg             # Headshot image
│   ├── favicon.ico
│   └── robots.txt                  # Updated: sitemap → /sitemap.xml
│
├── docs/                           # Project documentation
│   ├── build-log.md
│   ├── architecture.md
│   ├── design-system.md
│   ├── known-issues.md
│   ├── component-inventory.md
│   └── copy-review.md
│
├── next.config.js                  # Next.js configuration + CSP headers
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # PostCSS (Tailwind) configuration
├── eslint.config.mjs               # ESLint configuration
├── netlify.toml                    # Netlify deployment configuration
├── CLAUDE.md                       # Development guidance
└── README.md                       # Project readme
```

## Component Hierarchy

```
app/layout.tsx (root)
├── <head>
│   └── Script (GTM)
├── <body>
│   ├── Navigation (sticky header)
│   │   ├── Logo (home link)
│   │   ├── Desktop nav (About, Results, Blog, Contact)
│   │   ├── Mobile hamburger
│   │   └── Mobile drawer menu
│   ├── <main>
│   │   └── [page routes render here]
│   └── Footer
│       ├── Brand column
│       ├── Navigate column
│       ├── Connect column
│       └── Bottom bar (copyright)
```

## Page Routes

| Route | File | Purpose | Status |
|-------|------|---------|--------|
| `/` | `app/page.tsx` | Homepage (Hero + Results + Testimonials + Blog + Contact) | Complete |
| `/about` | `app/about/page.tsx` | Professional background (asymmetric, pull-quotes) | Complete |
| `/results` | `app/results/page.tsx` | Case studies (5 studies, 2-col grid) | Complete |
| `/blog` | `app/blog/page.tsx` | Blog index (2-col grid, SEO metadata) | Complete |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Blog post (MDX, generateStaticParams, JSON-LD) | Complete |
| `/contact` | `app/contact/page.tsx` | Contact form (full-variant Netlify Forms) | Complete |
| `/sitemap.xml` | `app/sitemap.ts` | Dynamic sitemap (static pages + blog posts) | Complete |
| `/feed.xml` | `app/feed.xml/route.ts` | RSS feed | Complete |

## Key Implementation Details

### App Router vs Pages Router
- **Old**: `pages/` directory with file-based routing
- **New**: `app/` directory with directory-based routing
- **Components**: Moved to `components/` (not tied to routes)

### Font Integration
- Space Grotesk (headings): Loaded via `next/font/google` in `app/layout.tsx`
- DM Sans (body): Loaded via `next/font/google` in `app/layout.tsx`
- CSS variables: `--font-heading` and `--font-body` set on `<html>` element

### Styling Architecture

**Global CSS** (`styles/global.css`):
1. `@import "tailwindcss"` — Core Tailwind utilities
2. `@layer base` — HTML element resets and defaults
3. `@layer components` — Custom animations, delay utilities, scroll animation helpers

**Variable System**:
- All colors, spacing, radii defined as CSS custom properties in `:root`
- Applied via `var(--property-name)` throughout components

**Responsive Design**:
- Mobile-first Tailwind utilities (no breakpoint prefix = mobile)
- Breakpoints: `md:` (768px+), `lg:` (1024px+)

### Client vs Server Components

- **Server Components** (default):
  - `app/layout.tsx` — root layout
  - All page files (`page.tsx`)
  - `components/Footer.tsx` — static component
  - `lib/` utilities

- **Client Components** (with "use client"):
  - `components/Navigation.tsx` — scroll detection, mobile drawer state
  - `components/Hero.tsx` — staggered fadeInUp headline animations
  - `components/ContactSection.tsx` — form state management
  - `components/ScrollReveal.tsx` — IntersectionObserver scroll animation
  - `components/HomepageResults.tsx` — wraps server ResultCards with ScrollReveal
  - `components/HomepageBlog.tsx` — wraps server BlogCards with ScrollReveal
  - `components/ResultsGrid.tsx` — wraps server ResultCards with ScrollReveal

### GTM Integration
- Conditional script loading in `app/layout.tsx`
- Uses `NEXT_PUBLIC_GTM_ID` environment variable
- Fallback noscript iframe for browsers without JavaScript

### Content Model

**Blog Posts** (implemented):
- Location: `content/blog/*.mdx`
- Frontmatter: title, date, excerpt, tags (string[]), featured (boolean)
- Loaded by `lib/blog.ts` via `lib/content.ts` content loader factory
- MDX compiled at build time via `next-mdx-remote/rsc` `compileMDX`
- Rendered in `app/blog/[slug]/page.tsx` with `.prose` typography styles
- Static params generated via `generateStaticParams()` for SSG

## Build & Output

**Development**:
```bash
npm run prod          # Production build + server (required for Tailwind v4)
```

**Production**:
```bash
npm run build         # Create .next/ build
npm start             # Start production server
```

**Output**:
- Next.js compiles all app/ routes to static HTML + dynamic routes
- Tailwind processes global.css and all TSX files for utilities
- Build output in `.next/` directory (ignored in git)

## Dependencies (Key)

| Package | Purpose |
|---------|---------|
| next@15 | React framework + App Router |
| react@19 | UI library |
| typescript | Type safety |
| tailwindcss@4 | Utility CSS framework |
| postcss | CSS processor (for Tailwind) |
| eslint | Code linting |
| next/font | Font loading optimization |

See `package.json` for full dependency list.

## Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID | No (conditional) |

## Performance Considerations

- **Font Optimization**: Both fonts use `display: "swap"` for web-safe rendering
- **Image Optimization**: Next.js `Image` component (not yet used, available for future)
- **Bundle Size**: Tailwind v4 uses tree-shaking for unused utilities
- **Caching**: Next.js caches generated pages (ISR available for dynamic routes)

## Security

- **CSP Headers**: Configured in `next.config.js`
- **GTM Domain**: google.com/doubleclick.net allowed via CSP
- **No Secrets**: Environment variables are `NEXT_PUBLIC_*` (safe for client)

---

**Last Updated**: Session 4
**Status**: All pages and routes functional. Ready for polish phase (Session 5).
