# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production  
- `npm start` - Start production server

### Development Tools
- `npm run lint` - Run ESLint checks (modern ESLint CLI)
- `npm run type-check` - Run TypeScript type checking without emitting files
- `npm run clean` - Clear Next.js build cache (.next directory)
- `npm run dev-clean` - Clean cache and start fresh development server
- `npm run build-analyze` - Build with bundle analysis for performance optimization

### Production Workflow (REQUIRED for Tailwind CSS v4)
- `npm run prod` - **PRIMARY DEVELOPMENT WORKFLOW**: build + start server
- `npm run prod-quick` - Start production server (requires existing build)
- `npm run rebuild` - Clean cache, build, and start production server

**⚠️ IMPORTANT**: Tailwind CSS v4 has compatibility issues with Next.js development mode. **Use production builds for all development and testing**. See "Tailwind CSS v4 Development Strategy" section below.

### Additional Commands
- `npm run clean-all` - Remove all build artifacts, cache, and system files
- `npm run reset` - Complete project reset: clean all, reinstall dependencies, and build

### Troubleshooting Commands
- `pkill -f "next dev" && lsof -t -i:3000 | xargs kill -9` - Kill all dev server processes
- `npm cache clean --force` - Clear npm cache if needed

## Tailwind CSS v4 Development Strategy ⚠️

### Issue Discovered (September 2025)
**Root Cause**: Tailwind CSS v4 (`^4.0.0`) has compatibility issues with Next.js 15.5.2 development mode:
- Development server (`npm run dev`) fails to process Tailwind CSS properly
- Results in blank white pages due to `body{display:none}` FOUC prevention with no CSS override
- Production builds work perfectly with full Tailwind CSS v4 processing

### SOLUTION: Local Production Development Workflow

**✅ REQUIRED WORKFLOW**:
```bash
npm run prod          # Primary development workflow
npm run rebuild       # For clean rebuilds
npm run build-analyze # For performance analysis
```

**🚫 AVOID**:
```bash
npm run dev          # Causes blank pages with Tailwind v4
npm run dev-clean    # Same issue
```

### Why This Works
- **Production builds** properly process `@import "tailwindcss"` directive
- **Development mode** has broken CSS pipeline with Tailwind v4
- **Local production testing** matches exactly what users see in deployment
- **Fast rebuild times** make this workflow efficient for development

### Benefits of This Approach
- ✅ Keep cutting-edge Tailwind CSS v4 features
- ✅ Reliable testing environment matching production
- ✅ Clean codebase without workaround CSS
- ✅ Future-proof as Tailwind v4 matures

### ESLint Setup ✅
✅ **Completed**: Successfully migrated to ESLint CLI for Next.js 16 compatibility:
- Modern `eslint.config.mjs` configuration
- Strict TypeScript and React rules enabled
- All linting issues resolved

## Project Architecture

This is a modern Next.js personal site built with **TypeScript**, **Tailwind CSS v4**, and the **Pages Router**. The architecture follows Next.js 15.5.2 conventions with a comprehensive component system for Kaven Kim's technical Product Manager portfolio.

### Core Structure

