import type { Metadata } from "next";
import { Figure } from "@/components/Figure";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { archive, projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Case studies in social media, campaigns, content, community and design for Bluecloud AI, Connie Brands, Growthpoint / Apex Studios, ORS, Dabur Amla, Sasol and Long & Lasting.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="shell pt-12 pb-16 md:pt-20 md:pb-24">
        <p className="eyebrow rise text-muted">Selected work · {projects.length} case studies</p>
        <h1 className="display rise mt-8 max-w-[14ch] text-[clamp(3rem,1.6rem+6vw,8rem)] leading-[0.95]" style={{ "--rise-delay": "100ms" } as React.CSSProperties}>
          Work that has to <em>earn attention.</em>
        </h1>
        <p className="lede rise mt-10 max-w-[48ch] text-ink/80" style={{ "--rise-delay": "220ms" } as React.CSSProperties}>
          Campaigns, content and communication for brands in the feed, on the shelf and on campus.
          Each case study sets out the brief, my role and how the work was made.
        </p>
      </section>

      <section className="shell pb-24 md:pb-36">
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2 md:gap-y-28">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 120} className={i % 2 === 1 ? "md:mt-32" : ""}>
              <ProjectCard project={project} index={i + 1} sizes="(min-width: 768px) 45vw, 100vw" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="shell">
          <SectionHeading
            index="+"
            label="Archive"
            title={<>Smaller pieces: <em>graphics and video.</em></>}
          />
          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-20 md:grid-cols-3 lg:grid-cols-6">
            {archive.map((image, i) => (
              <Reveal key={image.src} delay={(i % 6) * 60}>
                <Figure image={image} sizes="(min-width: 1024px) 16vw, 45vw" mat={false} upscale={1.4} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
