export const featuredSystems = [
  {
    eyebrow: "Technical writing and workflow design",
    title: "Technical Writing",
    description:
      "Playbooks, technical references, and workflow guidance for investigating risk, coordinating access, and governing knowledge.",
    href: "/technical-writing",
    tags: [
      "Technical writing",
      "Workflow design",
      "Security",
      "Knowledge governance",
    ],
    theme: "playbooks",
  },
  {
    eyebrow: "AI creative intelligence pipeline",
    title: "Aegis",
    description:
      "A five-day independent build that analyzes competitor landing pages, drafts campaign directions, checks risk, and keeps review points visible.",
    href: "/work/aegis",
    image: "/logos/aegis-logo.png",
    imageAlt: "Aegis Creative Intelligence Pipeline logo.",
    tags: ["AI product", "Next.js", "Gemini", "Risk review"],
    theme: "aegis",
  },
  {
    eyebrow: "AI career readiness workflow",
    title: "Launchpad",
    description:
      "A custom Claude skill that scores readiness gaps, assigns daily work, records progress, and protects persistent career data.",
    href: "/work/launchpad",
    image: "/logos/launchpad-logo.png",
    imageAlt: "Launchpad rocket logo.",
    tags: ["Claude skill", "Workflow design", "Persistent state", "Security"],
    theme: "aegis",
  },
  {
    eyebrow: "Knowledge governance and enablement",
    title: "Knowledge Systems",
    description:
      "A governed knowledge environment that supports customer operations, onboarding, training, and reusable guidance across hundreds of resources.",
    href: "/work/knowledge-systems",
    image: "/logos/knowledge-systems-logo.png",
    imageAlt: "Knowledge Systems support hub and onboarding logo.",
    tags: ["Knowledge systems", "Governance", "Enablement"],
    theme: "knowledge",
  },
  {
    eyebrow: "Embedded analyst workflow tool",
    title: "CSI New Analyst Toolbox",
    description:
      "A browser-based internal tool that places threat-intelligence utilities, guidance, and daily workflow support in one place.",
    href: "/work/new-analyst-tool",
    image: "/work/new-analyst.png",
    imageAlt: "New Analyst Toolbox logo.",
    tags: ["Security operations", "Chrome extension", "Workflow design"],
    theme: "toolbox",
  },
] as const;
