import Head from "next/head";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "../components/layout";
import { fetchGitHubRepositories, ProcessedRepository } from "../lib/github";

interface ProjectsProps {
  repositories: ProcessedRepository[];
  error?: string;
}

export default function Projects({ repositories, error }: ProjectsProps) {
  if (error) {
    return (
      <Layout>
        <Head>
          <title>{`Projects - ${siteTitle}`}</title>
          <meta 
            name="description" 
            content="Explore my GitHub projects"
          />
        </Head>
        <section>
          <h1 className="site-heading-2xl">Projects</h1>
          <div className="site-project-error">
            <p>Unable to load projects at this time.</p>
            <p className="site-light-text">{error}</p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{`Projects - ${siteTitle}`}</title>
        <meta 
          name="description" 
          content="Explore my GitHub projects"
        />
      </Head>
      
      <section>
        <h1 className="site-heading-2xl">Projects</h1>
        <p className="site-heading-md">
          A collection of projects.
        </p>
        
        <div className="site-project-stats">
          <span className="site-light-text">
            {repositories.length} public repositories
          </span>
        </div>
      </section>

      <section className="site-project-grid">
        {repositories.map((repo) => (
          <article key={repo.id} className="site-project-card">
            <div className="site-project-header">
              <h2 className="site-project-title">
                <a 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="site-project-link"
                >
                  {repo.name}
                </a>
              </h2>
            </div>

            {repo.description && (
              <p className="site-project-description">{repo.description}</p>
            )}

            {repo.primaryLanguage && (
              <div className="site-project-meta">
                <span className="site-project-language">
                  {repo.primaryLanguage}
                </span>
              </div>
            )}
          </article>
        ))}
      </section>

      {repositories.length === 0 && !error && (
        <section className="site-project-empty">
          <p>No public repositories found.</p>
        </section>
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  try {
    const repositories = await fetchGitHubRepositories();
    
    return {
      props: {
        repositories,
      },
      // Regenerate the page every 5 minutes (300 seconds)
      revalidate: 300,
    };
  } catch (error) {
    console.error('Failed to fetch repositories:', error);
    
    return {
      props: {
        repositories: [],
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      // Retry after 1 minute on error
      revalidate: 60,
    };
  }
};