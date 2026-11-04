import { img, video } from "./images";
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
      "At Bluecloud AI I run day-to-day social across multiple client accounts: moderation, engagement and content execution, alongside influencer outreach, UGC management and performance reporting in Keyhole and Meta Business Suite.",
      "The Connie Brands campaign, which I supported as part of the Bluecloud team, shows that work in action. The brief was to take the brand's story further than its own page could carry it.",
      "It sat inside Connie Brands' Summer Campaign on Facebook, Instagram and TikTok, which ran from 19 December 2025 to 26 January 2026 and promoted the 3-Step Firming Combo at R299, with a free 1L Hair Treatment for the first 100 orders, on Takealot and conniebrands.com.",
    ],
    objective: "Take the brand's story beyond the audience of its own page.",
    role: [
      "Supported the campaign as Campaign Moderator at Bluecloud AI",
      "Influencer identification, outreach and relationship management",
      "Social media management and content scheduling",
      "Community management",
      "Campaign execution and contribution to creative strategy",
    ],
    approach:
      "Influencer-led storytelling, so the message reached people through a voice they already follow, rather than asking a new audience to come to the brand.",
    execution: [
      {
        title: "Choosing the voice",
        body: "The centrepiece was an Instagram collaboration with creator @callherthato, published to both accounts on 25 December 2025, so the post lived in the creator’s feed as well as the brand’s.",
      },
      {
        title: "Shaping the content",
        body: "A festive unboxing reel, “POV: Connie Ferguson sent a Christmas present!!”: a gift box opened on camera, with a personal letter and the CONNIE Expert 3-Step Firming Range inside.",
      },
      {
        title: "Managing the conversation",
        body: "Followers answered with thanks to @conniebrands_za, and comments were acknowledged with likes from the post’s author. The collab drew 15 comments and 14 reposts.",
      },
      {
        title: "Reporting",
        body: "Performance across the brand's three accounts was tracked in Keyhole for the campaign report. On the brand's Instagram, the collab reel was among the top-performing posts of the campaign, with 493 likes and 14 comments.",
      },
    ],
    deliverables: [
      "Influencer campaign management",
      "Campaign moderation and community management",
      pending("Your part in the Keyhole campaign report, e.g. compiled it or contributed analysis"),
      pending("Other deliverables, e.g. content calendar or captions"),
    ],
    gallery: [
      {
        title: "The collab post",
        intro: "An Instagram collaboration between @conniebrands_za and creator @callherthato, 25 December 2025.",
        items: [
          { ...img("/work/connie/unboxing-pov.jpg", "Instagram reel frame: a creator in a navy blazer points at a white gift box under the caption 'POV: Connie Ferguson sent a Christmas present!!'", "The hook: “POV: Connie Ferguson sent a Christmas present!!”"), span: "third" },
          { ...img("/work/connie/unboxing-reveal.jpg", "Reel frame: the creator smiles while reading a letter lifted from the gift box", "The reveal: a personal letter in the box."), span: "third" },
          { ...img("/work/connie/unboxing-product.jpg", "Reel frame: an open gift box with purple shredded paper, a letter and a CONNIE Expert product box", "The product: CONNIE Expert 3-Step Firming Range."), span: "third" },
        ],
      },
      {
        title: "In the comments",
        intro: "Replies to the collab post. Usernames and profile photos are blurred.",
        items: [
          { ...img("/work/connie/comments.jpg", "Instagram comments on the collab post, including 'always the Best' and 'WOW, thank you to @conniebrands_za', with several comments liked by the author; usernames blurred", "Comments on the collab post, several liked by the author."), span: "third" },
          { ...img("/work/connie/report-top-posts.jpg", "Campaign report list of top posts by Connie Brands across Facebook, Instagram and TikTok; the 25 December collab reel with @callherthato shows 493 likes and 14 comments", "Top posts in the campaign report, including the collab reel."), span: "twoThirds" },
        ],
      },
      {
        title: "The campaign report",
        intro: "Pages from the Summer Campaign social media report, built in Keyhole, covering the brand's Facebook, Instagram and TikTok accounts from 19 December 2025 to 26 January 2026.",
        items: [
          { ...img("/work/connie/report-summary.jpg", "Keyhole timeline of daily engagements and posts for Connie Brands' Facebook, Instagram and TikTok, 19 December 2025 to 26 January 2026, with a spike on 25 December, above a summary table: 37 posts, 18,661 followers, 10.6% follower growth, 2,324 engagements, 329,450 reach and 68,624 impressions", "Timeline and summary. Engagement peaks on 25 December, the day the collab went live."), span: "full" },
          { ...img("/work/connie/report-top-posts-2.jpg", "Report list of top posts from Facebook, TikTok and Instagram between 19 December 2025 and 19 January 2026, each promoting the 3-Step Firming routine at R299", "More top posts: the R299 3-Step Firming offer."), span: "half" },
          { ...img("/work/connie/report-top-posts-3.jpg", "Report list of top posts, including the TikTok version of the 25 December collab post and a 1 January 'New Year, New Confidence' reel", "More top posts, including the TikTok collab post."), span: "half" },
        ],
      },
    ],
    outcomes: [
      { value: "40,900+", label: "views on influencer content" },
      { value: "2,326", label: "likes" },
      { value: "3×+", label: "the brand page's reach of 12,400 views" },
    ],
    outcomesNote: pending(
      "Confirm where the 40,900 views and 2,326 likes were measured (e.g. on @callherthato's account) and over what dates. The campaign report shows 493 likes for the collab on the brand's own Instagram.",
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
      "Marketing Intern at Growthpoint (Thrive Student Living), September 2024 to September 2025, working on Thrive @ Apex Studios.",
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
      "Planning, promoting and running student events",
      "Event marketing and promotional material",
      "Community management, reporting and analytics",
      "Project planning and budgeting",
    ],
    approach:
      "Real students and real moments, shared in a relaxed, peer-level voice. Events double as content engines: one evening becomes a reel, a photo set, a recap and a reason to follow.",
    execution: [
      {
        title: "Events as content",
        body: "Residence events, sports and partner activations were planned with content in mind, then photographed and filmed for short-form video, carousels and stories.",
      },
      {
        title: "Promoting across channels",
        body: "Cultural, wellbeing, academic and social events were promoted on WhatsApp, Instagram, TikTok and Facebook, using reels, countdowns and student ambassador activations to build attendance.",
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
      "Event promotion and posters",
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
          { ...img("/work/photography/five-a-side.jpg", "Residents playing five-a-side football in bibs on a netted artificial pitch at the residence", "Five-a-side at the residence."), span: "half" },
          { ...img("/work/apex/student-life-team.jpg", "The Apex Studios student life team in branded grey polos, laughing and posing against a warm yellow background", "The student life team, in Apex Studios polos."), span: "half" },
          { ...img("/work/photography/thrive-red.jpg", "Two students in red racing jackets posing in front of a Thrive Student Living backdrop", "Themed event, Thrive Student Living."), span: "third" },
          { ...img("/work/video/kfc.jpg", "Video still of a KFC-branded flag at a residence event", "Partner activation, video still."), span: "third" },
          { ...img("/work/video/blackbullion.jpg", "A student holding a Blackbullion financial-skills flyer at an event stand", "Partner stand: financial skills, video still."), span: "third" },
        ],
      },
      {
        title: "Graphics and social",
        intro: "Posters and social graphics for residents, in the Thrive @ Apex Studios identity.",
        items: [
          { ...img("/work/apex/recess-programme-volunteers.jpg", "'Join the Student Life Recess Programme volunteer team!' poster with Thrive @ Apex Studios branding, a fire pit, snack platters, painted hands and residents at a movie night", "Student Life Recess Programme, volunteer call-out poster."), span: "half" },
          { ...img("/work/graphics/grab-and-go.jpg", "'Grab & Go Breakfast' social graphic showing a hand reaching for apples beside juice boxes, with the Thrive @ Apex Studios logo", "Grab & Go Breakfast, social graphic."), span: "half" },
          { ...img("/work/graphics/thriving.jpg", "'Thriving' social graphic with an Apex Studios resident smiling in a hoodie", "Thriving, resident feature."), span: "half" },
          { ...img("/work/video/thrive-social.jpg", "Short-form video frame: 'Did you know we are on social media?' promoting the residence's Instagram", "Reel: driving residents to follow the account."), span: "half" },
        ],
      },
      {
        title: "Still to add",
        items: [
          { pending: "Content calendar or campaign plan (redacted if needed)", ratio: "16/9", span: "half" },
          { pending: "Confirm every image in this gallery is from Apex Studios work", ratio: "16/9", span: "half" },
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
      "Campaign key visuals, digital trade presenters and promotional artwork for the ORS Olive Oil range, organised around how the products are used.",
    context: "On the shelf",
    disciplines: ["Brand & graphic design", "Trade marketing", "Product communication"],
    year: pending("Year"),
    engagement: pending(
      "How this project came about: agency, employer or freelance brief.",
    ),
    cover: {
      tone: "moss",
      image: img(
        "/work/ors/key-visual-the-original.jpg",
        "ORS Olive Oil key visual: 'The Original. Trusted. True.' A smiling model holds the sheen spray, relaxer kit and wrap/set mousse among olives and an oil splash",
      ),
    },
    overview: [
      "Trade presenters have one job: help a buyer understand a product quickly enough to list it. For ORS, that meant a set of catalogue and presentation pieces that moved cleanly from consumer benefit to category data to listing information.",
      "The range is organised around how it's used (relax, maintain, treat and style), so each product has an obvious place on the shelf and in the conversation.",
    ],
    objective: "Give the trade a clear, consistent way to navigate the range.",
    role: [
      "Campaign key visuals",
      "Event invitation and activation content",
      "Layout and artwork",
      "Presentation design across catalogue and digital trade formats",
      "Promotional artwork",
    ],
    approach:
      "Hold on to ORS's own olive identity rather than reinventing it, and open with portraits so the focus stays on the people the range is for. The data and listing detail follow, in the order a buyer needs it.",
    execution: [
      {
        title: "Key visuals",
        body: "Campaign artwork that puts people, product and the olive identity in one frame: “The Original. Trusted. True.” for the core range, and Black Castor Hair Oil positioned for braids, weaves and protective styles around three benefits: strengthen, thicken, refresh.",
      },
      {
        title: "Events and activation",
        body: "A Sip & Paint invitation for 23 September 2025 at Houghton 1938, garden-chic themed and framed like a gallery piece, and a vertical reel from an ORS activation: “Everybody wants these”, showing the branded merchandise, the display stand and the spin-the-wheel.",
      },
      {
        title: "A repeatable presenter structure",
        body: "Each product presenter follows the same sequence: introduction, consumer benefits, category data, price, listing information and a 360° support plan covering digital partnerships, social media, influencers, print and in-store visibility.",
      },
      {
        title: "Launches in the range",
        body: "Presenters for the Black Castor and Coconut Sheen Sprays, the travel-sized Wrap/Set Mousse 100ml and the Heat Protection Serum, each using the same system so the range reads as one family.",
      },
      {
        title: "Promotional artwork",
        body: "A buy-two-get-one-free poster covering three mechanics (Wrap/Set Mousse, Sheen Spray and full application kits, with the ORS Girls Kit as the free item), built to read at a glance in store.",
      },
    ],
    deliverables: [
      "Campaign key visuals",
      "Digital trade presenters",
      "Promotional poster",
      "Event invitation",
      "Activation reel (9:16)",
      "Product catalogue",
    ],
    gallery: [
      {
        title: "Key visuals and promotion",
        intro: "Campaign artwork for the range, and the in-store promotion that carried it.",
        items: [
          { ...img("/work/ors/key-visual-the-original.jpg", "ORS Olive Oil key visual: 'The Original. Trusted. True.' with a smiling model holding three ORS products, framed by olives and an oil splash", "Key visual: The Original. Trusted. True."), span: "full" },
          { ...img("/work/ors/key-visual-black-castor.jpg", "ORS Olive Oil with Black Castor key visual: a model with braids dispenses the product, beside three Black Castor Hair Oil bottles and the line 'For braids, weaves & protective hair styles'", "Key visual: Black Castor Hair Oil, for braids, weaves and protective styles."), span: "twoThirds" },
          { ...img("/work/ors/promo-buy-2-get-1-free.jpg", "ORS Olive Oil 'Buy 2X & get 1 free!' poster with three offers: Wrapset Mousse, Sheen Spray and full application kits", "Promotional poster: buy two, get one free."), span: "third" },
        ],
      },
      {
        title: "Events and activation",
        intro: "Bringing the brand into the room: an invitation and the content that came out of an activation.",
        items: [
          { ...img("/work/ors/sip-and-paint-invitation.jpg", "ORS Olive Oil 'Sip & Paint' invitation in an ornate gold frame: 23 September 2025, Houghton 1938, garden chic theme, with a paintbrush and champagne", "Sip & Paint invitation, 23 September 2025."), span: "half" },
          {
            ...video(
              "/work/ors/activation-reel.mp4",
              "/work/ors/activation-reel-poster.jpg",
              "Vertical reel from an ORS activation: 'Everybody wants these', with ORS tote bags, T-shirts and caps, a product display stand and a spin-the-wheel game",
              "Activation reel: “Everybody wants these”. 9:16, 16 seconds.",
            ),
            span: "half",
          },
        ],
      },
      {
        title: "Black Castor and Coconut Sheen Spray presenter",
        intro: "A launch presenter for two new sheen sprays, from introduction to the case for listing.",
        items: [
          { ...img("/work/ors/sheen-spray-cover.jpg", "Black Castor and Coconut Sheen Spray presenter cover: two smiling models hold the sprays beside castor beans and coconut", "Cover."), span: "half" },
          { ...img("/work/ors/sheen-spray-introducing.jpg", "'Introducing the new' slide describing the ORS Olive Oil sheen spray infused with black castor and coconut oil", "Introducing the range."), span: "half" },
          { ...img("/work/ors/sheen-spray-benefits.jpg", "Consumer benefits slide comparing the Black Castor and Coconut sheen sprays", "Consumer benefits, side by side."), span: "half" },
          { ...img("/work/ors/sheen-spray-category.jpg", "Category data slide with a MAT comparison chart and styling category facts", "Category data (sources as cited on the slide)."), span: "half" },
        ],
      },
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
        title: "Heat Protection Serum presenter",
        intro: "The same system, applied to another launch.",
        items: [
          { ...img("/work/ors/heat-serum-cover.jpg", "ORS Heat Protection Serum cover with a laughing model holding the product and an olive oil splash", "Cover."), span: "third" },
          { ...img("/work/ors/heat-serum-introducing.jpg", "Slide introducing the ORS Heat Protection Serum, enriched with olive oil and vitamin E", "Introduction."), span: "third" },
          { ...img("/work/ors/heat-serum-benefits.jpg", "Consumer benefits slide for the Heat Protection Serum", "Consumer benefits."), span: "third" },
        ],
      },
      {
        title: "Still to add",
        items: [
          { pending: "Product catalogue spread (relax / maintain / treat / style)", ratio: "21/8", span: "full" },
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
    slug: "sasol",
    client: "Sasol",
    title: "A national network, told at a human scale",
    summary:
      "Social content for Sasol, including two motion pieces I designed: an SMMEs Day animation for Global Entrepreneurship Week and a scam-awareness reel.",
    context: "In the feed",
    disciplines: ["Motion design", "Social media", "Campaign copy", "Community management"],
    year: pending("Year"),
    engagement: pending(
      "Confirm how this work came about (e.g. through Bluecloud AI) and the campaign period.",
    ),
    cover: {
      tone: "night",
      image: img(
        "/work/sasol/smme-day-poster.jpg",
        "Sasol SMMEs Day animation frame: 412 retail sites across South Africa, with the words Owner, Employer, Neighbour",
      ),
    },
    overview: [
      "Big brands are easy to scroll past. The work here was about bringing Sasol down to the scale of everyday life: the local entrepreneur who runs the forecourt down the road, or the suspicious text message everyone has received.",
      "Both pieces were designed for the feed: short, sound-optional and built so the message lands even if someone only watches the first few seconds.",
    ],
    objective: "Make everyday brand messages feel personal and worth stopping for.",
    role: [
      "Design and animation of both motion pieces",
      "Campaign copy and creative concepts, from taglines to social dialogue",
      "Community management",
    ],
    approach:
      "Take a big, corporate fact and give it a human face. A network of retail sites becomes a map of neighbours; a safety warning becomes a moment everyone recognises from their own phone.",
    execution: [
      {
        title: "SMMEs Day, Global Entrepreneurship Week",
        body: "A 20-second 4:5 feed animation. It opens on a globe, lands on South Africa and fills the map one square for every site, counting up to 412 retail sites. Then it resolves on the people behind them: Owner. Employer. Neighbour.",
      },
      {
        title: "Don’t get scammed",
        body: "A 24-second vertical reel that plays out a familiar scam: a “You’ve won R10,000” text and a link to claim the prize. Just before the tap, it cuts to a shield and a clear, repeatable action: Stop. Check. Verify. Stay alert. Stay safe!",
      },
      {
        title: "Copy and community",
        body: pending(
          "Add examples of your taglines, social copy or community responses, exactly as approved.",
        ),
      },
    ],
    deliverables: [
      "SMMEs Day animation (4:5 feed)",
      "Scam-awareness reel (9:16 vertical)",
      "Campaign copy",
      "Community management",
    ],
    gallery: [
      {
        title: "Motion for the feed",
        intro: "Both pieces play muted on loop. Use the button to pause.",
        items: [
          {
            ...video(
              "/work/sasol/smme-day.mp4",
              "/work/sasol/smme-day-poster.jpg",
              "Animation: a globe turns to South Africa, the map fills with squares for 412 retail sites, then the words Owner, Employer, Neighbour appear",
              "SMMEs Day, Global Entrepreneurship Week. 4:5 feed animation, 20 seconds.",
            ),
            span: "half",
          },
          {
            ...video(
              "/work/sasol/scam-awareness.mp4",
              "/work/sasol/scam-awareness-poster.jpg",
              "Vertical reel: a phone shows a prize-winning text and a claim link, then a green shield and the words Don't get scammed. Stop. Check. Verify. Stay alert. Stay safe!",
              "Don’t get scammed. 9:16 vertical reel, 24 seconds.",
            ),
            span: "half",
          },
        ],
      },
    ],
    outcomes: pending("Add verified results if available, e.g. views or engagement on each post."),
    featured: true,
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
  img("/work/graphics/profmed.jpg", "Illustrated explainer graphic: 'What is Profmed?'", "Profmed, explainer graphic."),
  img("/work/video/netball.jpg", "Video still: 'Netball match' title over players holding a ball", "Netball match, video edit."),
  img("/work/video/residence.jpg", "Video still of a residential building against a blue sky", "Location video, still."),
  img("/work/video/fresh-fits.jpg", "Video still of three people in smart outfits on a patio", "Social video, still."),
  img("/work/video/mixer.jpg", "Video still of people at an indoor social event under a pendant light", "Event video, still."),
];
