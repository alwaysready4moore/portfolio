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

const professionalStoryHrefs = [
  "/technical-writing",
  "/work/new-analyst-tool",
  "/work/aegis",
] as const;

const professionalStory = professionalStoryHrefs.flatMap((href) =>
  featuredSystems.filter((project) => project.href === href),
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
    title: "Essays about systems and the people who use them",
    description:
      "Editorial writing on AI, security, communication, work, and the judgment people still need to apply.",
    href: "/field-notes",
    cta: "Read Field Notes",
    tone: "verified" as const,
  },
  {
    label: "Lab",
    title: "Creative experiments with a clear question",
    description:
      "Products, identity systems, music projects, small-business tools, and prototypes built in public.",
    href: "/lab",
    cta: "Visit the Lab",
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
              Creative technical writer · systems builder
            </p>
          </div>
        </div>

        <p className="mt-5 border-t border-[var(--border)] pt-5 text-sm leading-6 text-muted">
          I write documentation, build knowledge systems, and design workflow
          tools that make complex work easier to understand and safer to use.
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
              Creative technical writing · workflow design · knowledge systems
            </BrandBadge>
          </div>

          <h1 className="display-heading mt-6 max-w-3xl text-5xl text-ink md:text-6xl lg:text-[5rem]">
            I build systems that help people find the
            <span className="headline-signal block">right answer</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            I turn complex systems, security workflows, and scattered knowledge
            into clear documentation and tools people can use.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/technical-writing"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_32px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Explore technical writing
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
              Start with three systems. <span className="headline-signal">See how I work</span>
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-muted md:text-right">
            These projects show how I write for operational decisions, embed
            guidance into real work, and apply AI with review points intact.
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
              Make the next step <span className="headline-signal">clear</span>
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              I look for the point where people lose time, context, or confidence.
              Then I build the tool, workflow, or explanation that helps them
              continue without hiding the decisions people still need to make.
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
              Read the writing. <span className="headline-signal">Visit the lab</span>
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
            Need someone who can design the workflow, explain it clearly, and
            spot where it may fail?
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
