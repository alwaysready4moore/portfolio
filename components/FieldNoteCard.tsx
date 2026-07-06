type FieldNoteVariant = "ai" | "workplace" | "security" | "boundaries";

type FieldNoteCardProps = {
  category: string;
  title: string;
  description: string;
  slug: string;
  variant: FieldNoteVariant;
  image: string;
  imageAlt: string;
};

const variantStyles: Record<
  FieldNoteVariant,
  {
    label: string;
    accent: string;
    cover: string;
  }
> = {
  ai: {
    label: "Lab note",
    accent: "text-cyan",
    cover: "bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-cyan/[0.08]",
  },
  workplace: {
    label: "Signal glyph",
    accent: "text-gold",
    cover: "bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-gold/[0.08]",
  },
  security: {
    label: "Risk note",
    accent: "text-mint",
    cover: "bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-teal/[0.1]",
  },
  boundaries: {
    label: "Boundary note",
    accent: "text-lavender",
    cover:
      "bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-lavender/[0.08]",
  },
};

export function FieldNoteCard({
  category,
  title,
  description,
  slug,
  variant,
  image,
  imageAlt,
}: FieldNoteCardProps) {
  const styles = variantStyles[variant];

  return (
    <article className="paper-card group overflow-hidden transition duration-300 hover:-translate-y-1">
      <div className={`relative min-h-64 overflow-hidden p-5 ${styles.cover}`}>
        <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between gap-3">
          <span className={`lab-label ${styles.accent}`}>{styles.label}</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-muted">
            {category}
          </span>
        </div>

        <div className="absolute right-5 top-16 h-24 w-24 rounded-full bg-cyan/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-lavender/10 blur-2xl" />

        <div className="relative flex min-h-52 items-center justify-center pt-12">
          <img
            src={image}
            alt={imageAlt}
            className="max-h-48 w-full object-contain drop-shadow-[0_0_30px_rgba(39,217,255,0.12)] transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="border-t border-[var(--border)] p-6">
        <h3 className="font-display text-3xl font-bold leading-[1.02] tracking-[-0.045em] text-ink">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-muted">{description}</p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <a
            href={`/field-notes/${slug}`}
            className="lab-label inline-flex items-center gap-2 text-cyan transition group-hover:translate-x-1"
          >
            Read field note <span>→</span>
          </a>

          <span className="text-lg text-cyan/70">⌁</span>
        </div>
      </div>
    </article>
  );
}