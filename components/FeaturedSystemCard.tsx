import Link from "next/link";

type FeaturedSystemCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  tags: readonly string[];
  theme?: "aegis" | "toolbox" | "knowledge";
  image?: string;
  imageAlt?: string;
};

const themeStyles = {
  aegis: {
    cover: "from-cyan/20 via-white/[0.035] to-blue/10 border-cyan/20",
    label: "text-cyan",
    glow: "bg-cyan/20",
  },
  toolbox: {
    cover: "from-lavender/35 via-white/[0.06] to-blue/20 border-lavender/30",
    label: "text-cyan",
    glow: "bg-lavender/25",
  },
  knowledge: {
    cover: "from-mint/35 via-white/[0.055] to-teal/20 border-mint/25",
    label: "text-cyan",
    glow: "bg-mint/25",
  },
};

function getTheme(theme?: FeaturedSystemCardProps["theme"]) {
  if (!theme) {
    return themeStyles.aegis;
  }

  return themeStyles[theme] ?? themeStyles.aegis;
}

function getFallbackHref(title: string) {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("aegis")) {
    return "/work/aegis";
  }

  if (
    normalizedTitle.includes("analyst") ||
    normalizedTitle.includes("toolbox")
  ) {
    return "/work/new-analyst-tool";
  }

  if (
    normalizedTitle.includes("pirate") ||
    normalizedTitle.includes("knowledge")
  ) {
    return "/work/pirate-ship-knowledge-systems";
  }

  return "/work";
}

function SystemPreview({
  theme,
  image,
  imageAlt,
}: {
  theme: ReturnType<typeof getTheme>;
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <div
        className={`relative min-h-[17.5rem] overflow-hidden rounded-t-[1.65rem] border-b bg-gradient-to-br ${theme.cover}`}
      >
        <div
          className={`absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl ${theme.glow}`}
        />

        <div className="absolute left-5 top-5 z-10 flex w-[calc(100%-2.5rem)] items-center justify-between">
          <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-ink/75">
            System Preview
          </p>

          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-ink/80">
            Open
          </span>
        </div>

        <div className="relative z-10 flex min-h-[17.5rem] items-center justify-center p-8">
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="max-h-48 w-full object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative min-h-[17.5rem] overflow-hidden rounded-t-[1.65rem] border-b bg-gradient-to-br ${theme.cover}`}
    >
      <div
        className={`absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl ${theme.glow}`}
      />

      <div className="absolute left-5 top-5 z-10 flex w-[calc(100%-2.5rem)] items-center justify-between">
        <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-ink/75">
          System Preview
        </p>

        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-ink/80">
          Open
        </span>
      </div>

      <div className="relative z-10 flex min-h-[17.5rem] items-center justify-center p-8">
        <div className="w-full rounded-3xl border border-white/20 bg-white/35 p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="h-4 w-28 rounded-full bg-night/20" />
            <div className="h-8 w-16 rounded-full bg-cyan/35" />
          </div>

          <div className="h-10 rounded-full bg-white/60" />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white/45 p-4">
              <div className="h-3 w-20 rounded-full bg-night/20" />
              <div className="mt-4 space-y-2">
                <div className="h-3 rounded-full bg-night/20" />
                <div className="h-3 rounded-full bg-night/20" />
                <div className="h-3 w-2/3 rounded-full bg-night/20" />
              </div>
            </div>

            <div className="rounded-2xl bg-white/45 p-4">
              <div className="h-3 w-20 rounded-full bg-night/20" />
              <div className="mt-4 space-y-2">
                <div className="h-3 rounded-full bg-coral/40" />
                <div className="h-3 rounded-full bg-gold/50" />
                <div className="h-3 rounded-full bg-cyan/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedSystemCard({
  eyebrow,
  title,
  description,
  href,
  tags,
  theme,
  image,
  imageAlt,
}: FeaturedSystemCardProps) {
  const styles = getTheme(theme);
  const resolvedHref = href ?? getFallbackHref(title);

  return (
    <Link
      href={resolvedHref}
      className="paper-card group block overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
    >
      <SystemPreview theme={styles} image={image} imageAlt={imageAlt} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <p className={`lab-label ${styles.label}`}>{eyebrow}</p>

          <span
            aria-hidden="true"
            className="text-2xl leading-none text-cyan transition group-hover:translate-x-1"
          >
            →
          </span>
        </div>

        <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-muted">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span className="soft-chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}