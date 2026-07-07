import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const overviewStats = [
  {
    value: "774",
    label: "Notion pages governed",
  },
  {
    value: "3,100+",
    label: "Knowledge edits",
  },
  {
    value: "~50",
    label: "HR/IT onboarding issues converted into resources",
  },
];

const systemLayers = [
  {
    title: "Knowledge hub governance",
    description:
      "Organized and maintained a large Notion-based source of truth across HR, IT, PX, and management documentation so answers were easier to find, trust, and reuse.",
  },
  {
    title: "Training and onboarding",
    description:
      "Built Notion adoption materials, onboarding guidance, and new teammate resources that made the intranet feel less like a tool rollout and more like a usable home base.",
  },
  {
    title: "Support documentation",
    description:
      "Created SOPs, guides, scripts, macros, and plain-language resources for recurring support, technical, and operational questions.",
  },
  {
    title: "Internal communications",
    description:
      "Drafted and shaped internal messaging, leadership-requested communications, style guidance, event comms, and cross-functional updates.",
  },
];

const caseStudySections = [
  {
    eyebrow: "Problem",
    title: "The information existed, but too much of it was scattered, fragile, or hard to use.",
    body:
      "Fast-moving teams build knowledge constantly. The problem is that knowledge does not automatically become usable just because it was written down. Answers can live in old docs, Slack memories, teammate habits, outdated Guru cards, training materials, or someone’s head. My work focused on turning that scattered operational knowledge into clearer systems people could actually depend on.",
  },
  {
    eyebrow: "Constraint",
    title: "The system had to serve real people during real work.",
    body:
      "This could not be a beautiful archive that nobody touched. It had to support teammates who were onboarding, answering customers, troubleshooting tools, following policies, preparing for meetings, or trying to figure out where a thing lived. That meant the structure had to care about findability, scanning, tone, ownership, and the everyday human reality of being busy.",
  },
  {
    eyebrow: "Approach",
    title: "I treated knowledge work as operations design, not just documentation cleanup.",
    body:
      "The work included organizing Notion pages, rewriting dense materials, auditing outdated guidance, creating training resources, helping with HR and IT questions, documenting repeated issues, and turning fuzzy problems into clearer next steps. The pattern was always the same: find the friction, understand why people were getting stuck, then make the path easier to follow.",
  },
  {
    eyebrow: "Outcome",
    title: "The result was a knowledge ecosystem, not one isolated project.",
    body:
      "Across the rotation and broader support work, this became a connected body of systems: governed Notion documentation, onboarding materials, SOPs, training modules, internal comms, macros, team guides, and tool documentation. It helped turn messy recurring questions into reusable resources and made the organization’s knowledge easier to navigate.",
  },
];

const artifactGroups = [
  {
    title: "Knowledge Dock",
    label: "Source of truth",
    description:
      "The central knowledge-home concept: a place where teammates could find policies, workflows, resources, and operational context without hunting through old channels.",
  },
  {
    title: "Introduction to Notion Lessonly",
    label: "Training module",
    description:
      "A full learning module and workbook designed to make Notion adoption approachable, practical, and less intimidating for teammates.",
  },
  {
    title: "IT SOPs",
    label: "Technical documentation",
    description:
      "Crew-facing tech guides and standard operating procedures for common support scenarios, access requests, troubleshooting, and device workflows.",
  },
  {
    title: "Go Links Proposal",
    label: "Information access",
    description:
      "A proposal connecting findability, search behavior, internal navigation, analytics, and the business case for faster access to knowledge.",
  },
  {
    title: "PX Communications Style Guide",
    label: "Voice system",
    description:
      "A tone and communication reference for making internal messages clearer, more consistent, and more recognizably human.",
  },
  {
    title: "New Cadet Welcome",
    label: "Onboarding",
    description:
      "Welcome material created to help new teammates understand where they were, what mattered, and how to get oriented without feeling lost.",
  },
  {
    title: "Active Leadership Guide",
    label: "Enablement",
    description:
      "Guidance material for team leads and managers navigating expectations, communication, and active team support.",
  },
  {
    title: "Talk Like a Pirate Week",
    label: "Culture operations",
    description:
      "A branded employee-engagement initiative involving planning, stakeholder coordination, Slack communications, taskforce management, and execution.",
  },
];

const buildNotes = [
  "Governed a 774-page Notion knowledge hub with 3,100+ edits.",
  "Consolidated HR, IT, PX, and management documentation into a more scalable source of truth.",
  "Built Notion training materials and an interactive workbook to support adoption.",
  "Converted recurring HR/IT onboarding and technical issues into clearer plain-language resources.",
  "Created internal guides, scripts, SOPs, macros, and communications that made dense topics easier to scan and apply.",
  "Documented support tools and worked with development, IT, and Information Security partners to expand CX resources.",
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

function LayerCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="paper-card p-6">
      <p className="lab-label text-cyan">System layer</p>
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

function ArtifactCard({
  title,
  label,
  description,
}: {
  title: string;
  label: string;
  description: string;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <p className="lab-label text-cyan">{label}</p>
      <h3 className="mt-4 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}

export default function PirateShipKnowledgeSystemsPage() {
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
              Pirate Ship Knowledge Systems
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              A large-scale knowledge and enablement ecosystem spanning Notion
              governance, onboarding, SOPs, internal communications, training,
              cross-functional support, and reusable resources.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="soft-chip">Knowledge management</span>
              <span className="soft-chip">Notion governance</span>
              <span className="soft-chip">Internal enablement</span>
              <span className="soft-chip">SOPs</span>
              <span className="soft-chip">Training design</span>
              <span className="soft-chip">Internal communications</span>
            </div>
          </div>

          <aside className="paper-card p-6">
            <p className="lab-label text-cyan">Project signal</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              The work was bigger than one doc.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              This case study treats the knowledge work as a connected system:
              source-of-truth design, training, operations support, internal
              communication, and the quiet maintenance that keeps useful
              information from going stale.
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
            <p className="lab-label text-cyan">Public-safe note</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              The shape is public. The sensitive details stay private.
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              The artifacts behind this case study include internal
              documentation, onboarding resources, SOPs, proposals, training
              materials, and communications. The page focuses on the system
              design and work patterns without exposing private operational
              details.
            </p>

            <p className="leading-8">
              Screenshots and selected artifacts can be added later after they
              are reviewed, sanitized, and made safe for public display.
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
          <p className="lab-label text-muted">System architecture</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            Four layers of the work.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {systemLayers.map((layer) => (
            <LayerCard
              key={layer.title}
              title={layer.title}
              description={layer.description}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="lab-label text-cyan">Build notes</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              The system got stronger every time a repeated question became a
              reusable answer.
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
        <div className="mb-8">
          <p className="lab-label text-muted">Artifact map</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            The receipts behind the system.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {artifactGroups.map((artifact) => (
            <ArtifactCard
              key={artifact.title}
              title={artifact.title}
              label={artifact.label}
              description={artifact.description}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note p-7 md:p-9">
          <p className="field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Good knowledge systems store answers and make the next
            right answer easier to find, trust, and use.
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