import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const featuredCaseStudies = [
  {
    title: "Aegis",
    label: "AI product build",
    status: "Full case study",
    description:
      "An AI-assisted creative intelligence pipeline that turns competitor landing pages into ad concepts, risk review, and safer rewrite suggestions.",
    tags: ["AI workflow", "Next.js", "Gemini", "Risk review"],
    href: "/work/aegis",
    linkLabel: "Read full case study",
  },
  {
    title: "New Analyst Tool",
    label: "Internal workflow tool",
    status: "Full case study",
    description:
      "An anonymized internal analyst workflow tool built at Abnormal to bring reference guidance, embedded learning, and repeated workflow support closer to daily analysis work.",
    tags: ["Internal tooling", "Analyst support", "Workflow design", "Documentation"],
    href: "/work/new-analyst-tool",
    linkLabel: "Read full case study",
  },
  {
    title: "Sail Snapper",
    label: "Support workflow tool",
    status: "Case study coming soon",
    description:
      "A CX support tool for capturing, annotating, and sharing screenshots more cleanly inside fast-moving support workflows.",
    tags: ["CX operations", "Tool documentation", "Workflow support", "Iteration"],
    href: "#",
    linkLabel: "Coming soon",
  },
  {
    title: "ChartFinder",
    label: "Chrome extension",
    status: "Case study coming soon",
    description:
      "A browser-extension workflow tool designed to reduce repetitive lookup and copy/paste work in support contexts.",
    tags: ["Chrome extension", "Support automation", "Workflow design", "Changelog"],
    href: "#",
    linkLabel: "Coming soon",
  },
  {
    title: "Pirate Ship Knowledge Systems",
    label: "Knowledge ecosystem",
    status: "Full case study",
    description:
      "A large-scale knowledge and enablement system spanning Notion governance, onboarding, SOPs, internal communications, training, and cross-functional support.",
    tags: ["Knowledge management", "Notion", "Enablement", "Internal comms"],
    href: "/work/pirate-ship-knowledge-systems",
    linkLabel: "Read full case study",
  },
];

const miniCaseStudies = [
  {
    title: "Designing Calm",
    source: "Navigating Spicy Users",
    description:
      "A support training guide for difficult customer interactions, de-escalation, tone repair, emotional regulation, and practical scripts.",
    tags: ["CX training", "De-escalation", "Tone systems"],
  },
  {
    title: "Navigating Solution Resistance",
    source: "Navigating Customer Resistance",
    description:
      "A companion guide for helping support teams work with customers who are frustrated, stuck, or resisting the available solution.",
    tags: ["Support coaching", "Policy communication", "Boundaries"],
  },
  {
    title: "Go Links Proposal",
    source: "Information access proposal",
    description:
      "A proposal connecting information architecture, internal search behavior, knowledge findability, and the business case for faster access.",
    tags: ["Information architecture", "Proposal writing", "Findability"],
  },
  {
    title: "IT SOPs",
    source: "Crew-facing tech guides",
    description:
      "Plain-language technical documentation for common support scenarios, device workflows, access requests, troubleshooting, and self-service guidance.",
    tags: ["SOPs", "Technical writing", "Self-service"],
  },
];

const evidenceWall = [
  {
    title: "Knowledge Dock",
    type: "Knowledge hub",
    description:
      "Source-of-truth system design, Notion governance, page organization, and knowledge-home thinking.",
  },
  {
    title: "Introduction to Notion Lessonly",
    type: "Training module",
    description:
      "A learning experience designed to make Notion adoption feel approachable, useful, and less intimidating.",
  },
  {
    title: "New Cadet Welcome",
    type: "Onboarding",
    description:
      "Welcome and orientation material designed to help new team members find their footing quickly.",
  },
  {
    title: "PX Communications Style Guide",
    type: "Voice system",
    description:
      "A tone and communication reference for keeping internal messages clear, consistent, and human.",
  },
  {
    title: "Active Leadership Guide",
    type: "Leadership enablement",
    description:
      "Guidance material for managers and leads navigating expectations, team support, and active communication.",
  },
  {
    title: "Presentations and Learning Material",
    type: "Learning design",
    description:
      "A collection of presentation and enablement artifacts across onboarding, training, internal tooling, and AI exploration.",
  },
  {
    title: "Talk Like a Pirate Week",
    type: "Employee engagement",
    description:
      "Event planning, internal communications, stakeholder coordination, and creative execution for a branded culture initiative.",
  },
  {
    title: "AI Tools Exploration",
    type: "AI literacy",
    description:
      "A branded internal presentation exploring creative AI tools and practical workplace use cases.",
  },
  {
    title: "Emotional Regulation Guide",
    type: "Support wellness",
    description:
      "A self-care and performance guide for support reps navigating high-pressure queue days and emotional load.",
  },
];

