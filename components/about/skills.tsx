import type { ReactNode } from "react";

import { skillGroups } from "@/lib/content";

export function Skills(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        Skills
      </h3>
      <div className="flex flex-col gap-6 rounded-4xl border border-foreground/5 bg-foreground/2 p-4 sm:p-6 dark:bg-foreground/5">
        {skillGroups.map((group) => (
          <section key={group.title} aria-label={group.title}>
            <p className="mb-3 font-mono text-[11px] tracking-tight text-foreground/45 uppercase">
              {group.title}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-foreground/8 bg-background px-3.5 py-1.5 text-[13px] tracking-tight text-foreground/85 sm:text-[14px]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
