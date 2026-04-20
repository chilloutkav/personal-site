# kavenkim.com

Personal site for Kaven Kim. Terminal-shell aesthetic, dark-by-default with a paper theme, Inter + JetBrains Mono, periwinkle accent.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and MDX for the blog.

## Quick start

```bash
npm install
cp .env.example .env.local   # add NEXT_PUBLIC_GTM_ID if you want GA4
npm run prod                 # build + serve at http://localhost:3000
```

**Don't run `npm run dev`** — Tailwind CSS v4 has dev-mode issues with Next.js and pages render blank. Always build and serve via `npm run prod` or `npm run rebuild`.

## Commands

| | |
| --- | --- |
| `npm run prod` | Build + start production server (primary dev workflow) |
| `npm run rebuild` | Clean cache, build, and start |
| `npm run build` | Build only |
| `npm start` | Start a pre-built server |
| `npm run type-check` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run clean` | Remove `.next/` |

## Structure

```
app/                     # App Router pages
  page.tsx               # Home (hero, receipts preview, testimonials, dispatches)
  about/                 # /about
  results/               # /results — case studies
  blog/                  # /blog + /blog/[slug] — MDX dispatches
  contact/               # /contact
  api/og/                # OG image generation (edge runtime)
  feed.xml/              # RSS feed
  sitemap.ts             # Dynamic sitemap
  error.tsx              # Route error boundary
  global-error.tsx       # Root error boundary
  layout.tsx             # Wraps children with TerminalShell
components/
  TerminalShell.tsx      # Title bar / tab bar / status bar / theme toggle / 12h NY clock
  Hero.tsx               # Homepage hero
  PageHeader.tsx         # TopPrompt + optional divider + h2 + subtitle
  ResultCard.tsx         # Case study card
  ResultsGrid.tsx        # Receipts list (accepts `detailed` flag)
  HomepageBlog.tsx       # Blog feed on homepage
  BlogCard.tsx           # Blog post card
  TestimonialCard.tsx    # Testimonial card
  ContactSection.tsx     # Netlify Forms contact form
  AsciiDivider.tsx       # Dashed section divider
  TopPrompt.tsx          # `kav@kim : ~ $ cmd` prompt line
  BottomPrompt.tsx       # Trailing prompt with blinking caret
lib/
  blog.ts                # MDX loader
  results.ts             # Case study data
  testimonials.ts        # Testimonial data
  seo.ts                 # SITE_CONFIG + URL helpers
  schema.ts              # JSON-LD breadcrumbs
  icon.tsx               # Shared KK icon JSX
content/
  blog/*.mdx             # Blog posts (frontmatter: title, date, excerpt, tags, featured)
styles/global.css        # Design tokens + component classes
```

## Design system

- **Fonts**: Inter (headings + prose), JetBrains Mono (chrome, prompts, boot log)
- **Dark (default)**: `#0F1411` bg, `#E4E6DF` fg, `#8C91FA` periwinkle accent
- **Light (paper)**: `#F5F3E8` bg, `#1C1F18` fg, `#5055C9` accent
- **Theme switch**: `data-theme="light"` attribute on `<html>`; anti-flash inline script in `layout.tsx` reads `localStorage.theme` before paint
- **Borders**: dashed throughout
- **Accent usage**: reserved for link hovers, CTA buttons, focus rings, nav active dot, metrics, selection

## Deployment

Primary target is Netlify via `@netlify/plugin-nextjs`. Environment variables live in the Netlify dashboard; `NEXT_PUBLIC_GTM_ID` gates the GA4 script.

Netlify config is in `netlify.toml`: `ubuntu-24.04-noble` build image, Node 22 runtime.

Contact form posts to `/__forms.html` (Netlify Forms) with a honeypot field.

## Content conventions

- **No em dashes** in copy. Use periods, commas, or colons.
- **No** "leverage," "synergy," or "passionate".
- Testimonials are real client quotes. Never edit them, typos and all.
- Barry the Shiba Inu stays on the About page.

See `CLAUDE.md` for the full contributor guide.
