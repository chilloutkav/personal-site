import Layout from '../../../../components/layout'
import { getAllProjectIds, getProjectData, ProjectWithContent } from '../../../../lib/projects'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'

interface DemoProps {
  projectData: ProjectWithContent
}

export default function Demo({ projectData }: DemoProps) {
  useEffect(() => {
    const decorateLink = () => {
      const demoLink = document.getElementById('demo-link') as HTMLAnchorElement
      if (!demoLink || !projectData.demoUrl) return

      const gaCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('_ga='))
        ?.split('=')[1]

      if (gaCookie && !demoLink.href.includes('_ga=')) {
        const separator = demoLink.href.includes('?') ? '&' : '?'
        demoLink.href = `${projectData.demoUrl}${separator}_ga=${gaCookie}`
      }
    }

    decorateLink()
    const interval = setInterval(decorateLink, 1000)
    return () => clearInterval(interval)
  }, [projectData.demoUrl])

  return (
    <Layout>
      <Head>
        <title>{`${projectData.title} - Demo`}</title>
        <meta name="description" content={`Try ${projectData.title} live`} />
      </Head>

      <article>
        <div className="site-project-breadcrumb">
          <Link href="/projects" className="site-breadcrumb-link">
            Projects
          </Link>
          <span className="site-breadcrumb-separator">→</span>
          <Link
            href={`/projects/${projectData.id}`}
            className="site-breadcrumb-link"
          >
            {projectData.title}
          </Link>
          <span className="site-breadcrumb-separator">→</span>
          <span className="site-breadcrumb-current">Demo</span>
        </div>

        {projectData.demoUrl ? (
          <>
            <section className="site-demo-hero">
              <h1 className="site-heading-2xl">Try {projectData.title}</h1>
              <p className="site-demo-description">
                Experience the live application with full functionality.
                {projectData.title === "Pokemon Team Creator" && (
                  <span> Search for Pokemon, build your dream team, and explore interactive features.</span>
                )}
                {projectData.title === "Project CRM" && (
                  <span> Manage contacts, track deals through your sales pipeline, and experience real-time CRM functionality with demo credentials provided.</span>
                )}
              </p>

              <a
                id="demo-link"
                href={projectData.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-demo-cta"
              >
                Open Live Demo →
              </a>

              <div className="site-demo-note">
                <p>
                  Opens in a new tab at{' '}
                  <code className="site-demo-url">{projectData.demoUrl}</code>
                </p>
              </div>
            </section>

            <section className="site-demo-info">
              <h2 className="site-heading-lg">What to Expect</h2>
              <div className="site-demo-features">
                <div className="site-demo-feature">
                  <div className="site-demo-feature-icon">⚡</div>
                  <div className="site-demo-feature-content">
                    <h3>Full Functionality</h3>
                    <p>All features are available in the live demo.</p>
                  </div>
                </div>
                <div className="site-demo-feature">
                  <div className="site-demo-feature-icon">🔄</div>
                  <div className="site-demo-feature-content">
                    <h3>Real-Time Updates</h3>
                    <p>Experience the application as it would work in production.</p>
                  </div>
                </div>
                <div className="site-demo-feature">
                  <div className="site-demo-feature-icon">💻</div>
                  <div className="site-demo-feature-content">
                    <h3>Responsive Design</h3>
                    <p>Try it on mobile, tablet, or desktop for the full experience.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="site-demo-back">
              <Link href={`/projects/${projectData.id}`} className="site-demo-back-link">
                ← Read about the technical implementation
              </Link>
            </section>
          </>
        ) : (
          <section className="site-demo-hero">
            <h1 className="site-heading-2xl">{projectData.title} Demo</h1>
            <p className="site-demo-description">
              Demo coming soon! Check back later to try the live application.
            </p>
            <Link
              href={`/projects/${projectData.id}`}
              className="site-demo-cta site-demo-cta--secondary"
            >
              ← Back to Project Details
            </Link>
          </section>
        )}
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
      projectData
    }
  }
}
