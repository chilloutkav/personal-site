import type { Metadata } from "next";
import ResultsGrid from "@/components/ResultsGrid";
import ContactSection from "@/components/ContactSection";
import { getAllResults } from "@/lib/results";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Real results from product management, growth marketing, and ecommerce work by Kaven Kim.",
};

export default function ResultsPage() {
  const studies = getAllResults();

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-4 md:px-8 md:pt-20 lg:px-10">
        <p className="font-[family-name:var(--font-heading)] text-[14px] uppercase tracking-[0.25em] text-[var(--muted)]">
          Case Studies
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight text-[var(--text)]">
          How I&apos;ve Helped
        </h1>
        <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[var(--muted)]">
          A selection of results across product management, growth marketing, and
          ecommerce operations. Each engagement is different — here&apos;s what
          the outcomes looked like.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-16 md:px-8 md:pb-20 lg:px-10">
        <ResultsGrid studies={studies} />
      </section>

      <section className="border-t-2 border-dashed border-[var(--border-light)]">
        <ContactSection variant="compact" />
      </section>
    </>
  );
}
