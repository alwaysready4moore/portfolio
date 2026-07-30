import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  NotebookHighlight,
  NotebookPaperclip,
  PhoenixMark,
} from "@/components/brand";

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
    glow: "bg-cyan/20",
    badge: "signal" as const,
    previewLabel: "AI product",
    statusLabel: "Working prototype",
    actionLabel: "Explore Aegis",
  },
  toolbox: {
    cover:
      "from-lavender/35 via-white/[0.06] to-blue/20 border-lavender/30",
    glow: "bg-lavender/25",
    badge: "experiment" as const,
    previewLabel: "Workflow tool",
    statusLabel: "30+ releases",
    actionLabel: "View the toolbox",
  },
  knowledge: {
    cover: "from-mint/35 via-white/[0.055] to-teal/20 border-mint/25",
    glow: "bg-mint/25",
    badge: "verified" as const,
    previewLabel: "Knowledge system",
    statusLabel: "Governed at scale",
    actionLabel: "View the system",
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
  return (
    <div
      className={`relative min-h-[16rem] overflow-hidden rounded-t-[1.65rem] border-b bg-gradient-to-br ${theme.cover}`}
    >
      <div
        aria-hidden="true"
        className={`absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl ${theme.glow}`}
      />

      <NotebookHighlight
        size="lg"
        className="absolute -left-3 bottom-8 rotate-[-8deg] opacity-25"
      />

      <NotebookPaperclip
        size="md"
        className="absolute bottom-5 right-5 rotate-12 opacity-30"
      />

      <div className="absolute left-5 top-5 z-10 flex w-[calc(100%-2.5rem)] items-center justify-between gap-4">
        <BrandBadge tone="quiet" icon="spark" className="bg-night/25">
          {theme.previewLabel}
        </BrandBadge>

        <BrandBadge tone={theme.badge} icon="dot">
          {theme.statusLabel}
        </BrandBadge>
      </div>

      <div className="relative z-10 flex min-h-[16rem] items-center justify-center p-8 pt-16">
        {image ? (
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="max-h-44 w-full object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition duration-300 group-hover:scale-[1.025]"
          />
        ) : (
          <div className="w-full rounded-3xl border border-white/20 bg-white/35 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 group-hover:scale-[1.025]">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="h-4 w-28 rounded-full bg-night/20" />

              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan/30 bg-[#101820]">
                <PhoenixMark
                  variant="standard"
                  size="sm"
                  decorative
                  className="h-6 w-6"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/30 bg-white/50 p-3">
              <div className="h-8 rounded-full bg-white/70" />

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-white/55 p-4">
                  <div className="h-3 w-20 rounded-full bg-night/20" />

                  <div className="mt-4 space-y-2">
                    <div className="h-3 rounded-full bg-night/20" />
                    <div className="h-3 rounded-full bg-night/20" />
                    <div className="h-3 w-2/3 rounded-full bg-night/20" />
                  </div>
                </div>

                <div className="rounded-2xl bg-white/55 p-4">
                  <div className="h-3 w-20 rounded-full bg-night/20" />

                  <div className="mt-4 space-y-2">
                    <div className="h-3 rounded-full bg-cyan/45" />
                    <div className="h-3 w-5/6 rounded-full bg-cyan/30" />
                    <div className="h-3 w-2/3 rounded-full bg-night/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink/65">
        <CyanSpark size="xs" />
        Evidence inside
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
      aria-label={`${styles.actionLabel}: ${title}`}
      className="paper-card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
    >
      <SystemPreview theme={styles} image={image} imageAlt={imageAlt} />

      <div className="flex flex-1 flex-col p-6">
        <BrandBadge tone={styles.badge} icon="dot">
          {eyebrow}
        </BrandBadge>

        <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
          {title}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-muted">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <BrandBadge key={tag} tone="quiet" icon="none">
              {tag}
            </BrandBadge>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
          <span className="font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan">
            {styles.actionLabel}
          </span>

          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-cyan/[0.06] text-cyan transition group-hover:translate-x-1 group-hover:border-cyan/40 group-hover:bg-cyan/10"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}