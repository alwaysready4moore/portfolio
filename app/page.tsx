import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookPaperclip,
  NotebookTape,
  PhoenixMark,
  type BrandBadgeTone,
} from "@/components/brand";
import { FeaturedSystemCard } from "@/components/FeaturedSystemCard";
import { FieldNoteCard } from "@/components/FieldNoteCard";
import { LabWorkbench } from "@/components/LabWorkbench";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredSystems } from "@/data/featuredSystems";
import { fieldNotes } from "@/data/fieldNotes";

const operatorSignals = [
  "Messy workflows",
  "Knowledge gaps",
  "Repetitive work",
  "Human review points",
];

const heroTags = [
  "Creative Technology",
  "AI Product Development",
  "Knowledge Systems",
  "Workflow Design",
];

const proofSignals = [
  {
    value: "7+",
    label: "Years across support, security, operations, and enablement",
  },
  {
    value: "774",
    label: "Knowledge pages governed in a large internal system",
  },
  {
    value: "3,100+",
    label: "Knowledge-system edits across resources and workflows",
  },
];

const workSteps = [
  {
    step: "Observe",
    description: "Learn how the work really happens.",
  },
  {
    step: "Structure",
    description: "Sort the information into a usable shape.",
  },
  {
    step: "Build",
    description: "Create the smallest useful system.",
  },
  {
    step: "Refine",
    description: "Improve it through feedback and real use.",
  },
];

const entryPoints = [
  {
    label: "Work",
    title: "Case studies and working systems",
    description:
      "Public-safe project stories about AI tools, knowledge systems, support workflows, and the adoption layer around them.",
    href: "/work",
    cta: "View the work",
    tone: "signal" as const,
  },
  {
    label: "Field Notes",
    title: "Writing from the messy middle",
    description:
      "Essays on AI, communication, security, systems, and the human judgment that keeps powerful tools useful.",
    href: "/field-notes",
    cta: "Read the notes",
    tone: "verified" as const,
  },
  {
    label: "Lab",
    title: "Experiments with a point",
    description:
      "Creative side projects, identity systems, small-business building, and prototypes that test ideas in public.",
    href: "/lab",
    cta: "Enter the lab",
    tone: "experiment" as const,
  },
];

