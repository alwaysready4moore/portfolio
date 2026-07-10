import type { Metadata } from "next";
import Link from "next/link";
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
    "Creative experiments, side projects, prototypes, small-business systems, artist builds, and identity work by Marquetta Moore.",
};

const labPrinciples = [
  {
    label: "Lab rule",
    statement: "Play is still evidence.",
    description:
      "The fun projects still show how I think, package ideas, build systems, and learn in public.",
    tone: "signal" as const,
  },
  {
    label: "Method",
    statement: "Make the weird thing real.",
    description:
      "A concept gets easier to judge once it has a page, a persona, a workflow, a prototype, or a real artifact.",
    tone: "experiment" as const,
  },
  {
    label: "Outcome",
    statement: "Build first. Learn fast.",
    description:
      "The point is discovering what holds up when imagination meets constraints.",
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

const damaliBuilt = [
  "A full rock-star persona with a distinct voice and era-based visual identity",
  "Original song concepts, lyrical direction, and release framing",
  "Press, social, and YouTube presence for the artist world",
  "Reel and short-form video concepts, including Honey Trap creative",
  "A PR / promo packet and the beginnings of real marketing support",
  "Early paid-ad testing and artist-brand positioning experiments",
];

const damaliTesting = [
  "How far an AI-assisted artist build can feel coherent and emotionally real",
  "Whether music, visuals, copy, and persona can stay aligned across formats",
  "How to market a vibe before there are impressive numbers behind it",
  "What an AI-assisted creative workflow looks like when taste still leads",
  "How creative identity work can become a repeatable operating system",
];

const damaliSignals = [
  "Artist Build",
  "Creative Ops",
  "Visual Identity",
  "AI-Assisted Media",
  "Songwriting",
  "Promo Systems",
  "Reels",
  "Press Kit",
];

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

function FeaturedDamaliBuild() {
  return (
    <Link
      href="/lab/damali-street"
      className="paper-card group block overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
    >
      <div className="grid gap-0 lg:grid-cols-[0.76fr_1.24fr]">
        <div className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-br from-lavender/20 via-white/[0.04] to-cyan/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
          <div
            aria-hidden="true"
            className="absolute right-8 top-8 h-28 w-28 rounded-[2rem] bg-lavender/20 blur-2xl"
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
                <BrandBadge tone="experiment" icon="spark">
                  Featured side quest
                </BrandBadge>

                <h2 className="mt-5 font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink">
                  Damali Street
                </h2>
              </div>

              <BrandBadge tone="experiment" icon="dot">
                In progress
              </BrandBadge>
            </div>

            <BrandBadge tone="quiet" icon="none">
              Artist persona · music project · identity experiment
            </BrandBadge>

            <p className="mt-6 text-lg leading-8 text-muted">
              Damali started as a fun creative side project and quickly became
              a full-on artist build: songs, visuals, release concepts, promo
              language, reel ideas, public links, and early marketing
              experiments wrapped into one rock-star system.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-4">
                <p className="lab-label text-muted">Status</p>

                <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
                  Active build
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-4">
                <p className="lab-label text-muted">Current vibe</p>

                <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
                  Blonde chaos
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

            <p className="lab-label text-cyan">Why this exists</p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink">
              Kid-me loved writing songs. Grown-up me wanted to see if I could
              build the whole machine around the music too: the persona, the
              world, the visuals, the messaging, the content, and the marketing
              logic that makes an artist feel like a real thing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <LabList title="Built so far" items={damaliBuilt} />
            <LabList title="What it is testing" items={damaliTesting} />
          </div>

          <div>
            <BrandBadge tone="quiet" icon="spark">
              Signals
            </BrandBadge>

            <div className="mt-4 flex flex-wrap gap-2">
              {damaliSignals.map((tag) => (
                <BrandBadge key={tag} tone="quiet" icon="none">
                  {tag}
                </BrandBadge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
            <span className="lab-label inline-flex items-center gap-2 text-cyan transition group-hover:translate-x-1">
              Open the Damali Street case study <span aria-hidden="true">→</span>
            </span>

            <span className="inline-flex items-center gap-2 font-lab text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted">
              <CyanSpark size="xs" />
              Persona lab
            </span>
          </div>
        </div>
      </div>
    </Link>
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

            <p className="lab-label text-cyan">What I was really asking</p>

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
              Weird little archive
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
                Side quests with receipts
              </BrandBadge>
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Where the playful ideas have to prove themselves.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              This is the less corporate corner of the portfolio: artist builds,
              prototypes, identity experiments, small-business ideas, weird
              little tools, and concepts I wanted to make real just to see what
              would happen.
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
                  The Lab is where curiosity becomes structure. If I can turn a
                  funny idea, a creative itch, or a side obsession into a real
                  system, that tells you a lot about how I work.
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
            <BrandBadge tone="experiment" icon="spark">
              Featured build
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              First up: Damali Street.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            A music persona became a full creative operations sandbox, which is
            honestly very on-brand for me.
          </p>
        </div>

        <FeaturedDamaliBuild />
      </section>

      <section className="lab-shell pt-14">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              The rest of the archive
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              More experiments, more receipts.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            Some of these are scrappier than others. That is part of the charm.
            They still reveal how I test workflow, audience, packaging, and
            narrative.
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
            The Lab is where ideas survive contact with reality: a real
            audience, a real workflow, a real constraint, or a very real
            Saturday afternoon of “wait, what if I actually built this?”
          </p>
        </div>
      </section>
    </main>
  );
}