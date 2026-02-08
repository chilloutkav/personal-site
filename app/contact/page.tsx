import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kaven Kim for product, growth, or ecommerce work.",
};

export default function ContactPage() {
  return <ContactSection variant="full" id="contact" />;
}
