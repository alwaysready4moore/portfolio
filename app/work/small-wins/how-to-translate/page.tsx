import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import {
  InteractiveGuide,
  type GuideSlide,
} from "@/components/InteractiveGuide";

export const metadata: Metadata = {
  title: "How to Translate a Webpage | Interactive Guide",
  description:
    "An interactive portfolio adaptation of a visual support guide for translating customer-facing webpages in Chrome.",
};

const slides: GuideSlide[] = [
  {
    eyebrow: "Why this matters",
    title: "A translated screenshot can make support feel more human.",
    body:
      "When a customer is working in another language, translating the page before taking a screenshot adds a small but meaningful layer of clarity and care.",
    bullets: [
      "Use this for shipment pages, transaction histories, tracking pages, and other customer-facing webpages.",
      "The goal is not to replace a professional translator. It is to make visual guidance easier to follow.",
    ],
    visual: "languages",
  },
  {
    eyebrow: "Step 1",
    title: "Open the page you need to translate.",
    body:
      "Navigate to the exact customer-facing page you want to show. Confirm that the page is fully loaded and that no private information should appear in the screenshot.",
    visual: "browser",
  },
  {
    eyebrow: "Step 2",
    title: "Right-click and choose Translate.",
    body:
      "Right-click anywhere on the page and select the browser’s translation option. Chrome may initially say “Translate to English.” That is okay. You can change the destination language next.",
    visual: "context-menu",
  },
  {
    eyebrow: "Step 3",
    title: "Choose the customer’s language.",
    body:
      "Use the translation bar in the upper-right corner. Open its options menu, choose another language, and select the language that will be most useful to the customer.",
    visual: "language-picker",
  },
  {
    eyebrow: "Step 4",
    title: "Capture the translated page.",
    body:
      "Take the screenshot after the visible instructions, labels, and status information have changed languages. Review the image before sending it so you know it shows the intended page and no sensitive details.",
    visual: "screenshot",
  },
  {
    eyebrow: "Wrap-up",
    title: "Reset the page when you are finished.",
    body:
      "Refresh the page or select English in the translation bar to return to the original version. That is it: one extra step that can make an interaction feel more inclusive.",
    visual: "reset",
  },
];

export default function TranslateWebpageGuidePage() {
  return (
    <main className="pb-16">
      <SiteHeader />
      <InteractiveGuide
        title="How to Translate a Webpage"
        description="A click-through adaptation of an independently created one-page workflow guide for more inclusive customer support screenshots."
        guideLabel="Interactive workflow guide"
        slides={slides}
        originalPdfHref="/work/small-wins/how-to-translate-a-webpage.pdf"
      />
    </main>
  );
}
