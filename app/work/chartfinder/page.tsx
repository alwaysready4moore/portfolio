import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "ChartFinder case study | AlwaysReady4Moore",
  description:
    "How I built ChartFinder, a local Chrome extension that copies visible support context into a clean reply format.",
};

const overviewStats = [
  {
    value: "Local",
    label: "Data handling model",
  },
  {
    value: "3",
    label: "Context types",
  },
  {
    value: "2",
    label: "Output formats",
  },
];

const buildDetails = [
  {
    label: "Tool type",
    value: "Chrome extension",
  },
  {
    label: "Stack",
    value: "JavaScript + HTML/CSS",
  },
  {
    label: "Output",
    value: "Markdown / HTML",
  },
  {
    label: "Storage",
    value: "Chrome local storage",
  },
];

const screenshots = [
  {
    title: "Support article capture",
    description:
      "ChartFinder copies a support article into a reusable reference for a support reply.",
    image: "/screenshots/chatfinder/support-article.png",
  },
];

const contextTypes = [
  {
    title: "Shipment details",
    body:
      "Extracted visible shipment context like recipient, service, insurance, tracking number, cost, and related shipment page links.",
    tone: "signal" as const,
  },
  {
    title: "Client details",
    body:
      "Copied client context into a cleaner format, including a linked client name and available email context for support handoffs.",
    tone: "verified" as const,
  },
  {
    title: "Support articles",
    body:
      "Copied support article or internal resource context into a reusable reference format, including an internal-only reminder when needed.",
    tone: "experiment" as const,
  },
];

const caseStudySections = [
  {
    eyebrow: "Problem",
    title: "Support work included too many small copy-and-paste steps",
    body:
      "Support teammates repeatedly copied tracking numbers, shipment pages, service details, client links, and article references. Each step was small, but the repeated work slowed the queue.",
    tone: "signal" as const,
  },
  {
    eyebrow: "Constraint",
    title: "Set a data boundary people could understand",
    body:
      "The extension handled support context, so its data model had to be easy to explain. It read visible page text, ran in Chrome, made no backend queries, sent no data externally, and stored preferences locally.",
    tone: "warning" as const,
  },
  {
    eyebrow: "Approach",
    title: "Keep the tool inside the existing browser workflow",
    body:
      "A support rep could open a shipment, client page, or article, then copy the relevant context as Markdown or HTML. The output stayed visible and editable before use.",
    tone: "experiment" as const,
  },
  {
    eyebrow: "Outcome",
    title: "Document the tool so others can use and maintain it",
    body:
      "ChartFinder grew from a copy helper into a documented workflow with setup steps, troubleshooting, known issues, compliance notes, feedback, and a changelog.",
    tone: "verified" as const,
  },
];

const workflowStages = [
  {
    step: "01",
    title: "Open the work context",
    body:
      "Start from an authenticated support page, client page, support article, or internal resource already visible in the browser.",
    tone: "signal" as const,
  },
  {
    step: "02",
    title: "Extract visible text",
    body:
      "Read the information available on the current page, without backend account access or external data calls.",
    tone: "verified" as const,
  },
  {
    step: "03",
    title: "Format for support",
    body:
      "Format the selected context as Markdown or HTML, then copy it to the clipboard.",
    tone: "experiment" as const,
  },
  {
    step: "04",
    title: "Review before sending",
    body:
      "The support teammate reviews the copied output before using it in a customer or internal message.",
    tone: "warning" as const,
  },
];

const privacyBoundaries = [
  {
    title: "Visible text only",
    body:
      "ChartFinder worked from the current page surface. It did not search customer accounts or reach into backend systems.",
    tone: "signal" as const,
  },
  {
    title: "Local operation",
    body:
      "The extension ran inside Chrome, with copied output going to the local clipboard and preferences stored in Chrome local storage.",
    tone: "verified" as const,
  },
  {
    title: "No external transmission",
    body:
      "The documented data flow avoided API calls and external communication, which made the tool easier to explain and review.",
    tone: "warning" as const,
  },
  {
    title: "Human review stays in the loop",
    body:
      "The guide told users to double-check copied output, especially around known parsing edge cases like service or insured-value detection.",
    tone: "experiment" as const,
  },
];

