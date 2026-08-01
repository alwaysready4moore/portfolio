import type { Metadata } from "next";
import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  NotebookHighlight,
} from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { workArtifacts, type WorkArtifact } from "@/data/workArchive";

export const metadata: Metadata = {
  title: "Work archive | AlwaysReady4Moore",
  description:
    "Additional tools, interactive lessons, videos, guides, and workflow artifacts by Marquetta Moore.",
};

function ArtifactCard({
  title,
  type,
  description,
  tags,
  href,
  action,
  interactive = false,
}: WorkArtifact) {
  const card = (
    <article className="paper-card group relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40">
      <CyanSpark size="xs" className="absolute right-5 top-5 opacity-55" />
      <div className="flex flex-wrap items-center gap-2 pr-8">
        <BrandBadge tone="experiment" icon="dot">
          {type}
        </BrandBadge>
        {interactive ? (
          <BrandBadge tone="signal" icon="spark">
            On-site
          </BrandBadge>
        ) : (
          <BrandBadge tone="quiet" icon="none">
            Opens media
          </BrandBadge>
        )}
      </div>

      <h2 className="mt-5 pr-8 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
        {title}
      </h2>
      <p className="mt-4 flex-1 leading-7 text-muted">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <BrandBadge key={tag} tone="quiet" icon="none">
            {tag}
          </BrandBadge>
        ))}
      </div>

      <p className="mt-6 border-t border-[var(--border)] pt-5 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
        {action} <span aria-hidden="true">{interactive ? "→" : "↗"}</span>
      </p>
    </article>
  );

  return interactive ? (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" className="block h-full">
      {card}
    </a>
  );
}

export default function WorkArchivePage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <Link
          href="/work"
          className="lab-label inline-flex items-center gap-2 text-cyan transition hover:translate-x-1"
        >
          ← Back to selected work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <BrandBadge tone="experiment" icon="spark">
            Work archive
          </BrandBadge>
          <BrandBadge tone="quiet" icon="dot">
            Tools · lessons · guides · media
          </BrandBadge>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.52fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl font-display text-6xl font-bold leading-[0.92] tracking-[-0.065em] text-ink md:text-8xl">
              Guides, lessons, and <span className="headline-signal">supporting tools</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              This archive holds troubleshooting lessons, adoption tools,
              workflow guides, training media, and documentation that support
              the main case studies.
            </p>
          </div>

          <aside className="paper-card relative overflow-hidden p-6">
            <NotebookHighlight
              size="lg"
              className="absolute -right-4 -top-4 rotate-[-8deg] opacity-20"
            />
            <BrandBadge tone="quiet" icon="spark">
              Why this page exists
            </BrandBadge>
            <p className="mt-4 leading-7 text-muted">
              The Work page highlights the strongest case studies. This archive
              keeps the supporting samples available without crowding that page.
            </p>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-14">
        <aside className="rounded-3xl border border-cyan/20 bg-cyan/[0.045] p-6">
          <BrandBadge tone="quiet" icon="spark">
            Context and disclosure
          </BrandBadge>
          <p className="mt-4 max-w-5xl leading-7 text-muted">
            These are independent portfolio samples. They were not commissioned,
            approved, or published by the organizations represented in the original
            work. Company logos, proprietary fonts, internal references, and
            sensitive details have been replaced, removed, or redacted where
            appropriate.
          </p>
        </aside>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workArtifacts.map((artifact) => (
            <ArtifactCard key={artifact.title} {...artifact} />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note relative overflow-hidden p-7 md:p-9">
          <p className="field-heading max-w-5xl text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            A focused guide, lesson, or small tool can remove a problem people
            face every day.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[#19D8E8] bg-[#19D8E8] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[#071014] shadow-[0_0_24px_rgba(25,216,232,0.24)] transition hover:-translate-y-0.5"
            >
              Return to selected work
            </Link>
            <Link
              href="/contact"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)] transition hover:-translate-y-0.5"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
