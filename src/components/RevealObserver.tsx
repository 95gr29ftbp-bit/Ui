"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for every `.reveal` element. A MutationObserver
 * picks up elements added later (client-side navigation, streamed content),
 * so it never depends on when a route finishes rendering.
 */
export function RevealObserver() {
  useEffect(() => {
    const pending = (root: ParentNode) =>
      Array.from(root.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));

    if (!("IntersectionObserver" in window)) {
      pending(document).forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    pending(document).forEach((el) => io.observe(el));

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(".reveal:not(.is-visible)")) io.observe(node);
          pending(node).forEach((el) => io.observe(el));
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
