import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`h-[0.9em] w-[0.9em] shrink-0 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1 ${className}`}
    >
      <path d="M3 10h13M11 4.5 16.5 10 11 15.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = `group inline-flex items-center gap-2.5 ${className}`;
  const inner = (
    <>
      <span className="link-underline">{children}</span>
      <Arrow />
    </>
  );
  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Solid pill-free button: a charcoal block with a hairline arrow. */
export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "group inline-flex items-center gap-3 px-6 py-3.5 text-[0.9375rem] font-medium tracking-[-0.005em] transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-ink text-ivory hover:bg-ink-soft"
      : "border border-line-strong text-ink hover:border-ink";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <Arrow />
    </Link>
  );
}
