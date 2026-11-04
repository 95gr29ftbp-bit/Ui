"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled || open ? "border-b border-line bg-ivory/90 backdrop-blur-md" : "border-b border-transparent bg-ivory"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex items-baseline gap-3" aria-label={`${site.name}, home`}>
          <span className="display text-[1.375rem] leading-none tracking-[-0.01em] md:text-[1.5rem]">
            Tshiamo <em>Motswatswa</em>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9 text-[0.9375rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="link-reveal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="-mr-2 flex h-11 items-center gap-3 px-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="eyebrow">{open ? "Close" : "Menu"}</span>
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-500 ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-500 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ivory md:hidden"
      >
        <nav aria-label="Mobile" className="shell flex h-full flex-col justify-between pt-8 pb-10">
          <ul className="space-y-1">
            {[{ href: "/", label: "Home" }, ...nav].map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className="display text-[2.5rem] leading-none">{item.label}</span>
                  <span className="eyebrow tabular-nums text-subtle">{String(i).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-2 text-[0.9375rem]">
            <a href={`mailto:${site.contact.email}`} className="link-underline">
              {site.contact.email}
            </a>
            <p className="text-muted">{site.location}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
