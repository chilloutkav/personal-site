# kavenkim.com — Product Requirements Document

## 1. Executive Summary

A complete rebuild of kavenkim.com as a personal professional website for Kaven Kim. The site positions Kav as a Product Manager who brings 12+ years of digital marketing and ecommerce/Shopify expertise — a rare combination that bridges strategy, paid media execution, and technical operations.

The site serves two primary audiences: hiring managers and recruiters evaluating Kav for PM, marketing, or ecommerce roles, and freelance clients validating him after seeing his Upwork profile (where he has $100K+ in earnings). The site is not a portfolio of coding projects — it's a professional landing page that establishes credibility through results, narrative, and social proof.

The design draws inspiration from editorial, grid-based layouts (reference: wntdapparel.com) with bold typography, structured whitespace, and a confident visual identity. The site should feel like a person who knows what they're doing — not a template.

## 2. Problem Statement

- **The problem:** Kav's current site positions him only as a Product Manager with Flatiron School coding projects. It doesn't reflect his 12+ years of paid media and Shopify expertise, which is where the majority of his revenue comes from. Potential clients and employers see a disconnect between his Upwork profile (marketing/ecommerce) and his website (PM with JavaScript demos).
- **Who it affects:** Hiring managers Googling his name, freelance clients checking him out after Upwork proposals, and Kav himself who can't confidently send people to his site.
- **Current state:** The existing site has three pages (Home, Projects, About) with a PM-only headline, two coding projects (Pokemon Team Creator, a CRM), and a well-written but incomplete About page. There is no mention of marketing, Shopify, or ecommerce work.
- **Why now:** Kav is actively applying to jobs and sending freelance proposals. People are checking this site right now.

## 3. Target Users

### Primary User 1: Hiring Manager / Recruiter
- Found Kav through LinkedIn, a job application, or a referral
- Googled "Kaven Kim" and landed on kavenkim.com
- Needs to quickly understand what Kav does and whether he's credible
- Looking for: clear positioning, proof of impact, professional presentation
- Technical level: non-technical to semi-technical
- Time on site: 30-90 seconds

### Primary User 2: Freelance Client
- Clicked through from Kav's Upwork profile or got his name from a referral
- Wants to validate that he's real, experienced, and worth $75/hour
- Looking for: evidence of relevant experience, results, personality/trustworthiness
- Technical level: varies (business owners, marketing directors, founders)
- Time on site: 1-3 minutes

### User Stories
- As a hiring manager, I want to quickly understand what Kav does so I can determine if he's a fit for my open role.
- As a hiring manager, I want to see proof of impact so I can feel confident recommending him to the team.
- As a freelance client, I want to validate that Kav has relevant experience so I feel comfortable hiring him.
- As a freelance client, I want to see what others say about working with him so I can trust him with my budget.
- As a visitor, I want to contact Kav easily so I can start a conversation about working together.

## 4. Feature Requirements

### P0 — MVP (Must Have)

