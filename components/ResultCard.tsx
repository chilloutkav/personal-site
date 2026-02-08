import type { CaseStudy } from "@/lib/results";

interface ResultCardProps {
  study: CaseStudy;
  index?: number;
}

export default function ResultCard({ study }: ResultCardProps) {
  return (
    <article className="group rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
      {/* Discipline + Client */}
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
        {study.discipline}
      </p>
      <p className="mt-1 text-[14px] italic text-[var(--muted)]">
        {study.clientDescriptor}
      </p>

      {/* Metric */}
      <div className="mt-6">
        <p className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none tracking-tight text-[var(--text)]">
          {study.metric}
        </p>
        <p className="mt-1 text-[13px] tracking-wide text-[var(--muted)]">
          {study.metricLabel}
        </p>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-[var(--border)]" />

      {/* Narrative */}
      <div className="space-y-5">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            The Challenge
          </p>
          <p className="text-[14px] leading-relaxed text-[var(--text)]">
            {study.problem}
          </p>
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            The Approach
          </p>
          <p className="text-[14px] leading-relaxed text-[var(--text)]">
            {study.action}
          </p>
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
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
