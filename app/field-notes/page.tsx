import type { Metadata } from "next";
import {
  BrandBadge,
  CoffeeRing,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  NotebookTab,
} from "@/components/brand";
import { FieldNoteCard } from "@/components/FieldNoteCard";
import { SelectedPublications } from "@/components/SelectedPublications";
import { SiteHeader } from "@/components/SiteHeader";
import { fieldNotes } from "@/data/fieldNotes";

export const metadata: Metadata = {
  title: "Field Notes | AlwaysReady4Moore",
  description:
    "Published writing by Marquetta Moore on AI, cybersecurity, workplace communication, organizational change, and content strategy.",
};

const writingLanes = [
  {
    label: "AI & human behavior",
    description:
      "Essays about how technology changes habits, communication, judgment, and relationships.",
    Icon: NotebookHighlight,
    tone: "signal" as const,
  },
  {
    label: "Security narratives",
    description:
      "Cybersecurity writing that explains risk, detection logic, and threat behavior in plain language.",
    Icon: NotebookPaperclip,
    tone: "verified" as const,
  },
  {
    label: "Workplace systems",
    description:
      "Writing about communication, resistance, conflict, pride, and change at work.",
    Icon: CoffeeRing,
    tone: "warning" as const,
  },
  {
    label: "Content strategy",
    description:
      "Analysis that uses games, media, and pop culture to explain storytelling and design choices.",
    Icon: NotebookTab,
    tone: "experiment" as const,
  },
];

export default function FieldNotesPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="signal" icon="spark">
            Field Notes
          </BrandBadge>

          <BrandBadge tone="quiet" icon="dot">
            Published writing
          </BrandBadge>
        </div>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.98fr_0.62fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Essays, analysis, and
              <span className="headline-signal block sm:inline"> published work</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              Writing on AI, cybersecurity, workplace communication, change,
              and content strategy. Hosted articles keep a link to the original
              publication.
            </p>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <MarginArrow
              size="lg"
              className="absolute right-5 top-5 rotate-6 opacity-25"
            />

            <BrandBadge tone="quiet" icon="spark">
              Topics
            </BrandBadge>

            <p className="mt-4 leading-7 text-muted">
              I write to make complex or emotionally loaded ideas easier to
              follow without flattening the subject.
            </p>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {writingLanes.map((lane) => {
            const Icon = lane.Icon;

            return (
              <article
                className="paper-card relative overflow-hidden p-5"
                key={lane.label}
              >
                <Icon
                  size="lg"
                  className="absolute -right-2 -top-2 opacity-25"
                />

                <BrandBadge tone={lane.tone} icon="dot">
                  {lane.label}
                </BrandBadge>

                <p className="mt-4 text-sm leading-6 text-muted">
                  {lane.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <SelectedPublications />

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              Published writing
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Read the <span className="headline-signal">articles</span>
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            Each article has a portfolio page. Hosted versions also link to the
            original publication.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {fieldNotes.map((note) => (
            <FieldNoteCard key={note.slug} {...note} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <NotebookHighlight
            size="lg"
            className="absolute right-6 top-6 rotate-[-8deg] opacity-25"
          />

          <CyanSpark
            size="md"
            className="absolute bottom-7 right-8 opacity-60"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Good writing chooses the frame, removes the noise, and helps the
            reader reach the next idea.
          </p>
        </div>
      </section>
    </main>
  );
}
