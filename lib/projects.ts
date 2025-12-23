import { createContentLoader } from './content'

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

const projectLoader = createContentLoader<ProjectData>('projects')

export function getSortedProjectsData(): ProjectData[] {
  const allProjectsData = projectLoader.getAll()

  return allProjectsData.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    if (a.createdDate < b.createdDate) return 1
    return -1
  })
}

export function getAllProjectIds(): ProjectId[] {
  return projectLoader.getAllIds() as ProjectId[]
}

export async function getProjectData(projectName: string): Promise<ProjectWithContent> {
  const result = await projectLoader.getById(projectName)

  return {
    content: result.content,
    ...result.metadata
  } as ProjectWithContent
}

