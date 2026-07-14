import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  NotebookTape,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Merge the Union | Creative Technology Case Study",
  description:
    "A playable workplace icebreaker where teams vote states off the map, merge them into questionable new territories, and discover how far a joke can be productized.",
};

const proof = [
  {
    label: "Origin",
    value: "Built for my turn hosting an internal team icebreaker",
  },
  {
    label: "Format",
    value: "Standalone browser game and facilitation system",
  },
  {
    label: "Play style",
    value: "Collaborative voting, competition, chaos, and geography crimes",
  },
  {
    label: "My role",
    value:
      "Concept, game design, writing, interaction design, build direction, facilitation design, documentation, and iteration",
  },
];

const buildLayers = [
  {
    title: "Playable browser game",
    description:
      "A real US map lets the group eliminate a state, choose a neighboring absorber, and rename the resulting mega-state. The map and game state update round by round.",
  },
  {
    title: "Group facilitation system",
    description:
      "Player rotation, voting modes, session timers, team setup, and save-and-resume support make the joke usable in actual meetings instead of only impressive in a demo.",
  },
  {
    title: "Configurable game rules",
    description:
      "Casual play, Champion the Anchor, Team Conquest, Survivor Points, and Pure Prediction let the host adapt the experience to different group sizes and energy levels.",
  },
  {
    title: "Comedy and narrative layer",
    description:
      "Curated mega-state names, generated winner lore, state obituaries, national mottos, anthem lines, and historical event cards turn map manipulation into a shared comedy engine.",
  },
  {
    title: "Chaos systems",
    description:
      "Earthquakes, defections, breakaways, recounts, and Historical Hijinks create surprise without requiring the facilitator to invent every beat in the moment.",
  },
  {
    title: "Supporting product ecosystem",
    description:
      "The game ships with a host guide, tracker companion, setup documentation, original branding, sound design, controls reference, and a detailed changelog.",
  },
];

const modes = [
  {
    name: "Casual",
    description: "No winner. Just questionable names and democratic betrayal.",
  },
  {
    name: "Champion the Anchor",
    description:
      "States are distributed to players. Whoever owns the anchor of the final mega-state wins.",
  },
  {
    name: "Team Conquest",
    description:
      "States belong to two to four teams. The team controlling the final anchor wins.",
  },
  {
    name: "Survivor Points",
    description:
      "Players earn points while their states remain independent, plus a final-anchor bonus.",
  },
  {
    name: "Pure Prediction",
    description:
      "Everyone predicts the final anchor state before the first vote. Correct predictions win.",
  },
];

const decisions = [
  {
    title: "Design for the meeting, not only the screen.",
    description:
      "The best part of the game is the argument before the vote. The interface supports that social moment instead of trying to replace it.",
  },
  {
    title: "Make chaos adjustable.",
    description:
      "Some teams want a clean fifteen-minute activity. Others want a Civil War to reverse three rounds of progress. Spice settings let the host choose.",
  },
  {
    title: "Protect the facilitator.",
    description:
      "Timers, turn rotation, auto-save, a host guide, and the tracker reduce the cognitive load on the person sharing their screen.",
  },
  {
    title: "Treat the joke like a product.",
    description:
      "The project became more memorable because I kept asking ordinary product questions: Who is using it? What can go wrong? Can they resume? What needs explanation?",
  },
];

const artifacts = [
  "Standalone browser game",
  "Real US map with state abbreviation labels",
  "Five configurable win modes",
  "Quick Merge and Tally Votes",
  "Round timer and player rotation",
  "Session timer with automatic saving",
  "Named multi-save and JSON transfer",
  "Historical Hijinks event deck",
  "Random earthquake, defection, and breakaway events",
  "Custom mega-state naming",
  "Generated winner lore",
  "Tracker companion",
  "Host guide and seven-page product guide",
  "Embedded sound effects and original music loop",
];

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <BrandBadge tone="experiment" icon="spark">
          {kicker}
        </BrandBadge>

        <h2 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
          {title}
        </h2>
      </div>

      <p className="max-w-xl leading-7 text-muted md:text-right">
        {description}
      </p>
    </div>
  );
}

