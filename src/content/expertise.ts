/**
 * Capabilities, grouped in pairs. Each pair is one part of the practice:
 * a strategic discipline alongside the craft that makes it visible.
 * `seenIn` links to project slugs in projects.ts.
 */
export type Capability = {
  name: string;
  line: string;
  inPractice: string[];
  seenIn: string[];
};

export type CapabilityGroup = {
  key: string;
  title: string;
  question: string;
  capabilities: [Capability, Capability];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    key: "audience",
    title: "Audience",
    question: "Who's listening, and what do they need from us?",
    capabilities: [
      {
        name: "Social Media Management",
        line: "Running accounts as living things: planned, scheduled and paying attention.",
        inPractice: [
          "Content planning and calendars",
          "Scheduling across Instagram, Facebook and TikTok",
          "Platform-native formats: reels, carousels, stories",
        ],
        seenIn: ["bluecloud-ai-connie-brands", "growthpoint-apex-studios", "sasol"],
      },
      {
        name: "Community Management",
        line: "The comments are a channel. Answer them like a person.",
        inPractice: [
          "Responding to questions and feedback",
          "Moderating campaign conversations",
          "Spotting what the audience is really asking for",
        ],
        seenIn: ["growthpoint-apex-studios", "sasol", "bluecloud-ai-connie-brands"],
      },
    ],
  },
  {
    key: "content",
    title: "Content",
    question: "What will people actually stop for?",
    capabilities: [
      {
        name: "Content Strategy",
        line: "Deciding what to make, for whom, and why, before deciding how it looks.",
        inPractice: [
          "Content pillars and calendars",
          "Turning events into content series",
          "Matching message to platform and moment",
        ],
        seenIn: ["growthpoint-apex-studios", "bluecloud-ai-connie-brands"],
      },
      {
        name: "Creative Design",
        line: "Visual communication that respects the brand and reads in a second.",
        inPractice: [
          "Social graphics and posters",
          "Trade presenters and catalogues",
          "Motion graphics for social",
          "Photography and short-form video editing",
        ],
        seenIn: ["ors-olive-oil", "sasol", "dabur-amla-hair-oil", "long-and-lasting"],
      },
    ],
  },
  {
    key: "story",
    title: "Story",
    question: "What should people remember, and feel?",
    capabilities: [
      {
        name: "Brand Storytelling",
        line: "Finding the human version of a brand's message.",
        inPractice: [
          "Taglines and campaign concepts",
          "Portrait-led, people-first visuals",
          "Heritage and proof, told together",
        ],
        seenIn: ["sasol", "dabur-amla-hair-oil", "ors-olive-oil"],
      },
      {
        name: "Marketing Communications",
        line: "Clear, consistent messages across every place a brand shows up.",
        inPractice: [
          "Copywriting for social, print and trade",
          "Marketing communications for residents and customers",
          "Structuring information for decision-makers",
        ],
        seenIn: ["growthpoint-apex-studios", "ors-olive-oil", "dabur-amla-hair-oil"],
      },
    ],
  },
  {
    key: "campaigns",
    title: "Campaigns",
    question: "How do we get it out there, and know it worked?",
    capabilities: [
      {
        name: "Digital Marketing",
        line: "Getting the right message to the right feed, then reading the numbers honestly.",
        inPractice: [
          "Influencer engagement and user-generated content",
          "Reach and engagement tracking",
          "360° support plans: digital, social, influencer, print, in-store",
        ],
        seenIn: ["bluecloud-ai-connie-brands", "ors-olive-oil"],
      },
      {
        name: "Campaign Management",
        line: "Keeping the moving parts moving, from brief to wrap-up.",
        inPractice: [
          "Campaign coordination and execution",
          "Event marketing and activations",
          "Promotional campaigns and mechanics",
        ],
        seenIn: ["bluecloud-ai-connie-brands", "growthpoint-apex-studios", "long-and-lasting"],
      },
    ],
  },
];
