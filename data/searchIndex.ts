export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  type: "Page" | "Case Study" | "Guide" | "Field Note" | "Lab";
  keywords: string[];
};

export const searchIndex: SearchEntry[] = [
  {
    title: "Work",
    description: "Case studies, working systems, guides, tools, and supporting artifacts.",
    href: "/work",
    type: "Page",
    keywords: ["portfolio", "projects", "systems", "case studies"],
  },
  {
    title: "About Marquetta",
    description: "Background across security, support, knowledge systems, operations, and AI workflow design.",
    href: "/about",
    type: "Page",
    keywords: ["about", "security", "support", "knowledge management", "AI"],
  },
  {
    title: "Résumé",
    description: "Professional experience, technical skills, systems work, and accomplishments.",
    href: "/resume",
    type: "Page",
    keywords: ["resume", "experience", "skills", "career"],
  },
  {
    title: "Aegis",
    description: "AI creative intelligence pipeline for strategy, campaign concepts, risk review, and lower-risk rewrites.",
    href: "/work/aegis",
    type: "Case Study",
    keywords: ["AI", "Gemini", "Next.js", "risk review", "advertising", "creative intelligence"],
  },
  {
    title: "Launchpad",
    description: "A persistent Claude skill for career-readiness assessment, prioritized work, progress tracking, and secure artifacts.",
    href: "/work/launchpad",
    type: "Case Study",
    keywords: ["Claude", "AI workflow", "career", "persistent state", "security audit", "command center"],
  },
  {
    title: "New Analyst Tool",
    description: "An embedded analyst workflow tool combining guidance, utilities, and daily security operations support.",
    href: "/work/new-analyst-tool",
    type: "Case Study",
    keywords: ["security operations", "analyst", "Chrome extension", "workflow", "toolbox"],
  },
  {
    title: "Knowledge Systems",
    description: "A governed internal knowledge environment supporting customer operations, onboarding, training, and reusable guidance.",
    href: "/work/knowledge-systems",
    type: "Case Study",
    keywords: ["knowledge management", "governance", "enablement", "documentation", "onboarding"],
  },
  {
    title: "Sail Snapper",
    description: "A support workflow project for screenshot capture, annotation, sharing, documentation, and adoption.",
    href: "/work/sail-snapper",
    type: "Case Study",
    keywords: ["screenshots", "CX", "support", "documentation", "adoption"],
  },
  {
    title: "ChartFinder",
    description: "A local-first Chrome extension that extracts visible shipment and support context for response workflows.",
    href: "/work/chartfinder",
    type: "Case Study",
    keywords: ["Chrome", "extension", "local-first", "clipboard", "support"],
  },
  {
    title: "Cookies & Cache",
    description: "Interactive browser troubleshooting lesson about storage, incognito testing, and evidence-led diagnosis.",
    href: "/work/small-wins/cookies-and-cache",
    type: "Guide",
    keywords: ["Chrome", "browser", "cache", "cookies", "troubleshooting"],
  },
  {
    title: "Tracking Email Verification",
    description: "Interactive lesson covering SPF, DKIM, DMARC, domain ownership, and delivery symptoms.",
    href: "/work/small-wins/tracking-email-verification",
    type: "Guide",
    keywords: ["email", "SPF", "DKIM", "DMARC", "domain", "security"],
  },
  {
    title: "Outdated Browser Troubleshooting",
    description: "A guided diagnostic path for browser, system-time, update, and network-related login failures.",
    href: "/work/small-wins/outdated-browser",
    type: "Guide",
    keywords: ["browser", "Chrome", "login", "network", "diagnostic"],
  },
  {
    title: "How to Translate a Webpage",
    description: "A compact guide for translating customer-facing webpages in Chrome.",
    href: "/work/small-wins/how-to-translate-a-webpage.pdf",
    type: "Guide",
    keywords: ["Chrome", "translation", "inclusive support", "visual guide"],
  },
  {
    title: "Navigating Spicy Users",
    description: "An interactive module for de-escalation, behavioral boundaries, escalation, and recovery.",
    href: "/work/small-wins/spicy-users",
    type: "Guide",
    keywords: ["de-escalation", "support", "communication", "boundaries"],
  },
  {
    title: "5 Ways AI Tools Are Making You Worse at Being Human",
    description: "A cultural analysis of how daily AI prompting can erode empathy, patience, and communication.",
    href: "/field-notes/5-ways-ai-tools-are-making-you-worse-at-being-human",
    type: "Field Note",
    keywords: ["AI", "empathy", "communication", "psychology", "prompting"],
  },
  {
    title: "Your Email Security Tool Stopped Yesterday's Attacks",
    description: "Why static email security misses novel attacks and what behavior-based detection changes.",
    href: "/field-notes/your-email-security-tool-stopped-yesterdays-attacks-heres-what-its-missing-today",
    type: "Field Note",
    keywords: ["email security", "cybersecurity", "behavior detection", "threats"],
  },
  {
    title: "The Romance of the Scammed",
    description: "Human trust, con-artist psychology, sketchy links, and modern business email compromise.",
    href: "/field-notes/the-romance-of-the-scammed-why-humans-are-biologically-programmed-to-trust-sketchy-links",
    type: "Field Note",
    keywords: ["scams", "phishing", "trust", "cybersecurity", "BEC"],
  },
  {
    title: "What a SpongeBob Episode Taught Me About Pride and Change",
    description: "Organizational change resistance, identity, ego, and why transformation projects collapse.",
    href: "/field-notes/what-a-spongebob-episode-taught-me-about-pride-change-and-why-most-corporate-initiatives-implode",
    type: "Field Note",
    keywords: ["change management", "workplace", "resistance", "leadership"],
  },
  {
    title: "Moore Family Print Shop",
    description: "A small-batch maker business and product-systems lab built around 3D printing.",
    href: "/lab/moore-family-print-shop",
    type: "Lab",
    keywords: ["3D printing", "maker", "Etsy", "products", "small business"],
  },
  {
    title: "Merge the Union",
    description: "A playable browser game and team icebreaker built around collaborative map chaos.",
    href: "/lab/merge-the-union",
    type: "Lab",
    keywords: ["browser game", "creative technology", "interaction design", "team"],
  },
  {
    title: "Damali Street",
    description: "An AI-assisted rock-star identity and narrative world explored through music, visuals, and era design.",
    href: "/lab/damali-street",
    type: "Lab",
    keywords: ["music", "AI", "branding", "creative direction", "Damali"],
  },
];
