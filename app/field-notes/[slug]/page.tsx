import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FieldNoteBlock, fieldNotes } from "@/data/fieldNotes";
import { SiteHeader } from "@/components/SiteHeader";

type FieldNote = (typeof fieldNotes)[number];

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const variantStyles = {
  ai: {
    accent: "text-cyan",
    border: "border-cyan/25",
    glow: "bg-cyan/20",
    wash: "from-cyan/16 via-white/[0.035] to-blue/10",
    chip: "border-cyan/30 bg-cyan/[0.08] text-cyan",
  },
  security: {
    accent: "text-blue",
    border: "border-blue/25",
    glow: "bg-blue/20",
    wash: "from-blue/16 via-white/[0.035] to-cyan/10",
    chip: "border-blue/30 bg-blue/[0.08] text-blue",
  },
  workplace: {
    accent: "text-coral",
    border: "border-coral/25",
    glow: "bg-coral/20",
    wash: "from-coral/16 via-white/[0.035] to-gold/10",
    chip: "border-coral/30 bg-coral/[0.08] text-coral",
  },
  strategy: {
    accent: "text-lavender",
    border: "border-lavender/25",
    glow: "bg-lavender/20",
    wash: "from-lavender/16 via-white/[0.035] to-cyan/10",
    chip: "border-lavender/30 bg-lavender/[0.08] text-lavender",
  },
};

const articleIntroBySlug: Record<
  string,
  {
    label: string;
    title: string;
    description: string;
  }
> = {
  "5-ways-ai-tools-are-making-you-worse-at-being-human": {
    label: "The Understory",
    title: "The Human Cost of Frictionless Communication",
    description:
      "AI can make communication faster, cleaner, and more efficient. The harder question is what constant interaction with frictionless systems is teaching us about how to speak to actual people.",
  },
  "what-a-spongebob-episode-taught-me-about-pride-change-and-why-most-corporate-initiatives-implode":
    {
      label: "The Understory",
      title: "When Change Threatens Who You Think You Are",
      description:
        "A new tool can be useful, proven, and still feel intolerable when adopting it threatens someone's identity. That is where change resistance becomes a people problem rather than a product problem.",
    },
};

function findFieldNote(slug: string) {
  return fieldNotes.find((note) => note.slug === slug);
}

function formatPublishedDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function getStyles(note: FieldNote) {
  return variantStyles[note.variant] ?? variantStyles.ai;
}

function getHeadings(note: FieldNote) {
  return note.body.filter(
    (block): block is Extract<FieldNoteBlock, { type: "heading" }> =>
      block.type === "heading",
  );
}

function getSectionLabel(text: string) {
  const match = text.match(/^(\d+)\.\s(.+)$/);

  if (!match) {
    return {
      number: "Note",
      title: text,
    };
  }

  return {
    number: match[1],
    title: match[2],
  };
}

