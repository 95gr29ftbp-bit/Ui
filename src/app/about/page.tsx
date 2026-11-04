import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink, ButtonLink } from "@/components/ArrowLink";
import { Figure } from "@/components/Figure";
import { PendingText } from "@/components/Pending";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { img } from "@/content/images";
import { site } from "@/content/site";
import { isPending } from "@/content/types";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tshiamo Motswatswa: a creative and digital marketer trained in Media Studies and Organisational Psychology at Wits, now working across social media, content, community and campaigns.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Start with the audience",
    body: "Before the idea, the question: who is this for, what do they already believe, and what would make them stop?",
  },
  {
    title: "Make it native",
    body: "A reel, a trade presenter and a campus poster each have their own grammar. The message stays the same; the form fits the place.",
  },
  {
    title: "Keep the brand’s own voice",
    body: "Good work extends a brand rather than replacing it. I work with the identity a brand already has.",
  },
  {
    title: "Be honest about results",
    body: "Report what happened, not what sounds good. The numbers are how we know what to do next.",
  },
];

const lens = [
  img("/work/photography/lanyard.jpg", "A smiling student in a denim jacket and yellow lanyard at an event"),
  img("/work/photography/duet.jpg", "Two singers performing on a dark stage"),
  img("/work/photography/sunset.jpg", "A woman with long braids seen from behind, watching a sunset"),
  img("/work/photography/crowd.jpg", "A packed, cheering audience in a school hall"),
  img("/work/photography/reflection.jpg", "A woman with braids, hands clasped in a quiet moment"),
  img("/work/photography/field.jpg", "A woman in a sun hat with arms outstretched in a grassy field"),
  img("/work/photography/performer.jpg", "A performer in a white shirt singing into a microphone on a dark stage"),
  img("/work/photography/smile.jpg", "Close-up of a woman with braids, smiling with eyes lowered"),
  img("/work/photography/stage.jpg", "Silhouettes of performers on a brightly lit stage"),
  img("/work/photography/host.jpg", "A host in white speaking into a microphone against a brick wall"),
  img("/work/photography/selfie-wall.jpg", "Friends taking a phone photo in front of a wall of posters"),
  img("/work/photography/audience.jpg", "An audience laughing and clapping in tiered seating"),
];

export default function AboutPage() {
  return (
    <>
      {/* ------------------------------------------------ Intro */}
      <section className="shell pt-12 pb-20 md:pt-20 md:pb-28">
        <p className="eyebrow rise text-muted">About</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <h1
            className="display rise text-[clamp(2.8rem,1.4rem+5.4vw,7.25rem)] leading-[0.97] lg:col-span-9"
            style={{ "--rise-delay": "100ms" } as React.CSSProperties}
          >
            Media Studies taught me to read culture. Psychology taught me to read people.{" "}
            <em className="text-clay">Marketing is where I use both.</em>
          </h1>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4">
            <figure className="max-w-[22rem]">
              <Image
                src={site.portrait.src}
                alt={site.portrait.alt}
                width={site.portrait.width}
                height={site.portrait.height}
                priority
                sizes="(min-width: 768px) 30vw, 352px"
                quality={92}
                className="block h-auto w-full bg-cream"
              />
              <figcaption className="caption mt-3 flex gap-3">
                <span className="text-subtle">Fig. 01</span>
                <span>Tshiamo Motswatswa, {site.location}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            <Reveal className="space-y-6 text-[clamp(1.125rem,1rem+0.4vw,1.3rem)] leading-[1.6] text-ink/85">
              <p>
                I studied Media Studies and Organisational Psychology at the University of the
                Witwatersrand, then completed my Honours in Media Studies. That training taught me to
                ask how culture, communication and human behaviour shape what people notice and trust.
              </p>
              <p>
                Today I bring those questions into social media management, campaign moderation,
                content creation, community management and creative marketing. I enjoy moving between
                research, creativity and strategy, because meaningful communication starts with
                understanding people.
              </p>
              <p>
                In practice that means I’m as comfortable reading a comment section for what an audience
                really wants as I am building the post, the presenter or the poster that answers it.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-12">
              <p className="eyebrow text-muted">Outside the brief</p>
              <p className="mt-4 text-[0.9375rem]">
                <PendingText value={{ pending: "A line or two about what you care about outside work: interests, influences, what you’re reading or watching." }} />
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Education & experience */}
      <section className="bg-cream py-20 md:py-28">
        <div className="shell">
          <SectionHeading index="01" label="Background" title={<>Where I’ve <em>learnt and worked.</em></>} />

          <div className="mt-16 grid gap-16 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <Reveal>
                <h3 className="eyebrow text-muted">Education</h3>
              </Reveal>
              <ul className="mt-6">
                {site.education.map((e) => (
                  <Reveal as="li" key={e.qualification} className="border-t border-line py-6">
                    <p className="display text-[1.75rem] leading-[1.1]">{e.qualification}</p>
                    <p className="mt-2 text-[0.9375rem] text-muted">
                      {e.institution} ·{" "}
                      {isPending(e.year) ? <PendingText value={e.year} /> : e.year}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <Reveal>
                <h3 className="eyebrow text-muted">Experience</h3>
              </Reveal>
              <ul className="mt-6">
                {site.experience.map((x) => (
                  <Reveal as="li" key={x.org} className="grid gap-3 border-t border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                    <p className="eyebrow pt-1.5 text-muted">{x.period}</p>
                    <div>
                      <p className="display text-[1.75rem] leading-[1.1]">{x.org}</p>
                      <p className="mt-1 text-[0.9375rem] font-medium">{x.title}</p>
                      <p className="caption mt-1">{x.descriptor}</p>
                      <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{x.summary}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <Reveal className="mt-8">
                {isPending(site.contact.cv) ? (
                  <PendingText value={site.contact.cv} />
                ) : (
                  <ArrowLink href={site.contact.cv} external className="text-[0.9375rem]">
                    Download CV (PDF)
                  </ArrowLink>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Principles */}
      <section className="shell py-20 md:py-28">
        <SectionHeading index="02" label="How I work" title={<>Four things I <em>hold on to.</em></>} />
        <ol className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80} className="bg-ivory py-8 sm:pr-8 lg:px-6 lg:first:pl-0">
              <p className="display text-[2.75rem] leading-none text-subtle tabular-nums">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 text-[1.125rem] font-medium tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ------------------------------------------------ Through my lens */}
      <section className="on-dark bg-ink py-20 text-ivory md:py-28">
        <div className="shell">
          <SectionHeading
            index="03"
            label="Through my lens"
            tone="dark"
            title={<>Portrait, lifestyle and event photography, <em>with a storytelling edge.</em></>}
          />
          <div className="mt-16 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            {lens.map((image, i) => (
              <Reveal key={image.src} delay={(i % 4) * 60} className="break-inside-avoid">
                <Figure image={image} mat={false} upscale={1.6} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end md:py-28">
        <h2 className="display max-w-[16ch] text-[clamp(2.4rem,1.5rem+3.4vw,4.5rem)] leading-[1]">
          See how it comes together in <em>the work.</em>
        </h2>
        <ButtonLink href="/work">View selected work</ButtonLink>
      </section>
    </>
  );
}
