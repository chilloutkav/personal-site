import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const name = "Kav";
export const siteTitle = "Kaven Kim | Product Manager";

interface LayoutProps {
  children: ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
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
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="site-border-circle"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="site-heading-2xl">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="site-border-circle"
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className="site-heading-lg">
              <Link href="/" className="site-color-inherit">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="site-back-to-home">
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}