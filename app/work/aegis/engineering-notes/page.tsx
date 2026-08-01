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
  title: "Aegis engineering notes | Marquetta Moore",
  description:
    "Technical notes for Aegis, including architecture, validation, failure handling, scope, evaluation, and implementation.",
};

const liveProjectUrl = "https://aegisci.app";
const githubUrl = "https://github.com/alwaysready4moore/aegis";
const challengeUrl = "https://www.itstoday.media/";

const projectSnapshot = [
  {
    label: "My role",
    value:
      "Product concept, architecture, interface, implementation, and documentation",
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
    value: "Deployed working prototype",
  },
];


const demoPaths = [
  {
    label: "Sample analysis",
    title: "Show the full workflow without external services",
    body:
      "A fixed sample runs the complete pipeline immediately, even when external services are unavailable.",
    tone: "signal" as const,
  },
  {
    label: "Manual page text",
    title: "Bypass extraction for testing or recovery",
    body:
      "A reviewer can paste page copy and still run Spyglass, concept generation, and Shield.",
    tone: "verified" as const,
  },
  {
    label: "Live URL analysis",
    title: "Run the live pipeline",
    body:
      "A competitor URL runs through extraction, analysis, five-concept generation, and Shield review with a status for each stage.",
    tone: "experiment" as const,
  },
];

const guardrails = [
  {
    label: "Validated outputs",
    title: "Validate every model response before use",
    body:
      "Zod schemas define the required output for each AI stage. The interface rejects data that does not match the schema.",
    tone: "verified" as const,
  },
  {
    label: "Application invariants",
    title: "Check product rules in application code",
    body:
      "Aegis checks that generation returns five concepts and that each flagged phrase appears in its concept.",
    tone: "signal" as const,
  },
  {
    label: "Visible provenance",
    title: "Show how each stage ran",
    body:
      "Pipeline badges mark live, manual, skipped, and fallback states so reviewers know where each result came from.",
    tone: "experiment" as const,
  },
  {
    label: "Secure configuration",
    title: "Secrets stay on the server",
    body:
      "Gemini and Firecrawl credentials are stored in server-side environment variables and are never exposed through NEXT_PUBLIC_ configuration.",
    tone: "verified" as const,
  },
  {
    label: "Graceful degradation",
    title: "Preserve useful results after a failure",
    body:
      "Manual input, sample data, stage-specific errors, and preserved earlier results keep the run inspectable when a provider fails.",
    tone: "warning" as const,
  },
  {
    label: "Honest limits",
    title: "Shield is risk triage, not a guarantee",
    body:
      "The interface presents Shield as a heuristic review layer that supports human judgment. It does not promise legal compliance or platform approval.",
    tone: "warning" as const,
  },
];

const intentionalScope = [
  {
    title: "Authentication",
    body:
      "Not required to prove the core analysis, generation, and review workflow.",
  },
  {
    title: "Billing",
    body:
      "Monetization would have added implementation weight without improving the MVP’s central product signal.",
  },
  {
    title: "Database and saved history",
    body:
      "Persistent projects matter later, but they were not necessary to validate the end-to-end pipeline in the five-day build window.",
  },
  {
    title: "Ad-platform integrations",
    body:
      "Direct publishing would raise operational and policy complexity before the product had earned that level of automation.",
  },
];

const technicalDetails = [
  {
    label: "Frontend",
    value: "Next.js + TypeScript",
  },
  {
    label: "AI layer",
    value: "Gemini",
  },
  {
    label: "Source extraction",
    value: "Firecrawl + manual-text bypass",
  },
  {
    label: "Validation",
    value: "Zod schemas at each AI stage",
  },
  {
    label: "Deployment",
    value: "GitHub + Vercel",
  },
  {
    label: "Secret handling",
    value: "Server-side environment variables",
  },
  {
    label: "Pipeline states",
    value: "Live, manual, skipped, or fallback",
  },
  {
    label: "Demo resilience",
    value: "Sample fixture + manual-text override",
  },
];

