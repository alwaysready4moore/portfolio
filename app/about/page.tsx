import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CoffeeRing,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  NotebookTape,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About | AlwaysReady4Moore",
  description:
    "About Marquetta Moore, a systems builder working across AI workflows, knowledge systems, support operations, and security-aware communication.",
};

const focusAreas = [
  {
    title: "AI workflow design",
    description:
      "I like using AI as a practical helper: something that can sort, draft, compare, structure, and speed things up while humans still make the judgment calls.",
    tone: "signal" as const,
  },
  {
    title: "Knowledge systems",
    description:
      "I love turning scattered docs, repeated questions, half-remembered policies, and “wait, where does that live?” moments into something people can actually find and use.",
    tone: "verified" as const,
  },
  {
    title: "Support operations",
    description:
      "Support work taught me to look for the system behind the question. When the same confusion keeps showing up, that is usually the system asking for help.",
    tone: "warning" as const,
  },
  {
    title: "Security-aware communication",
    description:
      "My security background is always in the back of my mind. I care about trust, clarity, accuracy, and what can go wrong when important information gets fuzzy.",
    tone: "experiment" as const,
  },
];

const pathItems = [
  {
    label: "Security",
    title: "I started by learning how things break.",
    description:
      "Computer and network security taught me to respect evidence, risk, access, trust, and the tiny details that can quietly become very big problems.",
    tone: "verified" as const,
  },
  {
    label: "Support",
    title: "Then I learned where people get stuck.",
    description:
      "Customer support showed me that broken systems do not always announce themselves with dramatic failures. Sometimes they show up as the same question, asked over and over, by very tired people.",
    tone: "warning" as const,
  },
  {
    label: "Knowledge",
    title: "So I started building better paths.",
    description:
      "Knowledge hubs, macros, training materials, onboarding guides, internal resources. I kept finding myself drawn to the work of making the answer easier to reach.",
    tone: "signal" as const,
  },
  {
    label: "AI",
    title: "Now I use AI to make the path clearer.",
    description:
      "I am interested in AI that helps people think, organize, test, explain, and build. Not AI as a replacement for judgment, but AI as a really useful workbench.",
    tone: "experiment" as const,
  },
];

const proofPoints = [
  "7+ years across cybersecurity, support, technical operations, and enablement",
  "774-page governed knowledge hub",
  "3,100+ knowledge-system edits",
  "100% CSAT across 200+ Google support reviews",
  "40+ internal awards for documentation clarity and accuracy",
  "AI tools built with TypeScript, Next.js, Gemini, and Zod",
];

function FocusCard({
  title,
  description,
  tone,
}: {
  title: string;
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
        Focus
      </BrandBadge>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function PathCard({
  label,
  title,
  description,
  index,
  tone,
}: {
  label: string;
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
        <div>
          <BrandBadge tone={tone} icon="dot">
            {label}
          </BrandBadge>

          <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
            {title}
          </h3>
        </div>

        <span className="font-lab text-3xl font-semibold text-cyan/60">
          0{index + 1}
        </span>
      </div>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="signal" icon="spark">
            About
          </BrandBadge>

          <BrandBadge tone="quiet" icon="dot">
            Human behind the systems
          </BrandBadge>
        </div>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.92fr_0.72fr] lg:items-start">
          <div>
            <div className="mb-5">
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
                Hi, I’m Marquetta. I make messy information behave.
              </h1>
            </div>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              I build systems for the moments when the answer technically
              exists, but nobody can find it, trust it, explain it, or use it
              without asking three other people first.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              My background sits at a weirdly useful intersection:
              cybersecurity, customer support, technical operations, internal
              enablement, knowledge management, writing, and now AI workflow
              design. I like the messy middle. That is usually where the real
              problem is hiding.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              The through-line is pretty simple: I care about making things
              clearer for people. Not colder. Not more robotic. Clearer, kinder,
              easier to use, and harder to misunderstand.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {proofPoints.map((point) => (
                <BrandBadge key={point} tone="quiet" icon="none">
                  {point}
                </BrandBadge>
              ))}
            </div>
          </div>

          <aside className="paper-card relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl"
            />

            <NotebookTape
              size="lg"
              className="absolute right-7 top-7 z-10 rotate-12 opacity-55"
            />

            <CoffeeRing
              size="lg"
              className="absolute bottom-8 left-8 z-10 opacity-20"
            />

            <div className="relative border-b border-[var(--border)] bg-white/[0.035] p-3">
              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-night">
                <img
                  src="/avatars/chibi-marquetta.png"
                  alt="Static chibi avatar of Marquetta at a laptop."
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <div className="relative p-6">
              <BrandBadge tone="signal" icon="dot">
                Site representative
              </BrandBadge>

              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                Tiny me, doing the work.
              </h2>

              <p className="mt-4 leading-7 text-muted">
                This little chibi version of me is the site’s visual stand-in:
                typing, thinking, probably reorganizing a system that started
                out as “just one quick doc.”
              </p>

              <p className="mt-4 text-sm leading-6 text-muted">
                Static chibi avatar created with AI-assisted image tools and
                disclosed as AI-generated media.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.72fr_1fr]">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />

          <div>
            <BrandBadge tone="signal" icon="spark">
              The through-line
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              I am very interested in the gap between “we have the information”
              and “people can actually use it.”
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              A lot of workplace problems are not really people problems. They
              are system problems wearing a people-problem costume. The policy
              is unclear. The process lives in someone’s memory. The tool is
              technically there, but nobody knows when to use it. The answer
              exists, but it is buried under five layers of “check the old doc.”
            </p>

            <p className="leading-8">
              That is the kind of thing I notice quickly. Then I want to map it,
              simplify it, write it better, automate the boring parts, and make
              the next person’s day a little less haunted.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              What I do
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Practical systems, human stakes.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            The work changes shape by project, but the pattern stays consistent:
            reduce confusion, protect judgment, and make the useful path easier
            to follow.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {focusAreas.map((area) => (
            <FocusCard
              key={area.title}
              title={area.title}
              description={area.description}
              tone={area.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              How I got here
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              The path was not linear. It was useful.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            Security taught me what can go wrong. Support taught me where people
            get stuck. Knowledge work taught me how to build better paths.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pathItems.map((item, index) => (
            <PathCard
              key={item.title}
              label={item.label}
              title={item.title}
              description={item.description}
              index={index}
              tone={item.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.72fr_1fr]">
          <NotebookPaperclip
            size="lg"
            className="absolute right-8 top-8 rotate-12 opacity-20"
          />

          <div>
            <BrandBadge tone="experiment" icon="spark">
              Where AI fits
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              I am pro-AI, but not pro-mystery box.
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              I like AI most when it helps people move through complexity:
              organize the mess, compare options, draft the first pass, find the
              pattern, or turn a blank page into something we can actually react
              to.
            </p>

            <p className="leading-8">
              But I do not think AI should replace accountability, taste,
              context, empathy, or review. The best AI workflows are designed
              around human judgment, not designed to quietly skip it.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <NotebookHighlight
            size="lg"
            className="absolute right-6 top-6 rotate-[-8deg] opacity-25"
          />

          <CyanSpark
            size="md"
            className="absolute bottom-7 right-8 opacity-60"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            I am happiest where the system is messy, the stakes are human, and
            the answer needs to become easier to find.
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