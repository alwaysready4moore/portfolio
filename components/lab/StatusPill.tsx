import type { ReactNode } from "react";

export type StatusTone =
  | "active"
  | "production"
  | "tested"
  | "experiment"
  | "soon"
  | "archived";

type StatusPillProps = {
  children: ReactNode;
  tone?: StatusTone;
  showDot?: boolean;
  className?: string;
};

const toneClasses: Record<StatusTone, string> = {
  active:
    "border-cyan/35 bg-cyan/10 text-cyan",
  production:
    "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  tested:
    "border-blue-400/30 bg-blue-400/10 text-blue-300",
  experiment:
    "border-violet-400/30 bg-violet-400/10 text-violet-300",
  soon:
    "border-amber-300/30 bg-amber-300/10 text-amber-200",
  archived:
    "border-white/10 bg-white/[0.035] text-muted",
};

const dotClasses: Record<StatusTone, string> = {
  active: "bg-cyan shadow-[0_0_10px_rgba(25,216,232,0.9)]",
  production: "bg-emerald-300",
  tested: "bg-blue-300",
  experiment: "bg-violet-300",
  soon: "bg-amber-200",
  archived: "bg-muted",
};

export function StatusPill({
  children,
  tone = "active",
  showDot = true,
  className = "",
}: StatusPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-lab text-[0.68rem] font-semibold uppercase tracking-[0.1em] ${toneClasses[tone]} ${className}`}
    >
      {showDot ? (
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${dotClasses[tone]}`}
        />
      ) : null}

      {children}
    </span>
  );
}