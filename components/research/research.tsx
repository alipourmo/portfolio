"use client";

import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import { research } from "@/lib/content";

function Authors({ names }: { names: readonly string[] }): ReactNode {
  return (
    <p className="text-[14px] tracking-tight text-foreground/55">
      {names.map((name, i) => (
        <span key={name}>
          {name === "Nahid Abdollahi" ? (
            <strong className="font-semibold text-foreground">{name}</strong>
          ) : (
            name
          )}
          {i < names.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

function Venue({ children }: { children: ReactNode }): ReactNode {
  return (
    <p className="font-mono text-[11px] tracking-tight text-foreground/45 uppercase">
      {children}
    </p>
  );
}

const CARD =
  "rounded-3xl border border-foreground/8 bg-background p-6 sm:p-8";

export function Research(): ReactNode {
  const [open, setOpen] = useState(false);
  const { paper, thesis, inProgress } = research;

  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full max-w-205 flex-col gap-5 px-6 sm:px-10">
        <FadeIn>
          <article className={`${CARD} flex flex-col gap-4`}>
            <Venue>{paper.venue}</Venue>
            <h2 className="font-serif text-[1.6rem] leading-[1.2] font-medium tracking-tight text-foreground sm:text-[1.9rem]">
              {paper.title}
            </h2>
            <Authors names={paper.authors} />
            <p
              id="paper-abstract"
              className={`text-[15px] leading-[1.7] tracking-tight text-foreground/70 ${
                open ? "" : "line-clamp-3"
              }`}
            >
              {paper.abstract}
            </p>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="paper-abstract"
              className="focus-ring inline-flex w-fit cursor-pointer items-center gap-1.5 text-[14px] font-medium tracking-tight text-foreground"
            >
              {open ? "Collapse abstract" : "Read abstract"}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          </article>
        </FadeIn>

        <FadeIn delay={0.08}>
          <article className={`${CARD} flex flex-col gap-4`}>
            <Venue>{thesis.label}</Venue>
            <h2 className="font-serif text-[1.5rem] leading-[1.2] font-medium tracking-tight text-foreground sm:text-[1.75rem]">
              {thesis.title}
            </h2>
            <p className="text-[15px] leading-[1.7] tracking-tight text-foreground/70">
              {thesis.description}
            </p>
            <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
              {thesis.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-foreground/8 px-2.5 py-1 text-[12px] tracking-tight text-foreground/65"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {inProgress.map((item, i) => (
            <FadeIn key={item.title} delay={0.16 + i * 0.06}>
              <article className={`${CARD} flex h-full flex-col gap-3`}>
                <Venue>{item.venue}</Venue>
                <h2 className="font-serif text-[1.35rem] leading-[1.2] font-medium tracking-tight text-foreground sm:text-[1.5rem]">
                  {item.title}
                </h2>
                <Authors names={item.authors} />
                <p className="text-[14px] leading-[1.65] tracking-tight text-foreground/70">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
