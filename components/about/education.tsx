import type { ReactNode } from "react";

import { education, type EducationEntry } from "@/lib/content";

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        Education
      </h3>
      <div className="relative rounded-4xl border border-foreground/5 bg-foreground/2 p-2 sm:p-4 dark:bg-foreground/5">
        <ul className="flex flex-col gap-2">
          {education.map((entry) => (
            <EducationRow key={entry.school} entry={entry} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function EducationRow({ entry }: { entry: EducationEntry }): ReactNode {
  return (
    <li className="flex flex-col gap-3 rounded-3xl border border-foreground/5 bg-background p-2">
      <div className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-foreground/15"
          style={{ borderRadius: 14 }}
        >
          <span className="font-mono text-[13px] font-medium tracking-tight text-foreground/60">
            {entry.mark}
          </span>
        </span>
        <div className="flex min-w-0 flex-col">
          <span className="text-[16px] leading-snug font-semibold tracking-tight text-foreground sm:text-[17px]">
            {entry.school}
          </span>
          <span className="mt-0.5 text-[13px] tracking-tight text-foreground/65 sm:text-[14px]">
            {entry.degree}
            <span className="mx-2 text-foreground/30">•</span>
            <span className="text-foreground/55">{entry.period}</span>
          </span>
        </div>
      </div>
      <p className="px-2 pb-2 text-[14px] leading-[1.65] tracking-tight text-foreground/65 sm:text-[15px]">
        {entry.note}
      </p>
    </li>
  );
}
