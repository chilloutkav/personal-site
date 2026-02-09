export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  discipline: "Product Management" | "Growth Marketing" | "Ecommerce";
  featured: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "wilbur-labs",
    quote:
      "It was a great pleasure working with Kaven. Not only he delivered great quality product, but also helped us find additional human resources on a short notice. Having someone you can rely one and trust that the job will be done on time and with outstanding quality is incredibly important with dealing with a high-growth start up. Ready to hire him for another project.",
    author: "Wilbur Labs",
    role: "Search Engine Marketing",
    company: "Wilbur Labs",
    discipline: "Growth Marketing",
    featured: true,
  },
  {
    id: "akkadia-project",
    quote:
      "Kaven is an exceptionally talented and wonderful SEM / PPC Manager. I have nothing but the highest regard for him and the quality of his work.",
    author: "Akkadia Project",
    role: "Paid Ads & PPC Management",
    company: "Akkadia Project",
    discipline: "Growth Marketing",
    featured: false,
  },
  {
    id: "meyers-printing",
    quote:
      "Kaven really helped us rebuild and improve our Google Ads account! He was very responsive, easy to work with, and met all of our expectations. I would definitely recommend him!",
    author: "Meyers Printing",
    role: "Paid Media Setup & Optimization",
    company: "Meyers Printing",
    discipline: "Growth Marketing",
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
