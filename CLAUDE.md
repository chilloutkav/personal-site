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
  - `index.tsx`: Homepage with hero section and GitHub projects showcase
  - `projects.tsx`: GitHub projects showcase with clean presentation
  - `about.tsx`: About page with professional PM journey storytelling
  - `posts/[id].tsx`: Dynamic routes for blog posts with MDX rendering
  - `api/`: API routes

- **components/**: React components with TypeScript
  - `layout.tsx`: Main layout with navigation system and conditional profile display

- **lib/**: Utility functions and data fetching (TypeScript)
  - `github.ts`: GitHub API utilities and TypeScript interfaces
  - `posts.ts`: Blog management functions

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

### GitHub Projects Showcase
- **File**: `pages/projects.tsx` with `lib/github.ts`
- **API Integration**: GitHub API with comprehensive error handling
- **ISR**: 5-minute revalidation for optimal performance
- **Environment**: `GITHUB_USERNAME` required, `GITHUB_TOKEN` optional

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
# Required for GitHub projects showcase
GITHUB_USERNAME=chilloutkav

# Optional: Higher API rate limits (5000/hour vs 60/hour)
GITHUB_TOKEN=your_token_here

# Google Tag Manager Configuration
# Replace GTM-XXXXXXX with your actual GTM Container ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### GitHub Personal Access Token
- **Setup**: https://github.com/settings/tokens
- **Scope**: `public_repo` for accessing public repositories
- **Benefits**: Higher rate limits and more reliable access

### Google Tag Manager Setup
- **Container ID**: `GTM-5CXC3C8` (configured in Netlify)
- **Implementation**: Conditional loading in `_document.tsx`
- **Environment**: Set `NEXT_PUBLIC_GTM_ID=GTM-5CXC3C8` in Netlify dashboard
- **Status**: ✅ Active in production via Netlify environment variables

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
- **GitHub Integration**: Dynamic repository showcase with professional presentation
- **Navigation System**: Black text navigation with underline hover/active states
- **About Page**: Compelling PM journey storytelling without H2 sections
- **CSS Architecture**: Optimized Tailwind CSS v4 with custom components
- **Analytics Integration**: Google Tag Manager (GTM-5CXC3C8) with conditional loading
- **TypeScript**: Full type safety throughout
- **Production Ready**: Clean builds, optimal performance

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
# - Homepage with hero and GitHub projects
# - Projects page with repository showcase  
# - About page with professional story
# - Navigation with black text and underline effects
```

**Architecture Status**: Clean, production-ready with zero technical debt.
**Next Priority**: Content enhancement for stronger PM portfolio positioning.

---

*Updated: September 2025 - All major issues resolved, codebase in excellent condition*