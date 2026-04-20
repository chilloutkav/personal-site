# CLAUDE.md

Development guidance for Claude Code when working on kavenkim.com.

## Development Commands

### Core Workflow
- `npm run prod` - **PRIMARY DEVELOPMENT WORKFLOW**: Build and start production server
- `npm run build` - Build for production
- `npm start` - Start production server (requires existing build)
- `npm run rebuild` - Clean cache, build, and start production server

### Development Tools
- `npm run type-check` - TypeScript type checking
- `npm run lint` - ESLint checks
- `npm run clean` - Clear .next directory

### Tailwind CSS v4 Compatibility
**IMPORTANT**: Tailwind CSS v4 has compatibility issues with Next.js development mode.

**REQUIRED**: Always use `npm run prod` or `npm run rebuild`. Never use `npm run dev` (causes blank pages).

## Project Architecture

### App Router Structure

- **app/**: Next.js App Router (TypeScript). Every page is wrapped by `TerminalShell` via `app/layout.tsx`.
  - `page.tsx`: Homepage with hero, results preview, testimonials, blog preview
  - `about/page.tsx`: About page with "The short version" narrative and "Sysinfo" key/value block (plus Barry ASCII)
  - `results/page.tsx`: Case studies across PM, growth marketing, ecommerce, and building & automation
  - `blog/page.tsx`: Blog index (dispatches feed)
  - `blog/[slug]/page.tsx`: Dynamic blog post pages with MDX
  - `contact/page.tsx`: Full contact form page
  - `api/og/route.tsx`: OG image generation (edge runtime)
  - `feed.xml/route.ts`: RSS feed
  - `sitemap.ts`: Dynamic sitemap
  - `error.tsx`: Root error boundary
  - `global-error.tsx`: Global error boundary (catches layout errors)
  - `not-found.tsx`: Custom 404 page

- **components/**: React components
  - `TerminalShell.tsx`: Terminal-window chrome (title bar with macOS dots + theme toggle, tab bar, status bar, keyboard tab navigation, 12-hour NY clock). Wraps every page.
  - `Hero.tsx`: Homepage hero — boot log (analytics state gated on `NEXT_PUBLIC_GTM_ID`), ASCII banner, H1 + dek, badges, `ls`-style nav grid
  - `TopPrompt.tsx`, `BottomPrompt.tsx`: Prompt-line markers at the top and bottom of each page section
  - `AsciiDivider.tsx`: Dashed visual separator; optional inline title
  - `ContactSection.tsx`: Contact form (Netlify Forms)
  - `ResultCard.tsx`, `ResultsGrid.tsx`: Case study display (ResultsGrid accepts a `detailed` flag)
  - `PageHeader.tsx`: Shared page opener (TopPrompt + optional divider + h2 + subtitle)
  - `TestimonialCard.tsx`: Testimonial cards with featured variant
  - `BlogCard.tsx`, `HomepageBlog.tsx`: Blog post cards

- **lib/**: Utilities and data
  - `results.ts`: Case study data (headline, blurb, problem/action/result narrative, metric + sparkline)
  - `testimonials.ts`: Testimonial data (verbatim quotes — never edit)
  - `blog.ts`: MDX blog loader (reads `content/blog/*.mdx` via gray-matter, compiles via `next-mdx-remote/rsc`)
  - `seo.ts`: `SITE_CONFIG`, `buildCanonicalUrl`, `buildOGImageUrl`
  - `schema.ts`: JSON-LD structured data (BreadcrumbList)
  - `icon.tsx`: Shared JSX for `app/icon.tsx` and `app/apple-icon.tsx` OG-route icons

- **content/**: MDX content files
  - `blog/`: Blog posts with frontmatter (title, date, excerpt, tags, featured)
  - `testimonials/`: Testimonial entries

- **styles/global.css**: Tailwind v4 import + custom component classes in `@layer components`

### Design System

- **Fonts**: Inter (headings + prose, `var(--font-sans)`) + JetBrains Mono (chrome, prompts, boot log, body default, `var(--font-mono)`)
- **Colors (dark, default)**: bg `#0F1411`, fg `#E4E6DF`, accent `#8C91FA` (periwinkle)
- **Colors (light "paper")**: bg `#F5F3E8`, fg `#1C1F18`, accent `#5055C9`
- **Theme switch**: `data-theme="light"` attribute on `<html>` for the paper theme; dark is the default (no attribute), not Tailwind `dark:` prefix
- **Borders**: Dashed style throughout (dividers, card separators, inputs)
- **Accent usage**: Sparingly on link hovers, CTA buttons, focus rings, nav active dot, metrics, selection

### Positioning

The site positions Kaven across three tracks with "builder" as the connective thread:
- **Product Manager**: Product strategy, onboarding, lead scoring, CAC reduction
- **Growth Marketer**: Paid media, ROAS optimization, ad spend scaling
- **Builder**: AI-native building with Claude Code and n8n, from insight to working prototype

Case studies span four disciplines: Product Management, Growth Marketing, Ecommerce, and Building & Automation.

### Copy Style

- Direct, confident, no corporate fluff
- No em dashes anywhere in copy (use periods, commas, or colons instead)
- No words like "leverage," "synergy," or "passionate"
- Keep Barry the Shiba Inu in the About page

## Environment Configuration

### Required Variables
See `.env.example` for template. Create `.env.local`:
```bash
NEXT_PUBLIC_GTM_ID=GTM-5CXC3C8
```

### Google Tag Manager
- **Container ID**: `GTM-5CXC3C8`
- **Implementation**: Inline script in `app/layout.tsx` (conditional on env var)
- **CSP**: `unsafe-inline` required for GTM in `next.config.js`

### Netlify Configuration
- **BUILD_IMAGE**: `ubuntu-24.04-noble`
- **AWS_LAMBDA_JS_RUNTIME**: `nodejs22.x`
- **Contact form**: Netlify Forms with honeypot field, submits to `/__forms.html`

## Troubleshooting

- **Blank Pages**: Use `npm run prod`, never `npm run dev`
- **CSS Not Loading**: Run `npm run rebuild`
- **Port Issues**: `lsof -i :3000` to check running processes
- **Type Errors**: Run `npm run type-check`

---

*Updated: April 2026 - Terminal-shell redesign, builder positioning, production audit fixes*
