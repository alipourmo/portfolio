import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { StatsStrip } from "@/components/about/stats-strip";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { bio, profile } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Background, experience, education and skills of Nahid Abdollahi, AI product developer.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <StatsStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m{" "}
              <span className="border-b border-foreground/30 pb-0.5">
                {profile.name}
              </span>
              .
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              {bio.paragraphs.map((parts, i) => (
                <p key={i}>
                  {parts.map((part, j) =>
                    typeof part === "string" ? (
                      part
                    ) : (
                      <strong
                        key={j}
                        className="font-semibold text-foreground"
                      >
                        {part[0]}
                      </strong>
                    )
                  )}
                </p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-foreground/15 pl-5 text-[16px] leading-[1.65] tracking-tight text-foreground/60 italic">
              {bio.philosophy}
            </blockquote>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
