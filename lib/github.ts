// GitHub API utilities for fetching repository data
// Built for Next.js 15.5.2 with TypeScript

export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  languages_url: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  size: number
  default_branch: string
  open_issues_count: number
  topics: string[]
  archived: boolean
  disabled: boolean
  visibility: 'public' | 'private'
  pushed_at: string
  created_at: string
  updated_at: string
  clone_url: string
  ssh_url: string
}

export interface GitHubLanguages {
  [key: string]: number
}

export interface ProcessedRepository {
  id: number
  name: string
  fullName: string
  description: string | null
  url: string
  homepage: string | null
  primaryLanguage: string | null
  languages: GitHubLanguages | null
  stars: number
  forks: number
  watchers: number
  topics: string[]
  isArchived: boolean
  lastUpdated: string
  createdAt: string
  size: number
  openIssues: number
}

export interface GitHubAPIError {
  message: string
  status: number
  rateLimitRemaining?: number
  rateLimitReset?: number
}

const GITHUB_API_BASE = 'https://api.github.com'

// Get GitHub username from environment or use default
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'kavenkim'

/**
 * Fetch repositories for a specific GitHub user
 * Handles rate limiting and error cases gracefully
 */
export async function fetchGitHubRepositories(
  username: string = GITHUB_USERNAME
): Promise<ProcessedRepository[]> {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Personal-Site-Next.js'
    }

    // Add authorization header if token is available
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
    }

    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?type=public&sort=updated&per_page=100`,
      {
        headers,
        // Cache for 5 minutes in production
        next: { revalidate: 300 }
      }
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        `GitHub API error: ${response.status} - ${errorData.message || 'Unknown error'}`
      )
    }

    const repositories: GitHubRepository[] = await response.json()
    
    // Process repositories with language data
    const processedRepos = await Promise.all(
      repositories.map(async (repo) => {
        const languages = await fetchRepositoryLanguages(repo.languages_url)
        return processRepository(repo, languages)
      })
    )

    // Filter out archived repositories and sort by last updated
    return processedRepos
      .filter(repo => !repo.isArchived)
      .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())

  } catch (error) {
    console.error('Error fetching GitHub repositories:', error)
    throw error
  }
}

/**
 * Fetch language breakdown for a specific repository
 */
async function fetchRepositoryLanguages(languagesUrl: string): Promise<GitHubLanguages | null> {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Personal-Site-Next.js'
    }

    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
    }

    const response = await fetch(languagesUrl, { 
      headers,
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      console.warn(`Failed to fetch languages for ${languagesUrl}`)
      return null
    }

    return await response.json()
  } catch (error) {
    console.warn('Error fetching repository languages:', error)
    return null
  }
}

/**
 * Process raw GitHub repository data into our format
 */
function processRepository(
  repo: GitHubRepository, 
  languages: GitHubLanguages | null
): ProcessedRepository {
  return {
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    url: repo.html_url,
    homepage: repo.homepage,
    primaryLanguage: repo.language,
    languages,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    watchers: repo.watchers_count,
    topics: repo.topics,
    isArchived: repo.archived,
    lastUpdated: repo.updated_at,
    createdAt: repo.created_at,
    size: repo.size,
    openIssues: repo.open_issues_count
  }
}

/**
 * Get the primary language with highest byte count
 */
export function getPrimaryLanguage(languages: GitHubLanguages | null): string | null {
  if (!languages || Object.keys(languages).length === 0) {
    return null
  }

  return Object.entries(languages)
    .sort(([, a], [, b]) => b - a)[0][0]
}

/**
 * Filter repositories by programming language
 */
export function filterByLanguage(
  repositories: ProcessedRepository[],
  language: string
): ProcessedRepository[] {
  return repositories.filter(repo => 
    repo.primaryLanguage?.toLowerCase() === language.toLowerCase() ||
    (repo.languages && Object.keys(repo.languages).some(
      lang => lang.toLowerCase() === language.toLowerCase()
    ))
  )
}

/**
 * Filter repositories by topic/tag
 */
export function filterByTopic(
  repositories: ProcessedRepository[],
  topic: string
): ProcessedRepository[] {
  return repositories.filter(repo =>
    repo.topics.some(t => t.toLowerCase().includes(topic.toLowerCase()))
  )
}

/**
 * Sort repositories by different criteria
 */
export function sortRepositories(
  repositories: ProcessedRepository[],
  sortBy: 'updated' | 'stars' | 'name' | 'created'
): ProcessedRepository[] {
  const sorted = [...repositories]

  switch (sortBy) {
    case 'stars':
      return sorted.sort((a, b) => b.stars - a.stars)
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'created':
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    case 'updated':
    default:
      return sorted.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
  }
}

/**
 * Get unique languages from repository list
 */
export function getUniqueLanguages(repositories: ProcessedRepository[]): string[] {
  const languages = new Set<string>()

  repositories.forEach(repo => {
    if (repo.primaryLanguage) {
      languages.add(repo.primaryLanguage)
    }
    if (repo.languages) {
      Object.keys(repo.languages).forEach(lang => languages.add(lang))
    }
  })

  return Array.from(languages).sort()
}

/**
 * Format last updated date for display
 */
export function formatLastUpdated(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) {
    return 'Today'
  } else if (diffInDays === 1) {
    return 'Yesterday'
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7)
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30)
    return `${months} month${months > 1 ? 's' : ''} ago`
  } else {
    const years = Math.floor(diffInDays / 365)
    return `${years} year${years > 1 ? 's' : ''} ago`
  }
}