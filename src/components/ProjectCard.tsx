import Link from "next/link";
import type { Project } from "@/content/types";
import { ProjectCover } from "./ProjectCover";

export function ProjectCard({
  project,
  index,
  ratio = "4/3",
  sizes,
  headingLevel = "h2",
}: {
  headingLevel?: "h2" | "h3";
  project: Project;
  index: number;
  ratio?: string;
  sizes?: string;
}) {
  const Heading = headingLevel;
  return (
    <Link href={`/work/${project.slug}`} className="group block" aria-label={`${project.client}: ${project.title}`}>
      <ProjectCover project={project} ratio={ratio} sizes={sizes} />
      <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2">
        <span className="eyebrow pt-1.5 tabular-nums text-subtle">{String(index).padStart(2, "0")}</span>
        <div>
          <p className="eyebrow text-muted">{project.client}</p>
          <Heading className="display mt-2 text-[clamp(1.6rem,1.2rem+1.2vw,2.25rem)] leading-[1.05] transition-colors duration-300 group-hover:text-clay">
            {project.title}
          </Heading>
          <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted">{project.summary}</p>
          <p className="caption mt-4">{project.disciplines.join("  ·  ")}</p>
        </div>
      </div>
    </Link>
  );
}
