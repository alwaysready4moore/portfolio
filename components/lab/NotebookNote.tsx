import type { ReactNode } from "react";

type NotebookNoteProps = {
  children: ReactNode;
  className?: string;
  marker?: string;
};

export function NotebookNote({
  children,
  className = "",
  marker = "//",
}: NotebookNoteProps) {
  return (
    <p
      className={`flex items-start gap-2 font-lab text-sm leading-6 text-muted ${className}`}
    >
      <span
        aria-hidden="true"
        className="shrink-0 font-semibold text-cyan"
      >
        {marker}
      </span>

      <span>{children}</span>
    </p>
  );
}