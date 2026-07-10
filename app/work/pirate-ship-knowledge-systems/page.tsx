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
  title: "Knowledge Systems Case Study | AlwaysReady4Moore",
  description:
    "A public-safe case study for knowledge systems work spanning knowledge hub governance, onboarding, SOPs, internal communications, training design, and cross-functional enablement.",
};

const overviewStats = [
  {
    value: "774",
    label: "Knowledge pages governed",
  },
  {
    value: "3,100+",
    label: "Knowledge edits",
  },
  {
    value: "~50",
    label: "Recurring issues converted into resources",
  },
];

const buildDetails = [
  {
    label: "Primary system",
    value: "Internal knowledge hub",
  },
  {
    label: "Training layer",
    value: "Learning module + workbook",
  },
  {
    label: "Audience",
    value: "Employee experience, IT, support, managers",
  },
  {
    label: "Core skill",
    value: "Findability",
  },
];

const systemLayers = [
  {
    title: "Knowledge hub governance",
    description:
      "Organized and maintained a large internal source of truth across employee experience, IT, support, and management documentation so answers were easier to find, trust, and reuse.",
    tone: "signal" as const,
  },
  {
    title: "Training and onboarding",
    description:
      "Built adoption materials, onboarding guidance, and new teammate resources that made the knowledge hub feel less like a tool rollout and more like a usable home base.",
    tone: "verified" as const,
  },
  {
    title: "Support documentation",
    description:
      "Created SOPs, guides, scripts, macros, and plain-language resources for recurring support, technical, customer-facing, and operational questions.",
    tone: "experiment" as const,
  },
  {
    title: "Internal communications",
    description:
      "Drafted and shaped internal messaging, leadership-requested communications, style guidance, event comms, and cross-functional updates.",
    tone: "warning" as const,
  },
];

const caseStudySections = [
  {
    eyebrow: "Problem",
    title:
      "The information existed, but too much of it was scattered, fragile, or hard to use.",
    body:
      "Fast-moving teams create knowledge constantly. The challenge is turning that knowledge into something people can actually use. Answers can live in old docs, chat memories, teammate habits, outdated cards, training materials, or someone’s head. My work focused on turning scattered operational knowledge into clearer systems people could depend on.",
    tone: "signal" as const,
  },
  {
    eyebrow: "Constraint",
    title: "The system had to serve real people during real work.",
    body:
      "A knowledge hub cannot succeed as a pretty archive that everyone forgets to open. It had to support teammates who were onboarding, answering customers, troubleshooting tools, following policies, preparing for meetings, or trying to figure out where a thing lived. That meant the structure had to care about findability, scanning, tone, ownership, and the everyday reality of being busy.",
    tone: "warning" as const,
  },
  {
    eyebrow: "Approach",
    title: "I treated knowledge work as operations design.",
    body:
      "The work included organizing knowledge pages, rewriting dense materials, auditing outdated guidance, creating training resources, helping with employee experience and technical questions, documenting repeated issues, and turning fuzzy problems into clearer next steps. The pattern stayed consistent: find the friction, understand why people were getting stuck, then make the path easier to follow.",
    tone: "experiment" as const,
  },
  {
    eyebrow: "Outcome",
    title: "The result was a connected knowledge ecosystem.",
    body:
      "Across the work, this became a connected body of systems: governed documentation, onboarding materials, SOPs, training modules, internal comms, macros, team guides, proposals, and tool documentation. It helped turn messy recurring questions into reusable resources and made organizational knowledge easier to navigate.",
    tone: "verified" as const,
  },
];

const artifactGroups = [
  {
    title: "Internal Knowledge Hub",
    label: "Source of truth",
    description:
      "The central knowledge-home concept: a place where teammates could find policies, workflows, resources, and operational context without hunting through old channels.",
    tone: "signal" as const,
  },
  {
    title: "Knowledge Hub Training",
    label: "Training module",
    description:
      "A full learning module, workbook, and onboarding video designed to make adoption approachable, practical, and less intimidating for teammates.",
    tone: "verified" as const,
  },
  {
    title: "Technical SOPs",
    label: "Technical documentation",
    description:
      "Teammate-facing tech guides and standard operating procedures for common support scenarios, access requests, troubleshooting, and device workflows.",
    tone: "experiment" as const,
  },
  {
    title: "Internal Link Proposal",
    label: "Information access",
    description:
      "A proposal connecting findability, search behavior, internal navigation, analytics, and the business case for faster access to knowledge.",
    tone: "signal" as const,
  },
  {
    title: "Communications Style Guide",
    label: "Voice system",
    description:
      "A tone and communication reference for making internal messages clearer, more consistent, and more recognizably human.",
    tone: "warning" as const,
  },
  {
    title: "New Hire Welcome",
    label: "Onboarding",
    description:
      "Welcome material created to help new teammates understand where they were, what mattered, and how to get oriented without feeling lost.",
    tone: "verified" as const,
  },
  {
    title: "Active Leadership Guide",
    label: "Enablement",
    description:
      "Guidance material for team leads and managers navigating expectations, communication, and active team support.",
    tone: "experiment" as const,
  },
  {
    title: "Culture Operations",
    label: "Employee engagement",
    description:
      "A branded employee-engagement initiative involving planning, stakeholder coordination, internal communications, taskforce management, and execution.",
    tone: "quiet" as const,
  },
];

