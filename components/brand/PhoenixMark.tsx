export type PhoenixMarkVariant =
  | "crest"
  | "standard"
  | "full";

export type PhoenixMarkSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

type PhoenixMarkProps = {
  variant?: PhoenixMarkVariant;
  size?: PhoenixMarkSize;
  animated?: boolean;
  decorative?: boolean;
  label?: string;
  className?: string;
  markClassName?: string;
  signalClassName?: string;
};

const sizeClasses: Record<PhoenixMarkSize, string> = {
  xs: "h-5 w-5",
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-20 w-20",
  xl: "h-32 w-32",
};

const variantClasses: Record<PhoenixMarkVariant, string> = {
  crest: "scale-100",
  standard: "scale-100",
  full: "scale-100",
};

export function PhoenixMark({
  variant = "standard",
  size = "md",
  animated = false,
  decorative = false,
  label = "Phoenix mark representing transformation through clearer systems",
  className = "",
  markClassName = "",
}: PhoenixMarkProps) {
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
      className={`relative inline-flex shrink-0 items-center justify-center ${sizeClasses[size]} ${className}`}
      {...accessibilityProps}
    >
      <img
        src="/brand/the-mark-clarity.png"
        alt=""
        className={`h-full w-full object-contain ${variantClasses[variant]} ${markClassName} ${
          animated
            ? "drop-shadow-[0_0_18px_rgba(25,216,232,0.35)]"
            : ""
        }`}
        aria-hidden="true"
      />
    </span>
  );
}