import { FeaturedSystemCard } from "@/components/FeaturedSystemCard";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredSystems } from "@/data/featuredSystems";
import { transformations } from "@/data/transformations";

export default function WorkPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-14">
        <p className="lab-label text-cyan">Selected Work</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
          Systems, tools, and communication that make messy information usable.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          A mix of AI workflows, knowledge systems, support enablement, internal
          tools, and security-aware communication.
        </p>
      </section>

      <section className="lab-shell pt-14">
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredSystems.map((project) => (
            <FeaturedSystemCard
              key={project.title}
              title={project.title}
              label={project.label}
              description={project.description}
              tags={[...project.tags]}
              accent={project.accent}
              previewType={project.previewType}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-20">
        <div className="mb-8">
          <p className="lab-label text-muted">Method</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
            From messy to usable
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {transformations.map((item) => (
            <article className="paper-card p-5" key={item.from}>
              <p className="lab-label text-cyan">Before</p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-ink">
                {item.from}
              </h3>

              <div className="my-5 font-lab text-2xl text-cyan">→</div>

              <p className="lab-label text-cyan">After</p>
              <h4 className="mt-3 font-display text-xl font-bold tracking-[-0.04em] text-ink">
                {item.to}
              </h4>
              <p className="mt-4 text-sm leading-6 text-muted">{item.note}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}