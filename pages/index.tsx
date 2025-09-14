import Head from "next/head";
import Image from "next/image";
// import Link from "next/link"; // Temporarily unused - for Selected Works
import Layout, { siteTitle } from "../components/layout";
import { ProcessedRepository, fetchGitHubRepositories } from "../lib/github";

interface HomeProps {
  repositories: ProcessedRepository[]
  githubUsername: string
}

export default function Home({ repositories, githubUsername }: HomeProps) {
  // Get the first 6 repositories for selected works - temporarily unused
  // const selectedRepos = repositories.slice(0, 6);

  // Suppress unused warning - repositories kept for when Selected Works is restored
  void repositories;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta 
          name="description" 
          content="Kaven Kim - Product Manager who builds growth-driven products. 7+ years in marketing, software engineering background, showcasing selected works and automation projects. Combining marketing insights with hands-on development."
        />
        <meta property="og:description" content="Product Manager combining marketing expertise with technical skills. Showcasing selected works and growth-focused product development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kavenkim.com" />
        <meta name="twitter:description" content="Product Manager who builds growth-driven products. Marketing expertise + software engineering background." />
        <meta name="keywords" content="Product Manager, Growth Marketing, Software Engineering, Product Development, Marketing Analytics, Automation" />
      </Head>

      {/* Hero Section */}
      <section className="site-hero">
        <Image
          priority
          src="/images/profile.jpg"
          className="site-hero-image"
          height={96}
          width={96}
          alt="Kaven Kim"
        />
        <div className="site-hero-content">
          <h1 className="site-hero-title">Hey, I'm Kaven!</h1>
          <p className="site-hero-subtitle">
            A <span className="site-highlight">Product Manager</span> Who Builds Products That Help Businesses Grow.
          </p>
          
          {/* Social Media Icons */}
          <div className="site-social-icons">
            <a href="https://linkedin.com/in/kavenkim" className="site-social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={`https://github.com/${githubUsername}`} className="site-social-icon" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Selected Works Section - Temporarily Hidden */}
      {/*
      <section className="site-selected-works">
        <div className="site-selected-works-header">
          <h2 className="site-selected-works-title">Selected Works.</h2>
          <Link href="/projects" className="site-selected-works-link">
            See All Projects →
          </Link>
        </div>

        <div className="site-portfolio-grid">
          {selectedRepos.map((repo) => (
            <div key={repo.id} className="site-portfolio-card">
              <div className="site-portfolio-image">
                Project Preview
              </div>
              <div className="site-portfolio-content">
                <h3 className="site-portfolio-title">{repo.name}</h3>
                <div className="site-portfolio-tags">
                  {repo.primaryLanguage && (
                    <span className="site-portfolio-tag">{repo.primaryLanguage}</span>
                  )}
                  {repo.topics.slice(0, 2).map((topic) => (
                    <span key={topic} className="site-portfolio-tag">{topic}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* About Section */}
      <section className="site-about">
        <p className="site-about-text">
          I combine marketing insights with hands-on building to create solutions that actually drive real growth.
        </p>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="site-footer-connect">
          Let's Connect 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </footer>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const repositories = await fetchGitHubRepositories();
    const githubUsername = process.env.GITHUB_USERNAME!;

    return {
      props: {
        repositories,
        githubUsername
      },
      revalidate: 300 // 5 minutes
    };
  } catch (error) {
    console.error('Error fetching repositories:', error);
    
    return {
      props: {
        repositories: []
      },
      revalidate: 300
    };
  }
}