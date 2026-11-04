import { img } from "./images";
import { pending, type Maybe } from "./types";

/**
 * Site-wide profile. Update this file to change your details everywhere.
 */
export const site = {
  name: "Tshiamo Motswatswa",
  role: "Creative & Digital Marketing",
  location: "Pretoria, South Africa",
  /** Set NEXT_PUBLIC_SITE_URL in your host's settings once your domain is live. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tshiamomotswatswa.com",
  description:
    "Tshiamo Motswatswa is a creative and digital marketer working across social media, content, campaigns, community and design. Selected work for ORS, Sasol, Growthpoint / Apex Studios and Bluecloud AI.",

  /** Shown in the hero status line */
  currently: "Campaign Moderator at Bluecloud AI",
  openTo: [
    "Digital marketing",
    "Creative strategy",
    "Brand communication",
    "Social media",
    "Content creation",
  ],

  contact: {
    /** Replace with a professional address (e.g. hello@yourdomain.com) when ready. */
    email: "tshiamomotswatswa@gmail.com",
    linkedin: {
      label: "LinkedIn",
      handle: "in/tshiamo-motswatswa",
      url: "https://www.linkedin.com/in/tshiamo-motswatswa-359b941b4",
    },
    /** Other platforms. Leave as pending to show a placeholder, or set a URL. */
    other: [
      {
        label: "Instagram",
        value: pending("Add your professional Instagram URL, or remove this line"),
      },
      {
        label: "Behance",
        value: pending("Add a Behance / Dribbble URL, or remove this line"),
      },
      {
        label: "TikTok",
        value: pending("Add a TikTok URL if you share content work there, or remove"),
      },
    ] as { label: string; value: Maybe<string> }[],
    cv: pending("Add your CV as /public/tshiamo-motswatswa-cv.pdf and set this to that path") as Maybe<string>,
  },

  portrait: img(
    "/work/portrait/portrait-hero.jpg",
    "Tshiamo Motswatswa in a pinstripe suit, smiling, against a stone wall",
  ),
  portraitCandid: img(
    "/work/portrait/portrait-celebrate.jpg",
    "Tshiamo Motswatswa at Wits graduation in a gown and gold-and-black hood, smiling and holding a rolled Wits certificate",
  ),

  education: [
    {
      qualification: "BA Honours, Media Studies",
      institution: "University of the Witwatersrand",
      year: pending("Year") as Maybe<string>,
    },
    {
      qualification: "BA, Media Studies and Organisational Psychology",
      institution: "University of the Witwatersrand",
      year: pending("Year") as Maybe<string>,
    },
  ],

  experience: [
    {
      org: "Bluecloud AI",
      descriptor: "Communications and digital strategy agency",
      title: "Campaign Moderator",
      period: "November 2025 – Present",
      summary:
        "Social media management, content scheduling, community management, campaign execution and contributing to creative strategy.",
    },
    {
      org: "Growthpoint Properties / Apex Studios",
      descriptor: "Student accommodation",
      title: "Marketing / Student Life Marketing Intern",
      period: "2024 – 2025",
      summary:
        "Content creation, marketing communications, social media scheduling, event marketing, promotional material and campaign support.",
    },
  ] as {
    org: string;
    descriptor: string;
    title: string;
    period: string;
    summary: string;
  }[],

  /** Brands represented in the work on this site */
  brands: [
    "ORS Olive Oil",
    "Sasol",
    "Growthpoint / Apex Studios",
    "Bluecloud AI",
    "Connie Brands",
    "Long & Lasting",
  ],
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contact", label: "Contact" },
];
