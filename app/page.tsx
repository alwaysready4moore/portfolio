import { FeaturedSystemCard } from "@/components/FeaturedSystemCard";
import { FieldNoteCard } from "@/components/FieldNoteCard";
import { LabWorkbench } from "@/components/LabWorkbench";
import { featuredSystems } from "@/data/featuredSystems";
import { fieldNotes } from "@/data/fieldNotes";
import { labExperiments } from "@/data/labExperiments";
import { transformations } from "@/data/transformations";

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3">
      <p className="lab-label text-muted">{kicker}</p>
      <h2 className="font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Chip({ children }: { children: string }) {
  return <span className="soft-chip">{children}</span>;
}

export default function Home() {
  return (
    <main className="pb-16">
      <header className="lab-shell flex items-center justify-between py-7">
        <a href="#" className="group inline-flex flex-col leading-none">
          <span className="signature-heading text-5xl text-ink md:text-6xl">
            Marquetta Moore
          </span>
          <span className="mt-[-0.45rem] font-lab text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cyan">
            AlwaysReady4Moore.com
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted md:flex">
          <a href="#work" className="transition hover:text-cyan">
            Work
          </a>
          <a href="#writing" className="transition hover:text-cyan">
            Field Notes
          </a>
          <a href="#lab" className="transition hover:text-cyan">
            Lab
          </a>
          <a href="#contact" className="transition hover:text-cyan">
            Contact
          </a>
          <span className="signal-dot" />
        </nav>
      </header>

      <section className="lab-shell grid gap-10 pt-16 md:grid-cols-[1fr_0.9fr] md:items-center md:pt-24">
        <div>
          <p className="lab-label mb-6 text-cyan">Marquetta’s Systems Lab</p>

          <h1 className="display-heading max-w-4xl text-6xl text-ink md:text-7xl lg:text-[6.6rem]">
            I build systems for messy information.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            AI workflows. Knowledge hubs. Support tools. Security-minded
            communication. Practical systems that help people find the right
            answer faster.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Chip>AI Enablement</Chip>
            <Chip>Knowledge Systems</Chip>
            <Chip>Support Ops</Chip>
            <Chip>Security-Aware Comms</Chip>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="focus-ring rounded-2xl border border-cyan/40 bg-cyan px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_32px_rgba(39,217,255,0.22)] transition hover:-translate-y-0.5"
            >
              View Selected Work
            </a>
            <a
              href="#writing"
              className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
            >
              Open Field Notes
            </a>
          </div>
        </div>

        <LabWorkbench />
      </section>

      <section id="work" className="lab-shell pt-24">
        <SectionHeading
          kicker="Selected Work"
          title="Featured systems"
          description="The polished proof: shipped tools, knowledge systems, support enablement, and security-minded communication."
        />

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

      <section className="lab-shell pt-24">
        <SectionHeading
          kicker="Method"
          title="From messy to usable"
          description="The through-line in the work: take the scattered, ambiguous, repetitive, or risky thing and turn it into something people can use."
        />

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

      <section id="writing" className="lab-shell pt-24">
        <SectionHeading
          kicker="Field Notes"
          title="Writing that explains the work"
          description="Essays, arguments, and observations from the messy middle of AI, work, security, and human behavior."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {fieldNotes.map((note) => (
            <FieldNoteCard
              key={note.title}
              category={note.category}
              title={note.title}
              description={note.description}
              slug={note.slug}
              variant={note.variant}
            />
          ))}
        </div>
      </section>

      <section id="lab" className="lab-shell pt-24">
        <SectionHeading
          kicker="The Lab"
          title="Experiments with a point"
          description="Creative systems, small-business building, playful tools, and identity experiments that test ideas before they become something bigger."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {labExperiments.map((experiment) => (
            <article className="paper-card p-6" key={experiment.title}>
              <p className="lab-label mb-3 text-cyan">{experiment.label}</p>
              <h3 className="font-display text-3xl font-bold tracking-[-0.045em] text-ink">
                {experiment.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">
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
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="lab-shell pt-24">
        <div className="paper-card grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="lab-label mb-3 text-cyan">Contact</p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Let’s build something useful.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              I’m open to opportunities where thoughtful systems, clear
              communication, and good humans come together.
            </p>
          </div>

          <div className="grid gap-3">
            <a
              className="focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:border-cyan/40"
              href="mailto:msnelson9241@gmail.com"
            >
              Email Me
            </a>
            <a
              className="focus-ring rounded-2xl border border-cyan/40 bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night"
              href="https://www.linkedin.com/in/alwaysready4moore"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}