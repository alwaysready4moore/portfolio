import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { AccessProvisioningPlaybook } from "./AccessProvisioningPlaybook";

export const metadata: Metadata = {
  title: "Access request and provisioning playbook",
  description:
    "An interactive technical writing sample for routing, approving, granting, removing, validating, and documenting workforce access.",
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
      "Service desk, IT operations, identity teams, system owners, and access approvers",
  },
  {
    label: "Artifact",
    value:
      "Interactive playbook, approval matrix, request router, and printable quick reference",
  },
  {
    label: "Focus",
    value:
      "Least privilege, clear approval ownership, complete handoffs, and audit-ready records",
  },
];

const designDecisions = [
  {
    number: "01",
    title: "Separate the decisions",
    description:
      "The workflow distinguishes identity, business need, system ownership, risk review, and fulfillment. One approval cannot stand in for all five.",
  },
  {
    number: "02",
    title: "Treat movers as adds and removals",
    description:
      "Role changes often collect access over time. The playbook makes removal part of the same request instead of leaving it for a later cleanup.",
  },
  {
    number: "03",
    title: "Put expiration into the grant",
    description:
      "Temporary and emergency access receive an end date when they are created. The control does not depend on someone remembering later.",
  },
  {
    number: "04",
    title: "Record the decision, not only the request",
    description:
      "The request record captures the need, tier, approvals, changes, validation, and next review so another person can reconstruct what happened.",
  },
];

function AccessControlMark() {
  return (
    <svg
      viewBox="0 0 190 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Access badge, key, and protected doorway"
    >
      <rect x="24" y="20" width="88" height="112" rx="18" fill="#F8FBFF" />
      <rect x="41" y="38" width="54" height="23" rx="7" fill="#071014" />
      <circle cx="68" cy="87" r="17" fill="#071014" />
      <path d="M48 119C51 103 59 97 68 97C77 97 85 103 88 119" fill="#071014" />
      <path d="M119 50H161V128H119" stroke="#27D9FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M119 88H148" stroke="#27D9FF" strokeWidth="7" strokeLinecap="round" />
      <circle cx="146" cy="88" r="5" fill="#071014" stroke="#27D9FF" strokeWidth="4" />
      <circle cx="133" cy="28" r="15" fill="#071014" stroke="#27D9FF" strokeWidth="5" />
      <path d="M145 38L164 57M158 51L169 40M166 59L176 49" stroke="#27D9FF" strokeWidth="6" strokeLinecap="round" />
      <path d="M133 21V35M126 28H140" stroke="#F8FBFF" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function AccessRequestProvisioningPage() {
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

            <p className="lab-label mt-8 text-cyan">Documentation and workflow design</p>
            <h1 className="display-heading mt-4 max-w-5xl text-5xl text-ink sm:text-6xl md:text-7xl">
              Access request and
              <span className="headline-signal block">provisioning playbook</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              A practical guide for verifying requests, applying least privilege,
              routing approvals, changing access, and keeping an audit-ready record.
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
              <AccessControlMark />
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
              A simple request can cross several owners and control boundaries
            </h2>
          </div>
          <div className="paper-note relative p-7 md:p-9">
            <NotebookHighlight
              size="lg"
              className="absolute right-5 top-5 rotate-[-8deg] opacity-25"
            />
            <p className="field-heading text-2xl text-[var(--paper-ink)] md:text-3xl">
              Access work fails when identity, business need, approval, risk, and
              fulfillment blur into one checkbox. A useful playbook shows who
              decides each part and what evidence belongs in the record.
            </p>
          </div>
        </div>
      </section>

      <section id="documentation-decisions" className="lab-shell scroll-mt-28 pt-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="lab-label text-cyan">Documentation decisions</p>
            <h2 className="display-heading mt-4 max-w-3xl text-4xl text-ink md:text-5xl">
              The page follows the control path
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
        <AccessProvisioningPlaybook />
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-note relative overflow-hidden p-7 md:p-10">
          <NotebookHighlight
            size="lg"
            className="absolute right-6 top-6 rotate-[-7deg] opacity-25"
          />
          <p className="lab-label text-[#087b8b]">Work sample boundary</p>
          <p className="field-heading mt-3 max-w-5xl text-2xl text-[var(--paper-ink)] md:text-3xl">
            This independent simulation shows how I structure documentation and workflow
            design. It does not represent an employer&apos;s access policy, role
            catalog, approval matrix, or production environment.
          </p>
        </div>
      </section>
    </main>
  );
}
