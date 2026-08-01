import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  NotebookHighlight,
  PhoenixMark,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

type CaseStudy = {
  title: string;
  category: "Featured Products & Systems" | "Knowledge & Workflow Systems";
  label: string;
  status: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  tone: BrandBadgeTone;
  logoSrc?: string;
  logoAlt?: string;
  featured?: boolean;
  accent?: "aegis" | "launchpad" | "click-lab" | "knowledge" | "tool";
  icon?: "mail-shield" | "access-control";
};

type SmallWinArtifact = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  href: string;
  action: string;
  interactive?: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Aegis",
    category: "Featured Products & Systems",
    label: "Creative intelligence platform",
    status: "Flagship system",
    description:
      "An AI workflow that analyzes competitor landing pages, drafts campaign directions, reviews risk, and shows where people need to make the final call.",
    tags: ["Gemini", "Next.js", "Structured outputs", "Risk review"],
    href: "/work/aegis",
    linkLabel: "Explore Aegis",
    tone: "signal",
    logoSrc: "/logos/aegis-logo.png",
    logoAlt: "Aegis logo",
    featured: true,
    accent: "aegis",
  },
  {
    title: "Launchpad",
    category: "Featured Products & Systems",
    label: "Career operating system",
    status: "Flagship system",
    description:
      "A Claude skill that scores role readiness, separates skill gaps from proof gaps, and assigns clear daily work.",
    tags: ["Claude skill", "Persistent state", "Gap classification", "Security audit"],
    href: "/work/launchpad",
    linkLabel: "Explore Launchpad",
    tone: "signal",
    logoSrc: "/logos/launchpad-logo.png",
    logoAlt: "Launchpad rocket logo",
    featured: true,
    accent: "launchpad",
  },
  {
    title: "Nice Little Click Lab",
    category: "Featured Products & Systems",
    label: "Microproduct studio",
    status: "Live beta",
    description:
      "A small web-product studio for useful tools and low-cost personalized products. Its first tool, Meeting Cost Ticker, is live.",
    tags: ["Product strategy", "UX writing", "Next.js", "Freemium model"],
    href: "/work/nice-little-click-lab",
    linkLabel: "Explore the Lab",
    tone: "experiment",
    logoSrc: "/nice-little-click-lab/logo.png",
    logoAlt: "Nice Little Click Lab logo",
    featured: true,
    accent: "click-lab",
  },
  {
    title: "Suspicious email triage playbook",
    category: "Knowledge & Workflow Systems",
    label: "Interactive documentation system",
    status: "Public work sample",
    description:
      "A security playbook for collecting evidence, assigning severity, escalating cases, and writing a clear investigation record.",
    tags: ["Technical writing", "Workflow design", "Security operations", "Information architecture"],
    href: "/work/suspicious-email-triage",
    linkLabel: "Open the playbook",
    tone: "signal",
    icon: "mail-shield",
    accent: "tool",
  },
  {
    title: "Access request and provisioning playbook",
    category: "Knowledge & Workflow Systems",
    label: "Interactive documentation system",
    status: "Public work sample",
    description:
      "A practical access workflow for verifying requests, applying least privilege, routing approvals, changing permissions, and keeping an audit-ready record.",
    tags: ["Technical writing", "IT operations", "Access governance", "Workflow design"],
    href: "/work/access-request-provisioning",
    linkLabel: "Open the playbook",
    tone: "signal",
    icon: "access-control",
    accent: "tool",
  },
  {
    title: "New analyst tool",
    category: "Knowledge & Workflow Systems",
    label: "Embedded analyst workflow",
    status: "Full case study",
    description:
      "An anonymized internal tool that keeps reference guidance, learning, and daily security utilities close to the analyst workflow.",
    tags: ["Internal tooling", "Analyst support", "Workflow design", "Documentation"],
    href: "/work/new-analyst-tool",
    linkLabel: "Read the case study",
    tone: "verified",
    logoSrc: "/work/new-analyst.png",
    logoAlt: "New Analyst Toolbox logo",
    accent: "tool",
  },
  {
    title: "Knowledge systems",
    category: "Knowledge & Workflow Systems",
    label: "Knowledge governance and enablement",
    status: "Full case study",
    description:
      "A governed knowledge environment that supports customer operations, onboarding, training, and reusable guidance across hundreds of resources.",
    tags: ["Knowledge systems", "Governance", "Enablement", "Onboarding"],
    href: "/work/knowledge-systems",
    linkLabel: "Read the case study",
    tone: "verified",
    logoSrc: "/logos/knowledge-systems-logo.png",
    logoAlt: "Knowledge Systems logo",
    accent: "knowledge",
  },
  {
    title: "ChartFinder",
    category: "Knowledge & Workflow Systems",
    label: "Local-first Chrome extension",
    status: "Full case study",
    description:
      "A local-first browser extension that gathers visible shipment and support context, then formats it for a reply without sending data to an external service.",
    tags: ["Chrome extension", "Local-first", "Clipboard workflow", "Support operations"],
    href: "/work/chartfinder",
    linkLabel: "Read the case study",
    tone: "experiment",
    logoSrc: "/logos/chartfinder-logo.png",
    logoAlt: "ChartFinder logo",
    accent: "tool",
  },
  {
    title: "Sail Snapper",
    category: "Knowledge & Workflow Systems",
    label: "Support workflow tool",
    status: "Full case study",
    description:
      "A support workflow for capturing, annotating, sharing, and documenting screenshots.",
    tags: ["CX operations", "Tool documentation", "Workflow support", "Adoption"],
    href: "/work/sail-snapper",
    linkLabel: "Read the case study",
    tone: "experiment",
    logoSrc: "/logos/sail-snapper-logo.png",
    logoAlt: "Sail Snapper logo",
    accent: "tool",
  },
];

