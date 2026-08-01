export const brandPhilosophy = {
  thesis: "I build systems that help people find the right answer.",

  supportingStatement:
    "I organize scattered information, repeated work, and unclear processes into systems people can use.",

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
        "Start by observing how the work happens, including the awkward workarounds.",
    },
    {
      title: "Build the smallest useful system",
      description:
        "Start with a useful version. Test it in use, then expand when the evidence supports it.",
    },
    {
      title: "Refine through feedback",
      description:
        "Launch is the start of maintenance. Improve the system through observation and review.",
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