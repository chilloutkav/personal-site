export const SITE_CONFIG = {
  domain: 'https://kavenkim.com',
  siteName: 'Kaven Kim',
  author: 'Kaven Kim',
  defaultDescription: 'Product manager, growth marketer, and builder. Three disciplines, one approach to driving measurable results.',
} as const

export function buildCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_CONFIG.domain}${cleanPath}`
}

export function buildOGImageUrl(title: string): string {
  return `${SITE_CONFIG.domain}/api/og?title=${encodeURIComponent(title)}`
}
