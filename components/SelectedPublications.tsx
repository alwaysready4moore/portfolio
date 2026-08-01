import Image from "next/image";
import { BrandBadge, CyanSpark, NotebookPaperclip } from "@/components/brand";
import { publications } from "@/data/publications";

export function SelectedPublications() {
  return (
    <section className="lab-shell pt-16" aria-labelledby="selected-publications-heading">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <BrandBadge tone="verified" icon="spark">
            Selected publications
          </BrandBadge>

          <h2
            id="selected-publications-heading"
            className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl"
          >
            Published beyond the lab
          </h2>
        </div>

        <p className="max-w-xl leading-7 text-muted md:text-right">
          Paid and externally published work selected for voice, range, and editorial approval.
        </p>
      </div>

      <div className="grid gap-5">
        {publications.map((publication) => (
          <article
            key={`${publication.publication}-${publication.title}`}
            className="paper-card group relative overflow-hidden"
          >
            <CyanSpark
              size="sm"
              className="absolute right-5 top-5 z-10 opacity-55 transition group-hover:opacity-90"
            />

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <a
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                className="relative block min-h-[17rem] overflow-hidden border-b border-[var(--border)] bg-white lg:border-b-0 lg:border-r"
                aria-label={`Read ${publication.title} at ${publication.publication}`}
              >
                <Image
                  src={publication.imageSrc}
                  alt={publication.imageAlt}
                  width={1425}
                  height={842}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </a>

              <div className="relative flex flex-col justify-center p-6 md:p-8 lg:p-10">
                <NotebookPaperclip
                  size="lg"
                  className="absolute bottom-6 right-6 rotate-12 opacity-15"
                />

                <div className="flex flex-wrap gap-2">
                  <BrandBadge tone="verified" icon="dot">
                    {publication.status}
                  </BrandBadge>

                  <BrandBadge tone="quiet" icon="dot">
                    {publication.category}
                  </BrandBadge>
                </div>

                <p className="mt-6 font-lab text-sm uppercase tracking-[0.08em] text-cyan">
                  {publication.publication} · {publication.publishedAt}
                </p>

                <h3 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
                  {publication.title}
                </h3>

                <p className="mt-4 font-display text-xl italic leading-8 text-ink/85">
                  {publication.subtitle}
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-muted">
                  {publication.description}
                </p>

                <a
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-7 inline-flex w-fit items-center gap-2 rounded-2xl border border-cyan/35 bg-cyan/[0.06] px-5 py-3 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-cyan transition hover:-translate-y-0.5 hover:border-cyan/60 hover:text-ink"
                >
                  Read at {publication.publication}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
