import Link from "next/link";
import { FeaturedSystemCard } from "@/components/FeaturedSystemCard";
import { FieldNoteCard } from "@/components/FieldNoteCard";
import { LabWorkbench } from "@/components/LabWorkbench";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredSystems } from "@/data/featuredSystems";
import { fieldNotes } from "@/data/fieldNotes";

function Chip({ children }: { children: string }) {
  return <span className="soft-chip">{children}</span>;
}

const operatorSignals = [
  "Messy workflows",
  "Knowledge gaps",
  "Repetitive work",
  "Human review points",
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

          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-night">
            <img
              src="/avatars/chibi-marquetta.png"
              alt="Illustrated avatar of Marquetta working at a computer."
              className="aspect-square w-full object-cover sm:aspect-auto sm:h-full lg:aspect-[4/3]"
            />
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="lab-label text-cyan">Systems lab operator</p>

            <span className="inline-flex items-center gap-2 font-lab text-xs uppercase tracking-[0.1em] text-muted">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_rgba(39,217,255,0.85)]"
              />
              Active
            </span>
          </div>

          <h2
            id="operator-card-title"
            className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink"
          >
            Marquetta Moore
          </h2>

          <p className="mt-3 font-lab text-sm uppercase tracking-[0.08em] text-muted">
            Systems builder · Security analyst · Creative technologist
          </p>

          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <p className="lab-label text-muted">Currently observing</p>

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

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>AI Workflows</Chip>
            <Chip>Knowledge Design</Chip>
            <Chip>Human Review</Chip>
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

function WorkbenchSection() {
  return (
    <section className="lab-shell pt-14">
      <div className="mb-7 max-w-3xl">
        <p className="lab-label text-muted">Operating model</p>

        <p className="mt-3 font-display text-2xl font-semibold leading-snug tracking-[-0.03em] text-ink md:text-3xl">
          Every project begins with a practical question:
          <span className="text-cyan">
            {" "}
            Why is this harder than it needs to be?
          </span>
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
        <div className="paper-card p-6 md:p-7">
          <p className="lab-label text-cyan">How I work</p>

          <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
            Structure the mess. Make it usable.
          </h2>

          <p className="mt-6 leading-7 text-muted">
            I start by learning how the work actually happens. Then I organize
            the information, build the smallest useful system, and refine it
            through real use and human feedback.
          </p>

          <ol className="mt-7 grid grid-cols-2 gap-3">
            {["Observe", "Structure", "Build", "Refine"].map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-[var(--border)] bg-white/[0.025] p-4"
              >
                <span className="font-lab text-xs text-cyan">
                  0{index + 1}
                </span>

                <p className="mt-2 font-display text-xl font-semibold text-ink">
                  {step}
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

export default function Home() {
  const homepageNotes = fieldNotes.slice(0, 2);

  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell grid gap-8 pt-4 lg:grid-cols-[0.95fr_0.58fr] lg:items-center lg:pt-6">
        <div className="pt-4 md:pt-8">
          <p className="lab-label mb-5 text-cyan">
            Marquetta’s Systems Lab
          </p>

          <h1 className="display-heading max-w-3xl text-5xl text-ink md:text-6xl lg:text-[5rem]">
            I build systems that help people find the right answer.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            I turn scattered information, repetitive work, and unclear
            processes into AI-assisted workflows, knowledge systems, and
            practical tools people can confidently use.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Chip>AI Enablement</Chip>
            <Chip>Knowledge Systems</Chip>
            <Chip>Workflow Design</Chip>
            <Chip>Security-Aware Communication</Chip>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-cyan/40 bg-cyan px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_32px_rgba(39,217,255,0.22)] transition hover:-translate-y-0.5"
            >
              Explore Systems
            </Link>

            <Link
              href="/field-notes"
              className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
            >
              Open Field Notes
            </Link>
          </div>
        </div>

        <HeroOperatorCard />
      </section>

      <WorkbenchSection />

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="lab-label text-muted">Selected work</p>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Systems in practice
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
            <p className="lab-label text-muted">Field Notes</p>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Notes from the messy middle
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Writing about AI, security, communication, systems, and the
              human judgment that keeps all of them useful.
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