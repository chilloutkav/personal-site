import type { CaseStudy } from "@/lib/results";
import ResultCard from "./ResultCard";

type Props = {
  studies: CaseStudy[];
  /** When true, each card renders the full problem/action/result narrative. */
  detailed?: boolean;
};

export default function ResultsGrid({ studies, detailed = false }: Props) {
  return (
    <div className="receipts">
      {studies.map((study) => (
        <ResultCard key={study.id} study={study} detailed={detailed} />
      ))}
    </div>
  );
}
