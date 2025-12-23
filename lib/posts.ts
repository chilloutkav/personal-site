import { createContentLoader } from './content'

export interface PostData {
  id: string
  title: string
  date: string
  [key: string]: unknown
}

export interface PostWithContent extends PostData {
  content: string
}

export interface PostId {
  params: {
    id: string
  }
}

const postLoader = createContentLoader<PostData>('posts')

export function getSortedPostsData(): PostData[] {
  const allPostsData = postLoader.getAll()

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds(): PostId[] {
  return postLoader.getAllIds() as PostId[]
}

export async function getPostData(id: string): Promise<PostWithContent> {
  const result = await postLoader.getById(id)

  return {
    content: result.content,
    ...result.metadata
  } as PostWithContent
}