function HeroOperatorCard() {
  return (
    <aside
      className="paper-card overflow-hidden"
      aria-labelledby="operator-card-title"
    >
      <div className="grid gap-0 sm:grid-cols-[0.78fr_1fr] lg:grid-cols-1">
        <div className="relative border-b border-[var(--border)] bg-white/[0.035] p-4 sm:border-b-0 sm:border-r lg:border-b lg:border-r-0">
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
              className="aspect-square w-full object-cover sm:aspect-auto sm:h-full lg:aspect-[4/3]"
            />
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <BrandBadge tone="signal" icon="dot">
              Systems lab operator
            </BrandBadge>

            <BrandBadge tone="quiet" icon="spark">
              Active
            </BrandBadge>
          </div>

          <div className="mt-4 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-[#101820]">
              <PhoenixMark
                variant="standard"
                size="md"
                decorative
                className="h-10 w-10"
              />
            </div>

            <div>
              <h2
                id="operator-card-title"
                className="font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink"
              >
                Marquetta Moore
              </h2>

              <p className="mt-2 font-lab text-sm uppercase tracking-[0.08em] text-muted">
                Systems builder · AI workflow designer
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-[var(--border)] pt-4">
            <p className="lab-label text-muted">Currently mapping</p>

            <ul className="mt-4 grid gap-3">
              {operatorSignals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-center gap-3 text-sm text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-cyan/30 bg-cyan/10 font-lab text-[0.65rem] text-cyan"
                  >
                    ✓
                  </span>

                  {signal}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-xs leading-5 text-muted">
            Avatar created with AI-assisted image tools and documented in the{" "}
            <Link
              href="/colophon"
              className="text-cyan underline-offset-4 transition hover:text-ink hover:underline"
            >
              colophon
            </Link>
            .
          </p>
        </div>
      </div>
    </aside>
  );
}

function ProofStrip() {
  return (
    <section className="lab-shell pt-8">
      <div className="grid gap-4 md:grid-cols-3">
        {proofSignals.map((signal) => (
          <article
            key={signal.value}
            className="paper-card relative overflow-hidden p-5"
          >
            <CyanSpark
              size="xs"
              className="absolute right-5 top-5 opacity-55"
            />

            <p className="font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              {signal.value}
            </p>

            <p className="mt-3 text-sm leading-6 text-muted">
              {signal.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkbenchSection() {
  return (
    <section className="lab-shell pt-12">
      <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <BrandBadge tone="quiet" icon="spark">
            Operating model
          </BrandBadge>

          <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-[-0.03em] text-ink md:text-3xl">
            Every project begins with a practical question:
            <span className="text-cyan">
              {" "}
              Why is this harder than it needs to be?
            </span>
          </p>
        </div>

        <MarginArrow
          size="lg"
          className="hidden rotate-6 opacity-50 md:inline-flex"
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
        <div className="paper-card relative overflow-hidden p-6 md:p-7">
          <NotebookPaperclip
            size="lg"
            className="absolute right-5 top-5 rotate-12 opacity-20"
          />

          <BrandBadge tone="signal" icon="dot">
            How I work
          </BrandBadge>

          <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
            Structure the mess. Make it usable.
          </h2>

          <p className="mt-6 leading-7 text-muted">
            I start by learning how the work actually happens. Then I organize
            the information, build the smallest useful system, and refine it
            through real use and human feedback.
          </p>

          <ol className="mt-7 grid grid-cols-2 gap-3">
            {workSteps.map((item, index) => (
              <li
                key={item.step}
                className="rounded-2xl border border-[var(--border)] bg-white/[0.025] p-4"
              >
                <span className="font-lab text-xs text-cyan">
                  0{index + 1}
                </span>

                <p className="mt-2 font-display text-xl font-semibold text-ink">
                  {item.step}
                </p>

                <p className="mt-2 text-xs leading-5 text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="paper-card flex min-h-[22rem] items-center justify-center overflow-hidden p-4">
          <LabWorkbench />
        </div>
      </div>
    </section>
  );
}

function EntryCard({
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

      <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>

      <p className="mt-6 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
        {cta} <span aria-hidden="true">→</span>
      </p>
    </Link>
  );
}

function EntryPointSection() {
  return (
    <section className="lab-shell pt-16">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <BrandBadge tone="quiet" icon="spark">
            Start here
          </BrandBadge>

          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            Three ways into the lab.
          </h2>
        </div>

        <p className="max-w-xl leading-7 text-muted md:text-right">
          The portfolio splits into practical systems, written thinking, and
          creative experiments. Same brain, different surfaces.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {entryPoints.map((entry) => (
          <EntryCard key={entry.title} {...entry} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const homepageNotes = fieldNotes.slice(0, 2);

  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell grid gap-8 border-b border-[var(--border)] pb-10 pt-4 lg:grid-cols-[0.95fr_0.58fr] lg:items-start lg:pt-6">
        <div className="pt-4 md:pt-6 lg:pt-8">
          <div className="flex flex-wrap items-center gap-3">
            <BrandBadge tone="signal" icon="spark">
              Marquetta’s Systems Lab
            </BrandBadge>

            <BrandBadge tone="quiet" icon="dot">
              Clarity in progress
            </BrandBadge>
          </div>

          <div className="mt-5">
            <h1 className="display-heading max-w-3xl text-5xl text-ink md:text-6xl lg:text-[5rem]">
              I build systems that help people find the right answer.
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            I turn scattered information, repetitive work, and unclear
            processes into AI products, knowledge systems, and practical tools
            people can understand, trust, and use.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <BrandBadge key={tag} tone="quiet" icon="dot">
                {tag}
              </BrandBadge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work/aegis"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_32px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Explore Aegis
            </Link>

            <Link
              href="/work/launchpad"
              className="focus-ring rounded-2xl border border-cyan/35 bg-cyan/[0.06] px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/60"
            >
              See Launchpad
            </Link>

            <Link
              href="/resume"
              className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
            >
              View Résumé
            </Link>
          </div>
        </div>

        <HeroOperatorCard />
      </section>

      <section className="lab-shell pt-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Link
            href="/work/aegis"
            className="paper-card group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-cyan/40 md:p-7"
          >
            <CyanSpark
              size="sm"
              className="absolute right-5 top-5 opacity-55 transition group-hover:opacity-90"
            />

            <BrandBadge tone="signal" icon="spark">
              Featured AI product
            </BrandBadge>

            <h2 className="mt-5 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              Aegis
            </h2>

            <p className="mt-4 leading-7 text-muted">
              A production-minded AI creative intelligence pipeline with
              validated outputs, visible failure states, secure server-side
              configuration, and heuristic risk review.
            </p>

            <p className="mt-6 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
              Read the case study <span aria-hidden="true">→</span>
            </p>
          </Link>

          <Link
            href="/work/launchpad"
            className="paper-card group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-cyan/40 md:p-7"
          >
            <CyanSpark
              size="sm"
              className="absolute right-5 top-5 opacity-55 transition group-hover:opacity-90"
            />

            <BrandBadge tone="verified" icon="spark">
              Featured AI workflow
            </BrandBadge>

            <h2 className="mt-5 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              Launchpad
            </h2>

            <p className="mt-4 leading-7 text-muted">
              A custom Claude skill that turns career readiness into a
              structured, persistent system with scored gaps, prioritized
              tasks, progress history, and security-hardened artifacts.
            </p>

            <p className="mt-6 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
              Read the case study <span aria-hidden="true">→</span>
            </p>
          </Link>
        </div>
      </section>

      <ProofStrip />

      <WorkbenchSection />

      <EntryPointSection />

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              Selected work
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Systems in practice.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Tools, workflows, and knowledge systems built around real
              operational problems and the people responsible for navigating
              them.
            </p>
          </div>

          <Link
            href="/work"
            className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
          >
            View all work <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredSystems.map((project) => (
            <FeaturedSystemCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              Field Notes
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Notes from the messy middle.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Writing about AI, security, communication, systems, and the human
              judgment that keeps all of them useful.
            </p>
          </div>

          <Link
            href="/field-notes"
            className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
          >
            Read more <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {homepageNotes.map((note) => (
            <FieldNoteCard key={note.title} {...note} />
          ))}
        </div>
      </section>
    </main>
  );
}