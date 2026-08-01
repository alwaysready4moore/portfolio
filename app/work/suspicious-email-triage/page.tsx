import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { SuspiciousEmailPlaybook } from "./SuspiciousEmailPlaybook";

export const metadata: Metadata = {
  title: "Suspicious email triage playbook | AlwaysReady4Moore",
  description:
    "A public-safe technical writing sample for investigating suspicious email, assigning severity, escalating cases, and recording decisions.",
};

const proofStrip = [
  {
    label: "My role",
    value:
      "Technical writer, workflow designer, information architect, and interaction designer",
  },
  {
    label: "Audience",
    value:
      "Security analysts, service desk specialists, and developing incident responders",
  },
  {
    label: "Artifact",
    value:
      "Interactive playbook, header-analysis reference, and printable quick guide",
  },
  {
    label: "Focus",
    value:
      "Evidence-led decisions, consistent escalation, and defensible case notes",
  },
];

const designDecisions = [
  {
    number: "01",
    title: "Start with evidence, not suspicion",
    description:
      "The workflow separates evidence collection from judgment, so an urgent tone or alarming display name does not decide the case.",
  },
  {
    number: "02",
    title: "Put severity after analysis",
    description:
      "Assign risk after reviewing sender context, authentication, links, attachments, and recipient actions.",
  },
  {
    number: "03",
    title: "Keep the authority boundary visible",
    description:
      "The sample teaches a repeatable method and keeps approved incident-response procedures authoritative.",
  },
  {
    number: "04",
    title: "Support scanning and deep work",
    description:
      "Experienced analysts can scan the quick reference. Newer analysts can open explanations and examples.",
  },
];

function MailShieldMark() {
  return (
    <svg
      viewBox="0 0 180 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Envelope protected by an investigation shield"
    >
      <rect x="17" y="30" width="116" height="82" rx="18" fill="#F8FBFF" />
      <path
        d="M26 45L75 82L124 45"
        stroke="#071014"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 101L58 72M125 101L93 72"
        stroke="#071014"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M122 62L160 74V101C160 121 145 135 122 143C99 135 84 121 84 101V74L122 62Z"
        fill="#071014"
        stroke="#27D9FF"
        strokeWidth="5"
      />
      <path
        d="M106 102L117 113L140 88"
        stroke="#F8FBFF"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="151" cy="38" r="7" fill="#27D9FF" />
      <path d="M151 18V9M151 67V58M171 38H162M140 38H131" stroke="#27D9FF" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function SuspiciousEmailTriagePage() {
  return (
    <main className="pb-24">
      <SiteHeader />

      <section className="lab-shell pt-12 md:pt-20">
        <Link
          href="/work"
          className="focus-ring inline-flex items-center gap-2 font-lab text-xs font-semibold uppercase tracking-[0.1em] text-muted transition hover:text-cyan"
        >
          <span aria-hidden="true">←</span> Back to work
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

            <p className="lab-label mt-8 text-cyan">Documentation and workflow design</p>
            <h1 className="display-heading mt-4 max-w-5xl text-5xl text-ink sm:text-6xl md:text-7xl">
              Suspicious Email
              <span className="headline-signal block">Triage Playbook</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              A guide for collecting evidence, assessing reported email, assigning
              severity, escalating consistently, and recording a decision another
              analyst can understand.
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
              <MailShieldMark />
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
              Standardize how analysts investigate the same report
            </h2>
          </div>
          <div className="paper-note relative p-7 md:p-9">
            <NotebookHighlight
              size="lg"
              className="absolute right-5 top-5 rotate-[-8deg] opacity-25"
            />
            <p className="field-heading text-2xl text-[var(--paper-ink)] md:text-3xl">
              A reported message may be harmless spam, a credential lure, malware,
              or the first sign of account compromise. The playbook gives analysts
              evidence-based steps instead of relying on “looks weird.”
            </p>
          </div>
        </div>
      </section>

      <section id="documentation-decisions" className="lab-shell scroll-mt-28 pt-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="lab-label text-cyan">Documentation decisions</p>
            <h2 className="display-heading mt-4 max-w-3xl text-4xl text-ink md:text-5xl">
              Use the page structure to support the instruction
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
        <SuspiciousEmailPlaybook />
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-note relative overflow-hidden p-7 md:p-10">
          <NotebookHighlight
            size="lg"
            className="absolute right-6 top-6 rotate-[-7deg] opacity-25"
          />
          <p className="lab-label text-[#087b8b]">Work sample boundary</p>
          <p className="field-heading mt-3 max-w-5xl text-2xl text-[var(--paper-ink)] md:text-3xl">
            This independent portfolio simulation shows my approach to technical writing,
            workflow documentation, information architecture, and security-aware
            communication. It does not reproduce a private employer playbook or
            replace approved incident-response procedures.
          </p>
        </div>
      </section>
    </main>
  );
}
