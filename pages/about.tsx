import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{`About - ${siteTitle}`}</title>
        <meta 
          name="description" 
          content="Learn about Kaven Kim's journey from growth marketing to product management, bridging technical execution and business growth."
        />
      </Head>
      
      {/* Hero Section */}
      <section>
        <h1 className="site-heading-2xl">Hey, I&apos;m Kaven</h1>
        <p className="site-about-text">
          I&apos;m a Product Manager who&apos;s spent the last 7+ years in growth marketing, and honestly, it&apos;s made me a different kind of PM. While most product people focus on building features, I care about building things that actually help businesses grow.
        </p>
      </section>

      {/* Background Section */}
      <section>
        <div className="site-heading-md">
          <p>
            My path to product management was pretty different. I started out managing PPC campaigns and helping companies acquire customers without spending too much money. Turns out, when you spend years optimizing ad spend and conversion rates, you learn what actually works vs. what just sounds good in meetings.
          </p>
          <p>
            I&apos;ve done everything from reducing client acquisition costs by 50% to rebuilding websites that looked like they were from 2010. Along the way, I realized my favorite part wasn&apos;t just running campaigns - it was building the systems that made everything work better.
          </p>
          <p>
            So I made the jump to product management, and it felt right. All those years of understanding funnels, talking to customers, and caring about metrics? That&apos;s exactly what good product management is.
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section>
        <div className="site-heading-md">
          <p>
            Years of marketing taught me to think from the customer&apos;s perspective and understand what actually drives growth. But I kept wanting to know more about the technical side - how products are built, how systems work together, and how to implement the ideas I had. That curiosity led me to coding bootcamp and eventually to product management.
          </p>
          <p>
            Now it&apos;s all come together. I understand how customers find and use products because I&apos;ve spent years in that world. I&apos;m comfortable diving into analytics and talking to customers without pushing them toward the answers I want. And I can tell the difference between what people say they want and what they actually need.
          </p>
          <p>
            The technical foundation I&apos;ve built means I can work closely with engineering teams and actually implement solutions, not just strategy.
          </p>
          <p>
            I also went through a coding bootcamp (shoutout to Flatiron School) and I&apos;m playing around with AI tools like Claude Code and n8n. I&apos;m not trying to be an engineer, but I like knowing how things work.
          </p>
        </div>
      </section>

      {/* Current Work Section */}
      <section>
        <p className="site-about-text">
          Right now, I&apos;m excited about how AI can make product development faster and better. I&apos;m building small automation projects and trying to figure out how teams can work better without losing the personal touch.
        </p>
      </section>
    </Layout>
  );
}