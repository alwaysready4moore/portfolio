import { Pictogram, type PictogramName } from "./Pictogram";

type SectionDividerProps = {
  label?: string;
  icon?: PictogramName;
  className?: string;
};

export function SectionDivider({
  label = "System flow",
  icon = "flowchart",
  className = "",
}: SectionDividerProps) {
  return (
    <div
      className={`flex items-center gap-4 py-4 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-[var(--border)]" />

      <div className="inline-flex items-center gap-2">
        <Pictogram
          name={icon}
          size="sm"
          decorative
          className="h-5 w-5"
        />

        <span className="font-lab text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
          {label}
        </span>
      </div>

      <span className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}