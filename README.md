# Tshiamo Motswatswa — Portfolio

A custom portfolio website built with **Next.js 16 (App Router), TypeScript and Tailwind CSS v4**. No templates, no page builders.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production preview
```

Requires Node 20+.

## Updating content (no design work needed)

All words and project data live in `src/content/`:

| File | What it controls |
| --- | --- |
| `site.ts` | Name, email, LinkedIn, other platforms, CV link, education, experience, portraits |
| `projects.ts` | Every case study, in display order. `featured: true` puts a project on the home page |
| `expertise.ts` | The eight capabilities, grouped in four pairs, and which projects they link to |

### Placeholders
Anything not yet confirmed is written as `pending("what's needed")`. It renders on the site as a dashed **"To add"** box so nothing invented is presented as fact. Search for `pending(` to see everything outstanding, and replace each with the real text.

### Images
1. Put files in `public/work/<folder>/` (JPG or PNG, up to 2400px wide is ideal).
2. Run `npm run images` — this resizes oversized files and records their dimensions in `src/content/image-manifest.json`.
3. Reference them in `projects.ts` with `img("/work/<folder>/<file>.jpg", "alt text", "caption")`.

To **replace a low-resolution image with a better one**, overwrite the file with the same name and run `npm run images`. Nothing else changes.

Next.js serves every image as AVIF/WebP at the right size automatically.

### Adding a project
Copy an entry in `projects.ts`, change the `slug`, add images, and fill in the fields. Its page at `/work/<slug>`, the work index, the sitemap and the "next project" links all update automatically.

## Publishing on your own domain

The simplest route is [Vercel](https://vercel.com) (free for personal sites):
1. Import this GitHub repository into Vercel. No settings needed.
2. In the project's settings, add an environment variable `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com` (used for SEO, sitemap and social previews).
3. Add your domain under **Settings → Domains** and follow the DNS instructions.

Netlify works the same way.

## Structure

```
src/app/            pages: home, work, work/[slug], about, expertise, contact, 404, sitemap, robots, OG image
src/components/     header, footer, project cover/card, figure, placeholders, reveal animation
src/content/        all editable content
public/work/        portfolio images
scripts/            image pipeline
docs/               audit, creative direction and architecture notes
```
