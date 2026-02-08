import { type ReactElement } from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'
import { createContentLoader } from './content'

export interface BlogPostMeta {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  featured: boolean
  [key: string]: unknown
}

const blogLoader = createContentLoader<BlogPostMeta>('content/blog')

export function getAllPosts(): BlogPostMeta[] {
  return blogLoader
    .getAll()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedPosts(): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.featured)
}

export function getLatestPosts(count: number): BlogPostMeta[] {
  return getAllPosts().slice(0, count)
}

export function getAllSlugs(): { slug: string }[] {
  return blogLoader.getAll().map((post) => ({ slug: post.id }))
}

export async function getPostBySlug(
  slug: string
): Promise<{ meta: BlogPostMeta; content: ReactElement }> {
  const raw = await blogLoader.getById(slug)

  const { content } = await compileMDX({
    source: raw.content,
    options: { parseFrontmatter: false },
  })

  return {
    meta: raw.metadata,
    content,
  }
}
