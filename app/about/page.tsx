import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const focusAreas = [
  {
    title: "AI workflow design",
    description:
      "I like using AI as a practical helper: something that can sort, draft, compare, structure, and speed things up, while humans still make the judgment calls.",
  },
  {
    title: "Knowledge systems",
    description:
      "I love turning scattered docs, repeated questions, half-remembered policies, and “wait, where does that live?” moments into something people can actually find and use.",
  },
  {
    title: "Support operations",
    description:
      "Support work taught me to look for the system behind the question. When the same confusion keeps showing up, that is usually the system asking for help.",
  },
  {
    title: "Security-aware communication",
    description:
      "My security background is always in the back of my mind. I care about trust, clarity, accuracy, and what can go wrong when important information gets fuzzy.",
  },
];

const pathItems = [
  {
    label: "Security",
    title: "I started by learning how things break.",
    description:
      "Computer and network security taught me to respect evidence, risk, access, trust, and the tiny details that can quietly become very big problems.",
  },
  {
    label: "Support",
    title: "Then I learned where people get stuck.",
    description:
      "Customer support showed me that broken systems do not always announce themselves with dramatic failures. Sometimes they show up as the same question, asked over and over, by very tired people.",
  },
  {
    label: "Knowledge",
    title: "So I started building better paths.",
    description:
      "Knowledge hubs, macros, training materials, onboarding guides, internal resources. I kept finding myself drawn to the work of making the answer easier to reach.",
  },
  {
    label: "AI",
    title: "Now I use AI to make the path clearer.",
    description:
      "I am interested in AI that helps people think, organize, test, explain, and build. Not AI as a replacement for judgment, but AI as a really useful workbench.",
  },
];

const proofPoints = [
  "7+ years across cybersecurity, support, technical operations, and enablement",
  "774-page governed Notion knowledge hub",
  "3,100+ knowledge-system edits",
  "100% CSAT across 200+ Google support reviews",
  "40+ internal awards for documentation clarity and accuracy",
  "AI tools built with TypeScript, Next.js, Gemini, and Zod",
];

function FocusCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="paper-card p-6">
      <p className="lab-label text-cyan">Focus</p>
      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function PathCard({
  label,
  title,
  description,
  index,
}: {
  label: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="paper-card p-6">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="lab-label text-cyan">{label}</p>
          <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
            {title}
          </h3>
        </div>

        <span className="font-lab text-3xl font-semibold text-cyan/60">
          0{index + 1}
        </span>
      </div>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function ProofChip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[var(--border)] bg-white/5 px-3 py-1.5 font-lab text-xs font-semibold uppercase tracking-[0.06em] text-muted">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <p className="lab-label text-cyan">About</p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.92fr_0.72fr] lg:items-start">
          <div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Hi, I’m Marquetta. I make messy information behave.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              I build systems for the moments when the answer technically
              exists, but nobody can find it, trust it, explain it, or use it
              without asking three other people first.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              My background sits at a weirdly useful intersection: cybersecurity,
              customer support, technical operations, internal enablement,
              knowledge management, writing, and now AI workflow design. I like
              the messy middle. That is usually where the real problem is
              hiding.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              The through-line is pretty simple: I care about making things
              clearer for people. Not colder. Not more robotic. Clearer, kinder,
              easier to use, and harder to misunderstand.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {proofPoints.map((point) => (
                <ProofChip key={point}>{point}</ProofChip>
              ))}
            </div>
          </div>

          <aside className="paper-card overflow-hidden">
            <div className="border-b border-[var(--border)] bg-white/[0.035] p-3">
              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-night">
                <img
                  src="/avatars/chibi-marquetta.png"
                  alt="Static chibi avatar of Marquetta at a laptop."
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <div className="p-6">
              <p className="lab-label text-cyan">Site representative</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                Tiny me, doing the work.
              </h2>
              <p className="mt-4 leading-7 text-muted">
                This little chibi version of me is the site’s visual stand-in:
                typing, thinking, probably reorganizing a system that started
                out as “just one quick doc.”
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Static chibi avatar created with AI-assisted image tools and
                disclosed as AI-generated media.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="lab-label text-cyan">The through-line</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              I am very interested in the gap between “we have the information”
              and “people can actually use it.”
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              A lot of workplace problems are not really people problems. They
              are system problems wearing a people-problem costume. The policy
              is unclear. The process lives in someone’s memory. The tool is
              technically there, but nobody knows when to use it. The answer
              exists, but it is buried under five layers of “check the old doc.”
            </p>

            <p className="leading-8">
              That is the kind of thing I notice quickly. Then I want to map it,
              simplify it, write it better, automate the boring parts, and make
              the next person’s day a little less haunted.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8">
          <p className="lab-label text-muted">What I do</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            Practical systems, human stakes.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {focusAreas.map((area) => (
            <FocusCard
              key={area.title}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8">
          <p className="lab-label text-muted">How I got here</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            The path was not linear. It was useful.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pathItems.map((item, index) => (
            <PathCard
              key={item.title}
              label={item.label}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="lab-label text-cyan">Where AI fits</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              I am pro-AI, but not pro-mystery box.
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              I like AI most when it helps people move through complexity:
              organize the mess, compare options, draft the first pass, find the
              pattern, or turn a blank page into something we can actually react
              to.
            </p>

            <p className="leading-8">
              But I do not think AI should replace accountability, taste,
              context, empathy, or review. The best AI workflows are designed
              around human judgment, not designed to quietly skip it.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note p-7 md:p-9">
          <p className="field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            I am happiest where the system is messy, the stakes are human, and
            the answer needs to become easier to find.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[var(--paper-ink)] bg-[var(--paper-ink)] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-paper"
            >
              See the work
            </Link>

            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)]"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}