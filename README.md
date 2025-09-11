# Personal Site - Kaven Kim

A modern, high-performance personal portfolio website built with **Next.js 15.5.2**, **TypeScript**, and **Tailwind CSS v4**. This site showcases a Product Manager's unique journey from growth marketing to technical product management, with a focus on clean architecture, optimal performance, and professional presentation.

## ✨ Features

- **Modern Stack**: Next.js 15.5.2 with Pages Router, TypeScript, and Tailwind CSS v4
- **GitHub Integration**: Automatic repository showcase with GitHub API integration
- **Professional Storytelling**: About page with compelling PM career narrative
- **Performance Optimized**: Sub-2-second builds, optimal bundle sizes, and fast loading
- **Fully Typed**: Comprehensive TypeScript implementation with strict type checking
- **Responsive Design**: Mobile-first approach with pixel-perfect styling
- **SEO Ready**: Optimized meta tags, structured data, and performance metrics
- **Zero-Config Styling**: Tailwind CSS v4 with custom component architecture

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Development Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Edit .env.local and add your GitHub username

# Start development server (REQUIRED for Tailwind CSS v4)
npm run prod

# Open http://localhost:3000 in your browser
```

**⚠️ Important**: This project uses Tailwind CSS v4 which has compatibility issues with Next.js development mode. Always use `npm run prod` for development and testing.

### Environment Configuration

Create `.env.local` in the project root:

```bash
# Required: Your GitHub username for projects showcase
GITHUB_USERNAME=your-github-username