const workflowStages = [
  {
    step: "01",
    title: "Gather the scattered pieces",
    body:
      "Identify where answers actually lived: knowledge pages, chat threads, teammate habits, legacy docs, training material, support patterns, recurring tickets, and stakeholder requests.",
    tone: "signal" as const,
  },
  {
    step: "02",
    title: "Design the home",
    body:
      "Create clearer navigation, page structure, naming conventions, templates, and documentation patterns so information could be found again later.",
    tone: "verified" as const,
  },
  {
    step: "03",
    title: "Teach the system",
    body:
      "Build training, onboarding, workbooks, examples, and plain-language explanations so teammates understood how to use the knowledge hub.",
    tone: "experiment" as const,
  },
  {
    step: "04",
    title: "Keep it alive",
    body:
      "Maintain the system through edits, audits, ownership habits, cross-functional updates, repeated-question capture, and resource conversion.",
    tone: "warning" as const,
  },
];

const buildNotes = [
  "Governed a 774-page internal knowledge hub with 3,100+ edits.",
  "Consolidated employee experience, IT, support, and management documentation into a more scalable source of truth.",
  "Built training materials, an interactive workbook, and an onboarding video to support adoption.",
  "Created documentation frameworks, navigation standards, page templates, naming conventions, and sustainability guidelines.",
  "Converted recurring onboarding and technical issues into clearer plain-language resources.",
  "Created internal guides, scripts, SOPs, macros, infographics, and communications that made dense topics easier to scan and apply.",
  "Partnered with employee experience, IT, development, information security, support, leadership, and operations stakeholders.",
];

const proofPoints = [
  {
    title: "Scale",
    body:
      "This was a large, governed knowledge environment with hundreds of pages and thousands of edits.",
    tone: "signal" as const,
  },
  {
    title: "Adoption",
    body:
      "The work included training materials, onboarding support, and practical examples so teammates could actually use the system.",
    tone: "verified" as const,
  },
  {
    title: "Maintenance",
    body:
      "The project included frameworks and sustainability habits, because knowledge systems fail when nobody knows how to keep them current.",
    tone: "warning" as const,
  },
  {
    title: "Translation",
    body:
      "A major part of the work was turning complex operational, policy, and technical context into language people could act on.",
    tone: "experiment" as const,
  },
];