const iterationNotes = [
  {
    version: "v1.5.3",
    title: "More reliable injection and clear success feedback",
    body:
      "Improved long-lived tab support, added clear success feedback, and shortened ping timeouts without changing the local data model.",
    tone: "signal" as const,
  },
  {
    version: "v1.5.2",
    title: "Autorun and support formatting",
    body:
      "Added autorun, shipment detection, and Markdown output for faster support replies.",
    tone: "verified" as const,
  },
  {
    version: "v1.5.1",
    title: "Preferences panel and context controls",
    body:
      "Added preferences for output and behavior.",
    tone: "experiment" as const,
  },
  {
    version: "v2.0.0",
    title: "Broader toolkit direction",
    body:
      "Outlined a broader support toolkit while keeping the current tool focused.",
    tone: "warning" as const,
  },
];

const adoptionLayers = [
  {
    title: "Setup instructions",
    body:
      "Walked teammates through Chrome extension setup, developer mode, extension loading, pinning, and update flow.",
    tone: "signal" as const,
  },
  {
    title: "Usage guide",
    body:
      "Explained shipment lookup, client information copy, article copy, auto-detect behavior, and output format choices.",
    tone: "verified" as const,
  },
  {
    title: "Troubleshooting",
    body:
      "Explained common messages about refreshes, missing details, empty copies, and HTML formatting, with a next step for each.",
    tone: "experiment" as const,
  },
  {
    title: "Known issues",
    body:
      "Documented cases where service or insured-value detection still needs review.",
    tone: "warning" as const,
  },
];

const lessons = [
  {
    title: "Small repeated tasks deserve design attention",
    body:
      "Copy-and-paste work can look too minor to fix. In a busy queue, repetition makes it worth addressing.",
    tone: "signal" as const,
  },
  {
    title: "A clear local data model supports trust",
    body:
      "The model is simple to explain: visible text in, formatted clipboard output out, preferences stored locally.",
    tone: "verified" as const,
  },
  {
    title: "Documentation supports adoption",
    body:
      "Setup, troubleshooting, compliance notes, feedback, and a changelog made the tool usable beyond its first release.",
    tone: "experiment" as const,
  },
];

function SectionTitle({
  kicker,
  title,
  description,
  tone = "quiet",
}: {
  kicker: string;
  title: string;
  description?: string;
  tone?: BrandBadgeTone;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <BrandBadge tone={tone} icon="spark">
          {kicker}
        </BrandBadge>

        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
          {title}
        </h2>
      </div>

      {description ? (
        <p className="max-w-xl leading-7 text-muted md:text-right">
          {description}
        </p>
      ) : null}
    </div>
  );
}

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

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <BrandBadge tone="quiet" icon="none">
        {label}
      </BrandBadge>

      <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
        {value}
      </p>
    </article>
  );
}

function ScreenshotCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="paper-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
      <div className="border-b border-[var(--border)] bg-white/[0.035] p-3">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full object-contain object-top"
          />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <BrandBadge tone="signal" icon="dot">
            {title}
          </BrandBadge>

          <CyanSpark size="xs" className="opacity-70" />
        </div>

        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      </div>
    </article>
  );
}

