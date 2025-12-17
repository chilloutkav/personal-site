import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const name = "Kav";
export const siteTitle = "Kaven Kim | Product Manager";

interface LayoutProps {
  children: ReactNode;
  home?: boolean;
  wide?: boolean;
}

export default function Layout({ children, home, wide }: LayoutProps) {
  const router = useRouter();

  return (
    <div className={wide ? "site-container site-container--wide" : "site-container"}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Kaven Kim" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px`}
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