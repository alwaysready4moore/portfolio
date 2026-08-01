import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import {
  NotebookNote,
  Pictogram,
  SectionDivider,
  StatusPill,
  type PictogramName,
  type StatusTone,
} from "@/components/lab";

const pictograms: Array<{
  name: PictogramName;
  label: string;
  purpose: string;
}> = [
  {
    name: "notebook",
    label: "Notebook",
    purpose: "Field Notes, writing, documentation",
  },
  {
    name: "shield",
    label: "Shield",
    purpose: "Security, trust, review, boundaries",
  },
  {
    name: "experiment",
    label: "Experiment",
    purpose: "Labs, prototypes, creative tests",
  },
  {
    name: "flowchart",
    label: "Flowchart",
    purpose: "Systems, process, routing, structure",
  },
  {
    name: "search",
    label: "Search",
    purpose: "Research, discovery, finding answers",
  },
  {
    name: "automation",
    label: "Automation",
    purpose: "AI workflows, handoffs, repeatable work",
  },
  {
    name: "message",
    label: "Message",
    purpose: "Communication, support, feedback",
  },
  {
    name: "checklist",
    label: "Checklist",
    purpose: "Enablement, review, completion",
  },
  {
    name: "browser",
    label: "Browser tool",
    purpose: "Extensions, internal tooling, web systems",
  },
  {
    name: "printer",
    label: "Printer",
    purpose: "Maker work, physical products, production",
  },
  {
    name: "spark",
    label: "Spark",
    purpose: "Ideas, discoveries, emphasis",
  },
  {
    name: "contact",
    label: "Contact",
    purpose: "Collaboration, outreach, conversation",
  },
];

const statuses: Array<{
  label: string;
  tone: StatusTone;
}> = [
  { label: "Active", tone: "active" },
  { label: "In production", tone: "production" },
  { label: "Field tested", tone: "tested" },
  { label: "Experiment", tone: "experiment" },
  { label: "Coming soon", tone: "soon" },
  { label: "Archived", tone: "archived" },
];

const palette = [
  {
    name: "Primary black",
    value: "#050A0C",
    className: "bg-[#050A0C]",
    textClassName: "text-white",
  },
  {
    name: "Soft page white",
    value: "#F7F8F8",
    className: "bg-[#F7F8F8]",
    textClassName: "text-[#050A0C]",
  },
  {
    name: "Electric cyan",
    value: "#19D8E8",
    className: "bg-[#19D8E8]",
    textClassName: "text-[#050A0C]",
  },
  {
    name: "Soft cyan",
    value: "#7EF3FF",
    className: "bg-[#7EF3FF]",
    textClassName: "text-[#050A0C]",
  },
  {
    name: "Dark background",
    value: "#071014",
    className: "bg-[#071014]",
    textClassName: "text-white",
  },
  {
    name: "Card surface",
    value: "#101820",
    className: "bg-[#101820]",
    textClassName: "text-white",
  },
  {
    name: "Muted border",
    value: "#26323A",
    className: "bg-[#26323A]",
    textClassName: "text-white",
  },
  {
    name: "Muted text",
    value: "#A7B3BA",
    className: "bg-[#A7B3BA]",
    textClassName: "text-[#050A0C]",
  },
];

function GuideSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="lab-shell pt-16">
      <div className="mb-8 max-w-3xl">
        <p className="lab-label text-cyan">{eyebrow}</p>

        <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
          {title}
        </h2>

        {description ? (
          <p className="mt-4 text-base leading-7 text-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
}

function PictogramPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#101820] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan/10 blur-2xl"
      />

      {children}
    </div>
  );
}

