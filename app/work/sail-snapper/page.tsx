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
  title: "Sail Snapper case study | AlwaysReady4Moore",
  description:
    "How I documented and supported adoption for Sail Snapper, a CX screenshot capture and annotation tool.",
};

const overviewStats = [
  {
    value: "CX",
    label: "Workflow audience",
  },
  {
    value: "Docs",
    label: "Primary contribution",
  },
  {
    value: "3",
    label: "Partner lanes",
  },
];

const buildDetails = [
  {
    label: "Tool type",
    value: "Screenshot workflow support",
  },
  {
    label: "Primary role",
    value: "Documentation and adoption",
  },
  {
    label: "Partners",
    value: "Development, IT, InfoSec",
  },
  {
    label: "Focus",
    value: "Clearer support handoffs",
  },
];

const screenshots = [
  {
    title: "Sail Snapper in action",
    description:
      "A working view of the Sail Snapper interface for capture, annotation, and handoff.",
    image: "/screenshots/sail-snapper/sail-snapper.png",
  },
];

const caseStudySections = [
  {
    eyebrow: "Problem",
    title: "Support screenshots often become evidence and handoff material",
    body:
      "In CX work, one screenshot may serve as evidence, context, explanation, and handoff. When the image is unclear or missing context, the next person must reconstruct the issue before helping.",
    tone: "signal" as const,
  },
  {
    eyebrow: "Constraint",
    title: "Keep the workflow fast without increasing risk",
    body:
      "The tool had to fit a busy queue and follow privacy, security, and handling rules. Teammates also needed clear guidance on when to use it, how to use it, and what not to capture.",
    tone: "warning" as const,
  },
  {
    eyebrow: "Approach",
    title: "Document the workflow around the tool",
    body:
      "I explained the tool’s purpose, where it fit in the CX workflow, how to use it, and which safety rules applied. The documentation made the process repeatable.",
    tone: "experiment" as const,
  },
  {
    eyebrow: "Outcome",
    title: "The documentation made the workflow easier to repeat",
    body:
      "The documentation connected capture, annotation, sharing, privacy rules, and support handoffs in one workflow.",
    tone: "verified" as const,
  },
];

const workflowStages = [
  {
    step: "01",
    title: "Capture",
    body:
      "Decide what the image must show, which context matters, and what should stay out.",
    tone: "signal" as const,
  },
  {
    step: "02",
    title: "Annotate",
    body:
      "Mark the relevant detail without crowding the image.",
    tone: "verified" as const,
  },
  {
    step: "03",
    title: "Share",
    body:
      "Add enough context for a teammate, technical partner, or workflow owner to act.",
    tone: "experiment" as const,
  },
  {
    step: "04",
    title: "Guide",
    body:
      "Document the steps, limits, and escalation path so others can repeat the workflow.",
    tone: "warning" as const,
  },
];

const supportProblems = [
  {
    title: "Screenshots need context",
    body:
      "A cropped image can remove the context needed to understand it. The guidance tells readers what they are seeing and why it matters.",
    tone: "signal" as const,
  },
  {
    title: "Annotations should reduce effort",
    body:
      "Good markup directs attention to the relevant detail. Too much markup makes the image harder to use.",
    tone: "verified" as const,
  },
  {
    title: "Privacy needs to be part of the workflow",
    body:
      "Support screenshots may contain sensitive information. The guide explains what to capture, hide, avoid, and review before sharing.",
    tone: "warning" as const,
  },
  {
    title: "Adoption is product work",
    body:
      "Setup steps, examples, limits, and escalation paths make the tool usable in daily work.",
    tone: "experiment" as const,
  },
];

const documentationLayers = [
  {
    title: "What the tool is for",
    body:
      "Explain the job clearly: cleaner screenshot capture, annotation, and sharing inside support workflows.",
    tone: "signal" as const,
  },
  {
    title: "When to use it",
    body:
      "Explain when a screenshot helps and when written context is better.",
    tone: "verified" as const,
  },
  {
    title: "How to use it safely",
    body:
      "State the privacy, security, and handling rules before someone shares an image.",
    tone: "warning" as const,
  },
  {
    title: "How to troubleshoot",
    body:
      "Give a next step for common issues before escalation.",
    tone: "experiment" as const,
  },
];

