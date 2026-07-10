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
      "Essays about what technology changes in our habits, communication, judgment, and relationships with other people.",
    Icon: NotebookHighlight,
    tone: "signal" as const,
  },
  {
    label: "Security narratives",
    description:
      "B2B cybersecurity pieces that translate risk, detection logic, and threat behavior into clear buyer-facing arguments.",
    Icon: NotebookPaperclip,
    tone: "verified" as const,
  },
  {
    label: "Workplace systems",
    description:
      "Practical writing about communication, resistance, conflict, pride, and the human friction inside organizational change.",
    Icon: CoffeeRing,
    tone: "warning" as const,
  },
  {
    label: "Content strategy",
    description:
      "Analytical pieces that use games, media, and pop culture to explain audience-aware storytelling and design.",
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
            Published thinking
          </BrandBadge>
        </div>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.98fr_0.62fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Published thinking, with receipts.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              Essays and thought pieces on AI, cybersecurity, workplace
              communication, change resistance, and content strategy. Some are
              fully hosted here; all preserve their original LinkedIn source.
            </p>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <MarginArrow
              size="lg"
              className="absolute right-5 top-5 rotate-6 opacity-25"
            />

            <BrandBadge tone="quiet" icon="spark">
              Writing range
            </BrandBadge>

            <p className="mt-4 leading-7 text-muted">
              The through-line is translation: taking complicated, fast-moving,
              or emotionally loaded ideas and turning them into arguments people
              can actually follow.
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

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              Published writing
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Articles in the wild.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            Each article has a portfolio page with either a hosted version or a
            source page that preserves the original LinkedIn publication.
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
            Writing is system design with sentences: choose the frame, reduce
            the noise, and make the next idea easier to reach.
          </p>
        </div>
      </section>
    </main>
  );
}