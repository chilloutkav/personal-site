export interface SEOConfig {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article'
  ogImage?: string
  keywords?: string
  publishedTime?: string
  author?: string
  noindex?: boolean
}

export const SITE_CONFIG = {
  domain: 'https://kavenkim.com',
  siteName: 'Kaven Kim',
  siteTitle: 'Kaven Kim',
  author: 'Kaven Kim',
  twitterHandle: '@kavenkim',
  defaultDescription: 'Product manager, growth marketer, and ecommerce operator — three disciplines, one approach to driving measurable results.',
  defaultOGImage: '/images/og-default.jpg',
} as const

export function buildCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_CONFIG.domain}${cleanPath}`
}

export function buildOGImageUrl(title?: string, customImage?: string): string {
  if (customImage) {
    if (customImage.startsWith('http')) {
      return customImage
    }
    return `${SITE_CONFIG.domain}${customImage}`
  }

  if (title) {
    return `${SITE_CONFIG.domain}/api/og?title=${encodeURIComponent(title)}`
  }

  return `${SITE_CONFIG.domain}${SITE_CONFIG.defaultOGImage}`
}

export function buildPageTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return SITE_CONFIG.siteTitle
  }
  return `${pageTitle} - ${SITE_CONFIG.siteTitle}`
}
