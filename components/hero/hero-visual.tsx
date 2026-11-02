"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { ShaderFlow } from "@/components/shaders/shader-flow";
import { profile } from "@/lib/content";

const FADE_MASK =
  "radial-gradient(ellipse 90% 90% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 85%, rgba(0,0,0,0.1) 100%)";

/** Ring nodes of a small knowledge graph; the monogram sits at the hub. */
const NODES: ReadonlyArray<readonly [number, number]> = [
  [72, 96],
  [168, 52],
  [268, 76],
  [336, 156],
  [308, 262],
  [212, 322],
  [108, 292],
  [58, 188],
];

const EDGES: ReadonlyArray<readonly [number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 0],
  [0, 3],
  [1, 5],
  [2, 6],
  [4, 7],
];

const HUB: readonly [number, number] = [200, 190];

const point = (i: number): readonly [number, number] => NODES[i] ?? HUB;

/**
 * Monogram + knowledge-graph card used in the hero until a portrait is set
 * in lib/content.ts.
 */
export function HeroVisual(): ReactNode {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        style={{ WebkitMaskImage: FADE_MASK, maskImage: FADE_MASK }}
      >
        <ShaderFlow scale={3} brightness={3} />
      </div>

      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-foreground"
        aria-hidden="true"
      >
        {NODES.map(([x, y], i) => (
          <line
            key={`hub-${i}`}
            x1={HUB[0]}
            y1={HUB[1]}
            x2={x}
            y2={y}
            stroke="currentColor"
            strokeOpacity={0.08}
            strokeWidth={1}
          />
        ))}
        {EDGES.map(([a, b], i) => (
          <motion.line
            key={`e-${i}`}
            x1={point(a)[0]}
            y1={point(a)[1]}
            x2={point(b)[0]}
            y2={point(b)[1]}
            stroke="currentColor"
            strokeOpacity={0.2}
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.4 + i * 0.07, ease: "easeOut" }}
          />
        ))}
        {NODES.map(([x, y], i) => (
          <motion.circle
            key={`n-${i}`}
            cx={x}
            cy={y}
            r={5}
            fill="currentColor"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={
              reduce
                ? { opacity: 0.7, scale: 1 }
                : { opacity: [0.35, 0.9, 0.35], scale: 1 }
            }
            transition={
              reduce
                ? { duration: 0 }
                : {
                    opacity: {
                      duration: 3.2,
                      delay: i * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    scale: { duration: 0.6, delay: 0.3 + i * 0.06 },
                  }
            }
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        ))}
      </svg>

      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 text-center">
        <span className="font-serif text-[5.5rem] leading-none font-medium tracking-tight text-foreground sm:text-[7rem]">
          NA
        </span>
        <span className="rounded-full border border-foreground/10 bg-background/80 px-3 py-1 font-mono text-[11px] tracking-tight text-foreground/65 uppercase">
          {profile.role}
        </span>
      </div>
    </div>
  );
}
