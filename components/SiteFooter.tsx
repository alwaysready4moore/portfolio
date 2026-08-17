import Link from "next/link";
import { CyanSpark, PhoenixMark } from "@/components/brand";
import { contactInfo } from "@/data/contact";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/technical-writing", label: "Technical Writing" },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#05080d]">
      <div className="lab-shell py-9 md:py-11">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-ink"
              aria-label="Marquetta Moore home"
            >
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-[#101820]">
                <PhoenixMark
                  variant="standard"
                  size="sm"
                  decorative
                  className="h-8 w-8"
                />
                <CyanSpark
                  size="xs"
                  className="absolute -right-1 -top-1"
                />
              </span>

              <span>
                <span className="block font-display text-lg font-bold tracking-[-0.03em]">
                  Marquetta Moore
                </span>
                <span className="mt-1 block font-lab text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-cyan">
                  AlwaysReady4Moore.com
                </span>
              </span>
            </Link>

            <p className="mt-4 font-lab text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-muted">
              Creative Technologist · Technical Writer · Systems Builder
            </p>

            <p className="mt-4 max-w-lg text-sm leading-6 text-muted">
              Documentation, workflows, knowledge systems, AI products, and
              creative experiments built to make complicated things easier to use.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 md:min-w-[420px]">
            <nav aria-label="Footer navigation">
              <p className="font-lab text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-cyan">
                Browse
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-lab text-[0.66rem] font-semibold uppercase tracking-[0.06em] text-muted">
                {navLinks.map((link) => (
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
              <p className="font-lab text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-cyan">
                Connect
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-lab text-[0.66rem] font-semibold uppercase tracking-[0.06em] text-muted">
                <a href={contactInfo.mailto} className="transition hover:text-cyan">
                  Email
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-cyan"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-cyan"
                >
                  GitHub ↗
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-5 font-lab text-[0.6rem] font-semibold uppercase tracking-[0.07em] text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Marquetta Moore</p>
          <p className="flex items-center gap-2">
            <CyanSpark size="xs" />
            Built with clear evidence, careful edits, and several open tabs.
          </p>
          <Link href="/colophon" className="transition hover:text-cyan">
            Colophon
          </Link>
        </div>
      </div>
    </footer>
  );
}
