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
  title: "Aegis Case Study | Marquetta Moore",
  description:
    "A technical case study for Aegis, a five-day AI creative intelligence prototype built with Next.js, TypeScript, Gemini, Firecrawl, and Zod. The system uses structured outputs, validation, stage-level fallbacks, and human review boundaries.",
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
    title: "Build something useful for media buying.",
    body: "Aegis was built in response to a public challenge asking applicants to create a working tool that could deliver practical value to a media-buying team.",
    tone: "signal" as const,
  },
  {
    label: "Problem choice",
    title: "Creative strategy carries repeated research drag.",
    body: "Teams need to understand competitor positioning, offers, hooks, claims, audience assumptions, and landing-page logic quickly enough to turn the signal into useful direction.",
    tone: "verified" as const,
  },
  {
    label: "Build response",
    title: "Aegis turns source material into reviewable direction.",
    body: "The prototype extracts source material, structures the strategy, generates campaign concepts, and adds a separate review layer for policy-risk signals and lower-risk wording.",
    tone: "experiment" as const,
  },
];

const problemCards = [
  {
    label: "Research",
    title: "Competitor pages contain useful signal.",
    body: "Landing pages reveal audience assumptions, positioning, feature priorities, proof points, emotional hooks, and conversion logic, but reading them consistently takes time.",
    tone: "signal" as const,
  },
  {
    label: "Creative",
    title: "AI-generated ideas still need constraints.",
    body: "Unstructured model output can sound polished while staying generic. Aegis keeps ideation connected to extracted source material and an explicit response shape.",
    tone: "experiment" as const,
  },
  {
    label: "Risk",
    title: "Review needs a visible surface.",
    body: "Claims, promises, urgency, personal attributes, and other sensitive language need deliberate review before confident copy reaches an audience.",
    tone: "warning" as const,
  },
];

const constraints = [
  "The prototype had to be conceived, built, documented, and deployed in five days.",
  "The workflow needed to demonstrate more than a single chatbot call wrapped in a form.",
  "Model output had to follow predictable contracts so the interface could validate and render it safely.",
  "A failed external service or model stage could not erase every valid result from the run.",
  "The system needed explicit boundaries around risk review, human judgment, and legal or platform approval.",
  "API credentials and service calls needed to remain server-side.",
];

