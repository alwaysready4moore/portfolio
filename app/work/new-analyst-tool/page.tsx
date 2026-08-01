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
  title: "New Analyst Toolbox case study | AlwaysReady4Moore",
  description:
    "How I built and maintained a Chrome extension that placed analyst guidance, investigation tools, and queue references inside the browser workflow.",
};

const overviewStats = [
  {
    value: "8",
    label: "workflow sections",
  },
  {
    value: "30+",
    label: "versioned releases",
  },
  {
    value: "40+",
    label: "assistive signals",
  },
  {
    value: "2.98",
    label: "latest documented version",
  },
];

const proofStrip = [
  {
    label: "My contribution",
    value:
      "Product concept, workflow research, extension architecture, UI structure, implementation, signal logic, documentation, testing, iteration, and release maintenance",
  },
  {
    label: "Existing context",
    value:
      "Internal analyst workflow, official SOPs, queue definitions, escalation paths, and existing security guidance",
  },
  {
    label: "Audience",
    value:
      "New and developing analysts who needed faster access to guidance, context, and repeatable workflow support",
  },
  {
    label: "Shipped state",
    value:
      "A working browser extension with eight sections, more than 30 releases, persistent settings, and backup and restore",
  },
];

const buildDetails = [
  {
    label: "Format",
    value: "Chrome extension",
  },
  {
    label: "Surface",
    value: "Floating workflow widget",
  },
  {
    label: "Architecture",
    value: "Content script + service worker",
  },
  {
    label: "Storage",
    value: "Browser-local persistence",
  },
];

const toolTabs = [
  {
    tab: "Counter",
    description:
      "Tracks labeled messages per shift with daily and weekly goals, live pace calculations, countdown timing, alarms, and celebrations.",
    tone: "signal" as const,
  },
  {
    tab: "Intel",
    description:
      "Extracts threat indicators from the current page and supports one-click lookups, urlscan preview, domain profiles, and authentication context.",
    tone: "verified" as const,
  },
  {
    tab: "Guide",
    description:
      "Brings interactive labeling guidance into the workflow, including quick triage and deeper investigation walkthroughs.",
    tone: "experiment" as const,
  },
  {
    tab: "Tracker",
    description:
      "Lets analysts log case URLs, labels, and notes during a shift, with exportable case-tracking output.",
    tone: "quiet" as const,
  },
  {
    tab: "Queues",
    description:
      "Provides quick-reference cards for queue types, including SLA context, KPI expectations, labeling rules, and common gotchas.",
    tone: "signal" as const,
  },
  {
    tab: "Labels",
    description:
      "Guides analysts through confirmation flows for suspected labels with definitions, tells, examples, and result cards.",
    tone: "verified" as const,
  },
  {
    tab: "Assist",
    description:
      "Adds educational AI-assisted label suggestions using 40+ signals, domain age, queue context, field extraction, request patterns, lookalike logic, and spoof indicators.",
    tone: "warning" as const,
  },
  {
    tab: "About",
    description:
      "Houses guide links, feedback pathways, backup and restore controls, and context for maintaining the tool.",
    tone: "quiet" as const,
  },
];

const caseStudySections = [
  {
    eyebrow: "Problem",
    title: "Analysts needed guidance closer to the decision",
    body:
      "Analysts already had documentation, but it lived outside the active workflow. I identified the references, helpers, and decision support that would be more useful on the page where analysts worked.",
    tone: "signal" as const,
  },
  {
    eyebrow: "Constraint",
    title: "Reduce context switching without taking control",
    body:
      "The extension had to open quickly, stay lightweight, preserve analyst control, and update cleanly. Official SOPs remained authoritative; the toolbox made them easier to reach during live work.",
    tone: "warning" as const,
  },
  {
    eyebrow: "Approach",
    title: "Maintain the extension as a working product",
    body:
      "I released updates as workflows, browser limits, and analyst needs changed. The changelog records bug fixes, edge cases, UI changes, safer handling, and new support features.",
    tone: "experiment" as const,
  },
  {
    eyebrow: "Outcome",
    title: "The final surface combined tools, references, and training",
    body:
      "The floating Chrome extension included eight sections for workflow support, threat-intelligence extraction, queue references, label confirmation, case tracking, progress, and educational AI-assisted signals.",
    tone: "verified" as const,
  },
];

