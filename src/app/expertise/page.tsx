import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/ArrowLink";
import { Reveal } from "@/components/Reveal";
import { capabilityGroups } from "@/content/expertise";
import { getProject } from "@/content/projects";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Social media management, community management, content strategy, creative design, brand storytelling, marketing communications, digital marketing and campaign management.",
  alternates: { canonical: "/expertise" },
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-");

export default function ExpertisePage() {
  let n = 0;
  const all = capabilityGroups.flatMap((g) => g.capabilities.map((c) => ({ ...c, group: g.title })));

  return (
    <>
      <section className="shell pt-12 pb-16 md:pt-20 md:pb-24">
        <p className="eyebrow rise text-muted">Expertise</p>
        <h1
          className="display rise mt-8 max-w-[16ch] text-[clamp(2.8rem,1.4rem+5.6vw,7.5rem)] leading-[0.96]"
          style={{ "--rise-delay": "100ms" } as React.CSSProperties}
        >
          Eight disciplines, <em>four questions.</em>
        </h1>
        <p className="lede rise mt-10 max-w-[52ch] text-ink/80" style={{ "--rise-delay": "220ms" } as React.CSSProperties}>
          I think of my work in pairs: a strategic discipline alongside the craft that makes it
          visible. Each pair answers one question every brief has to settle.
        </p>

        {/* Index of all eight */}
        <nav aria-label="Capabilities index" className="rise mt-16 border-t border-line" style={{ "--rise-delay": "320ms" } as React.CSSProperties}>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
            {all.map((c, i) => (
              <li key={c.name} className="border-b border-line lg:[&:nth-last-child(-n+4)]:border-b-0">
                <a href={`#${slugify(c.name)}`} className="group flex items-baseline gap-4 py-4 pr-4 text-[0.9375rem]">
                  <span className="eyebrow tabular-nums text-subtle">{String(i + 1).padStart(2, "0")}</span>
                  <span className="transition-colors group-hover:text-clay">{c.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      {capabilityGroups.map((group, gi) => (
        <section key={group.key} className={gi % 2 === 0 ? "bg-cream" : ""} aria-labelledby={`group-${group.key}`}>
          <div className="shell grid gap-12 py-20 md:grid-cols-12 md:gap-10 md:py-28">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <Reveal>
                  <p className="eyebrow text-muted">
                    <span className="tabular-nums">{String(gi + 1).padStart(2, "0")}</span> · {group.title}
                  </p>
                  <h2 id={`group-${group.key}`} className="display mt-6 text-[clamp(2.2rem,1.5rem+2.4vw,3.6rem)] leading-[1.04]">
                    <em>{group.question}</em>
                  </h2>
                </Reveal>
              </div>
            </div>

            <div className="space-y-16 md:col-span-7 md:col-start-6">
              {group.capabilities.map((c) => {
                n += 1;
                return (
                  <Reveal key={c.name} as="article" className="border-t border-line pt-6">
                    <div id={slugify(c.name)} className="scroll-mt-28" />
                    <p className="eyebrow tabular-nums text-subtle">{String(n).padStart(2, "0")}</p>
                    <h3 className="display mt-4 text-[clamp(2rem,1.5rem+1.8vw,3rem)] leading-[1.05]">{c.name}</h3>
                    <p className="mt-4 max-w-[46ch] text-[1.0625rem] leading-relaxed text-ink/80">{c.line}</p>

                    <div className="mt-8 grid gap-8 sm:grid-cols-2">
                      <div>
                        <p className="eyebrow text-muted">In practice</p>
                        <ul className="mt-4 space-y-2 text-[0.9375rem] leading-relaxed">
                          {c.inPractice.map((x) => (
                            <li key={x} className="flex gap-3">
                              <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-ink/40" />
                              {x}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="eyebrow text-muted">Seen in</p>
                        <ul className="mt-3">
                          {c.seenIn.map((slug) => {
                            const p = getProject(slug);
                            if (!p) return null;
                            return (
                              <li key={slug} className="border-b border-line">
                                <Link href={`/work/${slug}`} className="group flex items-center justify-between gap-3 py-2.5 text-[0.9375rem]">
                                  <span className="transition-colors group-hover:text-clay">{p.client}</span>
                                  <Arrow className="text-muted" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="on-dark bg-ink text-ivory">
        <div className="shell flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end md:py-28">
          <h2 className="display max-w-[18ch] text-[clamp(2.4rem,1.5rem+3.4vw,4.5rem)] leading-[1]">
            Need someone who can do <em>both sides of the brief?</em>
          </h2>
          <Link href="/contact" className="group inline-flex items-center gap-3 bg-ivory px-6 py-3.5 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-sand">
            Get in touch
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
