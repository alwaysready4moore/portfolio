import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  PhoenixMark,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

type FeaturedCaseStudy = {
  title: string;
  label: string;
  status: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  tone: BrandBadgeTone;
  logoSrc?: string;
  logoAlt?: string;
};

const featuredCaseStudies: FeaturedCaseStudy[] = [
  {
    title: "Aegis",
    label: "AI product build",
    status: "Full case study",
    description:
      "An AI-assisted creative workflow that turns competitor landing pages into structured ad concepts, risk review, and lower-risk rewrite suggestions.",
    tags: ["AI workflow", "Next.js", "Gemini", "Risk review"],
    href: "/work/aegis",
    linkLabel: "Read full case study",
    tone: "signal",
    logoSrc: "/logos/aegis-logo.png",
    logoAlt: "Aegis logo",
  },
  {
    title: "New Analyst Tool",
    label: "Internal workflow tool",
    status: "Full case study",
    description:
      "An anonymized internal analyst workflow tool that brought reference guidance, embedded learning, and repeated workflow support closer to daily analysis work.",
    tags: [
      "Internal tooling",
      "Analyst support",
      "Workflow design",
      "Documentation",
    ],
    href: "/work/new-analyst-tool",
    linkLabel: "Read full case study",
    tone: "verified",
    logoSrc: "/logos/csi-toolbox-logo.png",
    logoAlt: "CSI Toolbox logo",
  },
  {
    title: "Sail Snapper",
    label: "Support workflow tool",
    status: "Full case study",
    description:
      "A CX support workflow project focused on cleaner screenshot capture, annotation, sharing, documentation, and adoption support.",
    tags: ["CX operations", "Tool documentation", "Workflow support", "Adoption"],
    href: "/work/sail-snapper",
    linkLabel: "Read full case study",
    tone: "experiment",
    logoSrc: "/logos/sail-snapper-logo.png",
    logoAlt: "Sail Snapper logo",
  },
  {
    title: "ChartFinder",
    label: "Chrome extension",
    status: "Full case study",
    description:
      "A local-first Chrome extension that extracts visible shipment, client, and support article context, then formats it for support-ready replies.",
    tags: [
      "Chrome extension",
      "Local-first",
      "Clipboard workflow",
      "Support operations",
    ],
    href: "/work/chartfinder",
    linkLabel: "Read full case study",
    tone: "experiment",
    logoSrc: "/logos/chartfinder-logo.png",
    logoAlt: "ChartFinder logo",
  },
  {
    title: "Knowledge Systems",
    label: "Knowledge ecosystem",
    status: "Full case study",
    description:
      "A large-scale knowledge and enablement system spanning governance, onboarding, SOPs, internal communications, training, and cross-functional support.",
    tags: [
      "Knowledge management",
      "Knowledge governance",
      "Enablement",
      "Internal comms",
    ],
    href: "/work/knowledge-systems",
    linkLabel: "Read full case study",
    tone: "verified",
    logoSrc: "/logos/knowledge-systems-logo.png",
    logoAlt: "Knowledge Systems logo",
  },
];

const miniCaseStudies = [
  {
    title: "Designing Calm",
    source: "Difficult interaction training",
    description:
      "A support training guide for difficult customer interactions, de-escalation, tone repair, emotional regulation, and practical scripts.",
    tags: ["CX training", "De-escalation", "Tone systems"],
  },
  {
    title: "Navigating Solution Resistance",
    source: "Customer resistance guide",
    description:
      "A companion guide for helping support teams work with customers who are frustrated, stuck, or resisting the available solution.",
    tags: ["Support coaching", "Policy communication", "Boundaries"],
  },
  {
    title: "Internal Link Proposal",
    source: "Information access proposal",
    description:
      "A proposal connecting information architecture, internal search behavior, knowledge findability, and the business case for faster access.",
    tags: ["Information architecture", "Proposal writing", "Findability"],
  },
  {
    title: "Technical SOPs",
    source: "Teammate-facing tech guides",
    description:
      "Plain-language technical documentation for common support scenarios, device workflows, access requests, troubleshooting, and self-service guidance.",
    tags: ["SOPs", "Technical writing", "Self-service"],
  },
];

