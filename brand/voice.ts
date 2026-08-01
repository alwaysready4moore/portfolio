export const brandVoice = {
  foundation: [
    "Warm and direct",
    "Clear before clever",
    "Specific about the work",
    "Helpful without overexplaining",
  ],
  writingRules: [
    "Lead with the point or next action.",
    "Use sentence-style capitalization for headings and labels.",
    "Choose familiar words and active verbs.",
    "Use contractions when they sound natural.",
    "Keep one term for each concept.",
    "Cut setup, filler, and repeated claims.",
    "Use lists only when they make scanning easier.",
    "Keep humor brief and tied to the subject.",
  ],
  proofRules: [
    "Name the problem, constraint, decision, and result.",
    "Use metrics only when the source and meaning are clear.",
    "Separate project evidence from illustration and AI-assisted media.",
    "Describe prototypes as prototypes and simulations as simulations.",
  ],
  avoid: [
    "Vague claims such as innovative, powerful, seamless, or game-changing",
    "Repeated turn-this-into-that formulas",
    "At the intersection of",
    "Not just X, but Y constructions",
    "Three abstract nouns where one direct sentence will do",
    "Overstated conclusions that the evidence cannot support",
  ],
} as const;

export type BrandVoice = typeof brandVoice;
