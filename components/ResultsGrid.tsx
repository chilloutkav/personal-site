"use client";

import type { CaseStudy } from "@/lib/results";
import ResultCard from "./ResultCard";
import ScrollReveal from "./ScrollReveal";

export default function ResultsGrid({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
      {studies.map((study, i) => (
        <ScrollReveal key={study.id} delay={i * 120}>
          <ResultCard study={study} index={i} />
        </ScrollReveal>
      ))}
    </div>
  );
}
