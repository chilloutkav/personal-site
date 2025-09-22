import Layout from '../../../components/layout'
import { getAllProjectIds, getProjectData, ProjectWithContent } from '../../../lib/projects'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'

interface ProjectProps {
  projectData: ProjectWithContent & {
    mdxSource: MDXRemoteSerializeResult;
  };
}

const components = {
  // Custom components can be added here for project pages
}

export default function Project({ projectData }: ProjectProps) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
        <meta name="description" content={projectData.description} />
      </Head>

      <article className="site-project-detail">
        {/* Project Header */}
        <header className="site-project-header">
          <div className="site-project-breadcrumb">
            <Link href="/projects" className="site-breadcrumb-link">
              Projects
            </Link>
            <span className="site-breadcrumb-separator">→</span>
            <span className="site-breadcrumb-current">{projectData.title}</span>
          </div>

          <h1 className="site-heading-2xl">{projectData.title}</h1>
          <p className="site-project-description">{projectData.description}</p>

          {/* Project Status Badge */}
          <div className="site-project-badges">
            <span className={`site-project-status site-project-status--${projectData.status}`}>
              {projectData.status.replace('-', ' ')}
            </span>
            {projectData.featured && (
              <span className="site-project-featured">Featured</span>
            )}
          </div>
        </header>

        {/* Project Meta */}
        <section className="site-project-meta">
          <div className="site-project-meta-grid">
            {/* Tech Stack */}
            <div className="site-project-meta-item">
              <h3 className="site-project-meta-label">Tech Stack</h3>
              <div className="site-project-tech-stack">
                {projectData.techStack.map((tech) => (
                  <span key={tech} className="site-project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="site-project-meta-item">
              <h3 className="site-project-meta-label">Links</h3>
              <div className="site-project-links">
                {projectData.demoUrl && (
                  <Link
                    href={`/projects/${projectData.id}/demo`}
                    className="site-project-link site-project-link--demo"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    Live Demo
                  </Link>
                )}

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
                    View Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="site-project-content">
          <MDXRemote {...projectData.mdxSource} components={components} />
        </section>
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

export const getStaticProps: GetStaticProps<ProjectProps, { projectName: string }> = async ({ params }) => {
  const projectData = await getProjectData(params!.projectName)
  const mdxSource = await serialize(projectData.content)

  return {
    props: {
      projectData: {
        ...projectData,
        mdxSource
      }
    }
  }
}