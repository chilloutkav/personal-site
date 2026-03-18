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
- `npm run build-analyze` - Build with bundle analysis

### Tailwind CSS v4 Compatibility
**IMPORTANT**: Tailwind CSS v4 has compatibility issues with Next.js development mode.

**REQUIRED**: Always use `npm run prod` or `npm run rebuild`. Never use `npm run dev` (causes blank pages).

## Project Architecture

### App Router Structure

- **app/**: Next.js App Router (TypeScript)
  - `page.tsx`: Homepage with hero, results preview, testimonials, blog preview, contact
  - `about/page.tsx`: About page with professional journey and "How I Build Now" section
  - `results/page.tsx`: Case studies across PM, growth marketing, ecommerce, and building & automation
  - `blog/page.tsx`: Blog index
  - `blog/[slug]/page.tsx`: Dynamic blog post pages with MDX
  - `contact/page.tsx`: Full contact form page
  - `api/og/route.tsx`: OG image generation (edge runtime)
  - `feed.xml/route.ts`: RSS feed
  - `sitemap.ts`: Dynamic sitemap
  - `error.tsx`: Root error boundary
  - `global-error.tsx`: Global error boundary (catches layout errors)
  - `not-found.tsx`: Custom 404 page

- **components/**: React components
  - `Navigation.tsx`: Site navigation with scroll-aware styling
  - `Hero.tsx`: Homepage hero with animated titles ("Product Manager. Growth Marketer. Builder.")
  - `Footer.tsx`: Site footer with tagline and links
  - `ContactSection.tsx`: Contact form (Netlify Forms) with compact/full variants
  - `ScrollReveal.tsx`: Intersection Observer-based scroll animations (shared singleton observer)
  - `ResultCard.tsx`, `ResultsGrid.tsx`: Case study display
  - `TestimonialCard.tsx`: Testimonial cards with featured variant
  - `BlogCard.tsx`, `HomepageBlog.tsx`: Blog post cards
  - `ThemeToggle.tsx`: Light/dark mode toggle
  - `HomepageResults.tsx`: Homepage results preview

- **lib/**: Utilities and data
  - `results.ts`: Case study data with `Discipline` type (PM, Growth Marketing, Ecommerce, Building & Automation)
  - `testimonials.ts`: Testimonial data
  - `blog.ts`: Blog post loading and MDX compilation
  - `content.ts`: Shared content file reading utilities
  - `seo.ts`: SEO config and helpers (`SITE_CONFIG`, canonical URLs, OG image URLs)
  - `schema.ts`: JSON-LD structured data
  - `types.ts`: Shared types (`Discipline` union type)

- **content/**: MDX content files
  - `blog/`: Blog posts with frontmatter (title, date, excerpt, tags, featured)
  - `testimonials/`: Testimonial entries

- **styles/global.css**: Tailwind v4 import + custom component classes in `@layer components`

### Design System

- **Fonts**: Space Grotesk (headings, `--font-heading`) + DM Sans (body, `--font-body`)
- **Colors (light)**: bg `#FFFFFF`, text `#000000`, accent `#8C91FA` (periwinkle)
- **Colors (dark)**: bg `#000000`, text `#FFFFFF`, accent `#A0A5FF`
- **Dark mode**: `data-theme="dark"` attribute on `<html>`, not Tailwind `dark:` prefix
- **Borders**: Dashed style throughout (dividers, cards, inputs)
- **Accent usage**: Sparingly on link hovers, CTA buttons, focus rings, nav underlines, metrics

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

*Updated: March 2026 - Builder positioning, production audit fixes, shared ScrollReveal observer*