const screenshots = [
  {
    title: "Competitive Pipeline",
    description:
      "The main dashboard where a reviewer starts an analysis, selects a platform, and provides either a competitor URL or source text.",
    image: "/screenshots/aegis/aegis-01-input.png",
  },
  {
    title: "Spyglass Analysis",
    description:
      "Structured analysis of the competitor offer, audience, hooks, claims, calls to action, emotional triggers, and creative opportunities.",
    image: "/screenshots/aegis/aegis-02-sample-results.png",
  },
  {
    title: "Shield Review",
    description:
      "A separate review stage that surfaces phrases that may deserve closer human attention and explains the associated risk signal.",
    image: "/screenshots/aegis/aegis-03-shield-review-risk.png",
  },
  {
    title: "Lower-Risk Suggestions",
    description:
      "The final review state preserves the original concept while proposing lower-risk language for a human reviewer to accept, revise, or reject.",
    image: "/screenshots/aegis/aegis-04-shield-review-safe.png",
  },
];

const originCards = [
  {
    label: "Challenge brief",
    title: "Build a working tool for media buyers",
    body: "A public build challenge asked applicants to create a working tool for a media-buying team.",
    tone: "signal" as const,
  },
  {
    label: "Problem choice",
    title: "Competitor research slows creative strategy",
    body: "Teams need to review competitor positioning, offers, hooks, claims, audiences, and landing-page logic before they can plan a campaign.",
    tone: "verified" as const,
  },
  {
    label: "Build response",
    title: "Aegis creates structured, reviewable campaign direction",
    body: "The prototype extracts page content, structures the findings, generates campaign concepts, and runs a separate risk review with lower-risk wording.",
    tone: "experiment" as const,
  },
];

const problemCards = [
  {
    label: "Research",
    title: "Competitor pages contain useful evidence",
    body: "Landing pages reveal audience assumptions, positioning, feature priorities, proof points, hooks, and conversion logic. Reviewing them consistently takes time.",
    tone: "signal" as const,
  },
  {
    label: "Creative",
    title: "Give concept generation a defined input and output",
    body: "Unstructured output can sound polished and still be generic. Aegis grounds concepts in extracted page content and a required response shape.",
    tone: "experiment" as const,
  },
  {
    label: "Risk",
    title: "Give risk review its own visible stage",
    body: "Claims, promises, urgency, personal attributes, and other sensitive language require review before use.",
    tone: "warning" as const,
  },
];

const constraints = [
  "The prototype had to be conceived, built, documented, and deployed in five days.",
  "The workflow needed several distinct stages, not a chatbot call inside a form.",
  "Model output had to follow predictable contracts so the interface could validate and render it safely.",
  "A failed external service or model stage could not erase every valid result from the run.",
  "The system needed explicit boundaries around risk review, human judgment, and legal or platform approval.",
  "API credentials and service calls needed to remain server-side.",
];

const architectureSteps = [
  {
    step: "01",
    title: "Source input",
    body: "The user enters a page URL or pastes source text. Pasted text also bypasses extraction when needed.",
    badge: "Browser",
    tone: "signal" as const,
  },
  {
    step: "02",
    title: "Extraction",
    body: "Firecrawl retrieves page content from a URL. That text becomes the shared source for later stages.",
    badge: "Server + external API",
    tone: "verified" as const,
  },
  {
    step: "03",
    title: "Spyglass task",
    body: "A Gemini task identifies the offer, audience, positioning, claims, hooks, calls to action, objections, and creative opportunities.",
    badge: "Gemini task 1",
    tone: "signal" as const,
  },
  {
    step: "04",
    title: "Schema validation",
    body: "Zod validates the analysis before the application displays it. Invalid output is rejected.",
    badge: "Typed contract",
    tone: "verified" as const,
  },
  {
    step: "05",
    title: "Concept generation",
    body: "A second Gemini task receives the structured findings and produces five campaign concepts. The application verifies the count.",
    badge: "Gemini task 2",
    tone: "experiment" as const,
  },
  {
    step: "06",
    title: "Shield review",
    body: "A third Gemini task checks the concepts against 12 risk categories and suggests lower-risk alternatives.",
    badge: "Gemini task 3",
    tone: "warning" as const,
  },
  {
    step: "07",
    title: "Correctness checks",
    body: "The application validates Shield output and confirms that each flagged phrase appears in its concept.",
    badge: "Application invariant",
    tone: "verified" as const,
  },
  {
    step: "08",
    title: "Reviewable UI state",
    body: "Valid results stay visible. Status messages explain what succeeded, what failed, and what still needs review.",
    badge: "Human review",
    tone: "signal" as const,
  },
];

