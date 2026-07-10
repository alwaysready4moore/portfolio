export const brandTypography = {
  roles: {
    display: {
      purpose:
        "Large headlines, case-study titles, major section introductions, and strong editorial statements.",
      className: "font-display",
    },
    body: {
      purpose:
        "Long-form reading, supporting copy, case-study narratives, and explanatory text.",
      className: "font-sans",
    },
    lab: {
      purpose:
        "Labels, system metadata, status text, navigation details, and operational annotations.",
      className: "font-lab",
    },
    handwriting: {
      purpose:
        "Occasional notebook annotations and human editorial asides. Use sparingly.",
      className: "font-handwriting",
    },
  },

  rules: [
    "Use display typography for hierarchy, not for long paragraphs.",
    "Use lab typography for short labels and operational language.",
    "Keep body copy comfortable to read and generously spaced.",
    "Handwritten type should feel like an annotation, never the main interface.",
    "Avoid using multiple decorative fonts in the same viewport.",
  ],
} as const;

export type TypographyRole =
  keyof typeof brandTypography.roles;