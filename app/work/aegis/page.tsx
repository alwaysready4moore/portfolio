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
  title: "Aegis Case Study | AlwaysReady4Moore",
  description:
    "A case study for Aegis, an AI-assisted creative workflow prototype built in response to a media-buying build challenge. Aegis turns competitor landing pages into structured ad concepts, risk flags, and lower-risk rewrite suggestions.",
};

const liveProjectUrl = "https://aegisci.app";
const githubUrl = "https://github.com/alwaysready4moore/aegis";
const challengeUrl = "https://www.itstoday.media/";

const screenshots = [
  {
    title: "Competitive Pipeline",
    description:
      "The main Aegis dashboard where a user starts the competitor analysis workflow and chooses the ad platform.",
    image: "/screenshots/aegis/aegis-01-input.png",
  },
  {
    title: "Spyglass Analysis",
    description:
      "Structured competitor analysis showing offer, audience, hooks, claims, CTAs, emotional triggers, and creative opportunities.",
    image: "/screenshots/aegis/aegis-02-sample-results.png",
  },
  {
    title: "Shield Review",
    description:
      "Risk review showing flagged phrases, risk levels, and rewrite suggestions for higher-risk ad claims.",
    image: "/screenshots/aegis/aegis-03-shield-review-risk.png",
  },
  {
    title: "Safer Versions",
    description:
      "The final review state with lower-risk rewritten versions ready for human review, editing, and copy.",
    image: "/screenshots/aegis/aegis-04-shield-review-safe.png",
  },
];

const originCards = [
  {
    label: "Challenge brief",
    title: "Build something useful for media buying.",
    body:
      "Aegis was built in response to a public build challenge asking applicants to create a working tool that could deliver real value to a media buying team.",
    tone: "signal" as const,
  },
  {
    label: "Problem choice",
    title: "Creative strategy has repeated research drag.",
    body:
      "Media buying teams need to understand competitor positioning, offers, hooks, claims, audience assumptions, and landing-page logic quickly enough to act on it.",
    tone: "verified" as const,
  },
  {
    label: "Build response",
    title: "Aegis turns source material into reviewable direction.",
    body:
      "The prototype reads a competitor landing page, structures the strategic signal, generates ad concepts, and adds a review layer for risky claims and safer language.",
    tone: "experiment" as const,
  },
];

const pipeline = [
  {
    step: "01",
    title: "Read the source",
    body:
      "Aegis reads a competitor landing page and extracts the offer, audience, claims, positioning, calls to action, and likely strategic angle.",
    tone: "signal" as const,
  },
  {
    step: "02",
    title: "Structure the signal",
    body:
      "The tool turns the page into a structured analysis, keeping generated concepts connected to the source instead of drifting into generic copy.",
    tone: "verified" as const,
  },
  {
    step: "03",
    title: "Generate options",
    body:
      "Aegis produces multiple ad concepts from the structured read, giving the reviewer starting points with enough variation to compare.",
    tone: "experiment" as const,
  },
  {
    step: "04",
    title: "Flag risk",
    body:
      "A review layer surfaces risky claims, unsupported promises, exaggerated language, and places where human judgment should step in.",
    tone: "warning" as const,
  },
];

const constraints = [
  "Built quickly as a practical prototype with a deliberately scoped polish level.",
  "Needed to show AI workflow thinking beyond a chatbot wrapped in a form.",
  "Had to preserve human review around strategy, risk, and compliance-sensitive decisions.",
  "Needed structured outputs so the tool felt predictable, reviewable, and easier to extend.",
  "Needed a working demo, repo, and explanation of why this problem mattered.",
];

const buildDetails = [
  {
    label: "Frontend",
    value: "Next.js + TypeScript",
  },
  {
    label: "AI layer",
    value: "Gemini",
  },
  {
    label: "Validation",
    value: "Zod",
  },
  {
    label: "Build window",
    value: "5 days",
  },
];

