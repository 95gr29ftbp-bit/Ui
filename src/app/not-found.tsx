import { ButtonLink } from "@/components/ArrowLink";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center py-24">
      <p className="eyebrow text-muted">404</p>
      <h1 className="display mt-6 max-w-[14ch] text-[clamp(3rem,1.6rem+5.6vw,7.5rem)] leading-[0.95]">
        This page is <em>off the brief.</em>
      </h1>
      <p className="lede mt-8 max-w-[40ch] text-ink/80">The link may have moved, or never existed. The work is still here.</p>
      <div className="mt-10">
        <ButtonLink href="/work">View selected work</ButtonLink>
      </div>
    </section>
  );
}
