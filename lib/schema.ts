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
    jobTitle: 'Product Manager',
    url: SITE_CONFIG.domain,
    sameAs: [
      'https://linkedin.com/in/kavenkim',
    ],
    description: 'Product manager with expertise in growth marketing, data analytics, and technical product development',
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