const problemCards = [
  {
    label: "Research",
    title: "Competitor pages contain signal.",
    body:
      "Landing pages reveal audience assumptions, positioning, feature priorities, proof points, emotional hooks, and conversion logic.",
    tone: "signal" as const,
  },
  {
    label: "Creative",
    title: "Ad ideas need constraints.",
    body:
      "Unstructured AI output tends to sound polished while staying generic. Aegis keeps ideation tied to extracted strategy.",
    tone: "experiment" as const,
  },
  {
    label: "Risk",
    title: "Review needs a visible surface.",
    body:
      "Claims, promises, and positioning need review. The tool makes risk easier to see before confident copy reaches an audience.",
    tone: "warning" as const,
  },
];

const buildCards = [
  {
    label: "Interface",
    title: "Designed around review.",
    body:
      "The interface treats AI output as something to inspect. It separates source analysis, concepts, flags, and rewrites so the user can understand the reasoning path.",
    tone: "signal" as const,
  },
  {
    label: "Data shape",
    title: "Structured outputs.",
    body:
      "Zod helped define predictable response shapes, making the pipeline easier to validate, display, debug, and eventually extend.",
    tone: "verified" as const,
  },
  {
    label: "AI strategy",
    title: "Small jobs, clear expectations.",
    body:
      "Aegis breaks the work into smaller conceptual jobs: read the page, structure the signal, generate options, and review risk.",
    tone: "experiment" as const,
  },
  {
    label: "Risk handling",
    title: "Risk review as a design layer.",
    body:
      "The review step is built into the workflow, which makes the prototype more realistic for professional use.",
    tone: "warning" as const,
  },
];

