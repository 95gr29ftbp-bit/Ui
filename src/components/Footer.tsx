import Link from "next/link";
import { nav, site } from "@/content/site";
import { Arrow } from "./ArrowLink";
import { LocalTime } from "./LocalTime";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-ink text-ivory">
      <div className="shell pt-20 pb-10 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-ivory/60">Get in touch</p>
            <a
              href={`mailto:${site.contact.email}`}
              className="group mt-6 inline-block max-w-full [overflow-wrap:anywhere]"
            >
              <span className="display text-[clamp(1.6rem,0.9rem+3vw,3.75rem)] leading-[1.02] transition-colors duration-300 group-hover:text-sand">
                {site.contact.email}
              </span>
            </a>
            <p className="mt-8 max-w-[44ch] text-[0.9375rem] leading-relaxed text-ivory/70">
              Open to roles and collaborations in {site.openTo.slice(0, -1).join(", ").toLowerCase()} and{" "}
              {site.openTo.at(-1)?.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-[0.9375rem] md:col-span-5 md:justify-items-end">
            <nav aria-label="Footer">
              <p className="eyebrow mb-5 text-ivory/50">Pages</p>
              <ul className="space-y-2.5">
                {[{ href: "/", label: "Home" }, ...nav].map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="link-reveal">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="eyebrow mb-5 text-ivory/50">Elsewhere</p>
              <ul className="space-y-2.5">
                <li>
                  <a href={site.contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2">
                    <span className="link-reveal">LinkedIn</span>
                    <Arrow className="-rotate-45" />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.contact.email}`} className="link-reveal">
                    Email
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.contact.phone.tel}`} className="link-reveal tabular-nums">
                    {site.contact.phone.display}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-[0.8125rem] text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>
            {site.location} · <LocalTime />
          </p>
          <a href="#top" className="link-reveal self-start sm:self-auto">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
