"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

import { experience, type ExperienceEntry } from "@/lib/content";

const COLLAPSED_COUNT = 2.5;
const ROW_HEIGHT = 66;
const ROW_GAP = 8;
const EASE = [0.22, 1, 0.36, 1] as const;

export function Experience(): ReactNode {
  const [open, setOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const collapsedHeight =
    Math.floor(COLLAPSED_COUNT) * ROW_HEIGHT +
    Math.floor(COLLAPSED_COUNT) * ROW_GAP +
    (COLLAPSED_COUNT % 1) * ROW_HEIGHT;
  const hiddenCount = experience.length - Math.floor(COLLAPSED_COUNT);

  const toggleRow = (id: string): void => {
    setExpandedId((current) => (current === id ? null : id));
    // Opening a row while the list is collapsed would be clipped, so expand it.
    setOpen(true);
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        Experience
      </h3>
      <div
        className={`relative overflow-hidden rounded-4xl border border-foreground/5 bg-foreground/2 px-2 pt-2 sm:px-4 sm:pt-4 dark:bg-foreground/5 ${
          open ? "pb-2 sm:pb-4" : "pb-0"
        }`}
      >
        <motion.div
          className="relative"
          initial={false}
          animate={{ height: open ? "auto" : collapsedHeight }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ overflow: "hidden" }}
        >
          <ul className="flex flex-col gap-2">
            {experience.map((entry) => (
              <ExperienceRow
                key={entry.id}
                entry={entry}
                expanded={expandedId === entry.id}
                onToggle={() => toggleRow(entry.id)}
              />
            ))}
          </ul>
        </motion.div>

        <AnimatePresence>
          {!open && (
            <motion.div
              key="fade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0"
              style={{
                height: ROW_HEIGHT,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
              }}
            />
          )}
        </AnimatePresence>

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              if (open) setExpandedId(null);
            }}
            aria-expanded={open}
            className={`focus-ring flex w-full cursor-pointer items-center justify-center gap-1.5 bg-transparent text-[15px] font-medium tracking-tight text-foreground ${
              open
                ? "relative mt-4"
                : "absolute inset-x-0 bottom-0 z-10 py-3 sm:py-4"
            }`}
          >
            {open ? "Show less" : `Show ${hiddenCount} more`}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </button>
        )}
      </div>
    </div>
  );
}

function ExperienceRow({
  entry,
  expanded,
  onToggle,
}: {
  entry: ExperienceEntry;
  expanded: boolean;
  onToggle: () => void;
}): ReactNode {
  const panelId = `exp-${entry.id}`;

  return (
    <li className="rounded-3xl border border-foreground/5 bg-background">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="focus-ring flex w-full cursor-pointer items-center gap-4 rounded-3xl p-2 text-left"
      >
        <Mark text={entry.mark} />
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-[16px] leading-snug font-semibold tracking-tight text-foreground sm:text-[17px]">
            {entry.role}
          </span>
          <span className="mt-0.5 text-[13px] tracking-tight text-foreground/65 sm:text-[14px]">
            {entry.company}
            <span className="mx-2 text-foreground/30">•</span>
            <span className="text-foreground/55">{entry.period}</span>
          </span>
        </div>
        <ChevronDown
          className={`mr-2 h-4 w-4 shrink-0 text-foreground/40 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-4 pt-1 pb-4">
              <p className="font-mono text-[11px] tracking-tight text-foreground/45 uppercase">
                {entry.location} · {entry.duration}
              </p>
              <p className="mt-2 text-[14px] leading-[1.65] tracking-tight text-foreground/75 sm:text-[15px]">
                {entry.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Skills">
                {entry.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-foreground/8 px-2.5 py-1 text-[12px] tracking-tight text-foreground/65"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function Mark({ text }: { text: string }): ReactNode {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-foreground/15"
      style={{ borderRadius: 14 }}
    >
      <span className="font-mono text-[13px] font-medium tracking-tight text-foreground/60">
        {text}
      </span>
    </span>
  );
}
