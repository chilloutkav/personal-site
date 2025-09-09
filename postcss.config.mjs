/**
 * PostCSS Configuration for Next.js with Tailwind CSS v4
 * 
 * Simplified configuration for Tailwind CSS v4 compatibility.
 * Research shows that v4 requires minimal PostCSS setup and
 * complex plugin configurations can interfere with CSS injection.
 */

const config = {
  plugins: {
    /**
     * Tailwind CSS v4 PostCSS Plugin
     * This is the primary plugin that processes @import "tailwindcss" directive
     * and generates utility classes.
     */
    '@tailwindcss/postcss': {},
    
    /**
     * Autoprefixer Plugin
     * Adds vendor prefixes to CSS and often resolves HMR CSS injection issues
     * in Next.js development server by ensuring proper CSS processing.
     */
    'autoprefixer': {},
  },
}

export default config