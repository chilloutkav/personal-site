import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BottomPrompt from "@/components/BottomPrompt";
import ResultsGrid from "@/components/ResultsGrid";
import { getAllResults } from "@/lib/results";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies across product, growth marketing, ecommerce, and AI-driven building.",
};

export default function ResultsPage() {
  const studies = getAllResults();

  return (
    <section>
      <PageHeader
        path="~/work"
        cmd="ls receipts/ --sort=impact"
        title="Receipts"
        subtitle={`Product. Growth. Ecommerce. Building. ${studies.length} receipts, clients under NDA, metrics verified.`}
        divider
      />

      <ResultsGrid studies={studies} detailed />

      <BottomPrompt path="~/work" />
    </section>
  );
}
