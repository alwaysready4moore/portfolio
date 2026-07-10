import type { SVGProps } from "react";

export type PictogramName =
  | "notebook"
  | "shield"
  | "experiment"
  | "flowchart"
  | "search"
  | "automation"
  | "message"
  | "checklist"
  | "browser"
  | "printer"
  | "spark"
  | "contact";

type PictogramSize = "sm" | "md" | "lg" | "xl";

type PictogramProps = {
  name: PictogramName;
  label?: string;
  size?: PictogramSize;
  className?: string;
  accentClassName?: string;
  decorative?: boolean;
};

const sizeClasses: Record<PictogramSize, string> = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

type IconProps = SVGProps<SVGSVGElement> & {
  accentClassName?: string;
};

function BaseSvg({
  children,
  accentClassName = "text-cyan",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g>{children}</g>

      <circle
        cx="53"
        cy="11"
        r="3"
        className={accentClassName}
        fill="currentColor"
      />
    </svg>
  );
}

function NotebookIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path
        d="M17 11H47C50.3 11 53 13.7 53 17V50C53 52.2 51.2 54 49 54H17C13.7 54 11 51.3 11 48V17C11 13.7 13.7 11 17 11Z"
        fill="currentColor"
      />

      <path d="M20 11V54" stroke="white" strokeWidth="4" />

      <path
        d="M28 23H44M28 32H44M28 41H39"
        stroke="white"
        strokeWidth="4"
      />

      <path
        d="M10 20H17M10 30H17M10 40H17"
        stroke="currentColor"
        strokeWidth="4"
      />
    </BaseSvg>
  );
}

function ShieldIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path
        d="M32 8L51 15V29C51 41.4 43.2 52.5 32 57C20.8 52.5 13 41.4 13 29V15L32 8Z"
        fill="currentColor"
      />

      <path
        d="M23 31L29 37L42 23"
        stroke="white"
        strokeWidth="5"
      />
    </BaseSvg>
  );
}

function ExperimentIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path
        d="M24 8H40V13L36 20V30L49 50C51 53 48.8 57 45.2 57H18.8C15.2 57 13 53 15 50L28 30V20L24 13V8Z"
        fill="currentColor"
      />

      <path d="M22 43H42" stroke="white" strokeWidth="4" />

      <circle cx="27" cy="49" r="2.5" fill="white" />
      <circle cx="36" cy="39" r="2.5" fill="white" />
    </BaseSvg>
  );
}

function FlowchartIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <rect
        x="22"
        y="7"
        width="20"
        height="13"
        rx="3"
        fill="currentColor"
      />

      <rect
        x="7"
        y="43"
        width="20"
        height="13"
        rx="3"
        fill="currentColor"
      />

      <rect
        x="37"
        y="43"
        width="20"
        height="13"
        rx="3"
        fill="currentColor"
      />

      <path
        d="M32 20V31M17 43V36H47V43"
        stroke="currentColor"
        strokeWidth="5"
      />

      <circle
        cx="32"
        cy="31"
        r="3"
        className={props.accentClassName ?? "text-cyan"}
        fill="currentColor"
      />
    </BaseSvg>
  );
}

function SearchIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="27" cy="27" r="15" fill="currentColor" />

      <circle cx="27" cy="27" r="7" fill="white" />

      <path
        d="M38 38L53 53"
        stroke="currentColor"
        strokeWidth="8"
      />
    </BaseSvg>
  );
}

function AutomationIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path
        d="M18 20H38L32 14M46 44H26L32 50"
        stroke="currentColor"
        strokeWidth="6"
      />

      <rect
        x="8"
        y="13"
        width="15"
        height="15"
        rx="4"
        fill="currentColor"
      />

      <rect
        x="41"
        y="36"
        width="15"
        height="15"
        rx="4"
        fill="currentColor"
      />

      <circle
        cx="46"
        cy="19"
        r="5"
        className={props.accentClassName ?? "text-cyan"}
        fill="currentColor"
      />
    </BaseSvg>
  );
}

function MessageIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path
        d="M10 13H50C53.3 13 56 15.7 56 19V41C56 44.3 53.3 47 50 47H29L18 56V47H10C6.7 47 4 44.3 4 41V19C4 15.7 6.7 13 10 13Z"
        fill="currentColor"
      />

      <circle cx="18" cy="30" r="3" fill="white" />
      <circle cx="30" cy="30" r="3" fill="white" />
      <circle cx="42" cy="30" r="3" fill="white" />
    </BaseSvg>
  );
}

function ChecklistIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <rect
        x="12"
        y="8"
        width="40"
        height="48"
        rx="6"
        fill="currentColor"
      />

      <path
        d="M20 22L24 26L31 18M20 36L24 40L31 32"
        stroke="white"
        strokeWidth="4"
      />

      <path
        d="M36 22H45M36 36H45M20 49H45"
        stroke="white"
        strokeWidth="4"
      />
    </BaseSvg>
  );
}

function BrowserIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <rect
        x="6"
        y="10"
        width="52"
        height="44"
        rx="6"
        fill="currentColor"
      />

      <path d="M6 21H58" stroke="white" strokeWidth="4" />

      <circle cx="14" cy="16" r="2" fill="white" />
      <circle cx="21" cy="16" r="2" fill="white" />

      <path
        d="M34 30H43V36H49V45H40V39H34V30Z"
        fill="white"
      />

      <path
        d="M15 30H28M15 39H25"
        stroke="white"
        strokeWidth="4"
      />
    </BaseSvg>
  );
}

function PrinterIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <rect
        x="16"
        y="7"
        width="32"
        height="18"
        rx="3"
        fill="currentColor"
      />

      <rect
        x="8"
        y="21"
        width="48"
        height="25"
        rx="6"
        fill="currentColor"
      />

      <rect
        x="17"
        y="37"
        width="30"
        height="20"
        rx="2"
        fill="white"
        stroke="currentColor"
        strokeWidth="4"
      />

      <circle
        cx="47"
        cy="30"
        r="3"
        className={props.accentClassName ?? "text-cyan"}
        fill="currentColor"
      />
    </BaseSvg>
  );
}

function SparkIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <path
        d="M32 5L37 24L56 32L37 40L32 59L27 40L8 32L27 24L32 5Z"
        fill="currentColor"
      />

      <path
        d="M48 7L50 13L56 15L50 17L48 23L46 17L40 15L46 13L48 7Z"
        className={props.accentClassName ?? "text-cyan"}
        fill="currentColor"
      />
    </BaseSvg>
  );
}

function ContactIcon(props: IconProps) {
  return (
    <BaseSvg {...props}>
      <circle cx="24" cy="22" r="11" fill="currentColor" />

      <path
        d="M7 54C8.5 41.5 14.4 35 24 35C33.6 35 39.5 41.5 41 54H7Z"
        fill="currentColor"
      />

      <path
        d="M38 18H57V39H47L40 46V39H38V18Z"
        fill="currentColor"
      />

      <circle cx="44" cy="29" r="2" fill="white" />
      <circle cx="50" cy="29" r="2" fill="white" />
    </BaseSvg>
  );
}

const icons: Record<
  PictogramName,
  (props: IconProps) => React.ReactNode
> = {
  notebook: NotebookIcon,
  shield: ShieldIcon,
  experiment: ExperimentIcon,
  flowchart: FlowchartIcon,
  search: SearchIcon,
  automation: AutomationIcon,
  message: MessageIcon,
  checklist: ChecklistIcon,
  browser: BrowserIcon,
  printer: PrinterIcon,
  spark: SparkIcon,
  contact: ContactIcon,
};

export function Pictogram({
  name,
  label,
  size = "md",
  className = "",
  accentClassName = "text-cyan",
  decorative = false,
}: PictogramProps) {
  const Icon = icons[name];

  const accessibilityProps = decorative
    ? {
        "aria-hidden": true,
      }
    : {
        role: "img",
        "aria-label": label ?? `${name} pictogram`,
      };

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center text-ink ${sizeClasses[size]} ${className}`}
    >
      <Icon
        className="h-full w-full"
        accentClassName={accentClassName}
        {...accessibilityProps}
      />
    </span>
  );
}