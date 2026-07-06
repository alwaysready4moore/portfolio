export function LabWorkbench() {
  return (
    <aside className="paper-card relative overflow-hidden p-5 md:p-7">
      <div className="absolute right-6 top-5 h-20 w-20 rotate-6 rounded-[1.6rem] bg-lavender/45 opacity-70 blur-[1px]" />
      <div className="absolute -left-8 bottom-8 h-32 w-32 rounded-full bg-cyan/15 blur-2xl" />
      <div className="absolute right-10 bottom-12 h-28 w-28 rounded-full bg-teal/10 blur-2xl" />

      <div className="relative grid gap-5">
        <div className="flex items-center justify-between gap-4">
          <p className="lab-label text-cyan">Systems in progress</p>
          <span className="signal-dot" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-[var(--border)] bg-white/[0.04] p-4">
            <p className="lab-label mb-3 text-muted">From messy</p>
            <ul className="grid gap-2 text-sm leading-5 text-muted">
              <li>↳ notes</li>
              <li>↳ docs</li>
              <li>↳ spreadsheets</li>
              <li>↳ conversations</li>
              <li>↳ chaos</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-cyan/20 bg-cyan/[0.055] p-4">
            <p className="lab-label mb-4 text-cyan">To useful</p>

            <div className="mx-auto grid max-w-36 grid-cols-3 gap-2">
              <div className="col-start-2 h-10 rounded-xl bg-blue/45" />
              <div className="h-10 rounded-xl bg-teal/60" />
              <div className="h-10 rounded-xl bg-gold/80" />
              <div className="h-10 rounded-xl bg-coral/70" />
              <div className="col-span-3 h-2 rounded-full bg-white/18" />
              <div className="col-span-2 h-2 rounded-full bg-white/14" />
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-white/[0.04] p-4">
            <p className="lab-label mb-3 text-muted">Outcomes</p>
            <div className="grid gap-2 text-sm leading-5 text-ink">
              <span>✓ clear tools</span>
              <span>✓ useful guides</span>
              <span>✓ better workflows</span>
              <span>✓ confident teams</span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-white/[0.035] p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="lab-label text-muted">Workbench shelf</p>
            <span className="rounded-full border border-gold/30 bg-gold/15 px-3 py-1 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-gold">
              active
            </span>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-lavender/25 bg-lavender/20 px-4 py-3 font-display text-lg font-bold tracking-[-0.035em] text-ink">
              Make it useful
            </div>
            <div className="ml-6 rounded-2xl border border-cyan/25 bg-cyan/15 px-4 py-3 font-display text-lg font-bold tracking-[-0.035em] text-ink">
              Write clearly
            </div>
            <div className="ml-3 rounded-2xl border border-mint/25 bg-mint/15 px-4 py-3 font-display text-lg font-bold tracking-[-0.035em] text-ink">
              Think in systems
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_0.75fr]">
          <div className="rounded-3xl border border-cyan/20 bg-cyan/[0.06] p-5">
            <p className="lab-label mb-4 text-cyan">Lab principle</p>
            <p className="font-display text-3xl font-bold leading-none tracking-[-0.045em] text-ink">
              Systems are human.
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">
              The best tool is the one people trust enough to actually use.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-white/[0.04] p-5">
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