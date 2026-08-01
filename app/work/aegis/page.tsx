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
  title: "Aegis case study | Marquetta Moore",
  description:
    "A case study of Aegis, a five-day AI prototype with structured outputs, clear failure states, risk review, and human checkpoints.",
};

const liveProjectUrl = "https://aegisci.app";
const githubUrl = "https://github.com/alwaysready4moore/aegis";
const challengeUrl = "https://www.itstoday.media/";

const snapshot = [
  {
    label: "Role",
    value: "Product concept, UX, architecture, code, and documentation",
  },
  {
    label: "Team",
    value: "Independent build",
  },
  {
    label: "Build window",
    value: "5 days",
  },
  {
    label: "Status",
    value: "Deployed prototype",
  },
];

const screenshots = [
  {
    title: "Source input",
    description:
      "Reviewers can enter a competitor URL, paste source text, or run a saved sample without an external service.",
    image: "/screenshots/aegis/aegis-01-input.png",
  },
  {
    title: "Structured strategy",
    description:
      "Spyglass returns a consistent analysis of the offer, audience, hooks, claims, objections, and creative opportunities.",
    image: "/screenshots/aegis/aegis-02-sample-results.png",
  },
  {
    title: "Visible risk review",
    description:
      "Shield reviews generated copy separately and explains which phrases need closer attention.",
    image: "/screenshots/aegis/aegis-03-shield-review-risk.png",
  },
  {
    title: "Lower-risk alternatives",
    description:
      "Suggested rewrites keep the concept while the reviewer accepts, revises, or rejects the wording.",
    image: "/screenshots/aegis/aegis-04-shield-review-safe.png",
  },
];

const decisions = [
  {
    label: "Decision 01",
    title: "Give each AI stage a contract",
    body:
      "Aegis separates strategy, concept generation, and risk review. Zod validates each response before the interface uses it.",
    tone: "verified" as const,
  },
  {
    label: "Decision 02",
    title: "Treat failure as a product state",
    body:
      "Saved samples, manual input, stage-specific errors, and preserved results keep the workflow usable when extraction or a model stage fails.",
    tone: "warning" as const,
  },
  {
    label: "Decision 03",
    title: "Keep human review visible",
    body:
      "The interface shows source context, pipeline history, flagged language, and lower-risk options. Shield supports review; it does not promise legal or platform approval.",
    tone: "signal" as const,
  },
];

const pipeline = [
  {
    step: "01",
    title: "Extract",
    body: "Collect page content from a URL or manual source text.",
  },
  {
    step: "02",
    title: "Analyze",
    body: "Identify the offer, audience, positioning, hooks, and claims.",
  },
  {
    step: "03",
    title: "Generate",
    body: "Draft five campaign concepts from the validated analysis.",
  },
  {
    step: "04",
    title: "Review",
    body: "Flag policy risks and suggest lower-risk wording.",
  },
];

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <BrandBadge tone="quiet" icon="none">
        {label}
      </BrandBadge>
      <p className="mt-3 font-display text-xl font-bold leading-tight tracking-[-0.03em] text-ink">
        {value}
      </p>
    </article>
  );
}

function ScreenshotCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="paper-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
      <div className="border-b border-[var(--border)] bg-white/[0.035] p-3">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-night">
          <img
            src={image}
            alt={`${title} screenshot from Aegis`}
            className="aspect-[16/10] w-full object-cover object-top"
          />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <BrandBadge tone="signal" icon="dot">
            {title}
          </BrandBadge>
          <CyanSpark size="xs" className="opacity-70" />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      </div>
    </article>
  );
}

function DecisionCard({
  label,
  title,
  body,
  tone,
}: {
  label: string;
  title: string;
  body: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookHighlight
        size="lg"
        className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
      />
      <BrandBadge tone={tone} icon="dot">
        {label}
      </BrandBadge>
      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-muted">{body}</p>
    </article>
  );
}