const smallWinArtifacts: SmallWinArtifact[] = [
  {
    title: "Cookies & Cache",
    type: "Interactive troubleshooting lesson",
    description:
      "A guided lesson explaining browser storage, incognito testing, and how to test a theory before recommending a disruptive reset.",
    tags: ["Technical writing", "Troubleshooting", "Instructional design", "Decision support"],
    href: "/work/small-wins/cookies-and-cache",
    action: "Start lesson",
    interactive: true,
  },
  {
    title: "Tracking Email Verification",
    type: "Interactive systems lesson",
    description:
      "A scenario-based lesson covering domain ownership, SPF, DKIM, DMARC, delivery symptoms, and the boundary between support and domain administration.",
    tags: ["Email systems", "Technical communication", "Learning design", "Support enablement"],
    href: "/work/small-wins/tracking-email-verification",
    action: "Start lesson",
    interactive: true,
  },
  {
    title: "Notion Training",
    type: "Tool adoption video",
    description:
      "A concise training video designed to make a workplace knowledge tool feel clearer, more approachable, and easier to use.",
    tags: ["Tool adoption", "Learning design", "Knowledge systems", "Video production"],
    href: "/work/small-wins/notion-training.mp4",
    action: "Watch video",
  },
  {
    title: "Rippling Expense Management",
    type: "Operational process video",
    description:
      "A short visual walkthrough that turns an expense-management workflow into a clear, repeatable process.",
    tags: ["Process training", "Operations", "Instructional video", "Workflow clarity"],
    href: "/work/small-wins/rippling-expense-management.mp4",
    action: "Watch video",
  },
  {
    title: "Emotional Regulation Guide",
    type: "Support wellness guide",
    description:
      "A practical self-care and performance guide for support specialists navigating heavy queue days and emotional overload.",
    tags: ["Employee support", "Emotional regulation", "Learning design", "Queue resilience"],
    href: "/work/small-wins/emotional-regulation-guide.pdf",
    action: "Open guide",
  },
  {
    title: "Outdated Browser Troubleshooting",
    type: "Interactive diagnostic lesson",
    description:
      "A guided diagnostic path for browser, system-time, update, and network-related login failures, with safety rails and clear support boundaries.",
    tags: ["Technical support", "Browser troubleshooting", "Decision support", "Scope boundaries"],
    href: "/work/small-wins/outdated-browser",
    action: "Start diagnostic",
    interactive: true,
  },
  {
    title: "Navigating Solution Resistance",
    type: "Interactive teaching module",
    description:
      "A teaching-and-practice module for validating frustration, clarifying the path, holding compassionate boundaries, and closing the loop.",
    tags: ["De-escalation", "Boundary setting", "Support coaching", "Policy communication"],
    href: "/work/small-wins/solution-resistance",
    action: "Start module",
    interactive: true,
  },
  {
    title: "How to Translate a Webpage",
    type: "One-page workflow guide",
    description:
      "A compact visual guide showing teammates how to translate customer-facing webpages in Chrome and create more inclusive support screenshots.",
    tags: ["Inclusive support", "Workflow design", "Visual instruction", "Chrome"],
    href: "/work/small-wins/how-to-translate-a-webpage.pdf",
    action: "Open guide",
  },
  {
    title: "Navigating Spicy Users",
    type: "Interactive teaching module",
    description:
      "A teaching-and-practice module for staying grounded, leading the tone, setting behavioral boundaries, escalating appropriately, and recovering afterward.",
    tags: ["De-escalation", "Support wellness", "Communication", "Escalation judgment"],
    href: "/work/small-wins/spicy-users",
    action: "Start module",
    interactive: true,
  },
];

