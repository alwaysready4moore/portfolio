export const brandPhilosophy = {
  thesis: "I build systems that help people find the right answer.",

  supportingStatement:
    "AlwaysReady4Moore turns scattered information, repetitive work, and unclear processes into practical systems people can confidently use.",

  designPrinciple:
    "Every design decision should make the work easier to understand.",

  principles: [
    {
      title: "Humans first",
      description:
        "Technology should support human judgment, not hide it or replace it.",
    },
    {
      title: "Clarity over complexity",
      description:
        "A useful system helps people understand what to do, where to look, and why it matters.",
    },
    {
      title: "Observe before building",
      description:
        "The best solutions begin with how the work actually happens, including the awkward workarounds.",
    },
    {
      title: "Build the smallest useful system",
      description:
        "Start with something practical, test it with real use, and expand only when the evidence supports it.",
    },
    {
      title: "Refine through feedback",
      description:
        "A system is not finished when it launches. It improves through observation, review, and iteration.",
    },
    {
      title: "Personality can support credibility",
      description:
        "Professional work can feel warm, memorable, and human without becoming unserious.",
    },
  ],
} as const;

export type BrandPrinciple =
  (typeof brandPhilosophy.principles)[number];