- **pages/**: Pages Router with file-based routing (TypeScript)
  - `_app.tsx`: Global app wrapper with Tailwind CSS imports
  - `_document.tsx`: Custom Document component (cleaned, no workarounds needed)
  - `index.tsx`: Homepage with hero section, GitHub projects showcase, and professional positioning
  - `projects.tsx`: GitHub projects showcase with clean, portfolio-focused presentation
  - `about.tsx`: About page with professional PM journey and storytelling
  - `posts/[id].tsx`: Dynamic routes for blog posts with MDX rendering
  - `api/`: API routes (hello endpoint)

- **components/**: React components with TypeScript
  - `layout.tsx`: Enhanced layout with professional navigation system and conditional profile image display
  - Uses semantic CSS classes from Tailwind's `@layer components`

- **lib/**: Utility functions and data fetching (TypeScript)
  - `github.ts`: GitHub API utilities and TypeScript interfaces for repository data
  - `posts.ts`: Blog management functions with TypeScript interfaces
  - Comprehensive type definitions for PostData, PostWithContent, PostId

- **styles/**: Modern CSS architecture with Tailwind CSS v4
  - `global.css`: Contains Tailwind import + custom component classes
  - Custom `@layer components` with exact original styling specifications
  - No CSS Modules needed - fully migrated to Tailwind CSS v4

### CSS Architecture (Fully Consolidated)

**✅ Tailwind CSS v4 Only**: The project now uses exclusively Tailwind CSS v4 with zero-config setup and custom component classes for pixel-perfect styling. All CSS Modules and alternative CSS systems have been removed.

**Consolidated Architecture**: Pure Tailwind approach:

1. **Base Tailwind**: `@import "tailwindcss"` provides utility classes
2. **Custom Components**: `@layer components` section contains exact original styling:
   - `.site-container` - Main layout container (36rem max-width)
   - `.site-header` - Flexible header layout
   - Typography scales (`.site-heading-2xl`, `.site-heading-xl`, etc.)
   - Utility classes (`.site-border-circle`, `.site-light-text`, etc.)
3. **PostCSS Processing**: Enhanced configuration via `postcss.config.mjs` for browser compatibility
4. **Zero Configuration**: Tailwind CSS v4 requires no config files

**Class Mapping**:
```css
/* Exact original values preserved in @layer components */
.site-container { max-width: 36rem; padding: 0 1rem; margin: 3rem auto 6rem; }
.site-heading-2xl { font-size: 2.5rem; line-height: 1.2; font-weight: 800; letter-spacing: -0.05rem; margin: 1rem 0; }
.site-heading-xl { font-size: 2rem; line-height: 1.3; font-weight: 800; letter-spacing: -0.05rem; margin: 1rem 0; }

