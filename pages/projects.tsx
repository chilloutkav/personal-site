import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedProjectsData, ProjectData } from "../lib/projects";
import Link from "next/link";
import { GetStaticProps } from "next";

interface ProjectsProps {
  allProjectsData: ProjectData[];
}

export default function Projects({ allProjectsData }: ProjectsProps) {
  return (
    <Layout wide>
      <Head>
        <title>{`Projects - ${siteTitle}`}</title>
        <meta
          name="description"
          content="Explore my technical projects and GitHub repositories"
        />
      </Head>

      <section>
        <h1 className="site-heading-2xl">Projects</h1>
        <p className="site-heading-md">
          Technical projects showcasing product thinking and implementation.
        </p>
      </section>

      <section className="site-project-content">
        <div className="site-project-grid">
          {allProjectsData.map((project) => (
            <div key={project.id} className="site-project-card">
              <div className="site-project-card-image">
                {project.previewImage ? (
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Preview Coming Soon</span>
                )}
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h2 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h2>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="site-project-tech-stack mb-4">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="site-project-tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="site-project-tech-tag">
                      +{project.techStack.length - 5} more
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <span
                    className={`site-project-status site-project-status--${project.status}`}
                  >
                    {project.status === "in-development"
                      ? "In Development"
                      : project.status.charAt(0).toUpperCase() +
                        project.status.slice(1)}
                  </span>
                </div>

                <div className="site-project-card-actions">
                  <Link
                    href={`/projects/${project.id}`}
                    className="site-project-button-primary"
                  >
                    View Project
                  </Link>
                  {project.demoUrl && (
                    <Link
                      href={`/projects/${project.id}/demo`}
                      className="site-project-button-secondary"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
};
