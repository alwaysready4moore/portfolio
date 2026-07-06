import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const liveProjectUrl = "https://aegisci.app";
const githubUrl = "https://github.com/alwaysready4moore/aegis";

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
      "Risk review showing flagged phrases, risk levels, and safer rewrite suggestions for high-risk ad claims.",
    image: "/screenshots/aegis/aegis-03-shield-review-risk.png",
  },
  {
    title: "Safer Versions",
    description:
      "The final review state with compliant rewritten versions ready to copy, including safer positioning and claim language.",
    image: "/screenshots/aegis/aegis-04-shield-review-safe.png",
  },
];

const pipeline = [
  {
    step: "01",
    title: "Competitive read",
    body: "The tool starts by reading a competitor landing page and extracting the offer, audience, claims, positioning, calls to action, and likely strategic angle.",
  },
  {
    step: "02",
    title: "Ad concept generation",
    body: "It then turns that structured read into multiple ad concepts, keeping the ideas tied to the source material instead of drifting into generic AI copy.",
  },
  {
    step: "03",
    title: "Compliance pass",
    body: "A review layer flags risky claims, unsupported promises, exaggerated language, and places where human judgment should step in.",
  },
  {
    step: "04",
    title: "Rewrite support",
    body: "The final layer offers safer rewrites and directionally useful language, so the reviewer has a better starting point instead of a blank page.",
  },
];