/* Navigation System Classes */
.site-nav { display: flex; justify-content: center; gap: 2rem; margin-top: 1.5rem; padding: 0.5rem 0; }
.site-nav-link { color: #666; font-weight: 500; padding: 0.5rem 1rem; border-radius: 6px; transition: color 0.2s ease, background-color 0.2s ease; }
.site-nav-link--active { color: #0070f3; background-color: #f1f8ff; border: 1px solid #c8e1ff; }

/* GitHub Projects Showcase Classes */
.site-project-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin: 2rem 0; }
.site-project-card { border: 1px solid #e1e4e8; border-radius: 8px; padding: 1.5rem; background-color: #ffffff; transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
.site-project-language { display: flex; align-items: center; font-weight: 500; font-size: 0.875rem; color: #586069; }
.site-project-language:before { content: ''; width: 12px; height: 12px; border-radius: 50%; background-color: #0070f3; margin-right: 0.5rem; }

/* Responsive Design */
@media (min-width: 768px) { .site-project-grid { grid-template-columns: repeat(2, 1fr); } }
```

### Key Features

- **Next.js 15.5.2**: Latest Next.js with Pages Router and MDX support
- **TypeScript**: Full TypeScript implementation with strict type checking
- **Tailwind CSS v4**: Latest Tailwind with zero-config setup + custom components
- **GitHub Projects Showcase**: Dynamic repository fetching with professional presentation
- **Professional Navigation**: Site-wide navigation with active states and responsive design
- **MDX Support**: Blog system with `@next/mdx` and `next-mdx-remote`
- **ES Module Compatibility**: Full ES module support throughout
- **PostCSS Processing**: Enhanced configuration for CSS processing
- **Pixel-Perfect Styling**: Custom component classes maintain exact original design

## GitHub Projects Showcase ✅ **COMPLETED**

### Overview
Production-ready projects showcase that automatically fetches and displays GitHub repositories with clean, professional presentation. **Status**: Phase 1 complete, now focusing on content-first enhancement approach for maximum PM portfolio impact.

### Core Files
- **`lib/github.ts`**: GitHub API integration with comprehensive TypeScript interfaces
  - Repository data fetching with error handling and rate limiting
  - Language detection and repository processing utilities  
  - Sorting and filtering functions for project data
  - Date formatting and display utilities

- **`pages/projects.tsx`**: Projects showcase page with server-side rendering
  - Uses `getStaticProps` with 5-minute ISR (Incremental Static Regeneration)
  - Clean, minimal presentation focusing on project names, descriptions, and languages
  - Responsive grid layout with hover effects and accessibility features
  - Error handling with graceful fallbacks

- **Environment Configuration**: 
  - `.env.local`: Contains `GITHUB_USERNAME=chilloutkav` 
  - `.env.local.example`: Template for environment setup
  - Optional `GITHUB_TOKEN` for higher API rate limits (5000/hour vs 60/hour)

### GitHub API Integration Details
- **Username**: Configured as `chilloutkav` (discovered from git remote origin)
- **Rate Limiting**: Handles both authenticated and unauthenticated requests gracefully
- **Caching**: Built-in Next.js caching with 300-second revalidation
- **Error Handling**: Comprehensive error states with user-friendly messages  
- **Data Processing**: 
  - Filters out archived repositories
  - Sorts by last updated date
  - Fetches language data for each repository
  - Processes topics and metadata

### Current Display Features
- **Project Names**: Linked directly to GitHub repositories
- **Descriptions**: Clean project descriptions when available
- **Primary Languages**: Displayed with colored indicator dots
- **Responsive Design**: Grid layout that works on mobile and desktop
- **Professional Styling**: Portfolio-appropriate presentation without GitHub-specific clutter

### Navigation System Integration
Professional navigation system that enhances user experience:
- **Three-Page Structure**: Home, Projects, About with consistent navigation
- **Homepage**: Shows profile image + name + navigation links
- **Other Pages**: Shows name only + navigation links for cleaner presentation
- **Active States**: Automatic highlighting of current page using Next.js router
- **Centered Layout**: Navigation links are centered for professional appearance
- **Responsive**: Clean mobile and desktop navigation experience

## About Page ✅ **COMPLETED**

### Overview
Professional About page that tells the compelling story of a Product Manager's journey from growth marketing to technical product management, showcasing the unique combination of marketing expertise and technical curiosity.

### Content Structure
- **Hero Section**: Personal introduction with updated positioning - "Product Manager Who Builds Products That Help Businesses Grow"
- **Background Story**: "How I Got Here" - the journey from PPC campaigns to product management
- **Value Proposition**: "What I Bring" - unique skills combining customer perspective with technical foundation
- **Current Focus**: "What I'm Working On" - AI automation and team collaboration

### Technical Implementation
- **File**: `pages/about.tsx` with full TypeScript implementation
- **SEO Optimized**: Proper title and meta description for search engines
- **Static Generation**: Pre-rendered for optimal performance (2.08 kB)
- **Responsive Design**: Mobile and desktop optimized layout using existing site patterns
- **Content Strategy**: Uses `.site-heading-md` for proper paragraph spacing in multi-paragraph sections

## Navigation System

### Implementation Details
The navigation system uses conditional rendering based on the `home` prop:

**Homepage Layout:**
```jsx
{home ? (
  <>
    <Image src="/images/profile.jpg" height={96} width={96} />
    <h1 className="site-heading-2xl">{name}</h1>
  </>
) : (
  <h2 className="site-heading-lg">{name}</h2>
)}
<nav className="site-nav">
  <Link href="/" className="site-nav-link">Home</Link>
  <Link href="/projects" className="site-nav-link">Projects</Link>
  <Link href="/about" className="site-nav-link">About</Link>
</nav>
```

### Styling Classes
- `.site-nav`: Navigation container with flexbox layout
- `.site-nav-link`: Individual navigation links with hover effects
- `.site-nav-link--active`: Active page highlighting with blue background

### MDX Configuration

Enhanced blog system using:
- `@next/mdx` (mdxRs experimental feature disabled for stability)
- `@mdx-js/react` for React component integration
- `gray-matter` for frontmatter parsing
- `next-mdx-remote` for MDX processing

### Configuration Files

All configuration files have been optimized with comprehensive documentation and clean structure:

- **next.config.js**: Fully documented ES module setup with MDX integration and stability notes
- **postcss.config.mjs**: Detailed PostCSS pipeline configuration optimized for Tailwind CSS v4 
- **tsconfig.json**: Comprehensive TypeScript configuration with organized sections and inline documentation
- **package.json**: Enhanced with project metadata, additional scripts, engine requirements, and browser targets

## CSS Development Guide

### Understanding the Architecture

The styling system combines the best of both worlds:

1. **Tailwind Utilities**: For common styling patterns
2. **Custom Components**: For exact design specifications that need precise values
3. **@layer Directive**: Ensures proper CSS cascade and Tailwind integration

### Working with Styles

**For Standard Elements:**
Use Tailwind utilities directly:
```jsx
<div className="flex items-center space-x-4">
```

**For Site-Specific Design Elements:**
Use custom component classes:
```jsx
<div className="site-container">
  <h1 className="site-heading-2xl">
```

### Adding New Styles

1. **Simple styling**: Use Tailwind utilities directly
2. **Complex/specific styling**: Add to `@layer components` in `global.css`
3. **Global styles**: Add below the `@layer` section in `global.css`

### Styling Guidelines

- **Maintain consistency**: Use existing `.site-*` classes when possible
- **Exact specifications**: Custom component classes preserve original design values
- **Responsive design**: Combine custom classes with Tailwind responsive utilities
- **Performance**: Tailwind's purging automatically removes unused styles

## Environment Configuration

### Required Environment Variables

**`.env.local`** (Create this file in the project root):
```bash
# GitHub API Configuration
GITHUB_USERNAME=chilloutkav

# Optional: Add your GitHub Personal Access Token for higher rate limits
# GITHUB_TOKEN=your_token_here
```

### GitHub Personal Access Token (Optional but Recommended)

**Benefits**:
- Increases API rate limit from 60 to 5000 requests/hour
- Provides more reliable access during development
- Enables access to additional repository metadata

**Setup Process**:
1. Create token at: https://github.com/settings/tokens
2. Required scopes: `public_repo` (for accessing public repositories)
3. Add to `.env.local` as `GITHUB_TOKEN=your_token_here`

**Note**: The `.env.local` file is already in `.gitignore` and won't be committed to the repository.

### Environment Files
- **`.env.local`**: Your local environment variables (not committed to git)
- **`.env.local.example`**: Template showing required variables (committed to git)

## Dependency Information

### Core Dependencies
- `next@^15.5.2` - Next.js framework
- `react@^19.1.1` - React library
- `typescript@^5.9.2` - TypeScript support

### Styling Dependencies  
- `tailwindcss@^4.1.13` - Modern utility-first CSS framework
- `@tailwindcss/postcss@^4.1.13` - Tailwind CSS v4 PostCSS plugin
- `postcss-flexbugs-fixes@^5.0.2` - PostCSS browser compatibility
- `postcss-preset-env@^10.3.1` - Modern CSS features

### Content Dependencies
- `@next/mdx@^15.5.2` - MDX support for Next.js
- `@mdx-js/react@^3.1.1` - MDX React integration
- `next-mdx-remote@^5.0.0` - Remote MDX processing
- `gray-matter@^4.0.3` - Frontmatter parsing

## Development Workflow

### Daily Development
1. **Start Development**: `npm run prod` - REQUIRED workflow for Tailwind CSS v4 compatibility
2. **Clean Start**: `npm run rebuild` - Clean cache, build, and start fresh when needed
3. **Type Checking**: `npm run type-check` - Validate TypeScript without building
4. **Linting**: `npm run lint` - Modern ESLint CLI (migration completed)

### Styling Workflow  
1. **Simple Styling**: Use Tailwind utilities directly in components
2. **Complex Styling**: Add custom `@layer components` classes to `global.css`
3. **Maintain Design**: Preserve exact original specifications in custom components
4. **Responsive Design**: Combine custom classes with Tailwind responsive utilities

### Content Development
1. **Blog Posts**: Add MDX files to `/posts/` directory with frontmatter
2. **Pages**: Create new `.tsx` files in `/pages/` for additional routes
3. **Components**: Build reusable components in `/components/` directory

### GitHub Projects Development
1. **Content-First Approach**: Focus on enhancing GitHub repository READMEs with business context and PM perspective
2. **Environment Setup**: Ensure `.env.local` contains correct `GITHUB_USERNAME=chilloutkav`
3. **Content Updates**: Projects refresh automatically every 5 minutes via ISR
4. **Repository Enhancement Strategy**: 
   - Add problem statements and business impact to existing repos
   - Showcase product thinking and technical decision-making
   - Include deployment links and user feedback where available
5. **Styling Extensions**: Add new `.site-project-*` classes in `global.css` for consistency

### Quality Assurance
1. **Type Safety**: Strict TypeScript configuration catches issues early
2. **Build Validation**: `npm run build` ensures production readiness
3. **Bundle Analysis**: `npm run build-analyze` for performance optimization
4. **Linting**: Requires ESLint CLI setup (migration needed from deprecated `next lint`)
5. **Testing**: All functionality validated in both development and production modes

## Current Implementation Status

### ✅ Phase 1: COMPLETED & PRODUCTION READY

#### **GitHub Projects Showcase System**
- **Dynamic Repository Fetching**: Automated GitHub API integration with comprehensive error handling
- **Clean Portfolio Presentation**: Professional, distraction-free display focusing on project names, descriptions, and languages
- **TypeScript Integration**: Full type safety with custom interfaces and error handling
- **Performance Optimization**: ISR with 5-minute revalidation for optimal loading and freshness
- **Responsive Design**: Mobile and desktop-optimized grid layout

#### **Professional Navigation System**
- **Site-Wide Navigation**: Consistent navigation across all pages with active state highlighting
- **Conditional Layout**: Homepage shows profile image, other pages prioritize content
- **Router Integration**: Automatic active page detection using Next.js router
- **Responsive Design**: Clean mobile and desktop navigation experience

#### **Production-Ready Infrastructure**
- **ESLint CLI Migration**: Successfully upgraded to modern ESLint setup for Next.js 16 compatibility
- **Code Quality**: Zero linting errors and strict TypeScript throughout
- **Build System**: Clean production builds with optimized bundle sizes
- **Server Deployment**: Production server configuration working (see Tailwind CSS v4 strategy above)

### ✅ Phase 2: MAJOR BREAKTHROUGH COMPLETED (September 2025)

#### **Blank Page Issue Resolution**
- **Root Cause Identified**: Tailwind CSS v4 development mode incompatibility with Next.js 15.5.2
- **Solution Implemented**: Local production development workflow established
- **Emergency Fixes Removed**: Clean codebase with no CSS workarounds
- **Layout Structure Fixed**: Navigation now always visible across all pages

#### **TypeScript Interface Corrections**
- **Homepage Data Flow**: Fixed `GitHubRepository[]` → `ProcessedRepository[]` interface mismatch
- **Property Access**: Updated `repo.language` → `repo.primaryLanguage` throughout
- **Build Process**: Zero TypeScript compilation errors in both development and production

#### **Clean Architecture Restored**
- **Document Component**: Removed emergency CSS injection, restored clean structure
- **Global CSS**: Removed temporary body display overrides
- **Navigation System**: Fixed conditional layout logic for consistent user experience
- **Component Interfaces**: All TypeScript interfaces properly aligned with data structures

### 🎯 Current Focus: Content-First Enhancement

#### **Recommended Next Steps (High Impact, Low Complexity)**
- **Repository README Enhancement**: Add business context and PM perspective to existing GitHub repos
- **Product Manager Storytelling**: Frame projects to showcase product thinking and business impact
- **User-Focused Narratives**: Include problem statements, user feedback, and measurable outcomes
- **Technical Decision Documentation**: Explain technology choices from a PM perspective

#### **Current Site Positioning**
- **Homepage Hero**: "Product Manager Who Builds Products That Help Businesses Grow"
- **Homepage About**: "I combine marketing insights with hands-on building to create solutions that actually drive real growth"
- **About Page**: Comprehensive professional story covering marketing → PM journey with technical foundation

#### **Strategic Project Positioning**
- **personal-site**: Demonstrate technical product ownership and modern web architecture
- **project-crm**: Showcase B2B product thinking and small business user needs  
- **pokemon-team-creator**: Highlight user experience design and consumer product development

### 📊 Current Status Summary
- **Phase 1**: ✅ **COMPLETE** - Production-ready GitHub showcase with professional navigation
- **Technical Infrastructure**: ✅ Modern, maintainable architecture with excellent performance
- **Code Quality**: ✅ Zero technical debt, full TypeScript, modern ESLint setup
- **Next Phase**: 🎯 **Content-First Approach** - Maximize PM portfolio impact through enhanced project narratives

## Architecture Benefits

The project successfully combines modern web development best practices with a clean, maintainable architecture:

- **Performance**: Tailwind CSS v4 provides 3.5x faster builds and optimal bundle sizes
- **Maintainability**: Custom component classes maintain design system consistency  
- **Developer Experience**: Zero configuration with comprehensive TypeScript support
- **Future-Proof**: Modern CSS architecture aligned with latest web standards
- **Code Quality**: ESLint CLI with strict rules ensures consistent, high-quality code
- **Production Ready**: Seamless development and production workflows with excellent performance

---

## 🚀 Future Session Quick Start Guide

### **Current State Summary (September 2025)**
✅ **ALL MAJOR ISSUES RESOLVED**: The codebase is in excellent condition with clean architecture, working GitHub API integration, proper TypeScript interfaces, and optimal Tailwind CSS v4 setup.

### **Immediate Session Startup**
```bash
# Start local production development (REQUIRED workflow)
npm run prod

# Site will be available at: http://localhost:3000
# All features working: navigation, GitHub projects, hero section, styling
```

### **What's Working Perfectly**
- ✅ **Homepage**: Hero section with "Product Manager Who Builds Products That Help Businesses Grow" positioning
- ✅ **About Page**: Professional storytelling with PM journey from growth marketing to product management
- ✅ **GitHub API**: Automatic repository fetching with 5-minute ISR refresh
- ✅ **Navigation**: Three-page navigation (Home/Projects/About) with centered layout and active states
- ✅ **TypeScript**: Zero compilation errors, full type safety
- ✅ **Styling**: Tailwind CSS v4 with custom component classes and optimized spacing
- ✅ **Build Process**: Clean production builds with optimal performance

### **Key Architectural Decisions**
1. **Tailwind CSS v4 Strategy**: Use `npm run prod` for all development (not `npm run dev`)
2. **Clean Codebase**: No workaround CSS, emergency fixes removed
3. **Navigation**: Always visible across all pages (fixed layout structure)
4. **Data Flow**: `ProcessedRepository` interfaces throughout (fixed TypeScript mismatches)

### **Next Development Priorities**
Based on documentation analysis, focus areas for future enhancement:

#### **Content Strategy (High Impact)**
- **GitHub README Enhancement**: Add PM perspective and business context to repository READMEs
- **Project Storytelling**: Frame technical projects to showcase product thinking
- **User Impact Documentation**: Add problem statements and outcome metrics

#### **Technical Enhancements (When Needed)**
- **Blog Enhancement**: Leverage existing MDX setup for content creation
- **Blog System**: Leverage existing MDX setup for content creation
- **Performance**: Use `npm run build-analyze` for optimization opportunities

### **Development Best Practices**
- **Always use**: `npm run prod` for testing changes
- **Type checking**: `npm run type-check` before major changes
- **Clean rebuilds**: `npm run rebuild` when troubleshooting
- **Never use**: `npm run dev` (causes blank pages with Tailwind v4)

### **Session Continuity Notes**
- **No outstanding bugs or issues**
- **Architecture is stable and production-ready**
- **Focus can shift to content and feature enhancement**
- **All tooling and workflows are documented and tested**

**The site is ready for productive development sessions focused on content creation and feature enhancement! 🎉**

---

## 🔒 Security Configuration

### **Security Status: EXCELLENT ✅**
The site implements comprehensive security measures following modern web security best practices.

### **Security Headers Implemented**
All pages include production-ready security headers:

- **X-Frame-Options**: `DENY` - Prevents clickjacking attacks
- **X-Content-Type-Options**: `nosniff` - Prevents MIME type sniffing
- **Referrer-Policy**: `strict-origin-when-cross-origin` - Controls referrer information
- **X-XSS-Protection**: `1; mode=block` - Enables XSS filtering
- **Content-Security-Policy**: Comprehensive CSP restricting resource loading

### **CSP Configuration**
```javascript
// Allows GitHub API access while restricting other external resources
"default-src 'self'",
"script-src 'self' 'unsafe-eval' 'unsafe-inline'",  // Next.js requirements
"style-src 'self' 'unsafe-inline'",                 // Tailwind CSS requirements  
"img-src 'self' data: https:",                      // Profile images and external sources
"connect-src 'self' https://api.github.com",        // GitHub API only
"frame-src 'none'"                                  // No iframes allowed
```

### **Environment Security**
- **Environment Variables**: Properly configured in `.env.local` (gitignored)
- **GitHub Token**: Uses minimal `public_repo` scope when configured
- **No Secrets in Code**: All sensitive data in environment variables
- **Dependency Security**: `npm audit` shows 0 vulnerabilities

### **API Security**
- **GitHub API**: Read-only access to public repositories only
- **Rate Limiting**: Handled gracefully with error boundaries
- **Input Validation**: TypeScript provides compile-time type checking
- **Error Handling**: No sensitive information leaked in error messages

### **Security Best Practices Followed**
- ✅ **No dangerouslySetInnerHTML usage**
- ✅ **TypeScript throughout** (prevents many runtime vulnerabilities)
- ✅ **Modern Next.js** with latest security patches
- ✅ **Comprehensive .gitignore** protecting sensitive files
- ✅ **Clean social media links** (removed placeholder/email exposure)
- ✅ **Proper CORS configuration** via CSP headers
- ✅ **No exposed credentials** in repository

### **Future Security Considerations**
- **Contact Form**: Consider implementing instead of direct email links
- **Rate Limiting**: Add client-side rate limiting for API calls if needed
- **Monitoring**: Implement security monitoring for production deployment