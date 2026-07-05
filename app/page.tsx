import { FeaturedSystemCard } from "@/components/FeaturedSystemCard";
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

function Chip({ children, color }: { children: string; color?: string }) {
  return (
    <span className={`soft-chip ${color ? color : "bg-white/70"}`}>
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="pb-16">
      <header className="lab-shell flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-lab text-sm font-semibold text-paper">
            MM
          </span>
          <span className="font-display text-2xl font-bold tracking-[-0.04em]">
            Marquetta Moore
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted md:flex">
          <a href="#work" className="hover:text-ink">
            Work
          </a>
          <a href="#writing" className="hover:text-ink">
            Field Notes
          </a>
          <a href="#lab" className="hover:text-ink">
            Lab
          </a>
          <a href="#contact" className="hover:text-ink">
            Contact
          </a>
        </nav>
      </header>

      <section className="lab-shell grid gap-8 pt-10 md:grid-cols-[1fr_0.9fr] md:items-center md:pt-16">
        <div>
          <p className="lab-label mb-5 text-muted">Marquetta’s Systems Lab</p>

          <h1 className="display-heading max-w-3xl text-6xl md:text-7xl lg:text-8xl">
            I build systems for messy information.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            AI workflows. Knowledge hubs. Support tools. Security-minded
            communication. Practical systems that help people find the right
            answer faster.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Chip color="bg-mint">AI Enablement</Chip>
            <Chip color="bg-gold">Knowledge Systems</Chip>
            <Chip color="bg-coral/35">Support Ops</Chip>
            <Chip color="bg-sky">Security-Aware Comms</Chip>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="focus-ring rounded-2xl bg-ink px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-paper shadow-soft transition hover:-translate-y-0.5"
            >
              View Selected Work
            </a>
            <a
              href="#lab"
              className="focus-ring rounded-2xl border border-[var(--border)] bg-paper px-6 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5"
            >
              Explore the Lab
            </a>
          </div>
        </div>

        <LabWorkbench />
      </section>

      <section id="work" className="lab-shell pt-20">
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

      <section className="lab-shell pt-20">
        <SectionHeading
          kicker="Method"
          title="From messy to usable"
          description="The through-line in the work: take the scattered, ambiguous, repetitive, or risky thing and turn it into something people can use."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {transformations.map((item) => (
            <article className="paper-card p-5" key={item.from}>
              <p className="lab-label text-muted">Before</p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em]">
                {item.from}
              </h3>

              <div className="my-5 font-lab text-2xl text-teal">→</div>

              <p className="lab-label text-muted">After</p>
              <h4 className="mt-3 font-display text-xl font-bold tracking-[-0.04em]">
                {item.to}
              </h4>
              <p className="mt-4 text-sm leading-6 text-muted">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="writing" className="lab-shell pt-20">
        <SectionHeading
          kicker="Field Notes"
          title="Writing that explains the work"
          description="Essays, arguments, and observations from the messy middle of AI, work, security, and human behavior."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {fieldNotes.map((note) => (
            <article className="paper-card p-5" key={note.title}>
              <div className="mb-5 h-40 rounded-3xl border border-[var(--border)] bg-gradient-to-br from-sky via-paper to-coral/25 p-4">
                <p className="lab-label text-muted">{note.category}</p>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-[-0.04em]">
                {note.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">{note.description}</p>
              <p className="lab-label mt-5 text-teal">Read field note →</p>
            </article>
          ))}
        </div>
      </section>

      <section id="lab" className="lab-shell pt-20">
        <SectionHeading
          kicker="The Lab"
          title="Experiments with a point"
          description="Creative systems, small-business building, playful tools, and identity experiments that test ideas before they become something bigger."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {labExperiments.map((experiment) => (
            <article className="paper-card p-6" key={experiment.title}>
              <p className="lab-label mb-3 text-muted">{experiment.label}</p>
              <h3 className="font-display text-3xl font-bold tracking-[-0.045em]">
                {experiment.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">
                {experiment.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {experiment.tags.map((tag) => (
                  <span
                    className="rounded-full border border-[var(--border)] bg-white/70 px-3 py-1.5 font-lab text-xs font-semibold uppercase tracking-[0.06em]"
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

      <section id="contact" className="lab-shell pt-20">
        <div className="paper-card grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="lab-label mb-3 text-muted">Contact</p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.045em] md:text-5xl">
              Let’s build something useful.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              I’m open to opportunities where thoughtful systems, clear
              communication, and good humans come together.
            </p>
          </div>

          <div className="grid gap-3">
            <a
              className="focus-ring rounded-2xl border border-[var(--border)] bg-paper px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em]"
              href="mailto:msnelson9241@gmail.com"
            >
              Email Me
            </a>
            <a
              className="focus-ring rounded-2xl bg-ink px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-paper"
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