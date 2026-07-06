import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

const contactRoutes = [
  {
    title: "Email",
    label: "Best for direct opportunities",
    description:
      "For roles, collaborations, portfolio questions, writing opportunities, or projects that need a clearer shape.",
    href: "mailto:msnelson9241@gmail.com?subject=Portfolio%20Inquiry%20-%20AlwaysReady4Moore",
    cta: "Email Me",
    primary: true,
  },
  {
    title: "LinkedIn",
    label: "Best for professional context",
    description:
      "Connect with me, see current updates, and follow the writing, systems, and AI work I’m sharing publicly.",
    href: "https://www.linkedin.com/in/alwaysready4moore",
    cta: "Open LinkedIn",
    primary: false,
  },
  {
    title: "GitHub",
    label: "Best for build proof",
    description:
      "See public projects, code, prototypes, and the technical side of the systems I’m building.",
    href: "https://github.com/alwaysready4moore",
    cta: "Open GitHub",
    primary: false,
  },
];

const bestFor = [
  "AI workflow design",
  "Knowledge systems",
  "Support operations",
  "Internal tools",
  "Documentation and enablement",
  "Security-aware communication",
];

const signals = [
  {
    label: "Working style",
    value: "Clear, curious, systems-first",
  },
  {
    label: "Strongest overlap",
    value: "AI + support + knowledge systems",
  },
  {
    label: "Favorite problem",
    value: "Messy information with human consequences",
  },
];

function ContactRouteCard({
  title,
  label,
  description,
  href,
  cta,
  primary,
}: {
  title: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  primary: boolean;
}) {
  return (
    <article className="paper-card grid gap-6 p-6 transition duration-300 hover:-translate-y-1">
      <div>
        <p className="lab-label text-cyan">{label}</p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
          {title}
        </h2>
        <p className="mt-4 leading-7 text-muted">{description}</p>
      </div>

      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
        className={
          primary
            ? "focus-ring rounded-2xl border border-cyan/40 bg-cyan px-5 py-4 text-center font-lab text-sm font-semibold uppercase tracking-[0.08em] text-night shadow-[0_0_32px_rgba(39,217,255,0.22)] transition hover:-translate-y-0.5"
            : "focus-ring rounded-2xl border border-[var(--border)] bg-white/5 px-5 py-4 text-center font-lab text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-cyan/40"
        }
      >
        {cta}
      </a>
    </article>
  );
}

function SignalCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
      <p className="lab-label text-muted">{label}</p>
      <p className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] text-ink">
        {value}
      </p>
    </article>
  );
}

export default function ContactPage() {
  return (
    <main className="pb-16">
      <SiteHeader />

      <section className="lab-shell pt-10">
        <p className="lab-label text-cyan">Contact</p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.92fr_0.72fr] lg:items-start">
          <div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-none tracking-[-0.055em] text-ink md:text-7xl">
              Let’s build something useful.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              I’m open to opportunities where thoughtful systems, clear
              communication, AI fluency, and good humans come together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {bestFor.map((item) => (
                <span className="soft-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="paper-card overflow-hidden">
            <div className="border-b border-[var(--border)] bg-white/[0.035] p-3">
              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-night">
                <img
                  src="/avatars/lets-talk.gif"
                  alt="Looping chibi avatar of Marquetta typing at a laptop."
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <div className="p-6">
              <p className="lab-label text-cyan">Currently at the workbench</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink">
                Send a signal.
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Looping chibi avatar generated with Gemini. AI-generated media is
                used intentionally and disclosed throughout this portfolio.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="lab-shell pt-14">
        <div className="grid gap-5 lg:grid-cols-3">
          {contactRoutes.map((route) => (
            <ContactRouteCard
              key={route.title}
              title={route.title}
              label={route.label}
              description={route.description}
              href={route.href}
              cta={route.cta}
              primary={route.primary}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="lab-label text-cyan">Before you reach out</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.05em] text-ink md:text-5xl">
              What I’m especially good at.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
              <p className="lab-label text-cyan">Systems</p>
              <p className="mt-4 leading-7 text-muted">
                Turning scattered knowledge, repeated questions, unclear
                workflows, and hidden context into tools people can actually
                use.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
              <p className="lab-label text-cyan">AI</p>
              <p className="mt-4 leading-7 text-muted">
                Designing AI-assisted workflows that preserve human judgment
                instead of treating automation like a magic vending machine.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
              <p className="lab-label text-cyan">Communication</p>
              <p className="mt-4 leading-7 text-muted">
                Making dense, technical, emotional, or operational information
                easier to understand without sanding off the nuance.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/[0.035] p-5">
              <p className="lab-label text-cyan">Support</p>
              <p className="mt-4 leading-7 text-muted">
                Building from the reality of what people ask, where they get
                stuck, and what they need in the moment to move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="grid gap-5 md:grid-cols-3">
          {signals.map((signal) => (
            <SignalCard
              key={signal.label}
              label={signal.label}
              value={signal.value}
            />
          ))}
        </div>
      </section>

      <section className="lab-shell pt-16">
        <div className="paper-note p-7 md:p-9">
          <p className="field-heading text-3xl leading-tight text-[var(--paper-ink)] md:text-4xl">
            Good systems do not just organize information. They make the next
            right action easier to see.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="mailto:msnelson9241@gmail.com?subject=Portfolio%20Inquiry%20-%20AlwaysReady4Moore"
              className="focus-ring rounded-2xl border border-[var(--paper-ink)] bg-[var(--paper-ink)] px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-paper"
            >
              Start the conversation
            </a>

            <Link
              href="/work"
              className="focus-ring rounded-2xl border border-[var(--paper-line)] bg-white/40 px-5 py-4 font-lab text-sm font-semibold uppercase tracking-[0.08em] text-[var(--paper-ink)]"
            >
              Review the work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}