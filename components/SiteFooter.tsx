import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  NotebookPaperclip,
  PhoenixMark,
} from "@/components/brand";
import { contactInfo } from "@/data/contact";

const portfolioLinks = [
  {
    href: "/work",
    label: "Work",
  },
  {
    href: "/work/aegis",
    label: "Aegis",
  },
  {
    href: "/field-notes",
    label: "Writing",
  },
  {
    href: "/lab",
    label: "Lab",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/resume",
    label: "Résumé",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const resourceLinks = [
  {
    href: "/field-guide",
    label: "Field Guide",
  },
  {
    href: "/pictogram-guide",
    label: "Pictogram Guide",
  },
  {
    href: "/colophon",
    label: "Colophon",
  },
];

const outsideLinks = [
  {
    href: contactInfo.mailto,
    label: "Email",
  },
  {
    href: contactInfo.linkedin,
    label: "LinkedIn",
  },
  {
    href: contactInfo.github,
    label: "GitHub",
  },
];

export function SiteFooter() {
  return (
    <footer className="lab-shell border-t border-[var(--border)] py-10 md:py-12">
      <div className="paper-card relative overflow-hidden p-6 md:p-8">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan/10 blur-3xl"
        />

        <NotebookPaperclip
          size="lg"
          className="absolute right-8 top-8 rotate-12 opacity-25"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.55fr_0.55fr_0.55fr] lg:items-start">
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3 leading-none"
              aria-label="Marquetta Moore home"
            >
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-[#101820] shadow-[0_0_24px_rgba(25,216,232,0.08)] transition group-hover:-translate-y-0.5 group-hover:border-cyan/40 md:h-14 md:w-14">
                <PhoenixMark
                  variant="standard"
                  size="md"
                  decorative
                  className="h-9 w-9 md:h-10 md:w-10"
                />

                <CyanSpark
                  size="xs"
                  animated
                  className="absolute -right-1 -top-1"
                />
              </span>

              <span className="inline-flex flex-col">
                <span className="signature-heading text-4xl text-ink md:text-5xl">
                  Marquetta Moore
                </span>

                <span className="mt-[-0.35rem] font-lab text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-cyan">
                  AlwaysReady4Moore.com
                </span>
              </span>
            </Link>

            <div className="mt-5 flex flex-wrap gap-2">
              <BrandBadge tone="signal" icon="spark">
                Creative Technologist
              </BrandBadge>

              <BrandBadge tone="verified" icon="dot">
                Knowledge Systems Designer
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                AI Product Builder
              </BrandBadge>
            </div>

            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              I design the structures that make information useful, whether the
              final form is a knowledge environment, an AI pipeline, a browser
              tool, or a creative experience.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
              This site documents public-safe work, reconstructed systems, and
              selected experiments. AI-assisted visual and production methods
              are disclosed in the{" "}
              <Link
                href="/colophon"
                className="text-cyan underline-offset-4 transition hover:text-ink hover:underline"
              >
                Colophon
              </Link>
              .
            </p>

            <div className="mt-6 rounded-3xl border border-cyan/15 bg-cyan/[0.045] p-5">
              <p className="font-lab text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-cyan">
                Current signal
              </p>

              <p className="mt-3 leading-7 text-muted">
                Open to Creative Technologist, AI product, knowledge systems,
                and technical enablement opportunities.
              </p>
            </div>
          </div>

          <nav aria-label="Footer portfolio navigation">
            <p className="lab-label text-cyan">Portfolio</p>

            <div className="mt-4 grid gap-3 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              {portfolioLinks.map((link) => (
                <Link
                  href={link.href}
                  className="transition hover:text-cyan"
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Footer resource navigation">
            <p className="lab-label text-cyan">Resources</p>

            <div className="mt-4 grid gap-3 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              {resourceLinks.map((link) => (
                <Link
                  href={link.href}
                  className="transition hover:text-cyan"
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Footer contact links">
            <p className="lab-label text-cyan">Connect</p>

            <div className="mt-4 grid gap-3 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              {outsideLinks.map((link) => {
                const isEmail = link.href.startsWith("mailto:");

                return (
                  <a
                    href={link.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                    className="inline-flex items-center gap-2 transition hover:text-cyan"
                    key={link.href}
                  >
                    {link.label}

                    {!isEmail ? (
                      <span aria-hidden="true">↗</span>
                    ) : null}
                  </a>
                );
              })}
            </div>
          </nav>
        </div>

        <div className="relative mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-6 font-lab text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Marquetta Moore</p>

          <p className="flex items-center gap-2">
            <CyanSpark size="xs" />
            Built with curiosity, structure, and a lot of open tabs.
          </p>
        </div>
      </div>
    </footer>
  );
}