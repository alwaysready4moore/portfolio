import Link from "next/link";
import { BrandBadge, CyanSpark } from "@/components/brand";
import type { FieldNoteVariant } from "@/data/fieldNotes";

type FieldNoteCardInput = {
  category: string;
  title: string;
  description: string;
  slug: string;
  variant?: FieldNoteVariant;
  image?: string;
  imageAlt?: string;
  originalUrl?: string;
  originalLabel?: string;
  publishedAt?: string;
  readingMinutes?: number;
  body?: readonly unknown[];
};

type FieldNoteCardProps =
  | {
      note: FieldNoteCardInput;
    }
  | (FieldNoteCardInput & {
      note?: never;
    });

const variantStyles = {
  ai: {
    cover: "from-cyan/20 via-white/[0.035] to-blue/10 border-cyan/20",
    label: "text-cyan",
    glow: "bg-cyan/20",
    badgeTone: "signal" as const,
  },
  workplace: {
    cover: "from-coral/20 via-white/[0.035] to-gold/10 border-coral/20",
    label: "text-coral",
    glow: "bg-coral/20",
    badgeTone: "warning" as const,
  },
  security: {
    cover: "from-blue/20 via-white/[0.035] to-cyan/10 border-blue/20",
    label: "text-blue",
    glow: "bg-blue/20",
    badgeTone: "verified" as const,
  },
  strategy: {
    cover: "from-lavender/20 via-white/[0.035] to-cyan/10 border-lavender/20",
    label: "text-lavender",
    glow: "bg-lavender/20",
    badgeTone: "experiment" as const,
  },
};

function getStyles(variant?: FieldNoteVariant) {
  if (!variant) {
    return variantStyles.ai;
  }

  return variantStyles[variant] ?? variantStyles.ai;
}

function formatPublishedDate(date?: string) {
  if (!date) {
    return null;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function FieldNoteCard(props: FieldNoteCardProps) {
  const note = props.note ?? props;
  const styles = getStyles(note.variant);
  const isHosted = (note.body?.length ?? 0) > 0;

  const image =
    note.image ?? "/pictograms/field-notes/adult-brain-running.png";

  const imageAlt =
    note.imageAlt ??
    "An editorial illustration representing a published field note.";

  return (
    <Link
      href={`/field-notes/${note.slug}`}
      className="paper-card group block overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
    >
      <div
        className={`relative overflow-hidden rounded-[1.35rem] border bg-gradient-to-br p-4 ${styles.cover}`}
      >
        <div
          aria-hidden="true"
          className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${styles.glow}`}
        />

        <div className="relative z-10 flex items-center justify-between gap-3">
          <BrandBadge tone={styles.badgeTone} icon="dot">
            {note.category}
          </BrandBadge>

          <BrandBadge tone="quiet" icon="none" className="bg-night/20">
            Field Note
          </BrandBadge>
        </div>

        <div className="relative z-10 mt-4 aspect-[3/2] overflow-hidden rounded-[1.1rem] border border-white/10 bg-night/55 shadow-[0_18px_45px_rgba(0,0,0,0.24)]">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.018]"
          />
        </div>

        <div className="relative z-10 mt-3 flex items-center gap-2 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink/60">
          <CyanSpark size="xs" />
          Working note
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={`lab-label ${styles.label}`}>
            {isHosted
              ? "Hosted here · LinkedIn original"
              : "Published article · LinkedIn original"}
          </p>

          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-cyan/[0.06] text-cyan transition group-hover:translate-x-1 group-hover:border-cyan/40"
          >
            →
          </span>
        </div>

        {(note.publishedAt || note.readingMinutes) ? (
          <div className="mt-4 flex flex-wrap items-center gap-2 font-lab text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-muted">
            {note.publishedAt ? (
              <span>{formatPublishedDate(note.publishedAt)}</span>
            ) : null}

            {note.publishedAt && note.readingMinutes ? (
              <span aria-hidden="true">•</span>
            ) : null}

            {note.readingMinutes ? (
              <span>{note.readingMinutes} min read</span>
            ) : null}
          </div>
        ) : null}

        <h2 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
          {note.title}
        </h2>

        <p className="mt-4 leading-7 text-muted">{note.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          <BrandBadge tone="quiet" icon="spark">
            {isHosted ? "Readable on site" : "Source linked"}
          </BrandBadge>

          <BrandBadge tone="quiet" icon="none">
            {isHosted ? "Article archive" : "External original"}
          </BrandBadge>
        </div>

        <p className="mt-5 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan">
          {isHosted ? "Read article →" : "View article source →"}
        </p>
      </div>
    </Link>
  );
}
