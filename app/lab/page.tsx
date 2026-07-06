import { SiteHeader } from "@/components/SiteHeader";
import { labExperiments } from "@/data/labExperiments";

export default function LabPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-14">
        <p className="lab-label text-cyan">The Lab</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
          Experiments with a point.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Creative systems, small-business building, playful tools, identity
          experiments, and prototypes that test ideas before they become
          something bigger.
        </p>
      </section>

      <section className="lab-shell pt-14">
        <div className="grid gap-5 lg:grid-cols-3">
          {labExperiments.map((experiment) => (
            <article className="paper-card overflow-hidden" key={experiment.title}>
              <div className="border-b border-[var(--border)] bg-white/[0.035] p-6">
                <p className="lab-label text-cyan">{experiment.label}</p>
                <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                  {experiment.title}
                </h2>
              </div>

              <div className="p-6">
                <p className="leading-7 text-muted">
                  {experiment.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experiment.tags.map((tag) => (
                    <span
                      className="rounded-full border border-[var(--border)] bg-white/5 px-3 py-1.5 font-lab text-xs font-semibold uppercase tracking-[0.06em] text-muted"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-[var(--border)] pt-5">
                  <span className="lab-label inline-flex items-center gap-2 text-cyan">
                    Open dossier <span>→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}