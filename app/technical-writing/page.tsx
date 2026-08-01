import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  NotebookHighlight,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Technical writing portfolio",
  description:
    "Playbooks, workflow guidance, technical references, and decision-support tools by creative technical writer Marquetta Moore.",
};

const playbooks = [
  {
    title: "Suspicious email triage",
    description:
      "Investigate reported email, assess evidence, assign severity, escalate, and leave a clear case record.",
    skills: [
      "Technical writing",
      "Security operations",
      "Decision support",
      "Information architecture",
    ],
    href: "/work/suspicious-email-triage",
    number: "01",
  },
  {
    title: "Access request and provisioning",
    description:
      "Verify requests, apply least privilege, route approvals, change access, and keep an audit-ready record.",
    skills: [
      "Workflow design",
      "IT operations",
      "Access governance",
      "Process documentation",
    ],
    href: "/work/access-request-provisioning",
    number: "02",
  },
  {
    title: "Knowledge base governance",
    description:
      "Assign ownership, review content, detect stale guidance, publish updates, and retire information safely.",
    skills: [
      "Knowledge management",
      "Content operations",
      "Governance",
      "Information architecture",
    ],
    href: "/work/knowledge-base-governance",
    number: "03",
  },
];

const writingFormats = [
  {
    label: "Playbooks",
    text: "Guide decisions, handoffs, controls, and escalation.",
  },
  {
    label: "Technical references",
    text: "Explain systems, terms, signals, and boundaries.",
  },
  {
    label: "Interactive lessons",
    text: "Teach a concept through examples and guided practice.",
  },
  {
    label: "Workflow guidance",
    text: "Turn a process into clear steps people can repeat.",
  },
];

const technicalSamples = [
  {
    type: "Interactive troubleshooting lesson",
    title: "Cookies & Cache",
    description:
      "Explains browser storage, incognito testing, and how to test a theory before recommending a disruptive reset.",
    href: "/work/small-wins/cookies-and-cache",
    action: "Start the lesson",
  },
  {
    type: "Interactive systems lesson",
    title: "Tracking Email Verification",
    description:
      "Covers domain ownership, SPF, DKIM, DMARC, delivery symptoms, and support boundaries through a guided scenario.",
    href: "/work/small-wins/tracking-email-verification",
    action: "Start the lesson",
  },
  {
    type: "Interactive diagnostic guide",
    title: "Outdated Browser Troubleshooting",
    description:
      "Guides readers through browser, system-time, update, and network checks while keeping the safest actions first.",
    href: "/work/small-wins/outdated-browser",
    action: "Open the diagnostic",
  },
  {
    type: "Embedded documentation system",
    title: "New Analyst Tool",
    description:
      "Keeps reference guidance, learning, and daily security utilities close to the analyst workflow.",
    href: "/work/new-analyst-tool",
    action: "Read the case study",
  },
  {
    type: "Knowledge governance case study",
    title: "Knowledge Systems",
    description:
      "Shows how documentation, onboarding, templates, and maintenance practices supported hundreds of resources.",
    href: "/work/knowledge-systems",
    action: "Read the case study",
  },
  {
    type: "One-page workflow guide",
    title: "How to Translate a Webpage",
    description:
      "Shows teammates how to translate customer-facing webpages in Chrome and create more inclusive support screenshots.",
    href: "/work/small-wins/how-to-translate-a-webpage.pdf",
    action: "Open the guide",
  },
];

const patterns = [
  {
    label: "Investigate and decide",
    title: "Suspicious email triage",
    text: "Evidence, severity, escalation, and case reasoning.",
  },
  {
    label: "Coordinate and execute",
    title: "Access provisioning",
    text: "Intake, ownership, approvals, fulfillment, and validation.",
  },
  {
    label: "Maintain and improve",
    title: "Knowledge governance",
    text: "Ownership, review, publishing, measurement, and retirement.",
  },
];

