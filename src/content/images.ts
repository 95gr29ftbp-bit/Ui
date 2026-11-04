import manifest from "./image-manifest.json";
import type { WorkImage } from "./types";

const sizes = manifest as unknown as Record<string, [number, number]>;

/**
 * Reference an image in /public by path. Dimensions come from the generated
 * manifest (`npm run images`), so a missing file fails loudly at build time
 * instead of silently breaking the layout.
 */
export function img(src: string, alt: string, caption?: string): WorkImage {
  const dims = sizes[src];
  if (!dims) {
    throw new Error(
      `Image "${src}" is not in image-manifest.json. Add it to /public/work and run "npm run images".`,
    );
  }
  return { src, alt, caption, width: dims[0], height: dims[1] };
}
