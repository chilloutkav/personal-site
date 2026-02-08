"use client";

import type { CaseStudy } from "@/lib/results";
import ResultCard from "./ResultCard";
import ScrollReveal from "./ScrollReveal";

export default function HomepageResults({
  studies,
}: {
  studies: CaseStudy[];
}) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {studies.map((study, i) => (
        <ScrollReveal key={study.id} delay={i * 150}>
          <ResultCard study={study} index={i} />
        </ScrollReveal>
      ))}
    </div>
  );
}