const workflowStages = [
  {
    step: "01",
    title: "Surface",
    body:
      "Place guidance in the browser so analysts do not have to search separate resources.",
    tone: "signal" as const,
  },
  {
    step: "02",
    title: "Structure",
    body:
      "Organize repeated analyst needs into clear tabs: counter, intel, guide, tracker, queues, labels, assist, and about.",
    tone: "verified" as const,
  },
  {
    step: "03",
    title: "Support",
    body:
      "Add guided flows, reference cards, indicator extraction, case notes, and visible evidence.",
    tone: "experiment" as const,
  },
  {
    step: "04",
    title: "Refine",
    body:
      "Release updates for safer links, in-place translation, UI changes, signal logic, and backup and restore.",
    tone: "warning" as const,
  },
];

const architectureSteps = [
  {
    step: "01",
    title: "Page context",
    body:
      "The content script reads the visible page and identifies supported fields, links, indicators, and interface regions.",
  },
  {
    step: "02",
    title: "Extraction and rules",
    body:
      "The toolbox parses page context into signals, lookup inputs, progress data, and decision support.",
  },
  {
    step: "03",
    title: "Background services",
    body:
      "The service worker handles protected routing and requests blocked by page security rules.",
  },
  {
    step: "04",
    title: "Local state",
    body:
      "The browser stores preferences, counters, layout settings, notes, and backups across shifts.",
  },
  {
    step: "05",
    title: "Human review",
    body:
      "Analysts review the evidence, check official guidance, and make the final decision.",
  },
];

const iterationHighlights = [
  {
    version: "v2.98",
    title: "New UI awareness",
    body:
      "Updated Assist for new structured fields, relationship context, request patterns, lookalike domains, spoof headers, tab order, and backup and restore.",
    tone: "signal" as const,
  },
  {
    version: "v2.97",
    title: "Investigation playbook integration",
    body:
      "Added investigation guidance for sender identity, mismatches, attachments, links, and escalation.",
    tone: "verified" as const,
  },
  {
    version: "v2.92",
    title: "Signal expansion",
    body:
      "Expanded Assist to more than 40 signals across Attack, Spam, Gray, and Safe categories and showed the evidence for each signal.",
    tone: "experiment" as const,
  },
  {
    version: "v2.58",
    title: "CSP-safe translation",
    body:
      "Replaced blocked script injection with text-node translation through the background service worker.",
    tone: "warning" as const,
  },
  {
    version: "v2.57",
    title: "Safe document opening",
    body:
      "Added protected document routing and a user-controlled header option.",
    tone: "signal" as const,
  },
  {
    version: "v2.42",
    title: "Intel extraction",
    body:
      "Added an Intel tab for page indicators, one-click lookups, authentication context, and red flags.",
    tone: "verified" as const,
  },
];

const designPrinciples = [
  {
    title: "Guidance belongs near the decision",
    body:
      "The tool places references, label logic, and workflow helpers near the decision.",
    tone: "signal" as const,
  },
  {
    title: "Assistive tools need clear authority lines",
    body:
      "The AI-assisted layer shows evidence and supports learning. SOPs, escalation paths, and analyst review remain authoritative.",
    tone: "warning" as const,
  },
  {
    title: "Iteration is part of the product",
    body:
      "The changelog records bug fixes, workflow changes, safer handling, UI updates, and clearer evidence.",
    tone: "experiment" as const,
  },
];

