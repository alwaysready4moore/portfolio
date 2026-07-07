import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const safeRoutes = [
  {
    href: "/work",
    label: "Work",
    description: "Case studies, systems, tools, guides, and receipts.",
  },
  {
    href: "/field-notes",
    label: "Field Notes",
    description: "Writing, essays, and public thinking.",
  },
  {
    href: "/lab",
    label: "Lab",
    description: "Creative experiments, prototypes, and side quests.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "The fastest way to send a signal.",
  },
];

function RouteCard({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
    >
      <p className="lab-label text-cyan">Known route</p>
      <h2 className="mt-4 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
        {label}
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </Link>
  );
}

export default function NotFound() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <p className="lab-label text-cyan">404 · Missing page</p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.98fr_0.72fr] lg:items-start">
          <div className="paper-card p-6 md:p-8">
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              This page wandered off into the messy information.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              The route exists in spirit, but not in the actual site structure.
              Very relatable. Let’s get you back to something useful.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                className="focus-ring rounded-2xl border border-cyan/40 bg-cyan px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_32px_rgba(39,217,255,0.18)] transition hover:-translate-y-0.5"
              >
                Return home
              </Link>

              <Link
                href="/work"
                className="focus-ring rounded-2xl border border-[var(--border)] bg-white/[0.035] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
              >
                See the work
              </Link>
            </div>

            <div className="mt-10">
              <p className="lab-label text-muted">Known routes</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
                Try one of these instead.
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {safeRoutes.map((route) => (
                  <RouteCard
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    description={route.description}
                  />
                ))}
              </div>
            </div>
          </div>

          <aside className="paper-card overflow-hidden">
            <div className="border-b border-[var(--border)] bg-white/[0.035] p-3">
              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-night">
                <img
                  src="/avatars/404-blindfold.png"
                  alt="Chibi avatar of Marquetta walking around blindfolded, looking for the missing page."
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <div className="p-6">
              <p className="lab-label text-cyan">Diagnostic note</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                Route mismatch detected.
              </h2>
              <p className="mt-4 leading-7 text-muted">
                This usually means a link changed, a page is not built yet, or a
                URL got typed with great confidence and questionable accuracy.
              </p>

              <div className="mt-6 rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
                <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                  Suggested next action
                </p>
                <p className="mt-3 leading-7 text-muted">
                  Choose a known path and get back to the main workbench.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-12">
        <div className="paper-note p-7 md:p-9">
          <p className="field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Not every path is documented yet. We are, tragically, still bound by
            time.
          </p>
        </div>
      </section>
    </main>
  );
}