# CLAUDE.md

Development guidance for Claude Code when working with this Next.js personal site repository.

## Development Commands

### Core Workflow
- `npm run prod` - **PRIMARY DEVELOPMENT WORKFLOW**: Build and start production server
- `npm run build` - Build the application for production  
- `npm start` - Start production server (requires existing build)
- `npm run rebuild` - Clean cache, build, and start production server

### Development Tools
- `npm run type-check` - Run TypeScript type checking without emitting files
- `npm run lint` - Run ESLint checks (modern ESLint CLI)
- `npm run clean` - Clear Next.js build cache (.next directory)
- `npm run build-analyze` - Build with bundle analysis for performance optimization

### ⚠️ Tailwind CSS v4 Compatibility
**IMPORTANT**: Tailwind CSS v4 has compatibility issues with Next.js development mode.

**✅ REQUIRED WORKFLOW**:
```bash
npm run prod          # Primary development workflow
npm run rebuild       # For clean rebuilds
```

**🚫 AVOID**:
```bash
npm run dev          # Causes blank pages with Tailwind v4
```

**Why**: Development mode fails to process `@import "tailwindcss"` directive properly, resulting in blank pages. Production builds work perfectly with full Tailwind CSS v4 processing.

## Project Architecture

### Core Structure

- **pages/**: Pages Router with file-based routing (TypeScript)
  - `index.tsx`: Homepage with hero section and social links
  - `projects.tsx`: Technical projects showcase landing page
  - `projects/[projectName]/index.tsx`: Dynamic project detail pages
  - `projects/[projectName]/demo/index.tsx`: Live project demo pages
  - `about.tsx`: About page with professional PM journey storytelling
  - `posts/[id].tsx`: Dynamic routes for blog posts with MDX rendering
  - `api/`: API routes

- **components/**: React components with TypeScript
  - `layout.tsx`: Main layout with navigation system and conditional profile display

- **lib/**: Utility functions and data fetching (TypeScript)
  - `projects.ts`: Project content management and TypeScript interfaces

- **styles/**: CSS architecture with Tailwind CSS v4
  - `global.css`: Tailwind import + custom component classes in `@layer components`

### CSS Architecture

**Tailwind CSS v4 + Custom Components**:

1. **Base Tailwind**: `@import "tailwindcss"` provides utility classes
2. **Custom Components**: `@layer components` section contains site-specific styling
3. **Zero Configuration**: Tailwind CSS v4 requires no config files

**Key Custom Components**:
```css
.site-container        /* Main layout (36rem max-width) */
.site-heading-2xl      /* Large headings (2.5rem, weight 800) */
.site-nav             /* Navigation with centered alignment */
.site-nav-link        /* Navigation links with black text (#1a1a1a !important) */
.site-nav-link:hover  /* Hover with underline effects */
.site-nav-link--active /* Active state with persistent underline */
.site-project-grid    /* GitHub projects grid layout */
```

**Navigation Styling (Updated)**:
```css
.site-nav-link {
  color: #1a1a1a !important;  /* Black text to override global anchor styles */
  text-decoration: none;
  transition: text-decoration 0.2s ease;
}

.site-nav-link:hover,
.site-nav-link--active {
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}
```

## Key Features

### Technical Projects Showcase
- **Structure**: Dynamic routing with `pages/projects/[projectName]/`
- **Content Management**: MDX-based project descriptions in `projects/` directory
- **Demo Integration**: Live project demos at `/projects/project-name/demo/`
- **Metadata**: Frontmatter with tech stack, status, demo URLs, and GitHub links

#### Project Content Structure
```
projects/
├── project-name.mdx              # Project description with frontmatter
└── another-project.mdx           # Additional projects

