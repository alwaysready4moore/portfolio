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
      "Marquetta Moore directs the site structure, copy, design, edits, and implementation. AI can support exploration, but it does not decide what is accurate or ready to publish.",
    tone: "signal" as const,
  },
  {
    title: "AI-assisted visual assets",
    label: "Disclosed use",
    description:
      "Some pictograms, avatars, and brand explorations use AI-generated or AI-assisted media. They support the design and are not presented as project evidence.",
    tone: "experiment" as const,
  },
  {
    title: "The Clarity Mark",
    label: "Brand system",
    description:
      "The phoenix mark and cyan signal identify the portfolio. Marquetta selected, edited, and implemented the mark after several visual explorations.",
    tone: "signal" as const,
  },
  {
    title: "Gemini-generated animation",
    label: "Contact page",
    description:
      "Gemini generated the looping chibi avatar on the Contact page from a custom prompt. The page labels it as AI-generated media.",
    tone: "verified" as const,
  },
  {
    title: "Static avatar",
    label: "About page",
    description:
      "AI-assisted image tools created the static chibi avatar on the About page. Marquetta selected it as the site avatar.",
    tone: "verified" as const,
  },
  {
    title: "Pictograms",
    label: "Field Notes",
    description:
      "Field Notes pictograms signal each article’s theme. They do not replace the article or imply reporting that is not there.",
    tone: "experiment" as const,
  },
  {
    title: "Screenshots",
    label: "Project proof",
    description:
      "Project screenshots, including Aegis, come from working projects. They show the interface and support the case studies. They are separate from generated illustrations.",
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
    title: "AI can help with the process. Evidence still comes from the work",
    description:
      "AI may help with drafts, visual exploration, summaries, structure, or prototypes. It does not create work history, results, metrics, screenshots, or evidence.",
    tone: "signal" as const,
  },
  {
    title: "Base claims on evidence",
    description:
      "Portfolio claims use real work, artifacts, screenshots, and reviewed context. Generated language cannot inflate impact or invent certainty.",
    tone: "verified" as const,
  },
  {
    title: "Label generated media",
    description:
      "The site labels AI-generated and AI-assisted media and keeps it separate from project evidence.",
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
            Credits and AI disclosure
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
                Credits, tools, and
                <span className="headline-signal block">AI use</span>
              </h1>
            </div>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              This page lists the tools used to build the site, identifies
              AI-generated media, and explains how I separate assistance from
              evidence.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              AI is part of my workflow, but it is not the source of truth.
              Project claims, screenshots, work history, metrics, and publishing
              decisions come from reviewed work and real artifacts.
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
                How I use AI
              </BrandBadge>

              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                Use AI. Keep the boundaries clear
              </h2>

              <p className="mt-4 leading-7 text-muted">
                I use AI for exploration, drafts, visual iteration, and
                implementation help. I do not use it to fabricate experience,
                invent results, or blur illustration with evidence.
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
              How I disclose AI use
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            Name the tools. Label generated media. Check the claims. Keep
            responsibility with the person making the decisions.
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
              What you’re looking at
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            These notes separate project evidence, AI-assisted visuals, and
            editorial decisions.
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
            AI helped with parts of the build. I own the judgment, edits,
            evidence, and final decisions.
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