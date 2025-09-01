# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start production server

## Project Architecture

This is a Next.js personal site with static site generation (SSG) capabilities. The architecture follows Next.js conventions:

### Core Structure
- **pages/**: Next.js pages using file-based routing
  - `_app.js`: Global app wrapper that imports global CSS
  - `index.js`: Homepage with static props from markdown posts
  - `posts/[id].js`: Dynamic routes for individual blog posts
  - `api/`: API routes (currently contains hello endpoint)

- **components/**: Reusable React components
  - `layout.js`: Main layout wrapper with header, meta tags, and navigation
  - `date.js`: Date formatting utility component

- **lib/**: Utility functions and data fetching
  - `posts.js`: Core blog functionality with three main functions:
    - `getSortedPostsData()`: Fetches and sorts all posts by date
    - `getAllPostIds()`: Returns all post IDs for static generation
    - `getPostData(id)`: Fetches individual post content and converts markdown to HTML

- **posts/**: Markdown files for blog content with frontmatter metadata
- **styles/**: CSS modules and global styles
- **public/**: Static assets including profile image

### Content Management
Blog posts are written in Markdown with frontmatter and stored in the `/posts` directory. The site uses:
- `gray-matter` for parsing frontmatter
- `remark` and `remark-html` for markdown to HTML conversion
- File-based routing for individual post pages at `/posts/[id]`

### Deployment
Configured for Netlify deployment with Next.js plugin via `netlify.toml`.