import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Marks content to fade up as it enters the viewport. This is a plain server
 * component: a single <RevealObserver /> in the root layout watches every
 * `.reveal` element, so no per-block JavaScript is shipped or hydrated.
 * Content stays visible without JavaScript and with reduced motion.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
