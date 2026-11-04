import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/ArrowLink";
import { Figure } from "@/components/Figure";
import { PendingBlock, PendingText } from "@/components/Pending";
import { ProjectCover } from "@/components/ProjectCover";
import { Reveal } from "@/components/Reveal";
import { Video } from "@/components/Video";
import { getProject, projects } from "@/content/projects";
import { isPending, isVideo, type GalleryItem, type Maybe } from "@/content/types";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.client}: ${project.title}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title,
      description: project.summary,
      type: "article",
      ...(project.cover.image ? { images: [{ url: project.cover.image.src, width: project.cover.image.width, height: project.cover.image.height, alt: project.cover.image.alt }] } : {}),
    },
  };
}

function Text({ value }: { value: Maybe<string> }) {
  return isPending(value) ? <PendingText value={value} /> : <>{value}</>;
}

const spanClass: Record<NonNullable<GalleryItem["span"]>, string> = {
  full: "md:col-span-6",
  twoThirds: "md:col-span-4",
  half: "md:col-span-3",
  third: "sm:col-span-1 md:col-span-2",
};

function sizesFor(span: GalleryItem["span"]) {
  switch (span) {
    case "full":
      return "(min-width: 768px) 90vw, 100vw";
    case "twoThirds":
      return "(min-width: 768px) 60vw, 100vw";
    case "third":
      return "(min-width: 768px) 30vw, 50vw";
    default:
      return "(min-width: 768px) 45vw, 100vw";
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(i + 1) % projects.length];
  let fig = 0;
  const nextFig = () => String(++fig).padStart(2, "0");

  const facts: { label: string; value: React.ReactNode }[] = [
    { label: "Client", value: project.client },
    { label: "Year", value: <Text value={project.year} /> },
    { label: "Engagement", value: <Text value={project.engagement} /> },
    { label: "Disciplines", value: project.disciplines.join(", ") },
  ];

  return (
    <article>
      {/* ---------------------------------------------------- Title */}
      <header className="shell pt-10 md:pt-16">
        <div className="rise flex items-center justify-between gap-6 border-b border-line pb-4">
          <Link href="/work" className="group eyebrow inline-flex items-center gap-2 text-muted hover:text-ink">
            <Arrow className="rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" />
            All work
          </Link>
          <p className="eyebrow tabular-nums text-muted">
            {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <div className="grid gap-10 pt-12 pb-14 md:grid-cols-12 md:pt-20 md:pb-20">
          <div className="md:col-span-8">
            <p className="eyebrow rise text-clay" style={{ "--rise-delay": "60ms" } as React.CSSProperties}>
              {project.client} · {project.context}
            </p>
            <h1
              className="display rise mt-6 text-[clamp(2.8rem,1.4rem+5.4vw,7rem)] leading-[0.96]"
              style={{ "--rise-delay": "140ms" } as React.CSSProperties}
            >
              {project.title}
            </h1>
          </div>
          <p
            className="lede rise self-end text-ink/80 md:col-span-4"
            style={{ "--rise-delay": "260ms" } as React.CSSProperties}
          >
            {project.summary}
          </p>
        </div>
      </header>

      <div className="shell rise" style={{ "--rise-delay": "320ms" } as React.CSSProperties}>
        <ProjectCover project={project} ratio={null} className="aspect-square md:aspect-[2/1]" priority size="lg" sizes="100vw" />
      </div>

      {/* ---------------------------------------------------- Facts + overview */}
      <section className="shell grid gap-14 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <Reveal as="dl" className="grid grid-cols-2 gap-x-6 gap-y-7 self-start md:col-span-4 md:grid-cols-1">
          {facts.map((f) => (
            <div key={f.label} className="border-t border-line pt-3">
              <dt className="eyebrow text-muted">{f.label}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed">{f.value}</dd>
            </div>
          ))}
        </Reveal>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <p className="eyebrow text-muted">Overview</p>
            <div className="mt-6 space-y-5 text-[clamp(1.125rem,1rem+0.4vw,1.3rem)] leading-[1.6] text-ink/85">
              {project.overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 sm:grid-cols-2">
            <Reveal>
              <h2 className="eyebrow text-muted">Objective</h2>
              <p className="display mt-4 text-[1.75rem] leading-[1.15]">
                <Text value={project.objective} />
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="eyebrow text-muted">My role</h2>
              <ul className="mt-4 space-y-2.5 text-[0.9375rem] leading-relaxed">
                {project.role.map((r, k) => (
                  <li key={k} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-ink/40" />
                    <span>
                      <Text value={r} />
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Approach */}
      <section className="bg-cream">
        <div className="shell grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-3">
            <p className="eyebrow text-muted">Creative approach</p>
          </Reveal>
          <Reveal delay={80} className="md:col-span-9">
            <blockquote className="display text-[clamp(1.9rem,1.2rem+2.6vw,3.6rem)] leading-[1.1]">
              <Text value={project.approach} />
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------- Execution */}
      <section className="shell py-20 md:py-28">
        <Reveal className="border-t border-line pt-5">
          <h2 className="eyebrow text-muted">Strategy & execution</h2>
        </Reveal>
        <ol className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {project.execution.map((step, k) => (
            <Reveal as="li" key={step.title} delay={k * 90}>
              <p className="display text-[3rem] leading-none text-subtle tabular-nums">{String(k + 1).padStart(2, "0")}</p>
              <h3 className="mt-5 text-[1.125rem] font-medium tracking-[-0.01em]">{step.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                <Text value={step.body} />
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 border-t border-line pt-5">
          <h2 className="eyebrow text-muted">Deliverables</h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem]">
            {project.deliverables.map((d, k) => (
              <li key={k}>
                <Text value={d} />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ---------------------------------------------------- Gallery */}
      <section aria-label="Visual deliverables" className="shell space-y-24 pb-24 md:space-y-32 md:pb-32">
        {project.gallery.map((section) => (
          <div key={section.title}>
            <Reveal className="mb-10 grid gap-4 border-t border-line pt-5 md:grid-cols-12">
              <h2 className="display text-[clamp(1.8rem,1.3rem+1.6vw,2.75rem)] leading-[1.05] md:col-span-6">{section.title}</h2>
              {section.intro ? (
                <p className="text-[0.9375rem] leading-relaxed text-muted md:col-span-5 md:col-start-8 md:pt-2">{section.intro}</p>
              ) : null}
            </Reveal>
            <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 md:grid-cols-6 md:gap-x-6">
              {section.items.map((item, k) => {
                const span = item.span ?? "half";
                return (
                  <Reveal key={k} delay={(k % 3) * 80} className={`${spanClass[span]} ${span === "full" || span === "half" || span === "twoThirds" ? "sm:col-span-2" : ""}`}>
                    {isPending(item) ? (
                      <PendingBlock hint={item.pending} ratio={item.ratio} />
                    ) : isVideo(item) ? (
                      <Video video={item} index={nextFig()} />
                    ) : (
                      <Figure image={item} index={nextFig()} sizes={sizesFor(span)} upscale={span === "third" ? 1.5 : 1.3} className="h-full" />
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* ---------------------------------------------------- Outcomes */}
      <section className="on-dark bg-ink text-ivory">
        <div className="shell py-20 md:py-28">
          <Reveal className="border-t border-ivory/20 pt-5">
            <h2 className="eyebrow text-ivory/60">Outcomes</h2>
          </Reveal>
          {isPending(project.outcomes) ? (
            <Reveal className="mt-10 max-w-2xl">
              <p className="display text-[clamp(1.8rem,1.2rem+2vw,3rem)] leading-[1.1] text-ivory/90">
                Results will be added here once they’re verified.
              </p>
              <p className="mt-6 inline-flex flex-wrap items-baseline gap-2 border border-dashed border-ivory/30 px-3 py-2 text-[0.8125rem] text-ivory/70">
                <span className="eyebrow text-[0.625rem] text-sand">To add</span>
                {project.outcomes.pending}
              </p>
            </Reveal>
          ) : (
            <>
              <dl className="mt-12 grid gap-px bg-ivory/15 sm:grid-cols-3">
                {project.outcomes.map((o, k) => (
                  <Reveal key={o.label} delay={k * 100} className="bg-ink py-6 sm:px-6 sm:first:pl-0">
                    <dt className="sr-only">{o.label}</dt>
                    <dd>
                      <p className="display text-[clamp(3.5rem,2.4rem+4vw,6.5rem)] leading-none tabular-nums">{o.value}</p>
                      <p className="mt-4 max-w-[26ch] text-[0.9375rem] leading-relaxed text-ivory/70">{o.label}</p>
                    </dd>
                  </Reveal>
                ))}
              </dl>
              {project.outcomesNote ? (
                <Reveal className="mt-10 text-[0.8125rem] text-ivory/60">
                  {isPending(project.outcomesNote) ? (
                    <span className="inline-flex flex-wrap items-baseline gap-2 border border-dashed border-ivory/30 px-3 py-2">
                      <span className="eyebrow text-[0.625rem] text-sand">To add</span>
                      {project.outcomesNote.pending}
                    </span>
                  ) : (
                    project.outcomesNote
                  )}
                </Reveal>
              ) : null}
            </>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------- Next */}
      <nav aria-label="Next project" className="shell py-20 md:py-28">
        <Link href={`/work/${next.slug}`} className="group grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-muted">Next project</p>
            <p className="eyebrow mt-8 text-clay">{next.client}</p>
            <p className="display mt-4 text-[clamp(2.4rem,1.4rem+4vw,5.5rem)] leading-[0.98] transition-colors duration-300 group-hover:text-clay">
              {next.title}
            </p>
            <span className="mt-8 inline-flex items-center gap-2.5 text-[0.9375rem]">
              <span className="link-underline">View case study</span>
              <Arrow />
            </span>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <ProjectCover project={next} ratio="4/3" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
        </Link>
      </nav>
    </article>
  );
}
