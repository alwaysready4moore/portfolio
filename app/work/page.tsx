import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
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


const smallWinArtifacts = [
  {
    title: "Oh, the Places Ye’ll Go… with Pirate Ship!",
    type: "Animated learning video",
    description:
      "A playful, branded explainer built with original parody writing, visual sequencing, AI-assisted narration, and generated background music.",
    tags: [
      "Multimedia learning",
      "Scriptwriting",
      "AI-assisted production",
      "Brand voice",
    ],
    href: "/work/small-wins/oh-the-places-yell-go.mp4",
    action: "Watch video",
  },
  {
    title: "Cookies & Cache",
    type: "Visual troubleshooting guide",
    description:
      "An 11-page guide explaining browser storage, incognito testing, and common website symptoms through plain-language analogies.",
    tags: [
      "Technical writing",
      "Troubleshooting",
      "Instructional design",
      "Decision support",
    ],
    href: "/work/small-wins/cookies-and-cache.pdf",
    action: "Open guide",
  },
  {
    title: "Tracking Email Verification",
    type: "Technical concept explainer",
    description:
      "A visual guide translating domains, DMARC, SPF, DKIM, delivery failures, and return paths into a party-invitation metaphor.",
    tags: [
      "Email systems",
      "Technical communication",
      "Learning design",
      "Support enablement",
    ],
    href: "/work/small-wins/tracking-email-verification.pdf",
    action: "Open guide",
  },
  {
    title: "Notion Training",
    type: "Tool adoption video",
    description:
      "A concise training video designed to make a workplace knowledge tool feel clearer, more approachable, and easier to use.",
    tags: [
      "Tool adoption",
      "Learning design",
      "Knowledge systems",
      "Video production",
    ],
    href: "/work/small-wins/notion-training.mp4",
    action: "Watch video",
  },
  {
    title: "Rippling Expense Management",
    type: "Operational process video",
    description:
      "A short visual walkthrough that turns an expense-management workflow into a clear, repeatable process.",
    tags: [
      "Process training",
      "Operations",
      "Instructional video",
      "Workflow clarity",
    ],
    href: "/work/small-wins/rippling-expense-management.mp4",
    action: "Watch video",
  },
  {
    title: "Emotional Regulation Guide",
    type: "Support wellness guide",
    description:
      "A practical self-care and performance guide for customer service specialists navigating heavy queue days, emotional overload, and repeated high-pressure interactions.",
    tags: [
      "Employee support",
      "Emotional regulation",
      "Learning design",
      "Queue resilience",
    ],
    href: "/work/small-wins/emotional-regulation-guide.pdf",
    action: "Open guide",
  },
  {
    title: "Outdated Browser Troubleshooting",
    type: "Technical troubleshooting guide",
    description:
      "A step-by-step guide for handling browser, system time, Windows update, and DNS-related login issues while keeping support boundaries clear.",
    tags: [
      "Technical support",
      "Browser troubleshooting",
      "Decision support",
      "Scope boundaries",
    ],
    href: "/work/small-wins/outdated-browser-guide.pdf",
    action: "Open guide",
  },
  {
    title: "Navigating Solution Resistance",
    type: "Customer communication guide",
    description:
      "A focused guide for staying compassionate, firm, and clear when customers reject available solutions or push against policy and process limits.",
    tags: [
      "De-escalation",
      "Boundary setting",
      "Support coaching",
      "Policy communication",
    ],
    href: "/work/small-wins/solution-resistance-guide.pdf",
    action: "Open guide",
  },
  {
    title: "How to Translate a Webpage",
    type: "One-page workflow guide",
    description:
      "A compact visual guide showing teammates how to translate customer-facing webpages in Chrome and create more inclusive support screenshots.",
    tags: [
      "Inclusive support",
      "Workflow design",
      "Visual instruction",
      "Chrome",
    ],
    href: "/work/small-wins/how-to-translate-a-webpage.pdf",
    action: "Open guide",
  },
  {
    title: "Navigating Spicy Users",
    type: "Difficult interaction guide",
    description:
      "A teammate-facing guide for staying grounded, professional, assertive, and solution-focused during tense or disrespectful customer interactions.",
    tags: [
      "De-escalation",
      "Support wellness",
      "Communication",
      "Escalation judgment",
    ],
    href: "/work/small-wins/spicy-users-guide.pdf",
    action: "Open guide",
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

function ArtifactCard({
  title,
  type,
  description,
  tags,
  href,
  action,
}: {
  title: string;
  type: string;
  description: string;
  tags: string[];
  href: string;
  action: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="paper-card group relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
    >
      <CyanSpark
        size="xs"
        className="absolute right-5 top-5 opacity-55"
      />

      <div className="flex flex-wrap items-center gap-2 pr-8">
        <BrandBadge tone="experiment" icon="dot">
          {type}
        </BrandBadge>

        <BrandBadge tone="quiet" icon="none">
          Independent personal project
        </BrandBadge>
      </div>

      <h3 className="mt-5 pr-8 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-muted">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <BrandBadge key={tag} tone="quiet" icon="none">
            {tag}
          </BrandBadge>
        ))}
      </div>

      <p className="mt-6 border-t border-[var(--border)] pt-5 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
        {action} <span aria-hidden="true">↗</span>
      </p>
    </a>
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
          <NotebookHighlight
            size="lg"
            className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
          />

          <div>
            <BrandBadge tone="experiment" icon="spark">
              Mini case studies
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Smaller artifacts with real systems value.
            </h2>
          </div>

          <div className="space-y-5">
            <p className="leading-8 text-muted">
              I created these independently after noticing repeated patterns in
              customer service queues, recurring points of confusion, and weak
              spots where teammates or customers needed clearer guidance. None
              were assigned projects. They came from recognizing a problem and
              deciding to build something useful around it.
            </p>

            <p className="leading-8 text-muted">
              I made them during my personal time while working as a customer
              service specialist and continuing to perform my regular
              synchronous and asynchronous support duties. Some are visually
              rougher than my current standard, and I have intentionally left
              much of that original character intact because it shows the
              ambition, initiative, and range I brought to the role.
            </p>
          </div>
        </div>

        <aside className="mt-5 rounded-3xl border border-cyan/20 bg-cyan/[0.045] p-6">
          <BrandBadge tone="quiet" icon="spark">
            Context and disclosure
          </BrandBadge>

          <p className="mt-4 max-w-5xl leading-7 text-muted">
            These are independent portfolio samples. They were not commissioned
            by, approved by, or published on behalf of Pirate Ship, and I do not
            represent the company. The materials have been reviewed for public
            display; company logos, proprietary fonts, internal references, and
            sensitive details have been replaced, removed, or redacted where
            appropriate.
          </p>
        </aside>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {smallWinArtifacts.map((artifact) => (
            <ArtifactCard key={artifact.title} {...artifact} />
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