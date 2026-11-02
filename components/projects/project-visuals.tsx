import type { ReactNode } from "react";

import { DottedPattern } from "@/components/ui/dotted-pattern";
import type { ProjectVisualKind } from "@/lib/content";

/**
 * Small, theme-aware illustrations that stand in for screenshots.
 * Everything is deterministic so server and client render identically.
 */

function Frame({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      <DottedPattern className="absolute inset-0 !shadow-none" />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

const PIPELINE_STEPS = [
  "PDF ingestion",
  "OCR",
  "spaCy cleaning",
  "Coreference",
  "Chunking",
  "NER (RoBERTa)",
  "Knowledge graph",
  "NL query",
] as const;

function PipelineVisual(): ReactNode {
  return (
    <Frame>
      <ol className="grid h-full grid-cols-2 content-center gap-x-3 gap-y-2 p-4 sm:p-6">
        {PIPELINE_STEPS.map((step, i) => {
          const last = i === PIPELINE_STEPS.length - 1;
          return (
            <li
              key={step}
              className={`flex items-center gap-2 rounded-xl border px-2.5 py-2 text-[11px] tracking-tight sm:text-[12px] ${
                last
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/10 bg-background text-foreground/80"
              }`}
            >
              <span
                className={`font-mono text-[10px] ${last ? "text-background/60" : "text-foreground/40"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="truncate">{step}</span>
            </li>
          );
        })}
      </ol>
    </Frame>
  );
}

/** Seeded LCG so the scatter is stable across renders. */
function scatter(count: number): Array<[number, number]> {
  let seed = 7;
  const next = (): number => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < count; i++) {
    pts.push([30 + next() * 340, 30 + next() * 240]);
  }
  return pts;
}

const SCATTER = scatter(46);
const SELECTED: ReadonlyArray<readonly [number, number]> = [
  [70, 70],
  [200, 52],
  [335, 92],
  [112, 215],
  [262, 238],
  [350, 200],
];

function DppVisual(): ReactNode {
  return (
    <Frame>
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full text-foreground"
        role="img"
        aria-label="Scatter of candidate prompts with a diverse subset selected"
      >
        {SCATTER.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={3.5}
            fill="currentColor"
            fillOpacity={0.22}
          />
        ))}
        {SELECTED.map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r={13}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.35}
              strokeDasharray="3 3"
            />
            <circle cx={x} cy={y} r={5} fill="currentColor" />
          </g>
        ))}
        <text
          x="20"
          y="288"
          fontSize="11"
          className="font-mono"
          fill="currentColor"
          fillOpacity={0.5}
        >
          diverse, high-quality subset
        </text>
      </svg>
    </Frame>
  );
}

function ReasoningVisual(): ReactNode {
  return (
    <Frame>
      <div className="flex h-full flex-col justify-center gap-2.5 p-4 sm:p-6">
        <div className="self-start rounded-xl border border-foreground/10 bg-background px-3 py-2 text-[12px] tracking-tight text-foreground/80">
          Question
        </div>
        <div className="ml-4 space-y-1.5 border-l border-foreground/15 pl-4">
          <div className="h-2 w-4/5 rounded-full bg-foreground/10" />
          <div className="h-2 w-3/5 rounded-full bg-foreground/10" />
        </div>
        <div className="ml-4 self-start rounded-xl border border-foreground/15 bg-foreground/5 px-3 py-2 font-mono text-[11px] text-foreground">
          wait, let me re-check this step
        </div>
        <div className="ml-4 space-y-1.5 border-l border-foreground/15 pl-4">
          <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
        </div>
        <div className="self-start rounded-xl bg-foreground px-3 py-2 text-[12px] tracking-tight text-background">
          Answer
        </div>
      </div>
    </Frame>
  );
}

const ANNEAL_PATH = ((): { line: string; points: Array<[number, number]> } => {
  const points: Array<[number, number]> = [];
  const n = 60;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = 24 + t * 352;
    // Score climbs as the search cools; early moves are noisy (exploration).
    const trend = 250 - (1 - Math.exp(-4 * t)) * 190;
    const noise =
      Math.sin(i * 1.7) * 26 * Math.exp(-3 * t) +
      Math.sin(i * 0.6) * 10 * Math.exp(-2 * t);
    points.push([x, trend + noise]);
  }
  return {
    line: points
      .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
      .join(" "),
    points,
  };
})();

function AnnealingVisual(): ReactNode {
  return (
    <Frame>
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full text-foreground"
        role="img"
        aria-label="Simulated annealing: score improves while the search cools"
      >
        <line x1="24" y1="270" x2="376" y2="270" stroke="currentColor" strokeOpacity={0.2} />
        <line x1="24" y1="30" x2="24" y2="270" stroke="currentColor" strokeOpacity={0.2} />
        <path
          d={ANNEAL_PATH.line}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.85}
          strokeWidth={1.75}
        />
        {ANNEAL_PATH.points
          .filter((_, i) => i % 6 === 0)
          .map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={3} fill="currentColor" fillOpacity={0.5} />
          ))}
        <text x="64" y="262" fontSize="11" className="font-mono" fill="currentColor" fillOpacity={0.5}>
          explore (hot)
        </text>
        <text x="376" y="46" fontSize="11" textAnchor="end" className="font-mono" fill="currentColor" fillOpacity={0.5}>
          exploit (cool)
        </text>
      </svg>
    </Frame>
  );
}

function RetrievalVisual(): ReactNode {
  return (
    <Frame>
      <div className="flex h-full flex-col justify-center gap-3 p-4 sm:p-6">
        <div className="self-center rounded-xl border border-foreground/10 bg-background px-3 py-1.5 text-[12px] tracking-tight text-foreground/80">
          &ldquo;a gentle moisturizer for dry skin&rdquo;
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-foreground/10 bg-background p-3">
            <p className="font-mono text-[10px] tracking-tight text-foreground/45 uppercase">
              FAISS
            </p>
            <p className="mt-1 text-[12px] tracking-tight text-foreground/80">
              semantic match
            </p>
          </div>
          <div className="rounded-xl border border-foreground/10 bg-background p-3">
            <p className="font-mono text-[10px] tracking-tight text-foreground/45 uppercase">
              Elasticsearch
            </p>
            <p className="mt-1 text-[12px] tracking-tight text-foreground/80">
              exact match
            </p>
          </div>
        </div>
        <div className="mx-auto h-4 w-px bg-foreground/20" />
        <div className="rounded-xl bg-foreground px-3 py-2 text-center text-[12px] tracking-tight text-background">
          Merged, ranked results
        </div>
      </div>
    </Frame>
  );
}

export function ProjectVisual({
  kind,
}: {
  kind: ProjectVisualKind;
}): ReactNode {
  switch (kind) {
    case "pipeline":
      return <PipelineVisual />;
    case "dpp":
      return <DppVisual />;
    case "reasoning":
      return <ReasoningVisual />;
    case "annealing":
      return <AnnealingVisual />;
    case "retrieval":
      return <RetrievalVisual />;
  }
}
