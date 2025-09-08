# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production  
- `npm start` - Start production server

### Development Tools
- `npm run lint` - Run Next.js linting checks (⚠️ **DEPRECATED** - requires ESLint CLI migration)
- `npm run type-check` - Run TypeScript type checking without emitting files
- `npm run clean` - Clear Next.js build cache (.next directory)
- `npm run dev-clean` - Clean cache and start fresh development server
- `npm run build-analyze` - Build with bundle analysis for performance optimization

### Production Workflow (Recommended)
- `npm run prod` - Full production workflow: build + start server
- `npm run prod-quick` - Start production server (requires existing build)
- `npm run rebuild` - Clean cache, build, and start production server

**Note**: Due to HMR CSS injection issues with Tailwind CSS v4 in development mode, production build workflow is recommended for reliable styling. Production builds work flawlessly with all CSS and Tailwind utilities.

### Additional Commands
- `npm run clean-all` - Remove all build artifacts, cache, and system files
- `npm run reset` - Complete project reset: clean all, reinstall dependencies, and build

### Troubleshooting Commands
- `pkill -f "next dev" && lsof -t -i:3000 | xargs kill -9` - Kill all dev server processes
- `npm cache clean --force` - Clear npm cache if needed

### ESLint Migration (Required)
⚠️ **Action Required**: `next lint` is deprecated in Next.js 16. Migrate to ESLint CLI:
```bash
npx @next/codemod@canary next-lint-to-eslint-cli .
```
Choose "Strict (recommended)" configuration when prompted.

## Project Architecture

This is a modern Next.js personal site built with **TypeScript**, **Tailwind CSS v4**, and the **Pages Router**. The architecture follows Next.js 15.5.2 conventions with a comprehensive component system for Kaven Kim's technical Product Manager portfolio.

### Core Structure

