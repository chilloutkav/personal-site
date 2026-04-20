import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import BottomPrompt from "@/components/BottomPrompt";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email, LinkedIn, or Upwork. Kav replies inside a day on weekdays.",
};

export default function ContactPage() {
  return (
    <section>
      <PageHeader path="~" cmd="./contact.sh" title="Get in touch" />
      <div
        className="about-body"
        style={{ marginBottom: 20, maxWidth: "62ch" }}
      >
        <p>
          Fastest route:{" "}
          <a href="mailto:hi@kavenkim.com">hi@kavenkim.com</a>. I read every one
          and respond inside a day on weekdays. Otherwise, compose below. It
          routes to the same inbox.
        </p>
      </div>

      <ContactSection />

      <div className="sysinfo">
        <span className="k">email</span>
        <span className="v">
          <a href="mailto:hi@kavenkim.com">hi@kavenkim.com</a>
        </span>
        <span className="k">linkedin</span>
        <span className="v">
          <a
            href="https://www.linkedin.com/in/kavenkim/"
            target="_blank"
            rel="noopener"
          >
            /in/kavenkim ↗
          </a>
        </span>
        <span className="k">upwork</span>
        <span className="v">top rated · $100K+ earned · fastest reply here</span>
        <span className="k">response</span>
        <span className="v">&lt; 24h on weekdays</span>
      </div>

      <BottomPrompt path="~/contact" />
    </section>
  );
}