const lessons = [
  {
    title: "AI gets better when the task has shape.",
    body:
      "Aegis works because it breaks the work into readable stages with defined expectations, visible outputs, and clear review points.",
    tone: "signal" as const,
  },
  {
    title: "Problem selection matters.",
    body:
      "The build challenge rewarded tools that could solve real business problems. Aegis focused on a media-buying workflow where research, creative direction, and review pressure overlap.",
    tone: "experiment" as const,
  },
  {
    title: "The interface carries the workflow.",
    body:
      "The user needs to understand where the output came from, why it matters, and what to do with it next. That is product design work as much as AI work.",
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

        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
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

      <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
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

function PipelineCard({
  step,
  title,
  body,
  tone,
}: {
  step: string;
  title: string;
  body: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
      <NotebookPaperclip
        size="md"
        className="absolute right-5 top-5 rotate-12 opacity-20"
      />

      <div className="flex items-start justify-between gap-4">
        <BrandBadge tone={tone} icon="dot">
          Stage {step}
        </BrandBadge>

        <span className="font-lab text-3xl font-semibold text-cyan/60">
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

function ConstraintCard({ children }: { children: string }) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <p className="grid grid-cols-[auto_1fr] gap-3 text-muted">
        <span className="font-lab text-cyan">✓</span>
        <span className="leading-7">{children}</span>
      </p>
    </div>
  );
}

function WorkflowStep({
  label,
  body,
  active = false,
}: {
  label: string;
  body: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-5 ${
        active
          ? "border-cyan/25 bg-cyan/[0.055]"
          : "border-[var(--border)] bg-white/[0.035]"
      }`}
    >
      <BrandBadge
        tone={active ? "signal" : "quiet"}
        icon={active ? "spark" : "none"}
      >
        {label}
      </BrandBadge>

      <p className="mt-3 leading-7 text-muted">{body}</p>
    </div>
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
                Case Study 01
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Working prototype
              </BrandBadge>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan/20 bg-[#101820] p-2 sm:flex">
                <img
                  src="/logos/aegis-logo.png"
                  alt="Aegis logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h1 className="max-w-4xl font-display text-6xl font-bold leading-none tracking-[-0.06em] text-ink md:text-8xl">
                  Aegis
                </h1>

                <p className="mt-5 lab-label text-muted">
                  AI-assisted creative workflow with human review points
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-muted">
              Aegis is a working prototype built in response to the It’s Today
              Media build challenge. It turns competitor landing pages into
              structured ad concepts with a review layer for claims, risk, and
              safer rewrite options.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              The challenge asked for a tool that could create value for a media
              buying team. I focused on a workflow where competitor research,
              creative strategy, and risk-aware review all meet.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <BrandBadge tone="quiet" icon="none">
                AI Workflow Design
              </BrandBadge>
              <BrandBadge tone="quiet" icon="none">
                Media Buying
              </BrandBadge>
              <BrandBadge tone="quiet" icon="none">
                Next.js
              </BrandBadge>
              <BrandBadge tone="quiet" icon="none">
                Gemini
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
                Open Aegis
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                View GitHub
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
                Project snapshot
              </BrandBadge>

              <div className="mt-5 grid gap-4">
                {buildDetails.map((item) => (
                  <DetailCard
                    key={item.label}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>

              <div className="mt-5 rounded-3xl border border-cyan/15 bg-cyan/[0.045] p-5">
                <p className="lab-label text-cyan">Important boundary</p>

                <p className="mt-3 text-sm leading-6 text-muted">
                  Aegis does not determine legal or compliance approval. It
                  surfaces review signals and lower-risk draft language for a
                  human reviewer to evaluate.
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
              A system for making AI output reviewable.
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              Aegis focuses on the slow, messy parts of creative strategy:
              reading source material, identifying positioning, generating
              angles, and surfacing language that needs review.
            </p>

            <p className="leading-8">
              The model gets a defined job, the output follows a predictable
              shape, and the reviewer has a clearer path from source material to
              decision.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Origin"
          title="Built as a response to a media-buying challenge."
          description="The brief asked for a working tool that could solve a real problem for a media buying team. Aegis answers that prompt through competitor analysis, creative direction, and risk-aware review."
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
          kicker="Screenshots"
          title="The prototype in context."
          description="A few views from the working Aegis interface, showing the pipeline from competitor analysis to risk-aware creative direction."
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
          title="Fast output can still miss the point."
          description="The messy part of AI-assisted marketing is traceability: where the text came from, whether it is grounded in the source, and whether it introduces risk."
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
          title="The useful version needed structure, speed, and clear limits."
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
          kicker="System design"
          title="A four-stage pipeline with defined jobs."
          description="Separating the work into stages made each output easier to inspect, evaluate, and improve."
          tone="signal"
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {pipeline.map((item) => (
            <PipelineCard
              key={item.step}
              step={item.step}
              title={item.title}
              body={item.body}
              tone={item.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card overflow-hidden">
          <div className="border-b border-[var(--border)] bg-white/[0.035] p-6 md:p-8">
            <BrandBadge tone="signal" icon="spark">
              Workflow map
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Landing page in. Reviewable creative direction out.
            </h2>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center md:p-8">
            <WorkflowStep
              label="Input"
              body="Competitor landing page, offer, claims, audience clues, and positioning signals."
            />

            <div className="hidden font-lab text-2xl text-cyan md:block">
              →
            </div>

            <WorkflowStep
              label="Structure"
              body="Extracted strategy, hooks, CTAs, claims, proof points, and likely customer objections."
            />

            <div className="hidden font-lab text-2xl text-cyan md:block">
              →
            </div>

            <WorkflowStep
              label="Generate"
              body="Ad concepts, messaging angles, campaign ideas, and suggested creative directions."
            />

            <div className="hidden font-lab text-2xl text-cyan md:block">
              →
            </div>

            <WorkflowStep
              label="Review"
              body="Risk flags, lower-risk rewrites, and human-in-the-loop decision points."
              active
            />
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="What I built"
          title="A working prototype with product thinking baked in."
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
          kicker="Lessons"
          title="What this project shows about how I think."
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
              Where I’d take it next.
            </h2>
          </div>

          <div className="grid gap-4 text-muted">
            <p className="leading-8">
              The next version would add saved projects, side-by-side competitor
              comparisons, clearer evidence links back to the source page,
              reusable brand/risk rules, and a stronger reviewer workflow for
              approving, rejecting, or revising generated concepts.
            </p>

            <p className="leading-8">
              I would also separate the review layer into more explicit
              categories, such as unsupported claims, risky guarantees,
              sensitive audience assumptions, unclear evidence, and tone
              mismatches.
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
            Useful AI work depends on structure, review, boundaries, and a
            clearer path from input to decision.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              View all work
            </Link>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}