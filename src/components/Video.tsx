"use client";

import { useEffect, useRef, useState } from "react";
import type { WorkVideo } from "@/content/types";

/**
 * Motion work, shown like the image plates: on a cream mat with a caption.
 * Plays muted and looping while in view, pauses when scrolled away, and
 * never autoplays for visitors who prefer reduced motion.
 */
export function Video({ video, index, mat = true }: { video: WorkVideo; index?: string; mat?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  const { poster } = video;
  return (
    <figure className="h-full">
      <div className={mat ? "mat flex items-center justify-center" : ""}>
        <div className="relative w-full" style={{ maxWidth: Math.min(poster.width, 560) }}>
          <video
            ref={ref}
            src={video.src}
            poster={poster.src}
            width={poster.width}
            height={poster.height}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={poster.alt}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="block h-auto w-full bg-ink"
          />
          <button
            type="button"
            onClick={toggle}
            className="eyebrow absolute bottom-3 left-3 bg-ink/80 px-3 py-2 text-ivory backdrop-blur-sm transition-colors hover:bg-ink"
          >
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>
      {video.caption || index ? (
        <figcaption className="caption mt-3 flex gap-3">
          {index ? <span className="tabular-nums text-subtle">Fig. {index}</span> : null}
          {video.caption ? <span>{video.caption}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
