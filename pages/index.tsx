import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="site-heading-md">
        <p>Hello! I'm Kaven!</p>

        <p>
          A Product Manager who bridges technical execution and business growth.
        </p>
        
        <p>
          I bridge the gap between marketing and technology, creating efficient,
          scalable digital workflows that drive measurable results — from
          campaign strategy to AI-powered automation.
        </p>
      </section>
    </Layout>
  );
}