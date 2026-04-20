import type { CaseStudy } from "@/lib/results";
import { sparklineColor } from "@/lib/results";

export interface ResultCardProps {
  study: CaseStudy;
  /** When true, renders full problem/action/result narrative. Otherwise, headline + blurb only. */
  detailed?: boolean;
}

export default function ResultCard({ study, detailed = false }: ResultCardProps) {
  return (
    <article className="receipt">
      <div className="r-head">
        <span className="id">[{study.receiptId}]</span>
        <span>{study.category}</span>
      </div>
      <h3>{study.headline}</h3>
      <p>{study.blurb}</p>
      <div className="r-chart">
        <div
          className="ascii-sparkline"
          style={{ color: sparklineColor(study.sparklineTone) }}
          aria-hidden="true"
        >
          {study.sparkline}
        </div>
        <div className="val">
          {study.metric}
          <small>{study.metricLabel}</small>
        </div>
      </div>
      {detailed ? (
        <div className="r-body">
          <div className="r-section">
            <span className="k">challenge</span>
            <p>{study.problem}</p>
          </div>
          <div className="r-section">
            <span className="k">approach</span>
            <p>{study.action}</p>
          </div>
          <div className="r-section">
            <span className="k">outcome</span>
            <p>{study.result}</p>
          </div>
        </div>
      ) : null}
    </article>
  );
}