export default function AegisCaseStudyPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <Link
          href="/work"
          className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
        >
          ← Back to selected work
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <BrandBadge tone="signal" icon="spark">
                Flagship AI product
              </BrandBadge>
              <BrandBadge tone="quiet" icon="dot">
                Five-day independent build
              </BrandBadge>
            </div>

            <h1 className="mt-8">
              <img
                src="/logos/aegis-logo.png"
                alt="Aegis Creative Intelligence Pipeline"
                className="h-36 w-auto object-contain md:h-44 lg:h-52"
              />
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-muted">
              Aegis analyzes competitor landing pages, drafts five campaign
              concepts, and reviews the copy for risk in a separate step.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              I built Aegis to handle malformed model output, failed extraction,
              and reviewer questions about source and risk. The workflow around
              the model matters as much as the generated copy.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Gemini", "Firecrawl", "Zod", "Risk review"].map(
                (tag) => (
                  <BrandBadge key={tag} tone="quiet" icon="none">
                    {tag}
                  </BrandBadge>
                ),
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={liveProjectUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-2xl border border-cyan/40 bg-cyan px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_32px_rgba(39,217,255,0.22)] transition hover:-translate-y-0.5"
              >
                Launch Aegis
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                View the code
              </a>
              <Link
                href="/work/aegis/engineering-notes"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                Read engineering notes
              </Link>
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
              <div className="mt-5 grid gap-4">
                {snapshot.map((item) => (
                  <DetailCard key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
              <div className="mt-5 rounded-3xl border border-cyan/15 bg-cyan/[0.045] p-5">
                <p className="lab-label text-cyan">What Shield does not do</p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Shield flags language for review. It does not guarantee platform
                  approval, provide legal advice, or replace current policy.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />
          <div>
            <BrandBadge tone="signal" icon="spark">
              Why I built it
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Creative teams need a faster first pass and a clear review path
            </h2>
          </div>
          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              Competitor pages contain useful information, but teams still need
              time to review positioning, claims, hooks, audience assumptions,
              and conversion logic.
            </p>
            <p className="leading-8">
              Aegis applies the same steps to each source and keeps concepts, risk
              flags, and errors visible for review.
            </p>
          </div>
        </div>
      </section>

      <section id="screenshots" className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="signal" icon="spark">
              Product walkthrough
            </BrandBadge>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-ink md:text-6xl">
              Review each stage of the workflow
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-muted md:text-right">
            The interface separates source input, analysis, concepts, and risk
            review instead of hiding them in one response.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {screenshots.map((screenshot) => (
            <ScreenshotCard key={screenshot.title} {...screenshot} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="verified" icon="spark">
              Key design decisions
            </BrandBadge>
            <h2 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-6xl">
              The controls are part of the product
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {decisions.map((decision) => (
            <DecisionCard key={decision.title} {...decision} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card overflow-hidden">
          <div className="border-b border-[var(--border)] p-6 md:p-8">
            <BrandBadge tone="experiment" icon="spark">
              Product pipeline
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Four stages with clear handoffs
            </h2>
          </div>
          <ol className="grid gap-4 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-4">
            {pipeline.map((item) => (
              <li
                key={item.step}
                className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
              >
                <span className="font-lab text-sm font-semibold text-cyan">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.035em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="paper-card relative overflow-hidden p-6 md:p-8">
            <NotebookPaperclip
              size="lg"
              className="absolute right-7 top-7 rotate-12 opacity-20"
            />
            <BrandBadge tone="warning" icon="spark">
              Current limitation
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              Source traceability needs more work
            </h2>
            <p className="mt-5 leading-8 text-muted">
              The prototype uses the supplied source, but it does not yet link
              every finding or generated claim to a specific passage.
            </p>
          </article>

          <article className="paper-card relative overflow-hidden p-6 md:p-8">
            <CyanSpark size="sm" className="absolute right-7 top-7 opacity-55" />
            <BrandBadge tone="experiment" icon="spark">
              Next iteration
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              Link review actions to the evidence
            </h2>
            <p className="mt-5 leading-8 text-muted">
              The next version would add source-linked excerpts, saved projects,
              side-by-side comparisons, reusable brand rules, and clear accept,
              revise, or reject actions.
            </p>
          </article>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <NotebookHighlight
            size="lg"
            className="absolute right-6 top-6 rotate-[-8deg] opacity-25"
          />
          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Aegis shows my AI product approach: define the task, validate the
            output, plan for failure, and keep review visible.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href={liveProjectUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Launch Aegis
            </a>
            <Link
              href="/work/aegis/engineering-notes"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              Read engineering notes
            </Link>
            <a
              href={challengeUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              View challenge brief
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
