import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CoffeeRing,
  CyanSpark,
  MarginArrow,
  NotebookHighlight,
  NotebookPaperclip,
  NotebookTape,
  PhoenixMark,
  type BrandBadgeTone,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Moore Family Print Shop | The Lab | AlwaysReady4Moore",
  description:
    "Moore Family Print Shop is a small-batch maker business and 3D-printing systems lab by Marquetta Moore.",
};

const shopLinks = [
  {
    label: "Shop",
    title: "Moore Family Print Shop",
    description:
      "The official shop home base and future revamp target for the maker brand.",
    href: "https://www.moorefamilyprintshop.com",
    cta: "Open website",
    tone: "verified" as const,
  },
  {
    label: "Marketplace",
    title: "Etsy",
    description:
      "The marketplace storefront for testing products, listings, search behavior, and customer-facing presentation.",
    href: "https://www.etsy.com/shop/moorefamilyprintshop",
    cta: "Open Etsy",
    tone: "signal" as const,
  },
];

const projectStats = [
  {
    label: "Project type",
    value: "Maker shop",
  },
  {
    label: "Status",
    value: "Ongoing build",
  },
  {
    label: "Core medium",
    value: "3D printing",
  },
];

const buildLayers = [
  {
    title: "Product experiments",
    description:
      "Small-batch 3D-printed objects, seasonal ideas, keychains, fidgets, desk pieces, accessories, and whatever else passes the “wait, I could make that” test.",
    tone: "verified" as const,
  },
  {
    title: "Listing systems",
    description:
      "Titles, descriptions, variants, photos, tags, customer expectations, and the tiny details that make a handmade product easier to understand online.",
    tone: "signal" as const,
  },
  {
    title: "Shop operations",
    description:
      "Materials, print settings, packaging, fulfillment habits, troubleshooting, and the practical decisions that keep a creative hobby from becoming pure chaos.",
    tone: "experiment" as const,
  },
  {
    title: "Brand voice",
    description:
      "A friendly family-shop tone that explains the work clearly while keeping the joy of the hobby visible.",
    tone: "quiet" as const,
  },
];

const shopWork = [
  "3D-printed products and small-batch product ideas",
  "Marketplace listings and customer-facing product copy",
  "Shop voice and brand presentation",
  "Packaging and fulfillment thinking",
  "Product photography direction",
  "Seasonal and giftable item planning",
  "Troubleshooting printer issues and material choices",
  "AI-assisted copy, listing, and marketing experiments",
  "Future storefront revamp planning",
];

const whatImTesting = [
  {
    title: "Can a hobby support itself?",
    description:
      "The business exists partly to make the hobby easier to keep doing: buying filament, testing ideas, replacing parts, and giving the finished pieces somewhere to go.",
  },
  {
    title: "Can product pages carry the experience?",
    description:
      "A small object needs clear copy, useful photos, realistic expectations, and a tiny bit of charm before someone can understand why it belongs in their life.",
  },
  {
    title: "Can making stay joyful?",
    description:
      "The best version of the shop keeps the fun intact. Systems should make the work lighter, more repeatable, and easier to share.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Spot the idea",
    description:
      "Start with a product itch: something useful, cute, giftable, seasonal, or satisfying enough to deserve a test print.",
  },
  {
    step: "02",
    title: "Prototype the object",
    description:
      "Print, inspect, adjust, test materials, fix settings, and decide whether the object is actually worth sharing.",
  },
  {
    step: "03",
    title: "Package the listing",
    description:
      "Write the title, description, tags, variants, photos, and customer expectations so the product makes sense quickly.",
  },
  {
    step: "04",
    title: "Learn from reality",
    description:
      "Watch what people click, favorite, ask about, buy, ignore, or misunderstand, then improve the product or the explanation.",
  },
];

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-4">
      <p className="lab-label text-muted">{label}</p>

      <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
        {value}
      </p>
    </article>
  );
}

function ExternalLinkCard({
  label,
  title,
  description,
  href,
  cta,
  tone,
}: {
  label: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  tone: BrandBadgeTone;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="paper-card group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-cyan/35"
    >
      <CyanSpark
        size="sm"
        className="absolute right-5 top-5 opacity-45 transition group-hover:opacity-80"
      />

      <BrandBadge tone={tone} icon="dot">
        {label}
      </BrandBadge>

      <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>

      <p className="mt-6 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
        {cta} <span aria-hidden="true">↗</span>
      </p>
    </a>
  );
}

