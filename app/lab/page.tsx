import { SiteHeader } from "@/components/SiteHeader";
import { labExperiments } from "@/data/labExperiments";

function AccentBadge({ accent }: { accent: string }) {
  const accentClasses: Record<string, string> = {
    lavender: "border-lavender/35 bg-lavender/15 text-lavender",
    mint: "border-mint/35 bg-mint/15 text-mint",
    cyan: "border-cyan/35 bg-cyan/15 text-cyan",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1.5 font-lab text-xs font-semibold uppercase tracking-[0.08em] ${
        accentClasses[accent] ?? accentClasses.cyan
      }`}
    >
      dossier
    </span>
  );
}

function LabList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <p className="lab-label text-muted">{title}</p>
      <ul className="mt-4 grid gap-2">
        {items.map((item) => (
          <li className="grid grid-cols-[auto_1fr] gap-3 text-sm text-muted" key={item}>
            <span className="font-lab text-cyan">↳</span>
            <span className="leading-6">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperimentDossier({
  title,
  label,
  status,
  type,
  description,
  question,
  methods,
  outputs,
  tags,
  accent,
  index,
}: {
  title: string;
  label: string;
  status: string;
  type: string;
  description: string;
  question: string;
  methods: readonly string[];
  outputs: readonly string[];
  tags: readonly string[];
  accent: string;
  index: number;
}) {
  return (
    <article className="paper-card overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="relative overflow-hidden border-b border-[var(--border)] bg-white/[0.035] p-6 lg:border-b-0 lg:border-r lg:p-8">
          <div className="absolute right-8 top-8 h-24 w-24 rounded-[2rem] bg-cyan/10 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-lavender/10 blur-2xl" />

          <div className="relative">
            <div className="mb-7 flex items-start justify-between gap-5">
              <div>
                <p className="lab-label text-cyan">
                  Experiment 0{index + 1}
                </p>
                <h2 className="mt-4 font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink">
                  {title}
                </h2>
              </div>

              <AccentBadge accent={accent} />
            </div>

            <p className="lab-label text-muted">{label}</p>

            <p className="mt-6 text-lg leading-8 text-muted">{description}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-4">
                <p className="lab-label text-muted">Status</p>
                <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
                  {status}
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-4">
                <p className="lab-label text-muted">Type</p>
                <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
                  {type}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-6 lg:p-8">
          <div className="rounded-3xl border border-cyan/20 bg-cyan/[0.045] p-5">
            <p className="lab-label text-cyan">Core question</p>
            <p className="mt-4 text-lg leading-8 text-ink">{question}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <LabList title="Methods" items={methods} />
            <LabList title="Outputs" items={outputs} />
          </div>

          <div>
            <p className="mb-3 lab-label text-muted">Signals</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  className="rounded-full border border-[var(--border)] bg-white/[0.035] px-3 py-1.5 text-sm text-ink"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-5">
            <span className="lab-label inline-flex items-center gap-2 text-cyan">
              Full experiment log coming soon <span>→</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function LabPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
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

      <section className="lab-shell pt-12">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="paper-card p-5">
            <p className="lab-label text-cyan">Lab rule</p>
            <p className="mt-3 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Play is data.
            </p>
          </div>

          <div className="paper-card p-5">
            <p className="lab-label text-cyan">Method</p>
            <p className="mt-3 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Make the idea tangible.
            </p>
          </div>

          <div className="paper-card p-5">
            <p className="lab-label text-cyan">Outcome</p>
            <p className="mt-3 font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Learn by building.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-shell grid gap-8 pt-14">
        {labExperiments.map((experiment, index) => (
          <ExperimentDossier
            key={experiment.title}
            title={experiment.title}
            label={experiment.label}
            status={experiment.status}
            type={experiment.type}
            description={experiment.description}
            question={experiment.question}
            methods={experiment.methods}
            outputs={experiment.outputs}
            tags={experiment.tags}
            accent={experiment.accent}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}