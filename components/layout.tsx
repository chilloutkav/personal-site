import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const name = "Kav";
export const siteTitle = "Kaven Kim | Product Manager";

interface LayoutProps {
  children: ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
  const router = useRouter();
  
  return (
    <div className="site-container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Kav's Personal Site"
          content="My personal site highlighting some of my current interests"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <header className="site-header">
        {!home && (
          <h2 className="site-heading-lg">{name}</h2>
        )}
      </header>
      
      <nav className="site-nav">
        <Link 
          href="/" 
          className={`site-nav-link ${router.pathname === '/' ? 'site-nav-link--active' : ''}`}
        >
          Home
        </Link>
        <Link 
          href="/projects" 
          className={`site-nav-link ${router.pathname === '/projects' ? 'site-nav-link--active' : ''}`}
        >
          Projects
        </Link>
        <Link 
          href="/about" 
          className={`site-nav-link ${router.pathname === '/about' ? 'site-nav-link--active' : ''}`}
        >
          About
        </Link>
      </nav>
      
      <main>{children}</main>
    </div>
  );
}