export default function TechnicalWritingPage() {
  return (
    <main className="pb-20">
      <SiteHeader />

      <section className="lab-shell pt-10 md:pt-16">
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="signal" icon="spark">
            Creative technical writing
          </BrandBadge>
          <BrandBadge tone="quiet" icon="dot">
            Documentation for real work
          </BrandBadge>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <div>
            <h1 className="display-heading max-w-5xl text-5xl text-ink md:text-7xl">
              Documentation built for
              <span className="headline-signal block">real work</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              Playbooks, workflow guidance, technical references, and
              decision-support tools that help people understand a system and
              act with less guesswork.
            </p>
          </div>

          <div className="paper-note relative p-6 md:p-7">
            <NotebookHighlight
              size="lg"
              className="absolute right-5 top-5 rotate-[-8deg] opacity-25"
            />
            <p className="lab-label text-[#087b8b]">Writing principle</p>
            <p className="field-heading mt-3 text-2xl text-[var(--paper-ink)]">
              The format follows the job. A playbook helps someone decide. A
              reference helps them check. A lesson helps them understand.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {writingFormats.map((format) => (
            <article
              key={format.label}
              className="rounded-3xl border border-[var(--border)] bg-white/[0.025] p-5"
            >
              <p className="lab-label text-cyan">{format.label}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{format.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="playbook-library"
        className="lab-shell scroll-mt-28 pt-16"
        aria-labelledby="library-heading"
      >
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="lab-label text-cyan">Operational playbook library</p>
            <h2
              id="library-heading"
              className="mt-3 max-w-4xl font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl"
            >
              Three playbooks for
              <span className="headline-signal"> three operational jobs</span>
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-muted md:text-right">
            Each sample uses the same documentation standards, but the structure
            changes to match the decisions, risks, and handoffs in the workflow.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {playbooks.map((playbook) => (
            <Link
              key={playbook.title}
              href={playbook.href}
              className="block h-full"
            >
              <article className="paper-card group relative h-full overflow-hidden p-6 transition hover:-translate-y-1 hover:border-cyan/35 md:p-7">
                <CyanSpark
                  size="xs"
                  className="absolute right-6 top-6 opacity-55"
                />
                <span className="font-lab text-5xl font-semibold text-cyan/15">
                  {playbook.number}
                </span>
                <div className="mt-2">
                  <BrandBadge tone="signal" icon="dot">
                    Public-safe simulation
                  </BrandBadge>
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
                  {playbook.title}
                </h3>
                <p className="mt-4 leading-7 text-muted">
                  {playbook.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {playbook.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--border)] bg-white/[0.025] px-3 py-1.5 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-7 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
                  Open playbook <span aria-hidden="true">→</span>
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16" aria-labelledby="samples-heading">
        <div className="paper-card relative overflow-hidden p-6 md:p-8">
          <CyanSpark size="sm" className="absolute right-7 top-7 opacity-40" />
          <p className="lab-label text-cyan">Selected technical writing</p>
          <h2
            id="samples-heading"
            className="mt-3 max-w-4xl font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl"
          >
            More ways I make complex work
            <span className="headline-signal"> usable</span>
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-muted">
            The portfolio also includes troubleshooting lessons, technical
            references, one-page guides, and documentation systems built around
            specific user tasks.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technicalSamples.map((sample) => (
              <Link
                key={sample.title}
                href={sample.href}
                className="group rounded-3xl border border-[var(--border)] bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-cyan/35"
              >
                <p className="lab-label text-cyan">{sample.type}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-ink">
                  {sample.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {sample.description}
                </p>
                <p className="mt-5 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
                  {sample.action} <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card p-6 md:p-8">
          <p className="lab-label text-cyan">What the collection shows</p>
          <h2 className="mt-3 max-w-4xl font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            The writing changes with the
            <span className="headline-signal"> operational job</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {patterns.map((pattern) => (
              <article
                key={pattern.label}
                className="rounded-3xl border border-[var(--border)] bg-white/[0.025] p-5"
              >
                <p className="lab-label text-cyan">{pattern.label}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                  {pattern.title}
                </h3>
                <p className="mt-3 leading-7 text-muted">{pattern.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
