import type { Pending as PendingValue } from "@/content/types";

/** Inline marker for text that still needs to be supplied. */
export function PendingText({ value, className = "" }: { value: PendingValue; className?: string }) {
  return (
    <span
      className={`placeholder inline-flex items-baseline gap-2 px-2 py-0.5 text-[0.8125rem] leading-snug text-muted ${className}`}
    >
      <span className="eyebrow shrink-0 whitespace-nowrap text-[0.625rem] text-clay">To add</span>
      <span>{value.pending}</span>
    </span>
  );
}

/** Block-level placeholder for a missing image or piece of work. */
export function PendingBlock({
  hint,
  ratio = "4/5",
  className = "",
}: {
  hint: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`placeholder flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder: ${hint}`}
    >
      <span className="eyebrow text-clay">Image to add</span>
      <span className="max-w-[28ch] text-sm leading-snug text-muted">{hint}</span>
    </div>
  );
}
