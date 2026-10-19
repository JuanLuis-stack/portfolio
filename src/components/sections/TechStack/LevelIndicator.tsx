import type { Proficiency } from './techStack.types';

function LevelIndicator({
  level,
  label,
}: {
  level: Proficiency;
  label?: string;
}) {
  const displayLabel = label || level;

  // Signal / meter bars or clock for pending
  if (level === "Pending") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-2xl border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-300">
        <span className="p-1">
          <svg
            className="h-full w-3 shrink-0 animate-pulse text-amber-400 float-left mr-1 mt-1.5 rounded-full object-cover [shape-outside:circle(50%)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {displayLabel}
        </span>
      </span>
    );
  }

  // Bar count: High = 3/3, Medium = 2/3, Low–Medium = 1.5/3, Low = 1/3
  const filledBars =
    level === "High"
      ? 3
      : level === "Medium"
        ? 2
        : level === "Low–Medium"
          ? 1
          : 1;
  const isHalf = level === "Low–Medium";

  const colorClasses =
    level === "High"
      ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
      : level === "Medium"
        ? "text-amber-400 border-amber-500/20 bg-amber-500/10"
        : "text-orange-400 border-orange-500/20 bg-orange-500/10";

  return (
    <span
      className={`flex gap-1.5 rounded-2xl border px-2.5 py-0.5 text-[11px] font-medium ${colorClasses} gap-0.5`}
    >
      {/* 3-bar signal meter icon */}

      <span className="flex">
        <span
          className="flex items-end gap-0.5 float-left [shape-outsite:circle(50%) mb-1 mr-2"
          aria-hidden="true"
        >
          <span
            className={`h-1.5 w-1 rounded-xs ${
              filledBars >= 1 ? "bg-current" : "bg-white/20"
            }`}
          />
          <span
            className={`h-2.5 w-1 rounded-xs ${
              filledBars >= 2
                ? "bg-current"
                : isHalf
                  ? "bg-current/60"
                  : "bg-white/20"
            }`}
          />
          <span
            className={`h-3.5 w-1 rounded-xs ${
              filledBars >= 3 ? "bg-current" : "bg-white/20"
            }`}
          />
        </span>
        {displayLabel}
      </span>
    </span>
  );
}

export default LevelIndicator;
