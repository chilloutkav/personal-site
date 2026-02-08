export interface CaseStudy {
  id: string;
  discipline: "Product Management" | "Growth Marketing" | "Ecommerce";
  clientDescriptor: string;
  problem: string;
  action: string;
  result: string;
  metric: string;
  metricLabel: string;
  featured: boolean;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "dtc-roas",
    discipline: "Growth Marketing",
    clientDescriptor: "A DTC Home Goods Brand",
    problem:
      "Paid media was burning cash with a sub-2X return on ad spend. The creative was stale, targeting was broad, and there was no measurement framework to guide decisions.",
    action:
      "Rebuilt the paid media program from scratch — new creative testing framework, audience segmentation strategy, and a full-funnel attribution model tied to actual revenue.",
    result:
      "Scaled from 2X to 8X ROAS within 6 months while increasing total spend. The brand went from questioning paid media to making it their primary growth channel.",
    metric: "8X",
    metricLabel: "Return on Ad Spend",
    featured: true,
  },
  {
    id: "ecom-conversion",
    discipline: "Ecommerce",
    clientDescriptor: "A Premium Art & Framing Company",
    problem:
      "The Shopify storefront had a conversion rate under 0.5%. Product pages were confusing, checkout was leaky, and there was zero post-purchase experience.",
    action:
      "Led a full CRO overhaul — redesigned product pages with clearer value props, streamlined checkout to 2 steps, and built automated post-purchase email flows.",
    result:
      "Conversion rate jumped to 2.5% within 90 days — a 400% improvement. Average order value also increased 22% from better cross-sell placement.",
    metric: "400%",
    metricLabel: "Conversion Rate Lift",
    featured: true,
  },
  {
    id: "saas-cac",
    discipline: "Product Management",
    clientDescriptor: "A High-Growth SaaS Startup",
    problem:
      "Customer acquisition cost was unsustainable at scale. The product-led growth motion wasn't converting free users, and the sales team was chasing unqualified leads.",
    action:
      "Redesigned the onboarding flow with activation milestones, built a lead scoring model based on product usage signals, and aligned sales outreach to high-intent users.",
    result:
      "Cut CAC by 50% while increasing trial-to-paid conversion. Sales pipeline quality improved dramatically — reps were closing faster with fewer touches.",
    metric: "50%",
    metricLabel: "CAC Reduction",
    featured: true,
  },
  {
    id: "shopify-rebuild",
    discipline: "Ecommerce",
    clientDescriptor: "A Lifestyle Apparel Brand",
    problem:
      "The brand was stuck on an outdated Shopify theme with poor mobile performance, slow load times, and a fragmented tech stack that made updates painful.",
    action:
      "Led the migration to Shopify 2.0 with a custom theme, consolidated apps, implemented proper inventory management, and built a mobile-first checkout experience.",
    result:
      "Revenue grew from $800K to over $2M annually. Mobile conversion rate doubled, and the ops team could finally manage the store without developer support.",
    metric: "$2M+",
    metricLabel: "Annual Revenue",
    featured: false,
  },
  {
    id: "ppc-scale",
    discipline: "Growth Marketing",
    clientDescriptor: "A B2B Industrial Supplier",
    problem:
      "The company was spending $5K/month on Google Ads with no structure — one campaign, broad match everything, no conversion tracking, and zero visibility into what was working.",
    action:
      "Built a proper account architecture with SKAGs, implemented offline conversion tracking tied to their CRM, and developed a keyword expansion strategy based on search term data.",
    result:
      "Scaled spend from $5K to $80K/month profitably over 12 months. Cost per qualified lead dropped 40% even as volume increased 16X.",
    metric: "$5K→$80K",
    metricLabel: "Monthly Ad Spend Scaled",
    featured: false,
  },
];

export function getFeaturedResults(): CaseStudy[] {
  return CASE_STUDIES.filter((study) => study.featured);
}

export function getAllResults(): CaseStudy[] {
  return CASE_STUDIES;
}
