import Head from 'next/head'
import { SEOConfig, SITE_CONFIG, buildCanonicalUrl, buildOGImageUrl, buildPageTitle } from '@/lib/seo'

interface SEOHeadProps extends Omit<SEOConfig, 'path'> {
  path?: string
}

export default function SEOHead({
  title,
  description,
  path = '',
  ogType = 'website',
  ogImage,
  keywords,
  publishedTime,
  author,
  noindex = false,
}: SEOHeadProps) {
  const pageTitle = buildPageTitle(title)
  const canonical = buildCanonicalUrl(path)
  const ogImageUrl = buildOGImageUrl(title, ogImage)
  const ogTitle = title ? `${title} - ${SITE_CONFIG.siteTitle}` : SITE_CONFIG.siteTitle

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}

      <link rel="canonical" href={canonical} />
    </Head>
  )
}
