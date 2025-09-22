import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'projects')

export interface ProjectData {
  id: string
  title: string
  description: string
  techStack: string[]
  demoUrl?: string | null
  githubUrl?: string | null
  previewImage?: string | null
  status: 'live' | 'in-development' | 'archived'
  featured: boolean
  createdDate: string
  [key: string]: unknown
}

export interface ProjectWithContent extends ProjectData {
  content: string
}

export interface ProjectId {
  params: {
    projectName: string
  }
}

export function getSortedProjectsData(): ProjectData[] {
  // Check if projects directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  // Get file names under /projects (both .md and .mdx)
  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = fileNames.map((fileName): ProjectData => {
    // Remove ".md" or ".mdx" from file name to get id
    const id = fileName.replace(/\.(md|mdx)$/, '')

    // Read markdown/mdx file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    } as ProjectData
  })

  // Sort projects by featured first, then by created date
  return allProjectsData.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    if (a.createdDate < b.createdDate) return 1
    return -1
  })
}

export function getAllProjectIds(): ProjectId[] {
  // Check if projects directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map((fileName): ProjectId => {
    return {
      params: {
        projectName: fileName.replace(/\.(md|mdx)$/, '')
      }
    }
  })
}

export async function getProjectData(projectName: string): Promise<ProjectWithContent> {
  // Try to find the file with either .mdx or .md extension
  let fullPath = path.join(projectsDirectory, `${projectName}.mdx`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(projectsDirectory, `${projectName}.md`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the project metadata section
  const matterResult = matter(fileContents)

  // For MDX, we'll return the raw content to be processed by MDX
  return {
    id: projectName,
    content: matterResult.content,
    ...matterResult.data
  } as ProjectWithContent
}

export function getFeaturedProjects(): ProjectData[] {
  return getSortedProjectsData().filter(project => project.featured)
}

export function getProjectsByStatus(status: 'live' | 'in-development' | 'archived'): ProjectData[] {
  return getSortedProjectsData().filter(project => project.status === status)
}

export function getProjectsByTech(tech: string): ProjectData[] {
  return getSortedProjectsData().filter(project =>
    project.techStack.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  )
}