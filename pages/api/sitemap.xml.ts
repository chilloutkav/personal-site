import type { NextApiRequest, NextApiResponse } from 'next'
import { getSortedProjectsData } from '@/lib/projects'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const projects = getSortedProjectsData()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kavenkim.com</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://kavenkim.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://kavenkim.com/projects</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${projects
    .map(
      (project) => `
  <url>
    <loc>https://kavenkim.com/projects/${project.id}</loc>
    <lastmod>${project.createdDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.status(200).send(sitemap)
}
