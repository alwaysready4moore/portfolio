import type { Metadata } from "next";
import {
  BrandBadge,
  CoffeeRing,
  CyanSpark,
  MarginArrow,
  NotebookPaperclip,
  PhoenixMark,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact | AlwaysReady4Moore",
  description:
    "Contact Marquetta Moore about AI workflow design, knowledge systems, support operations, internal tools, and security-aware communication.",
};

const contactRoutes = [
  {
    label: "Email",
    value: contactInfo.email,
    href: contactInfo.mailto,
    description:
      "Best for direct messages, project conversations, collaboration notes, and anything that deserves more than a tiny comment box.",
    tone: "signal" as const,
  },
  {
    label: "LinkedIn",
    value: "Marquetta Moore",
    href: contactInfo.linkedin,
    description:
      "Best for professional context, work history, writing, and public updates.",
    tone: "verified" as const,
  },
  {
    label: "GitHub",
    value: "alwaysready4moore",
    href: contactInfo.github,
    description:
      "Best for code, build experiments, and technical proof-of-work breadcrumbs.",
    tone: "experiment" as const,
  },
] as const;

const bestFor = [
  "AI workflow design",
  "Knowledge systems",
  "Support operations",
  "Internal tools",
  "Documentation and enablement",
  "Security-aware communication",
] as const;

const signalCards = [
  {
    label: "Working style",
    value: "Clear, curious, systems-first",
    tone: "signal" as const,
  },
  {
    label: "Strongest overlap",
    value: "AI + support + knowledge systems",
    tone: "verified" as const,
  },
  {
    label: "Favorite problem",
    value: "Messy information with human consequences",
    tone: "experiment" as const,
  },
] as const;

function SignalCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-5">
      <BrandBadge tone={tone} icon="dot">
        {label}
      </BrandBadge>

      <p className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.04em] text-ink">
        {value}
      </p>
    </article>
  );
}

function ContactRouteCard({
  label,
  value,
  href,
  description,
  tone,
}: {
  label: string;
  value: string;
  href: string;
  description: string;
  tone: BrandBadgeTone;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className="paper-card group block overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <BrandBadge tone={tone} icon="dot">
            {label}
          </BrandBadge>

          <h2 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink md:text-4xl">
            {value}
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-muted">
            {description}
          </p>
        </div>

        <span
          aria-hidden="true"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-cyan/[0.06] text-cyan transition group-hover:translate-x-1 group-hover:border-cyan/40"
        >
          →
        </span>
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="signal" icon="spark">
            Contact
          </BrandBadge>

          <BrandBadge tone="quiet" icon="dot">
            Open channel
          </BrandBadge>
        </div>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_0.72fr] lg:items-start">
          <div>
            <div className="mb-5 flex items-start gap-4">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-[#101820] sm:flex">
                <PhoenixMark
                  variant="standard"
                  size="lg"
                  decorative
                  className="h-12 w-12"
                />
              </div>

              <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
                Let’s talk about the messy system.
              </h1>
            </div>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              I’m interested in work where AI, knowledge, operations,
              communication, and real human behavior all crash into each other
              and need to become something clearer.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {bestFor.map((item) => (
                <BrandBadge key={item} tone="quiet" icon="none">
                  {item}
                </BrandBadge>
              ))}
            </div>
          </div>

          <aside className="paper-card relative overflow-hidden p-4">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl"
            />

            <CoffeeRing
              size="lg"
              className="absolute bottom-8 left-8 z-10 opacity-20"
            />

            <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-night">
              <video
                className="aspect-square w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/avatars/lets-talk-poster.png"
                aria-label="Looping chibi avatar animation of Marquetta at a computer."
              >
                <source src="/avatars/lets-talk.mp4" type="video/mp4" />
              </video>
            </div>

            <p className="relative mt-4 text-sm leading-6 text-muted">
              Looping chibi avatar generated with Gemini. AI-generated media is
              used intentionally and disclosed throughout this portfolio.
            </p>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-12">
        <div className="grid gap-5 md:grid-cols-3">
          {signalCards.map((card) => (
            <SignalCard
              key={card.label}
              label={card.label}
              value={card.value}
              tone={card.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="quiet" icon="spark">
              Contact routes
            </BrandBadge>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Pick the door that makes sense.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-muted md:text-right">
            Email is best for direct opportunities. LinkedIn is best for public
            professional context. GitHub is best for build evidence and code
            breadcrumbs.
          </p>
        </div>

        <div className="grid gap-5">
          {contactRoutes.map((route) => (
            <ContactRouteCard
              key={route.label}
              label={route.label}
              value={route.value}
              href={route.href}
              description={route.description}
              tone={route.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <MarginArrow
            size="lg"
            className="absolute right-7 top-7 rotate-6 opacity-25"
          />

          <NotebookPaperclip
            size="lg"
            className="absolute bottom-7 right-10 rotate-12 opacity-20"
          />

          <p className="lab-label text-cyan">Operating principle</p>

          <blockquote className="mt-4 max-w-5xl field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            “Good systems organize information and make the next right action easier to see.”
          </blockquote>

          <div className="mt-7 flex items-center gap-2 font-lab text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[var(--paper-ink)]/70">
            <CyanSpark size="xs" />
            Clarity is the point
          </div>
        </div>
      </section>
    </main>
  );
}