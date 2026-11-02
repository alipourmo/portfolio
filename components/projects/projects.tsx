import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { ProjectVisual } from "./project-visuals";
import { FadeIn } from "@/components/ui/motion-primitives";
import { projects, type Project } from "@/lib/content";

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? projects.slice(0, 4) : projects;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              Selected work
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From production knowledge-graph systems to prompt-optimization
              research.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-foreground/8 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center justify-between gap-3 px-1 pt-2">
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.label}
          </span>
          <span className="rounded-full border border-foreground/10 px-2.5 py-0.5 font-mono text-[10px] tracking-tight text-foreground/60 uppercase">
            {project.meta}
          </span>
        </header>

        <div className="project-card__image relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1 ring-foreground/5">
          <div className="project-card__image-inner">
            <ProjectVisual kind={project.visual} />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1">
          <h3 className="text-[20px] leading-[1.2] font-medium tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5 px-1" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-foreground/8 px-2.5 py-1 text-[12px] tracking-tight text-foreground/65"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.link ? (
          <div className="px-1 pb-2">
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex items-center gap-1 text-[13px] font-medium tracking-tight text-foreground"
            >
              {project.link.label}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        ) : (
          <div className="pb-1" />
        )}
      </article>
    </FadeIn>
  );
}
