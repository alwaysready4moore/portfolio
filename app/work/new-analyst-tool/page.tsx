import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const overviewStats = [
  {
    value: "8",
    label: "Tool sections",
  },
  {
    value: "30+",
    label: "Versioned releases",
  },
  {
    value: "1",
    label: "Analyst workflow hub",
  },
];

const toolboxAreas = [
  {
    title: "Workflow reference",
    description:
      "Brought commonly needed analyst guidance closer to the actual work so people could move through repeated tasks with less context switching.",
  },
  {
    title: "Decision support",
    description:
      "Centralized guidance for recurring analyst decisions so standards were easier to reference in the moment, not buried in separate documentation.",
  },
  {
    title: "Embedded learning",
    description:
      "Included lessons and learning material inside the tool itself, making it part reference surface and part lightweight training layer.",
  },
  {
    title: "Progress visibility",
    description:
      "Supported visibility into work patterns and progress without forcing analysts to leave the workflow just to understand their own output.",
  },
];

const caseStudySections = [
  {
    eyebrow: "Problem",
    title: "Useful knowledge existed, but analysts needed it closer to the work.",
    body:
      "Analysis work depends on accuracy, consistency, context, and speed. But even strong documentation can lose value when it lives too far away from the moment of decision. This tool was built around a simple idea: put the most useful references, lessons, and workflow helpers where analysts could actually use them.",
  },
  {
    eyebrow: "Constraint",
    title: "The tool had to fit the workflow instead of becoming another chore.",
    body:
      "A useful internal tool cannot feel like homework. It needed to be lightweight, quick to open, easy to update, and organized around real analyst needs. The goal was not to create a shiny side project. The goal was to reduce friction around recurring tasks, repeated questions, and context switching.",
  },
  {
    eyebrow: "Approach",
    title: "I treated the tool like a living workbench.",
    body:
      "The tool evolved through iteration: build a useful surface, test how it fits the work, improve the structure, add guidance, refine the sections, and keep releasing better versions. The 30+ versioned releases matter because they show the tool was not frozen after the first useful idea. It kept becoming more usable.",
  },
  {
    eyebrow: "Outcome",
    title: "The result was part tool, part knowledge hub, part training layer.",
    body:
      "The finished shape was an internal analyst tool with eight sections covering workflow support needs such as reference guidance, decision support, embedded lessons, progress visibility, and related workflow helpers. It connected knowledge management, support operations, internal tooling, and accuracy-minded judgment in one practical package.",
  },
];

const buildNotes = [
  "Designed as an internal tool for real analyst workflow support.",
  "Organized into 8 sections so different support needs had clear homes.",
  "Included embedded lessons instead of separating learning from doing.",
  "Released through 30+ versions, showing ongoing iteration and refinement.",
  "Built around accuracy, findability, speed, and analyst confidence.",
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <p className="font-display text-5xl font-bold leading-none tracking-[-0.06em] text-ink">
        {value}
      </p>
      <p className="mt-3 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
        {label}
      </p>
    </article>
  );
}

function ToolboxCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="paper-card p-6">
      <p className="lab-label text-cyan">Tool area</p>
      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function CaseSection({
  eyebrow,
  title,
  body,
  index,
}: {
  eyebrow: string;
  title: string;
  body: string;
  index: number;
}) {
  return (
    <article className="paper-card p-6 md:p-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="lab-label text-cyan">{eyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
            {title}
          </h2>
        </div>

        <span className="hidden font-lab text-4xl font-semibold text-cyan/50 sm:block">
          0{index + 1}
        </span>
      </div>

      <p className="mt-6 max-w-4xl leading-8 text-muted">{body}</p>
    </article>
  );
}

export default function NewAnalystToolPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <Link
          href="/work"
          className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan transition hover:text-ink"
        >
          ← Back to Work
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_0.72fr] lg:items-start">
          <div>
            <p className="lab-label text-cyan">Case Study</p>

            <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              New Analyst Tool
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              An internal workflow tool built to bring analyst guidance,
              workflow helpers, embedded lessons, and reference material closer
              to the daily work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="soft-chip">Internal tooling</span>
              <span className="soft-chip">Knowledge systems</span>
              <span className="soft-chip">Workflow design</span>
              <span className="soft-chip">Documentation</span>
              <span className="soft-chip">Analyst support</span>
            </div>
          </div>

          <aside className="paper-card p-6">
            <p className="lab-label text-cyan">Project signal</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              Practical tool, real workflow.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              This case study is public-safe. It focuses on the system design,
              workflow thinking, and tool structure without exposing private
              data, internal screenshots, or sensitive operational details.
            </p>

            <div className="mt-6 grid gap-3">
              {overviewStats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="lab-label text-cyan">Screenshots</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Screenshots coming soon.
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              Because this was an internal workflow tool, screenshots need to be
              reviewed and prepared carefully before they are published here.
            </p>

            <p className="leading-8">
              The goal is to show real interface context without exposing
              private information, internal naming, sensitive workflows, or
              anything that should stay behind the curtain.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="grid gap-5">
          {caseStudySections.map((section, index) => (
            <CaseSection
              key={section.title}
              eyebrow={section.eyebrow}
              title={section.title}
              body={section.body}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8">
          <p className="lab-label text-muted">What the tool supported</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            Eight sections, one clearer analyst surface.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {toolboxAreas.map((area) => (
            <ToolboxCard
              key={area.title}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="lab-label text-cyan">Build notes</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              The important part was not just building it. It was making it
              useful enough to keep improving.
            </h2>
          </div>

          <ul className="grid gap-4">
            {buildNotes.map((note) => (
              <li
                className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5 leading-7 text-muted"
                key={note}
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note p-7 md:p-9">
          <p className="field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            The best internal tools make the work easier to do well.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[var(--paper-ink)] bg-[var(--paper-ink)] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-paper"
            >
              Back to work
            </Link>

            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)]"
            >
              Talk about systems
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}