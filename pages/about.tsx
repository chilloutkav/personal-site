import Layout from "../components/layout";
import SEOHead from "../components/seo/SEOHead";

export default function About() {
  return (
    <Layout>
      <SEOHead
        title="About"
        description="Product Manager with 7+ years in growth marketing. Cut client acquisition costs 50%, learned software engineering at Flatiron School, now experimenting with AI automation tools. Customer-focused PM who understands what actually drives growth."
        path="/about"
      />
      
      {/* Hero Section */}
      <section className="site-about-section animate-fade-in-up">
        <h1 className="site-heading-2xl">Hey, I'm Kaven</h1>
        <div className="site-heading-md">
          <p>
            I'm a Product Manager who spent the last 7+ years in growth marketing. Most product people focus on building features. I focused on building things that help businesses grow, which probably comes from all those years stressing about ad spend and conversion rates.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="site-about-section animate-fade-in-up animation-delay-100">
        <div className="site-heading-md">
          <p>
            My path here wasn't typical. I started managing PPC campaigns, helping companies acquire customers or increase sales while squeezing the most performance out of their budget. When you spend years watching every dollar of ad spend, you learn what works versus what just sounds good in meetings.
          </p>
          <p>
            I've cut client acquisition costs by 50% before. I rebuilt websites that were embarrassingly outdated. But honestly, my favorite part was never the campaigns themselves; it was building the systems that made everything run smoother.
          </p>
          <p>
            Product management felt inevitable once I realized that. Understanding funnels, talking to customers, caring way too much about metrics—turns out that's exactly what good PMs do.
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="site-about-section animate-fade-in-up animation-delay-200">
        <div className="site-heading-md">
          <p>
            Marketing taught me to think like a customer, but I kept wanting to understand how things actually got built. How systems talk to each other. How you turn good ideas into something real that people can use.
          </p>
          <p>
            So I went to Flatiron School to learn Software Engineering. Now everything makes sense. I understand how customers find products because I lived in that world. I can dig into analytics without getting lost. And I've gotten better at hearing what customers actually need, not just what they think they want.
          </p>
          <p>
            I'm not trying to be a developer—I just like knowing how things work under the hood. These days I'm experimenting with AI tools like Claude Code and n8n. I'm building automation projects. I'm trying to figure out how businesses can work more efficiently without everything feeling robotic.
          </p>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="site-about-section animate-fade-in-up animation-delay-300">
        <div className="site-heading-md">
          <p>
            AI is changing how fast we can build products. Join my adventures to see where I test these tools and see where it can take us.
          </p>
        </div>
      </section>
    </Layout>
  );
}