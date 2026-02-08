# Architecture Reference

Current file structure and component organization for kavenkim.com (Next.js 15 App Router).

## Directory Tree

```
personal-site/
├── app/                           # Next.js 15 App Router
│   ├── layout.tsx                 # Root layout: fonts, GTM, Navigation, Footer
│   ├── page.tsx                   # Homepage
│   ├── about/
│   │   └── page.tsx               # About page
│   ├── results/
│   │   └── page.tsx               # Results/case studies page
│   ├── blog/
│   │   ├── page.tsx               # Blog list page
│   │   └── [slug]/
│   │       └── page.tsx           # Individual blog post (MDX-based)
│   └── contact/
│       └── page.tsx               # Contact/inquiry page
│
├── components/                     # Reusable React components
│   ├── Navigation.tsx              # Sticky header + mobile drawer
│   └── Footer.tsx                  # 3-column footer grid
│
├── lib/                            # Utility functions & data
│   ├── content.ts                  # Blog/post content loading (MDX, to be updated)
│   ├── schema.ts                   # TypeScript interfaces & validation schemas
│   └── seo.ts                      # SEO metadata helpers
│
├── styles/
│   └── global.css                  # Tailwind v4 + custom components
│
├── content/
│   └── blog/                       # MDX blog post files (future)
│       └── (empty, awaiting posts)
│
├── public/
│   ├── images/
│   │   └── profile.jpg             # Headshot image
│   ├── favicon.ico
│   └── robots.txt
│
├── .next/                          # Next.js build output (generated)
├── node_modules/                   # Dependencies (generated)
│
├── next.config.js                  # Next.js configuration + CSP headers
├── package.json                    # Dependencies & scripts
├── package-lock.json               # Dependency lock file
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # PostCSS (Tailwind) configuration
├── eslint.config.mjs               # ESLint configuration
├── tailwind.config.ts              # Tailwind configuration (if needed)
│
├── netlify.toml                    # Netlify deployment configuration
├── CLAUDE.md                       # Legacy documentation (reference only)
├── MEMORY.md                       # Session memory and rebuild plan
│
├── .gitignore
├── .git/                           # Git repository
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
| `/` | `app/page.tsx` | Homepage hero + intro | Stub (Session 2) |
| `/about` | `app/about/page.tsx` | Professional background | Stub (Session 3) |
| `/results` | `app/results/page.tsx` | Case studies showcase | Stub (Session 2) |
| `/blog` | `app/blog/page.tsx` | Blog post list | Stub (Session 4) |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Individual post (MDX) | Stub (Session 4) |
| `/contact` | `app/contact/page.tsx` | Contact form | Stub (Session 5) |

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

### GTM Integration
- Conditional script loading in `app/layout.tsx`
- Uses `NEXT_PUBLIC_GTM_ID` environment variable
- Fallback noscript iframe for browsers without JavaScript

### Content Model (Future)

**Blog Posts** (to be implemented):
- Location: `content/blog/*.mdx`
- Frontmatter: title, date, excerpt, tags, author
- Loaded and parsed by `lib/content.ts`
- Rendered as `app/blog/[slug]/page.tsx`

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

**Last Updated**: Session 1 (February 7, 2025)
**Status**: Foundation complete, ready for content phase
