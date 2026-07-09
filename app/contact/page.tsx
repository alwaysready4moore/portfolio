import type { Metadata } from "next";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | AlwaysReady4Moore",
  description:
    "Contact Marquetta Moore about AI workflow design, knowledge systems, support operations, internal tools, and security-aware communication.",
};

const contactRoutes = [
  {
    label: "Email",
    value: "msnelson9241@gmail.com",
    href: "mailto:msnelson9241@gmail.com?subject=Portfolio%20Inquiry%20-%20AlwaysReady4Moore",
    description:
      "Best for direct messages, project conversations, collaboration notes, and anything that deserves more than a tiny comment box.",
  },
  {
    label: "LinkedIn",
    value: "Marquetta Moore",
    href: "https://www.linkedin.com/in/alwaysready4moore",
    description:
      "Best for professional context, work history, writing, and public updates.",
  },
  {
    label: "GitHub",
    value: "alwaysready4moore",
    href: "https://github.com/alwaysready4moore",
    description:
      "Best for code, build experiments, and technical proof-of-work breadcrumbs.",
  },
] as const;

const bestFor = [
  "AI workflow design",
  "Knowledge systems",
  "Support operations",
  "Internal tools",
  "Documentation and enablement",
  "Security-aware communication",
] as const;

const signalCards = [
  {
    label: "Working style",
    value: "Clear, curious, systems-first",
  },
  {
    label: "Strongest overlap",
    value: "AI + support + knowledge systems",
  },
  {
    label: "Favorite problem",
    value: "Messy information with human consequences",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-10">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan">
              Contact
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Let’s talk about the messy system.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              I’m interested in work where AI, knowledge, operations,
              communication, and real human behavior all crash into each other
              and need to become something clearer.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {bestFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-white/[0.03] px-4 py-2 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[var(--border)] bg-panel/80 p-5 shadow-soft">
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-night">
              <video
                className="aspect-square w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/avatars/lets-talk-poster.png"
                aria-label="Looping chibi avatar animation of Marquetta at a computer."
              >
                <source src="/avatars/lets-talk.mp4" type="video/mp4" />
              </video>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted">
              Looping chibi avatar generated with Gemini. AI-generated media is
              used intentionally and disclosed throughout this portfolio.
            </p>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {signalCards.map((card) => (
            <article
              key={card.label}
              className="rounded-[1.5rem] border border-[var(--border)] bg-white/[0.03] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
                {card.label}
              </p>
              <p className="mt-4 text-lg font-semibold leading-7 text-ink">
                {card.value}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-5">
          {contactRoutes.map((route) => (
            <a
              key={route.label}
              href={route.href}
              target={route.href.startsWith("http") ? "_blank" : undefined}
              rel={
                route.href.startsWith("http")
                  ? "noreferrer noopener"
                  : undefined
              }
              className="group rounded-[1.75rem] border border-[var(--border)] bg-panel/80 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:bg-white/[0.06]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
                    {route.label}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {route.value}
                  </h2>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-muted">
                    {route.description}
                  </p>
                </div>

                <span className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-muted transition group-hover:border-cyan/60 group-hover:text-ink">
                  Open
                </span>
              </div>
            </a>
          ))}
        </section>

        <section className="paper-note rounded-[2rem] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
            Tiny operating principle
          </p>

          <blockquote className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.03em] text-ink sm:text-3xl">
            “Good systems do not just organize information. They make the next
            right action easier to see.”
          </blockquote>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}