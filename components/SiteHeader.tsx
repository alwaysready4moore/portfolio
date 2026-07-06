import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="lab-shell flex items-center justify-between py-7">
      <Link href="/" className="group inline-flex flex-col leading-none">
        <span className="signature-heading text-5xl text-ink md:text-6xl">
          Marquetta Moore
        </span>
        <span className="mt-[-0.45rem] font-lab text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cyan">
          AlwaysReady4Moore.com
        </span>
      </Link>

      <nav className="hidden items-center gap-8 font-lab text-xs font-semibold uppercase tracking-[0.08em] text-muted md:flex">
        <Link href="/work" className="transition hover:text-cyan">
          Work
        </Link>
        <Link href="/field-notes" className="transition hover:text-cyan">
          Field Notes
        </Link>
        <Link href="/lab" className="transition hover:text-cyan">
          Lab
        </Link>
        <Link href="/contact" className="transition hover:text-cyan">
          Contact
        </Link>
        <span className="signal-dot" />
      </nav>
    </header>
  );
}