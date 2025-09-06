import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  experimental: {
    mdxRs: true,
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)