function FeaturedCaseStudyCard({
  title,
  label,
  status,
  description,
  tags,
  href,
  linkLabel,
}: {
  title: string;
  label: string;
  status: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
}) {
  const isComingSoon = href === "#";

  return (
    <article className="paper-card flex min-h-[28rem] flex-col justify-between p-6 transition duration-300 hover:-translate-y-1 md:p-7">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="lab-label text-cyan">{label}</p>
          <span className="rounded-full border border-[var(--border)] bg-white/[0.035] px-3 py-1 font-lab text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-muted">
            {status}
          </span>
        </div>

        <h2 className="mt-5 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
          {title}
        </h2>

        <p className="mt-5 leading-7 text-muted">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span className="soft-chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {isComingSoon ? (
        <span className="mt-8 inline-flex rounded-2xl border border-[var(--border)] bg-white/[0.035] px-5 py-4 text-center font-lab text-sm font-semibold uppercase tracking-[0.08em] text-muted">
          {linkLabel}
        </span>
      ) : (
        <Link
          href={href}
          className="focus-ring mt-8 inline-flex rounded-2xl border border-cyan/40 bg-cyan px-5 py-4 text-center font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_32px_rgba(39,217,255,0.18)] transition hover:-translate-y-0.5"
        >
          {linkLabel}
        </Link>
      )}
    </article>
  );
}

function MiniCaseStudyCard({
  title,
  source,
  description,
  tags,
}: {
  title: string;
  source: string;
  description: string;
  tags: string[];
}) {
  return (
    <article className="paper-card p-6">
      <p className="lab-label text-cyan">{source}</p>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span className="soft-chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function EvidenceCard({
  title,
  type,
  description,
}: {
  title: string;
  type: string;
  description: string;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <p className="lab-label text-cyan">{type}</p>
      <h3 className="mt-4 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}

export default function WorkPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <p className="lab-label text-cyan">Work</p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_0.6fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Systems, tools, guides, and receipts.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              A curated look at the work behind the positioning: AI workflows,
              internal tools, knowledge systems, support enablement, technical
              documentation, and communication systems.
            </p>
          </div>

          <aside className="paper-card p-6">
            <p className="lab-label text-cyan">How to read this page</p>
            <p className="mt-4 leading-7 text-muted">
              The big cards are deep-dive case studies. The smaller cards are
              proof that the work was broader than any one project: guides,
              proposals, trainings, SOPs, launches, internal tools, and
              artifacts from real systems.
            </p>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8">
          <p className="lab-label text-muted">Featured case studies</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            The deeper stories.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featuredCaseStudies.map((caseStudy) => (
            <FeaturedCaseStudyCard
              key={caseStudy.title}
              title={caseStudy.title}
              label={caseStudy.label}
              status={caseStudy.status}
              description={caseStudy.description}
              tags={caseStudy.tags}
              href={caseStudy.href}
              linkLabel={caseStudy.linkLabel}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="lab-label text-cyan">Mini case studies</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Smaller artifacts, still real systems work.
            </h2>
          </div>

          <p className="leading-8 text-muted">
            Not every useful thing needs a full case study. Some projects are
            best shown as focused examples of judgment: how to explain something
            clearly, reduce friction, coach a team, document a workflow, or make
            a recurring problem easier to handle the next time it appears.
          </p>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {miniCaseStudies.map((caseStudy) => (
            <MiniCaseStudyCard
              key={caseStudy.title}
              title={caseStudy.title}
              source={caseStudy.source}
              description={caseStudy.description}
              tags={caseStudy.tags}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8">
          <p className="lab-label text-muted">Evidence Wall</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            The receipts drawer, curated.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {evidenceWall.map((item) => (
            <EvidenceCard
              key={item.title}
              title={item.title}
              type={item.type}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note p-7 md:p-9">
          <p className="field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            The pattern is not one project. The pattern is turning messy work
            into something people can actually use.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[var(--paper-ink)] bg-[var(--paper-ink)] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-paper"
            >
              Talk about systems
            </Link>

            <Link
              href="/about"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)]"
            >
              About me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}