function renderInlineText(text: string) {
  const parts = text.split(
    /(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g,
  );

  return parts.map((part, index) => {
    if (part.startsWith("***") && part.endsWith("***")) {
      return (
        <strong key={`${part}-${index}`}>
          <em>{part.slice(3, -3)}</em>
        </strong>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

function renderBlock(
  block: FieldNoteBlock,
  index: number,
  styles: ReturnType<typeof getStyles>,
) {
  if (block.type === "heading") {
    const section = getSectionLabel(block.text);

    return (
      <section
        className="mt-16 border-t border-[var(--border)] pt-10"
        key={`${block.type}-${index}`}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-start">
          <div
            className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border font-lab text-lg font-black ${styles.chip}`}
          >
            {section.number}
          </div>

          <div>
            <p className={`lab-label ${styles.accent}`}>Section</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.055em] text-ink md:text-5xl">
              {renderInlineText(section.title)}
            </h2>
          </div>
        </div>
      </section>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote
        className={`my-8 max-w-[62ch] border-l-4 ${styles.border} pl-6`}
        key={`${block.type}-${index}`}
      >
        <p className="font-display text-2xl font-bold leading-tight tracking-[-0.04em] text-ink md:text-3xl">
          {renderInlineText(block.text)}
        </p>
      </blockquote>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        className="my-8 max-w-[66ch] space-y-4 pl-6 text-lg leading-9 text-muted md:text-xl md:leading-10"
        key={`${block.type}-${index}`}
      >
        {block.items.map((item, itemIndex) => (
          <li
            className="list-disc"
            key={`${block.type}-${index}-${itemIndex}`}
          >
            {renderInlineText(item)}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "image") {
    return (
      <figure
        className={`my-12 max-w-[70ch] overflow-hidden rounded-[2rem] border ${styles.border} bg-white/[0.035] p-4`}
        key={`${block.type}-${index}`}
      >
        <div className="rounded-[1.5rem] border border-[var(--border)] bg-white p-4">
          <img
            src={block.src}
            alt={block.alt}
            className="mx-auto max-h-[420px] w-full object-contain"
          />
        </div>

        {block.caption ? (
          <figcaption className="px-3 pb-2 pt-4 text-sm leading-6 text-muted">
            {renderInlineText(block.caption)}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  const isLeadParagraph = index === 0;

  return (
    <p
      className={
        isLeadParagraph
          ? "mb-9 max-w-[62ch] text-xl font-medium leading-9 text-ink/90 md:text-2xl md:leading-10"
          : "my-7 max-w-[66ch] text-lg leading-9 text-muted md:text-xl md:leading-10"
      }
      key={`${block.type}-${index}`}
    >
      {renderInlineText(block.text)}
    </p>
  );
}

export async function generateStaticParams() {
  return fieldNotes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = findFieldNote(slug);

  if (!note) {
    return {
      title: "Field Note Not Found | AlwaysReady4Moore",
    };
  }

  const title = `${note.title} | Field Notes`;

  return {
    title,
    description: note.description,
    openGraph: {
      type: "article",
      title,
      description: note.description,
      publishedTime: note.publishedAt,
      images: [
        {
          url: note.image,
          alt: note.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: note.description,
      images: [note.image],
    },
  };
}

function ArticleLead({
  note,
  styles,
}: {
  note: FieldNote;
  styles: ReturnType<typeof getStyles>;
}) {
  const intro = articleIntroBySlug[note.slug];

  if (!intro) {
    return null;
  }

  return (
    <header className="mb-12 border-b border-[var(--border)] pb-10">
      <div className="flex items-center gap-3">
        <p className={`lab-label ${styles.accent}`}>{intro.label}</p>
        <span
          aria-hidden="true"
          className={`h-px flex-1 ${styles.glow}`}
        />
      </div>

      <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
        {intro.title}
      </h2>

      <p className="mt-5 max-w-[62ch] text-lg leading-8 text-muted md:text-xl md:leading-9">
        {intro.description}
      </p>
    </header>
  );
}

function OriginalLinkBox({
  note,
  styles,
}: {
  note: FieldNote;
  styles: ReturnType<typeof getStyles>;
}) {
  if (!note.originalUrl) {
    return null;
  }

  return (
    <aside className="paper-card p-5">
      <p className={`lab-label ${styles.accent}`}>Original publication</p>

      <p className="mt-4 text-sm leading-6 text-muted">
        This article is hosted here for the portfolio, with the original
        published version preserved on LinkedIn.
      </p>

      <a
        href={note.originalUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-2xl border border-cyan/40 bg-cyan px-4 py-3 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-night transition hover:-translate-y-0.5"
      >
        View LinkedIn original ↗
      </a>
    </aside>
  );
}

function ArticleIndex({
  note,
  styles,
}: {
  note: FieldNote;
  styles: ReturnType<typeof getStyles>;
}) {
  const headings = getHeadings(note);

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="paper-card p-5">
      <p className={`lab-label ${styles.accent}`}>In this piece</p>

      <div className="mt-5 space-y-4">
        {headings.map((heading) => {
          const section = getSectionLabel(heading.text);

          return (
            <div className="flex gap-3" key={heading.text}>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border font-lab text-xs font-black ${styles.chip}`}
              >
                {section.number}
              </span>

              <p className="pt-1 text-sm leading-6 text-muted">
                {renderInlineText(section.title)}
              </p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function ArticleMetaBox({
  note,
  styles,
}: {
  note: FieldNote;
  styles: ReturnType<typeof getStyles>;
}) {
  const isHosted = note.body.length > 0;

  return (
    <aside className="paper-card p-5">
      <p className={`lab-label ${styles.accent}`}>Field note</p>

      <div className="mt-5 space-y-4">
        <div>
          <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Category
          </p>
          <p className="mt-2 text-sm leading-6 text-ink">{note.category}</p>
        </div>

        <div className="border-t border-[var(--border)] pt-4">
          <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Published
          </p>
          <p className="mt-2 text-sm leading-6 text-ink">
            {formatPublishedDate(note.publishedAt)}
          </p>
        </div>

        <div className="border-t border-[var(--border)] pt-4">
          <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Reading time
          </p>
          <p className="mt-2 text-sm leading-6 text-ink">
            {note.readingMinutes} min read
          </p>
        </div>

        <div className="border-t border-[var(--border)] pt-4">
          <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Format
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">
            {isHosted
              ? "Hosted illustrated article with source link."
              : "Published article source page with LinkedIn original."}
          </p>
        </div>
      </div>
    </aside>
  );
}

function SourceLandingState({
  note,
  styles,
}: {
  note: FieldNote;
  styles: ReturnType<typeof getStyles>;
}) {
  return (
    <div className="mx-auto max-w-[68ch]">
      <p className={`lab-label ${styles.accent}`}>Published article</p>

      <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.045em] text-ink md:text-5xl">
        Read the original published version.
      </h2>

      <p className="mt-6 text-lg leading-9 text-muted">
        This piece is part of the Field Notes writing library. The portfolio
        page preserves the article context, category, description, and source
        link so the published work is easy to find from the site.
      </p>

      <p className="mt-6 text-lg leading-9 text-muted">
        A fully hosted version can be added here later, but the original
        publication is already available on LinkedIn.
      </p>

      {note.originalUrl ? (
        <a
          href={note.originalUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-2xl border border-cyan/40 bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night transition hover:-translate-y-0.5"
        >
          View LinkedIn original ↗
        </a>
      ) : null}
    </div>
  );
}

export default async function FieldNotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = findFieldNote(slug);

  if (!note) {
    notFound();
  }

  const styles = getStyles(note);
  const hasBody = note.body.length > 0;
  const isHosted = hasBody;

  return (
    <main className="pb-16">
      <SiteHeader />

      <article>
        <section className="lab-shell pt-8">
          <Link
            href="/field-notes"
            className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan transition hover:text-ink"
          >
            ← Back to Field Notes
          </Link>

          <div
            className={`paper-card mt-8 overflow-hidden border ${styles.border}`}
          >
            <div className={`relative bg-gradient-to-br ${styles.wash}`}>
              <div
                className={`absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${styles.glow}`}
              />

              <div className="relative z-10 p-6 md:p-10 lg:p-12">
                <p className={`lab-label ${styles.accent}`}>
                  {note.category}
                </p>

                <h1 className="mt-5 max-w-5xl font-display text-5xl font-bold leading-none tracking-[-0.058em] text-ink md:text-7xl">
                  {note.title}
                </h1>

                <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
                  {note.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className={`soft-chip ${styles.accent}`}>
                    {formatPublishedDate(note.publishedAt)}
                  </span>

                  <span className={`soft-chip ${styles.accent}`}>
                    {note.readingMinutes} min read
                  </span>

                  <span className={`soft-chip ${styles.accent}`}>
                    {isHosted ? "Hosted article" : "Published article"}
                  </span>

                  {isHosted ? (
                    <span className={`soft-chip ${styles.accent}`}>
                      Illustrated field note
                    </span>
                  ) : null}

                  {note.originalUrl ? (
                    <span className={`soft-chip ${styles.accent}`}>
                      LinkedIn original preserved
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="relative z-10 border-t border-[var(--border)] bg-night/30 p-4 md:p-6">
                <div className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-night/50 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                  <img
                    src={note.image}
                    alt={note.imageAlt}
                    loading="eager"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lab-shell pt-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="paper-card p-6 md:p-10 lg:p-12">
              {hasBody ? (
                <div className="mx-auto max-w-[76ch]">
                  <ArticleLead note={note} styles={styles} />

                  {note.body.map((block, index) =>
                    renderBlock(block, index, styles),
                  )}
                </div>
              ) : (
                <SourceLandingState note={note} styles={styles} />
              )}
            </div>

            <div className="space-y-5 lg:sticky lg:top-8">
              {hasBody ? <OriginalLinkBox note={note} styles={styles} /> : null}
              <ArticleIndex note={note} styles={styles} />
              <ArticleMetaBox note={note} styles={styles} />
            </div>
          </div>
        </section>

        <section className="lab-shell pt-10">
          <div
            className={`paper-card flex flex-col gap-6 border p-6 md:flex-row md:items-center md:justify-between md:p-8 ${styles.border}`}
          >
            <div>
              <p className={`lab-label ${styles.accent}`}>More writing</p>

              <h2 className="mt-3 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink md:text-4xl">
                Keep exploring the Field Notes.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-muted">
                Browse the full collection of illustrated articles on AI,
                security, workplace communication, change, and systems.
              </p>
            </div>

            <Link
              href="/field-notes"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-cyan/40 bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night transition hover:-translate-y-0.5"
            >
              ← View all articles
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}