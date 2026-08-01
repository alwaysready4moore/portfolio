import Link from "next/link";
import { brand } from "@/brand";
import {
  BrandBadge,
  BrandSection,
  CoffeeRing,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  NotebookTab,
  NotebookTape,
  PhoenixMark,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

const colorEntries = [
  {
    name: "Ink",
    value: brand.colors.ink,
    description: "Primary shapes, structure, and visual weight.",
    textClassName: "text-white",
  },
  {
    name: "Paper",
    value: brand.colors.paper,
    description: "Editorial surfaces and diagrams.",
    textClassName: "text-[#050A0C]",
  },
  {
    name: "Night",
    value: brand.colors.night,
    description: "The dark background around the work.",
    textClassName: "text-white",
  },
  {
    name: "Surface",
    value: brand.colors.surface,
    description: "Cards, modules, and working areas.",
    textClassName: "text-white",
  },
  {
    name: "Signal",
    value: brand.colors.signal,
    description: "The correct path, progress, or verified result.",
    textClassName: "text-[#050A0C]",
  },
  {
    name: "Signal Soft",
    value: brand.colors.signalSoft,
    description: "Secondary emphasis and soft signal states.",
    textClassName: "text-[#050A0C]",
  },
  {
    name: "Border",
    value: brand.colors.border,
    description: "Structure that separates sections without adding noise.",
    textClassName: "text-white",
  },
  {
    name: "Muted Text",
    value: brand.colors.textMuted,
    description: "Supporting copy, metadata, and lower-priority details.",
    textClassName: "text-[#050A0C]",
  },
];

const typographySamples = [
  {
    role: "Display",
    className: brand.typography.roles.display.className,
    sample: "Make the system easier to understand.",
    purpose: brand.typography.roles.display.purpose,
  },
  {
    role: "Body",
    className: brand.typography.roles.body.className,
    sample:
      "Useful systems make the right information easier to find, understand, and act on.",
    purpose: brand.typography.roles.body.purpose,
  },
  {
    role: "Lab",
    className: brand.typography.roles.lab.className,
    sample: "SYSTEM STATUS / ACTIVE",
    purpose: brand.typography.roles.lab.purpose,
  },
];

const notebookElements = [
  {
    name: "Margin notes",
    description:
      "Short observations that add context without interrupting the main narrative.",
    Icon: MarginArrow,
  },
  {
    name: "Tabs",
    description:
      "Small labels that show visitors where they are.",
    Icon: NotebookTab,
  },
  {
    name: "Sticky notes",
    description:
      "Questions, unfinished thoughts, versions, and active experiments.",
    Icon: NotebookTape,
  },
  {
    name: "Cyan arrows",
    description:
      "Directional marks that show the path through information or work.",
    Icon: NotebookHighlight,
  },
  {
    name: "Paperclips",
    description:
      "A shorthand for relationships, evidence, and connected ideas.",
    Icon: NotebookPaperclip,
  },
  {
    name: "Coffee rings",
    description:
      "Use sparingly to show that the work is active and lived-in.",
    Icon: CoffeeRing,
  },
];

const markScaleTests = [
  {
    label: "Large use",
    size: "lg" as const,
    className: "h-24 w-24",
    use: "Field Guide, hero panels, documents, and larger brand moments.",
  },
  {
    label: "Standard interface use",
    size: "md" as const,
    className: "h-16 w-16",
    use: "Header, footer, section seals, and navigation accents.",
  },
  {
    label: "Small interface use",
    size: "sm" as const,
    className: "h-10 w-10",
    use: "Cards, badges, compact labels, and small interface placements.",
  },
  {
    label: "Very small use",
    size: "xs" as const,
    className: "h-6 w-6",
    use: "Favicon testing, metadata, and very small placements.",
  },
];

export default function FieldGuidePage() {
  return (
    <main className="pb-20">
      <SiteHeader />

      <section className="lab-shell pt-8 md:pt-12">
        <div className="paper-card overflow-hidden">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <BrandBadge tone="signal" icon="dot">
                  Working system
                </BrandBadge>

                <BrandBadge tone="quiet" icon="none">
                  Version 0.3
                </BrandBadge>
              </div>

              <p className="lab-label mt-8 text-cyan">
                AlwaysReady4Moore.com
              </p>

              <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-ink md:text-7xl">
                Field <span className="headline-signal">Guide</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                The visual rules behind the portfolio: the phoenix mark, cyan signal,
                editorial illustrations, and notebook interface.
              </p>

              <div className="mt-8 border-l-2 border-cyan pl-5">
                <p className="font-display text-2xl font-semibold leading-snug text-ink">
                  {brand.philosophy.thesis}
                </p>

                <p className="mt-3 max-w-xl leading-7 text-muted">
                  {brand.philosophy.supportingStatement}
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden border-t border-[var(--border)] bg-white/[0.025] p-8 lg:border-l lg:border-t-0">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-cyan/10 blur-3xl"
              />

              <NotebookTape
                size="lg"
                className="absolute right-8 top-8 rotate-12 opacity-55"
              />

              <CoffeeRing
                size="lg"
                className="absolute bottom-8 left-10 opacity-25"
              />

              <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-[2.5rem] border border-cyan/20 bg-[#101820]">
                <PhoenixMark
                  variant="standard"
                  size="xl"
                  animated
                  label="The Clarity phoenix mark"
                  className="h-56 w-56"
                />

                <span className="absolute bottom-7 left-7 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                  The mark
                </span>

                <span className="absolute bottom-7 right-7 font-lab text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cyan">
                  Clarity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandSection
        eyebrow="01 / Philosophy"
        title="Make the work easier to understand"
        description={brand.philosophy.designPrinciple}
        note="The interface should show systems thinking instead of relying on a claim."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {brand.philosophy.principles.map((principle, index) => (
            <article
              key={principle.title}
              className="paper-card relative overflow-hidden p-5 md:p-6"
            >
              <CyanSpark
                size="sm"
                className="absolute right-5 top-5 opacity-50"
              />

              <span className="font-lab text-xs font-semibold text-cyan">
                0{index + 1}
              </span>

              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                {principle.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="02 / The mark"
        title="Phoenix"
        description={brand.mark.meaning}
        note="Clarity is the approved mark. This section tests how it scales across the site."
      >
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <article className="paper-card overflow-hidden p-5">
            <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-3xl border border-cyan/15 bg-[#101820]">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan/10 blur-3xl"
              />

              <PhoenixMark
                variant="standard"
                size="xl"
                animated
                label="The Clarity phoenix mark"
                className="h-44 w-44 md:h-52 md:w-52"
              />

              <span className="absolute bottom-5 left-5 font-lab text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cyan">
                Approved direction / Clarity
              </span>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[0.32fr_0.68fr] md:items-start">
              <h3 className="font-display text-3xl font-semibold text-ink">
                The mark
              </h3>

              <p className="leading-7 text-muted">
                The phoenix represents rebuilding. The cyan spark marks a useful
                connection, progress, or verification.
              </p>
            </div>
          </article>

          <article className="paper-card p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="lab-label text-cyan">Scale test</p>

              <BrandBadge tone="quiet" icon="spark">
                Single source
              </BrandBadge>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {markScaleTests.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-3xl border border-[var(--border)] bg-white/[0.025] p-3"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-cyan/15 bg-[#101820]">
                    <PhoenixMark
                      variant="standard"
                      size={item.size}
                      decorative
                      className={item.className}
                    />
                  </div>

                  <div>
                    <p className="font-display text-lg font-semibold leading-tight text-ink">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.use}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="03 / The signal"
        title="Cyan spark"
        description={brand.signal.meaning}
        note="Use cyan only when it communicates a state, path, or result."
      >
        <div className="grid gap-5 md:grid-cols-[0.72fr_1.28fr]">
          <article className="paper-card flex min-h-72 items-center justify-center overflow-hidden p-8">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-cyan/20 bg-cyan/[0.045]">
              <div
                aria-hidden="true"
                className="absolute inset-8 rounded-full bg-cyan/10 blur-2xl"
              />

              <CyanSpark
                size="xl"
                animated
                decorative={false}
                label="Animated cyan spark representing clarity"
                className="relative"
              />
            </div>
          </article>

          <article className="paper-card p-6 md:p-8">
            <p className="lab-label text-cyan">The signal can communicate</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {brand.signal.communicates.map((item) => (
                <BrandBadge key={item} tone="signal" icon="spark">
                  {item}
                </BrandBadge>
              ))}
            </div>

            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <p className="lab-label text-muted">
                The signal does not mean
              </p>

              <ul className="mt-4 grid gap-3">
                {brand.signal.neverCommunicates.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/25"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <article className="paper-card mt-5 grid gap-6 p-6 md:grid-cols-[1.15fr_0.85fr] md:items-center md:p-8">
          <div>
            <p className="lab-label text-cyan">Headline anchor</p>
            <p className="mt-4 max-w-2xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              Make the useful path <span className="headline-signal">easier to follow</span>
            </p>
          </div>

          <div className="border-t border-[var(--border)] pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <p className="leading-7 text-muted">
              In major headings, cyan marks the phrase that carries the main point.
              Use one anchor and choose it for meaning, not position.
            </p>
          </div>
        </article>
      </BrandSection>

      <BrandSection
        eyebrow="04 / Color"
        title="Use signal against structure"
        description="Dark surfaces provide structure. Paper separates editorial content. Cyan marks the useful path."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {colorEntries.map((color) => (
            <article
              key={color.name}
              className={`flex min-h-52 flex-col justify-between rounded-3xl border border-white/10 p-5 ${color.textClassName}`}
              style={{ backgroundColor: color.value }}
            >
              <div>
                <p className="font-display text-2xl font-semibold">
                  {color.name}
                </p>

                <p className="mt-2 font-lab text-xs uppercase tracking-[0.1em] opacity-70">
                  {color.value}
                </p>
              </div>

              <p className="mt-8 text-sm leading-6 opacity-75">
                {color.description}
              </p>
            </article>
          ))}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="05 / Typography"
        title="Give each typeface one job"
        description="Display type sets hierarchy, body type supports reading, and lab type labels the system."
        note="Use handwritten type only for occasional annotations."
      >
        <div className="grid gap-5">
          {typographySamples.map((sample) => (
            <article
              key={sample.role}
              className="paper-card p-6 md:p-8"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="lab-label text-cyan">{sample.role}</p>

                  <p
                    className={`mt-5 text-ink ${
                      sample.role === "Display"
                        ? `${sample.className} text-4xl font-bold leading-tight tracking-[-0.045em] md:text-5xl`
                        : sample.role === "Lab"
                          ? `${sample.className} text-sm font-semibold uppercase tracking-[0.12em]`
                          : `${sample.className} text-lg leading-8`
                    }`}
                  >
                    {sample.sample}
                  </p>
                </div>

                <p className="max-w-sm text-sm leading-6 text-muted">
                  {sample.purpose}
                </p>
              </div>
            </article>
          ))}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="06 / Writing and voice"
        title="Lead with the point"
        description="Use plain language, active verbs, sentence-style headings, and specific evidence. Keep the warmth, but cut the setup."
        note="The goal is useful copy that sounds like a person, not a template."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="paper-card p-6 md:p-8">
            <p className="lab-label text-cyan">Write this way</p>
            <ul className="mt-5 grid gap-3">
              {brand.voice.writingRules.map((rule) => (
                <li key={rule} className="flex items-start gap-3 leading-7 text-muted">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {rule}
                </li>
              ))}
            </ul>
          </article>

          <article className="paper-card p-6 md:p-8">
            <p className="lab-label text-coral">Avoid</p>
            <ul className="mt-5 grid gap-3">
              {brand.voice.avoid.map((rule) => (
                <li key={rule} className="flex items-start gap-3 leading-7 text-muted">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  {rule}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="07 / Notebook language"
        title="Keep the notebook language functional"
        description={brand.notebook.meaning}
        note={brand.notebook.rule}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {notebookElements.map((element) => {
            const Icon = element.Icon;

            return (
              <article
                key={element.name}
                className="paper-card relative overflow-hidden p-6"
              >
                <Icon
                  size="lg"
                  className="absolute -right-2 -top-2 opacity-35"
                />

                <p className="font-display text-2xl font-semibold text-ink">
                  {element.name}
                </p>

                <p className="mt-3 max-w-lg leading-7 text-muted">
                  {element.description}
                </p>
              </article>
            );
          })}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="08 / Editorial system"
        title="Show people working inside systems"
        description={brand.illustrations.system.publicDescription}
        note="“The Lab Crew” is an internal name. Visitors only need a consistent visual world."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {brand.illustrations.roles.map((role) => (
            <article key={role.id} className="paper-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="lab-label text-cyan">{role.id}</p>

                  <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
                    {role.name}
                  </h3>
                </div>

                <CyanSpark size="sm" className="mt-1 opacity-70" />
              </div>

              <p className="mt-4 font-display text-xl font-semibold text-ink">
                {role.mission}
              </p>

              <div className="mt-6">
                <p className="lab-label text-muted">Represents</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {role.represents.map((item) => (
                    <span key={item} className="soft-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[var(--border)] pt-5">
                <p className="lab-label text-muted">Common behaviors</p>

                <ul className="mt-3 grid gap-2">
                  {role.behaviors.slice(0, 3).map((behavior) => (
                    <li
                      key={behavior}
                      className="flex items-start gap-3 text-sm leading-6 text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                      />

                      {behavior}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </BrandSection>

      <BrandSection
        eyebrow="09 / Motion"
        title="Use motion to clarify state"
        description={brand.motion.philosophy}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(brand.motion.behaviors).map(([name, behavior]) => (
            <article
              key={name}
              className="paper-card group p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/30"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="lab-label text-cyan">{name}</p>

                <CyanSpark
                  size="sm"
                  animated={name === "signal"}
                  className="opacity-75"
                />
              </div>

              <p className="mt-4 leading-7 text-muted">
                {behavior.description}
              </p>
            </article>
          ))}
        </div>
      </BrandSection>

      <section className="lab-shell pt-16 md:pt-20">
        <div className="paper-card relative overflow-hidden p-7 md:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-cyan/10 blur-3xl"
          />

          <NotebookPaperclip
            size="lg"
            className="absolute right-8 top-8 rotate-12 opacity-35"
          />

          <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <PhoenixMark
              variant="standard"
              size="lg"
              animated
              decorative
              className="h-20 w-20"
            />

            <div>
              <p className="lab-label text-cyan">Working principle</p>

              <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-[-0.045em] text-ink md:text-4xl">
                Every system should help people find the right answer
              </h2>
            </div>

            <Link
              href="/"
              className="focus-ring inline-flex items-center justify-center rounded-2xl border border-cyan/40 bg-cyan px-5 py-3 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night transition hover:-translate-y-0.5"
            >
              Return home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}