# Optional: GitHub Personal Access Token for higher rate limits
# GITHUB_TOKEN=your_token_here
```

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📋 Available Scripts

### Core Commands
- `npm run prod` - **PRIMARY DEVELOPMENT WORKFLOW**: Build and start production server
- `npm run build` - Build the application for production  
- `npm start` - Start production server (requires existing build)
- `npm run rebuild` - Clean cache, build, and start production server

### Development Tools
- `npm run type-check` - Run TypeScript type checking without emitting files
- `npm run lint` - Run ESLint checks (modern ESLint CLI)
- `npm run clean` - Clear Next.js build cache (.next directory)
- `npm run build-analyze` - Build with bundle analysis for performance optimization

### ⚠️ Commands to Avoid
- `npm run dev` - Causes blank pages due to Tailwind CSS v4 compatibility issues

## 🏗️ Architecture

### Tech Stack

- **Framework**: Next.js 15.5.2 with Pages Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with custom components
- **API Integration**: GitHub API for dynamic project showcase
- **Content**: MDX support for blog posts (future expansion)
- **Build**: PostCSS with modern CSS features
- **Deployment**: Optimized for static generation and server deployment

### Project Structure

```
├── pages/                  # Next.js Pages Router
│   ├── _app.tsx           # App wrapper with global styles
│   ├── _document.tsx      # Custom document component
│   ├── index.tsx          # Homepage with hero and projects showcase
│   ├── projects.tsx       # GitHub projects showcase page
│   ├── about.tsx          # About page with professional story
│   ├── posts/[id].tsx     # Dynamic blog post routes (future)
│   └── api/               # API routes
├── components/            # React components
│   ├── layout.tsx         # Main layout with navigation system
│   └── date.tsx           # Date formatting component
├── lib/                   # Utility functions
│   ├── github.ts          # GitHub API integration and TypeScript interfaces
│   └── posts.ts           # Blog post management (future)
├── styles/                # CSS and styling
│   └── global.css         # Global styles with Tailwind and custom components
├── public/                # Static assets
│   └── images/            # Profile images and assets
└── posts/                 # MDX blog posts (future expansion)
```

## 🎯 Key Features

### GitHub Projects Showcase
- **Automatic Fetching**: Dynamic repository data from GitHub API
- **ISR (Incremental Static Regeneration)**: 5-minute cache refresh for optimal performance
- **Professional Presentation**: Clean, portfolio-focused display
- **TypeScript Integration**: Full type safety with custom interfaces
- **Error Handling**: Graceful fallbacks and user-friendly error messages

### About Page
- **Professional Storytelling**: Journey from growth marketing to product management
- **Compelling Narrative**: Technical background combined with business growth focus
- **SEO Optimized**: Proper meta tags and structured content
- **Responsive Design**: Mobile and desktop optimized layout

### Navigation System
- **Three-Page Structure**: Home, Projects, About with consistent navigation
- **Active State Detection**: Automatic highlighting of current page
- **Centered Layout**: Professional, clean navigation design
- **Responsive**: Works seamlessly on mobile and desktop

## 🎨 Styling System

### CSS Architecture

The project uses a hybrid approach combining Tailwind CSS v4 utilities with custom component classes:

- **Tailwind Utilities**: For common styling patterns (`flex`, `text-center`, etc.)
- **Custom Components**: Defined in `@layer components` for site-specific styling
- **Semantic Classes**: `.site-container`, `.site-heading-xl`, etc. for consistent design
- **Zero Config**: Tailwind CSS v4 requires no configuration files

### Custom Components

```css
/* Key custom component classes */
.site-container        /* Main layout container (36rem max-width) */
.site-heading-2xl      /* Large headings (2.5rem, weight 800) */
.site-heading-xl       /* Section headings (2rem, weight 800) */
.site-heading-lg       /* Subsection headings (1.5rem) */
.site-heading-md       /* Body text with paragraph spacing */
.site-nav             /* Navigation with centered alignment */
.site-hero            /* Homepage hero section layout */
.site-project-grid    /* GitHub projects grid layout */
```

### Design Principles

- **Consistent Spacing**: Based on rem units for scalability
- **Typography Scale**: Carefully crafted hierarchy for readability
- **Mobile First**: Responsive design starting from mobile devices
- **Performance**: CSS is optimized and purged for minimal bundle size
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🔧 Configuration

### Key Configuration Files

- **`next.config.js`**: Next.js configuration with MDX support and ES modules
- **`tsconfig.json`**: TypeScript configuration with strict type checking
- **`postcss.config.mjs`**: PostCSS configuration optimized for Tailwind CSS v4
- **`package.json`**: Dependencies and scripts with project metadata

### GitHub API Integration

The site automatically fetches and displays GitHub repositories:

- **Rate Limiting**: Handles both authenticated and unauthenticated requests
- **Data Processing**: Filters archived repos, sorts by update date
- **Caching**: Built-in Next.js caching with 5-minute revalidation
- **Error Boundaries**: Comprehensive error handling with fallbacks

## 🚀 Performance

### Build Metrics

- **Build Time**: ~1 second (optimized with Tailwind CSS v4)
- **Bundle Size**: Optimized chunks under 110kB first load
- **Static Generation**: Pre-rendered pages for fastest loading
- **Core Web Vitals**: Optimized for LCP, CLS, and FID

### Production Optimizations

- Automatic image optimization with Next.js
- CSS purging removes unused styles
- Bundle analysis tools for monitoring
- Incremental Static Regeneration for dynamic content

## 🔍 Development

### Code Quality

- **TypeScript**: Strict type checking with comprehensive interfaces
- **ESLint**: Modern ESLint CLI configuration with Next.js rules
- **Architecture**: Clean separation of concerns
- **Documentation**: Comprehensive inline and external documentation

### Development Workflow

1. **Start Development**: `npm run prod` for Tailwind CSS v4 compatibility
2. **Type Check**: `npm run type-check` for validation
3. **Build Test**: `npm run build` for production readiness
4. **Quality Assurance**: Automated checks for type safety and performance

## 📦 Deployment

### Static Export

The site can be deployed as a static export to any CDN:

```bash
npm run build
# Output in .next/ directory ready for deployment
```

### Supported Platforms

- **Netlify**: Optimized with `@netlify/plugin-nextjs`
- **Vercel**: Native Next.js support with GitHub integration
- **Static Hosting**: Any CDN or static file server
- **Server**: Full Next.js server capabilities

## 🤝 Contributing

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Set up environment variables (GitHub username required)
4. Make changes with proper TypeScript typing
5. Test thoroughly: `npm run type-check && npm run build`
6. Use `npm run prod` for development testing
7. Commit with clear messages and create a Pull Request

### Code Standards

- Follow existing TypeScript patterns
- Use semantic CSS classes for styling
- Maintain responsive design principles
- Test in production mode (`npm run prod`)
- Include proper documentation for new features

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)**: Comprehensive development guide with architecture details
- **Configuration Files**: Fully documented with inline comments
- **Component Architecture**: Clear separation and reusable patterns
- **Styling Guide**: Custom component classes and Tailwind integration

## 🏆 Project Highlights

- **Modern Architecture**: Latest Next.js, TypeScript, and Tailwind CSS v4
- **GitHub Integration**: Automatic project showcase with professional presentation
- **Professional Story**: Compelling About page showcasing PM journey
- **Performance**: Sub-2-second builds with optimal bundle sizes
- **Production Ready**: Comprehensive configuration and deployment options
- **Type Safety**: Strict TypeScript throughout with zero compilation errors

---

**Built with ❤️ by Kaven Kim** | Product Manager | Building Products That Help Businesses Grow