const proofPoints = [
  {
    title: "Support fluency",
    body:
      "The work reflects CX handoffs, evidence needs, teammate context, and queue pressure.",
    tone: "signal" as const,
  },
  {
    title: "Technical translation",
    body:
      "The work translates tool behavior for teammates and cross-functional partners.",
    tone: "verified" as const,
  },
  {
    title: "Security-aware communication",
    body:
      "The project required clear rules for safe handling, internal use, and public examples.",
    tone: "warning" as const,
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
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-night">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full object-cover object-top"
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

function SailSnapperPreview() {
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
            Screenshot workflow
          </span>
        </div>

        <div className="grid gap-4 p-4">
          <div className="relative min-h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-4">
            <div className="absolute left-6 top-6 h-16 w-28 rounded-xl border border-white/10 bg-white/[0.08]" />
            <div className="absolute right-8 top-8 h-20 w-36 rounded-xl border border-cyan/30 bg-cyan/[0.08]" />
            <div className="absolute bottom-8 left-10 h-20 w-48 rounded-xl border border-white/10 bg-white/[0.08]" />

            <div className="absolute right-16 top-24 h-12 w-12 rounded-full border-2 border-cyan" />
            <div className="absolute right-28 top-32 h-1 w-32 rotate-[-18deg] rounded-full bg-cyan" />

            <div className="absolute bottom-10 right-8 rounded-2xl border border-cyan/20 bg-cyan/[0.1] px-4 py-3">
              <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-cyan">
                Annotate the useful part
              </p>
            </div>

            <CyanSpark
              size="md"
              animated
              className="absolute left-10 top-28 opacity-80"
            />
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                Capture
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Show the exact support context.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                Mark up
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Point to the relevant detail.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan/20 bg-cyan/[0.08] p-4">
              <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-cyan">
                Share
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Hand off with less ambiguity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="relative mt-4 text-sm leading-6 text-muted">
        Public-safe mockup based on the workflow pattern.
      </p>
    </div>
  );
}

export default function SailSnapperPage() {
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
                Case Study
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Support workflow documentation
              </BrandBadge>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan/20 bg-[#101820] p-2 sm:flex">
                <img
                  src="/logos/sail-snapper-logo.png"
                  alt="Sail Snapper logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
                  Sail <span className="headline-signal">Snapper</span>
                </h1>

                <p className="mt-5 lab-label text-muted">
                  Screenshot capture, annotation, sharing, and adoption support
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              A CX workflow tool for faster screenshot capture, annotation, and
              sharing during support work.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              I documented the tool, safety rules, and support workflow so
              teammates could use it consistently.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <BrandBadge tone="quiet" icon="none">
                CX operations
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Tool documentation
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Workflow support
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Adoption support
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Security-aware communication
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
                  This page focuses on the workflow and documentation design
                  without exposing private support data.
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
              A small tool still needs clear adoption guidance
            </h2>

            <p className="mt-6 leading-8 text-muted">
              The guide explains what to capture, what to mark, how to share it,
              and how to avoid confusion or risk.
            </p>
          </div>

          <SailSnapperPreview />
        </div>
      </section>

      <section id="screenshots" className="lab-shell pt-20">
        <SectionTitle
          kicker="Screenshot"
          title="See the tool in context"
          description="A public-safe view of the tool surface."
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
          kicker="Public-safe boundary"
          title="A screenshot can explain a problem and expose sensitive details"
          description="This page uses public-safe examples. Internal screenshots require review and redaction before use."
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
          kicker="Workflow"
          title="Capture, annotate, share, and guide"
          description="Each step should reduce ambiguity for the next person."
          tone="signal"
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
          kicker="Support reality"
          title="Address the handoff problems around screenshots"
          description="A clear screenshot can shorten a handoff. A vague one can slow it down."
          tone="verified"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {supportProblems.map((problem) => (
            <TextCard
              key={problem.title}
              title={problem.title}
              body={problem.body}
              tone={problem.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Documentation layer"
          title="Document the tool before asking people to adopt it"
          description="The guide covers purpose, use, limits, privacy, and troubleshooting."
          tone="experiment"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {documentationLayers.map((layer) => (
            <TextCard
              key={layer.title}
              title={layer.title}
              body={layer.body}
              tone={layer.tone}
              label="Documentation layer"
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Result"
          title="Use technical communication to support a workflow"
          description="The project connects CX context, internal tooling, partner needs, and security-aware documentation."
          tone="quiet"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {proofPoints.map((point) => (
            <TextCard
              key={point.title}
              title={point.title}
              body={point.body}
              tone={point.tone}
              label="Proof point"
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
            Small support tools still need clear steps, a safe boundary, and
            guidance people can trust.
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