const buildNotes = [
  "Designed as a floating Chrome extension so analysts could use it inside the browser workflow.",
  "Organized into eight sections so different support needs had clear homes.",
  "Included embedded guidance to keep learning connected to the work.",
  "Added threat-intelligence extraction, preview paths, domain profiles, authentication context, and quick lookup routes.",
  "Handled practical workflow needs such as draggable placement, resizing, opacity, tab reordering, sticky settings, and backup and restore.",
  "Framed AI assistance as educational signal support with analyst review at the center.",
  "Released through more than 30 versions, showing ongoing iteration, maintenance, and refinement.",
];

const riskBoundaries = [
  {
    title: "No autonomous labeling",
    body:
      "The tool can surface signals and educational suggestions, but it does not make the final security decision.",
  },
  {
    title: "Official guidance remains authoritative",
    body:
      "Internal SOPs, queue rules, and escalation paths remain the source of truth.",
  },
  {
    title: "Evidence is visible",
    body:
      "Assistive conclusions are paired with fired signals and context so analysts can inspect why a suggestion appeared.",
  },
  {
    title: "Public proof is reconstructed",
    body:
      "This case study uses generalized UI and fictionalized data rather than exposing internal screenshots or sensitive case details.",
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

function ProofStripCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <BrandBadge tone="quiet" icon="none">
        {label}
      </BrandBadge>

      <p className="mt-4 leading-7 text-ink">{value}</p>
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
      <NotebookHighlight
        size="lg"
        className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
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

        <span
          aria-hidden="true"
          className="hidden font-lab text-4xl font-semibold text-cyan/50 sm:block"
        >
          0{index + 1}
        </span>
      </div>

      <p className="mt-6 max-w-4xl leading-8 text-muted">{body}</p>
    </article>
  );
}

