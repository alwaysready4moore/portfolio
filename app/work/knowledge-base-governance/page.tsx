import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { KnowledgeGovernancePlaybook } from "./KnowledgeGovernancePlaybook";

export const metadata: Metadata = {
  title: "Knowledge base governance playbook",
  description:
    "An interactive technical writing sample for assigning ownership, reviewing content, measuring health, publishing updates, and retiring guidance safely.",
};

const proofStrip = [
  {
    label: "My role",
    value:
      "Technical writer, knowledge strategist, information architect, and interaction designer",
  },
  {
    label: "Audience",
    value:
      "Knowledge managers, technical writers, support leaders, subject matter experts, and content owners",
  },
  {
    label: "Artifact",
    value:
      "Interactive playbook, content health checker, governance model, and printable quick reference",
  },
  {
    label: "Focus",
    value:
      "Clear ownership, reliable review cycles, useful evidence, and safe content retirement",
  },
];

const designDecisions = [
  {
    number: "01",
    title: "Govern the full lifecycle",
    description:
      "The workflow covers intake, drafting, review, publishing, measurement, maintenance, and retirement. Publishing is one stage, not the finish line.",
  },
  {
    number: "02",
    title: "Assign an accountable owner",
    description:
      "Every published article needs one person or team responsible for accuracy, review, and retirement. A list of contributors does not replace ownership.",
  },
  {
    number: "03",
    title: "Use signals before rewriting",
    description:
      "Search behavior, support patterns, feedback, product changes, and duplication help explain what is wrong. Page views alone do not tell the whole story.",
  },
  {
    number: "04",
    title: "Retire content with a path forward",
    description:
      "An archive decision includes redirects, replacement links, retained evidence, and communication. Removing a page without guidance creates a new support problem.",
  },
];