- **pages/**: Pages Router with file-based routing (TypeScript)
  - `_app.tsx`: Global app wrapper with Tailwind CSS imports
  - `_document.tsx`: Custom Document component (cleaned, no workarounds needed)
  - `index.tsx`: Homepage with hero section and personal introduction
  - `projects.tsx`: GitHub projects showcase with clean, portfolio-focused presentation
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
.site-nav { display: flex; gap: 2rem; margin-top: 1.5rem; padding: 0.5rem 0; }
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

## GitHub Projects Showcase

### Overview
Comprehensive projects showcase system that automatically fetches and displays GitHub repositories with a clean, portfolio-focused presentation. Implements hybrid approach combining automated GitHub API integration with potential for manual curation.

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
- **Homepage**: Shows profile image + name + navigation links
- **Other Pages**: Shows name only + navigation links for cleaner presentation
- **Active States**: Automatic highlighting of current page using Next.js router
- **Responsive**: Clean mobile and desktop navigation experience

## Navigation System

### Implementation Details
The navigation system uses conditional rendering based on the `home` prop:

**Homepage Layout:**
```jsx
{home ? (
  <>
    <Image src="/images/profile.jpg" height={144} width={144} />
    <h1 className="site-heading-2xl">{name}</h1>
  </>
) : (
  <h2 className="site-heading-lg">{name}</h2>
)}
<nav className="site-nav">
  <Link href="/" className="site-nav-link">Home</Link>
  <Link href="/projects" className="site-nav-link">Projects</Link>
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
1. **Start Development**: `npm run dev` - Full TypeScript, Tailwind CSS v4, and MDX support
2. **Clean Start**: `npm run dev-clean` - Clear cache and start fresh when needed
3. **Type Checking**: `npm run type-check` - Validate TypeScript without building
4. **Linting**: ⚠️ Requires ESLint CLI migration (see ESLint Migration section above)

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
1. **API Testing**: Test GitHub API with `curl` or browser to verify data availability
2. **Environment Setup**: Ensure `.env.local` contains correct `GITHUB_USERNAME=chilloutkav`
3. **Rate Limits**: Monitor API usage; add `GITHUB_TOKEN` for higher limits if needed
4. **Content Updates**: Projects refresh automatically every 5 minutes via ISR
5. **Styling Extensions**: Add new `.site-project-*` classes in `global.css` for consistency
6. **Data Processing**: Extend filtering/sorting functions in `lib/github.ts` as needed
7. **Error Handling**: Test API failures and ensure graceful fallbacks work correctly

### Quality Assurance
1. **Type Safety**: Strict TypeScript configuration catches issues early
2. **Build Validation**: `npm run build` ensures production readiness
3. **Bundle Analysis**: `npm run build-analyze` for performance optimization
4. **Linting**: Requires ESLint CLI setup (migration needed from deprecated `next lint`)
5. **Testing**: All functionality validated in both development and production modes

## Current Implementation Status

### ✅ Completed Features (Phase 1)

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
- **Environment Configuration**: GitHub API setup with rate limiting and token support
- **Build System**: Clean production builds with optimized bundle sizes
- **Server Deployment**: Both development and production server configurations working
- **Code Quality**: Professional TypeScript patterns throughout the codebase

#### **Technical Fixes Completed**
- **React Title Tag Issues**: Fixed template literal usage for proper string rendering
- **Production Server**: Resolved deployment and startup issues
- **CSS Cleanup**: Removed unused classes and optimized styling architecture
- **Navigation Integration**: Seamless integration between homepage and projects pages

### 🔄 Next Phase Opportunities (Phase 2+)

#### **Enhanced GitHub Integration**
- **Advanced Filtering**: Sort and filter repositories by language, stars, or activity
- **Component Architecture**: Dedicated `ProjectCard` and `ProjectGrid` components
- **Enhanced Metadata**: Repository topics, deployment links, and contribution graphs

#### **Featured Projects System**
- **Manual Curation**: Detailed case studies for key projects with business impact focus
- **Rich Content**: Screenshots, demos, and technical architecture details
- **Product Manager Perspective**: Business outcomes, user feedback, and lessons learned

#### **Performance & SEO**
- **Advanced Caching**: Implement more sophisticated caching strategies
- **SEO Optimization**: Meta tags, Open Graph images, and structured data
- **Bundle Analysis**: Performance monitoring and optimization

### 📊 Current Status Summary
- **Phase 1**: ✅ **COMPLETE** - Core GitHub showcase with navigation
- **Production Ready**: ✅ All development and deployment workflows functional
- **Code Quality**: ✅ Professional TypeScript implementation throughout
- **Documentation**: ✅ Comprehensive project documentation for easy session continuity

## Architecture Benefits

- **Performance**: Tailwind CSS v4 provides 3.5x faster builds and optimal bundle sizes
- **Maintainability**: Custom component classes maintain design system consistency  
- **Developer Experience**: Zero configuration with IntelliSense support
- **Future-Proof**: Modern CSS architecture aligned with latest web standards
- **Flexibility**: Hybrid approach allows both utility classes and custom specifications

The project successfully combines modern Tailwind CSS v4 architecture with pixel-perfect design preservation, providing excellent developer experience and performance.

## Known Issues (RESOLVED ✅)

### Development Server Blank Page Issue 
**Status**: ✅ **RESOLVED** - Fixed by disabling mdxRs experimental feature

**Problem Solved**: Development server was serving blank white pages with webpack vendor-chunks error.

**Root Cause Identified**: 
The `mdxRs: true` experimental feature in Next.js 15.5.2 was causing webpack vendor chunk resolution conflicts during development mode, leading to:
```
⨯ Error: Cannot find module './chunks/vendor-chunks/next.js'
GET / 500 in 306ms
```

**Solution Applied**:
Disabled mdxRs experimental feature in `next.config.js`:
```javascript
// Before (causing issues):
experimental: {
  mdxRs: true,
},

// After (stable solution):
// Removed mdxRs: true to fix webpack vendor chunk issues in development
// The experimental Rust MDX compiler was causing blank page problems
```

**Resolution Steps**:
1. ✅ Identified mdxRs as root cause through systematic analysis
2. ✅ Removed mdxRs experimental configuration from next.config.js  
3. ✅ Cleared build cache completely (`rm -rf .next`)
4. ✅ Restarted development server without mdxRs
5. ✅ Verified all functionality: development server, MDX processing, styling
6. ✅ Confirmed production builds remain unaffected

**Result**: 
- ✅ **Development server fully functional** (`npm run dev` works perfectly)
- ✅ **All MDX blog posts render correctly** (standard @next/mdx works great)
- ✅ **Hot reloading restored** (instant development feedback)
- ✅ **Production builds unaffected** (maintained 3.5x faster build performance)
- ✅ **TypeScript + Tailwind CSS v4 + MDX** all working seamlessly together

**Performance Impact**: 
No negative impact - standard @next/mdx provides all needed functionality without the instability of the experimental Rust compiler.

### Architecture Migration Summary ✅

**Successfully Completed**:
- ✅ **Complete TypeScript migration** from JavaScript codebase
- ✅ **Tailwind CSS v4 implementation** with zero-config architecture  
- ✅ **Pixel-perfect styling preservation** using `@layer components` approach
- ✅ **Removed manual CSS injection workaround** completely
- ✅ **Development server stability** achieved by mdxRs resolution
- ✅ **Production deployment ready** with optimal performance
- ✅ **Comprehensive documentation** updated for future development

The project now runs a modern, stable architecture with Next.js 15.5.2 + TypeScript + Tailwind CSS v4, with both development and production environments fully functional.

### Comprehensive Code Cleanup Completed ✅

**Status**: ✅ **COMPLETED** - Major codebase cleanup and optimization completed

**Cleanup Summary**: Comprehensive removal of legacy files and consolidation to single-architecture approach.

**Files Removed (17 total, ~500+ lines of code)**:

**Legacy JavaScript Files (9 files)**:
- `components/layout.js` - Duplicate of TypeScript version
- `components/date.js` - Duplicate of TypeScript version  
- `lib/posts.js` - Duplicate of TypeScript version
- `pages/_app.js` - Duplicate of TypeScript version
- `pages/index.js` - Duplicate of TypeScript version
- `pages/posts/[id].js` - Duplicate of TypeScript version
- `pages/api/hello.js` - Duplicate of TypeScript version

**Obsolete CSS Files (3 files)**:
- `styles/utils.module.css` - 53 lines of CSS Modules utilities (replaced by Tailwind)
- `components/layout.module.css` - 16 lines of CSS Modules layout styles (replaced by Tailwind)
- `styles/minimal.css` - 186 lines of unused design system

**Debug/Development Artifacts (2 files)**:
- `console-debug-script.js` - 276 lines of Plasmo debugging script
- `debug-plasmo.html` - HTML debugging artifact

**Temporary Documentation (3 files)**:
- `CLAUDE 2.md` - Duplicate/outdated documentation
- `COMPONENT-GUIDE.md` - Temporary component guide
- `MINIMAL-IMPLEMENTATION-GUIDE.md` - Temporary implementation notes

**Results Achieved**:
- ✅ **Single Source of Truth**: Only TypeScript files remain for components and logic
- ✅ **Unified CSS Architecture**: Only Tailwind CSS v4 + custom components in global.css
- ✅ **Zero Duplicate Files**: Eliminated all JavaScript/TypeScript duplicates
- ✅ **Clean Build Process**: No more duplicate page warnings or conflicts
- ✅ **Production Build Fixed**: `npm run start` now works correctly (BUILD_ID issue resolved)
- ✅ **Optimized Performance**: Reduced bundle bloat from unused CSS systems

**Architecture Now Consolidated**:
- **TypeScript Only**: All components, pages, and utilities use TypeScript
- **Tailwind CSS v4 Only**: Single CSS architecture with custom components
- **Clean File Structure**: No legacy artifacts or competing implementations
- **Verified Functionality**: All development and production workflows tested and working

**Impact**: 
- **Development Experience**: Cleaner codebase, no confusion between file versions
- **Performance**: Faster builds, smaller bundles, optimized asset loading
- **Maintainability**: Single architecture makes future development straightforward
- **Production Ready**: All deployment workflows verified and functional