import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import {
  InteractiveGuide,
  type GuideSlide,
} from "@/components/InteractiveGuide";

export const metadata: Metadata = {
  title: "Cookies & Cache | Interactive Guide",
  description:
    "An interactive portfolio adaptation explaining cookies, cache, incognito testing, and less-disruptive browser troubleshooting.",
};

const slides: GuideSlide[] = [
  {
    eyebrow: "Start here",
    title: "Cookies are tiny website save files.",
    body:
      "Cookies store details about a visit so a website can remember useful context such as login state, language preferences, shopping cart items, or display settings.",
    bullets: [
      "They help personalize the experience.",
      "They can keep a user signed in.",
      "They may become outdated or corrupted over time.",
    ],
    visual: "cookie-jar",
  },
  {
    eyebrow: "The other pocket",
    title: "Cache stores reusable pieces of a webpage.",
    body:
      "Cache keeps local copies of assets such as images, scripts, and page structure so the browser does not need to download every piece again on every visit.",
    bullets: [
      "Pages can load faster.",
      "The browser may use less data.",
      "Old cached assets can occasionally conflict with a newer site version.",
    ],
    visual: "cache-pocket",
  },
  {
    eyebrow: "Troubleshooting judgment",
    title: "Clearing everything is disruptive.",
    body:
      "Clearing cookies and cache can log a person out of websites, remove preferences, and create extra work. It should be a reasoned troubleshooting step rather than a reflex.",
    bullets: [
      "Start with the least invasive test.",
      "Check whether the issue can be reproduced elsewhere.",
      "Use the symptom and context to form a theory first.",
    ],
    visual: "decision",
  },
  {
    eyebrow: "Quick test",
    title: "What should you try first?",
    body:
      "A customer says one website is behaving strangely. You suspect stored browser data, but you have not tested that theory yet.",
    visual: "incognito",
    choices: [
      {
        label: "Tell them to clear all cookies and cache immediately.",
        feedback:
          "That may remove useful saved data and log the customer out everywhere before you know whether browser storage is actually involved.",
      },
      {
        label: "Ask them to try the same action in an incognito window.",
        feedback:
          "Exactly. Incognito gives you a cleaner browser session without immediately erasing the customer’s saved data. If the problem disappears there, stored browser data becomes a stronger suspect.",
        correct: true,
      },
      {
        label: "Assume the website itself is broken.",
        feedback:
          "That is possible, but you need more evidence. Check whether the issue is reproducible and whether it changes in a cleaner browser session.",
      },
    ],
  },
  {
    eyebrow: "Read the result",
    title: "If it still fails in incognito, look beyond stored data.",
    body:
      "When the same problem appears in a clean session, cookies and cache are less likely to be the root cause. Continue with other troubleshooting instead of forcing a reset that probably will not help.",
    visual: "decision",
  },
  {
    eyebrow: "When clearing may help",
    title: "Use it when the evidence points there.",
    body:
      "A stored-data reset may be reasonable when a problem disappears in incognito, when an old session appears corrupted, or when a locally stored interactive element is no longer responding correctly.",
    bullets: [
      "Explain what will be removed.",
      "Set expectations about sign-ins and preferences.",
      "Clear only what is needed when the browser allows it.",
    ],
    visual: "cookie-jar",
  },
  {
    eyebrow: "Takeaway",
    title: "Test first. Disrupt second.",
    body:
      "The value of the workflow is not memorizing where a browser setting lives. It is choosing a troubleshooting step that matches the evidence and minimizes unnecessary frustration.",
    visual: "success",
  },
];

export default function CookiesCacheGuidePage() {
  return (
    <main className="pb-16">
      <SiteHeader />
      <InteractiveGuide
        title="Cookies & Cache"
        description="A playful click-through guide to browser storage, incognito testing, and choosing the least disruptive troubleshooting step."
        guideLabel="Interactive troubleshooting guide"
        slides={slides}
        originalPdfHref="/work/small-wins/cookies-and-cache.pdf"
      />
    </main>
  );
}
