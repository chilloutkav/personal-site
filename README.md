# Personal Site - Kaven Kim

A modern, high-performance personal portfolio website showcasing a Product Manager's unique journey from growth marketing to technical product management. Built with **Next.js 15.5.2**, **TypeScript**, and **Tailwind CSS v4**.

## ✨ Features

- **Technical Projects Showcase**: Dynamic MDX-based project portfolio with live demos
- **Professional Storytelling**: About page with compelling PM career narrative
- **Modern Stack**: Latest Next.js, TypeScript, and Tailwind CSS v4
- **Live Demos**: Integrated project demos via subdomain architecture
- **Performance Optimized**: Sub-2-second builds with optimal bundle sizes
- **Dark Mode**: System-aware theme toggle with localStorage persistence and FOUC prevention
- **Fully Responsive**: Mobile-first design with pixel-perfect styling
- **SEO Ready**: Optimized meta tags and performance metrics

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Setup

```bash
# Install dependencies
npm install

# Start development server (REQUIRED for Tailwind CSS v4)
npm run prod

# Open http://localhost:3000
```

**⚠️ Important**: This project uses Tailwind CSS v4 which requires production builds for development. Always use `npm run prod` instead of `npm run dev`.

### Environment Configuration

Create `.env.local` in the project root (optional for local development):

```bash
# Google Tag Manager (Optional - already configured in Netlify)
NEXT_PUBLIC_GTM_ID=GTM-5CXC3C8
```

**Note**: For production deployment on Netlify, environment variables are configured in the dashboard. Local development works without `.env.local`.

## 📋 Essential Commands

- `npm run prod` - **PRIMARY DEVELOPMENT WORKFLOW**: Build and start production server
- `npm run build` - Build for production
- `npm start` - Start production server (requires existing build)
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint checks

**⚠️ Avoid**: `npm run dev` - causes blank pages due to Tailwind CSS v4 compatibility

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 15.5.2 with Pages Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with custom components
- **Content**: MDX-based project showcase and content management

### Project Structure
```
├── pages/                  # Next.js Pages Router
│   ├── index.tsx          # Homepage with hero and projects
│   ├── projects.tsx       # Technical projects showcase
│   ├── about.tsx          # About page with professional story
│   └── api/               # API routes
├── components/            # React components
│   └── layout.tsx         # Main layout with navigation
├── lib/                   # Utility functions and content management
├── projects/              # Project MDX content files
├── styles/                # Global CSS with Tailwind v4
└── public/                # Static assets
```

## 🎯 Key Features

### Technical Projects Showcase
- Dynamic MDX-based project content management
- Live project demos via subdomain architecture
- Professional, portfolio-focused presentation
- Seamless integration with Google Analytics cross-domain tracking

### Navigation System
- Clean three-page structure (Home, Projects, About)
- Active state detection with black text and underline styling
- Fully responsive mobile and desktop experience

## 📦 Deployment

### Build for Production
```bash
npm run build
# Output in .next/ directory ready for deployment
```

### Supported Platforms
- **Netlify**: Optimized with `@netlify/plugin-nextjs`
- **Vercel**: Native Next.js support  
- **Static Hosting**: Any CDN or static file server
- **Server**: Full Next.js server capabilities

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Make changes with proper TypeScript typing
4. Test with `npm run prod` (required for Tailwind CSS v4)
5. Run quality checks: `npm run type-check && npm run lint`
6. Create Pull Request

### Code Standards
- Follow existing TypeScript patterns
- Use semantic CSS classes for styling
- Test in production mode (`npm run prod`)
- Include proper documentation

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)**: Comprehensive development guide for contributors and Claude Code
- **Configuration Files**: Fully documented with inline comments

---

**Built by Kaven Kim** | Product Manager | Building Products That Help Businesses Grow