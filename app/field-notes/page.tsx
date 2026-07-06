import { FieldNoteCard } from "@/components/FieldNoteCard";
import { SiteHeader } from "@/components/SiteHeader";
import { fieldNotes } from "@/data/fieldNotes";

export default function FieldNotesPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-14">
        <p className="lab-label text-cyan">Field Notes</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
          Writing on AI, work, communication, and staying human.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Essays, arguments, and observations from the messy middle of systems,
          behavior, tools, and people.
        </p>
      </section>

      <section className="lab-shell pt-14">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {fieldNotes.map((note) => (
            <FieldNoteCard
              key={note.title}
              category={note.category}
              title={note.title}
              description={note.description}
              slug={note.slug}
              variant={note.variant}
              image={note.image}
              imageAlt={note.imageAlt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}