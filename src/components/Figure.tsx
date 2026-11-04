import Image from "next/image";
import type { WorkImage } from "@/content/types";

/**
 * Work shown as a printed plate: the image sits on a cream mat with a
 * museum-style caption beneath. Images are capped close to their native width
 * so nothing is stretched soft; the mat fills the layout around them.
 */
export function Figure({
  image,
  index,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  mat = true,
  upscale = 1.25,
  className = "",
}: {
  image: WorkImage;
  index?: string;
  sizes?: string;
  priority?: boolean;
  mat?: boolean;
  /** How far beyond native width the image may display (1 = never upscale) */
  upscale?: number;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={mat ? "mat flex h-full items-center justify-center" : ""}>
        <div className="zoom-on-hover w-full overflow-hidden" style={{ maxWidth: Math.round(image.width * upscale) }}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={sizes}
            priority={priority}
            quality={90}
            className="block h-auto w-full"
          />
        </div>
      </div>
      {image.caption || index ? (
        <figcaption className="caption mt-3 flex gap-3">
          {index ? <span className="tabular-nums text-subtle">Fig. {index}</span> : null}
          {image.caption ? <span>{image.caption}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
