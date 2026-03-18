import type { CaseStudy } from "@/lib/results";

interface ResultCardProps {
  study: CaseStudy;
  index?: number;
}

export default function ResultCard({ study }: ResultCardProps) {
  return (
    <article className="group flex h-full flex-col border-2 border-dashed border-[var(--border-light)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border)] md:p-8">
      {/* Discipline + Client */}
      <p className="font-[family-name:var(--font-heading)] text-[14px] uppercase tracking-[0.2em] text-[var(--text)]">
        {study.discipline}
      </p>
      <p className="mt-1 text-[14px] italic text-[var(--muted)]">
        {study.clientDescriptor}
      </p>

      {/* Metric — periwinkle accent pop */}
      <div className="mt-6">
        <p className={`font-[family-name:var(--font-heading)] leading-none tracking-tight text-[var(--accent)] ${study.metric.length > 5 ? 'text-[clamp(2rem,4vw,3rem)]' : 'text-[clamp(3rem,6vw,4.5rem)]'}`}>
          {study.metric}
        </p>
        <p className="mt-1 text-[13px] tracking-wide text-[var(--muted)]">
          {study.metricLabel}
        </p>
      </div>

      {/* Dashed divider */}
      <div className="my-6 border-t-2 border-dashed border-[var(--border-light)]" />

      {/* Narrative */}
      <div className="flex-1 space-y-5">
        <div>
          <p className="mb-1.5 font-[family-name:var(--font-heading)] text-[12px] uppercase tracking-[0.2em] text-[var(--muted)]">
            The Challenge
          </p>
          <p className="text-[14px] leading-relaxed text-[var(--text)]">
            {study.problem}
          </p>
        </div>
        <div>
          <p className="mb-1.5 font-[family-name:var(--font-heading)] text-[12px] uppercase tracking-[0.2em] text-[var(--muted)]">
            The Approach
          </p>
          <p className="text-[14px] leading-relaxed text-[var(--text)]">
            {study.action}
          </p>
        </div>
        <div>
          <p className="mb-1.5 font-[family-name:var(--font-heading)] text-[12px] uppercase tracking-[0.2em] text-[var(--muted)]">
            The Outcome
          </p>
          <p className="text-[14px] leading-relaxed text-[var(--text)]">
            {study.result}
          </p>
        </div>
      </div>
    </article>
  );
}
