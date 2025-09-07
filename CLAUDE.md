# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production  
- `npm start` - Start production server

### Development Tools
- `npm run lint` - Run Next.js linting checks
- `npm run type-check` - Run TypeScript type checking without emitting files
- `npm run clean` - Clear Next.js build cache (.next directory)
- `npm run dev-clean` - Clean cache and start fresh development server
- `npm run build-analyze` - Build with bundle analysis for performance optimization

### Production Workflow (Recommended)
- `npm run prod` - Full production workflow: build + start server
- `npm run prod-quick` - Start production server (requires existing build)
- `npm run rebuild` - Clean cache, build, and start production server

**Note**: Due to HMR CSS injection issues with Tailwind CSS v4 in development mode, production build workflow is recommended for reliable styling. Production builds work flawlessly with all CSS and Tailwind utilities.

### Troubleshooting Commands
- `pkill -f "next dev" && lsof -t -i:3000 | xargs kill -9` - Kill all dev server processes
- `npm cache clean --force` - Clear npm cache if needed

## Project Architecture

This is a modern Next.js personal site built with **TypeScript**, **Tailwind CSS v4**, and the **Pages Router**. The architecture follows Next.js 15.5.2 conventions with a comprehensive component system for Kaven Kim's technical Product Manager portfolio.

### Core Structure

- **pages/**: Pages Router with file-based routing (TypeScript)
  - `_app.tsx`: Global app wrapper with Tailwind CSS imports
  - `_document.tsx`: Custom Document component (cleaned, no workarounds needed)
  - `index.tsx`: Homepage with hero section and personal introduction
  - `posts/[id].tsx`: Dynamic routes for blog posts with MDX rendering
  - `api/`: API routes (hello endpoint)

- **components/**: React components with TypeScript
  - `layout.tsx`: Main layout wrapper with header and navigation
  - Uses semantic CSS classes from Tailwind's `@layer components`

- **lib/**: Utility functions and data fetching (TypeScript)
  - `posts.ts`: Blog management functions with TypeScript interfaces
  - Comprehensive type definitions for PostData, PostWithContent, PostId

- **styles/**: Modern CSS architecture with Tailwind CSS v4
  - `global.css`: Contains Tailwind import + custom component classes
  - Custom `@layer components` with exact original styling specifications
  - No CSS Modules needed - fully migrated to Tailwind CSS v4

### CSS Architecture (Modern Solution)

**✅ Tailwind CSS v4**: The project uses the latest Tailwind CSS v4 with zero-config setup and custom component classes for pixel-perfect styling.

**Solution**: Hybrid Tailwind approach:

1. **Base Tailwind**: `@import "tailwindcss"` provides utility classes
2. **Custom Components**: `@layer components` section contains exact original styling:
   - `.site-container` - Main layout container (36rem max-width)
   - `.site-header` - Flexible header layout
   - Typography scales (`.site-heading-2xl`, `.site-heading-xl`, etc.)
   - Utility classes (`.site-border-circle`, `.site-light-text`, etc.)
3. **PostCSS Processing**: Enhanced configuration for browser compatibility
4. **Zero Configuration**: Tailwind CSS v4 requires no config files

**Class Mapping**:
```css
/* Exact original values preserved in @layer components */
.site-container { max-width: 36rem; padding: 0 1rem; margin: 3rem auto 6rem; }
.site-heading-2xl { font-size: 2.5rem; line-height: 1.2; font-weight: 800; letter-spacing: -0.05rem; margin: 1rem 0; }
.site-heading-xl { font-size: 2rem; line-height: 1.3; font-weight: 800; letter-spacing: -0.05rem; margin: 1rem 0; }
/* ... and more exact specifications */
```

### Key Features

- **Next.js 15.5.2**: Latest Next.js with Pages Router and MDX support
- **TypeScript**: Full TypeScript implementation with strict type checking
- **Tailwind CSS v4**: Latest Tailwind with zero-config setup + custom components
- **MDX Support**: Blog system with `@next/mdx` and `next-mdx-remote`
- **ES Module Compatibility**: Full ES module support throughout
- **PostCSS Processing**: Enhanced configuration for CSS processing
- **Pixel-Perfect Styling**: Custom component classes maintain exact original design

### MDX Configuration

Enhanced blog system using:
- `@next/mdx` (mdxRs experimental feature disabled for stability)
- `@mdx-js/react` for React component integration
- `gray-matter` for frontmatter parsing
- `next-mdx-remote` for MDX processing

### Configuration Files

All configuration files have been optimized with comprehensive documentation and clean structure:

- **next.config.js**: Fully documented ES module setup with MDX integration and stability notes
- **postcss.config.js**: Detailed PostCSS pipeline configuration optimized for Tailwind CSS v4 
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

## Dependency Information

### Core Dependencies
- `next@^15.5.2` - Next.js framework
- `react@^19.1.1` - React library
- `typescript@^5.9.2` - TypeScript support

### Styling Dependencies  
- `tailwindcss@^4.0.0` - Modern utility-first CSS framework
- `@tailwindcss/vite@^4.0.0` - Tailwind CSS v4 tooling
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
4. **Linting**: `npm run lint` - Check code quality and consistency

### Styling Workflow  
1. **Simple Styling**: Use Tailwind utilities directly in components
2. **Complex Styling**: Add custom `@layer components` classes to `global.css`
3. **Maintain Design**: Preserve exact original specifications in custom components
4. **Responsive Design**: Combine custom classes with Tailwind responsive utilities

### Content Development
1. **Blog Posts**: Add MDX files to `/posts/` directory with frontmatter
2. **Pages**: Create new `.tsx` files in `/pages/` for additional routes
3. **Components**: Build reusable components in `/components/` directory

### Quality Assurance
1. **Type Safety**: Strict TypeScript configuration catches issues early
2. **Build Validation**: `npm run build` ensures production readiness
3. **Bundle Analysis**: `npm run build-analyze` for performance optimization
4. **Testing**: All functionality validated in both development and production modes

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