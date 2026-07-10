import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  NotebookTape,
  PhoenixMark,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Colophon | AlwaysReady4Moore",
  description:
    "Credits, tools, AI use disclosures, and build notes for AlwaysReady4Moore.com.",
};

const credits = [
  {
    title: "Design direction",
    label: "Human-led",
    description:
      "The site direction, structure, copy choices, visual taste, final selection, edits, and implementation decisions are human-led by Marquetta Moore. AI may support exploration, but it does not decide what is true, useful, or ready to publish.",
    tone: "signal" as const,
  },
  {
    title: "AI-assisted visual assets",
    label: "Disclosed use",
    description:
      "Some visual assets on this site are AI-generated or AI-assisted, including pictogram-style illustrations, the chibi site representative, the Clarity Mark explorations, and the looping contact-page avatar. These assets are used as visual communication, not as evidence of work that did not happen.",
    tone: "experiment" as const,
  },
  {
    title: "The Clarity Mark",
    label: "Brand system",
    description:
      "The phoenix mark and cyan signal are used as the portfolio’s identity system, representing transformation through clearer systems. The mark was developed through visual exploration, selection, editing, and implementation decisions.",
    tone: "signal" as const,
  },
  {
    title: "Gemini-generated animation",
    label: "Contact page",
    description:
      "The looping chibi avatar on the Contact page was generated with Gemini from a custom visual prompt and used as a disclosed AI-generated media asset.",
    tone: "verified" as const,
  },
  {
    title: "Static avatar",
    label: "About page",
    description:
      "The static chibi avatar on the About page was created with AI-assisted image tools and selected as the site’s stylized visual representative.",
    tone: "verified" as const,
  },
  {
    title: "Pictograms",
    label: "Field Notes",
    description:
      "The Field Notes pictograms are editorial visual assets. They are meant to signal themes and support the reading experience, not to replace the articles or imply original reporting that is not present.",
    tone: "experiment" as const,
  },
  {
    title: "Screenshots",
    label: "Project proof",
    description:
      "Project screenshots, including the Aegis images, are real screenshots from working projects. They are included to show actual interface context and support the written case studies. They are separate from AI-generated or AI-assisted illustration assets.",
    tone: "verified" as const,
  },
];

const tools = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "GitHub",
  "Gemini",
  "ChatGPT",
  "AI-assisted image tools",
  "Custom fonts from the project font library",
];

const principles = [
  {
    title: "AI can assist the process. It cannot supply the proof.",
    description:
      "AI may help with drafting, visual exploration, summarizing, structuring, or prototyping. It does not create work history, project outcomes, metrics, screenshots, or evidence.",
    tone: "signal" as const,
  },
  {
    title: "Claims should stay grounded.",
    description:
      "Portfolio claims should be based on real work, real artifacts, real screenshots, and human-reviewed context. AI-generated language should never be used to inflate impact or invent certainty.",
    tone: "verified" as const,
  },
  {
    title: "Generated media should be labeled.",
    description:
      "When an image, avatar, animation, or visual asset is AI-generated or AI-assisted, this site aims to say so plainly and separate it from project evidence.",
    tone: "experiment" as const,
  },
];

function CreditCard({
  title,
  label,
  description,
  tone,
}: {
  title: string;
  label: string;
  description: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookHighlight
        size="lg"
        className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
      />

      <BrandBadge tone={tone} icon="dot">
        {label}
      </BrandBadge>

      <h2 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function PrincipleCard({
  title,
  description,
  index,
  tone,
}: {
  title: string;
  description: string;
  index: number;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookPaperclip
        size="md"
        className="absolute right-5 top-5 rotate-12 opacity-20"
      />

      <div className="flex items-start justify-between gap-5">
        <BrandBadge tone={tone} icon="dot">
          Principle
        </BrandBadge>

        <span className="font-lab text-3xl font-semibold text-cyan/60">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

export default function ColophonPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="signal" icon="spark">
            Colophon
          </BrandBadge>

          <BrandBadge tone="quiet" icon="dot">
            Credits and disclosure
          </BrandBadge>
        </div>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.92fr_0.72fr] lg:items-start">
          <div>
            <div className="mb-5 flex items-start gap-4">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-[#101820] sm:flex">
                <PhoenixMark
                  variant="standard"
                  size="lg"
                  decorative
                  className="h-12 w-12"
                />
              </div>

              <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
                Credits, tools, and AI use.
              </h1>
            </div>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              This page keeps track of how the site was made: what tools helped,
              where AI-generated media appears, and how I think about using AI
              transparently in creative and technical work.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              The short version: AI is part of my workflow, but it is not the
              source of truth. Project claims, screenshots, work history,
              metrics, case-study framing, and publishing decisions remain
              human-reviewed and grounded in real artifacts.
            </p>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl"
            />

            <NotebookTape
              size="lg"
              className="absolute right-7 top-7 rotate-12 opacity-35"
            />

            <div className="relative">
              <BrandBadge tone="signal" icon="spark">
                Site stance
              </BrandBadge>

              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                Responsible use, clear boundaries.
              </h2>

              <p className="mt-4 leading-7 text-muted">
                AI can be useful for exploration, drafting support, visual
                iteration, and implementation help. It should not be used to
                fabricate experience, invent results, blur the line between
                illustration and evidence, or publish claims that have not been
                checked.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <BrandBadge key={tool} tone="quiet" icon="none">
                    {tool}
                  </BrandBadge>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              AI use principles
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              How I’m handling disclosure.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            The goal is clarity without performance: name the tools, label the
            generated media, avoid inflated claims, and keep responsibility with
            the human making the decisions.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <PrincipleCard
              key={principle.title}
              title={principle.title}
              description={principle.description}
              index={index}
              tone={principle.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              Credits
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              What appears on the site.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            These notes separate original project evidence, AI-assisted visual
            exploration, and human-led editorial direction.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {credits.map((credit) => (
            <CreditCard
              key={credit.title}
              title={credit.title}
              label={credit.label}
              description={credit.description}
              tone={credit.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />

          <CyanSpark
            size="md"
            className="absolute bottom-7 right-8 opacity-60"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            AI helped with parts of the build. The taste, judgment, edits,
            evidence, and responsibility are mine.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              See the work
            </Link>

            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}