// DEFINITIVE EMBED HEIGHT FIX — July 14, 2026
export default function MergeTheUnionPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <Link
          href="/lab"
          className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
        >
          ← Back to the lab
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <BrandBadge tone="experiment" icon="spark">
                Playable creative technology case study
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Workplace social game
              </BrandBadge>
            </div>

            <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              I needed an icebreaker, so naturally I dismantled the United
              States.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              Merge the Union is a browser-based team game where everyone votes
              a state off the map, a neighbor absorbs it, and the new
              territory receives an increasingly questionable mashup name.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              I originally built it when it was my turn to lead an internal
              icebreaker at Abnormal AI. A one-meeting joke grew into a
              configurable facilitation system with real map interactions,
              multiple win modes, team play, save files, random events,
              historical chaos, sound, documentation, and a companion tracker.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/lab/merge-the-union/game.html"
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-2xl border border-cyan/40 bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_32px_rgba(39,217,255,0.18)] transition hover:-translate-y-0.5"
              >
                Play full screen ↗
              </a>

              <a
                href="/lab/merge-the-union/tracker.html"
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/[0.035] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                Open tracker ↗
              </a>

              <a
                href="/lab/merge-the-union/original-guide.pdf"
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/[0.035] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                Read original guide ↗
              </a>
            </div>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <NotebookTape
              size="lg"
              className="absolute right-7 top-7 rotate-12 opacity-35"
            />
            <NotebookHighlight
              size="lg"
              className="absolute -bottom-4 -left-3 rotate-[-8deg] opacity-15"
            />

            <div className="relative">
              <div className="rounded-[2rem] border border-[var(--border)] bg-[#f7f2e8] p-5">
                <img
                  src="/lab/merge-the-union/logo.png"
                  alt="Merge the Union logo"
                  className="mx-auto aspect-square w-full max-w-[22rem] object-contain"
                />
              </div>

              <p className="mt-5 text-center font-display text-2xl font-bold italic text-ink">
                Break the ice. Break the map.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-14">
        <div className="grid gap-4 md:grid-cols-2">
          {proof.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
            >
              <p className="lab-label text-cyan">{item.label}</p>
              <p className="mt-3 leading-7 text-muted">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionHeading
          kicker="Play it"
          title="The game is embedded right here."
          description="The first map load may take a moment because the standalone build fetches public US map data. For the room-filling version, use the full-screen button."
        />

        <div className="paper-card relative overflow-hidden p-3 md:p-5">
          <CyanSpark
            size="sm"
            className="absolute right-5 top-5 z-10 opacity-70"
          />

          <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[#f7f2e8]">
            <iframe
              src="/lab/merge-the-union/game.html"
              title="Play Merge the Union"
              className="w-full"
              style={{ height: "calc(100vh - 5rem)", minHeight: "900px" }}
              loading="lazy"
              allow="autoplay"
            />
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted">
          Audio may require a click inside the game before the browser allows
          playback. Saves are stored by the browser used to play.
        </p>
      </section>

      <section className="lab-shell pt-20">
        <SectionHeading
          kicker="The brief"
          title="The assignment was tiny. The response was not."
          description="The practical need was simple: help coworkers loosen up and talk to one another. The design opportunity was to make the room participate instead of watch."
        />

        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Instead of asking everyone for a fun fact, I gave them a map, a
            vote, and permission to defend their favorite state like their lives depended
            on it.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--paper-muted)]">
            The comedy comes from the people: lobbying, regional grudges,
            terrible naming suggestions, and the solemn reading of each state’s
            obituary. The software creates structure for that social energy.
          </p>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionHeading
          kicker="System design"
          title="What turned an icebreaker into a product."
          description="The project combines interaction design, group dynamics, game rules, writing, technical implementation, and facilitator support."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {buildLayers.map((layer) => (
            <article
              key={layer.title}
              className="paper-card relative overflow-hidden p-6"
            >
              <CyanSpark
                size="xs"
                className="absolute right-5 top-5 opacity-50"
              />
              <h3 className="pr-8 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
                {layer.title}
              </h3>
              <p className="mt-4 leading-7 text-muted">{layer.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionHeading
          kicker="Replay design"
          title="One joke, five ways to win."
          description="Different groups need different levels of competition. The game can be pure chaos, individual strategy, team conquest, survival scoring, or prediction."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {modes.map((mode, index) => (
            <article
              key={mode.name}
              className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5"
            >
              <span className="font-lab text-xs font-bold text-cyan">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">
                {mode.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {mode.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionHeading
          kicker="Product judgment"
          title="The interesting decisions were not only technical."
          description="The build became stronger when I treated facilitation, pacing, recoverability, and audience energy as product requirements."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {decisions.map((decision) => (
            <article
              key={decision.title}
              className="paper-card relative overflow-hidden p-6"
            >
              <NotebookPaperclip
                size="sm"
                className="absolute right-5 top-5 rotate-12 opacity-20"
              />
              <h3 className="pr-8 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
                {decision.title}
              </h3>
              <p className="mt-4 leading-7 text-muted">
                {decision.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <SectionHeading
          kicker="Receipts"
          title="The supporting system is part of the work."
          description="The game is not only a single HTML file. It includes the material needed to host, understand, resume, and extend the experience."
        />

        <div className="paper-card relative overflow-hidden p-6 md:p-8">
          <NotebookHighlight
            size="lg"
            className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
          />

          <ul className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {artifacts.map((artifact) => (
              <li
                key={artifact}
                className="grid grid-cols-[auto_1fr] gap-3 text-sm text-muted"
              >
                <span aria-hidden="true" className="font-lab text-cyan">
                  ↳
                </span>
                <span className="leading-6">{artifact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.65fr]">
          <div className="paper-note relative overflow-hidden p-7 md:p-9">
            <MarginArrow
              size="lg"
              className="absolute right-7 top-7 rotate-6 opacity-25"
            />

            <p className="lab-label text-[var(--paper-accent)]">
              What this proves
            </p>
            <p className="mt-4 field-heading max-w-4xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
              Play is still systems work.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--paper-muted)]">
              Merge the Union shows how I respond to a human need with concept,
              humor, interaction, technical execution, documentation, and
              iteration. It also proves I am physically incapable of making a
              normal icebreaker.
            </p>
          </div>

          <aside className="paper-card p-6">
            <BrandBadge tone="quiet" icon="spark">
              Context
            </BrandBadge>
            <p className="mt-5 leading-7 text-muted">
              This was created for an internal team activity while I worked at
              Abnormal AI and is presented here as an independent portfolio
              project. It does not represent, endorse, or speak for Abnormal
              AI.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href="/lab/merge-the-union/original-guide.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-cyan/35 bg-cyan px-4 py-3 text-center font-lab text-xs font-semibold uppercase tracking-[0.08em] text-night"
              >
                Original product guide ↗
              </a>
              <a
                href="/lab/merge-the-union/host-guide.md"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[var(--border)] bg-white/[0.035] px-4 py-3 text-center font-lab text-xs font-semibold uppercase tracking-[0.08em] text-ink"
              >
                Host guide ↗
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