const featuredSystems = caseStudies.filter(
  (item) => item.category === "Featured Products & Systems",
);
const workflowSystems = caseStudies.filter(
  (item) =>
    item.category === "Knowledge & Workflow Systems" &&
    !item.title.toLowerCase().includes("playbook"),
);

function SystemLogo({
  title,
  logoSrc,
  logoAlt,
  featured = false,
  icon,
}: Pick<CaseStudy, "title" | "logoSrc" | "logoAlt" | "featured" | "icon">) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden border border-cyan/20 bg-[#0d141d] shadow-[0_0_30px_rgba(25,216,232,0.08)] ${
        featured ? "h-24 w-24 rounded-[1.8rem] p-3" : "h-20 w-20 rounded-3xl p-2"
      }`}
    >
      {icon === "mail-shield" ? (
        <svg
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full p-1"
          role="img"
          aria-label="Envelope and investigation shield"
        >
          <rect x="10" y="20" width="60" height="44" rx="10" fill="#F8FBFF" />
          <path d="M16 29L40 47L64 29" stroke="#071014" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 58L31 44M64 58L49 44" stroke="#071014" strokeWidth="5" strokeLinecap="round" />
          <path d="M62 40L85 48V65C85 77 76 86 62 91C48 86 39 77 39 65V48L62 40Z" fill="#071014" stroke="#27D9FF" strokeWidth="3" />
          <path d="M52 65L59 72L73 57" stroke="#F8FBFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : icon === "access-control" ? (
        <svg
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full p-1"
          role="img"
          aria-label="Access badge and key"
        >
          <rect x="11" y="12" width="48" height="68" rx="10" fill="#F8FBFF" />
          <rect x="20" y="23" width="30" height="12" rx="4" fill="#071014" />
          <circle cx="35" cy="51" r="10" fill="#071014" />
          <path d="M23 72C25 61 29 57 35 57C41 57 45 61 47 72" fill="#071014" />
          <circle cx="66" cy="30" r="11" fill="#071014" stroke="#27D9FF" strokeWidth="4" />
          <path d="M74 38L88 52M83 47L91 39M87 56L94 49" stroke="#27D9FF" strokeWidth="5" strokeLinecap="round" />
          <path d="M66 25V35M61 30H71" stroke="#F8FBFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ) : logoSrc ? (
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
  );
}

function FlagshipCard({ item }: { item: CaseStudy }) {
  const isLaunchpad = item.accent === "launchpad";
  const isClickLab = item.accent === "click-lab";

  return (
    <Link href={item.href} className="group block h-full">
      <article
        className={`relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-[2rem] border p-6 transition duration-300 hover:-translate-y-1 md:p-8 ${
          isLaunchpad
            ? "border-[#6f88ff]/30 bg-[radial-gradient(circle_at_88%_0%,rgba(130,87,255,0.2),transparent_34%),linear-gradient(145deg,rgba(57,119,255,0.12),rgba(255,255,255,0.025))] hover:border-[#7f9cff]/55"
            : isClickLab
              ? "border-[#e3b96f]/30 bg-[radial-gradient(circle_at_88%_0%,rgba(227,185,111,0.18),transparent_34%),linear-gradient(145deg,rgba(86,129,118,0.11),rgba(255,255,255,0.025))] hover:border-[#e3b96f]/55"
              : "border-cyan/25 bg-[radial-gradient(circle_at_88%_0%,rgba(25,216,232,0.16),transparent_34%),linear-gradient(145deg,rgba(25,216,232,0.08),rgba(255,255,255,0.025))] hover:border-cyan/55"
        }`}
      >
        <div
          aria-hidden="true"
          className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl ${
            isLaunchpad
              ? "bg-[#7657ff]/15"
              : isClickLab
                ? "bg-[#e3b96f]/12"
                : "bg-cyan/10"
          }`}
        />

        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <BrandBadge tone={item.tone} icon="spark">
            {item.label}
          </BrandBadge>
          <BrandBadge tone="quiet" icon="dot">
            {item.status}
          </BrandBadge>
        </div>

        <div className="relative mt-9">
          <SystemLogo {...item} />
        </div>

        <div className="relative mt-auto pt-12">
          <p
            className={`font-lab text-xs font-semibold uppercase tracking-[0.1em] ${
              isLaunchpad
                ? "text-[#9eb4ff]"
                : isClickLab
                  ? "text-[#e3c58f]"
                  : "text-cyan"
            }`}
          >
            {isClickLab ? "Microproduct studio" : "AI system"}
          </p>

          <h2 className="mt-3 font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-6xl">
            {item.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
            {item.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <BrandBadge key={tag} tone="quiet" icon="none">
                {tag}
              </BrandBadge>
            ))}
          </div>

          <p
            className={`mt-8 border-t pt-6 font-lab text-sm font-semibold uppercase tracking-[0.08em] transition group-hover:translate-x-1 ${
              isLaunchpad
                ? "border-[#7390ff]/20 text-[#a9bdff]"
                : isClickLab
                  ? "border-[#e3b96f]/20 text-[#e3c58f]"
                  : "border-cyan/15 text-cyan"
            }`}
          >
            {item.linkLabel} <span aria-hidden="true">→</span>
          </p>
        </div>
      </article>
    </Link>
  );
}

