import Layout from "../components/layout";
import { getSortedProjectsData, ProjectData } from "../lib/projects";
import SEOHead from "../components/seo/SEOHead";
import ProjectCard from "../components/ProjectCard";
import { GetStaticProps } from "next";

interface ProjectsProps {
  allProjectsData: ProjectData[];
}

export default function Projects({ allProjectsData }: ProjectsProps) {
  return (
    <Layout wide>
      <SEOHead
        title="Projects"
        description="Explore my technical projects and GitHub repositories"
        path="/projects"
      />

      <section>
        <h1 className="site-heading-2xl animate-fade-in-up">Projects</h1>
        <p className="site-heading-md animate-fade-in-up animation-delay-100">
          Technical projects showcasing product thinking and implementation.
        </p>
      </section>

      <section className="site-project-content">
        <div className="site-project-grid">
          {allProjectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              animationIndex={index + 2}
            />
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
