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

function HeroOperatorCard() {
  return (
    <aside className="paper-card overflow-hidden">
      <div className="grid gap-0 sm:grid-cols-[0.78fr_1fr] lg:grid-cols-1">
        <div className="relative border-b border-[var(--border)] bg-white/[0.035] p-4 sm:border-b-0 sm:border-r lg:border-b lg:border-r-0">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-night">
            <img
              src="/avatars/chibi-marquetta.png"
              alt="Chibi avatar of Marquetta working at a computer."
              className="aspect-square w-full object-cover sm:aspect-auto sm:h-full lg:aspect-[4/3]"
            />
          </div>
        </div>

        <div className="p-6">
          <p className="lab-label text-cyan">Systems lab operator</p>

          <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
            Tiny me, watching the signal.
          </h2>

          <p className="mt-4 leading-7 text-muted">
            A visual stand-in for the person behind the systems: organizing the
            messy bits, testing the workflow, and checking whether the answer is
            actually useful.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>AI Workflows</Chip>
            <Chip>Knowledge Design</Chip>
            <Chip>Human Review</Chip>
          </div>

          <p className="mt-5 text-sm leading-6 text-muted">
            Avatar created with AI-assisted image tools and disclosed in the{" "}
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
    <section className="lab-shell pt-12">
      <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
        <div className="paper-card p-6 md:p-7">
          <p className="lab-label text-cyan">How I work</p>

          <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
            Structure the mess. Then make it usable.
          </h2>

          <p className="mt-6 leading-7 text-muted">
            The workbench is the operating model: observe what is happening,
            structure the information, build a useful system, and refine it
            until people can actually use it.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>Observe</Chip>
            <Chip>Structure</Chip>
            <Chip>Build</Chip>
            <Chip>Refine</Chip>
          </div>
        </div>

        <div className="paper-card p-4">
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
          <p className="lab-label mb-5 text-cyan">Marquetta’s Systems Lab</p>

          <h1 className="display-heading max-w-3xl text-5xl text-ink md:text-6xl lg:text-[5rem]">
            I build systems for messy information.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            AI workflows. Knowledge hubs. Support tools. Security-minded
            communication. Practical systems that help people find the right
            answer faster.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Chip>AI Enablement</Chip>
            <Chip>Knowledge Systems</Chip>
            <Chip>Support Ops</Chip>
            <Chip>Security-Aware Comms</Chip>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-cyan/40 bg-cyan px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_32px_rgba(39,217,255,0.22)] transition hover:-translate-y-0.5"
            >
              View Work
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

      <section className="lab-shell pt-14">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="lab-label text-muted">Selected Work</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Featured systems
            </h2>
          </div>

          <Link
            href="/work"
            className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
          >
            View all work <span>→</span>
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredSystems.map((project) => (
            <FeaturedSystemCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <WorkbenchSection />

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="lab-label text-muted">Field Notes</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Recent writing
            </h2>
          </div>

          <Link
            href="/field-notes"
            className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
          >
            Read more <span>→</span>
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