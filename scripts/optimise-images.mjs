/**
 * Image pipeline for /public/work.
 *
 *   npm run images
 *
 * 1. Downsizes any image wider than MAX_WIDTH (keeps the original ratio) so the
 *    repository stays light. Next.js then serves AVIF/WebP at the right size.
 * 2. Writes src/content/image-manifest.json with every image's dimensions,
 *    which the content files use so layouts never shift while loading.
 *
 * Add or replace files in /public/work, run this script, and you're done.
 */
import { readdir, writeFile, rename } from "node:fs/promises";
import { join, relative, extname } from "node:path";
import sharp from "sharp";

const ROOT = new URL("..", import.meta.url).pathname;
const WORK = join(ROOT, "public", "work");
const MANIFEST = join(ROOT, "src", "content", "image-manifest.json");
const MAX_WIDTH = 2400;
const EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (EXT.has(extname(entry.name).toLowerCase())) out.push(p);
  }
  return out;
}

const manifest = {};
for (const file of (await walk(WORK)).sort()) {
  let meta = await sharp(file).metadata();
  if (meta.width > MAX_WIDTH) {
    const tmp = file + ".tmp";
    await sharp(file).resize({ width: MAX_WIDTH }).toFile(tmp);
    await rename(tmp, file);
    meta = await sharp(file).metadata();
    console.log(`resized ${relative(ROOT, file)}`);
  }
  const key = "/" + relative(join(ROOT, "public"), file).split("\\").join("/");
  manifest[key] = [meta.width, meta.height];
}
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`${Object.keys(manifest).length} images → src/content/image-manifest.json`);
