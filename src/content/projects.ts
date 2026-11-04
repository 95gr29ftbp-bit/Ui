import { img } from "./images";
import { pending, type Project } from "./types";

/**
 * Portfolio projects, in the order they appear on /work.
 *
 * To add a project: copy an entry, give it a new `slug`, drop its images into
 * /public/work/<slug>/, run `npm run images`, and fill in the fields.
 * Mark `featured: true` to show it on the home page.
 *
 * Source of truth: Tshiamo's own redesign draft and brief, plus what is
 * visible in the supplied work. Anything not yet confirmed uses pending().
 */
export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "bluecloud-ai-connie-brands",
    client: "Bluecloud AI × Connie Brands",
    title: "Taking a brand's story beyond its own page",
    summary:
      "Social media management at Bluecloud AI, and an influencer-led campaign for Connie Brands that reached more than three times the brand page's usual audience.",
    context: "In the feed",
    disciplines: ["Campaign management", "Influencer engagement", "Social media"],
    year: "2025 – Present",
    engagement:
      "Campaign Moderator at Bluecloud AI, a communications and digital strategy agency.",
    cover: {
      tone: "ink",
      figure: { value: "40.9K+", label: "views on influencer content" },
    },
    overview: [
      "At Bluecloud AI I work across the day-to-day of social: managing accounts, scheduling content, looking after the community and executing campaigns, while contributing to the creative strategy behind them.",
      "The Connie Brands campaign is the clearest example of that work end to end. The brief was to take the brand's story further than its own page could carry it.",
    ],
    objective: "Take the brand's story beyond the audience of its own page.",
    role: [
      "Led the campaign as Campaign Moderator at Bluecloud AI",
      "Social media management and content scheduling",
      "Community management",
      "Campaign execution and contribution to creative strategy",
    ],
    approach:
      "Influencer-led storytelling, so the message reached people through a voice they already follow, rather than asking a new audience to come to the brand.",
    execution: [
      {
        title: "Choosing the voice",
        body: pending(
          "How influencers were selected and briefed (number of creators, platforms, the brief you gave them).",
        ),
      },
      {
        title: "Shaping the content",
        body: pending(
          "What the content was: formats, key messages, posting schedule, and your part in approving or moderating it.",
        ),
      },
      {
        title: "Managing the conversation",
        body: pending(
          "How you handled comments, community questions and reporting during the campaign.",
        ),
      },
    ],
    deliverables: [
      "Influencer campaign management",
      "Campaign moderation and community management",
      pending("Other deliverables, e.g. content calendar, captions, reporting"),
    ],
    gallery: [
      {
        title: "Campaign content",
        intro: "Influencer posts and the brand-page content they were measured against.",
        items: [
          { pending: "Influencer post screenshot or video still", ratio: "4/5", span: "third" },
          { pending: "Influencer post screenshot or video still", ratio: "4/5", span: "third" },
          { pending: "Brand page post for comparison", ratio: "4/5", span: "third" },
          { pending: "Platform insights screenshot showing views and likes", ratio: "21/8", span: "full" },
        ],
      },
    ],
    outcomes: [
      { value: "40,900+", label: "views on influencer content" },
      { value: "2,326", label: "likes" },
      { value: "3×+", label: "the brand page's reach of 12,400 views" },
    ],
    outcomesNote: pending(
      "Confirm the source and date range for these figures (e.g. Instagram Insights, March 2026).",
    ),
    featured: true,
  },

  // ---------------------------------------------------------------------------
  {
    slug: "growthpoint-apex-studios",
    client: "Growthpoint / Apex Studios",
    title: "Student life, told from the inside",
    summary:
      "Content, social scheduling and event marketing for Apex Studios student accommodation, built around the people and moments that shape residence life.",
    context: "On campus",
    disciplines: ["Content creation", "Event marketing", "Community management"],
    year: "2024 – 2025",
    engagement:
      "Marketing / Student Life Marketing Intern at Growthpoint Properties, working on Apex Studios.",
    cover: {
      tone: "terracotta",
      image: img(
        "/work/apex/instagram-feed.jpg",
        "The @apexstudiosjhb Instagram profile on a phone, showing a grid of residence events",
      ),
    },
    overview: [
      "Apex Studios is student accommodation, and its best marketing material is the life students actually live there. My job was to keep that life visible: planning and creating content, scheduling social, promoting events and supporting campaigns.",
      "The voice was deliberately relaxed and peer-level. Real residents, real events, captured close enough that a prospective student could picture themselves in the frame.",
    ],
    objective: "Keep students informed, engaged and part of the community.",
    role: [
      "Content creation: photography, short-form video and graphics",
      "Social media scheduling",
      "Event marketing and promotional material",
      "Marketing communications and campaign support",
    ],
    approach:
      "Real students and real moments, shared in a relaxed, peer-level voice. Events double as content engines: one evening becomes a reel, a photo set, a recap and a reason to follow.",
    execution: [
      {
        title: "Events as content",
        body: "Residence events, sports and partner activations were planned with content in mind, then photographed and filmed for short-form video, carousels and stories.",
      },
      {
        title: "A feed that feels lived in",
        body: "The @apexstudiosjhb grid mixes event coverage, people-first portraits and practical updates, so the account works for current residents and for students still choosing where to live.",
      },
      {
        title: "Listening in the comments",
        body: "The comments became a second channel: questions about fees, availability and eligibility, alongside residents saying what the community meant to them.",
      },
    ],
    deliverables: [
      "Social content: photography, reels and graphics",
      "Social media scheduling",
      "Event promotion",
      "Marketing communications",
    ],
    gallery: [
      {
        title: "The community, in the comments",
        intro: "The Apex Studios Instagram, with comments from residents and prospective students.",
        items: [
          {
            ...img(
              "/work/apex/instagram-community.jpg",
              "Instagram profile for Apex Studios with comments such as 'Apex studios is the best student accommodation' and questions about room availability",
              "@apexstudiosjhb on Instagram, with comments from residents and prospective students.",
            ),
            span: "full",
          },
        ],
      },
      {
        title: "Events and everyday life",
        intro: "Photography and video from residence events and partner activations.",
        items: [
          { ...img("/work/photography/five-a-side.jpg", "Residents playing five-a-side football on an artificial pitch at a Thrive student residence", "Five-a-side at the residence."), span: "half" },
          { ...img("/work/photography/thrive-red.jpg", "Two students in red racing jackets posing in front of a Thrive Student Living backdrop", "Themed event, Thrive Student Living."), span: "half" },
          { ...img("/work/video/thrive-social.jpg", "Short-form video frame: 'Did you know we are on social media?' promoting the residence's Instagram", "Reel: driving residents to follow the account."), span: "third" },
          { ...img("/work/video/kfc.jpg", "Video still of a KFC-branded flag at a residence event", "Partner activation, video still."), span: "third" },
          { ...img("/work/video/blackbullion.jpg", "A student holding a Blackbullion financial-skills flyer at an event stand", "Partner stand: financial skills, video still."), span: "third" },
        ],
      },
      {
        title: "Graphics",
        items: [
          { ...img("/work/graphics/grab-and-go.jpg", "'Grab & Go Breakfast' social graphic showing a hand reaching for apples, with the Thrive logo", "Grab & Go Breakfast, social graphic."), span: "half" },
          { ...img("/work/graphics/thriving.jpg", "'Thriving' social graphic with an Apex Studios resident smiling in a hoodie", "Thriving, resident feature."), span: "half" },
        ],
      },
      {
        title: "Still to add",
        items: [
          { pending: "Event poster or promotional flyer", ratio: "4/5", span: "third" },
          { pending: "Content calendar or campaign plan (redacted if needed)", ratio: "4/5", span: "third" },
          { pending: "Confirm every image in this gallery is from Apex Studios work", ratio: "4/5", span: "third" },
        ],
      },
    ],
    outcomes: pending(
      "Add verified results if you have them: follower growth, engagement rate, event attendance or enquiries over your internship.",
    ),
    featured: true,
  },

  // ---------------------------------------------------------------------------
  {
    slug: "ors-olive-oil",
    client: "ORS Olive Oil",
    title: "Trade presenters that make a range easy to buy",
    summary:
      "A catalogue, digital trade presenters and promotional artwork for the ORS Olive Oil range, organised around how the products are used.",
    context: "On the shelf",
    disciplines: ["Brand & graphic design", "Trade marketing", "Product communication"],
    year: pending("Year"),
    engagement: pending(
      "How this project came about: agency, employer or freelance brief.",
    ),
    cover: {
      tone: "moss",
      image: img(
        "/work/ors/mousse-cover.jpg",
        "ORS Olive Oil Wrap/Set Mousse 100ml trade presenter cover, with a smiling model and the product on a green field",
      ),
    },
    overview: [
      "Trade presenters have one job: help a buyer understand a product quickly enough to list it. For ORS, that meant a set of catalogue and presentation pieces that moved cleanly from consumer benefit to category data to listing information.",
      "The range is organised around how it's used (relax, maintain, treat and style), so each product has an obvious place on the shelf and in the conversation.",
    ],
    objective: "Give the trade a clear, consistent way to navigate the range.",
    role: [
      "Layout and artwork",
      "Presentation design across catalogue and digital trade formats",
      "Promotional artwork",
    ],
    approach:
      "Hold on to ORS's own olive identity rather than reinventing it, and open with portraits so the focus stays on the people the range is for. The data and listing detail follow, in the order a buyer needs it.",
    execution: [
      {
        title: "A repeatable presenter structure",
        body: "Each product presenter follows the same sequence: introduction, consumer benefits, category data, price, listing information and a 360° support plan covering digital partnerships, social media, influencers, print and in-store visibility.",
      },
      {
        title: "Launches in the range",
        body: "Presenters for the travel-sized Wrap/Set Mousse 100ml, the Heat Protection Serum and the new Sheen Sprays, each using the same system so the range reads as one family.",
      },
      {
        title: "Promotional artwork",
        body: "Buy-two-get-one-free mechanics for the Wrap/Set Mousse, Sheen Spray and full application kits, built to read at a glance in store.",
      },
    ],
    deliverables: [
      "Product catalogue",
      "Digital trade presenters",
      "Promotional artwork",
    ],
    gallery: [
      {
        title: "Wrap/Set Mousse 100ml presenter",
        intro: "From introduction to listing in nine slides.",
        items: [
          { ...img("/work/ors/mousse-introducing.jpg", "Slide introducing the travel-sized ORS Wrap/Set Mousse 100ml, with a cosmetics bag", "Introducing the travel size."), span: "half" },
          { ...img("/work/ors/mousse-benefits.jpg", "Consumer benefits slide listing ease of use, sleek styles and suitability for all hair types", "Consumer benefits."), span: "half" },
          { ...img("/work/ors/mousse-category-data.jpg", "Category data slide with a bar chart of styling segment value growth", "Category data (source: Nielsen, as cited on the slide)."), span: "half" },
          { ...img("/work/ors/mousse-360-plan.jpg", "360 support plan slide with icons for digital partnerships, social media, influencers, print and in-store", "The 360° support plan."), span: "half" },
          { ...img("/work/ors/mousse-leadership.jpg", "Slide stating ORS leads the mousse format within the styling segment", "Category leadership."), span: "half" },
          { ...img("/work/ors/mousse-listing.jpg", "Listing information slide with unit, shrink and shipper barcodes", "Listing information."), span: "half" },
        ],
      },
      {
        title: "Heat Protection Serum and Sheen Sprays",
        intro: "The same system, applied to new launches.",
        items: [
          { ...img("/work/ors/heat-serum-cover.jpg", "ORS Heat Protection Serum cover with a laughing model holding the product and an olive oil splash", "Heat Protection Serum, cover."), span: "half" },
          { ...img("/work/ors/heat-serum-introducing.jpg", "Slide introducing the ORS Heat Protection Serum, enriched with olive oil and vitamin E", "Heat Protection Serum, introduction."), span: "half" },
          { ...img("/work/ors/sheen-spray-cover.jpg", "ORS Olive Oil New Sheen Sprays cover with two smiling models holding the sprays", "New Sheen Sprays, cover."), span: "half" },
          { ...img("/work/ors/heat-serum-benefits.jpg", "Consumer benefits slide for the Heat Protection Serum", "Heat Protection Serum, consumer benefits."), span: "half" },
        ],
      },
      {
        title: "Still to add",
        items: [
          { pending: "Product catalogue spread (relax / maintain / treat / style)", ratio: "16/9", span: "half" },
          { pending: "Buy 2 get 1 free promotional artwork", ratio: "16/9", span: "half" },
        ],
      },
    ],
    outcomes: pending(
      "Add outcomes only if verified, e.g. listings secured or presenters used in buyer meetings.",
    ),
    featured: true,
  },

  // ---------------------------------------------------------------------------
  {
    slug: "dabur-amla-hair-oil",
    client: "Dabur Amla Hair Oil",
    title: "Heritage, made persuasive at shelf",
    summary:
      "A trade presentation and product communication design for the Dabur Amla Hair Oil range, built from supplied brand, product and market materials.",
    context: "On the shelf",
    disciplines: ["Presentation design", "Product communication", "Information design"],
    year: pending("Year"),
    engagement: pending(
      "Describe the context accurately: e.g. a freelance design brief using materials supplied by the brand's distributor. (Not listed as employment.)",
    ),
    cover: {
      tone: "forest",
      image: img(
        "/work/amla/cover.jpg",
        "Dabur Amla Hair Oil trade presenter cover: 'The original Amla hair oil, trusted for generations', with the bottle set in an arch",
      ),
    },
    overview: [
      "Dabur Amla is a brand with more than a century of history behind it. The challenge for a trade audience is turning that heritage into reasons to list, using proof points a buyer can repeat.",
      "The presenter moves from brand story to ritual, from proposition to market insight, then into the range itself. Search data and social proof sit alongside the heritage message so it reads as current, not nostalgic.",
    ],
    objective:
      "Give retail buyers a clear, credible case for the range, from brand heritage to individual variants.",
    role: [
      "Presentation design: layout, visual system and slide design",
      pending("Confirm whether you also structured the content, wrote copy or sourced the research"),
    ],
    approach:
      "Let the brand's own green and gold carry the identity, use an arch motif drawn from the bottle's heritage, and keep every page to one idea, with the evidence close by.",
    execution: [
      {
        title: "Brand and ritual",
        body: "An opening that states the heritage plainly, followed by an illustrated how-to-use page that turns daily use and pre-wash treatment into simple, repeatable rituals.",
      },
      {
        title: "Proposition and insight",
        body: "A four-part customer proposition (heritage, value, authentic origin and a complete portfolio) and two market-insight pages pairing scalp-health and natural-ingredient search trends with where hair-care discovery happens.",
      },
      {
        title: "Social proof",
        body: "Creator and consumer reviews from TikTok, Instagram and YouTube, so the buyer sees the product already moving in culture.",
      },
      {
        title: "The range",
        body: "One page per variant (Original, Cooling, Gold, Anti-Dandruff and Jasmine), each with what it is ideal for, key ingredients and benefits in the same order.",
      },
    ],
    deliverables: ["Trade presenter (12 pages)", "Product communication pages for five variants"],
    gallery: [
      {
        title: "Story, ritual and proposition",
        items: [
          { ...img("/work/amla/no1-hair-oil.jpg", "Slide: 'The world's No. 1 hair oil' with four brand pillars", "The brand story."), span: "half" },
          { ...img("/work/amla/how-to-use.jpg", "Illustrated how-to-use slide showing daily use and a three-step pre-wash treatment", "Two simple rituals, illustrated."), span: "half" },
          { ...img("/work/amla/proposition.jpg", "Customer proposition slide: heritage and trust, superior value, authentic origin, a complete portfolio", "Why Dabur Amla wins at shelf."), span: "full" },
        ],
      },
      {
        title: "Insight and proof",
        items: [
          { ...img("/work/amla/scalp-insight.jpg", "Market insight slide on scalp health with a table of search terms and growth", "Market insight: scalp health (sources as cited on the slide)."), span: "half" },
          { ...img("/work/amla/ingredient-insight.jpg", "Market insight slide on natural ingredients with Amla highlighted in a search table", "Market insight: natural ingredients."), span: "half" },
          { ...img("/work/amla/social-proof.jpg", "Social proof slide with creator review videos from TikTok, Instagram and YouTube", "Consumer reviews and testimonials."), span: "full" },
        ],
      },
      {
        title: "The range",
        items: [
          { ...img("/work/amla/range-original.jpg", "Range page for Dabur Amla Hair Oil Original with key benefits", "Original."), span: "half" },
          { ...img("/work/amla/range-gold.jpg", "Range page for Dabur Amla Gold Oil with key benefits", "Gold."), span: "half" },
        ],
      },
    ],
    outcomes: pending("Add the outcome if known, e.g. how and where the presenter was used."),
    featured: true,
  },

  // ---------------------------------------------------------------------------
  {
    slug: "sasol",
    client: "Sasol",
    title: "Everyday promotions, written warmly",
    summary:
      "Social campaign content and community management for Sasol, including Sasol Rewards, written to sound warm, local and close to everyday life.",
    context: "In the feed",
    disciplines: ["Social media", "Campaign copy", "Community management"],
    year: pending("Year"),
    engagement: pending(
      "Confirm how this work came about (e.g. through Bluecloud AI) and the campaign period.",
    ),
    cover: {
      tone: "night",
      image: img(
        "/work/video/sasol-rewards.jpg",
        "Video still of a Sasol Rewards storefront with colourful 'Danki Mzansi' window lettering",
      ),
    },
    overview: [
      "Forecourt promotions are easy to ignore. The work here was about making them feel personal: copy and concepts that sound like a neighbour, not a price list, and a community that gets real answers when it talks back.",
    ],
    objective: "Make everyday promotions feel personal and worth stopping for.",
    role: [
      "Campaign copy and creative concepts, from taglines to social dialogue",
      "Social media campaigns",
      "Community management",
    ],
    approach:
      "Emotionally resonant, family-focused messaging shaped around real moments, such as the school holidays, in a voice that's warm and local.",
    execution: [
      {
        title: "Taglines and concepts",
        body: pending("Add two or three of your taglines or concept lines, exactly as approved."),
      },
      {
        title: "Social dialogue",
        body: pending(
          "Describe the social dialogue concepts: the formats and the conversation you wanted people to have.",
        ),
      },
      {
        title: "Community management",
        body: pending(
          "How you managed responses: volume, tone of voice guidelines, escalation.",
        ),
      },
    ],
    deliverables: [
      "School holiday taglines",
      "Social dialogue concepts",
      "Campaign copy",
      "Community management",
    ],
    gallery: [
      {
        title: "Campaign",
        items: [
          {
            ...img(
              "/work/sasol/danki-mzansi-poster.jpg",
              "Sasol Delight 'Danki Mzansi' promotion poster: 'Unga stressi, we got you', Zanele's Basket for R48.90",
              "Campaign key visual: Sasol Delight 'Danki Mzansi' promotion (campaign context).",
            ),
            span: "third",
          },
          { ...img("/work/video/sasol-rewards.jpg", "Video still of a Sasol Rewards storefront with 'Danki Mzansi' lettering", "Sasol Rewards, video still."), span: "third" },
          { pending: "Social post or caption you wrote", ratio: "4/5", span: "third" },
          { pending: "Community management examples (screenshots, names blurred)", ratio: "21/8", span: "full" },
        ],
      },
    ],
    outcomes: pending("Add verified campaign results if available."),
  },

  // ---------------------------------------------------------------------------
  {
    slug: "long-and-lasting",
    client: "Long & Lasting",
    title: "On campus, and on the shelf",
    summary:
      "A University of Johannesburg campus activation and product graphics for Long & Lasting hair care.",
    context: "On campus",
    disciplines: ["Brand & graphic design", "Event marketing"],
    year: "2025",
    engagement: pending("How this project came about: agency, employer or freelance brief."),
    cover: {
      tone: "mauve",
      image: img(
        "/work/long-and-lasting/uj-activation-prizes.jpg",
        "Long & Lasting campus activation poster: 'We're coming to campus', University of Johannesburg, 19 September 2025",
      ),
    },
    overview: [
      "Long & Lasting is a hair-care brand meeting students where they are. The work covers a campus activation at UJ's Auckland Park campus on 19 September 2025 and product graphics that explain each product in a single frame.",
    ],
    objective: pending("The objective of the activation, e.g. sampling, awareness, social content."),
    role: ["Graphic design", pending("Any role in planning or running the activation itself")],
    approach:
      "Big, loud and pink, matching the brand's own colour, with clear practical detail (date, time, place) and a simple promise: prizes and freebies.",
    execution: [
      {
        title: "Activation teaser",
        body: "Social posters announcing the campus visit, in two variants: one leading with prizes, one with freebies.",
      },
      {
        title: "Product graphics",
        body: "Benefit-led graphics for the moisturiser and braid spray range, pairing product shots with short, scannable claims.",
      },
    ],
    deliverables: ["Activation social posters", "Product graphics"],
    gallery: [
      {
        title: "Activation and product graphics",
        items: [
          { ...img("/work/long-and-lasting/uj-activation-prizes.jpg", "Long & Lasting UJ activation poster with relaxer product and 'Unlock the fun' line", "Activation teaser."), span: "third" },
          { ...img("/work/graphics/ll-moisturisers.jpg", "Long & Lasting hair moisturisers and braid spray product graphic", "Hair Moisturisers & Braid Spray."), span: "twoThirds" },
          { pending: "Photos or video from the activation day", ratio: "4/5", span: "third" },
          { pending: "Anti-Dandruff Braid Spray graphic (corrected spelling)", ratio: "16/9", span: "twoThirds" },
        ],
      },
    ],
    outcomes: pending("Add verified results if available, e.g. turnout or samples given."),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);

/** Smaller pieces shown in the archive strip on /work */
export const archive = [
  img("/work/graphics/dabur-herbl-miswak.jpg", "Dabur Herb'l and Miswak natural toothpaste product graphic", "Dabur Herb'l & Miswak, product graphic."),
  img("/work/graphics/profmed.jpg", "Illustrated explainer graphic: 'What is Profmed?'", "Profmed, explainer graphic."),
  img("/work/video/netball.jpg", "Video still: 'Netball match' title over players holding a ball", "Netball match, video edit."),
  img("/work/video/residence.jpg", "Video still of a residential building against a blue sky", "Location video, still."),
  img("/work/video/fresh-fits.jpg", "Video still of three people in smart outfits on a patio", "Social video, still."),
  img("/work/video/mixer.jpg", "Video still of people at an indoor social event under a pendant light", "Event video, still."),
];
