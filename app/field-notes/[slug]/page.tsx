import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { fieldNotes } from "@/data/fieldNotes";

const noteDetails: Record<
  string,
  {
    status: string;
    readTime: string;
    note: string;
    themes: string[];
  }
> = {
  "5-ways-ai-tools-are-quietly-making-you-worse-at-being-human": {
    status: "Article page in progress",
    readTime: "Field note",
    note: "This page is reserved for the full version of the article. The title and framing are preserved exactly from the Field Notes index.",
    themes: ["AI", "Human judgment", "Communication", "Convenience"],
  },
  "how-i-talk-to-ai-so-it-actually-helps": {
    status: "Article page in progress",
    readTime: "Field note",
    note: "This page is reserved for the full version of the article. The title and framing are preserved exactly from the Field Notes index.",
    themes: ["AI collaboration", "Prompting", "Communication design", "Systems thinking"],
  },
  "the-attention-economy-feeds-on-your-unfinished-thoughts": {
    status: "Article page in progress",
    readTime: "Field note",
    note: "This page is reserved for the full version of the article. The title and framing are preserved exactly from the Field Notes index.",
    themes: ["Attention", "Digital behavior", "Communication", "Thoughtfulness"],
  },
  "empathy-without-boundaries-isnt-empathy": {
    status: "Article page in progress",
    readTime: "Field note",
    note: "This page is reserved for the full version of the article. The title and framing are preserved exactly from the Field Notes index.",
    themes: ["Empathy", "Boundaries", "Work", "Self-trust"],
  },
};

export function generateStaticParams() {
  return fieldNotes.map((note) => ({
    slug: note.slug,
  }));
}

function ThemeChip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[var(--border)] bg-white/5 px-3 py-1.5 font-lab text-xs font-semibold uppercase tracking-[0.06em] text-muted">
      {children}
    </span>
  );
}

export default async function FieldNoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = fieldNotes.find((item) => item.slug === slug);
  const details = noteDetails[slug];

  if (!note || !details) {
    notFound();
  }

  return (
    <main className="pb-16">
      <SiteHeader />

      <article>
        <section className="lab-shell pt-10">
          <Link
            href="/field-notes"
            className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
          >
            ← Back to Field Notes
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
            <div>
              <p className="lab-label text-cyan">{note.category}</p>

              <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
                {note.title}
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-muted">
                {note.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="soft-chip">{details.status}</span>
                <span className="soft-chip">{details.readTime}</span>
              </div>
            </div>

            <aside className="paper-card overflow-hidden">
              <div className="border-b border-[var(--border)] bg-white/[0.035] p-3">
                <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-night">
                  <img
                    src={note.image}
                    alt={note.imageAlt}
                    className="aspect-[16/12] w-full object-contain p-6"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="lab-label text-cyan">Article themes</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {details.themes.map((theme) => (
                    <ThemeChip key={theme}>{theme}</ThemeChip>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="lab-shell pt-16">
          <div className="paper-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="lab-label text-cyan">Field note</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
                Full article coming soon.
              </h2>
            </div>

            <div className="grid gap-5">
              <p className="text-lg leading-8 text-muted">{details.note}</p>

              <p className="text-lg leading-8 text-muted">
                When the full essay is added, this page will keep the same title,
                slug, category, and visual identity. No retitling, no rewriting
                the premise without your say-so.
              </p>
            </div>
          </div>
        </section>

        <section className="lab-shell pt-16">
          <div className="paper-note p-7 md:p-9">
            <p className="field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
              {note.title}
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--paper-muted)]">
              {note.description}
            </p>
          </div>
        </section>

        <section className="lab-shell pt-16">
          <div className="paper-card flex flex-col justify-between gap-6 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <p className="lab-label text-cyan">More writing</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                Back to Field Notes.
              </h2>
            </div>

            <Link
              href="/field-notes"
              className="focus-ring rounded-2xl border border-cyan/40 bg-cyan px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night"
            >
              View all notes
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}