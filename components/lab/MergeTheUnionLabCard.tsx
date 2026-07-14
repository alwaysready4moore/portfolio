import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  NotebookHighlight,
  NotebookTape,
} from "@/components/brand";

export function MergeTheUnionLabCard() {
  return (
    <Link
      href="/lab/merge-the-union"
      className="paper-card group block overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
    >
      <div className="grid gap-0 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="relative overflow-hidden border-b border-[var(--border)] bg-[#f7f2e8] p-6 lg:border-b-0 lg:border-r lg:p-8">
          <NotebookTape
            size="lg"
            className="absolute right-7 top-7 rotate-12 opacity-35"
          />
          <NotebookHighlight
            size="lg"
            className="absolute -bottom-3 -left-3 rotate-[-8deg] opacity-20"
          />

          <img
            src="/lab/merge-the-union/logo.png"
            alt="Merge the Union logo"
            className="relative mx-auto aspect-square w-full max-w-[22rem] object-contain"
          />
        </div>

        <div className="relative p-6 lg:p-8">
          <CyanSpark
            size="sm"
            className="absolute right-6 top-6 opacity-60"
          />

          <div className="flex flex-wrap gap-2 pr-10">
            <BrandBadge tone="experiment" icon="spark">
              Playable social game
            </BrandBadge>
            <BrandBadge tone="quiet" icon="dot">
              Featured Lab project
            </BrandBadge>
          </div>

          <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
            Merge the Union
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            A workplace icebreaker where the group votes states off the map,
            merges them into questionable new territories, and discovers how
            far one person will go to avoid asking for a fun fact.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Browser game",
              "Interaction design",
              "Game systems",
              "Facilitation",
              "Creative technology",
              "Comedy writing",
            ].map((tag) => (
              <BrandBadge key={tag} tone="quiet" icon="none">
                {tag}
              </BrandBadge>
            ))}
          </div>

          <p className="mt-7 border-t border-[var(--border)] pt-5 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
            Play it and read the case study →
          </p>
        </div>
      </div>
    </Link>
  );
}
