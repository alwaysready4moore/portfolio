import type { ReactNode } from "react";

type BrandSectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  note?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function BrandSection({
  eyebrow,
  title,
  description,
  note,
  children,
  className = "",
  contentClassName = "",
}: BrandSectionProps) {
  return (
    <section className={`lab-shell pt-16 md:pt-20 ${className}`}>
      <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
        <header>
          <p className="lab-label text-cyan">{eyebrow}</p>

          <h2 className="mt-4 font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-ink md:text-5xl">
            {title}
          </h2>

          {description ? (
            <p className="mt-5 max-w-xl leading-7 text-muted">
              {description}
            </p>
          ) : null}

          {note ? (
            <p className="mt-5 flex items-start gap-2 font-lab text-sm leading-6 text-muted">
              <span
                aria-hidden="true"
                className="shrink-0 font-semibold text-cyan"
              >
                {"//"}
              </span>

              <span>{note}</span>
            </p>
          ) : null}
        </header>

        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}