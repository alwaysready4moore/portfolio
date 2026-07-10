import type { CSSProperties } from "react";

type CyanSparkSize = "xs" | "sm" | "md" | "lg" | "xl";

type CyanSparkProps = {
  size?: CyanSparkSize;
  animated?: boolean;
  decorative?: boolean;
  label?: string;
  className?: string;
};

const sizeClasses: Record<CyanSparkSize, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-10 w-10",
  xl: "h-16 w-16",
};

const animationStyle: CSSProperties = {
  animation: "brand-signal-pulse 1.8s ease-in-out infinite",
  transformOrigin: "center",
};

export function CyanSpark({
  size = "md",
  animated = false,
  decorative = true,
  label = "Cyan spark representing clarity",
  className = "",
}: CyanSparkProps) {
  const accessibilityProps = decorative
    ? {
        "aria-hidden": true,
      }
    : {
        role: "img",
        "aria-label": label,
      };

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center text-cyan ${sizeClasses[size]} ${className}`}
      style={animated ? animationStyle : undefined}
      {...accessibilityProps}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
      >
        <path
          d="M32 2C33.8 18.2 39.8 26.2 56 32C39.8 37.8 33.8 45.8 32 62C30.2 45.8 24.2 37.8 8 32C24.2 26.2 30.2 18.2 32 2Z"
          fill="currentColor"
        />

        <circle
          cx="32"
          cy="32"
          r="5"
          fill="white"
          fillOpacity="0.9"
        />
      </svg>
    </span>
  );
}