#### Homepage
- **Hero section** with headline that spans all three disciplines. Suggested direction: "Product Manager. Growth Marketer. Ecommerce Operator." or similar — something that immediately communicates breadth without diluting expertise.
- Subheadline or short paragraph that ties the three together (e.g., "I help businesses grow by connecting product strategy, paid acquisition, and technical operations.")
- Professional headshot (existing photo is fine)
- Primary CTA: "Get in touch" or "Let's work together"
- Social links: LinkedIn (https://www.linkedin.com/in/kavenkim/) — remove GitHub link

#### About Page
- Claude Code should rewrite the About page copy while retaining the same conversational, authentic tone of the existing version
- Update to reflect all three disciplines equally, not just the PM → marketing → PM arc
- Career arc to weave into the narrative (use for context, not as a literal timeline):
  - Started in affiliate marketing and Facebook audience building (2013)
  - Moved into agency-side PPC at Taktical, An Abstract Agency, and THOMASNET (2014-2017)
  - Became Growth Director at Tinker+Growth, leading strategy across SEO, PPC, CRO, UX (2017-2018)
  - Went independent as a Digital Product & Growth Consultant — managed PPC spend across Google Ads and Meta, led website rebuilds, built marketing automation systems, reduced CAC for clients (2018-2022)
  - Transitioned to Product Manager at Smoke Rise NY — owns product strategy, drove conversion improvements, shipped website redesign, implemented Gorgias, built automation workflows (2022-present)
  - Attended Flatiron School for Software Engineering — gives technical depth
- Include the Flatiron School / software engineering background as a differentiator (technical PM who understands systems), not as the main story
- Mention Barry the Shiba Inu — small humanizing detail that makes Kav memorable
- End with a clear CTA to get in touch
- The copy should feel like a real person talking, not a resume. Keep the existing site's tone: casual but confident, self-aware, with the occasional dry humor

#### "How I've Helped" / Results Section
- 3-5 anonymized result stories using the Problem → What I Did → Result format
- No client names needed — use descriptors like "a DTC home goods brand" or "a premium art company"
- Include real metrics: 8X ROAS improvements, 400% conversion increases, 50% CAC reduction, budget ranges managed ($1K-$100K/month)
- Cover all three disciplines across the stories — at least one PM-flavored result, one paid media result, one Shopify/ecommerce result
- Each story should be a short paragraph (3-5 sentences), not a formal case study

#### Contact Section
- Email address (hi@kavenkim.com)
- Contact form powered by Netlify Forms
- Present on the homepage and accessible from all pages
- Social links:
  - LinkedIn: https://www.linkedin.com/in/kavenkim/

#### Navigation
- Clean top navigation: Home, About, Results (or "Work"), Blog, Contact
- Sticky or accessible on scroll
- Mobile hamburger menu

### P1 — Fast Follow

#### Testimonials Section
- 3 client quotes sourced from Upwork reviews, displayed on the homepage
- Design as a grid that fits the editorial aesthetic
- Clean up minor grammar issues from original reviews

**Testimonial 1 (Primary — feature prominently):**
> "It was a great pleasure working with Kaven. Not only did he deliver great quality product, but also helped us find additional human resources on short notice. Having someone you can rely on and trust that the job will be done on time and with outstanding quality is incredibly important when dealing with a high-growth startup. Ready to hire him for another project."
> — Founder, High-Growth Startup

**Testimonial 2:**
> "Kaven is an exceptionally talented and wonderful SEM / PPC Manager. I have nothing but the highest regard for him and the quality of his work."
> — Business Growth Startup

**Testimonial 3:**
> "Kaven really helped us rebuild and improve our Google Ads account! He was very responsive, easy to work with, and met all of our expectations. I would definitely recommend him!"
> — Ecommerce Business Owner



### P2 — Future Enhancements

#### Blog Section
- MDX-powered blog with support for rich content (code blocks, images, callouts)
- Blog index page with post cards in the grid layout style
- Individual post pages with clean reading experience
- Tags or categories (optional, can be added later)
- Empty at launch — structure should be in place with perhaps one placeholder or introductory post
- RSS feed support

### Anti-Features (Explicitly Out of Scope)
- **No coding projects:** Remove the Pokemon Team Creator and CRM project entirely. These signal "junior developer" not "experienced PM/marketer."
- **No Onesto Digital mention:** The agency and personal site are completely separate entities.
- **No GitHub link:** Removes the developer signal. The software engineering background is mentioned in the About copy as a differentiator, not showcased as a primary skill.
- **No services page with pricing:** This isn't a freelancer sales page. The site validates, it doesn't sell.
- **No chatbot or AI features:** Keep it simple and professional.

## 5. User Experience

### Design Principles
- **Editorial / magazine-inspired**: Draw from WNTD Apparel's grid-based layout approach — structured grids, clean borders/lines, bold typography, confident whitespace. Adapt this ecommerce aesthetic for a personal professional context.
- **Bold but professional**: This isn't a corporate site, but it's not a streetwear brand either. Find the sweet spot — confident, clean, with personality.
- **Content-first**: Every section should earn its place. No filler sections, no stock imagery, no generic "services" icons.
- **Fast to scan**: Both audiences (recruiters and clients) will spend under 2 minutes. The hierarchy should let someone get the gist in 15 seconds.

### Typography Direction
- Avoid generic fonts (Inter, Roboto, Arial, system fonts)
- Use a distinctive display/heading font paired with a clean body font
- Bold, confident headings — large type that commands attention
- Suggested starting points to explore: a geometric sans-serif or editorial serif for headings, paired with a highly readable sans for body text
- Consider fonts available through Google Fonts or self-hosted for performance

### Color Direction
- The current site is black and white, which is clean but forgettable
- Consider a primarily monochrome palette with one or two sharp accent colors
- Dark mode has been implemented using CSS variables with `data-theme="dark"` attribute, localStorage persistence, and system preference detection

### Layout Direction
- Grid-based composition inspired by WNTD's product grid — but applied to content blocks, result stories, testimonials, and blog posts
- Subtle border/line treatments to create structure
- Generous whitespace — don't crowd sections
- Asymmetric layouts where appropriate (e.g., About page with text offset, not centered)
- Mobile responsive with clean stacking behavior

### Screen-by-Screen Wireframe Descriptions

#### Homepage
```
- Navigation bar: "Kav" or "Kaven Kim" left, nav links right (About, Results, Blog, Contact)
- Hero section: 
  - Large bold headline spanning the three disciplines
  - 1-2 sentence subheadline tying them together
  - Headshot (circular or editorial crop)
  - Primary CTA button
  - Social links (LinkedIn)
- Results preview: 
  - Section heading like "How I've Helped"
  - Grid of 3 anonymized result cards (Problem → Result format, condensed)
  - "See all results" link if results live on their own page
- Testimonials: 
  - 2-3 client quotes in a grid or horizontal layout
  - Client attribution (name/role or anonymized industry)
- Contact: 
  - Simple section with email, CTA button, social links
- Footer: 
  - Minimal — copyright, social links, navigation repeat
```

#### About Page
```
- Navigation bar (same as homepage)
- Large heading: "Hey, I'm Kaven"
- Body content: 
  - Narrative paragraphs (existing style, updated content)
  - Covers: marketing background → systems thinking → PM evolution → technical skills → current focus
  - Barry the Shiba Inu mention woven in naturally
- CTA section at bottom: "Want to work together?" with contact options
- Footer
```

#### Results Page (or section)
```
- Navigation bar
- Page heading: "How I've Helped" or "Selected Work"
- Grid of 3-5 result story cards:
  - Each card: industry/type label, brief problem statement, what was done, key metric/result
  - Expandable or linked to a detail view (optional)
- CTA at bottom
- Footer
```

#### Blog Index
```
- Navigation bar
- Page heading: "Writing" or "Blog"
- Grid of blog post cards:
  - Each card: title, date, short excerpt or description, optional tag
  - Cards follow the same grid system as the rest of the site
- Empty state: single introductory post or a message like "Posts coming soon"
- Footer
```

#### Blog Post Page
```
- Navigation bar
- Post header: title, date, optional tags
- Post body: MDX-rendered content with good reading typography
  - Max-width for readability (65-75ch)
  - Support for: headings, code blocks, images, blockquotes, callouts
- Back to blog link
- Footer
```

### Responsive Behavior
- Desktop-first design (primary audience is recruiters and clients on laptops)
- Mobile fully responsive — grid collapses to single column, navigation becomes hamburger
- Tablet gets an intermediate layout where appropriate
- Touch targets sized appropriately for mobile
- No horizontal scrolling on any breakpoint

## 6. Technical Architecture

### Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX for blog posts
- **Contact Form:** Netlify Forms
- **Hosting:** Netlify
- **Package Manager:** npm or yarn (match existing codebase preference)

### High-Level Architecture
- Static site generation (SSG) for all pages — no server-side rendering needed
- MDX files stored in the repo (e.g., `/content/blog/`) — no external CMS
- Blog posts rendered at build time via Next.js static generation
- Image optimization via Next.js Image component
- Contact form powered by Netlify Forms — no backend needed, just add `netlify` attribute to the form element and configure in Netlify dashboard

### Key Components
- `Layout` — shared navigation, footer, page wrapper
- `Navigation` — responsive nav with mobile hamburger
- `Hero` — homepage hero section
- `ResultCard` — anonymized result story component
- `TestimonialCard` — client quote component
- `BlogCard` — blog post preview card
- `BlogPost` — MDX-rendered blog post layout
- `ContactSection` — reusable CTA/contact block
- `Footer` — site footer

### Third-Party Integrations
- **Netlify Forms** for contact form submissions (built-in with Netlify hosting, no API key needed)
- **Google Fonts** or self-hosted fonts for typography
- **Google Analytics** or **Plausible** for basic analytics (optional, can add post-launch)

### Infrastructure & Deployment
- Hosted on Netlify (existing setup)
- Auto-deploy from GitHub main branch
- No environment variables needed for MVP (unless using a form service API key)
- Custom domain: kavenkim.com (already configured)

## 7. Security & Code Quality

### Security
- No sensitive data stored or transmitted
- Contact form uses a third-party service (no custom backend to secure)
- Content Security Policy headers configured via Netlify
- HTTPS enforced (Netlify handles this)
- No user authentication required
- Sanitize any form inputs before submission
- Keep dependencies up to date — run `npm audit` regularly

### Code Quality
- **ESLint** configured and enforced — run lint after every coding session
- **Prettier** for consistent formatting
- **TypeScript** for type safety — all components and utilities should be typed
- Consistent component naming conventions (PascalCase for components, follow Next.js App Router conventions)
- Meaningful commit messages
- No console.logs or debug code in production

## 8. Success Metrics & KPIs

- **Primary metric:** Kav feels confident sending anyone (employer or client) to kavenkim.com
- **Secondary metrics:**
  - Site loads in under 2 seconds on desktop
  - Passes Lighthouse performance audit with 90+ score
  - Mobile responsive with no layout issues
  - At least one person (recruiter or client) comments positively on the site within the first month

### Performance Requirements
- Lighthouse Performance score: 90+
- Lighthouse Accessibility score: 90+
- First Contentful Paint: under 1.5 seconds
- Total page weight: under 1MB (excluding images)
- All images optimized and lazy-loaded

## 9. Launch Plan

1. **This weekend:** Build the core site structure (homepage, about, results, contact, navigation, footer)
2. **Fast follow:** Add testimonials section, resume download, and blog structure
3. **Ongoing:** Write and publish blog posts as time allows
4. **Post-launch:** Monitor analytics, gather feedback, iterate on copy and positioning based on what resonates

### Launch Criteria
- Homepage, About, Results, and Contact sections are live and populated
- Site is mobile responsive
- Linting passes with no errors
- Site deploys successfully to Netlify on kavenkim.com
- Kav has reviewed all copy and is happy with the positioning

## 10. Out of Scope

- **Onesto Digital integration or mention** — completely separate
- **Coding project showcases** — removed entirely
- **Custom backend or API** — static site only
- ~~**Dark mode**~~ — **Completed** (Session 6): CSS variable overrides via `data-theme="dark"`, ThemeToggle component, localStorage + system preference, FOUC prevention
- **Analytics dashboard** — basic tracking only if added
- **SEO optimization beyond basics** — meta tags and OpenGraph yes, but no deep SEO strategy for v1
- **Animations beyond subtle transitions** — keep it fast and clean, don't over-engineer motion for v1

## 11. Open Questions & Risks

- **Testimonial permissions:** Kav is using Upwork reviews on his personal site with anonymized attribution. If any client objects, quotes can be removed.
- **Headshot:** Kav will use the current photo and update as needed. Ensure the image is optimized for a larger hero treatment.
- **Blog content strategy:** What topics will Kav write about? PM insights, marketing tactics, ecommerce tips, or a mix? Having 1-2 posts at launch would strengthen the site significantly.
- **Result stories:** Kav will need to review and refine the anonymized result stories generated by Claude Code. The PRD provides the format (Problem → What I Did → Result) and real metrics, but Kav should verify the specifics match his actual experience.
- **About page copy:** Claude Code will generate new copy based on career arc details provided. Kav will review and tweak the tone/content after initial generation.

## 12. Claude Code Implementation Notes

### Coding Style
- Use Next.js App Router conventions
- Tailwind CSS for all styling — no separate CSS files unless absolutely necessary
- Component-based architecture — each section is its own component
- Keep components small and focused
- Use semantic HTML throughout

### File Organization
```
/
├── app/
│   ├── layout.tsx          # Root layout with nav + footer
│   ├── page.tsx            # Homepage
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── results/
│   │   └── page.tsx        # Results page
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/
│   │       └── page.tsx    # Individual blog post
│   └── contact/
│       └── page.tsx        # Contact page (optional — could be section only)
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ResultCard.tsx
│   ├── TestimonialCard.tsx
│   ├── BlogCard.tsx
│   ├── ContactSection.tsx
│   └── ...
├── content/
│   └── blog/
│       └── *.mdx           # Blog posts
├── lib/
│   └── mdx.ts              # MDX utilities
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.ts
└── ...
```

### Implementation Order
1. **Setup:** Initialize Next.js project with Tailwind, configure ESLint + Prettier, set up basic file structure
2. **Layout:** Build the shared layout — Navigation (desktop + mobile) and Footer
3. **Homepage:** Hero section, then Results preview, then Testimonials, then Contact section
4. **About page:** Narrative content with updated copy
5. **Results page:** Full results with all anonymized stories
6. **Blog infrastructure:** MDX setup, blog index page, individual post template
7. **Polish:** Responsive testing, Lighthouse audit, final copy review, font loading optimization
8. **Deploy:** Push to GitHub, verify Netlify deployment, test on kavenkim.com

### Linting & Quality Gates
- Run `npx eslint .` after every coding session
- Run `npx prettier --check .` to verify formatting
- Fix all warnings and errors before committing
- Test responsive behavior at 320px, 768px, 1024px, and 1440px breakpoints
- Verify no TypeScript errors: `npx tsc --noEmit`

### Content Placeholders
For launch, use placeholder content where Kav hasn't provided final copy:
- Result stories: Include 3-4 placeholder stories based on the metrics discussed (8X ROAS, 50% CAC reduction, 400% conversion increase, Shopify rebuild) and career arc (consulting work 2018-2022, PM work at Smoke Rise NY 2022-present) — Kav will refine the specifics
- Testimonials: Use the exact testimonial quotes provided in Section 4 (P1) — these are final, not placeholders
- Blog: Include one placeholder post or an empty state
- About page: Claude Code generates the copy based on career arc and tone direction in Section 4 — Kav will tweak after
- Mark all placeholder content with `{/* TODO: Replace with final copy */}` comments so they're easy to find