# Example frontmatter:
---
title: "Project Name"
description: "Brief description"
techStack: ["React", "TypeScript", "etc"]
demoUrl: "https://demo-url.com"          # Optional
githubUrl: "https://github.com/user/repo" # Optional
status: "live" | "in-development" | "archived"
featured: true | false
createdDate: "2024-01-01"
---
```

#### URL Structure
- **Project Details**: `/projects/project-name/` - Full project description
- **Live Demos**: `/projects/project-name/demo/` - Embedded or linked demos
- **Fallback Handling**: Graceful display when no demo URL provided

### Pokemon Team Creator Subdomain
- **Live Demo**: `https://pokemon.kavenkim.com`
- **Showcase Page**: `https://kavenkim.com/projects/pokemon-team-creator`
- **Repository**: `github.com/chilloutkav/pokemon-team-creator`
- **Deployment**: Separate Netlify site with auto-deploy from main branch
- **DNS**: Managed by Netlify DNS (automatic subdomain configuration)
- **Analytics**: GTM container `GTM-5CXC3C8` with cross-domain tracking
- **SSL/HTTPS**: Auto-provisioned via Netlify/Let's Encrypt

**Architecture Pattern**:
```
Main Site (kavenkim.com)
  ├── Project Showcase Page (/projects/pokemon-team-creator)
  ├── Demo Gateway (/projects/pokemon-team-creator/demo)
  └── External Link → pokemon.kavenkim.com (separate deployment)
      └── GTM tracking with _ga parameter for session continuity
```

**Reusable for Future Projects**:
1. Deploy project to Netlify
2. Configure custom domain: `project-name.kavenkim.com`
3. Add GTM code with container `GTM-5CXC3C8`
4. Update GTM cross-domain variable to include new domain
5. Create MDX file in `projects/` directory
6. Auto-appears in projects showcase

### Navigation System
- **Implementation**: `components/layout.tsx` with Next.js router
- **Active States**: Automatic current page detection
- **Styling**: Black text with underline hover/active effects
- **Responsive**: Mobile and desktop optimized

### About Page
- **Content**: Professional PM journey from growth marketing
- **Structure**: Multiple sections with consistent `.site-heading-md` styling
- **SEO**: Optimized with proper meta descriptions

## Environment Configuration

### Required Variables
Create `.env.local`:
```bash
# Google Tag Manager Configuration
# Replace GTM-XXXXXXX with your actual GTM Container ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Google Tag Manager Setup
- **Container ID**: `GTM-5CXC3C8` (configured in Netlify)
- **Implementation**: Conditional loading in `_document.tsx`
- **Environment**: Set `NEXT_PUBLIC_GTM_ID=GTM-5CXC3C8` in Netlify dashboard
- **Status**: ✅ Active in production via Netlify environment variables

### Cross-Domain Tracking Configuration
- **Domains Tracked**: `kavenkim.com`, `pokemon.kavenkim.com`
- **GTM Variable**: `Cross Domain Linker Config` (Custom JavaScript)
- **Google Tag Configuration**: `linker` parameter with domains array
- **Manual Link Decoration**: JavaScript in `/projects/[projectName]/demo/index.tsx` for `target="_blank"` links
- **Status**: ✅ Active with session continuity across domains

**How It Works**:
1. GTM automatically decorates same-window links with `_ga` parameter
2. For `target="_blank"` links, JavaScript manually appends `_ga` cookie value
3. Pokemon subdomain receives parameter and maintains session continuity
4. GA4 tracks complete user journey from main site → project demo

### Netlify Deployment Configuration

Configure these in Netlify dashboard (Site settings → Environment variables):

- **BUILD_IMAGE**: `ubuntu-24.04-noble` (Required by January 1, 2026)
- **AWS_LAMBDA_JS_RUNTIME**: `nodejs22.x` (Aligns with build Node.js 22)
- **NEXT_PUBLIC_GTM_ID**: `GTM-5CXC3C8` (Already configured)

Note: These cannot be set in `netlify.toml` and must be configured via Netlify UI.

## Development Workflow

### Daily Development
1. **Start**: `npm run prod` (REQUIRED for Tailwind CSS v4)
2. **Type Check**: `npm run type-check` for validation
3. **Build Test**: `npm run build` for production readiness
4. **Clean Start**: `npm run rebuild` when troubleshooting

### Code Quality
- **TypeScript**: Strict configuration with comprehensive interfaces
- **ESLint**: Modern ESLint CLI with Next.js rules
- **No Comments**: Follow existing pattern of clean code without comments

### CSS Development
1. **Simple Styling**: Use Tailwind utilities directly
2. **Complex Styling**: Add to `@layer components` in `global.css`
3. **Navigation**: Use `!important` to override global anchor styles
4. **Responsive**: Mobile-first with Tailwind responsive utilities

## Troubleshooting

### Common Issues
- **Blank Pages**: Always use `npm run prod`, never `npm run dev`
- **CSS Not Loading**: Run `npm run rebuild` to clear cache
- **Port Issues**: `lsof -i :3000` to check running processes
- **Type Errors**: Run `npm run type-check` to identify issues

### Server Management
```bash
# Kill existing processes
pkill -f "next dev" && lsof -t -i:3000 | xargs kill -9

