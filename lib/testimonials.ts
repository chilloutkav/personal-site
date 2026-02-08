export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  discipline: "Product Management" | "Growth Marketing" | "Ecommerce";
  featured: boolean;
}

/* TODO: Review and finalize copy */
const TESTIMONIALS: Testimonial[] = [
  {
    id: "startup-founder",
    quote:
      "Kaven doesn't just manage products — he understands how growth, revenue, and user experience connect. He rebuilt our onboarding flow and cut our CAC in half. Most PMs talk about impact. He actually delivers it.",
    author: "Sarah Chen",
    role: "CEO & Co-Founder",
    company: "A Series B SaaS Startup",
    discipline: "Product Management",
    featured: true,
  },
  {
    id: "dtc-cmo",
    quote:
      "We hired Kaven to fix our paid media. Within 6 months he took our ROAS from 2X to 8X — and he did it while scaling spend, not cutting it. He thinks like a CFO and executes like a performance marketer.",
    author: "Marcus Rivera",
    role: "CMO",
    company: "A DTC Home Goods Brand",
    discipline: "Growth Marketing",
    featured: false,
  },
  {
    id: "ecom-director",
    quote:
      "Kaven transformed our Shopify store from a liability into our best revenue channel. Conversion rate up 400%, AOV up 22%, and our ops team can finally manage everything themselves. He builds things that last.",
    author: "Jamie Okafor",
    role: "Director of Operations",
    company: "A Premium Art & Framing Company",
    discipline: "Ecommerce",
    featured: false,
  },
];

export function getFeaturedTestimonial(): Testimonial | undefined {
  return TESTIMONIALS.find((t) => t.featured);
}

export function getNonFeaturedTestimonials(): Testimonial[] {
  return TESTIMONIALS.filter((t) => !t.featured);
}

export function getAllTestimonials(): Testimonial[] {
  return TESTIMONIALS;
}
