"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CyanSpark, PhoenixMark } from "@/components/brand";

const navLinks = [
  {
    href: "/work",
    label: "Work",
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

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const isAegisActive = isActivePath(pathname, "/work/aegis");

  return (
    <header className="lab-shell py-4 md:py-5">
      <div className="flex items-start justify-between gap-6">
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

        <nav
          className="hidden items-center gap-6 pt-4 font-lab text-xs font-semibold uppercase tracking-[0.08em] md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive = isActivePath(pathname, link.href);

            return (
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "relative text-cyan after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-cyan"
                    : "text-muted transition hover:text-cyan"
                }
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/work/aegis"
            aria-current={isAegisActive ? "page" : undefined}
            className={
              isAegisActive
                ? "focus-ring rounded-xl border border-cyan bg-cyan px-4 py-2 text-night"
                : "focus-ring rounded-xl border border-cyan/35 bg-cyan/[0.06] px-4 py-2 text-cyan transition hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan hover:text-night"
            }
          >
            Aegis
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </Link>
        </nav>
      </div>

      <nav
        className="mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden"
        aria-label="Mobile navigation"
      >
        <Link
          href="/work/aegis"
          aria-current={isAegisActive ? "page" : undefined}
          className={
            isAegisActive
              ? "focus-ring shrink-0 rounded-full border border-cyan bg-cyan px-4 py-2 font-lab text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-night"
              : "focus-ring shrink-0 rounded-full border border-cyan/45 bg-cyan/[0.08] px-4 py-2 font-lab text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-cyan transition hover:border-cyan hover:bg-cyan hover:text-night"
          }
        >
          Aegis
          <span aria-hidden="true" className="ml-1">
            ↗
          </span>
        </Link>

        {navLinks.map((link) => {
          const isActive = isActivePath(pathname, link.href);

          return (
            <Link
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "focus-ring shrink-0 rounded-full border border-cyan/50 bg-cyan/[0.12] px-4 py-2 font-lab text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-cyan"
                  : "focus-ring shrink-0 rounded-full border border-[var(--border)] bg-white/[0.035] px-4 py-2 font-lab text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-muted transition hover:border-cyan/40 hover:text-cyan"
              }
              key={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}