# Fresh start
npm run rebuild
```

## Current Status ✅

### Completed Features
- **Technical Projects Showcase**: Dynamic routing system for project portfolios
- **Pokemon Team Creator**: Live at `pokemon.kavenkim.com` with full analytics integration
- **Cross-Domain Tracking**: Unified analytics across main site and project subdomains
- **Project Demo Integration**: Live demo pages with manual `_ga` parameter decoration
- **MDX Content Management**: Rich project descriptions with frontmatter metadata
- **Subdomain Architecture**: Reusable pattern for deploying future projects
- **Navigation System**: Black text navigation with underline hover/active states
- **About Page**: Compelling PM journey storytelling without H2 sections
- **CSS Architecture**: Optimized Tailwind CSS v4 with custom components
- **Analytics Integration**: Google Tag Manager (GTM-5CXC3C8) with cross-domain tracking
- **TypeScript**: Full type safety throughout
- **Production Ready**: Clean builds, optimal performance

### Live Deployments
- **Main Site**: `https://kavenkim.com` - Personal site with project showcase
- **Pokemon Demo**: `https://pokemon.kavenkim.com` - Live project demo with GTM
- **Cross-Domain**: Session continuity via `_ga` parameter decoration

### Development Environment
- **Server**: Ready at http://localhost:3000
- **Build Status**: All TypeScript and ESLint checks passing
- **CSS**: Navigation styling properly restored with black text
- **Architecture**: Clean, maintainable codebase

## Session Quick Start

For future Claude Code sessions:

```bash
# Start development immediately
npm run prod

# All features working:
# - Homepage with hero and social links
# - Technical projects showcase with dynamic routing
# - Pokemon Team Creator live demo at pokemon.kavenkim.com
# - Cross-domain analytics tracking
# - Project detail pages and live demos
# - About page with professional story
# - Navigation with black text and underline effects
```

**Architecture Status**: Production-ready with Pokemon Team Creator deployed and cross-domain tracking active.
**Current Branch**: `main` - Pokemon subdomain integration complete.
**Next Priority**: Add more projects to showcase using established subdomain pattern.

## Technical Projects Implementation

For detailed implementation progress and next steps, see:
- **`TECHNICAL-PROJECTS-PROGRESS.md`** - Complete roadmap, current status, and deployment patterns

### Adding New Projects

Follow the Pokemon Team Creator pattern:
1. **Deploy**: Push project to Netlify from GitHub repo
2. **Subdomain**: Configure `project-name.kavenkim.com` in Netlify dashboard
3. **GTM**: Add GTM script to project HTML with container `GTM-5CXC3C8`
4. **Cross-Domain**: Update GTM variable to include new domain in array
5. **Showcase**: Create `projects/project-name.mdx` with frontmatter
6. **Auto-Deploy**: Netlify rebuilds main site, project appears in showcase

---

*Updated: December 2025 - Pokemon Team Creator subdomain and cross-domain tracking implemented*