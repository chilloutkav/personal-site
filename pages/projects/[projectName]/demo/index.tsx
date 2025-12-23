import Layout from '../../../../components/layout'
import { getAllProjectIds, getProjectData, ProjectWithContent } from '../../../../lib/projects'
import SEOHead from '../../../../components/seo/SEOHead'
import Breadcrumb from '../../../../components/Breadcrumb'
import { useGALinkDecoration } from '../../../../hooks/useGALinkDecoration'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'

interface DemoProps {
  projectData: ProjectWithContent
}

export default function Demo({ projectData }: DemoProps) {
  useGALinkDecoration('demo-link', projectData.demoUrl || undefined)

  return (
    <Layout>
      <SEOHead
        title={`${projectData.title} - Demo`}
        description={`Try ${projectData.title} live. ${projectData.description}`}
        path={`/projects/${projectData.id}/demo`}
        ogImage={projectData.previewImage || undefined}
      />

      <article>
        <Breadcrumb items={[
          { label: 'Projects', href: '/projects' },
          { label: projectData.title, href: `/projects/${projectData.id}` },
          { label: 'Demo' }
        ]} />

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
