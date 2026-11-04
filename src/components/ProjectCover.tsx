import Image from "next/image";
import type { Project } from "@/content/types";

const tones: Record<Project["cover"]["tone"], string> = {
  moss: "bg-moss",
  forest: "bg-forest",
  terracotta: "bg-terracotta",
  ink: "bg-ink",
  night: "bg-night",
  mauve: "bg-mauve",
};

/**
 * A cover composition: a muted brand-derived colour field with the work
 * framed inside it, or a large typographic figure when the story is a number.
 */
export function ProjectCover({
  project,
  ratio = "4/3",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  size = "md",
  className = "",
}: {
  project: Project;
  /** CSS aspect ratio; pass null and use className for responsive ratios */
  ratio?: string | null;
  className?: string;
  priority?: boolean;
  sizes?: string;
  size?: "md" | "lg";
}) {
  const { cover } = project;
  const portrait = cover.image && cover.image.height > cover.image.width;
  return (
    <div
      className={`zoom-on-hover relative flex items-center justify-center overflow-hidden ${tones[cover.tone]} text-ivory ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {/* Corner meta, like a book jacket */}
      <span className="eyebrow absolute top-4 left-4 max-w-[80%] text-ivory sm:top-5 sm:left-5">{project.client}</span>
      <span className="eyebrow absolute top-5 right-5 hidden text-ivory sm:block">{project.context}</span>

      {cover.image ? (
        <div
          className={`relative shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)] ${
            portrait ? "h-[72%]" : "w-[78%]"
          }`}
          style={{
            aspectRatio: `${cover.image.width}/${cover.image.height}`,
            maxWidth: size === "lg" ? cover.image.width * 1.35 : cover.image.width * 1.2,
          }}
        >
          <Image
            src={cover.image.src}
            alt={cover.image.alt}
            fill
            sizes={size === "lg" ? (portrait ? "(min-width: 768px) 32vw, 60vw" : "(min-width: 768px) 70vw, 80vw") : sizes}
            priority={priority}
            quality={90}
            className="object-cover"
          />
        </div>
      ) : cover.figure ? (
        <div className="px-6 text-center">
          <p className="display text-[clamp(4.5rem,3rem+7vw,10rem)] leading-none">{cover.figure.value}</p>
          <p className="eyebrow mt-5 text-ivory/85">{cover.figure.label}</p>
        </div>
      ) : null}
    </div>
  );
}