const evidenceWall = [
  {
    title: "Internal Knowledge Hub",
    type: "Knowledge hub",
    description:
      "Source-of-truth system design, knowledge governance, page organization, and knowledge-home thinking.",
  },
  {
    title: "Knowledge Hub Training",
    type: "Training module",
    description:
      "A learning experience designed to make knowledge hub adoption feel approachable, useful, and less intimidating.",
  },
  {
    title: "New Hire Welcome",
    type: "Onboarding",
    description:
      "Welcome and orientation material designed to help new team members find their footing quickly.",
  },
  {
    title: "Communications Style Guide",
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
    title: "Culture Operations",
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
  tone,
  logoSrc,
  logoAlt,
}: FeaturedCaseStudy) {
  const isComingSoon = href === "#";

  const cardContent = (
    <article className="paper-card group relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 md:p-7">
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl"
      />

      <NotebookHighlight
        size="lg"
        className="absolute -right-3 bottom-10 rotate-[-8deg] opacity-20"
      />

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <BrandBadge tone={tone} icon="dot">
            {label}
          </BrandBadge>

          <BrandBadge
            tone={isComingSoon ? "quiet" : "signal"}
            icon={isComingSoon ? "none" : "spark"}
          >
            {status}
          </BrandBadge>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-cyan/20 bg-[#101820] p-2 shadow-[0_0_24px_rgba(25,216,232,0.08)]">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt ?? `${title} logo`}
                className="h-full w-full object-contain"
              />
            ) : (
              <PhoenixMark
                variant="standard"
                size="lg"
                decorative
                className="h-14 w-14"
              />
            )}
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              {title}
            </h2>

            <p className="mt-4 leading-7 text-muted">{description}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <BrandBadge key={tag} tone="quiet" icon="none">
              {tag}
            </BrandBadge>
          ))}
        </div>
      </div>

      <div className="relative mt-8">
        {isComingSoon ? (
          <span className="inline-flex rounded-2xl border border-[var(--border)] bg-white/[0.035] px-5 py-4 text-center font-lab text-sm font-semibold uppercase tracking-[0.08em] text-muted">
            {linkLabel}
          </span>
        ) : (
          <span className="focus-ring inline-flex rounded-2xl border border-cyan/40 bg-cyan px-5 py-4 text-center font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_32px_rgba(39,217,255,0.18)] transition group-hover:-translate-y-0.5">
            {linkLabel}
          </span>
        )}
      </div>
    </article>
  );

  if (isComingSoon) {
    return cardContent;
  }

  return (
    <Link href={href} className="block h-full">
      {cardContent}
    </Link>
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
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookPaperclip
        size="md"
        className="absolute right-5 top-5 rotate-12 opacity-25"
      />

      <BrandBadge tone="quiet" icon="spark">
        {source}
      </BrandBadge>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <BrandBadge key={tag} tone="quiet" icon="none">
            {tag}
          </BrandBadge>
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
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/30">
      <div className="flex items-start justify-between gap-4">
        <BrandBadge tone="quiet" icon="none">
          {type}
        </BrandBadge>

        <CyanSpark size="xs" className="mt-1 opacity-60" />
      </div>

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
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="signal" icon="spark">
            Work
          </BrandBadge>

          <BrandBadge tone="quiet" icon="dot">
            Proof of systems
          </BrandBadge>
        </div>

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

          <aside className="paper-card relative overflow-hidden p-6">
            <MarginArrow
              size="lg"
              className="absolute right-5 top-5 rotate-6 opacity-25"
            />

            <BrandBadge tone="quiet" icon="spark">
              How to read this page
            </BrandBadge>

            <p className="mt-4 leading-7 text-muted">
              The big cards are deep-dive case studies. The smaller cards show
              the supporting range: guides, proposals, trainings, SOPs,
              launches, internal tools, and artifacts from real systems.
            </p>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              Featured case studies
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              The deeper stories.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-6 text-muted md:text-right">
            Each full case study shows the problem, the system response, the
            human judgment involved, and the artifacts that made the work real.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featuredCaseStudies.map((caseStudy) => (
            <FeaturedCaseStudyCard key={caseStudy.title} {...caseStudy} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.7fr_1fr]">
          <NotebookPaperclip
            size="lg"
            className="absolute right-8 top-8 rotate-12 opacity-20"
          />

          <div>
            <BrandBadge tone="signal" icon="dot">
              Mini case studies
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Smaller artifacts with real systems value.
            </h2>
          </div>

          <p className="leading-8 text-muted">
            Some useful projects work better as focused examples of judgment:
            explaining a dense topic clearly, reducing friction, coaching a
            team, documenting a workflow, or making a recurring problem easier
            to handle the next time it appears.
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
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              Evidence Wall
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              The receipts drawer, curated.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-6 text-muted md:text-right">
            A compact shelf of supporting artifacts that show repeated patterns:
            documentation, training, enablement, operations, and information
            access.
          </p>
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
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <NotebookHighlight
            size="lg"
            className="absolute right-6 top-6 rotate-[-8deg] opacity-25"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Across the work, the same pattern keeps showing up: messy systems
            become clearer, more usable, and easier to trust.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Talk about systems
            </Link>

            <Link
              href="/about"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              About me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}