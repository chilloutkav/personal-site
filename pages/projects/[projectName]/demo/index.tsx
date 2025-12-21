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

  const ogImage = projectData.previewImage
    ? `https://kavenkim.com${projectData.previewImage}`
    : `https://kavenkim.com/api/og?title=${encodeURIComponent(projectData.title)}`;
  const canonicalUrl = `https://kavenkim.com/projects/${projectData.id}`;

  return (
    <Layout>
      <Head>
        <title>{`${projectData.title} - Demo - Kaven Kim | Product Manager`}</title>
        <meta name="description" content={`Try ${projectData.title} live. ${projectData.description}`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${projectData.title} - Demo - Kaven Kim`} />
        <meta property="og:description" content={`Try ${projectData.title} live. ${projectData.description}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://kavenkim.com/projects/${projectData.id}/demo`} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`${projectData.title} demo preview`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${projectData.title} - Demo - Kaven Kim`} />
        <meta name="twitter:description" content={`Try ${projectData.title} live. ${projectData.description}`} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical - points to main project page */}
        <link rel="canonical" href={canonicalUrl} />
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
                {projectData.title === "Pokemon Team Creator" && (
                  <span>Search through 1,000+ Pokemon, discover shiny variants, and build your ultimate six-Pokemon team. Fully interactive with real-time PokeAPI data and dynamic team management.</span>
                )}
                {projectData.title === "Project CRM" && (
                  <span>Experience a production-ready CRM with full contact management, deal pipeline tracking, and real-time updates. Login with demo credentials (demo1@example.com / 1234) to explore pre-loaded data.</span>
                )}
                {!["Pokemon Team Creator", "Project CRM"].includes(projectData.title) && (
                  <span>Experience the live application with full functionality.</span>
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
