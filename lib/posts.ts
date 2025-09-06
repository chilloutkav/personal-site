import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostData {
  id: string
  title: string
  date: string
  [key: string]: any
}

export interface PostWithContent extends PostData {
  content: string
}

export interface PostId {
  params: {
    id: string
  }
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts (both .md and .mdx)
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName): PostData => {
    // Remove ".md" or ".mdx" from file name to get id
    const id = fileName.replace(/\.(md|mdx)$/, '')

    // Read markdown/mdx file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    } as PostData
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds(): PostId[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName): PostId => {
    return {
      params: {
        id: fileName.replace(/\.(md|mdx)$/, '')
      }
    }
  })
}

export async function getPostData(id: string): Promise<PostWithContent> {
  // Try to find the file with either .mdx or .md extension
  let fullPath = path.join(postsDirectory, `${id}.mdx`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${id}.md`)
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // For MDX, we'll return the raw content to be processed by MDX
  return {
    id,
    content: matterResult.content,
    ...matterResult.data
  } as PostWithContent
}