import Image from "next/image";
import Link from "next/link";
import { Arrow, ArrowLink, ButtonLink } from "@/components/ArrowLink";
import { ProjectCover } from "@/components/ProjectCover";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilityGroups } from "@/content/expertise";
import { featuredProjects, projects } from "@/content/projects";
import { site } from "@/content/site";
import type { Project } from "@/content/types";

const contexts: { name: Project["context"]; body: string }[] = [
  {
    name: "In the feed",
    body: "Social media, community and influencer campaigns, where attention is earned in a second and kept by answering back.",
  },
  {
    name: "On the shelf",
    body: "Trade presenters and product communication, where a buyer needs a clear, credible reason to say yes.",
  },
  {
    name: "On campus",
    body: "Student-life marketing and activations, where the best content comes from real people in real moments.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Creative and Digital Marketer",
  url: site.url,
  email: `mailto:${site.contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Johannesburg", addressCountry: "ZA" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of the Witwatersrand" },
  sameAs: [site.contact.linkedin.url],
  knowsAbout: capabilityGroups.flatMap((g) => g.capabilities.map((c) => c.name)),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* ------------------------------------------------------------ Hero */}
      <section className="shell pt-8 pb-20 md:pt-14 md:pb-28">
        <div className="eyebrow flex flex-wrap justify-between gap-x-8 gap-y-2 border-b border-line pb-4 text-muted">
          <span>Portfolio</span>
          <span className="hidden sm:inline">{site.role}</span>
          <span>{site.location}</span>
        </div>

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8 xl:col-span-9">
            <h1 className="display text-[clamp(3.1rem,1.2rem+7.4vw,9rem)] leading-[0.94]">
              <span className="rise block" style={{ "--rise-delay": "60ms" } as React.CSSProperties}>
                How people
              </span>
              <span className="rise block" style={{ "--rise-delay": "180ms" } as React.CSSProperties}>
                <em>read the world</em>
              </span>
              <span className="rise block" style={{ "--rise-delay": "300ms" } as React.CSSProperties}>
                is what I design for.
              </span>
            </h1>

            <div className="rise mt-10 grid gap-8 md:mt-14 md:grid-cols-[minmax(0,34rem)_auto] md:items-end md:gap-14" style={{ "--rise-delay": "460ms" } as React.CSSProperties}>
              <p className="lede text-ink/85">
                I’m Tshiamo Motswatswa, a creative and digital marketer working across social media,
                content, campaigns and design. With a background in Media Studies and Organisational
                Psychology, I build work around how audiences actually think, then make it look and
                sound right in the feed, on the shelf and on campus.
              </p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                <ButtonLink href="/work">View selected work</ButtonLink>
                <ArrowLink href="/contact" className="text-[0.9375rem]">
                  Get in touch
                </ArrowLink>
              </div>
            </div>
          </div>

          <figure className="rise max-w-[18rem] sm:max-w-[21rem] lg:col-span-4 lg:max-w-none lg:justify-self-end xl:col-span-3" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            <div className="overflow-hidden bg-cream" style={{ maxWidth: site.portrait.width * 1.15 }}>
              <Image
                src={site.portrait.src}
                alt={site.portrait.alt}
                width={site.portrait.width}
                height={site.portrait.height}
                priority
                sizes="(min-width: 1280px) 320px, (min-width: 1024px) 30vw, 340px"
                quality={92}
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="caption mt-3 flex gap-3">
              <span className="text-subtle">Fig. 01</span>
              <span>Tshiamo Motswatswa</span>
            </figcaption>
          </figure>
        </div>

        <dl className="mt-20 grid gap-8 border-t border-line pt-6 text-[0.9375rem] sm:grid-cols-3 md:mt-28">
          <div>
            <dt className="eyebrow text-muted">Currently</dt>
            <dd className="mt-2">{site.currently}</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted">Open to</dt>
            <dd className="mt-2">{site.openTo.join(", ")}</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted">Trained in</dt>
            <dd className="mt-2">Media Studies & Organisational Psychology, Wits (BA, Hons)</dd>
          </div>
        </dl>
      </section>

      {/* ------------------------------------------------- Where it lives */}
      <section className="bg-cream py-20 md:py-28">
        <div className="shell">
          <SectionHeading index="01" label="Where the work lives" title={<>Three places the work has to <em>perform.</em></>} />
          <div className="mt-14 grid gap-px overflow-hidden bg-line md:mt-20 md:grid-cols-3">
            {contexts.map((c, i) => {
              const list = projects.filter((p) => p.context === c.name);
              return (
                <Reveal key={c.name} delay={i * 90} className="flex flex-col bg-cream pt-8 pb-10 md:px-8 md:first:pl-0 md:last:pr-0">
                  <p className="eyebrow tabular-nums text-subtle">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="display mt-4 text-[2.5rem] leading-none">
                    <em>{c.name}</em>
                  </h3>
                  <p className="mt-5 max-w-[36ch] text-[0.9375rem] leading-relaxed text-muted">{c.body}</p>
                  <ul className="mt-auto pt-8">
                    {list.map((p) => (
                      <li key={p.slug} className="border-t border-line">
                        <Link href={`/work/${p.slug}`} className="group flex items-center justify-between gap-4 py-3.5 text-[0.9375rem]">
                          <span className="transition-colors group-hover:text-clay">{p.client}</span>
                          <Arrow className="text-muted" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Selected work */}
      <section className="shell py-20 md:py-32">
        <SectionHeading
          index="02"
          label="Selected work"
          aside={`${featuredProjects.length} of ${projects.length} projects`}
          title={<>Selected <em>work.</em></>}
        />

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
          {featuredProjects.map((project, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={project.slug}>
                <Link href={`/work/${project.slug}`} className="group grid items-end gap-8 md:grid-cols-12 md:gap-10">
                  <div className={`md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}>
                    <ProjectCover project={project} ratio="5/4" sizes="(min-width: 768px) 58vw, 100vw" />
                  </div>
                  <div className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1 md:row-start-1" : ""} md:pb-2`}>
                    <p className="eyebrow flex gap-4 text-muted">
                      <span className="tabular-nums text-subtle">{String(i + 1).padStart(2, "0")}</span>
                      {project.client}
                    </p>
                    <h3 className="display mt-5 text-[clamp(2.1rem,1.4rem+2.4vw,3.6rem)] leading-[1.02] transition-colors duration-300 group-hover:text-clay">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-[46ch] text-[1rem] leading-relaxed text-muted">{project.summary}</p>
                    <p className="caption mt-6">{project.disciplines.join("  ·  ")}</p>
                    <span className="mt-8 inline-flex items-center gap-2.5 text-[0.9375rem]">
                      <span className="link-underline">Read the case study</span>
                      <Arrow />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-24 flex justify-center md:mt-32">
          <ButtonLink href="/work" variant="outline">
            All work
          </ButtonLink>
        </Reveal>
      </section>

      {/* ------------------------------------------------- Capabilities */}
      <section className="on-dark bg-ink py-20 text-ivory md:py-32">
        <div className="shell">
          <SectionHeading
            index="03"
            label="Capabilities"
            tone="dark"
            title={<>Both sides of the brief: <em>the thinking and the making.</em></>}
          />
          <div className="mt-16 grid gap-px bg-ivory/15 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {capabilityGroups.map((group, i) => (
              <Reveal key={group.key} delay={i * 80} className="bg-ink py-8 sm:px-6 lg:first:pl-0">
                <p className="eyebrow text-ivory/50">{group.title}</p>
                <p className="display mt-5 text-[1.6rem] leading-[1.15] text-ivory/90">
                  <em>{group.question}</em>
                </p>
                <ul className="mt-8 space-y-2 border-t border-ivory/15 pt-5 text-[0.9375rem]">
                  {group.capabilities.map((c) => (
                    <li key={c.name}>{c.name}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <ArrowLink href="/expertise" className="text-[0.9375rem]">
              How I work across all eight
            </ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------- About teaser */}
      <section className="shell py-20 md:py-32">
        <SectionHeading index="04" label="About" />
        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4">
            <figure className="max-w-[18rem] md:max-w-[20rem]">
              <Image
                src={site.portraitCandid.src}
                alt={site.portraitCandid.alt}
                width={site.portraitCandid.width}
                height={site.portraitCandid.height}
                sizes="(min-width: 768px) 320px, 288px"
                quality={92}
                className="block h-auto w-full bg-cream"
              />
              <figcaption className="caption mt-3 flex gap-3">
                <span className="text-subtle">Fig. 02</span>
                <span>Graduation, Wits</span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="md:col-span-8 md:col-start-5">
            <Reveal>
              <p className="display text-[clamp(2rem,1.3rem+2.6vw,3.75rem)] leading-[1.06]">
                Media Studies taught me to read culture. Psychology taught me to read people.{" "}
                <em className="text-clay">Marketing is where I use both.</em>
              </p>
            </Reveal>
            <Reveal delay={120} className="prose-body mt-10 max-w-[58ch]">
              <p>
                I studied Media Studies and Organisational Psychology at the University of the
                Witwatersrand, then completed my Honours in Media Studies. That training taught me to
                ask how culture, communication and human behaviour shape what people notice and trust.
              </p>
              <p>
                Today I bring those questions into social media management, campaign moderation,
                content creation, community management and creative marketing.
              </p>
            </Reveal>
            <Reveal delay={180} className="mt-10">
              <ArrowLink href="/about" className="text-[0.9375rem]">
                More about me
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Contact */}
      <section className="bg-sand/60">
        <div className="shell grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-muted">05 · Contact</p>
            <h2 className="display mt-8 text-[clamp(2.6rem,1.6rem+3.8vw,5.25rem)] leading-[1]">
              Have a brief, a role or a <em>half-formed idea?</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-end md:col-span-5">
            <p className="max-w-[42ch] text-[1rem] leading-relaxed text-ink/80">
              Recruiters, agencies, brands and collaborators: I’d like to hear what you’re working on,
              whether it’s a role, a campaign or something still taking shape.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ArrowLink href={site.contact.linkedin.url} className="text-[0.9375rem]">
                LinkedIn
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
