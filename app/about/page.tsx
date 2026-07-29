import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CoffeeRing,
  CyanSpark,
  NotebookHighlight,
  NotebookPaperclip,
  NotebookTape,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About | AlwaysReady4Moore",
  description:
    "About Marquetta Moore, a systems builder working across AI products, knowledge systems, security operations, and human-centered communication.",
};

const proofPoints = [
  "7+ years across security, support, operations, and enablement",
  "774-page governed knowledge hub",
  "30+ releases of an embedded analyst tool",
  "AI products built with TypeScript, Next.js, Gemini, and Zod",
];

const buildAreas = [
  {
    title: "AI products and workflows",
    description:
      "Structured AI systems that help people compare, draft, organize, and move through complexity while keeping review and accountability visible.",
    tone: "signal" as const,
  },
  {
    title: "Knowledge and enablement systems",
    description:
      "Governed information, onboarding, documentation, and internal resources that make the right answer easier to find and maintain.",
    tone: "verified" as const,
  },
  {
    title: "Human-centered operational tools",
    description:
      "Small products, lessons, and workflow improvements designed around the moment someone is confused, overloaded, or making a difficult decision.",
    tone: "experiment" as const,
  },
];

const pathItems = [
  {
    label: "Security",
    title: "I learned how things break.",
    description:
      "Computer and network security taught me to respect evidence, access, risk, and the small details that can become very large problems.",
    tone: "verified" as const,
  },
  {
    label: "Support",
    title: "I learned where people get stuck.",
    description:
      "Customer support showed me that a broken system often appears as the same question, asked repeatedly, by people who are trying their best.",
    tone: "warning" as const,
  },
  {
    label: "Knowledge",
    title: "I started building better paths.",
    description:
      "Knowledge hubs, macros, training materials, onboarding guides, and internal resources turned answers into systems people could actually use.",
    tone: "signal" as const,
  },
  {
    label: "AI",
    title: "Now I build faster without skipping judgment.",
    description:
      "AI gives me a powerful workbench for organizing, testing, explaining, and prototyping. Human context still decides what is useful and responsible.",
    tone: "experiment" as const,
  },
];

function BuildAreaCard({
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
        What I build
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
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Hi, I’m Marquetta. I make messy information behave.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              I build systems for the moments when the answer technically
              exists, but nobody can find it, trust it, explain it, or use it
              without asking three other people first.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              My background spans cybersecurity, customer support, technical
              operations, knowledge management, writing, and AI product
              development. That mix helps me see both the system and the person
              trying to survive it.
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
                She is usually typing, thinking, or reorganizing a system that
                began as “just one quick document.” A familiar little witness to
                the work, basically.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16" aria-labelledby="build-heading">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              The through-line
            </BrandBadge>
            <h2
              id="build-heading"
              className="mt-3 max-w-4xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-6xl"
            >
              Close the gap between having information and being able to use it.
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-muted md:text-right">
            I look for repeated questions, buried context, fragile handoffs, and
            decisions people are making without enough support.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {buildAreas.map((area) => (
            <BuildAreaCard key={area.title} {...area} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16" aria-labelledby="path-heading">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              How I got here
            </BrandBadge>
            <h2
              id="path-heading"
              className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl"
            >
              The path was not linear. It was useful.
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-muted md:text-right">
            Each chapter sharpened a different instinct: protect the system,
            notice the friction, organize the answer, and build the better path.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pathItems.map((item, index) => (
            <PathCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <NotebookPaperclip
            size="lg"
            className="absolute right-8 top-8 rotate-12 opacity-20"
          />
          <div>
            <BrandBadge tone="experiment" icon="spark">
              Where AI fits
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              AI is a powerful workbench, not a mystery box.
            </h2>
          </div>
          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              I use AI to organize the mess, compare options, draft a first
              pass, find patterns, and turn a blank page into something we can
              test.
            </p>
            <p className="leading-8">
              Accountability, taste, context, empathy, and review still belong
              to people. The strongest AI workflows make those judgment points
              easier to see rather than quietly skipping them.
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
          <CyanSpark size="md" className="absolute bottom-7 right-8 opacity-60" />
          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            I am happiest where the system is messy, the stakes are human, and
            the useful answer needs a clearer path into the world.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              See selected work
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
