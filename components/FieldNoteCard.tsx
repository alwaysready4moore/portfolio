type FieldNoteVariant = "ai" | "workplace" | "security";

type FieldNoteCardProps = {
  category: string;
  title: string;
  description: string;
  slug: string;
  variant: FieldNoteVariant;
};

const variantStyles: Record<
  FieldNoteVariant,
  {
    cover: string;
    badge: string;
    motif: React.ReactNode;
  }
> = {
  ai: {
    cover: "from-lavender via-paper to-mint",
    badge: "bg-mint",
    motif: (
      <div className="grid gap-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-ink/10" />
          <div className="grid flex-1 gap-2">
            <div className="h-3 w-3/4 rounded-full bg-ink/20" />
            <div className="h-3 w-1/2 rounded-full bg-ink/15" />
          </div>
        </div>
        <div className="ml-8 rounded-3xl bg-white/65 p-4 shadow-sm">
          <div className="mb-3 h-3 w-20 rounded-full bg-teal/45" />
          <div className="grid gap-2">
            <div className="h-2 rounded-full bg-ink/15" />
            <div className="h-2 w-2/3 rounded-full bg-ink/15" />
          </div>
        </div>
      </div>
    ),
  },
  workplace: {
    cover: "from-sky via-paper to-coral/25",
    badge: "bg-sky",
    motif: (
      <div className="grid gap-4">
        <div className="rounded-[2rem] bg-white/70 p-4 shadow-sm">
          <div className="mb-3 h-3 w-24 rounded-full bg-ink/20" />
          <div className="grid gap-2">
            <div className="h-3 rounded-full bg-ink/15" />
            <div className="h-3 w-4/5 rounded-full bg-ink/15" />
          </div>
        </div>
        <div className="ml-10 rounded-[2rem] bg-coral/35 p-4 shadow-sm">
          <div className="mb-3 h-3 w-20 rounded-full bg-ink/20" />
          <div className="h-3 w-2/3 rounded-full bg-ink/15" />
        </div>
      </div>
    ),
  },
  security: {
    cover: "from-ink via-teal to-sky",
    badge: "bg-gold",
    motif: (
      <div className="grid gap-4 text-paper">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[2rem] border border-paper/35 bg-paper/10 font-lab text-2xl">
          ✓
        </div>
        <div className="grid gap-2 rounded-3xl bg-paper/10 p-4">
          <div className="h-3 w-full rounded-full bg-paper/35" />
          <div className="h-3 w-4/5 rounded-full bg-paper/25" />
          <div className="h-3 w-2/3 rounded-full bg-paper/20" />
        </div>
      </div>
    ),
  },
};

export function FieldNoteCard({
  category,
  title,
  description,
  slug,
  variant,
}: FieldNoteCardProps) {
  const styles = variantStyles[variant];

  return (
    <article className="paper-card group overflow-hidden transition duration-300 hover:-translate-y-1">
      <div
        className={`relative min-h-56 overflow-hidden bg-gradient-to-br p-5 ${styles.cover}`}
      >
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/25 blur-sm" />
        <div className="absolute bottom-5 right-5 rounded-full border border-current/15 bg-white/35 px-3 py-1 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-ink">
          Field note
        </div>

        <span
          className={`relative inline-flex rounded-full border border-[var(--border)] px-3 py-1 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-ink ${styles.badge}`}
        >
          {category}
        </span>

        <div className="relative mt-8">{styles.motif}</div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-3xl font-bold leading-none tracking-[-0.045em]">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-muted">{description}</p>

        <a
          href={`/field-notes/${slug}`}
          className="lab-label mt-6 inline-flex items-center gap-2 text-teal transition group-hover:translate-x-1"
        >
          Read field note <span>→</span>
        </a>
      </div>
    </article>
  );
}