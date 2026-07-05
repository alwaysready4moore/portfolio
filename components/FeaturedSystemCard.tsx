type FeaturedSystemCardProps = {
  title: string;
  label: string;
  description: string;
  tags: string[];
  accent: string;
  previewType: "dashboard" | "toolbox" | "knowledge";
};

export function FeaturedSystemCard({
  title,
  label,
  description,
  tags,
  accent,
  previewType,
}: FeaturedSystemCardProps) {
  return (
    <article className="paper-card group overflow-hidden transition duration-300 hover:-translate-y-1">
      <div className={`min-h-56 p-5 ${accent}`}>
        <div className="mb-6 flex items-center justify-between">
          <p className="lab-label opacity-80">System preview</p>
          <span className="rounded-full border border-current/20 px-3 py-1 font-lab text-xs font-semibold uppercase tracking-[0.08em] opacity-80">
            Open
          </span>
        </div>

        {previewType === "dashboard" ? <DashboardPreview /> : null}
        {previewType === "toolbox" ? <ToolboxPreview /> : null}
        {previewType === "knowledge" ? <KnowledgePreview /> : null}
      </div>

      <div className="p-6">
        <p className="lab-label mb-3 text-muted">{label}</p>

        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-3xl font-bold tracking-[-0.045em]">
            {title}
          </h3>
          <span className="font-lab text-xl text-teal transition group-hover:translate-x-1">
            →
          </span>
        </div>

        <p className="mt-3 leading-7 text-muted">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              className="rounded-full border border-[var(--border)] bg-lavender/45 px-3 py-1.5 font-lab text-xs font-semibold uppercase tracking-[0.06em]"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function DashboardPreview() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-[0.7fr_1fr] gap-4">
        <div className="grid gap-2 rounded-2xl bg-paper/10 p-3">
          <div className="h-3 w-2/3 rounded-full bg-current opacity-25" />
          <div className="h-3 w-1/2 rounded-full bg-current opacity-20" />
          <div className="h-3 w-3/4 rounded-full bg-current opacity-15" />
        </div>

        <div className="rounded-2xl bg-paper/10 p-4">
          <div className="mb-3 h-3 w-1/2 rounded-full bg-current opacity-20" />
          <div className="grid grid-cols-4 items-end gap-2">
            <div className="h-10 rounded-t-xl bg-current opacity-15" />
            <div className="h-16 rounded-t-xl bg-current opacity-25" />
            <div className="h-8 rounded-t-xl bg-current opacity-15" />
            <div className="h-20 rounded-t-xl bg-current opacity-30" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-paper/10 p-4">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border-4 border-current opacity-35" />
          <div className="h-3 w-28 rounded-full bg-current opacity-20" />
        </div>
        <div className="h-3 w-full rounded-full bg-current opacity-15" />
      </div>
    </div>
  );
}

function ToolboxPreview() {
  return (
    <div className="grid gap-4 text-ink">
      <div className="rounded-2xl bg-white/55 p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-3 w-24 rounded-full bg-ink/20" />
          <div className="h-7 w-16 rounded-xl bg-teal/35" />
        </div>
        <div className="h-9 rounded-2xl border border-ink/10 bg-paper/70" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white/55 p-4">
          <div className="mb-3 h-3 w-20 rounded-full bg-ink/20" />
          <div className="grid gap-2">
            <div className="h-3 rounded-full bg-ink/15" />
            <div className="h-3 rounded-full bg-ink/15" />
            <div className="h-3 w-2/3 rounded-full bg-ink/15" />
          </div>
        </div>

        <div className="rounded-2xl bg-white/55 p-4">
          <div className="mb-3 h-3 w-16 rounded-full bg-ink/20" />
          <div className="grid gap-2">
            <div className="h-3 rounded-full bg-coral/45" />
            <div className="h-3 rounded-full bg-gold/65" />
            <div className="h-3 rounded-full bg-teal/35" />
          </div>
        </div>
      </div>
    </div>
  );
}

function KnowledgePreview() {
  return (
    <div className="grid grid-cols-[0.45fr_1fr] gap-4 text-ink">
      <div className="rounded-2xl bg-white/55 p-4">
        <div className="mb-4 h-3 w-16 rounded-full bg-ink/20" />
        <div className="grid gap-2">
          <div className="h-3 rounded-full bg-ink/15" />
          <div className="h-3 rounded-full bg-ink/15" />
          <div className="h-3 rounded-full bg-ink/15" />
          <div className="h-3 w-2/3 rounded-full bg-ink/15" />
        </div>
      </div>

      <div className="rounded-2xl bg-white/55 p-4">
        <div className="mb-4 h-4 w-36 rounded-full bg-ink/20" />
        <div className="grid grid-cols-2 gap-3">
          <div className="h-14 rounded-2xl bg-mint/70" />
          <div className="h-14 rounded-2xl bg-sky/70" />
          <div className="h-14 rounded-2xl bg-gold/65" />
          <div className="h-14 rounded-2xl bg-coral/35" />
        </div>
      </div>
    </div>
  );
}