# Project notes: audit, direction, architecture

## Stage 1: Audit

**Sources reviewed (Canva):** the live "CREATIVE PORTFOLIO" site (tmotswatswa.my.canva.site), the "Portfolio Redesign (Draft)" deck, ORS Wrap/Set Mousse, Heat Protection Serum and Sheen Spray presenters, the Dabur Amla Trade Presenter and the Long & Lasting UJ activation posters. ORS key visuals, the Buy 2 Get 1 Free poster and the Black Castor & Coconut Sheen Spray presenter were supplied directly at full resolution. Sasol work comes only from two motion pieces supplied directly as video, the only Sasol artwork Tshiamo designed; no Sasol artwork from Canva is used.

**Worth keeping**
- Real photography and short-form video. The people-first event work is a genuine strength.
- The Apex Studios Instagram mock-up with resident comments: real social proof.
- The ORS and Amla presenters: well structured, and they show trade-marketing thinking, not just layout.
- The Connie Brands result (40,900+ views, 2,326 likes, 3x+ the page's 12,400 views).
- The redesign draft's copy: specific, honest, first-person. Most site copy is built on it.

**Needed improving**
- The old site is one long collage: no case studies, roles or objectives, so it read as "graphic designer" rather than marketer.
- Heavy display type, gradients and decorative icons competed with the work.
- No separation between client data and outcomes.

**Typos found in the source work** (worth fixing in Canva before re-exporting):
- Long & Lasting UJ poster (freebies version): "University of **Johanesbirg**".
- Long & Lasting braid spray graphic: "Anti-**Danddruff**" and "looking**moisturised**".
- ORS Mousse category slide: "Ethnic hair **hare** category".
- ORS Black Castor & Coconut Sheen Spray presenter: "**360% DEGREE** SUPPORT PLAN" (that slide is left off the site until fixed).

**Positioning:** a marketer who understands both strategy and craft. Each project is framed by where it has to perform: *in the feed*, *on the shelf*, *on campus*.

## Stage 2: Creative direction

- **Concept:** "editorial field notes": a studio monograph rather than a template.
- **Type:** Instrument Serif (display, with italics for emphasis) and Hanken Grotesk (text, labels). Both are self-hosted.
- **Colour:** warm ivory `#F5F0E8`, cream `#ECE4D6`, sand `#DDD0BC`, charcoal `#1E1C19`, clay accent `#8A4E32`. Project covers use muted, brand-derived fields (moss, forest, terracotta, night, mauve). All text colours meet WCAG AA.
- **Layout:** a 12-column grid, asymmetric compositions, numbered sections over hairline rules, and generous whitespace.
- **Images:** shown as printed plates on a cream mat with "Fig." captions. Each image is capped near its native width, so nothing is upscaled soft.
- **Motion:** a line-by-line headline entrance, gentle fade-up on scroll and a slow image push-in on hover. All of it is disabled under `prefers-reduced-motion`.

## Stage 3: Architecture

```
/                 hero · where the work lives · selected work (4) · capabilities · about · contact
/work             all case studies + archive of smaller pieces
/work/[slug]      title · cover · facts · overview · objective · role · approach ·
                  strategy & execution · deliverables · galleries · outcomes · next project
/about            story · education & experience · principles · photography
/expertise        8 capabilities in 4 pairs, each linked to the work that shows it
/contact          email (copy) · LinkedIn · other platforms · CV · who to get in touch
```

## Content still needed from Tshiamo

Search `pending(` in `src/content/`. The main items are:
1. **High-resolution images.** The current images come from Canva previews, because Canva's download host was blocked in the build environment. Export full-size JPGs from Canva and overwrite the same filenames in `public/work/`, especially `portrait/portrait-hero.jpg` and `portrait/portrait-celebrate.jpg`.
2. **Context and year for ORS, Dabur Amla, Sasol and Long & Lasting:** who the work was for, and how it came about.
3. **Bluecloud / Connie Brands:** visuals, plus the source and date range for the figures.
4. **Sasol:** year and engagement context, plus samples of approved taglines, copy and community responses.
5. **Apex Studios:** confirm that every gallery image is from that work.
6. Verified outcomes, where they exist.
7. Graduation years, a CV PDF, other platform links and a line for "Outside the brief".
