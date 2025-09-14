/**
 * Next.js Configuration for Personal Site
 * 
 * Modern Next.js 15.5.2 setup with TypeScript, Tailwind CSS v4, and MDX support.
 * Configured for optimal performance and stability in both development and production.
 */

import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Page Extensions Configuration
   * Supports TypeScript (.ts, .tsx) and MDX (.md, .mdx) files as pages
   */
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  /**
   * Experimental Features
   * Note: mdxRs (Rust MDX compiler) is disabled for stability.
   * The experimental Rust compiler caused webpack vendor-chunks conflicts
   * in development mode. Standard @next/mdx provides all needed functionality.
   */
  experimental: {
    // mdxRs EXPLICITLY DISABLED - createMDX auto-enables it, so we must force disable
    // The experimental Rust compiler causes webpack vendor-chunks conflicts
    mdxRs: false,
  },
  
  /**
   * Security Headers Configuration
   * Implements comprehensive security headers for production deployment
   */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self'",
              "connect-src 'self' https://api.github.com",
              "frame-src 'none'"
            ].join('; ')
          }
        ]
      }
    ]
  },
  
  /**
   * Performance Optimizations
   * Next.js 15.5.2 includes built-in optimizations for:
   * - Bundle splitting and tree shaking
   * - Image optimization
   * - Font optimization
   */
}

/**
 * MDX Configuration
 * Enhanced markdown processing with React component support
 * IMPORTANT: Explicitly disable mdxRs to prevent webpack vendor-chunks conflicts
 */
const withMDX = createMDX({
  /**
   * MDX options can be configured here:
   * - Custom remark/rehype plugins
   * - Syntax highlighting
   * - Custom components
   */
  experimental: {
    mdxRs: false  // Force disable mdxRs in MDX config to prevent override
  }
})

/**
 * Export the combined configuration
 * Wraps Next.js config with MDX processing capabilities
 */
export default withMDX(nextConfig)