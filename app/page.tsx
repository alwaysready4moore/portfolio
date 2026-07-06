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

function EntryCard({
  label,
  title,
  description,
  href,
  cta,
  motif,
}: {
  label: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  motif: "notes" | "lab";
}) {
  return (
    <Link
      href={href}
      className="paper-card group grid min-h-72 overflow-hidden p-6 transition duration-300 hover:-translate-y-1 md:p-7"
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="lab-label text-cyan">{label}</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan/10 font-lab text-2xl text-cyan">
          {motif === "notes" ? "✎" : "⌘"}
        </div>
      </div>

      <p className="mt-6 max-w-xl leading-7 text-muted">{description}</p>

      <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
        <span className="lab-label text-ink">{cta}</span>
        <span className="font-lab text-2xl text-cyan transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  const homepageNotes = fieldNotes.slice(0, 2);

  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell grid gap-10 pt-10 md:grid-cols-[0.92fr_0.78fr] md:items-center md:pt-16">
        <div>
          <p className="lab-label mb-5 text-cyan">Marquetta’s Systems Lab</p>

          <h1 className="display-heading max-w-3xl text-5xl text-ink md:text-6xl lg:text-[5.6rem]">
            I build systems for messy information.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg">
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

        <div className="md:scale-[0.92] md:justify-self-end">
          <LabWorkbench />
        </div>
      </section>

      <section className="lab-shell grid gap-5 pt-20 lg:grid-cols-2">
        <EntryCard
          label="Field Notes"
          title="Essays from the messy middle"
          description="Writing on AI, work, communication, security, boundaries, and what it means to stay human while using powerful tools."
          href="/field-notes"
          cta="Open Field Notes"
          motif="notes"
        />

        <EntryCard
          label="The Lab"
          title="Experiments with a point"
          description="Creative systems, small-business building, playful tools, identity experiments, and prototypes that test ideas before they become something bigger."
          href="/lab"
          cta="Enter the Lab"
          motif="lab"
        />
      </section>

      <section className="lab-shell pt-20">
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
            <FeaturedSystemCard
              key={project.title}
              title={project.title}
              label={project.label}
              description={project.description}
              tags={[...project.tags]}
              accent={project.accent}
              previewType={project.previewType}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
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
            <FieldNoteCard
              key={note.title}
              category={note.category}
              title={note.title}
              description={note.description}
              slug={note.slug}
              variant={note.variant}
              image={note.image}
              imageAlt={note.imageAlt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}