import { brandColors } from "./colors";
import {
  illustrationRoles,
  illustrationSystem,
} from "./illustrations";
import { brandMotion } from "./motion";
import { brandPhilosophy } from "./philosophy";
import { brandTypography } from "./typography";

export const brand = {
  identity: {
    siteName: "AlwaysReady4Moore",
    owner: "Marquetta Moore",
    concept: "Marquetta’s Systems Lab",
    description:
      "A warm systems lab, experimental workshop, thoughtful maker space, and field-notes archive.",
  },

  philosophy: brandPhilosophy,

  colors: brandColors,

  typography: brandTypography,

  motion: brandMotion,

  illustrations: {
    roles: illustrationRoles,
    system: illustrationSystem,
  },

  mark: {
    name: "The Mark",
    symbol: "Phoenix",
    meaning:
      "Transformation through rebuilding fragmented information, processes, communication, and technology into clearer systems.",
    usage: {
      compact:
        "An abstract phoenix-wing crest with a cyan spark for favicons and very small placements.",
      standard:
        "A simplified phoenix silhouette for headers, profiles, documents, and brand applications.",
      illustrative:
        "A full phoenix composition reserved for large or ceremonial brand moments.",
    },
  },

  signal: {
    name: "The Signal",
    symbol: "Cyan Spark",
    meaning:
      "The moment when information becomes clearer, a useful connection appears, or the correct path is found.",
    communicates: [
      "Clarity",
      "Discovery",
      "Progress",
      "Connection",
      "Verification",
    ],
    neverCommunicates: [
      "Decoration without meaning",
      "Technology merely for technology’s sake",
      "Random sparkle or visual filler",
    ],
  },

  notebook: {
    meaning:
      "The portfolio is presented as a working record of observations, experiments, systems, and lessons.",
    elements: [
      "Margin notes",
      "Tabs",
      "Paperclips",
      "Sticky notes",
      "Cyan arrows",
      "Occasional coffee rings",
      "Field labels",
    ],
    rule:
      "Notebook details should add context or humanity without making the site feel like a scrapbook.",
  },
} as const;

export type Brand = typeof brand;