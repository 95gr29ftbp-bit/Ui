/**
 * Content types for the portfolio.
 *
 * Anything that still needs to be supplied or confirmed is written as
 * `pending("what is needed")`. Pending values render on the site as clearly
 * labelled placeholders, so nothing invented is ever presented as fact.
 * Search the content folder for `pending(` to see everything outstanding.
 */

export type Pending = { pending: string };
export type Maybe<T> = T | Pending;

export const pending = (hint: string): Pending => ({ pending: hint });
export const isPending = (v: unknown): v is Pending =>
  typeof v === "object" && v !== null && "pending" in v;

export type WorkImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

/** An image slot that may still be waiting for the real file. */
export type GalleryItem =
  | (WorkImage & { span?: "full" | "half" | "third" | "twoThirds" })
  | (Pending & {
      span?: "full" | "half" | "third" | "twoThirds";
      ratio?: string; // e.g. "16/9", "4/5"
    });

export type GallerySection = {
  title: string;
  intro?: string;
  items: GalleryItem[];
};

export type Outcome = { value: string; label: string };

export type Project = {
  slug: string;
  /** Brand or client as it should be credited */
  client: string;
  title: string;
  /** One-line summary used on cards and for SEO */
  summary: string;
  /** Where the work lives, used for the "feed / shelf / campus" framing */
  context: "In the feed" | "On the shelf" | "On campus";
  disciplines: string[];
  year: Maybe<string>;
  /** How the project came about (employer, agency, freelance brief, etc.) */
  engagement: Maybe<string>;
  /** Cover composition */
  cover: {
    tone: "moss" | "forest" | "terracotta" | "ink" | "night" | "mauve";
    image?: WorkImage;
    /** Big typographic element used when the cover is type-led */
    figure?: { value: string; label: string };
  };
  overview: string[];
  objective: Maybe<string>;
  role: Maybe<string>[];
  approach: Maybe<string>;
  execution: { title: string; body: Maybe<string> }[];
  deliverables: Maybe<string>[];
  gallery: GallerySection[];
  outcomes: Outcome[] | Pending;
  outcomesNote?: Maybe<string>;
  featured?: boolean;
};