const reliabilityScenarios = [
  {
    title: "Extraction fails",
    expected:
      "The reviewer can provide source text manually instead of losing access to the rest of the workflow.",
  },
  {
    title: "A model returns malformed output",
    expected:
      "The relevant Zod contract rejects the response and the application shows a specific fallback rather than rendering uncertain data.",
  },
  {
    title: "Concept generation returns the wrong count",
    expected:
      "The application rejects the result because the five-concept invariant is part of the product contract.",
  },
  {
    title: "Shield fails after earlier stages succeed",
    expected:
      "The valid analysis and campaign concepts remain available while the UI explains that the risk-review stage could not complete.",
  },
];

const buildCards = [
  {
    label: "Interface",
    title: "Make each stage easy to inspect",
    body: "The interface separates source analysis, concepts, risk flags, and rewrites so reviewers can inspect each stage.",
    tone: "signal" as const,
  },
  {
    label: "Contracts",
    title: "Use schemas as the contract between the model and the product",
    body: "Zod schemas validate each AI stage. TypeScript types come from the same schemas, which reduces duplicate definitions.",
    tone: "verified" as const,
  },
  {
    label: "Orchestration",
    title: "Give each task one job and a clear dependency",
    body: "Aegis separates analysis, concept generation, and risk review. Each stage receives the context it needs and returns an output the next stage can inspect.",
    tone: "experiment" as const,
  },
  {
    label: "Reliability",
    title: "Treat failure as a visible product state",
    body: "Stage-specific fallbacks keep one provider or parsing error from erasing useful results. Status messages explain what remains available.",
    tone: "warning" as const,
  },
];

const evaluationCriteria = [
  "Did each AI stage return schema-valid output?",
  "Did generation return exactly five campaign concepts?",
  "Were the concepts meaningfully distinct rather than cosmetic rewrites?",
  "Could strategic findings be traced back to the supplied source material?",
  "Did Shield identify risky language without flagging phrases absent from the concept?",
  "Did the fallback state preserve valid earlier-stage results?",
];

const lessons = [
  {
    title: "Define the task before calling the model",
    body: "Each stage has a defined job, a typed output contract, and a visible review point.",
    tone: "signal" as const,
  },
  {
    title: "Show reliability and failure in the interface",
    body: "Provider errors, malformed JSON, and partial completion are expected conditions. The interface explains them.",
    tone: "warning" as const,
  },
  {
    title: "Give reviewers the context needed to judge output",
    body: "The interface shows source context, risk signals, alternatives, and clear places to accept, reject, or revise output.",
    tone: "verified" as const,
  },
];

function SectionTitle({
  kicker,
  title,
  description,
  tone = "quiet",
}: {
  kicker: string;
  title: string;
  description?: string;
  tone?: BrandBadgeTone;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <BrandBadge tone={tone} icon="spark">
          {kicker}
        </BrandBadge>

        <h2 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
          {title}
        </h2>
      </div>

      {description ? (
        <p className="max-w-xl leading-7 text-muted md:text-right">
          {description}
        </p>
      ) : null}
    </div>
  );
}

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

function TextCard({
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

function ConstraintCard({ children }: { children: string }) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <p className="grid grid-cols-[auto_1fr] gap-3 text-muted">
        <span aria-hidden="true" className="font-lab text-cyan">
          ✓
        </span>
        <span className="leading-7">{children}</span>
      </p>
    </div>
  );
}

function ArchitectureCard({
  step,
  title,
  body,
  badge,
  tone,
}: {
  step: string;
  title: string;
  body: string;
  badge: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <div className="flex items-start justify-between gap-4">
        <BrandBadge tone={tone} icon="dot">
          {badge}
        </BrandBadge>

        <span aria-hidden="true" className="font-lab text-2xl text-cyan/60">
          {step}
        </span>
      </div>

      <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-muted">{body}</p>
    </article>
  );
}

function ReliabilityCard({
  title,
  expected,
}: {
  title: string;
  expected: string;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <BrandBadge tone="warning" icon="dot">
        Failure scenario
      </BrandBadge>

      <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.035em] text-ink">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-muted">{expected}</p>
    </article>
  );
}

