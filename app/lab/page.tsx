import type { Metadata } from "next";
import {
  BrandBadge,
  CoffeeRing,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  NotebookTape,
  PhoenixMark,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { labExperiments } from "@/data/labExperiments";

export const metadata: Metadata = {
  title: "The Lab | AlwaysReady4Moore",
  description:
    "Creative experiments, side projects, prototypes, small-business systems, and identity work by Marquetta Moore.",
};

const labPrinciples = [
  {
    label: "Lab rule",
    statement: "Play is data.",
    description:
      "The fun projects still reveal how I think, build, test, package, and explain ideas.",
    tone: "signal" as const,
  },
  {
    label: "Method",
    statement: "Make the idea tangible.",
    description:
      "A concept becomes easier to judge when it has a page, a persona, a workflow, a prototype, or a real artifact.",
    tone: "experiment" as const,
  },
  {
    label: "Outcome",
    statement: "Learn by building.",
    description:
      "The point is not perfection. The point is finding out what works when imagination meets constraints.",
    tone: "verified" as const,
  },
];

const accentStyles: Record<
  string,
  {
    tone: BrandBadgeTone;
    glow: string;
    wash: string;
  }
> = {
  lavender: {
    tone: "experiment",
    glow: "bg-lavender/20",
    wash: "from-lavender/20 via-white/[0.035] to-cyan/10",
  },
  mint: {
    tone: "verified",
    glow: "bg-mint/20",
    wash: "from-mint/20 via-white/[0.035] to-cyan/10",
  },
  cyan: {
    tone: "signal",
    glow: "bg-cyan/20",
    wash: "from-cyan/20 via-white/[0.035] to-blue/10",
  },
};

function getAccentStyle(accent: string) {
  return accentStyles[accent] ?? accentStyles.cyan;
}

function LabList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <BrandBadge tone="quiet" icon="none">
        {title}
      </BrandBadge>

      <ul className="mt-4 grid gap-2">
        {items.map((item) => (
          <li
            className="grid grid-cols-[auto_1fr] gap-3 text-sm text-muted"
            key={item}
          >
            <span className="font-lab text-cyan">↳</span>
            <span className="leading-6">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperimentDossier({
  title,
  label,
  status,
  type,
  description,
  question,
  methods,
  outputs,
  tags,
  accent,
  index,
}: {
  title: string;
  label: string;
  status: string;
  type: string;
  description: string;
  question: string;
  methods: readonly string[];
  outputs: readonly string[];
  tags: readonly string[];
  accent: string;
  index: number;
}) {
  const style = getAccentStyle(accent);

  return (
    <article className="paper-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
      <div className="grid gap-0 lg:grid-cols-[0.74fr_1.26fr]">
        <div
          className={`relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-br ${style.wash} p-6 lg:border-b-0 lg:border-r lg:p-8`}
        >
          <div
            aria-hidden="true"
            className={`absolute right-8 top-8 h-28 w-28 rounded-[2rem] blur-2xl ${style.glow}`}
          />

          <NotebookTape
            size="lg"
            className="absolute right-7 top-7 rotate-12 opacity-35"
          />

          <CoffeeRing
            size="lg"
            className="absolute -bottom-3 left-6 opacity-20"
          />

          <div className="relative">
            <div className="mb-7 flex items-start justify-between gap-5">
              <div>
                <BrandBadge tone="signal" icon="spark">
                  Experiment 0{index + 1}
                </BrandBadge>

                <h2 className="mt-5 font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink">
                  {title}
                </h2>
              </div>

              <BrandBadge tone={style.tone} icon="dot">
                Dossier
              </BrandBadge>
            </div>

            <BrandBadge tone="quiet" icon="none">
              {label}
            </BrandBadge>

            <p className="mt-6 text-lg leading-8 text-muted">
              {description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-4">
                <p className="lab-label text-muted">Status</p>

                <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
                  {status}
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-4">
                <p className="lab-label text-muted">Type</p>

                <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
                  {type}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-6 lg:p-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan/20 bg-cyan/[0.045] p-5">
            <CyanSpark
              size="sm"
              className="absolute right-5 top-5 opacity-65"
            />

            <p className="lab-label text-cyan">Core question</p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink">
              {question}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <LabList title="Methods" items={methods} />
            <LabList title="Outputs" items={outputs} />
          </div>

          <div>
            <BrandBadge tone="quiet" icon="spark">
              Signals
            </BrandBadge>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <BrandBadge key={tag} tone="quiet" icon="none">
                  {tag}
                </BrandBadge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
            <span className="lab-label inline-flex items-center gap-2 text-cyan">
              Full experiment log coming soon <span aria-hidden="true">→</span>
            </span>

            <span className="inline-flex items-center gap-2 font-lab text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted">
              <CyanSpark size="xs" />
              Active archive
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function LabPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <BrandBadge tone="signal" icon="spark">
                The Lab
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Experiments with a point
              </BrandBadge>
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Side projects, but make them evidence.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              Creative systems, small-business building, playful tools,
              identity experiments, and prototypes that test ideas before they
              become something bigger.
            </p>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl"
            />

            <NotebookPaperclip
              size="lg"
              className="absolute right-5 top-5 rotate-12 opacity-25"
            />

            <div className="relative flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-[#101820]">
                <PhoenixMark
                  variant="standard"
                  size="lg"
                  decorative
                  className="h-12 w-12"
                />
              </div>

              <div>
                <BrandBadge tone="quiet" icon="spark">
                  Lab thesis
                </BrandBadge>

                <p className="mt-4 leading-7 text-muted">
                  The Lab is where curiosity becomes structure: persona systems,
                  creative direction, small-business workflows, prototypes, and
                  proof that I can build from nothing.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-12">
        <div className="grid gap-5 md:grid-cols-3">
          {labPrinciples.map((principle) => (
            <article
              className="paper-card relative overflow-hidden p-5"
              key={principle.label}
            >
              <NotebookHighlight
                size="lg"
                className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
              />

              <BrandBadge tone={principle.tone} icon="dot">
                {principle.label}
              </BrandBadge>

              <p className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
                {principle.statement}
              </p>

              <p className="mt-4 text-sm leading-6 text-muted">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-14">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              Experiment dossiers
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              What the experiments prove.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            These are not random hobbies. They are small systems for testing
            identity, audience, production, workflow, and storytelling.
          </p>
        </div>

        <div className="grid gap-8">
          {labExperiments.map((experiment, index) => (
            <ExperimentDossier
              key={experiment.title}
              title={experiment.title}
              label={experiment.label}
              status={experiment.status}
              type={experiment.type}
              description={experiment.description}
              question={experiment.question}
              methods={experiment.methods}
              outputs={experiment.outputs}
              tags={experiment.tags}
              accent={experiment.accent}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            The lab is where ideas prove they can survive contact with a real
            audience, a real workflow, a real constraint, or a real Saturday
            afternoon of “wait, what if I just built it?”
          </p>
        </div>
      </section>
    </main>
  );
}