function GovernanceMark() {
  return (
    <svg
      viewBox="0 0 210 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Knowledge articles moving through ownership, review, and retirement"
    >
      <rect x="22" y="24" width="102" height="118" rx="18" fill="#F8FBFF" />
      <rect x="39" y="42" width="68" height="10" rx="5" fill="#071014" />
      <rect x="39" y="62" width="53" height="7" rx="3.5" fill="#071014" opacity="0.72" />
      <rect x="39" y="78" width="64" height="7" rx="3.5" fill="#071014" opacity="0.46" />
      <rect x="39" y="94" width="44" height="7" rx="3.5" fill="#071014" opacity="0.46" />
      <circle cx="102" cy="116" r="13" fill="#071014" />
      <path d="M96 116L100 120L109 110" stroke="#F8FBFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M129 58C149 58 158 67 158 82V91" stroke="#27D9FF" strokeWidth="7" strokeLinecap="round" />
      <path d="M151 84L158 92L165 84" stroke="#27D9FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="132" y="94" width="57" height="44" rx="13" fill="#071014" stroke="#27D9FF" strokeWidth="5" />
      <path d="M146 108H176M146 120H166" stroke="#F8FBFF" strokeWidth="5" strokeLinecap="round" />

      <circle cx="160" cy="42" r="17" fill="#071014" stroke="#27D9FF" strokeWidth="5" />
      <circle cx="160" cy="42" r="5" fill="#F8FBFF" />
      <path d="M160 20V12M160 72V64M138 42H130M190 42H182" stroke="#27D9FF" strokeWidth="5" strokeLinecap="round" />
      <path d="M144 26L138 20M176 58L182 64M176 26L182 20" stroke="#27D9FF" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function KnowledgeBaseGovernancePage() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <section className="lab-shell pt-12 md:pt-20">
        <Link
          href="/technical-writing"
          className="focus-ring inline-flex items-center gap-2 font-lab text-xs font-semibold uppercase tracking-[0.1em] text-muted transition hover:text-cyan"
        >
          <span aria-hidden="true">←</span> Back to playbooks
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <BrandBadge tone="signal" icon="spark">
                Technical writing work sample
              </BrandBadge>
              <BrandBadge tone="quiet" icon="dot">
                Public-safe simulation
              </BrandBadge>
            </div>

            <p className="lab-label mt-8 text-cyan">Knowledge operations and content governance</p>
            <h1 className="display-heading mt-4 max-w-5xl text-5xl text-ink sm:text-6xl md:text-7xl">
              Knowledge base
              <span className="headline-signal block">governance playbook</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              A practical guide for assigning ownership, reviewing content,
              publishing reliable updates, and retiring guidance without leaving users stranded.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#playbook"
                className="focus-ring rounded-2xl border border-cyan bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_26px_rgba(39,217,255,0.2)] transition hover:-translate-y-0.5"
              >
                Open the playbook
              </a>
              <a
                href="#documentation-decisions"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/[0.035] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/35"
              >
                See the writing decisions
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-[6/5] w-full max-w-[360px] overflow-hidden rounded-[2.25rem] border border-cyan/25 bg-[radial-gradient(circle_at_70%_15%,rgba(39,217,255,0.14),transparent_35%),linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] p-9 shadow-[0_28px_80px_rgba(0,0,0,0.38),0_0_55px_rgba(39,217,255,0.1)]">
            <CyanSpark size="sm" animated className="absolute right-7 top-7" />
            <div className="h-full w-full">
              <GovernanceMark />
            </div>
            <p className="absolute bottom-5 left-6 font-lab text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-muted">
              Vector interface mark · no raster artwork
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-12 md:pt-16">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">
          {proofStrip.map((item, index) => (
            <div
              key={item.label}
              className={`p-5 md:p-6 ${
                index > 0 ? "border-t border-[var(--border)] sm:border-l sm:border-t-0" : ""
              } ${index === 2 ? "lg:border-t-0 sm:border-l-0 lg:border-l" : ""}`}
            >
              <p className="lab-label text-cyan">{item.label}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="lab-label text-cyan">The documentation problem</p>
            <h2 className="display-heading mt-4 text-4xl text-ink md:text-5xl">
              A full knowledge base can still be hard to trust
            </h2>
          </div>
          <div className="paper-note relative p-7 md:p-9">
            <NotebookHighlight
              size="lg"
              className="absolute right-5 top-5 rotate-[-8deg] opacity-25"
            />
            <p className="field-heading text-2xl text-[var(--paper-ink)] md:text-3xl">
              Duplicate articles, missing owners, product changes, and vague review dates
              slowly weaken a knowledge base. Governance gives every article a lifecycle,
              an accountable owner, and a documented next action.
            </p>
          </div>
        </div>
      </section>

      <section id="documentation-decisions" className="lab-shell scroll-mt-28 pt-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="lab-label text-cyan">Documentation decisions</p>
            <h2 className="display-heading mt-4 max-w-3xl text-4xl text-ink md:text-5xl">
              The page follows the content lifecycle
            </h2>
          </div>
          <MarginArrow size="lg" className="hidden rotate-[8deg] opacity-60 md:block" />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {designDecisions.map((decision) => (
            <article key={decision.number} className="paper-card relative overflow-hidden p-6 md:p-7">
              <span className="font-lab text-5xl font-semibold text-cyan/16">
                {decision.number}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-ink">
                {decision.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">{decision.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="playbook" className="scroll-mt-20 pt-24">
        <KnowledgeGovernancePlaybook />
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-note relative overflow-hidden p-7 md:p-10">
          <NotebookHighlight
            size="lg"
            className="absolute right-6 top-6 rotate-[-7deg] opacity-25"
          />
          <p className="lab-label text-[#087b8b]">Work sample boundary</p>
          <p className="field-heading mt-3 max-w-5xl text-2xl text-[var(--paper-ink)] md:text-3xl">
            This independent simulation shows how I structure knowledge governance
            and documentation workflows. It does not represent an employer&apos;s
            publishing policy, retention schedule, content inventory, or production environment.
          </p>
        </div>
      </section>
    </main>
  );
}
