"use client";

import { Suspense, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BrandBadge, CyanSpark } from "@/components/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { searchIndex } from "@/data/searchIndex";

function normalize(value: string) {
  return value.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
}

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const normalizedQuery = normalize(query);
  const results = useMemo(() => {
    const terms = normalizedQuery.split(" ").filter(Boolean);

    if (!terms.length) return [];

    return searchIndex
      .map((entry) => {
        const title = normalize(entry.title);
        const description = normalize(entry.description);
        const keywords = normalize(entry.keywords.join(" "));
        const searchable = `${title} ${description} ${keywords}`;

        const score = terms.reduce((total, term) => {
          if (title.includes(term)) return total + 8;
          if (keywords.includes(term)) return total + 4;
          if (description.includes(term)) return total + 2;
          if (searchable.includes(term)) return total + 1;
          return total;
        }, 0);

        return { entry, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
  }, [normalizedQuery]);

  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="signal" icon="spark">
            Search
          </BrandBadge>

          <BrandBadge tone="quiet" icon="dot">
            Portfolio index
          </BrandBadge>
        </div>

        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
          Find the work behind the work.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          Search projects, case studies, Field Notes, interactive lessons, and
          creative experiments by topic, tool, or problem.
        </p>

        {!query ? (
          <div className="paper-card mt-10 p-7">
            <p className="font-display text-3xl font-bold text-ink">
              Try a topic from the header.
            </p>
            <p className="mt-3 leading-7 text-muted">
              Good starting points include AI, Chrome, security, knowledge,
              documentation, support, and workflow.
            </p>
          </div>
        ) : (
          <div className="mt-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-muted">
                {results.length === 1
                  ? `1 result for “${query}”`
                  : `${results.length} results for “${query}”`}
              </p>

              <Link
                href="/search"
                className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-cyan transition hover:text-ink"
              >
                Clear search
              </Link>
            </div>

            {results.length ? (
              <div className="grid gap-5 md:grid-cols-2">
                {results.map(({ entry }) => (
                  <Link
                    key={`${entry.type}-${entry.href}`}
                    href={entry.href}
                    className="paper-card group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-cyan/40"
                  >
                    <CyanSpark
                      size="xs"
                      className="absolute right-5 top-5 opacity-45 transition group-hover:opacity-85"
                    />

                    <BrandBadge tone="quiet" icon="dot">
                      {entry.type}
                    </BrandBadge>

                    <h2 className="mt-5 pr-8 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
                      {entry.title}
                    </h2>

                    <p className="mt-4 leading-7 text-muted">
                      {entry.description}
                    </p>

                    <p className="mt-6 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
                      Open result <span aria-hidden="true">→</span>
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="paper-card p-7">
                <p className="font-display text-3xl font-bold text-ink">
                  Nothing matched that one.
                </p>
                <p className="mt-3 leading-7 text-muted">
                  Try a broader term such as AI, security, support, Chrome,
                  knowledge, writing, or workflow.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

function SearchFallback() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <BrandBadge tone="signal" icon="spark">
            Search
          </BrandBadge>

          <BrandBadge tone="quiet" icon="dot">
            Portfolio index
          </BrandBadge>
        </div>

        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
          Find the work behind the work.
        </h1>

        <div className="paper-card mt-10 p-7">
          <p className="font-display text-3xl font-bold text-ink">
            Loading the index…
          </p>

          <p className="mt-3 leading-7 text-muted">
            Gathering projects, notes, guides, and experiments.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchResults />
    </Suspense>
  );
}