function LayerCard({
  title,
  description,
  tone,
}: {
  title: string;
  description: string;
  tone: BrandBadgeTone;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookHighlight
        size="lg"
        className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
      />

      <BrandBadge tone={tone} icon="dot">
        Build layer
      </BrandBadge>

      <h2 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function WorkflowCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookPaperclip
        size="md"
        className="absolute right-5 top-5 rotate-12 opacity-20"
      />

      <p className="font-lab text-sm font-semibold text-cyan">{step}</p>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function LessonCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <CyanSpark size="xs" className="absolute right-5 top-5 opacity-60" />

      <p className="font-lab text-sm font-semibold text-cyan">
        Lesson 0{index + 1}
      </p>

      <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function ArtifactList() {
  return (
    <div className="paper-card relative overflow-hidden p-6">
      <NotebookTape
        size="lg"
        className="absolute right-7 top-7 rotate-12 opacity-35"
      />

      <BrandBadge tone="quiet" icon="spark">
        Current artifacts
      </BrandBadge>

      <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
        The shop system so far.
      </h2>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {shopWork.map((artifact) => (
          <li
            key={artifact}
            className="grid grid-cols-[auto_1fr] gap-3 text-sm text-muted"
          >
            <span className="font-lab text-cyan">↳</span>
            <span className="leading-6">{artifact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RevampCard() {
  return (
    <article className="paper-card relative overflow-hidden p-6">
      <NotebookPaperclip
        size="lg"
        className="absolute right-5 top-5 rotate-12 opacity-20"
      />

      <BrandBadge tone="warning" icon="spark">
        Next experiment
      </BrandBadge>

      <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
        The shop revamp is waiting in the wings.
      </h2>

      <p className="mt-5 leading-7 text-muted">
        The current shop proves the hobby has a public home. The future revamp
        can make that home clearer, warmer, and easier to shop: better product
        categories, better photos, better storytelling, and a stronger path from
        “cute print” to “I know exactly who this is for.”
      </p>

      <p className="mt-4 leading-7 text-muted">
        This page is the lab note. The storefront revamp is the next build.
      </p>
    </article>
  );
}

function SectionTitle({
  kicker,
  title,
  description,
  tone = "quiet",
}: {
  kicker: string;
  title: string;
  description: string;
  tone?: BrandBadgeTone;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <BrandBadge tone={tone} icon="spark">
          {kicker}
        </BrandBadge>

        <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
          {title}
        </h2>
      </div>

      <p className="max-w-xl leading-7 text-muted md:text-right">
        {description}
      </p>
    </div>
  );
}

export default function MooreFamilyPrintShopPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="verified" icon="spark">
            The Lab
          </BrandBadge>

          <BrandBadge tone="quiet" icon="dot">
            Maker business
          </BrandBadge>
        </div>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_0.6fr] lg:items-start">
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
                Moore Family Print Shop is where technology turns into tiny
                physical joy.
              </h1>
            </div>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              3D printing combines my love of technology and creative
              expression. Moore Family Print Shop is less about building a
              business empire and more about sharing the hobby, funding the next
              round of materials, and giving the things I make a real place to
              land.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              The shop is also a systems lab: product ideas, listings, photos,
              packaging, customer expectations, troubleshooting, and the tiny
              operational habits that make creative work easier to repeat.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "3D Printing",
                "Maker Business",
                "Product Systems",
                "Customer Experience",
                "Small-Batch Ops",
                "AI-Assisted Marketing",
              ].map((tag) => (
                <BrandBadge key={tag} tone="quiet" icon="dot">
                  {tag}
                </BrandBadge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.moorefamilyprintshop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
              >
                Open website
              </a>

              <a
                href="https://www.etsy.com/shop/moorefamilyprintshop"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                Open Etsy
              </a>
            </div>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-mint/10 blur-3xl"
            />

            <CoffeeRing
              size="lg"
              className="absolute bottom-8 left-8 z-10 opacity-20"
            />

            <BrandBadge tone="verified" icon="spark">
              Hobby with infrastructure
            </BrandBadge>

            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              The joy is the making. The system keeps the making possible.
            </h2>

            <p className="mt-4 leading-7 text-muted">
              A tiny shop still needs real decisions: what to print, how to
              describe it, how to photograph it, how to package it, how to price
              it, and when to admit a print simply did not pass the vibe check.
            </p>

            <div className="mt-6 grid gap-3">
              {projectStats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Shop links"
          title="The public-facing pieces."
          description="The shop has two useful surfaces right now: the official home base and the marketplace storefront."
          tone="verified"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {shopLinks.map((item) => (
            <ExternalLinkCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Build layers"
          title="What the shop is really testing."
          description="The print shop looks like products, but the deeper experiment is about turning making into a repeatable, explainable, customer-friendly system."
          tone="verified"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {buildLayers.map((layer) => (
            <LayerCard
              key={layer.title}
              title={layer.title}
              description={layer.description}
              tone={layer.tone}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Workflow"
          title="From print idea to shop listing."
          description="Every product needs a little pipeline, even when the whole thing starts with curiosity and filament."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item) => (
            <WorkflowCard key={item.step} {...item} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="grid gap-5 lg:grid-cols-[0.62fr_0.38fr]">
          <ArtifactList />

          <RevampCard />
        </div>
      </section>

      <section className="lab-shell pt-16">
        <SectionTitle
          kicker="Lessons"
          title="What the shop is teaching me."
          description="The practical lessons are the real portfolio value: how a physical product becomes clear enough for someone else to want, trust, and use."
          tone="quiet"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {whatImTesting.map((lesson, index) => (
            <LessonCard
              key={lesson.title}
              title={lesson.title}
              description={lesson.description}
              index={index}
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

          <CyanSpark
            size="md"
            className="absolute bottom-7 right-8 opacity-60"
          />

          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Moore Family Print Shop lets me practice the whole maker-business
            loop: idea, prototype, print, photograph, explain, list, package,
            ship, learn, and then immediately get tempted by the next idea.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/lab"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Back to the lab
            </Link>

            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}