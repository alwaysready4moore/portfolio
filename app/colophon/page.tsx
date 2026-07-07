import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const credits = [
  {
    title: "Design direction",
    label: "Human-led",
    description:
      "The site direction, structure, copy choices, visual taste, final selection, edits, and implementation decisions are human-led by Marquetta Moore.",
  },
  {
    title: "AI-assisted visual assets",
    label: "Disclosed use",
    description:
      "Some visual assets on this site are AI-generated or AI-assisted, including pictogram-style illustrations, the chibi site representative, and the looping contact-page avatar.",
  },
  {
    title: "Gemini-generated animation",
    label: "Contact page",
    description:
      "The looping chibi avatar on the Contact page was generated with Gemini from a custom visual prompt and used as a disclosed AI-generated media asset.",
  },
  {
    title: "Static avatar",
    label: "About page",
    description:
      "The static chibi avatar on the About page was created with AI-assisted image tools and selected as the site’s stylized visual representative.",
  },
  {
    title: "Pictograms",
    label: "Field Notes",
    description:
      "The Field Notes pictograms are used as editorial visual assets. They are meant to signal themes, not to hide or replace the written work.",
  },
 {
  title: "Screenshots",
  label: "Project proof",
  description:
    "Project screenshots, including the Aegis images, are real screenshots from working projects. They are included to show actual interface context and support the written case studies.",
},
];

const tools = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "GitHub",
  "Gemini",
  "AI-assisted image tools",
  "Custom fonts from the project font library",
];

const principles = [
  {
    title: "AI is a tool, not a ghostwriter.",
    description:
      "AI may help with drafting, visual exploration, summarizing, structuring, or prototyping, but final direction, judgment, editing, and publishing choices stay human-led.",
  },
  {
    title: "Generated media should be labeled.",
    description:
      "When an image, avatar, animation, or visual asset is AI-generated or AI-assisted, this site aims to say so plainly and calmly.",
  },
  {
    title: "The work should still stand on its own.",
    description:
      "AI disclosure is not a shortcut around craft. The goal is to show the thinking, systems, decisions, and finished work clearly.",
  },
];

function CreditCard({
  title,
  label,
  description,
}: {
  title: string;
  label: string;
  description: string;
}) {
  return (
    <article className="paper-card p-6">
      <p className="lab-label text-cyan">{label}</p>
      <h2 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

function PrincipleCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="paper-card p-6">
      <p className="font-lab text-4xl font-semibold text-cyan">0{index + 1}</p>
      <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-muted">{description}</p>
    </article>
  );
}

export default function ColophonPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <p className="lab-label text-cyan">Colophon</p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.92fr_0.72fr] lg:items-start">
          <div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Credits, tools, and AI use.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              This page keeps track of how the site was made: what tools helped,
              where AI-generated media appears, and how I think about using AI
              transparently in creative and technical work.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              The short version: AI is part of my workflow, but it is not hidden
              as magic and it is not treated as a replacement for taste,
              judgment, editing, or responsibility.
            </p>
          </div>

          <aside className="paper-card p-6">
            <p className="lab-label text-cyan">Site stance</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
              Transparent, not theatrical.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              I do not think AI use needs a scary warning label. I do think it
              should be disclosed clearly, especially when generated visuals or
              AI-assisted workflows are part of the finished work.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span className="soft-chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8">
          <p className="lab-label text-muted">AI use principles</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            How I’m handling disclosure.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <PrincipleCard
              key={principle.title}
              title={principle.title}
              description={principle.description}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="mb-8">
          <p className="lab-label text-muted">Credits</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            What appears on the site.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {credits.map((credit) => (
            <CreditCard
              key={credit.title}
              title={credit.title}
              label={credit.label}
              description={credit.description}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note p-7 md:p-9">
          <p className="field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            AI helped with parts of the build. The taste, judgment, edits, and
            responsibility are mine.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[var(--paper-ink)] bg-[var(--paper-ink)] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-paper"
            >
              See the work
            </Link>

            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)]"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}