const constraints = [
  "Built quickly as a practical prototype, not a months-long polished product.",
  "Needed to show real AI workflow thinking, not just a chatbot wrapper.",
  "Had to preserve human review instead of pretending AI can safely own compliance decisions.",
  "Needed structured outputs so the tool felt predictable, reviewable, and easy to extend.",
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

const lessons = [
  {
    title: "AI is most useful when the task has structure.",
    body: "The strongest part of Aegis is not that it generates ad ideas. It is that it breaks the work into readable stages with defined expectations.",
  },
  {
    title: "Compliance needs friction.",
    body: "A tool like this should not hide risk. It should make risk easier to notice, discuss, and resolve before something reaches an audience.",
  },
  {
    title: "The interface matters as much as the model.",
    body: "The user needs to understand where the output came from, why it matters, and what to do with it next. That is a product design problem, not just a prompt problem.",
  },
];

function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="lab-label text-cyan">{kicker}</p>
      <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <p className="lab-label text-muted">{label}</p>
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
    <article className="paper-card overflow-hidden transition duration-300 hover:-translate-y-1">
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
        <p className="lab-label text-cyan">{title}</p>
        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      </div>
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
            <p className="lab-label text-cyan">Case Study 01</p>
            <h1 className="mt-5 max-w-4xl font-display text-6xl font-bold leading-none tracking-[-0.06em] text-ink md:text-8xl">
              Aegis
            </h1>
            <p className="mt-5 lab-label text-muted">
              AI creative intelligence pipeline
            </p>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-muted">
              Aegis is an AI-assisted workflow that turns competitor landing
              pages into testable ad concepts, then adds a compliance-aware
              review layer so the output is useful without pretending the AI
              should make final judgment calls.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="soft-chip">AI Workflow Design</span>
              <span className="soft-chip">Next.js</span>
              <span className="soft-chip">Gemini</span>
              <span className="soft-chip">Compliance Review</span>
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

            </div>
          </div>

          <aside className="paper-card p-6">
            <p className="lab-label text-cyan">Project Snapshot</p>

            <div className="mt-5 grid gap-4">
              {buildDetails.map((item) => (
                <DetailCard
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="lab-label text-cyan">The short version</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              A system for making AI output reviewable.
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              The goal was not to make AI “write ads.” The goal was to design a
              workflow where AI could help with the slow, messy parts of
              creative strategy: reading the source material, identifying
              positioning, generating angles, and surfacing language that needed
              human review.
            </p>

            <p className="leading-8">
              Aegis treats AI like a structured collaborator. It gives the model
              a defined job, validates the shape of the output, and keeps the
              human reviewer in the loop where judgment, risk, and brand context
              matter most.
            </p>
          </div>
        </div>
      </section>

      <section id="screenshots" className="lab-shell pt-20">
        <SectionTitle
          kicker="Screenshots"
          title="The prototype in context."
          description="A few views from the working Aegis interface, showing the pipeline from competitor analysis to compliance-aware creative direction."
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
          title="AI can generate quickly, but fast output is not automatically useful."
          description="The messy part of AI-assisted marketing is not getting text on the page. It is knowing where that text came from, whether it is strategically grounded, and whether it introduces risk."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          <article className="paper-card p-6">
            <p className="lab-label text-cyan">Research</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Competitor pages contain signal.
            </h3>
            <p className="mt-4 leading-7 text-muted">
              Landing pages reveal audience assumptions, positioning, feature
              priorities, proof points, emotional hooks, and conversion logic.
            </p>
          </article>

          <article className="paper-card p-6">
            <p className="lab-label text-cyan">Creative</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Ad ideas need constraints.
            </h3>
            <p className="mt-4 leading-7 text-muted">
              Without structure, AI tends to produce polished-sounding but
              generic concepts. Aegis keeps the ideation tied to extracted
              strategy.
            </p>
          </article>

          <article className="paper-card p-6">
            <p className="lab-label text-cyan">Risk</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Compliance cannot be vibes.
            </h3>
            <p className="mt-4 leading-7 text-muted">
              Claims, promises, and positioning need review. The tool needed to
              make risk more visible, not bury it under confident copy.
            </p>
          </article>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Constraints"
          title="The useful version had to be structured, fast, and honest about AI’s limits."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {constraints.map((constraint) => (
            <div
              className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
              key={constraint}
            >
              <p className="grid grid-cols-[auto_1fr] gap-3 text-muted">
                <span className="font-lab text-cyan">✓</span>
                <span className="leading-7">{constraint}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="System Design"
          title="A four-stage pipeline instead of one magic prompt."
          description="The important design choice was separating the work into stages. Each stage has a different purpose, which makes the output easier to inspect and improve."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {pipeline.map((item) => (
            <article
              className="paper-card p-6 transition duration-300 hover:-translate-y-1"
              key={item.step}
            >
              <p className="font-lab text-4xl font-semibold text-cyan">
                {item.step}
              </p>
              <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card overflow-hidden">
          <div className="border-b border-[var(--border)] bg-white/[0.035] p-6 md:p-8">
            <p className="lab-label text-cyan">Workflow Map</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Landing page in. Reviewable creative direction out.
            </h2>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center md:p-8">
            <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
              <p className="lab-label text-cyan">Input</p>
              <p className="mt-3 leading-7 text-muted">
                Competitor landing page, offer, claims, audience clues, and
                positioning signals.
              </p>
            </div>

            <div className="hidden font-lab text-2xl text-cyan md:block">→</div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
              <p className="lab-label text-cyan">Structure</p>
              <p className="mt-3 leading-7 text-muted">
                Extracted strategy, hooks, CTAs, claims, proof points, and
                likely customer objections.
              </p>
            </div>

            <div className="hidden font-lab text-2xl text-cyan md:block">→</div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
              <p className="lab-label text-cyan">Generate</p>
              <p className="mt-3 leading-7 text-muted">
                Ad concepts, messaging angles, campaign ideas, and suggested
                creative directions.
              </p>
            </div>

            <div className="hidden font-lab text-2xl text-cyan md:block">→</div>

            <div className="rounded-3xl border border-cyan/20 bg-cyan/[0.055] p-5">
              <p className="lab-label text-cyan">Review</p>
              <p className="mt-3 leading-7 text-muted">
                Risk flags, safer rewrites, and human-in-the-loop decision
                points.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="What I Built"
          title="A working prototype that demonstrates product thinking, not just prompt writing."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <article className="paper-card p-6">
            <p className="lab-label text-cyan">Interface</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Designed around review.
            </h3>
            <p className="mt-4 leading-7 text-muted">
              The interface treats the AI output as something to inspect. It
              separates source analysis, concepts, flags, and rewrites so the
              user can understand the reasoning path.
            </p>
          </article>

          <article className="paper-card p-6">
            <p className="lab-label text-cyan">Data shape</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Structured outputs.
            </h3>
            <p className="mt-4 leading-7 text-muted">
              Zod helped define predictable response shapes, which makes the
              pipeline easier to validate, display, debug, and eventually
              extend.
            </p>
          </article>

          <article className="paper-card p-6">
            <p className="lab-label text-cyan">AI strategy</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Small jobs, clear expectations.
            </h3>
            <p className="mt-4 leading-7 text-muted">
              Instead of asking one giant prompt to do everything, Aegis breaks
              the work into smaller conceptual jobs that can be evaluated more
              clearly.
            </p>
          </article>

          <article className="paper-card p-6">
            <p className="lab-label text-cyan">Risk handling</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Compliance as a design layer.
            </h3>
            <p className="mt-4 leading-7 text-muted">
              Risk review is not an afterthought. It is part of the workflow,
              which makes the tool feel more realistic for professional use.
            </p>
          </article>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionTitle
          kicker="Lessons"
          title="What this project shows about how I think."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <article className="paper-card p-6" key={lesson.title}>
              <h3 className="font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
                {lesson.title}
              </h3>
              <p className="mt-4 leading-7 text-muted">{lesson.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="lab-label text-cyan">Next Iteration</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Where I’d take it next.
            </h2>
          </div>

          <div className="grid gap-4">
            <p className="leading-8 text-muted">
              The next version would add saved projects, side-by-side competitor
              comparisons, clearer evidence links back to the source page,
              reusable brand/compliance rules, and a stronger reviewer workflow
              for approving, rejecting, or revising generated concepts.
            </p>

            <p className="leading-8 text-muted">
              I would also separate the compliance review into more explicit
              categories, such as unsupported claims, risky guarantees,
              sensitive audience assumptions, and tone mismatches.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="paper-card flex flex-col justify-between gap-6 p-6 md:flex-row md:items-center md:p-8">
          <div>
            <p className="lab-label text-cyan">Selected Work</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              Back to the workbench.
            </h2>
          </div>

          <Link
            href="/work"
            className="focus-ring rounded-2xl border border-cyan/40 bg-cyan px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night"
          >
            View all work
          </Link>
        </div>
      </section>
    </main>
  );
}