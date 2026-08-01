import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const safeRoutes = [
  {
    href: "/work",
    label: "Work",
    description: "Case studies, systems, tools, and guides.",
  },
  {
    href: "/technical-writing",
    label: "Technical Writing",
    description: "Playbooks, technical references, and workflow guidance.",
  },
  {
    href: "/field-notes",
    label: "Field Notes",
    description: "Articles, essays, and published writing.",
  },
  {
    href: "/lab",
    label: "Lab",
    description: "Creative experiments, games, and prototypes.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Email, LinkedIn, and GitHub.",
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
      <p className="lab-label text-cyan">Available page</p>
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
        <p className="lab-label text-cyan">404 · Page not found</p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.98fr_0.72fr] lg:items-start">
          <div className="paper-card p-6 md:p-8">
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              This page doesn’t
              <span className="headline-signal"> exist</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              The link may be old, incomplete, or mistyped. Choose a page below
              to continue.
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
              <p className="lab-label text-muted">Available pages</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
                Choose where to go next
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
              <p className="lab-label text-cyan">What happened</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                The route did not match a page
              </h2>
              <p className="mt-4 leading-7 text-muted">
                The page may have moved, the link may be incomplete, or the URL
                may contain a typo.
              </p>

              <div className="mt-6 rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
                <p className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                  Next step
                </p>
                <p className="mt-3 leading-7 text-muted">
                  Choose an available page and continue.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-12">
        <div className="paper-note p-7 md:p-9">
          <p className="field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Some pages move. The useful ones should still be easy to find.
          </p>
        </div>
      </section>
    </main>
  );
}