# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start production server

## Troubleshooting Commands

- `rm -rf .next` - Clear Next.js build cache
- `npm cache clean --force` - Clear npm cache
- `pkill -f "next dev" && lsof -t -i:3000 | xargs kill -9` - Kill dev server processes

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
- `@next/mdx` with `mdxRs` experimental feature
- `@mdx-js/react` for React component integration
- `gray-matter` for frontmatter parsing
- `next-mdx-remote` for MDX processing

### Configuration Files

- **next.config.js**: ES module syntax with full MDX support
- **postcss.config.js**: Enhanced PostCSS configuration optimized for Tailwind CSS v4
- **tsconfig.json**: Strict TypeScript configuration
- **package.json**: ES module type with Tailwind CSS v4 dependencies

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

1. **Development Server**: `npm run dev` - starts with full TypeScript, Tailwind, and MDX support
2. **Styling Changes**: 
   - Use Tailwind utilities for simple styling
   - Add custom component classes to `global.css` for complex styling
   - Maintain exact original design specifications
3. **TypeScript**: Full type checking with strict configuration
4. **Build Testing**: `npm run build` validates production readiness and CSS optimization
5. **Content**: Add MDX files to `/posts/` directory

## Architecture Benefits

- **Performance**: Tailwind CSS v4 provides 3.5x faster builds and optimal bundle sizes
- **Maintainability**: Custom component classes maintain design system consistency  
- **Developer Experience**: Zero configuration with IntelliSense support
- **Future-Proof**: Modern CSS architecture aligned with latest web standards
- **Flexibility**: Hybrid approach allows both utility classes and custom specifications

The project successfully combines modern Tailwind CSS v4 architecture with pixel-perfect design preservation, providing excellent developer experience and performance.

## Known Issues

### Development Server White Page Issue ⚠️

**Status**: ACTIVE ISSUE - Requires investigation in future sessions

**Problem**: Development server serves blank white pages despite successful compilation.

**Error Pattern**:
```
⨯ Error: Cannot find module './chunks/vendor-chunks/next.js'
Require stack: [webpack-runtime.js, _document.js, ...]
GET / 500 in 306ms
```

**Root Cause**: 
- Next.js 15.5.2 webpack runtime cannot resolve vendor chunks during development
- Likely interaction between Next.js 15.5.2 + TypeScript + Tailwind CSS v4
- Development server compilation succeeds but runtime module resolution fails

**Impact Assessment**:
- ✅ **Production builds work perfectly** (`npm run build` + `npm start`)
- ✅ **All TypeScript compilation successful**  
- ✅ **All Tailwind CSS v4 styling functional**
- ❌ **Development server shows blank pages** (`npm run dev`)
- ❌ **Hot reloading not functional**

### Troubleshooting Steps

**Temporary Workarounds**:
1. **Clear cache and restart** (sometimes works):
   ```bash
   rm -rf .next
   npm run dev
   ```

2. **Use production mode** (always works):
   ```bash
   npm run build
   npm start
   ```

3. **Kill all processes and retry**:
   ```bash
   pkill -f "next dev" && lsof -t -i:3000 | xargs kill -9
   rm -rf .next
   npm run dev
   ```

**Investigation Needed**:
- [ ] Test with different Next.js versions (15.0.x vs 15.5.2)
- [ ] Investigate webpack configuration conflicts
- [ ] Check Tailwind CSS v4 + TypeScript interaction
- [ ] Review vendor chunk resolution in development mode
- [ ] Test minimal reproduction case

**Current Workaround for Development**:
Use production mode for testing since all functionality works correctly:
```bash
npm run build && npm start
```

### Development Status Summary

**✅ Completed Successfully**:
- Complete TypeScript migration from JavaScript
- Tailwind CSS v4 implementation with zero-config setup  
- Pixel-perfect styling with custom `@layer` components
- Removed manual CSS injection workaround completely
- Updated all configuration files and documentation
- Production builds working perfectly

**⏳ Pending Resolution**:
- Development server webpack vendor chunk resolution
- Hot reloading functionality restoration

This issue does not affect the production deployment or the overall architecture - it's purely a development environment problem that needs investigation in future sessions.