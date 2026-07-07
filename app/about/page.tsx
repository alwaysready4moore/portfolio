import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const focusAreas = [
  {
    title: "AI workflow design",
    description:
      "I build practical AI-assisted workflows that make messy work easier without removing human judgment from the parts where judgment matters.",
  },
  {
    title: "Knowledge systems",
    description:
      "I turn scattered documentation, policies, decisions, and recurring questions into structured resources people can actually use.",
  },
  {
    title: "Support operations",
    description:
      "My systems thinking is grounded in real support work: what people ask, where they get stuck, and what they need in the moment.",
  },
  {
    title: "Security-aware communication",
    description:
      "I care about accuracy, trust, risk, and clarity, especially when technical or high-stakes information has to be understood by humans.",
  },
];

const pathItems = [
  {
    label: "Security",
    title: "I learned to respect accuracy.",
    description:
      "My background in computer and network security shaped how I think about risk, evidence, trust, and the cost of unclear information.",
  },
  {
    label: "Support",
    title: "I learned where systems break.",
    description:
      "Customer support taught me that messy systems usually reveal themselves through repeated questions, confusing policies, and exhausted people.",
  },
  {
    label: "Knowledge",
    title: "I learned to build source-of-truth systems.",
    description:
      "I’ve built and governed knowledge hubs, onboarding materials, macros, guides, and internal resources that make complex information easier to apply.",
  },
  {
    label: "AI",
    title: "I learned to use tools without surrendering judgment.",
    description:
      "I use AI as a collaborator for structure, speed, exploration, and iteration, while keeping final direction and review human-led.",
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
              I build systems for people who need the answer to be findable,
              useful, and trustworthy.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              I’m Marquetta Moore, a support-informed AI knowledge systems
              builder with a background across cybersecurity, customer support,
              technical operations, internal enablement, and creative
              experimentation.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              My favorite work lives in the messy middle: where product
              knowledge, customer questions, technical documentation, policies,
              AI tools, and human judgment all collide. I like turning that mess
              into something people can actually use.
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
                  src="/avatars/lets-talk.gif"
                  alt="Looping chibi avatar of Marquetta typing at a laptop."
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <div className="p-6">
              <p className="lab-label text-cyan">Site representative</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                Chibi Marquetta at the workbench.
              </h2>
              <p className="mt-4 leading-7 text-muted">
                This stylized avatar is the visual stand-in for the site:
                friendly, focused, and usually one good system away from making
                the chaos behave.
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Avatar animation generated with Gemini and disclosed as
                AI-generated media.
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
              I make unclear systems easier to understand and easier to use.
            </h2>
          </div>

          <div className="grid gap-5 text-muted">
            <p className="leading-8">
              My work has never been only about writing, only about support, or
              only about tools. It has always been about translation: turning
              scattered information into something clearer, more usable, and
              more humane.
            </p>

            <p className="leading-8">
              That might look like a knowledge hub, a training guide, a support
              macro, an AI workflow, a security note, a product explanation, or
              a tiny internal tool. The shape changes. The pattern stays the
              same.
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