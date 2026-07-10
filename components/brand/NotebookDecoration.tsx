type DecorationSize = "sm" | "md" | "lg";

type BaseDecorationProps = {
  size?: DecorationSize;
  className?: string;
  decorative?: boolean;
  label?: string;
};

const sizeClasses: Record<DecorationSize, string> = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-20 w-20",
};

function decorationA11y(decorative: boolean, label: string) {
  return decorative
    ? {
        "aria-hidden": true,
      }
    : {
        role: "img",
        "aria-label": label,
      };
}

export function NotebookTape(props: BaseDecorationProps) {
  void props;

  return null;
}

export function NotebookPaperclip({
  size = "md",
  className = "",
  decorative = true,
  label = "A paperclip connecting ideas",
}: BaseDecorationProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center text-cyan ${sizeClasses[size]} ${className}`}
      {...decorationA11y(decorative, label)}
    >
      <svg
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          d="M38 63L61 40C68 33 68 23 61 17C54 10 44 11 37 18L22 33C12 43 12 59 23 69C34 80 50 80 61 69L78 52"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37 54L58 33"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeOpacity="0.55"
        />
      </svg>
    </span>
  );
}

export function CoffeeRing({
  size = "md",
  className = "",
  decorative = true,
  label = "A coffee ring showing active work",
}: BaseDecorationProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center text-amber-200/60 ${sizeClasses[size]} ${className}`}
      {...decorationA11y(decorative, label)}
    >
      <svg
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          d="M48 13C67 13 82 28 82 47C82 66 67 82 48 82C29 82 14 66 14 47C14 28 29 13 48 13Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeDasharray="62 14 28 10"
          strokeLinecap="round"
        />
        <path
          d="M27 20C35 14 48 11 60 15"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.42"
        />
      </svg>
    </span>
  );
}

export function MarginArrow({
  size = "md",
  className = "",
  decorative = true,
  label = "A cyan margin arrow showing direction",
}: BaseDecorationProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center text-cyan ${sizeClasses[size]} ${className}`}
      {...decorationA11y(decorative, label)}
    >
      <svg
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          d="M15 31C35 20 59 22 73 39C80 47 81 58 74 66C66 76 50 75 41 66C31 56 35 41 49 37C61 34 73 42 80 54"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M78 54L82 40M78 54L64 51"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function NotebookTab({
  size = "md",
  className = "",
  decorative = true,
  label = "A notebook tab",
}: BaseDecorationProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center text-cyan ${sizeClasses[size]} ${className}`}
      {...decorationA11y(decorative, label)}
    >
      <svg
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          d="M20 18H57L67 30H76V78H20V18Z"
          fill="currentColor"
          fillOpacity="0.22"
        />
        <path
          d="M20 18H57L67 30H76V78H20V18Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M31 45H63M31 57H55"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeOpacity="0.65"
        />
      </svg>
    </span>
  );
}

export function NotebookHighlight({
  size = "md",
  className = "",
  decorative = true,
  label = "A cyan notebook highlight",
}: BaseDecorationProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center text-cyan ${sizeClasses[size]} ${className}`}
      {...decorationA11y(decorative, label)}
    >
      <svg
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          d="M14 31C31 26 55 27 79 31"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
          strokeOpacity="0.35"
        />
        <path
          d="M18 48C37 43 57 43 77 48"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
          strokeOpacity="0.28"
        />
        <path
          d="M21 65C38 61 53 61 72 65"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
          strokeOpacity="0.22"
        />
      </svg>
    </span>
  );
}