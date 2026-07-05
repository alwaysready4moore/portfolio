export function LabWorkbench() {
  return (
    <aside className="paper-card relative overflow-hidden p-5 md:p-7">
      <div className="absolute right-6 top-5 h-20 w-20 rotate-6 rounded-[1.6rem] bg-lavender opacity-70" />
      <div className="absolute -left-4 bottom-8 h-24 w-24 rounded-full bg-mint opacity-60 blur-xl" />

      <div className="relative grid gap-5">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-[var(--border)] bg-white/75 p-4 shadow-sm">
            <p className="lab-label mb-3 text-muted">From messy</p>
            <ul className="grid gap-2 text-sm leading-5 text-muted">
              <li>↳ notes</li>
              <li>↳ docs</li>
              <li>↳ spreadsheets</li>
              <li>↳ conversations</li>
              <li>↳ chaos</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-paper/85 p-4 shadow-sm">
            <p className="lab-label mb-4 text-muted">To useful</p>

            <div className="mx-auto grid max-w-36 grid-cols-3 gap-2">
              <div className="col-start-2 h-10 rounded-xl bg-sky" />
              <div className="h-10 rounded-xl bg-coral/55" />
              <div className="h-10 rounded-xl bg-teal/35" />
              <div className="h-10 rounded-xl bg-gold" />
              <div className="col-span-3 h-2 rounded-full bg-ink/15" />
              <div className="col-span-2 h-2 rounded-full bg-ink/15" />
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-white/75 p-4 shadow-sm">
            <p className="lab-label mb-3 text-muted">Outcomes</p>
            <div className="grid gap-2 text-sm leading-5 text-ink">
              <span>✓ clear tools</span>
              <span>✓ useful guides</span>
              <span>✓ better workflows</span>
              <span>✓ confident teams</span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-white/70 p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="lab-label text-muted">Workbench shelf</p>
            <span className="rounded-full bg-gold/70 px-3 py-1 font-lab text-xs font-semibold uppercase tracking-[0.08em]">
              active
            </span>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl bg-lavender px-4 py-3 font-display text-lg font-bold tracking-[-0.04em]">
              Make it useful
            </div>
            <div className="ml-6 rounded-2xl bg-sky px-4 py-3 font-display text-lg font-bold tracking-[-0.04em]">
              Write clearly
            </div>
            <div className="ml-3 rounded-2xl bg-mint px-4 py-3 font-display text-lg font-bold tracking-[-0.04em]">
              Think in systems
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_0.75fr]">
          <div className="rounded-3xl border border-[var(--border)] bg-ink p-5 text-paper shadow-sm">
            <p className="lab-label mb-4 text-paper/65">Lab principle</p>
            <p className="font-display text-3xl font-bold leading-none tracking-[-0.045em]">
              Systems are human.
            </p>
            <p className="mt-4 text-sm leading-6 text-paper/70">
              The best tool is the one people trust enough to actually use.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-coral/25 p-5 shadow-sm">
            <p className="lab-label mb-4 text-muted">Current method</p>
            <ol className="grid gap-2 text-sm text-ink">
              <li>1. Observe</li>
              <li>2. Structure</li>
              <li>3. Build</li>
              <li>4. Refine</li>
            </ol>
          </div>
        </div>
      </div>
    </aside>
  );
}