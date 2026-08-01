import Link from "next/link";
import { BrandBadge, CyanSpark } from "@/components/brand";

export function LaunchpadWorkCard() {
  return (
    <Link
      href="/work/launchpad"
      className="paper-card group block h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
    >
      <article className="relative flex h-full flex-col p-6 md:p-7">
        <div
          aria-hidden="true"
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#c7e913]/10 blur-3xl"
        />

        <CyanSpark
          size="xs"
          className="absolute right-5 top-5 opacity-55"
        />

        <div className="relative flex flex-wrap items-center gap-2 pr-8">
          <BrandBadge tone="signal" icon="spark">
            AI workflow system
          </BrandBadge>

          <BrandBadge tone="quiet" icon="dot">
            Custom Claude skill
          </BrandBadge>
        </div>

        <h3 className="relative mt-6 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
          Launchpad
        </h3>

        <p className="relative mt-4 flex-1 leading-7 text-muted">
          A career-readiness system that scores role fit, separates four types of gaps,
          and assigns one proof-building task at a time.
        </p>

        <div className="relative mt-5 flex flex-wrap gap-2">
          {[
            "Claude skill",
            "AI workflow design",
            "Persistent state",
            "Career enablement",
            "Artifact UI",
          ].map((tag) => (
            <BrandBadge key={tag} tone="quiet" icon="none">
              {tag}
            </BrandBadge>
          ))}
        </div>

        <p className="relative mt-6 border-t border-[var(--border)] pt-5 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition group-hover:translate-x-1">
          Read the case study →
        </p>
      </article>
    </Link>
  );
}