export default function PictogramGuidePage() {
  return (
    <main className="pb-20">
      <SiteHeader />

      <section className="lab-shell pt-8 md:pt-12">
        <div className="paper-card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <StatusPill tone="active">Working system</StatusPill>

                <span className="lab-label text-muted">Version 0.1</span>
              </div>

              <p className="lab-label mt-8 text-cyan">
                AlwaysReady4Moore.com
              </p>

              <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.055em] text-ink md:text-7xl">
                Pictogram <span className="headline-signal">system</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                A reusable visual language for systems, workplace behavior, technical
                tools, creative experiments, and human judgment.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="soft-chip">Clear</span>
                <span className="soft-chip">Human</span>
                <span className="soft-chip">Systems-minded</span>
                <span className="soft-chip">Warmly technical</span>
                <span className="soft-chip">Slightly mischievous</span>
              </div>

              <NotebookNote className="mt-8 max-w-xl">
                The pictograms explain a tool, behavior, relationship, or system.
                They are not decorative filler.
              </NotebookNote>
            </div>

            <div className="flex min-h-[24rem] items-center justify-center border-t border-[var(--border)] bg-white/[0.025] p-8 lg:border-l lg:border-t-0">
              <PictogramPanel className="flex aspect-square w-full max-w-sm items-center justify-center">
                <div
                  aria-hidden="true"
                  className="absolute left-8 top-8 h-2 w-24 rounded-full bg-cyan"
                />

                <div className="relative grid grid-cols-2 gap-7">
                  <Pictogram
                    name="flowchart"
                    size="xl"
                    label="Flowchart representing systems"
                    className="text-white"
                    accentClassName="text-cyan"
                  />

                  <Pictogram
                    name="notebook"
                    size="xl"
                    label="Notebook representing documentation"
                    className="text-white"
                    accentClassName="text-cyan"
                  />

                  <Pictogram
                    name="shield"
                    size="xl"
                    label="Shield representing security"
                    className="text-white"
                    accentClassName="text-cyan"
                  />

                  <Pictogram
                    name="experiment"
                    size="xl"
                    label="Flask representing experiments"
                    className="text-white"
                    accentClassName="text-cyan"
                  />
                </div>

                <span className="absolute bottom-6 right-7 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/50">
                  Systems lab
                </span>
              </PictogramPanel>
            </div>
          </div>
        </div>
      </section>

      <GuideSection
        eyebrow="Foundation"
        title="Color palette"
        description="Black and white carry the illustration. Cyan marks a signal, annotation, path, or result."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {palette.map((color) => (
            <article
              key={color.name}
              className={`min-h-40 rounded-3xl border border-[var(--border)] p-5 ${color.className} ${color.textClassName}`}
            >
              <p className="font-display text-xl font-semibold">
                {color.name}
              </p>

              <p className="mt-2 font-lab text-xs uppercase tracking-[0.1em] opacity-75">
                {color.value}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-cyan/20 bg-cyan/[0.055] p-6">
          <p className="font-display text-2xl font-semibold text-ink">
            Use cyan as a signal, not a fill
          </p>

          <p className="mt-3 max-w-3xl leading-7 text-muted">
            Use cyan for data paths, dots, focus states, dividers, and small
            highlights. Do not fill large characters, objects, cards, or
            backgrounds with it.
          </p>
        </div>
      </GuideSection>

      <SectionDivider
        label="Icon library"
        icon="flowchart"
        className="lab-shell pt-14"
      />

      <GuideSection
        eyebrow="Reusable icons"
        title="Core pictograms"
        description="Each icon should communicate one idea within about two seconds, even at a small size."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pictograms.map((item) => (
            <article
              key={item.name}
              className="paper-card group p-5 transition hover:-translate-y-1 hover:border-cyan/30"
            >
              <PictogramPanel className="flex aspect-[4/3] items-center justify-center">
                <Pictogram
                  name={item.name}
                  size="xl"
                  label={`${item.label} pictogram`}
                  className="relative text-white transition group-hover:scale-105"
                  accentClassName="text-cyan"
                />
              </PictogramPanel>

              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                {item.label}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                {item.purpose}
              </p>

              <p className="mt-4 font-lab text-[0.65rem] uppercase tracking-[0.1em] text-cyan">
                icon / {item.name}
              </p>
            </article>
          ))}
        </div>
      </GuideSection>

      <GuideSection
        eyebrow="Scale"
        title="Size behavior"
        description="Use small icons for labels and controls. Use large icons for cards, page introductions, and visual panels."
      >
        <div className="paper-card p-6 md:p-8">
          <PictogramPanel className="p-7">
            <div className="relative flex flex-wrap items-end gap-10">
              <div>
                <Pictogram
                  name="notebook"
                  size="sm"
                  label="Small notebook pictogram"
                  className="text-white"
                />

                <p className="mt-3 font-lab text-xs uppercase tracking-[0.1em] text-white/55">
                  Small
                </p>
              </div>

              <div>
                <Pictogram
                  name="notebook"
                  size="md"
                  label="Medium notebook pictogram"
                  className="text-white"
                />

                <p className="mt-3 font-lab text-xs uppercase tracking-[0.1em] text-white/55">
                  Medium
                </p>
              </div>

              <div>
                <Pictogram
                  name="notebook"
                  size="lg"
                  label="Large notebook pictogram"
                  className="text-white"
                />

                <p className="mt-3 font-lab text-xs uppercase tracking-[0.1em] text-white/55">
                  Large
                </p>
              </div>

              <div>
                <Pictogram
                  name="notebook"
                  size="xl"
                  label="Extra-large notebook pictogram"
                  className="text-white"
                />

                <p className="mt-3 font-lab text-xs uppercase tracking-[0.1em] text-white/55">
                  Extra large
                </p>
              </div>
            </div>
          </PictogramPanel>
        </div>
      </GuideSection>

      <GuideSection
        eyebrow="Interface language"
        title="Status pills"
        description="Use status labels to communicate state, not decoration."
      >
        <div className="paper-card flex flex-wrap gap-3 p-6 md:p-8">
          {statuses.map((status) => (
            <StatusPill key={status.label} tone={status.tone}>
              {status.label}
            </StatusPill>
          ))}
        </div>
      </GuideSection>

      <GuideSection
        eyebrow="Annotations"
        title="Notebook notes"
        description="Use annotations for brief context or editorial notes."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article className="paper-card p-6">
            <NotebookNote>
              Built after watching people search three different systems for
              one answer.
            </NotebookNote>
          </article>

          <article className="paper-card p-6">
            <NotebookNote>
              Human review belongs inside the workflow, not stapled onto the
              end.
            </NotebookNote>
          </article>

          <article className="paper-card p-6">
            <NotebookNote marker="→">
              The cyan path shows the improved route through the system.
            </NotebookNote>
          </article>

          <article className="paper-card p-6">
            <NotebookNote marker="*">
              Version two fixed the part everyone politely worked around.
            </NotebookNote>
          </article>
        </div>
      </GuideSection>

      <GuideSection
        eyebrow="Composition"
        title="Use three illustration levels"
        description="The system scales from small interface marks to larger editorial scenes."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="paper-card p-6">
            <PictogramPanel className="flex h-44 items-center justify-center">
              <Pictogram
                name="search"
                size="xl"
                label="Search icon pictogram"
                className="relative text-white"
                accentClassName="text-cyan"
              />
            </PictogramPanel>

            <p className="lab-label mt-6 text-cyan">
              01 / Icon pictogram
            </p>

            <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
              Use one reusable symbol
            </h3>

            <p className="mt-3 leading-7 text-muted">
              Use for navigation, tags, buttons, labels, and compact interface
              details.
            </p>
          </article>

          <article className="paper-card p-6">
            <PictogramPanel className="h-44">
              <Pictogram
                name="message"
                size="xl"
                label="Message pictogram"
                className="absolute left-8 top-8 text-white"
                accentClassName="text-cyan"
              />

              <Pictogram
                name="shield"
                size="lg"
                label="Shield pictogram"
                className="absolute bottom-7 right-9 text-white"
                accentClassName="text-cyan"
              />

              <span
                aria-hidden="true"
                className="absolute left-[47%] top-[52%] w-20 border-t-2 border-dashed border-cyan"
              />
            </PictogramPanel>

            <p className="lab-label mt-6 text-cyan">
              02 / Micro scene
            </p>

            <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
              Show one visual relationship
            </h3>

            <p className="mt-3 leading-7 text-muted">
              Use on project cards, article cards, and section introductions to
              show a problem or interaction.
            </p>
          </article>

          <article className="paper-card p-6">
            <PictogramPanel className="h-44">
              <Pictogram
                name="browser"
                size="xl"
                label="Browser pictogram"
                className="absolute left-6 top-8 text-white"
                accentClassName="text-cyan"
              />

              <Pictogram
                name="flowchart"
                size="lg"
                label="Flowchart pictogram"
                className="absolute right-8 top-5 text-white"
                accentClassName="text-cyan"
              />

              <Pictogram
                name="checklist"
                size="lg"
                label="Checklist pictogram"
                className="absolute bottom-5 right-16 text-white"
                accentClassName="text-cyan"
              />

              <span
                aria-hidden="true"
                className="absolute bottom-7 left-20 h-2 w-28 rounded-full bg-cyan"
              />
            </PictogramPanel>

            <p className="lab-label mt-6 text-cyan">
              03 / Editorial panel
            </p>

            <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
              Show one complete visual idea
            </h3>

            <p className="mt-3 leading-7 text-muted">
              Use sparingly for article openers, hero sections, and important
              explanations.
            </p>
          </article>
        </div>
      </GuideSection>

      <GuideSection
        eyebrow="Placement"
        title="Keep pictograms on contained surfaces"
        description="Place pictograms on a defined surface so their silhouettes stay readable."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--border)] bg-night p-6">
            <p className="lab-label text-cyan">Dark site surface</p>

            <PictogramPanel className="mt-5 flex min-h-64 items-center justify-center">
              <Pictogram
                name="automation"
                size="xl"
                label="Automation pictogram on a dark card"
                className="relative text-white"
                accentClassName="text-cyan"
              />
            </PictogramPanel>

            <p className="mt-5 leading-7 text-muted">
              Dark page, contained card surface, white silhouette, and a small
              cyan signal.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-night p-6">
            <p className="lab-label text-cyan">Editorial variation</p>

            <PictogramPanel className="mt-5 flex min-h-64 items-center justify-center border-cyan/20">
              <div
                aria-hidden="true"
                className="absolute left-8 top-8 h-2 w-28 rounded-full bg-cyan"
              />

              <Pictogram
                name="notebook"
                size="xl"
                label="Notebook pictogram with editorial accent"
                className="relative text-white"
                accentClassName="text-cyan"
              />

              <span className="absolute bottom-7 right-8 font-lab text-[0.65rem] uppercase tracking-[0.15em] text-white/45">
                Field note
              </span>
            </PictogramPanel>

            <p className="mt-5 leading-7 text-muted">
              Add labels and cyan marks only when they clarify the concept or add
              useful context.
            </p>
          </article>
        </div>
      </GuideSection>

      <GuideSection eyebrow="Quality control" title="Check each icon before use">
        <div className="paper-card p-6 md:p-8">
          <ul className="grid gap-4 md:grid-cols-2">
            {[
              "The idea is clear in about two seconds.",
              "The silhouette remains readable at thumbnail size.",
              "Cyan communicates a specific state, path, or result.",
              "The concept feels clear and professional without becoming stiff.",
              "The graphic explains one idea, behavior, tool, or system.",
              "The composition avoids generic corporate art and AI imagery.",
              "The image still makes sense without a paragraph of explanation.",
              "The alt text explains the idea rather than every visual detail.",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-[var(--border)] bg-white/[0.025] p-4 text-sm leading-6 text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-cyan/30 bg-cyan/10 font-lab text-[0.65rem] text-cyan"
                >
                  ✓
                </span>

                {item}
              </li>
            ))}
          </ul>
        </div>
      </GuideSection>

      <section className="lab-shell pt-16">
        <div className="paper-card flex flex-col justify-between gap-6 p-7 md:flex-row md:items-center md:p-9">
          <div>
            <p className="lab-label text-cyan">Current use</p>

            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.04em] text-ink md:text-4xl">
              Apply the system consistently across new pages
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-muted">
              New pictograms should follow this guide and be reviewed before they
              appear on the site. Generated artwork stays outside the source
              until it is approved.
            </p>
          </div>

          <Link
            href="/"
            className="focus-ring inline-flex shrink-0 items-center justify-center rounded-2xl border border-cyan/40 bg-cyan px-5 py-3 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night transition hover:-translate-y-0.5"
          >
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}