function TabCard({
  tab,
  description,
  tone,
}: {
  tab: string;
  description: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookPaperclip
        size="md"
        className="absolute right-5 top-5 rotate-12 opacity-20"
      />

      <BrandBadge tone={tone} icon="dot">
        Tool section
      </BrandBadge>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {tab}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>
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

        <span
          aria-hidden="true"
          className="font-lab text-3xl font-semibold text-cyan/60"
        >
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

function PrincipleCard({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card p-6">
      <BrandBadge tone={tone} icon="spark">
        Principle
      </BrandBadge>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{body}</p>
    </article>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="paper-card overflow-hidden">
      <div className="border-b border-[var(--border)] p-6 md:p-8">
        <BrandBadge tone="signal" icon="spark">
          Technical architecture
        </BrandBadge>

        <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
          A browser-native support layer with human review at the end
        </h2>
      </div>

      <ol className="grid gap-4 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-5">
        {architectureSteps.map((step, index) => (
          <li
            key={step.title}
            className="relative rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <BrandBadge tone="quiet" icon="none">
                {step.step}
              </BrandBadge>

              {index < architectureSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden text-xl text-cyan/50 lg:block"
                >
                  →
                </span>
              ) : null}
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
              {step.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ExtensionPreview() {
  const previewTabs = ["Counter", "Intel", "Guide", "Tracker", "Assist"];

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
            Reconstructed analyst toolbox
          </span>
        </div>

        <div className="flex gap-1 overflow-hidden border-b border-white/10 bg-[#111827] px-3 pt-3">
          {previewTabs.map((tab, index) => (
            <span
              key={tab}
              className={`rounded-t-xl px-3 py-2 font-lab text-[0.62rem] font-semibold uppercase tracking-[0.08em] ${
                index === 0
                  ? "bg-cyan text-night"
                  : "bg-white/[0.06] text-white/45"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="grid gap-4 p-4">
          <div className="rounded-2xl border border-cyan/20 bg-cyan/[0.08] p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-cyan">
                  Daily pace
                </p>

                <p className="mt-2 font-display text-3xl font-bold leading-none text-white">
                  35 / 50
                </p>
              </div>

              <CyanSpark size="md" animated />
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[70%] rounded-full bg-cyan" />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                Intel signals
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Domains, URLs, authentication context, and preview paths.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                Label support
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Guided questions, definitions, tells, and examples.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200/20 bg-amber-200/[0.08] p-4">
            <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-amber-100">
              Assist boundary
            </p>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Educational signal support with visible evidence and analyst
              review.
            </p>
          </div>
        </div>
      </div>

      <p className="relative mt-4 text-sm leading-6 text-muted">
        Public-safe mockup based on the real tool structure. It shows the
        system pattern without exposing internal screenshots or private case
        details.
      </p>
    </div>
  );
}

export default function NewAnalystToolPage() {
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
                Internal tool case study
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Public-safe presentation
              </BrandBadge>
            </div>
<h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              New Analyst <span className="headline-signal">Toolbox</span>
            </h1>

            <p className="mt-5 lab-label text-muted">
              Chrome extension · embedded learning · analyst workflow support
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              A floating browser tool for analyst guidance, threat-intelligence
              extraction, queue references, label confirmation, case tracking,
              pace support, and educational AI-assisted signals.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              Official documentation and analyst judgment remained central. The
              toolbox reduced context switching and placed the right reference
              or helper closer to the work.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <BrandBadge tone="quiet" icon="none">
                Chrome extension
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Knowledge systems
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Workflow design
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Analyst enablement
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                AI-assisted support
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
                Project scale
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
                <p className="lab-label text-cyan">Shipped and maintained</p>

                <p className="mt-3 text-sm leading-6 text-muted">
                  The release history records platform fixes, workflow changes, safer
                  handling, customization, and maintenance after launch.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Project proof strip"
          title="State the contribution and the authority boundary"
          description="The page separates my contribution from official guidance and analyst judgment."
          tone="signal"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {proofStrip.map((item) => (
            <ProofStripCard
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
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
              Keep the analyst workbench on the page
            </h2>

            <p className="mt-6 leading-8 text-muted">
              The floating surface combines pace tracking, investigation helpers,
              decision guidance, queue references, label confirmation, case
              notes, and educational signal review.
            </p>
          </div>

          <ExtensionPreview />
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="System boundary"
          title="Make the source of truth easier to reach"
          description="The toolbox links analysts to trusted resources inside the workflow. It does not replace them."
          tone="warning"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {riskBoundaries.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
            >
              <BrandBadge tone="warning" icon="dot">
                Boundary
              </BrandBadge>

              <h3 className="mt-4 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">{item.body}</p>
            </article>
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
        <ArchitectureDiagram />
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="What the tool supported"
          title="Organize eight needs in one analyst surface"
          description="Each tab handles a specific task: tracking work, finding indicators, checking guidance, logging cases, reviewing queues, confirming labels, or reviewing edge cases."
          tone="signal"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {toolTabs.map((tab) => (
            <TabCard
              key={tab.tab}
              tab={tab.tab}
              description={tab.description}
              tone={tab.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Product workflow"
          title="Use four steps to build inside the workflow"
          description="The tool needed a usable surface, clear structure, embedded support, and regular releases."
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
          kicker="Build details"
          title="Match the technical design to the job"
          description="A browser extension kept the tool inside the analyst’s existing workflow."
          tone="experiment"
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

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {buildNotes.map((note) => (
            <div
              className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
              key={note}
            >
              <p className="grid grid-cols-[auto_1fr] gap-3 text-muted">
                <span aria-hidden="true" className="font-lab text-cyan">
                  ✓
                </span>
                <span className="leading-7">{note}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Iteration"
          title="Use the changelog as evidence of maintenance"
          description="The releases address safer links, CSP limits, UI changes, signal expansion, case evidence, and customization."
          tone="signal"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {iterationHighlights.map((item) => (
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
          title="Use internal tools to deliver knowledge in context"
          description="The tool combines documentation, analyst judgment, embedded training, security workflow support, and ongoing maintenance."
          tone="quiet"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {designPrinciples.map((principle) => (
            <PrincipleCard
              key={principle.title}
              title={principle.title}
              body={principle.body}
              tone={principle.tone}
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
            Useful internal tools make the right action easier to find during
            the work.
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