function CaseSection({
  eyebrow,
  title,
  body,
  index,
  tone,
}: {
  eyebrow: string;
  title: string;
  body: string;
  index: number;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6 md:p-8">
      <NotebookPaperclip
        size="md"
        className="absolute right-5 top-5 rotate-12 opacity-20"
      />

      <div className="flex items-start justify-between gap-6">
        <div>
          <BrandBadge tone={tone} icon="dot">
            {eyebrow}
          </BrandBadge>

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

function WorkflowCard({
  step,
  title,
  body,
  tone,
}: {
  step: string;
  title: string;
  body: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
      <div className="flex items-start justify-between gap-4">
        <BrandBadge tone={tone} icon="dot">
          Stage {step}
        </BrandBadge>

        <span className="font-lab text-3xl font-semibold text-cyan/60">
          {step}
        </span>
      </div>

      <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-muted">{body}</p>
    </article>
  );
}

function TextCard({
  title,
  body,
  tone,
  label = "Design note",
}: {
  title: string;
  body: string;
  tone: BrandBadgeTone;
  label?: string;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookHighlight
        size="lg"
        className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
      />

      <BrandBadge tone={tone} icon="dot">
        {label}
      </BrandBadge>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{body}</p>
    </article>
  );
}

function IterationCard({
  version,
  title,
  body,
  tone,
}: {
  version: string;
  title: string;
  body: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <BrandBadge tone={tone} icon="dot">
        {version}
      </BrandBadge>

      <h3 className="mt-4 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
    </article>
  );
}

function ChartFinderPreview() {
  return (
    <div className="paper-card relative overflow-hidden p-4">
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-night shadow-[0_20px_80px_rgba(0,0,0,0.22)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#101820] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-cyan/70" />
          <span className="h-3 w-3 rounded-full bg-white/25" />
          <span className="h-3 w-3 rounded-full bg-white/15" />

          <span className="ml-2 font-lab text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/55">
            ChartFinder extension
          </span>
        </div>

        <div className="grid gap-4 p-4">
          <div className="rounded-2xl border border-cyan/20 bg-cyan/[0.08] p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-cyan">
                  Current page
                </p>

                <p className="mt-2 font-display text-3xl font-bold leading-none text-white">
                  Support context
                </p>
              </div>

              <CyanSpark size="md" animated />
            </div>

            <div className="mt-4 grid gap-2">
              <div className="h-2 w-4/5 rounded-full bg-white/20" />
              <div className="h-2 w-3/5 rounded-full bg-white/15" />
              <div className="h-2 w-2/3 rounded-full bg-white/15" />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                Output
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Markdown or HTML for support replies.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                Data boundary
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Visible page text, clipboard, local preferences.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200/20 bg-amber-200/[0.08] p-4">
            <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-amber-100">
              Review reminder
            </p>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Double-check copied details before sending.
            </p>
          </div>
        </div>
      </div>

      <p className="relative mt-4 text-sm leading-6 text-muted">
        Public-safe mockup showing the extraction and clipboard pattern.
      </p>
    </div>
  );
}

export default function ChartFinderPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <Link
          href="/work"
          className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
        >
          ← Back to work
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <BrandBadge tone="signal" icon="spark">
                Case study
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Local-first support tool
              </BrandBadge>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan/20 bg-[#101820] p-2 sm:flex">
                <img
                  src="/logos/chartfinder-logo.png"
                  alt="ChartFinder logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
                  Chart<span className="headline-signal">Finder</span>
                </h1>

                <p className="mt-5 lab-label text-muted">
                  Chrome extension for cleaner support context capture
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              A local Chrome extension that copies visible shipment, client, and
              support article context into a clean format for support replies.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              The tool addressed a queue problem: teammates needed clean context
              quickly and a data model they could explain and review.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <BrandBadge tone="quiet" icon="none">
                Chrome extension
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Local first
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                JavaScript
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Clipboard workflow
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Support formatting
              </BrandBadge>
            </div>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl"
            />

            <div className="relative">
              <BrandBadge tone="signal" icon="spark">
                Project snapshot
              </BrandBadge>

              <div className="mt-5 grid gap-3">
                {overviewStats.map((stat) => (
                  <StatCard
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>

              <div className="mt-5 rounded-3xl border border-cyan/15 bg-cyan/[0.045] p-5">
                <p className="lab-label text-cyan">Public-safe note</p>

                <p className="mt-3 text-sm leading-6 text-muted">
                  This case study focuses on workflow design, local data
                  handling, documentation, and adoption patterns without
                  publishing private support data.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div className="paper-card relative overflow-hidden p-6 md:p-8">
            <MarginArrow
              size="lg"
              className="absolute right-7 top-7 rotate-6 opacity-25"
            />

            <BrandBadge tone="signal" icon="spark">
              In brief
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Replace repeated copying with one reviewable action
            </h2>

            <p className="mt-6 leading-8 text-muted">
              ChartFinder reads the context already on screen, formats it for a
              support reply, and keeps the process local and reviewable.
            </p>
          </div>

          <ChartFinderPreview />
        </div>
      </section>

      <section id="screenshots" className="lab-shell pt-20">
        <SectionTitle
          kicker="Screenshot"
          title="See the tool in context"
          description="A public-safe view of ChartFinder copying article context into a clean reference."
          tone="signal"
        />

        <div className="grid gap-5">
          {screenshots.map((screenshot) => (
            <ScreenshotCard
              key={screenshot.title}
              title={screenshot.title}
              description={screenshot.description}
              image={screenshot.image}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Technical shape"
          title="Match the implementation to the data boundary"
          description="The extension reads visible browser content, copies output to the clipboard, and stores preferences locally."
          tone="warning"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {buildDetails.map((detail) => (
            <DetailCard
              key={detail.label}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="grid gap-5">
          {caseStudySections.map((section, index) => (
            <CaseSection
              key={section.title}
              eyebrow={section.eyebrow}
              title={section.title}
              body={section.body}
              index={index}
              tone={section.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Supported contexts"
          title="Support three common copy tasks in one tool"
          description="The extension handles shipment details, client context, and article links on pages teammates already use."
          tone="signal"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {contextTypes.map((item) => (
            <TextCard
              key={item.title}
              title={item.title}
              body={item.body}
              tone={item.tone}
              label="Context type"
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Workflow"
          title="Open, extract, format, and review"
          description="The workflow stays in the browser and avoids another destination."
          tone="verified"
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {workflowStages.map((stage) => (
            <WorkflowCard
              key={stage.step}
              step={stage.step}
              title={stage.title}
              body={stage.body}
              tone={stage.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Data boundary"
          title="Keep the data flow local and visible"
          description="The guide separates visible text, clipboard output, local preferences, and external transmission."
          tone="warning"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {privacyBoundaries.map((boundary) => (
            <TextCard
              key={boundary.title}
              title={boundary.title}
              body={boundary.body}
              tone={boundary.tone}
              label="Boundary"
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Adoption"
          title="Support the tool with clear documentation"
          description="The guide covers setup, use cases, troubleshooting, known issues, compliance notes, feedback, and changes."
          tone="experiment"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {adoptionLayers.map((layer) => (
            <TextCard
              key={layer.title}
              title={layer.title}
              body={layer.body}
              tone={layer.tone}
              label="Adoption layer"
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Iteration"
          title="Use the changelog to show what improved"
          description="Updates improved reliability, support formatting, and preference controls."
          tone="signal"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {iterationNotes.map((item) => (
            <IterationCard
              key={item.version}
              version={item.version}
              title={item.title}
              body={item.body}
              tone={item.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Result"
          title="Automate a support task without hiding the boundary"
          description="The work combines frontline support, browser automation, privacy-aware design, and adoption documentation."
          tone="quiet"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <TextCard
              key={lesson.title}
              title={lesson.title}
              body={lesson.body}
              tone={lesson.tone}
              label="Lesson"
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />

          <CyanSpark
            size="md"
            className="absolute bottom-7 right-8 opacity-60"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            ChartFinder reduced a repeated queue task with a local, reviewable,
            documented browser tool.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Back to work
            </Link>

            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              Talk about systems
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}