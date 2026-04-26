'use client';

import Lanyard from './Lanyard';

const rows = [
  {
    problem: "Ads seem to work - but sales don't grow",
    solution: "We optimize for leads quality, pipeline value, and revenue",
  },
  {
    problem: "Marketing runs without a clear strategy or focus",
    solution: "We start with analysis, then build a focused go-to-market plan",
  },
  {
    problem: "KPI exist, but they're not tied to real business goals",
    solution: "Every metric is connected to growth goals",
  },
  {
    problem: "No clarity on what to scale - and what to turn off",
    solution: "We know what to rebuild - based on analytics, not intuition",
  },
  {
    problem: "Negative experience with agencies in the past",
    solution: "Clear reports, open communication, and ownership of results",
  },
];

export default function B2BProblems() {
  return (
    <section className="problems-section">
      <div className="top-content">
        <h2 className="b2b-title">
          Common B2B<br />
          Marketing Problems We&apos;re<br />
          Brought In to Fix
        </h2>
        <div className="b2b-intro flex items-end">
          <p>
            Our approach is <span className="text-white font-medium">focused</span> on business
            outcomes - not just activity. We start with
            deep analysis, <span className="text-white font-medium">build a clear strategy, launch
            performance</span> channels, and continuously
            optimize decisions <span className="text-white font-medium">based on data</span>.
          </p>
        </div>
      </div>

      {/* Lanyard card is positioned absolutely above the panels */}
      <div className="lanyard-card-container">
        {/* We use the Canvas wrapper internally. A height of 600px gives enough room for the swing */}
        <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
      </div>

      <div className="panels">
        <div className="problem-panel flex flex-col justify-end gap-6 md:gap-4 lg:gap-6">
          <div className="text-[11px] font-bold tracking-widest uppercase opacity-40 mb-2 md:mb-4">
            Problem
          </div>
          {rows.map((row, idx) => (
            <div key={`p-${idx}`} className="font-medium text-sm md:text-base leading-tight truncate">
              {row.problem}
            </div>
          ))}
        </div>
        <div className="solution-panel flex flex-col justify-end text-right gap-6 md:gap-4 lg:gap-6">
          <div className="text-[11px] font-bold tracking-widest uppercase opacity-60 mb-2 md:mb-4">
            Solution
          </div>
          {rows.map((row, idx) => (
            <div key={`s-${idx}`} className="font-medium text-sm md:text-base leading-tight truncate">
              {row.solution}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
