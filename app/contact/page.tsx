import { SiteHeader } from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-14">
        <p className="lab-label text-cyan">Contact</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
          Let’s build something useful.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          I’m open to opportunities where thoughtful systems, clear
          communication, AI fluency, and good humans come together.
        </p>
      </section>

      <section className="lab-shell pt-14">
        <div className="paper-card grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="lab-label mb-3 text-cyan">Reach out</p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.045em] text-ink md:text-5xl">
              Send a signal.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              For roles, collaborations, writing opportunities, or systems that
              need a clearer shape.
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