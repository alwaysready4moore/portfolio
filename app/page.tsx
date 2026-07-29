import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookTape,
  PhoenixMark,
  type BrandBadgeTone,
} from "@/components/brand";
import { FeaturedSystemCard } from "@/components/FeaturedSystemCard";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredSystems } from "@/data/featuredSystems";

const professionalStory = featuredSystems.filter((project) =>
  ["Aegis", "Pirate Ship Knowledge Systems", "CSI New Analyst Toolbox"].includes(
    project.title,
  ),
);

const proofSignals = [
  {
    value: "774",
    label: "knowledge pages governed in a large internal system",
  },
  {
    value: "3,100+",
    label: "knowledge-system edits across resources and workflows",
  },
  {
    value: "30+",
    label: "versioned releases of an embedded analyst tool",
  },
  {
    value: "100%",
    label: "adjusted CSAT across 200+ Google support reviews",
  },
];

const philosophyPoints = [
  "Find the friction",
  "Build for the real workflow",
  "Leave the system maintainable",
];

const secondaryPaths = [
  {
    label: "Field Notes",
    title: "Writing about systems and the people inside them.",
    description:
      "Essays on AI, security, communication, work, and the human judgment that keeps powerful tools useful.",
    href: "/field-notes",
    cta: "Read Field Notes",
    tone: "verified" as const,
  },
  {
    label: "Lab",
    title: "Creative experiments with a point.",
    description:
      "Independent products, identity systems, music worlds, small-business builds, and prototypes that test ideas in public.",
    href: "/lab",
    cta: "Enter the Lab",
    tone: "experiment" as const,
  },
];

function HeroOperatorCard() {
  return (
    <aside className="paper-card overflow-hidden" aria-label="About Marquetta">
      <div className="relative border-b border-[var(--border)] bg-white/[0.035] p-4">
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/20 blur-3xl"
        />
        <NotebookTape
          size="md"
          className="absolute right-7 top-7 z-10 rotate-12 opacity-60"
        />
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-night">
          <img
            src="/avatars/chibi-marquetta.png"
            alt="Illustrated avatar of Marquetta working at a computer."
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <BrandBadge tone="signal" icon="dot">
            Systems lab operator
          </BrandBadge>
          <BrandBadge tone="quiet" icon="spark">
            Open to remote roles
          </BrandBadge>
        </div>

        <div className="mt-5 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-[#101820]">
            <PhoenixMark
              variant="standard"
              size="md"
              decorative
              className="h-10 w-10"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              Marquetta Moore
            </h2>
            <p className="mt-2 font-lab text-sm uppercase tracking-[0.08em] text-muted">
              Creative technologist · systems builder
            </p>
          </div>
        </div>

        <p className="mt-5 border-t border-[var(--border)] pt-5 text-sm leading-6 text-muted">
          I build AI products, knowledge systems, and workflow tools that make
          complicated work easier to understand and safer to use.
        </p>
      </div>
    </aside>
  );
}

function ProofStrip() {
  return (
    <section className="lab-shell pt-10" aria-labelledby="proof-heading">
      <div className="mb-5 flex items-center gap-3">
        <BrandBadge tone="quiet" icon="spark">
          Evidence
        </BrandBadge>
        <h2 id="proof-heading" className="sr-only">
          Selected results
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofSignals.map((signal) => (
          <article
            key={signal.value}
            className="paper-card relative overflow-hidden p-5"
          >
            <CyanSpark size="xs" className="absolute right-5 top-5 opacity-55" />
            <p className="font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              {signal.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">{signal.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SecondaryPathCard({
  label,
  title,
  description,
  href,
  cta,
  tone,
}: {
  label: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  tone: BrandBadgeTone;
}) {
  return (
    <Link
      href={href}
      className="paper-card group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-cyan/35"
    >
      <CyanSpark
        size="sm"
        className="absolute right-5 top-5 opacity-45 transition group-hover:opacity-80"
      />
      <BrandBadge tone={tone} icon="dot">
        {label}
      </BrandBadge>
      <h3 className="mt-5 max-w-xl font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>
      <p className="mt-4 max-w-xl leading-7 text-muted">{description}</p>
      <p className="mt-6 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
        {cta} <span aria-hidden="true">→</span>
      </p>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell grid gap-8 border-b border-[var(--border)] pb-12 pt-4 lg:grid-cols-[0.95fr_0.58fr] lg:items-start lg:pt-6">
        <div className="pt-4 md:pt-6 lg:pt-8">
          <div className="flex flex-wrap items-center gap-3">
            <BrandBadge tone="signal" icon="spark">
              Creative technology · AI products · knowledge systems
            </BrandBadge>
          </div>

          <h1 className="display-heading mt-6 max-w-3xl text-5xl text-ink md:text-6xl lg:text-[5rem]">
            I build systems that help people find the right answer.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            I turn scattered information, repetitive work, and unclear
            processes into practical products and systems people can
            understand, trust, and use.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/work/aegis"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_32px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Start with Aegis
            </Link>
            <Link
              href="/resume"
              className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
            >
              View résumé
            </Link>
            <Link
              href="/work"
              className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
            >
              Browse work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <HeroOperatorCard />
      </section>

      <section className="lab-shell pt-14" aria-labelledby="featured-work-heading">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="signal" icon="spark">
              Start here
            </BrandBadge>
            <h2
              id="featured-work-heading"
              className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl"
            >
              Three projects. One clear argument.
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-muted md:text-right">
            AI product development, governed information, and tools designed
            around the people doing the work.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {professionalStory.map((project) => (
            <FeaturedSystemCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <ProofStrip />

      <section className="lab-shell pt-14">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <NotebookHighlight
            size="lg"
            className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
          />
          <div>
            <BrandBadge tone="quiet" icon="spark">
              How I think
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Make the useful path easier to follow.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              I notice where people lose time, context, or confidence. Then I
              build the tool, system, or explanation that helps them move
              forward without hiding the judgment calls that still belong to
              humans.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {philosophyPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-[var(--border)] bg-white/[0.035] p-4 font-lab text-sm font-semibold uppercase tracking-[0.06em] text-ink"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-14" aria-labelledby="beyond-work-heading">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              Beyond the case studies
            </BrandBadge>
            <h2
              id="beyond-work-heading"
              className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl"
            >
              Writing and experiments still get their own rooms.
            </h2>
          </div>
          <MarginArrow
            size="lg"
            className="hidden rotate-6 opacity-40 md:inline-flex"
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {secondaryPaths.map((path) => (
            <SecondaryPathCard key={path.title} {...path} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-14">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <CyanSpark size="md" className="absolute bottom-7 right-8 opacity-60" />
          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Need someone who can build the system, explain the system, and
            notice where the system may fail?
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Contact me
            </Link>
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              View selected work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
