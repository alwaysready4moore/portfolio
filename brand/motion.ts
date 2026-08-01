export const brandMotion = {
  philosophy:
    "Motion should clarify state, direction, or interaction. It should never compete with the work.",

  durations: {
    quick: 150,
    standard: 220,
    deliberate: 360,
    ambient: 1800,
  },

  easing: {
    standard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    enter: "cubic-bezier(0.16, 1, 0.3, 1)",
    exit: "cubic-bezier(0.4, 0, 1, 1)",
  },

  behaviors: {
    button: {
      description: "A small lift that confirms interactivity.",
      transform: "translateY(-2px)",
    },
    card: {
      description:
        "A small lift with a stronger border or signal accent.",
      transform: "translateY(-4px)",
    },
    signal: {
      description:
        "A soft pulse for status, discovery, completion, or the correct path.",
    },
    notebook: {
      description:
        "A slight slide, page shift, or corner movement when it supports the notebook metaphor.",
    },
  },

  rules: [
    "Respect prefers-reduced-motion.",
    "Do not animate large sections merely to make the page feel active.",
    "Use the cyan signal pulse sparingly.",
    "Hover motion should remain subtle and predictable.",
    "Animations should not delay access to content.",
  ],
} as const;