import Link from "next/link";
import {
  BrandBadge,
  CoffeeRing,
  CyanSpark,
  NotebookHighlight,
  NotebookPaperclip,
  NotebookTab,
} from "@/components/brand";
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
  body?: readonly unknown[];
};

type FieldNoteCardProps =
  | {
      note: FieldNoteCardInput;
    }
  | (FieldNoteCardInput & {
      note?: never;
    });

const articleImagesBySlug: Record<string, string> = {
  "5-ways-ai-tools-are-making-you-worse-at-being-human":
    "/pictograms/field-notes/adult-brain-running.png",

  "your-email-security-tool-stopped-yesterdays-attacks-heres-what-its-missing-today":
    "/pictograms/field-notes/prompt-speak-jira-brain.png",

  "5-ways-your-coworkers-use-psychological-magic-to-turn-feedback-against-you":
    "/pictograms/field-notes/chat-bubbles-pile.png",

  "the-romance-of-the-scammed-why-humans-are-biologically-programmed-to-trust-sketchy-links":
    "/pictograms/field-notes/phatic-search-bar.png",

  "what-a-spongebob-episode-taught-me-about-pride-change-and-why-most-corporate-initiatives-implode":
    "/pictograms/field-notes/empathy-boundaries.png",

  "the-art-of-showing-not-telling-left-4-deads-4-minute-intro-remains-a-masterclass":
    "/pictograms/field-notes/person-talking-to-ai.png",

  "someone-is-about-to-be-really-rude-to-you-at-work-heres-what-you-do":
    "/pictograms/field-notes/good-prompt-compassion.png",
};

const articleImageAltBySlug: Record<string, string> = {
  "5-ways-ai-tools-are-making-you-worse-at-being-human":
    "A pictogram of a running figure with a brain labeled Adult Brain and cyan motion lines.",

  "your-email-security-tool-stopped-yesterdays-attacks-heres-what-its-missing-today":
    "A pictogram of a brain and workflow language representing security analysis and missing context.",

  "5-ways-your-coworkers-use-psychological-magic-to-turn-feedback-against-you":
    "A pictogram of stacked chat bubbles representing workplace communication pressure.",

  "the-romance-of-the-scammed-why-humans-are-biologically-programmed-to-trust-sketchy-links":
    "A pictogram of a person interacting with a search bar, representing trust and risky online behavior.",

  "what-a-spongebob-episode-taught-me-about-pride-change-and-why-most-corporate-initiatives-implode":
    "A pictogram about empathy, boundaries, and change resistance.",

  "the-art-of-showing-not-telling-left-4-deads-4-minute-intro-remains-a-masterclass":
    "A pictogram of a person and dialogue bubbles representing storytelling and audience understanding.",

  "someone-is-about-to-be-really-rude-to-you-at-work-heres-what-you-do":
    "A pictogram representing compassion, boundaries, and difficult communication.",
};

const variantStyles = {
  ai: {
    cover: "from-cyan/20 via-white/[0.035] to-blue/10 border-cyan/20",
    label: "text-cyan",
    glow: "bg-cyan/20",
    badgeTone: "signal" as const,
    decoration: NotebookHighlight,
  },
  workplace: {
    cover: "from-coral/20 via-white/[0.035] to-gold/10 border-coral/20",
    label: "text-coral",
    glow: "bg-coral/20",
    badgeTone: "warning" as const,
    decoration: CoffeeRing,
  },
  security: {
    cover: "from-blue/20 via-white/[0.035] to-cyan/10 border-blue/20",
    label: "text-blue",
    glow: "bg-blue/20",
    badgeTone: "verified" as const,
    decoration: NotebookPaperclip,
  },
  strategy: {
    cover: "from-lavender/20 via-white/[0.035] to-cyan/10 border-lavender/20",
    label: "text-lavender",
    glow: "bg-lavender/20",
    badgeTone: "experiment" as const,
    decoration: NotebookTab,
  },
};

function getStyles(variant?: FieldNoteVariant) {
  if (!variant) {
    return variantStyles.ai;
  }

  return variantStyles[variant] ?? variantStyles.ai;
}

export function FieldNoteCard(props: FieldNoteCardProps) {
  const note = props.note ?? props;
  const styles = getStyles(note.variant);
  const isHosted = (note.body?.length ?? 0) > 0;
  const Decoration = styles.decoration;

  const image =
    articleImagesBySlug[note.slug] ??
    note.image ??
    "/pictograms/field-notes/adult-brain-running.png";

  const imageAlt =
    articleImageAltBySlug[note.slug] ??
    note.imageAlt ??
    "A pictogram-style illustration representing a published field note.";

  return (
    <Link
      href={`/field-notes/${note.slug}`}
      className="paper-card group block overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
    >
      <div
        className={`relative min-h-60 overflow-hidden rounded-[1.35rem] border bg-gradient-to-br p-5 ${styles.cover}`}
      >
        <div
          aria-hidden="true"
          className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${styles.glow}`}
        />

        <Decoration
          size="lg"
          className="absolute -right-2 bottom-5 rotate-12 opacity-25"
        />

        <div className="relative z-10 flex items-center justify-between gap-3">
          <BrandBadge tone={styles.badgeTone} icon="dot">
            {note.category}
          </BrandBadge>

          <BrandBadge tone="quiet" icon="none" className="bg-night/20">
            Field Note
          </BrandBadge>
        </div>

        <div className="relative z-10 mt-7 flex min-h-32 items-center justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="max-h-40 w-full object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.22)] transition duration-300 group-hover:scale-[1.025]"
          />
        </div>

        <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink/60">
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