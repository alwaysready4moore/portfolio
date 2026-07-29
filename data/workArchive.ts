export type WorkArtifact = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  href: string;
  action: string;
  interactive?: boolean;
};

export const workArtifacts: WorkArtifact[] = [
  {
    title: "Sail Snapper",
    type: "Support workflow case study",
    description:
      "A CX workflow project focused on clearer screenshot capture, annotation, sharing, documentation, and adoption support.",
    tags: ["CX operations", "Tool documentation", "Workflow support", "Adoption"],
    href: "/work/sail-snapper",
    action: "Read the case study",
    interactive: true,
  },
  {
    title: "Oh, the Places Ye’ll Go… with Pirate Ship!",
    type: "Animated learning video",
    description:
      "A playful branded explainer built with original parody writing, visual sequencing, AI-assisted narration, and generated background music.",
    tags: ["Multimedia learning", "Scriptwriting", "AI-assisted production", "Brand voice"],
    href: "/work/small-wins/oh-the-places-yell-go.mp4",
    action: "Watch video",
  },
  {
    title: "Cookies & Cache",
    type: "Interactive troubleshooting lesson",
    description:
      "A guided lesson explaining browser storage, incognito testing, and how to test a theory before recommending a disruptive reset.",
    tags: ["Technical writing", "Troubleshooting", "Instructional design", "Decision support"],
    href: "/work/small-wins/cookies-and-cache",
    action: "Start lesson",
    interactive: true,
  },
  {
    title: "Tracking Email Verification",
    type: "Interactive systems lesson",
    description:
      "A scenario-based lesson covering domain ownership, SPF, DKIM, DMARC, delivery symptoms, and the boundary between support and domain administration.",
    tags: ["Email systems", "Technical communication", "Learning design", "Support enablement"],
    href: "/work/small-wins/tracking-email-verification",
    action: "Start lesson",
    interactive: true,
  },
  {
    title: "Notion Training",
    type: "Tool adoption video",
    description:
      "A concise training video designed to make a workplace knowledge tool feel clearer, more approachable, and easier to use.",
    tags: ["Tool adoption", "Learning design", "Knowledge systems", "Video production"],
    href: "/work/small-wins/notion-training.mp4",
    action: "Watch video",
  },
  {
    title: "Rippling Expense Management",
    type: "Operational process video",
    description:
      "A short visual walkthrough that turns an expense-management workflow into a clear, repeatable process.",
    tags: ["Process training", "Operations", "Instructional video", "Workflow clarity"],
    href: "/work/small-wins/rippling-expense-management.mp4",
    action: "Watch video",
  },
  {
    title: "Emotional Regulation Guide",
    type: "Support wellness guide",
    description:
      "A practical self-care and performance guide for support specialists navigating heavy queue days and emotional overload.",
    tags: ["Employee support", "Emotional regulation", "Learning design", "Queue resilience"],
    href: "/work/small-wins/emotional-regulation-guide.pdf",
    action: "Open guide",
  },
  {
    title: "Outdated Browser Troubleshooting",
    type: "Interactive diagnostic lesson",
    description:
      "A guided diagnostic path for browser, system-time, update, and network-related login failures, with safety rails and clear support boundaries.",
    tags: ["Technical support", "Browser troubleshooting", "Decision support", "Scope boundaries"],
    href: "/work/small-wins/outdated-browser",
    action: "Start diagnostic",
    interactive: true,
  },
  {
    title: "Navigating Solution Resistance",
    type: "Interactive teaching module",
    description:
      "A teaching-and-practice module for validating frustration, clarifying the path, holding compassionate boundaries, and closing the loop.",
    tags: ["De-escalation", "Boundary setting", "Support coaching", "Policy communication"],
    href: "/work/small-wins/solution-resistance",
    action: "Start module",
    interactive: true,
  },
  {
    title: "How to Translate a Webpage",
    type: "One-page workflow guide",
    description:
      "A compact visual guide showing teammates how to translate customer-facing webpages in Chrome and create more inclusive support screenshots.",
    tags: ["Inclusive support", "Workflow design", "Visual instruction", "Chrome"],
    href: "/work/small-wins/how-to-translate-a-webpage.pdf",
    action: "Open guide",
  },
  {
    title: "Navigating Spicy Users",
    type: "Interactive teaching module",
    description:
      "A teaching-and-practice module for staying grounded, leading the tone, setting behavioral boundaries, escalating appropriately, and recovering afterward.",
    tags: ["De-escalation", "Support wellness", "Communication", "Escalation judgment"],
    href: "/work/small-wins/spicy-users",
    action: "Start module",
    interactive: true,
  },
];
