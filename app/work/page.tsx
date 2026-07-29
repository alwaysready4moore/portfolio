import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  NotebookHighlight,
  PhoenixMark,
  type BrandBadgeTone,
} from "@/components/brand";
import { FeaturedSystemCard } from "@/components/FeaturedSystemCard";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredSystems } from "@/data/featuredSystems";

export const metadata: Metadata = {
  title: "Selected Work | AlwaysReady4Moore",
  description:
    "Selected case studies and supporting projects from Marquetta Moore across AI products, knowledge systems, security operations, and human-centered workflow design.",
};

type SupportingProject = {
  title: string;
  label: string;
  status: string;
  description: string;
  tags: string[];
  href: string;
  cta: string;
  tone: BrandBadgeTone;
  logoSrc?: string;
  logoAlt?: string;
};

const featuredProjects = featuredSystems.filter((project) =>
  ["Aegis", "Pirate Ship Knowledge Systems", "New Analyst Toolbox"].includes(
    project.title,
  ),
);

const supportingProjects: SupportingProject[] = [
  {
    title: "Launchpad",
    label: "AI career operating system",
    status: "Working system",
    description:
      "A persistent Claude skill that scores role readiness, separates skill gaps from proof and positioning gaps, and turns a fuzzy career goal into sequenced daily work.",
    tags: ["Claude skill", "Persistent state", "Gap classification", "Security audit"],
    href: "/work/launchpad",
    cta: "Explore Launchpad",
    tone: "signal",
    logoSrc: "/logos/launchpad-logo.png",
    logoAlt: "Launchpad rocket logo",
  },
  {
    title: "Nice Little Click Lab",
    label: "Microproduct studio",
    status: "Live beta",
    description:
      "A tiny web-product studio built around useful, delightful tools for oddly specific moments, with product strategy, UX writing, and independent implementation living in the same system.",
    tags: ["Product strategy", "UX writing", "Next.js", "Freemium model"],
    href: "/work/nice-little-click-lab",
    cta: "Explore the Lab",
    tone: "experiment",
    logoSrc: "/nice-little-click-lab/logo.png",
    logoAlt: "Nice Little Click Lab logo",
  },
  {
    title: "ChartFinder",
    label: "Local-first Chrome extension",
    status: "Case study",
    description:
      "A browser extension that extracts visible shipment, client, and support-article context, then formats it for support-ready replies without sending data to an external service.",
    tags: ["Chrome extension", "Local-first", "Clipboard workflow", "Support operations"],
    href: "/work/chartfinder",
    cta: "Read the case study",
    tone: "verified",
    logoSrc: "/logos/chartfinder-logo.png",
    logoAlt: "ChartFinder logo",
  },
];

function SupportingProjectCard({ project }: { project: SupportingProject }) {
  return (
    <Link href={project.href} className="group block h-full">
      <article className="paper-card relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 md:p-7">
        <CyanSpark
          size="xs"
          className="absolute right-5 top-5 opacity-45 transition group-hover:opacity-80"
        />

        <div className="flex flex-wrap items-center gap-2 pr-8">
          <BrandBadge tone={project.tone} icon="dot">
            {project.label}
          </BrandBadge>
          <BrandBadge tone="quiet" icon="none">
            {project.status}
          </BrandBadge>
        </div>

        <div className="mt-7 flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-cyan/20 bg-[#0d141d] p-2 shadow-[0_0_30px_rgba(25,216,232,0.08)]">
          {project.logoSrc ? (
            <img
              src={project.logoSrc}
              alt={project.logoAlt ?? `${project.title} logo`}
              className="h-full w-full object-contain"
            />
          ) : (
            <PhoenixMark
              variant="standard"
              size="lg"
              decorative
              className="h-14 w-14"
            />
          )}
        </div>

        <h3 className="mt-6 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
          {project.title}
        </h3>
        <p className="mt-4 flex-1 leading-7 text-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <BrandBadge key={tag} tone="quiet" icon="none">
              {tag}
            </BrandBadge>
          ))}
        </div>

        <p className="mt-6 border-t border-[var(--border)] pt-5 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
          {project.cta} <span aria-hidden="true">â†’</span>
        </p>
      </article>
    </Link>
  );
}

export default function WorkPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="signal" icon="spark">
            Selected work
          </BrandBadge>
          <BrandBadge tone="quiet" icon="dot">
            Curated for the first pass
          </BrandBadge>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.52fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl font-display text-6xl font-bold leading-[0.92] tracking-[-0.065em] text-ink md:text-8xl">
              Systems Iâ€™ve built.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              Start with three case studies that show the clearest version of
              my work: building AI products, governing complex information, and
              designing tools around real human workflows.
            </p>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <NotebookHighlight
              size="lg"
              className="absolute -right-4 -top-4 rotate-[-8deg] opacity-20"
            />
            <BrandBadge tone="quiet" icon="spark">
              The through-line
            </BrandBadge>
            <p className="mt-4 leading-7 text-muted">
              I look for the repeated question, fragile handoff, or unsupported
              decision. Then I build a clearer path through it.
            </p>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-16" aria-labelledby="featured-heading">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="signal" icon="spark">
              Featured case studies
            </BrandBadge>
            <h2
              id="featured-heading"
              className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-ink md:text-6xl"
            >
              The strongest professional story.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted md:text-right">
            Product thinking, information governance, technical execution, and
            evidence of iteration without making you excavate the entire
            archive first.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedSystemCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16" aria-labelledby="supporting-heading">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BrandBadge tone="verified" icon="dot">
              Supporting projects
            </BrandBadge>
            <h2
              id="supporting-heading"
              className="mt-3 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-6xl"
            >
              More range, after the main argument lands.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted md:text-right">
            These projects extend the story into persistent AI workflows,
            independent product strategy, and local-first support tooling.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {supportingProjects.map((project) => (
            <SupportingProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card relative grid gap-8 overflow-hidden p-6 md:p-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <NotebookHighlight
            size="lg"
            className="absolute -right-3 -top-3 rotate-[-8deg] opacity-20"
          />
          <div>
            <BrandBadge tone="experiment" icon="spark">
              Additional work
            </BrandBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              The archive still has receipts.
            </h2>
          </div>
          <div>
            <p className="leading-8 text-muted">
              Smaller tools, interactive learning modules, videos, guides, and
              supporting case studies remain available for hiring managers who
              want to inspect the broader range behind the selected work.
            </p>
            <Link
              href="/work/archive"
              className="mt-6 inline-flex rounded-2xl border border-cyan/35 bg-cyan/[0.06] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/60"
            >
              Browse tools and learning artifacts â†’
            </Link>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            The work changes shape, but the goal stays steady: make complicated
            systems clearer, more usable, and easier to trust.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Talk about systems
            </Link>
            <Link
              href="/about"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              About me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
