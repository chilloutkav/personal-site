import { SITE_CONFIG } from './seo'

export interface BreadcrumbItem {
  name: string
  path: string
}

export function createPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kaven Kim',
    jobTitle: 'Product Manager, Growth Marketer & Ecommerce Operator',
    url: SITE_CONFIG.domain,
    sameAs: [
      'https://linkedin.com/in/kavenkim',
    ],
    description: 'Product manager, growth marketer, and ecommerce operator with 12+ years driving measurable results across all three disciplines',
  }
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.domain}${item.path}`,
    })),
  }
}