function SystemCard({ item }: { item: CaseStudy }) {
  return (
    <Link href={item.href} className="group block h-full">
      <article className="paper-card relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 md:p-7">
        <CyanSpark
          size="xs"
          className="absolute right-5 top-5 opacity-45 transition group-hover:opacity-80"
        />

        <div className="flex flex-wrap items-center gap-2 pr-8">
          <BrandBadge tone={item.tone} icon="dot">
            {item.label}
          </BrandBadge>
          <BrandBadge tone="quiet" icon="none">
            {item.status}
          </BrandBadge>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
          <SystemLogo {...item} />

          <div>
            <h3 className="font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              {item.title}
            </h3>
            <p className="mt-4 leading-7 text-muted">{item.description}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <BrandBadge key={tag} tone="quiet" icon="none">
              {tag}
            </BrandBadge>
          ))}
        </div>

        <p className="mt-auto border-t border-[var(--border)] pt-6 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
          {item.linkLabel} <span aria-hidden="true">→</span>
        </p>
      </article>
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
  interactive = false,
}: SmallWinArtifact) {
  const card = (
    <article className="paper-card group relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
      <CyanSpark size="xs" className="absolute right-5 top-5 opacity-55" />

      <div className="flex flex-wrap items-center gap-2 pr-8">
        <BrandBadge tone="experiment" icon="dot">
          {type}
        </BrandBadge>
        {interactive ? (
          <BrandBadge tone="signal" icon="spark">
            Interactive
          </BrandBadge>
        ) : null}
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
        {action} <span aria-hidden="true">{interactive ? "→" : "↗"}</span>
      </p>
    </article>
  );

  return interactive ? (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" className="block h-full">
      {card}
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
            Case studies and work samples
          </BrandBadge>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.52fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl font-display text-6xl font-bold leading-[0.92] tracking-[-0.065em] text-ink md:text-8xl">
              Systems I’ve <span className="headline-signal">built</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              Technical writing, products, knowledge systems, internal tools,
              and AI workflows that make complex work clearer and safer.
            </p>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <NotebookHighlight
              size="lg"
              className="absolute -right-4 -top-4 rotate-[-8deg] opacity-20"
            />
            <BrandBadge tone="quiet" icon="spark">
              What connects the work
            </BrandBadge>
            <p className="mt-4 leading-7 text-muted">
              I look for repeated questions, weak handoffs, and decisions that
              need better support. Then I build a clearer path.
            </p>
          </aside>
        </div>
      </section>

      <section
        className="lab-shell pt-16"
        aria-labelledby="technical-writing-heading"
      >
        <div className="paper-card relative overflow-hidden p-6 md:p-8">
          <CyanSpark size="sm" className="absolute right-6 top-6 opacity-55" />

          <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <BrandBadge tone="signal" icon="spark">
                Technical writing and workflow documentation
              </BrandBadge>
              <h2
                id="technical-writing-heading"
                className="mt-4 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl"
              >
                Documentation built for
                <span className="headline-signal block">real work</span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl leading-8 text-muted">
                Playbooks, technical references, troubleshooting lessons, and
                workflow guidance built around the decisions people need to make.
              </p>
              <Link
                href="/technical-writing"
                className="mt-6 inline-flex items-center gap-2 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition hover:translate-x-1"
              >
                Explore technical writing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              {
                job: "Investigate and decide",
                title: "Suspicious email triage",
                href: "/work/suspicious-email-triage",
              },
              {
                job: "Coordinate and execute",
                title: "Access provisioning",
                href: "/work/access-request-provisioning",
              },
              {
                job: "Maintain and improve",
                title: "Knowledge governance",
                href: "/work/knowledge-base-governance",
              },
            ].map((sample) => (
              <Link
                key={sample.job}
                href={sample.href}
                className="group rounded-3xl border border-[var(--border)] bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-cyan/35"
              >
                <p className="lab-label text-cyan">{sample.job}</p>
                <p className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-ink">
                  {sample.title}
                </p>
                <p className="mt-4 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
                  Open playbook <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="signal" icon="spark">
              Featured products and systems
            </BrandBadge>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-ink md:text-6xl">
              Start with the <span className="headline-signal">flagship work</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted md:text-right">
            Each project starts with a clear job, defined limits, useful
            documentation, and an interface built for the work.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {featuredSystems.map((item) => (
            <FlagshipCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="verified" icon="dot">
              Knowledge and workflow systems
            </BrandBadge>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-6xl">
              Tools for the <span className="headline-signal">work behind the work</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted md:text-right">
            Governance, embedded guidance, local-first tools, training, and
            adoption support for operational teams.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {workflowSystems.map((item) => (
            <SystemCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.72fr_1fr]">
          <NotebookHighlight
            size="lg"
            className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
          />

          <div>
            <BrandBadge tone="experiment" icon="spark">
              Small wins
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Smaller work with <span className="headline-signal">a clear job</span>
            </h2>
          </div>

          <div className="space-y-5">
            <p className="leading-8 text-muted">
              These samples include interactive lessons, guides, training
              videos, diagnostic paths, and practical documentation.
            </p>
            <p className="leading-8 text-muted">
              Each one began with a repeated problem and a specific audience that
              needed a clearer answer or next step.
            </p>
          </div>
        </div>

        <aside className="mt-5 rounded-3xl border border-cyan/20 bg-cyan/[0.045] p-6">
          <BrandBadge tone="quiet" icon="spark">
            Context and disclosure
          </BrandBadge>
          <p className="mt-4 max-w-5xl leading-7 text-muted">
            These are independent portfolio samples. Company logos, proprietary
            fonts, internal references, and sensitive details have been replaced,
            removed, anonymized, or redacted where appropriate.
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
            Across the work, I make information easier to find, decisions easier
            to explain, and workflows easier to follow.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Contact me
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
