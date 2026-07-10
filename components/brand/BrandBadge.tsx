import type { ReactNode } from "react";
import { CyanSpark } from "./CyanSpark";

export type BrandBadgeTone =
  | "signal"
  | "quiet"
  | "verified"
  | "experiment"
  | "warning";

type BrandBadgeProps = {
  children: ReactNode;
  tone?: BrandBadgeTone;
  icon?: "spark" | "dot" | "none";
  className?: string;
};

const toneClasses: Record<BrandBadgeTone, string> = {
  signal: "border-cyan/35 bg-cyan/10 text-cyan",
  quiet: "border-white/10 bg-white/[0.035] text-muted",
  verified: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  experiment: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  warning: "border-amber-300/30 bg-amber-300/10 text-amber-200",
};

const dotClasses: Record<BrandBadgeTone, string> = {
  signal: "bg-cyan shadow-[0_0_10px_rgba(25,216,232,0.8)]",
  quiet: "bg-white/35",
  verified: "bg-emerald-200",
  experiment: "bg-violet-200",
  warning: "bg-amber-200",
};

export function BrandBadge({
  children,
  tone = "signal",
  icon = "dot",
  className = "",
}: BrandBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-lab text-[0.68rem] font-semibold uppercase tracking-[0.1em] ${toneClasses[tone]} ${className}`}
    >
      {icon === "spark" ? (
        <CyanSpark size="xs" />
      ) : icon === "dot" ? (
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${dotClasses[tone]}`}
        />
      ) : null}

      {children}
    </span>
  );
}