const architectureSteps = [
  {
    step: "01",
    title: "Source input",
    body: "The user provides a landing-page URL or pastes source text manually. Manual input also acts as a practical bypass when extraction is unavailable.",
    badge: "Browser",
    tone: "signal" as const,
  },
  {
    step: "02",
    title: "Extraction",
    body: "Firecrawl retrieves usable page content when a URL is supplied. The extracted text becomes the shared source for the analysis stages.",
    badge: "Server + external API",
    tone: "verified" as const,
  },
  {
    step: "03",
    title: "Spyglass task",
    body: "A focused Gemini task identifies offer, audience, positioning, claims, hooks, calls to action, objections, and creative opportunities.",
    badge: "Gemini task 1",
    tone: "signal" as const,
  },
  {
    step: "04",
    title: "Schema validation",
    body: "Zod validates the analysis before the application accepts it. Invalid output is rejected instead of being treated as trustworthy UI data.",
    badge: "Typed contract",
    tone: "verified" as const,
  },
  {
    step: "05",
    title: "Concept generation",
    body: "A second Gemini task receives the structured strategy and produces five campaign concepts. The application verifies the required ad count.",
    badge: "Gemini task 2",
    tone: "experiment" as const,
  },
  {
    step: "06",
    title: "Shield review",
    body: "A third Gemini task checks the concepts against a twelve-category risk checklist and suggests lower-risk alternatives for review.",
    badge: "Gemini task 3",
    tone: "warning" as const,
  },
  {
    step: "07",
    title: "Correctness checks",
    body: "The application validates Shield output and confirms that a flagged phrase actually appears in the associated concept before displaying it.",
    badge: "Application invariant",
    tone: "verified" as const,
  },
  {
    step: "08",
    title: "Reviewable UI state",
    body: "Valid results remain visible stage by stage. Status messages and fallback explanations tell the reviewer what succeeded, what failed, and what still requires judgment.",
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
    title: "Designed around inspection.",
    body: "The interface separates source analysis, generated concepts, risk flags, and suggested rewrites so a reviewer can follow the reasoning path instead of receiving one opaque block of output.",
    tone: "signal" as const,
  },
  {
    label: "Contracts",
    title: "Schemas define what the model owes the product.",
    body: "Zod schemas make every AI stage easier to validate, display, debug, and extend. TypeScript types are derived from those schemas rather than maintained separately.",
    tone: "verified" as const,
  },
  {
    label: "Orchestration",
    title: "Small jobs, explicit dependencies.",
    body: "Aegis uses separate tasks for strategic analysis, concept generation, and risk review. Each stage receives only the context it needs and produces an output the next stage can inspect.",
    tone: "experiment" as const,
  },
  {
    label: "Reliability",
    title: "Failure is treated as a product state.",
    body: "Independent stage fallbacks prevent one provider or parsing failure from destroying an otherwise useful run. Specific status messages explain what remains available.",
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
    title: "AI gets better when the task has shape.",
    body: "Aegis works because each stage has a defined job, a typed output contract, and a visible review point.",
    tone: "signal" as const,
  },
  {
    title: "Reliability belongs in the experience.",
    body: "Provider errors, malformed JSON, and partial completion are normal AI-product conditions. The interface should explain them instead of pretending they do not happen.",
    tone: "warning" as const,
  },
  {
    title: "Human review needs product support.",
    body: "A human-in-the-loop claim means more when the interface shows source context, risk signals, alternatives, and clear places to accept, reject, or revise the output.",
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

export default function AegisCaseStudyPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <Link
          href="/work"
          className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
        >
          ← Back to work
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <BrandBadge tone="signal" icon="spark">
                AI product case study
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
              Aegis is a four-stage creative intelligence pipeline that turns
              competitor landing pages into structured strategy, campaign
              concepts, and policy-risk review.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              I built the working prototype independently in five days for the
              It&apos;s Today Media build challenge. The system uses separate
              model tasks, typed response contracts, invariant checks, and
              graceful stage-level fallbacks so the output is easier to inspect
              and safer to build on.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <BrandBadge tone="quiet" icon="none">
                AI Product Development
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
                Risk Review
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
              The short version
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              The project is technically stronger than a simple AI wrapper.
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
              protects server-side credentials, and preserves valid earlier
              results when a later stage fails.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Origin"
          title="Built as a response to a real media-buying workflow."
          description="The brief asked for a useful working tool. I chose a problem where competitor research, creative direction, and review pressure overlap."
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
          title="The product in context."
          description="The live prototype exposes the full path from source input to strategic analysis, generated concepts, and a separate risk-review surface."
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
          kicker="Problem"
          title="Fast output can still be ungrounded, malformed, or risky."
          description="The difficult part is not producing more copy. It is preserving source context, predictable structure, and a visible path for human review."
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
          title="The useful version needed speed, contracts, and honest limits."
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
          title="A staged pipeline with validation between model calls."
          description="Each stage has a narrower job, a defined output shape, and its own failure behavior. That makes the system easier to inspect, debug, and extend."
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
        <div className="paper-card overflow-hidden">
          <div className="border-b border-[var(--border)] bg-white/[0.035] p-6 md:p-8">
            <BrandBadge tone="signal" icon="spark">
              Technical snapshot
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              The implementation decisions behind the interface.
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
          title="Product thinking carried through the implementation."
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
          title="A partial failure should not become a total failure."
          description="AI applications depend on external services, parsing, quotas, and nondeterministic output. Aegis treats those conditions as part of the product experience."
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
              What I check before calling an output useful.
            </h2>

            <p className="mt-5 leading-7 text-muted">
              This prototype does not yet claim production-grade benchmark
              results. These are the practical criteria I use to inspect its
              behavior and guide the next evaluation pass.
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
              Source traceability still needs a stronger interface.
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              The current prototype keeps each stage grounded in supplied source
              material, but it does not yet map every strategic finding or
              generated claim back to a precise page passage.
            </p>

            <p className="leading-8">
              The next version would let a reviewer expand a claim to see the
              supporting excerpt, source URL, relevant page section, and review
              status before using the output downstream.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Lessons"
          title="What this project shows about how I build AI products."
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
              From resilient prototype to stronger reviewer workflow.
            </h2>
          </div>

          <div className="grid gap-4 text-muted">
            <p className="leading-8">
              The next version would add saved projects, side-by-side competitor
              comparisons, source-linked evidence, reusable brand and risk
              rules, and explicit reviewer actions for accepting, rejecting, or
              revising generated concepts.
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
            Useful AI work depends on explicit contracts, visible failure
            states, human review, and an honest path from source material to
            decision.
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
