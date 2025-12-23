import { ProjectData } from './projects'
import { PostData } from './posts'
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
      'https://github.com/chilloutkav',
    ],
    description: 'Product manager with expertise in growth marketing, data analytics, and technical product development',
  }
}

export function createSoftwareApplicationSchema(project: ProjectData, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    applicationCategory: 'WebApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Person',
      name: 'Kaven Kim',
      url: SITE_CONFIG.domain,
    },
    url: canonicalUrl,
    ...(project.demoUrl && {
      installUrl: typeof project.demoUrl === 'string' ? project.demoUrl : undefined
    }),
    ...(project.githubUrl && {
      codeRepository: typeof project.githubUrl === 'string' ? project.githubUrl : undefined
    }),
  }
}

export function createBlogPostingSchema(post: PostData, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Kaven Kim',
      url: SITE_CONFIG.domain,
    },
    publisher: {
      '@type': 'Person',
      name: 'Kaven Kim',
    },
    url: canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
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
