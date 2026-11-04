import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Numbered editorial section opener: "01 — Selected work" over a hairline. */
export function SectionHeading({
  index,
  label,
  title,
  aside,
  tone = "light",
}: {
  index: string;
  label: string;
  title?: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "dark";
}) {
  const line = tone === "dark" ? "border-ivory/20" : "border-line";
  const meta = tone === "dark" ? "text-ivory/60" : "text-muted";
  return (
    <Reveal className={`border-t ${line} pt-5`}>
      <div className={`flex items-baseline justify-between gap-6 ${meta}`}>
        <p className="eyebrow">
          <span className="tabular-nums">{index}</span>
          <span className="mx-3 inline-block h-px w-6 translate-y-[-0.3em] bg-current align-middle opacity-50" />
          {label}
        </p>
        {aside ? <div className="eyebrow hidden sm:block">{aside}</div> : null}
      </div>
      {title ? (
        <h2 className="display mt-8 max-w-[18ch] text-[clamp(2.5rem,1.6rem+3.6vw,5rem)]">{title}</h2>
      ) : null}
    </Reveal>
  );
}