export default function AegisEngineeringNotesPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <Link
          href="/work/aegis"
          className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
        >
          ← Back to Aegis overview
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <BrandBadge tone="signal" icon="spark">
                Technical deep dive
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Deployed working prototype
              </BrandBadge>
            </div>

            <div className="mt-8">
              <h1 className="flex justify-center">
                <img
                  src="/logos/aegis-logo.png"
                  alt="Aegis Creative Intelligence Pipeline"
                  className="h-36 w-auto object-contain md:h-44 lg:h-52"
                />
              </h1>

              <p className="mt-6 text-center lab-label text-muted">
                Structured AI workflow · validation · stage-level fallbacks ·
                human review
              </p>
            </div>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-muted">
              Aegis is an AI-assisted creative research pipeline for media buyers.
              It analyzes competitor pages, generates five campaign concepts,
              and runs a separate risk review.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              I built the working prototype independently in five days for the
              It&apos;s Today Media build challenge. The application validates
              model output, checks product rules in code, protects secrets,
              shows pipeline state, and preserves earlier results when a later
              stage fails.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <BrandBadge tone="quiet" icon="none">
                AI product development
              </BrandBadge>
              <BrandBadge tone="quiet" icon="none">
                Next.js
              </BrandBadge>
              <BrandBadge tone="quiet" icon="none">
                Gemini
              </BrandBadge>
              <BrandBadge tone="quiet" icon="none">
                Firecrawl
              </BrandBadge>
              <BrandBadge tone="quiet" icon="none">
                Zod
              </BrandBadge>
              <BrandBadge tone="quiet" icon="none">
                Risk review
              </BrandBadge>
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
                Inspect the code
              </a>

              <a
                href={challengeUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                View challenge brief
              </a>
            </div>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl"
            />

            <div className="relative">
              <BrandBadge tone="signal" icon="spark">
                Project proof strip
              </BrandBadge>

              <div className="mt-5 grid gap-4">
                {projectSnapshot.map((item) => (
                  <DetailCard
                    key={item.label}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>

              <div className="mt-5 rounded-3xl border border-cyan/15 bg-cyan/[0.045] p-5">
                <p className="lab-label text-cyan">Product boundary</p>

                <p className="mt-3 text-sm leading-6 text-muted">
                  Aegis performs heuristic policy-risk screening. It does not
                  provide legal advice, guarantee platform approval, or replace
                  current policy guidance and human judgment.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.7fr_1fr]">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />

          <div>
            <BrandBadge tone="signal" icon="spark">
              Engineering summary
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Build the guardrails into the product
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              Aegis separates extraction, strategic analysis, concept
              generation, and risk review into distinct jobs with explicit
              contracts between them.
            </p>

            <p className="leading-8">
              The application validates model output, rejects malformed data,
              verifies important product rules outside the prompt, protects
              server-side credentials, reports how each stage ran, and
              preserves valid earlier results when a later stage fails.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Origin"
          title="Address a real media-buying workflow"
          description="The brief asked for a working tool. I focused on repeated competitor research and campaign review."
          tone="signal"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {originCards.map((card) => (
            <TextCard
              key={card.title}
              label={card.label}
              title={card.title}
              body={card.body}
              tone={card.tone}
            />
          ))}
        </div>
      </section>

      <section id="screenshots" className="lab-shell pt-20">
        <SectionTitle
          kicker="Working interface"
          title="See the product in context"
          description="The live prototype shows source input, structured analysis, generated concepts, and a separate risk-review stage."
          tone="signal"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {screenshots.map((screenshot) => (
            <ScreenshotCard
              key={screenshot.title}
              title={screenshot.title}
              description={screenshot.description}
              image={screenshot.image}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Three demo paths"
          title="Keep the product inspectable when services are unavailable"
          description="Aegis can run a fixed sample, use pasted text, or analyze a live URL."
          tone="signal"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {demoPaths.map((path) => (
            <TextCard
              key={path.title}
              label={path.label}
              title={path.title}
              body={path.body}
              tone={path.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Problem"
          title="Fast output can be ungrounded, malformed, or risky"
          description="The product must preserve source context, return predictable structure, and support human review."
          tone="warning"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {problemCards.map((card) => (
            <TextCard
              key={card.title}
              label={card.label}
              title={card.title}
              body={card.body}
              tone={card.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Constraints"
          title="The five-day build needed clear contracts and limits"
          tone="verified"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {constraints.map((constraint) => (
            <ConstraintCard key={constraint}>{constraint}</ConstraintCard>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Technical architecture"
          title="Validate each stage before starting the next"
          description="Each stage has one job, a defined output shape, and its own failure behavior."
          tone="signal"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {architectureSteps.map((item) => (
            <ArchitectureCard
              key={item.step}
              step={item.step}
              title={item.title}
              body={item.body}
              badge={item.badge}
              tone={item.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Guardrails around the model"
          title="Do not trust model output by default"
          description="The system validates structure, checks product rules, protects credentials, shows provenance, and stops uncertain output from moving downstream."
          tone="verified"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guardrails.map((guardrail) => (
            <TextCard
              key={guardrail.title}
              label={guardrail.label}
              title={guardrail.title}
              body={guardrail.body}
              tone={guardrail.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card overflow-hidden">
          <div className="border-b border-[var(--border)] bg-white/[0.035] p-6 md:p-8">
            <BrandBadge tone="signal" icon="spark">
              Technical snapshot
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Review the implementation behind the interface
            </h2>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-4">
            {technicalDetails.map((item) => (
              <DetailCard
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="What I built"
          title="Apply product rules in the implementation"
          tone="experiment"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {buildCards.map((card) => (
            <TextCard
              key={card.title}
              label={card.label}
              title={card.title}
              body={card.body}
              tone={card.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Failure tour"
          title="Preserve valid work when one stage fails"
          description="External services, parsing, quotas, and variable output can fail. Aegis shows those failures and preserves available results."
          tone="warning"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {reliabilityScenarios.map((scenario) => (
            <ReliabilityCard
              key={scenario.title}
              title={scenario.title}
              expected={scenario.expected}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="MVP scope"
          title="Defer features that do not test the core workflow"
          description="The five-day prototype tested one workflow: competitor page in, reviewed campaign concepts out. Other features were deferred."
          tone="experiment"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {intentionalScope.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
            >
              <BrandBadge tone="quiet" icon="dot">
                Deferred by design
              </BrandBadge>

              <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.035em] text-ink">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.75fr_1fr]">
          <NotebookHighlight
            size="lg"
            className="absolute right-7 top-7 rotate-[-8deg] opacity-20"
          />

          <div>
            <BrandBadge tone="verified" icon="spark">
              Evaluation approach
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Check output before calling it useful
            </h2>

            <p className="mt-5 leading-7 text-muted">
              The prototype does not claim production benchmark results. These
              criteria guide manual review and the next evaluation pass.
            </p>
          </div>

          <ul className="grid gap-3">
            {evaluationCriteria.map((criterion) => (
              <li
                key={criterion}
                className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-[var(--border)] bg-white/[0.035] p-4 text-muted"
              >
                <span aria-hidden="true" className="font-lab text-cyan">
                  ✓
                </span>
                <span className="leading-6">{criterion}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.75fr_1fr]">
          <NotebookPaperclip
            size="lg"
            className="absolute right-7 top-7 rotate-12 opacity-20"
          />

          <div>
            <BrandBadge tone="warning" icon="spark">
              Known limitation
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Improve source traceability in the next version
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              The current prototype uses supplied source material, but it does not
              link every finding or generated claim to a specific page passage.
            </p>

            <p className="leading-8">
              The next version would link each claim to a source excerpt, URL, page
              section, and review status.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Lessons"
          title="How I build AI products"
          tone="quiet"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <article
              className="paper-card relative overflow-hidden p-6"
              key={lesson.title}
            >
              <NotebookPaperclip
                size="md"
                className="absolute right-5 top-5 rotate-12 opacity-20"
              />

              <BrandBadge tone={lesson.tone} icon="dot">
                Lesson
              </BrandBadge>

              <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
                {lesson.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">{lesson.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.8fr_1fr]">
          <NotebookHighlight
            size="lg"
            className="absolute right-7 top-7 rotate-[-8deg] opacity-20"
          />

          <div>
            <BrandBadge tone="experiment" icon="spark">
              Next iteration
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Strengthen the reviewer workflow in the next version
            </h2>
          </div>

          <div className="grid gap-4 text-muted">
            <p className="leading-8">
              The next version would add the features intentionally deferred
              from the MVP: saved projects, side-by-side competitor comparisons,
              source-linked evidence, reusable brand and risk rules, and
              explicit reviewer actions for accepting, rejecting, or revising
              generated concepts.
            </p>

            <p className="leading-8">
              I would also formalize an evaluation set for grounding, creative
              distinctness, false-positive and false-negative Shield behavior,
              latency, and approximate cost per complete analysis.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            I built the full workflow around the model: validated outputs,
            failure handling, visible state, secure configuration, stated
            limits, and a deployed interface.
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

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              Inspect the code
            </a>

            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              View all work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
