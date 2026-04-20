import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { type ReactElement } from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPostMeta {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  featured: boolean
}

function readAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((name) => /\.(md|mdx)$/.test(name))
    .map((name) => {
      const id = name.replace(/\.(md|mdx)$/, '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, name), 'utf8')
      const { data } = matter(raw)
      return { id, ...data } as BlogPostMeta
    })
}

export function getAllPosts(): BlogPostMeta[] {
  return readAllPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getLatestPosts(count: number): BlogPostMeta[] {
  return getAllPosts().slice(0, count)
}

export function getAllSlugs(): { slug: string }[] {
  return readAllPosts().map((post) => ({ slug: post.id }))
}

export async function getPostBySlug(
  slug: string
): Promise<{ meta: BlogPostMeta; content: ReactElement }> {
  let fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(BLOG_DIR, `${slug}.md`)
  }
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Content file not found: ${slug}`)
  }

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(raw)

  const { content: compiled } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  })

  return {
    meta: { id: slug, ...data } as BlogPostMeta,
    content: compiled,
  }
}
