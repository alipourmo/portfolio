"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

import { DottedPattern } from "@/components/ui/dotted-pattern";
import { stats } from "@/lib/content";

const ROTATIONS = [-7, 5, -4, 6] as const;
const EASE = [0.22, 1, 0.36, 1] as const;

function StatCard({
  value,
  label,
  rotate,
  index,
}: {
  value: string;
  label: string;
  rotate: number;
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const max = 18;
    const k = 0.25;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: -120, filter: "blur(18px)", rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate }}
      transition={{ duration: 0.9, delay: 0.05 + index * 0.08, ease: EASE }}
      style={{ x: tx, y: ty, rotate }}
      className="relative aspect-[3/4] w-[clamp(7.5rem,18vw,11.5rem)] shrink-0 overflow-hidden rounded-2xl border-6 border-neutral-300/40 bg-white p-1.5 dark:border-white/15 dark:bg-neutral-900"
    >
      <DottedPattern className="absolute inset-1.5 overflow-hidden rounded-xl" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-2 text-center">
        <span className="font-serif text-[2.75rem] leading-none font-medium tracking-tight text-neutral-950 sm:text-[3.5rem] dark:text-neutral-50">
          {value}
        </span>
        <span className="font-mono text-[10px] leading-tight tracking-tight text-neutral-500 uppercase sm:text-[11px] dark:text-neutral-400">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export function StatsStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div aria-hidden="true" className="h-[clamp(10rem,24vw,15.5rem)] w-full" />
    );
  }

  return (
    <div className="flex w-full flex-wrap items-start justify-center gap-2 px-4 sm:gap-3 sm:px-8">
      {stats.map((stat, i) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          rotate={ROTATIONS[i % ROTATIONS.length] ?? 0}
          index={i}
        />
      ))}
    </div>
  );
}
