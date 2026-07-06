import type { ReactNode } from "react";

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
    label: string;
    accent: string;
    cover: string;
    motif: ReactNode;
  }
> = {
  ai: {
    label: "Lab note",
    accent: "text-cyan",
    cover: "bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-cyan/[0.08]",
    motif: <AdultBrainPictogram />,
  },
  workplace: {
    label: "Signal glyph",
    accent: "text-gold",
    cover: "bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-gold/[0.08]",
    motif: <ChatPilePictogram />,
  },
  security: {
    label: "Risk note",
    accent: "text-mint",
    cover: "bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-teal/[0.1]",
    motif: <ShieldPictogram />,
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
      <div className={`relative min-h-64 overflow-hidden p-5 ${styles.cover}`}>
        <div className="absolute inset-x-5 top-5 flex items-center justify-between">
          <span className={`lab-label ${styles.accent}`}>{styles.label}</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-muted">
            {category}
          </span>
        </div>

        <div className="absolute right-5 top-16 h-24 w-24 rounded-full bg-cyan/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-lavender/10 blur-2xl" />

        <div className="relative flex min-h-52 items-end justify-center pt-14">
          {styles.motif}
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

function AdultBrainPictogram() {
  return (
    <div className="relative h-44 w-full max-w-sm">
      <div className="absolute left-8 top-12 h-5 w-16 rounded-full bg-white/85" />
      <div className="absolute left-14 top-20 h-5 w-20 rounded-full bg-white/65" />
      <div className="absolute left-5 top-28 h-5 w-14 rounded-full bg-white/45" />

      <div className="absolute left-[40%] top-8 h-14 w-14 rounded-full bg-white" />
      <div className="absolute left-[43%] top-20 h-20 w-16 rotate-[-18deg] rounded-[1.5rem] bg-white">
        <div className="absolute inset-x-2 top-7 rotate-[18deg] text-center font-lab text-[0.62rem] font-semibold uppercase leading-3 text-night">
          Adult
          <br />
          brain
        </div>
      </div>
      <div className="absolute left-[35%] top-28 h-9 w-20 rotate-[-28deg] rounded-full bg-white" />
      <div className="absolute left-[53%] top-29 h-8 w-24 rotate-[22deg] rounded-full bg-white" />
      <div className="absolute left-[33%] top-38 h-8 w-24 rotate-[28deg] rounded-full bg-white" />
      <div className="absolute left-[54%] top-39 h-8 w-20 rotate-[-34deg] rounded-full bg-white" />

      <div className="absolute right-7 top-16 h-16 w-16 rounded-full bg-white" />
      <div className="absolute right-10 top-20 h-4 w-4 rounded-full bg-night" />
      <div className="absolute right-3 top-19 h-4 w-4 rounded-full bg-night" />
      <div className="absolute right-7 top-37 h-24 w-20 rounded-t-[2rem] bg-white" />
      <div className="absolute right-[-6px] top-31 h-20 w-20 rotate-[-18deg] rounded-br-[4rem] rounded-tl-[3rem] bg-white" />
      <div className="absolute right-17 top-35 h-9 w-16 rotate-[28deg] rounded-full bg-white" />
      <div className="absolute right-3 top-42 h-9 w-16 rotate-[-28deg] rounded-full bg-white" />
    </div>
  );
}

function ChatPilePictogram() {
  const bubbles = [
    "left-10 top-16 h-14 w-24",
    "left-24 top-8 h-13 w-24",
    "left-36 top-20 h-14 w-28",
    "left-6 top-31 h-15 w-28",
    "left-28 top-36 h-14 w-24",
    "left-50 top-39 h-14 w-24",
    "left-18 top-54 h-14 w-28",
    "left-44 top-56 h-13 w-24",
  ];

  return (
    <div className="relative h-44 w-full max-w-sm">
      {bubbles.map((bubble) => (
        <div
          className={`absolute ${bubble} rounded-[1.2rem] border-2 border-white bg-transparent`}
          key={bubble}
        >
          <div className="absolute left-4 top-5 h-2 w-2 rounded-full bg-white" />
          <div className="absolute left-9 top-5 h-2 w-2 rounded-full bg-white" />
          <div className="absolute left-14 top-5 h-2 w-2 rounded-full bg-white" />
        </div>
      ))}

      <div className="absolute left-[43%] top-[42%] h-16 w-16 rounded-full bg-white" />
      <div className="absolute left-[38%] top-[53%] h-24 w-28 rounded-t-[2rem] bg-white" />
      <div className="absolute left-[46%] top-[49%] h-3 w-3 rounded-full bg-night" />
      <div className="absolute left-[56%] top-[49%] h-3 w-3 rounded-full bg-night" />
    </div>
  );
}

function ShieldPictogram() {
  return (
    <div className="relative h-44 w-full max-w-sm">
      <div className="absolute left-1/2 top-4 h-32 w-28 -translate-x-1/2 rounded-t-[2.4rem] bg-white" />
      <div className="absolute left-1/2 top-22 h-28 w-28 -translate-x-1/2 rotate-45 bg-white" />

      <div className="absolute left-1/2 top-15 h-16 w-16 -translate-x-1/2 rounded-full bg-night" />
      <div className="absolute left-[44%] top-20 h-3 w-3 rounded-full bg-white" />
      <div className="absolute left-[53%] top-20 h-3 w-3 rounded-full bg-white" />
      <div className="absolute left-[45%] top-29 h-2 w-8 rounded-full bg-white" />

      <div className="absolute left-10 top-20 h-3 w-16 rounded-full bg-cyan" />
      <div className="absolute right-10 top-20 h-3 w-16 rounded-full bg-cyan" />
      <div className="absolute left-14 top-34 h-3 w-12 rounded-full bg-white/65" />
      <div className="absolute right-14 top-34 h-3 w-12 rounded-full bg-white/65" />

      <div className="absolute bottom-0 left-1/2 h-3 w-48 -translate-x-1/2 rounded-full bg-white/25" />
    </div>
  );
}