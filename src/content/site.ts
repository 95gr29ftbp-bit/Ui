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
    /** Replace public/tshiamo-motswatswa-cv.pdf to update the CV. */
    cv: "/tshiamo-motswatswa-cv.pdf" as Maybe<string>,
  },

  portrait: img(
    "/work/portrait/portrait-hero.jpg",
    "Tshiamo Motswatswa in a pinstripe suit, smiling, against a stone wall",
  ),
  portraitCandid: img(
    "/work/portrait/portrait-celebrate.jpg",
    "Tshiamo Motswatswa laughing at graduation, wearing a gold-and-black hood and holding a rolled certificate out towards the camera",
  ),

  education: [
    {
      qualification: "BA Honours, Media Studies",
      institution: "University of the Witwatersrand",
      year: "2025" as Maybe<string>,
    },
    {
      qualification: "BA, Media Studies and Organisational Psychology",
      institution: "University of the Witwatersrand",
      year: "2024" as Maybe<string>,
    },
  ],

  experience: [
    {
      org: "Bluecloud AI",
      descriptor: "Communications and digital strategy agency",
      title: "Campaign Moderator",
      period: "November 2025 – Present",
      summary:
        "Daily social media operations across multiple client accounts: moderation, engagement and content execution. Influencer identification and outreach, UGC sourcing and moderation, performance reporting in Keyhole and Meta Business Suite, on-site client representation, and tender and proposal preparation.",
    },
    {
      org: "Growthpoint · Thrive Student Living",
      descriptor: "Student accommodation, including Thrive @ Apex Studios",
      title: "Marketing Intern",
      period: "September 2024 – September 2025",
      summary:
        "Planned, promoted and ran student events across cultural, wellbeing, academic and social categories, marketed on WhatsApp, Instagram, TikTok and Facebook. Event photo and video content, scheduling in Meta Business Suite, promotional design, community management, reporting, planning and budgeting.",
    },
  ] as {
    org: string;
    descriptor: string;
    title: string;
    period: string;
    summary: string;
  }[],

  /** Recognition and leadership, from the CV */
  recognition: [
    {
      title: "Golden Key International Honour Society",
      detail: "Member, top 15% achievers in the faculty",
    },
    {
      title: "Golden Key, Wits Chapter",
      detail: "Membership Recruitment Director, leading recruitment campaigns to grow the chapter",
      year: "2024",
    },
    {
      title: "ABSIP Wits",
      detail: "Marketing Director and Corporate Connections Director: marketing strategy and external partnerships for the student business society",
      year: "2024",
    },
    {
      title: "First Class certificates",
      detail: "Media and Politics (2025), Media and Gender (2025), Research Methods in Media (2024), Media Studies (2023), Reading Media Forms (2022)",
    },
  ] as { title: string; detail: string; year?: string }[],

  /** Published writing */
  writing: [
    {
      title: "Botswana Endures Behind the Colonial Media Lens",
      publication: "Leadership Magazine",
      summary:
        "An analytical feature tracing the persistence of colonial structures in Botswana’s media, from the British-dominated colonial press to today’s state-owned media.",
      url: pending("Link to the article online, if there is one") as Maybe<string>,
    },
  ],

  tools: ["Meta Business Suite", "Brandwatch", "Keyhole", "TikTok", "Instagram", "Facebook", "LinkedIn", "Microsoft Office", "Google Workspace"],

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
