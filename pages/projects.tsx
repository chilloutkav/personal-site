import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Projects() {
  return (
    <Layout>
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
          Technical projects and experiments.
        </p>
      </section>

      <section className="site-project-content">
        <div className="site-project-placeholder">
          <p>Featured projects coming soon...</p>
          <p className="site-light-text">
            Check back soon to see what I'm building.
          </p>
        </div>
      </section>
    </Layout>
  );
}