import Link from "next/link";
import { fieldNotes } from "@/data/fieldNotes";

type FieldNote = (typeof fieldNotes)[number];

type FieldNoteCardProps =
  | {
      note: FieldNote;
    }
  | FieldNote;

const variantStyles = {
  ai: {
    cover: "from-cyan/20 via-white/[0.035] to-blue/10 border-cyan/20",
    label: "text-cyan",
    glow: "bg-cyan/20",
  },
  workplace: {
    cover: "from-coral/20 via-white/[0.035] to-gold/10 border-coral/20",
    label: "text-coral",
    glow: "bg-coral/20",
  },
  security: {
    cover: "from-blue/20 via-white/[0.035] to-cyan/10 border-blue/20",
    label: "text-blue",
    glow: "bg-blue/20",
  },
  strategy: {
    cover: "from-lavender/20 via-white/[0.035] to-cyan/10 border-lavender/20",
    label: "text-lavender",
    glow: "bg-lavender/20",
  },
};

function getStyles(variant?: FieldNote["variant"]) {
  if (!variant) {
    return variantStyles.ai;
  }

  return variantStyles[variant] ?? variantStyles.ai;
}

function getNote(props: FieldNoteCardProps) {
  if ("note" in props && props.note) {
    return props.note;
  }

  return props as FieldNote;
}

export function FieldNoteCard(props: FieldNoteCardProps) {
  const note = getNote(props);
  const styles = getStyles(note.variant);

  return (
    <Link
      href={`/field-notes/${note.slug}`}
      className="paper-card group block overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
    >
      <div
        className={`relative min-h-64 overflow-hidden rounded-[1.35rem] border bg-gradient-to-br p-5 ${styles.cover}`}
      >
        <div
          className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${styles.glow}`}
        />

        <div className="relative z-10 flex items-center justify-between gap-3">
          <span className={`lab-label ${styles.label}`}>{note.category}</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-muted">
            Article
          </span>
        </div>

        <div className="relative z-10 mt-8 flex min-h-36 items-center justify-center">
          <img
            src={note.image}
            alt={note.imageAlt}
            className="max-h-44 w-full object-contain"
          />
        </div>
      </div>

      <div className="p-6">
        <p className={`lab-label ${styles.label}`}>
          {note.originalUrl ? "Hosted here · LinkedIn original" : "Hosted here"}
        </p>

        <h2 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
          {note.title}
        </h2>

        <p className="mt-4 leading-7 text-muted">{note.description}</p>

        <p className="mt-6 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan">
          Read article →
        </p>
      </div>
    </Link>
  );
}