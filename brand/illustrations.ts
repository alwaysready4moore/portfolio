export const illustrationRoles = [
  {
    id: "researcher",
    name: "The Researcher",
    mission: "Find the right answer.",
    represents: [
      "Investigation",
      "Troubleshooting",
      "Research",
      "Field Notes",
    ],
    props: [
      "Magnifying glass",
      "Notebook",
      "Pencil",
      "Documents",
    ],
    behaviors: [
      "Following a cyan trail",
      "Comparing information",
      "Inspecting labels",
      "Recording observations",
    ],
  },
  {
    id: "librarian",
    name: "The Librarian",
    mission: "Organize information so someone else can succeed.",
    represents: [
      "Knowledge systems",
      "Documentation",
      "SOPs",
      "Internal wikis",
    ],
    props: [
      "Folders",
      "Labels",
      "Filing cabinet",
      "Sticky notes",
    ],
    behaviors: [
      "Sorting",
      "Indexing",
      "Shelving",
      "Connecting related information",
    ],
  },
  {
    id: "builder",
    name: "The Builder",
    mission: "Turn ideas into working systems.",
    represents: [
      "Prototypes",
      "AI workflows",
      "Automation",
      "Experiments",
    ],
    props: [
      "Laptop",
      "Wrench",
      "Prototype pieces",
      "Notebook",
      "Coffee mug",
    ],
    behaviors: [
      "Assembling",
      "Testing",
      "Sketching",
      "Iterating",
    ],
  },
  {
    id: "guide",
    name: "The Guide",
    mission: "Help someone move through the system.",
    represents: [
      "Training",
      "Onboarding",
      "Enablement",
      "Communication",
    ],
    props: [
      "Map",
      "Signposts",
      "Checklist",
      "Pointer",
    ],
    behaviors: [
      "Explaining",
      "Directing",
      "Welcoming",
      "Showing the next step",
    ],
  },
  {
    id: "guardian",
    name: "The Guardian",
    mission: "Protect people without creating unnecessary friction.",
    represents: [
      "Security",
      "Governance",
      "Trust",
      "Human review",
    ],
    props: [
      "Shield",
      "Clipboard",
      "Badge",
      "Approval stamp",
    ],
    behaviors: [
      "Reviewing",
      "Checking access",
      "Approving requests",
      "Protecting information",
    ],
  },
  {
    id: "assistant",
    name: "The Assistant",
    mission: "Remove repetitive work while keeping people in control.",
    represents: [
      "AI assistance",
      "Automation",
      "Sorting",
      "Workflow support",
    ],
    props: [
      "Documents",
      "Folders",
      "Grabber arms",
      "Small display",
      "Wheels",
    ],
    behaviors: [
      "Carrying",
      "Sorting",
      "Highlighting",
      "Handing work back to a person",
    ],
  },
] as const;

export const illustrationSystem = {
  internalName: "The Lab Crew",

  publicDescription:
    "Recurring editorial characters that show people working inside systems.",

  characterDirection: {
    identity:
      "A Black woman represented across multiple professional roles, rather than six unrelated mascots.",
    tone: "Quietly competent, warm, observant, and focused.",
    silhouette:
      "Simplified proportions, recognizable natural-hair silhouette, dark clothing, and minimal facial detail.",
  },

  levels: [
    {
      level: 1,
      name: "Utility icons",
      use: "Navigation, buttons, badges, and compact interface details.",
    },
    {
      level: 2,
      name: "Editorial pictograms",
      use: "One character performing one clear action on cards and section introductions.",
    },
    {
      level: 3,
      name: "Narrative scenes",
      use: "Larger visual stories for case studies, Field Notes, and major page headers.",
    },
  ],

  recurringMotifs: [
    {
      name: "Cyan path",
      meaning: "The improved route, useful connection, or correct next step.",
    },
    {
      name: "Cyan spark",
      meaning: "A moment of clarity, discovery, or successful understanding.",
    },
    {
      name: "Notebook",
      meaning: "Observation, thought, documentation, or learning.",
    },
    {
      name: "Folder",
      meaning: "Knowledge, evidence, or organized information.",
    },
    {
      name: "Sticky note",
      meaning: "A question, test, version, or active iteration.",
    },
    {
      name: "Coffee mug",
      meaning: "Work actively in progress.",
    },
    {
      name: "Paperclip",
      meaning: "A relationship or connection between ideas.",
    },
  ],

  rules: [
    "Every illustration should show what work is happening.",
    "Characters are visual storytellers, not mascots.",
    "Technology supports human judgment and does not replace it.",
    "Cyan communicates progress, clarity, connection, or discovery.",
    "Do not use cyan as general decoration.",
    "Use one central idea per illustration.",
    "Keep the scene readable at thumbnail size.",
    "Avoid generic robots, glowing brains, stock SaaS art, and corporate Memphis shapes.",
    "Avoid over-cute expressions, exaggerated acting, and unnecessary character detail.",
    "Messy scenes should still communicate movement toward a useful outcome.",
  ],

  reviewQuestions: [
    "Who is doing the work?",
    "What are they trying to accomplish?",
    "How does the cyan signal show the clearer or more useful path?",
  ],
} as const;

export type IllustrationRole =
  (typeof illustrationRoles)[number];

export type IllustrationRoleId =
  IllustrationRole["id"];