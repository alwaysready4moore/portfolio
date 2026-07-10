import Link from "next/link";
import {
  BrandBadge,
  CyanSpark,
  NotebookPaperclip,
  PhoenixMark,
} from "@/components/brand";
import { contactInfo } from "@/data/contact";

const siteLinks = [
  {
    href: "/work",
    label: "Work",
  },
  {
    href: "/field-notes",
    label: "Field Notes",
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
    href: "/field-guide",
    label: "Field Guide",
  },
  {
    href: "/contact",
    label: "Contact",
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

        <div className="relative grid gap-9 md:grid-cols-[1.1fr_0.55fr_0.55fr] md:items-start">
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
                Systems Lab
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Field Notebook
              </BrandBadge>

              <BrandBadge tone="quiet" icon="dot">
                Proof of Work
              </BrandBadge>
            </div>

            <p className="mt-5 max-w-xl leading-7 text-muted">
              Systems lab, portfolio, field notebook, and proof of work for
              support-informed AI knowledge systems.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
              Some visual assets on this site are AI-generated or AI-assisted
              and are disclosed where they appear. More details live in the
              Colophon.
            </p>
          </div>

          <nav aria-label="Footer site navigation">
            <p className="lab-label text-cyan">Explore</p>

            <div className="mt-4 grid gap-3 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              {siteLinks.map((link) => (
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
              {outsideLinks.map((link) => (
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noreferrer"
                  }
                  className="transition hover:text-cyan"
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-cyan/15 bg-cyan/[0.045] p-4">
              <p className="font-lab text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-cyan">
                Current signal
              </p>

              <p className="mt-2 text-sm leading-6 text-muted">
                Building clearer paths through messy information, repetitive
                work, and systems that should have been easier yesterday.
              </p>
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