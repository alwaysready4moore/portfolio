import Link from "next/link";

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
    href: "mailto:msnelson9241@gmail.com?subject=Portfolio%20Inquiry%20-%20AlwaysReady4Moore",
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/alwaysready4moore",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/alwaysready4moore",
    label: "GitHub",
  },
];

export function SiteFooter() {
  return (
    <footer className="lab-shell border-t border-[var(--border)] py-10">
      <div className="grid gap-8 md:grid-cols-[1fr_0.72fr_0.72fr]">
        <div>
          <Link href="/" className="inline-flex flex-col leading-none">
            <span className="signature-heading text-4xl text-ink md:text-5xl">
              Marquetta Moore
            </span>
            <span className="mt-[-0.35rem] font-lab text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-cyan">
              AlwaysReady4Moore.com
            </span>
          </Link>

          <p className="mt-5 max-w-md leading-7 text-muted">
            Systems lab, portfolio, field notebook, and proof of work for
            support-informed AI knowledge systems.
          </p>

          <p className="mt-5 max-w-md text-sm leading-6 text-muted">
            Some visual assets on this site are AI-generated or AI-assisted and
            are disclosed where they appear. More details live in the Colophon.
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
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="transition hover:text-cyan"
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-6 font-lab text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Marquetta Moore</p>
        <p>Built with curiosity, structure, and a frankly unreasonable number of tabs.</p>
      </div>
    </footer>
  );
}