export type SparklineTone = "accent" | "amber" | "magenta" | "cyan";

export interface CaseStudy {
  id: string;
  receiptId: string;
  /** Short meta line shown in receipt header: "DTC streetwear · paid media · +6mo". */
  category: string;
  /** Tight h3 shown on homepage + top of full case study. */
  headline: string;
  /** One-sentence summary. Shown on homepage under the headline. */
  blurb: string;
  /** Longer narrative blocks, shown only on the full /results page. */
  problem: string;
  action: string;
  result: string;
  metric: string;
  metricLabel: string;
  sparkline: string;
  sparklineTone: SparklineTone;
  featured: boolean;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "dtc-roas",
    receiptId: "01",
    category: "DTC streetwear · paid media · +6mo",
    headline: "Sub-2\u00D7 ROAS to 8\u00D7 in six months",
    blurb:
      "New creative cadence, cleaner audience segments, actual attribution. Spend doubled after.",
    problem:
      "Paid media was burning cash with a sub-2X return on ad spend. The creative was stale, targeting was broad, and there was no measurement framework to guide decisions.",
    action:
      "Rebuilt the paid media program from scratch. New creative testing framework, audience segmentation strategy, and a full-funnel attribution model tied to actual revenue.",
    result:
      "Scaled from 2X to 8X ROAS within 6 months while increasing total spend. The brand went from questioning paid media to making it their primary growth channel.",
    metric: "8\u00D7",
    metricLabel: "ROAS",
    sparkline: "\u2581\u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589",
    sparklineTone: "accent",
    featured: true,
  },
  {
    id: "ecom-conversion",
    receiptId: "02",
    category: "Premium denim · shopify cro · +90d",
    headline: "CVR from 0.5% to 2.5% in 90 days",
    blurb:
      "Redesigned PDP, shortened checkout, added post-purchase flows. AOV up 22% on the side.",
    problem:
      "The Shopify storefront had a conversion rate under 0.5%. Product pages were confusing, checkout was leaky, and there was zero post-purchase experience.",
    action:
      "Led a full CRO overhaul. Redesigned product pages with clearer value props, streamlined checkout to 2 steps, and built automated post-purchase email flows.",
    result:
      "Conversion rate jumped to 2.5% within 90 days, a 400% improvement. Average order value also increased 22% from better cross-sell placement.",
    metric: "+400%",
    metricLabel: "CVR",
    sparkline: "\u2581\u2581\u2581\u2582\u2583\u2585\u2586\u2587\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589",
    sparklineTone: "amber",
    featured: true,
  },
  {
    id: "saas-cac",
    receiptId: "03",
    category: "Series B SaaS · CAC project · +4mo",
    headline: "CAC halved, trial-to-paid tripled",
    blurb:
      "Rewired onboarding around activation milestones. Usage-based lead scoring built from product data.",
    problem:
      "Customer acquisition cost was unsustainable at scale. The product-led growth motion wasn't converting free users, and the sales team was chasing unqualified leads.",
    action:
      "Redesigned the onboarding flow with activation milestones, built a lead scoring model based on product usage signals, and aligned sales outreach to high-intent users.",
    result:
      "Cut CAC by 50% while increasing trial-to-paid conversion. Sales pipeline quality improved dramatically. Reps were closing faster with fewer touches.",
    metric: "\u221250%",
    metricLabel: "CAC",
    sparkline: "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2587\u2586\u2585\u2583\u2582\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
    sparklineTone: "magenta",
    featured: true,
  },
  {
    id: "shopify-rebuild",
    receiptId: "06",
    category: "Streetwear denim · shopify 2.0 · +12mo",
    headline: "$800K to $2M+ ARR after a Shopify 2.0 rebuild",
    blurb:
      "Custom theme, consolidated apps, mobile-first checkout. Ops team stopped needing a developer for every change.",
    problem:
      "The brand was stuck on an outdated Shopify theme with poor mobile performance, slow load times, and a fragmented tech stack that made updates painful.",
    action:
      "Led the migration to Shopify 2.0 with a custom theme, consolidated apps, implemented proper inventory management, and built a mobile-first checkout experience.",
    result:
      "Revenue grew from $800K to over $2M annually. Mobile conversion rate doubled, and the ops team could finally manage the store without developer support.",
    metric: "$2M+",
    metricLabel: "annual revenue",
    sparkline: "\u2581\u2582\u2583\u2584\u2585\u2585\u2586\u2586\u2587\u2587\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589",
    sparklineTone: "cyan",
    featured: false,
  },
  {
    id: "ppc-scale",
    receiptId: "04",
    category: "Industrial supplier · PPC scale · +8mo",
    headline: "$5K/mo to $80K/mo with CPL down 40%",
    blurb:
      "From one broad campaign to proper structure. Volume went up 16\u00D7 while cost-per-lead dropped.",
    problem:
      "The company was spending $5K/month on Google Ads with no structure. One campaign, broad match everything, no conversion tracking, and zero visibility into what was working.",
    action:
      "Built a proper account architecture with SKAGs, implemented offline conversion tracking tied to their CRM, and developed a keyword expansion strategy based on search term data.",
    result:
      "Scaled spend from $5K to $80K/month profitably over 12 months. Cost per qualified lead dropped 40% even as volume increased 16X.",
    metric: "16\u00D7",
    metricLabel: "spend scaled",
    sparkline: "\u2581\u2582\u2582\u2583\u2584\u2585\u2586\u2587\u2587\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2589",
    sparklineTone: "cyan",
    featured: true,
  },
  {
    id: "parts-catalog-pipeline",
    receiptId: "05",
    category: "Parts distributor · AI pipeline · +3 days",
    headline: "23,079 verified products, campaign live in three days",
    blurb:
      "Replaced 80K hallucinated listings with real ones via Python, a distributor API, and guardrails. CPL went from $200 to $17.",
    problem:
      "An 80,000-listing product catalog was AI-generated junk. Fabricated part numbers, missing manufacturers, no real specs. The sales team was fielding RFQs on parts that didn't exist.",
    action:
      "Built a Python pipeline that authenticates against a major distributor API, batch-enriches and deduplicates by real MPN, and exports verified Shopify-ready CSVs. Then built a 23,079-ad-group Google Ads campaign with AI-generated copy per product.",
    result:
      "Replaced the junk catalog with 23,079 verified products across 63 manufacturers. Campaign went live in 3 days, not the weeks a manual build would have taken. Cost per lead dropped from $200 to $17.",
    metric: "$200\u2192$17",
    metricLabel: "per lead",
    sparkline: "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2587\u2585\u2583\u2582\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
    sparklineTone: "accent",
    featured: true,
  },
];

export function getFeaturedResults(): CaseStudy[] {
  return CASE_STUDIES.filter((study) => study.featured);
}

export function getAllResults(): CaseStudy[] {
  return CASE_STUDIES;
}

export function sparklineColor(tone: SparklineTone): string {
  switch (tone) {
    case "amber":
      return "var(--amber)";
    case "magenta":
      return "var(--magenta)";
    case "cyan":
      return "var(--cyan)";
    case "accent":
    default:
      return "var(--accent)";
  }
}
