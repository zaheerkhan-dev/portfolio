// ═══════════════════════════════════════════════════════════════
// zak-dev — Section Heading Component
//
// Consistent heading pattern used at the top of sections.
// Extracted from the repeated pattern in AboutSection and
// ProjectsSection to avoid duplication.
//
// RENDERS:
//   — OVERLINE TEXT  (small, uppercase, tracking-widest)
//   Title in gradient text.  (h2, large, bold)
//
// USAGE:
//   <SectionHeading overline="About Me" title="Architecting Scalable Solutions." />
//   <SectionHeading overline="Live Experiment" title="250 Comments." overlineColor="emerald" />
//
// DESIGN NOTES:
//   - The overline has a h-px w-6 line BEFORE the text — this is
//     a distinctive editorial detail, not generic
//   - Title gradient: from-white via-white to-gray-600 — NOT
//     to-gray-400 (too bright) or to-transparent (too faded)
//   - tracking-widest on overline is critical for the premium feel
//
// USED BY: Home sections, Challenge sections
// ═══════════════════════════════════════════════════════════════

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small uppercase text above the title */
  overline: string;
  /** Large gradient title */
  title: string;
  /** Color of the overline text and line. Default: gray */
  overlineColor?: "gray" | "emerald" | "blue" | "purple";
  /** Additional wrapper classes */
  className?: string;
}

const overlineColorMap = {
  gray: {
    line: "bg-gray-600",
    text: "text-gray-400",
  },
  emerald: {
    line: "bg-emerald-600",
    text: "text-emerald-400",
  },
  blue: {
    line: "bg-blue-600",
    text: "text-blue-400",
  },
  purple: {
    line: "bg-purple-600",
    text: "text-purple-400",
  },
};

export function SectionHeading({
  overline,
  title,
  overlineColor = "gray",
  className,
}: SectionHeadingProps) {
  const colors = overlineColorMap[overlineColor];

  return (
    <div className={cn("mb-10 md:mb-12 space-y-4", className)}>
      {/* Overline: line + label */}
      <div className="flex items-center gap-3">
        <div className={cn("h-px w-6", colors.line)} />
        <span
          className={cn(
            "text-xs font-medium uppercase tracking-widest",
            colors.text
          )}
        >
          {overline}
        </span>
      </div>

      {/* Title: gradient text */}
      <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 leading-[1.1] tracking-tight">
        {title}
      </h2>
    </div>
  );
}
