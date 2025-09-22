import Layout from '../../../../components/layout'
import { getAllProjectIds, getProjectData, ProjectData } from '../../../../lib/projects'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface DemoProps {
  projectData: ProjectData;
}

export default function Demo({ projectData }: DemoProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for demo iframe
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // If no demo URL is provided, show a fallback
  if (!projectData.demoUrl) {
    return (
      <Layout>
        <Head>
          <title>{`${projectData.title} - Demo`}</title>
          <meta name="description" content={`Live demo of ${projectData.title}`} />
        </Head>

        <article className="site-demo-fallback">
          <header className="site-demo-header">
            <div className="site-project-breadcrumb">
              <Link href="/projects" className="site-breadcrumb-link">
                Projects
              </Link>
              <span className="site-breadcrumb-separator">→</span>
              <Link href={`/projects/${projectData.id}`} className="site-breadcrumb-link">
                {projectData.title}
              </Link>
              <span className="site-breadcrumb-separator">→</span>
              <span className="site-breadcrumb-current">Demo</span>
            </div>

            <h1 className="site-heading-2xl">{projectData.title} Demo</h1>
          </header>

          <section className="site-demo-unavailable">
            <div className="site-demo-message">
              <h2 className="site-heading-md">Demo Not Available</h2>
              <p className="site-light-text">
                This project doesn't currently have a live demo available.
              </p>

              <div className="site-demo-alternatives">
                <Link
                  href={`/projects/${projectData.id}`}
                  className="site-project-link"
                >
                  ← View Project Details
                </Link>

                {projectData.githubUrl && (
                  <a
                    href={projectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-project-link site-project-link--github"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </section>
        </article>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head>
        <title>{`${projectData.title} - Live Demo`}</title>
        <meta name="description" content={`Live demo of ${projectData.title}`} />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <article className="site-demo-container">
        <header className="site-demo-header">
          <div className="site-project-breadcrumb">
            <Link href="/projects" className="site-breadcrumb-link">
              Projects
            </Link>
            <span className="site-breadcrumb-separator">→</span>
            <Link href={`/projects/${projectData.id}`} className="site-breadcrumb-link">
              {projectData.title}
            </Link>
            <span className="site-breadcrumb-separator">→</span>
            <span className="site-breadcrumb-current">Live Demo</span>
          </div>

          <div className="site-demo-controls">
            <h1 className="site-demo-title">{projectData.title} - Live Demo</h1>

            <div className="site-demo-actions">
              <Link
                href={`/projects/${projectData.id}`}
                className="site-demo-action"
              >
                ← Project Details
              </Link>

              <a
                href={projectData.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-demo-action site-demo-action--external"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
                Open in New Tab
              </a>
            </div>
          </div>
        </header>

        <section className="site-demo-iframe-container">
          {isLoading && (
            <div className="site-demo-loading">
              <div className="site-demo-spinner"></div>
              <p>Loading demo...</p>
            </div>
          )}

          <iframe
            src={projectData.demoUrl}
            title={`${projectData.title} Live Demo`}
            className={`site-demo-iframe ${isLoading ? 'site-demo-iframe--loading' : ''}`}
            onLoad={() => setIsLoading(false)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </section>

        <footer className="site-demo-footer">
          <p className="site-light-text">
            This is a live demo of {projectData.title}.
            <Link href={`/projects/${projectData.id}`} className="site-inline-link">
              Learn more about this project
            </Link>
          </p>
        </footer>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<DemoProps, { projectName: string }> = async ({ params }) => {
  const projectData = await getProjectData(params!.projectName)

  return {
    props: {
      projectData: {
        id: projectData.id,
        title: projectData.title,
        description: projectData.description,
        techStack: projectData.techStack,
        demoUrl: projectData.demoUrl || null,
        githubUrl: projectData.githubUrl || null,
        previewImage: projectData.previewImage || null,
        status: projectData.status,
        featured: projectData.featured,
        createdDate: projectData.createdDate
      }
    }
  }
}