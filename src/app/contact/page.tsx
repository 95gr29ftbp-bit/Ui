import type { Metadata } from "next";
import { Arrow } from "@/components/ArrowLink";
import { CopyEmail } from "@/components/CopyEmail";
import { PendingText } from "@/components/Pending";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";
import { isPending } from "@/content/types";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tshiamo Motswatswa about roles, campaigns and collaborations in digital marketing, creative strategy, social media and content.",
  alternates: { canonical: "/contact" },
};

const audiences = [
  {
    who: "Recruiters & hiring teams",
    what: "Roles in digital marketing, social media, content, creative strategy or brand communication. Send the role and I’ll send my CV.",
  },
  {
    who: "Agencies & studios",
    what: "Campaign, social and content teams who need someone comfortable with both the strategy and the making.",
  },
  {
    who: "Brands",
    what: "Social media, community, content and campaign support, from planning the calendar to answering the comments.",
  },
  {
    who: "Collaborators",
    what: "Photographers, creators, writers and fellow marketers with an idea worth making together.",
  },
];

export default function ContactPage() {
  const { contact } = site;
  return (
    <>
      <section className="shell pt-12 pb-16 md:pt-20 md:pb-24">
        <p className="eyebrow rise text-muted">Contact</p>
        <h1
          className="display rise mt-8 max-w-[14ch] text-[clamp(3rem,1.5rem+6.2vw,8.5rem)] leading-[0.94]"
          style={{ "--rise-delay": "100ms" } as React.CSSProperties}
        >
          Let’s make something <em>people stop for.</em>
        </h1>
        <p className="lede rise mt-10 max-w-[46ch] text-ink/80" style={{ "--rise-delay": "220ms" } as React.CSSProperties}>
          Whether it’s a role, a campaign or a conversation, you can reach me by email or phone.
          Tell me a little about what you’re working on.
        </p>
      </section>

      <section className="shell pb-20 md:pb-28">
        <Reveal className="border-t border-line pt-8 md:pt-12">
          <p className="eyebrow text-muted">Email</p>
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent("Hello Tshiamo")}`}
            className="group mt-5 inline-block max-w-full [overflow-wrap:anywhere]"
          >
            <span className="display text-[clamp(1.6rem,0.7rem+4.4vw,5.5rem)] leading-[1.02] transition-colors duration-300 group-hover:text-clay">
              {contact.email}
            </span>
          </a>
          <div className="mt-6">
            <CopyEmail email={contact.email} />
          </div>
        </Reveal>

        <Reveal className="mt-14 border-t border-line pt-8 md:mt-20 md:pt-12">
          <p className="eyebrow text-muted">Phone</p>
          <a href={`tel:${contact.phone.tel}`} className="group mt-5 inline-block">
            <span className="display text-[clamp(1.6rem,0.7rem+4.4vw,5.5rem)] leading-[1.02] tabular-nums transition-colors duration-300 group-hover:text-clay">
              {contact.phone.display}
            </span>
          </a>
          <p className="caption mt-4">+27 74 309 9778 from outside South Africa.</p>
        </Reveal>

        <div className="mt-20 grid gap-14 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-muted">Elsewhere</p>
            <ul className="mt-5">
              <li className="border-t border-line">
                <a
                  href={contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span>
                    <span className="block text-[1.0625rem]">{contact.linkedin.label}</span>
                    <span className="caption">{contact.linkedin.handle}</span>
                  </span>
                  <Arrow className="-rotate-45 text-muted group-hover:translate-x-0" />
                </a>
              </li>
              {contact.other.map((o) => (
                <li key={o.label} className="border-t border-line py-4">
                  {isPending(o.value) ? (
                    <div className="flex flex-col gap-2">
                      <span className="text-[1.0625rem]">{o.label}</span>
                      <PendingText value={o.value} />
                    </div>
                  ) : (
                    <a href={o.value} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4">
                      <span className="text-[1.0625rem]">{o.label}</span>
                      <Arrow className="-rotate-45 text-muted group-hover:translate-x-0" />
                    </a>
                  )}
                </li>
              ))}
              <li className="border-t border-b border-line py-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[1.0625rem]">CV</span>
                  {isPending(contact.cv) ? (
                    <PendingText value={contact.cv} />
                  ) : (
                    <a href={contact.cv} className="link-underline self-start text-[0.9375rem]">
                      Download PDF
                    </a>
                  )}
                </div>
              </li>
            </ul>
            <p className="caption mt-6">Based in {site.location}.</p>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="eyebrow text-muted">Who I’d like to hear from</p>
            </Reveal>
            <ul className="mt-5">
              {audiences.map((a, i) => (
                <Reveal as="li" key={a.who} delay={i * 70} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[13rem_1fr] sm:gap-8">
                  <p className="display text-[1.6rem] leading-[1.1]">{a.who}</p>
                  <p className="text-[0.9375rem] leading-relaxed text-muted">{a.what}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