const designPrinciples = [
  {
    title: "A source of truth has to be usable.",
    body:
      "Centralized information only helps when people can find, scan, trust, and apply what they discover.",
    tone: "signal" as const,
  },
  {
    title: "Training is part of the system.",
    body:
      "A new knowledge hub is also a behavior change. People need examples, practice, orientation, and a reason to come back.",
    tone: "verified" as const,
  },
  {
    title: "Maintenance is design.",
    body:
      "Governance is the set of habits, standards, and ownership signals that keep knowledge from decaying.",
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

function LayerCard({
  title,
  description,
  tone,
}: {
  title: string;
  description: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookHighlight
        size="lg"
        className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
      />

      <BrandBadge tone={tone} icon="dot">
        System layer
      </BrandBadge>

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

function ArtifactCard({
  title,
  label,
  description,
  tone,
}: {
  title: string;
  label: string;
  description: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <BrandBadge tone={tone} icon="dot">
        {label}
      </BrandBadge>

      <h3 className="mt-4 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
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

function ProofCard({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <BrandBadge tone={tone} icon="spark">
        Proof point
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

function KnowledgeSystemPreview() {
  const pages = [
    "People",
    "IT Support",
    "Resources",
    "Support Guides",
    "Manager Tools",
  ];

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
            Internal knowledge hub
          </span>
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-[0.6fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
            <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-cyan">
              Navigation
            </p>

            <div className="mt-4 grid gap-2">
              {pages.map((page, index) => (
                <div
                  className={`rounded-xl border px-3 py-2 font-lab text-[0.62rem] font-semibold uppercase tracking-[0.08em] ${
                    index === 0
                      ? "border-cyan/30 bg-cyan/[0.12] text-cyan"
                      : "border-white/10 bg-white/[0.04] text-white/45"
                  }`}
                  key={page}
                >
                  {page}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-cyan/20 bg-cyan/[0.08] p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-cyan">
                    Source of truth
                  </p>

                  <p className="mt-2 font-display text-3xl font-bold leading-none text-white">
                    Find the answer faster
                  </p>
                </div>

                <CyanSpark size="md" animated />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                  Templates
                </p>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Repeatable page patterns for durable documentation.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/45">
                  Training
                </p>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Lessons, examples, and workbook-style practice.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200/20 bg-amber-200/[0.08] p-4">
              <p className="font-lab text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-amber-100">
                Maintenance note
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                A knowledge hub only works if ownership, updates, and naming
                habits survive the launch.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="relative mt-4 text-sm leading-6 text-muted">
        Public-safe system mockup. It shows the structure and information
        architecture pattern without publishing internal pages or private
        operational details.
      </p>
    </div>
  );
}

export default function PirateShipKnowledgeSystemsPage() {
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
                Knowledge ecosystem
              </BrandBadge>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan/20 bg-[#101820] p-2 sm:flex">
                <img
                  src="/logos/knowledge-systems-logo.png"
                  alt="Knowledge Systems logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
                  Knowledge Systems
                </h1>

                <p className="mt-5 lab-label text-muted">
                  Knowledge hub governance, onboarding, SOPs, and internal
                  enablement
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              A large-scale knowledge and enablement ecosystem spanning
              governance, onboarding, SOPs, internal communications, training,
              cross-functional support, and reusable resources.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              The work treated knowledge as operating infrastructure: a system
              for turning repeated questions into reusable answers people could
              find, trust, and maintain.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <BrandBadge tone="quiet" icon="none">
                Knowledge Management
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Knowledge Governance
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Internal Enablement
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                SOPs
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Training Design
              </BrandBadge>

              <BrandBadge tone="quiet" icon="none">
                Internal Comms
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
                <p className="lab-label text-cyan">Project signal</p>

                <p className="mt-3 text-sm leading-6 text-muted">
                  This case study treats knowledge work as a connected system:
                  source-of-truth design, training, operations support,
                  communication, and maintenance.
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
              The short version
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              A source of truth only works if people can actually use it.
            </h2>

            <p className="mt-6 leading-8 text-muted">
              The work connected documentation governance, onboarding,
              cross-functional support, training design, and internal
              communication into one broader knowledge system.
            </p>
          </div>

          <KnowledgeSystemPreview />
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Public-safe note"
          title="The shape is public. The sensitive details stay private."
          description="The artifacts behind this case study include internal documentation, onboarding resources, SOPs, proposals, training materials, and communications. This page focuses on system design and work patterns without exposing private operational details."
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
          kicker="System architecture"
          title="Four layers of the work."
          description="The knowledge system was strongest because it included governance, training, support documentation, and internal communication."
          tone="signal"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {systemLayers.map((layer) => (
            <LayerCard
              key={layer.title}
              title={layer.title}
              description={layer.description}
              tone={layer.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Workflow"
          title="How scattered knowledge became a usable system."
          description="The work followed the same pattern over and over: find the friction, structure the answer, teach people how to use it, and keep the system alive."
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
          kicker="Build notes"
          title="The system got stronger every time a repeated question became a reusable answer."
          description="The receipts are the patterns: consolidation, training, naming, templates, plain-language translation, and cross-functional follow-through."
          tone="experiment"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {buildNotes.map((note) => (
            <div
              className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
              key={note}
            >
              <p className="grid grid-cols-[auto_1fr] gap-3 text-muted">
                <span className="font-lab text-cyan">✓</span>
                <span className="leading-7">{note}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Artifact map"
          title="The receipts behind the system."
          description="These are the public-safe artifact categories that show how broad the work became: source-of-truth design, onboarding, SOPs, proposals, voice systems, leadership enablement, and culture operations."
          tone="quiet"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {artifactGroups.map((artifact) => (
            <ArtifactCard
              key={artifact.title}
              title={artifact.title}
              label={artifact.label}
              description={artifact.description}
              tone={artifact.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="What this shows"
          title="Knowledge work as systems design."
          description="The system made information easier to find, trust, teach, maintain, and reuse."
          tone="signal"
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <ProofCard
              key={point.title}
              title={point.title}
              body={point.body}
              tone={point.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Principles"
          title="The rules underneath the work."
          description="This is the through-line that connects the knowledge hub, SOPs, onboarding, internal comms, and enablement artifacts."
          tone="verified"
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
            Good knowledge systems make the next right answer easier to find,
            trust, and use.
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