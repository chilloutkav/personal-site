import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ContentMetadata {
  id: string
  [key: string]: unknown
}

export interface ContentWithBody<T extends ContentMetadata> {
  content: string
  metadata: T
}

export function createContentLoader<T extends ContentMetadata>(
  directoryName: string
) {
  const contentDirectory = path.join(process.cwd(), directoryName)

  function getAll(): T[] {
    try {
      if (!fs.existsSync(contentDirectory)) {
        return []
      }

      const fileNames = fs.readdirSync(contentDirectory)

      return fileNames
        .filter(fileName => /\.(md|mdx)$/.test(fileName))
        .map((fileName): T => {
          const id = fileName.replace(/\.(md|mdx)$/, '')
          const fullPath = path.join(contentDirectory, fileName)

          try {
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const matterResult = matter(fileContents)

            return {
              id,
              ...matterResult.data
            } as T
          } catch (error) {
            console.error(`Error reading file ${fileName}:`, error)
            throw new Error(`Failed to read content file: ${fileName}`)
          }
        })
    } catch (error) {
      console.error(`Error accessing directory ${directoryName}:`, error)
      return []
    }
  }

  function getAllIds(): Array<{ params: { [key: string]: string } }> {
    try {
      if (!fs.existsSync(contentDirectory)) {
        return []
      }

      const fileNames = fs.readdirSync(contentDirectory)

      return fileNames
        .filter(fileName => /\.(md|mdx)$/.test(fileName))
        .map((fileName) => {
          const id = fileName.replace(/\.(md|mdx)$/, '')

          return {
            params: {
              [getParamName(directoryName)]: id
            }
          }
        })
    } catch (error) {
      console.error(`Error accessing directory ${directoryName}:`, error)
      return []
    }
  }

  async function getById(id: string): Promise<ContentWithBody<T>> {
    try {
      let fullPath = path.join(contentDirectory, `${id}.mdx`)

      if (!fs.existsSync(fullPath)) {
        fullPath = path.join(contentDirectory, `${id}.md`)
      }

      if (!fs.existsSync(fullPath)) {
        throw new Error(`Content file not found: ${id}`)
      }

      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        content: matterResult.content,
        metadata: {
          id,
          ...matterResult.data
        } as T
      }
    } catch (error) {
      console.error(`Error reading content ${id}:`, error)
      throw error
    }
  }

  function getParamName(dir: string): string {
    if (dir === 'projects') return 'projectName'
    if (dir === 'posts') return 'id'
    return 'id'
  }

  return {
    getAll,
    getAllIds,
    getById
  }
}
