/**
 * PostCSS Configuration for Next.js with Tailwind CSS v4
 * 
 * Provides essential CSS processing for modern browser compatibility
 * and works seamlessly with Tailwind CSS v4's zero-config approach.
 */
export default {
  plugins: {
    // Fix common CSS flexbox issues across browsers
    'postcss-flexbugs-fixes': {},
    // Modern CSS features with autoprefixer support
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
}