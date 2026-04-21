"use client";

// ═══════════════════════════════════════════════════════════════
// zak-dev — SVG Grid Pattern Component
//
// Renders a repeating SVG pattern of thin grid lines as a
// background texture. Adapted from Dub.co's Grid component
// for the dark theme of iamzak.xyz.
//
// USAGE:
//   <Grid />                              → default subtle grid
//   <Grid cellSize={80} />                → wider cells
//   <Grid className="text-white/[0.06]" /> → slightly brighter
//
// DESIGN NOTES:
//   - Default color is text-white/[0.04] — BARELY perceptible
//   - Always use pointer-events-none so content above is clickable
//   - Use mask-image CSS to fade edges for a polished look
//   - Each instance gets a unique SVG pattern ID via useId()
//
// REFERENCE: global-build-docs/dub-co-grid-design-pattern/
// USED BY: Challenge hero, potentially future sections
// ═══════════════════════════════════════════════════════════════

import { cn } from "@/lib/utils";
import { useId } from "react";

interface GridProps {
  /** Space between grid lines in pixels */
  cellSize?: number;
  /** Line thickness — always keep at 1 */
  strokeWidth?: number;
  /** [x, y] offset to fine-tune grid alignment */
  patternOffset?: [number, number];
  /** Additional classes for position, masking, color overrides */
  className?: string;
}

export function Grid({
  cellSize = 80,
  strokeWidth = 1,
  patternOffset = [0, 0],
  className,
}: GridProps) {
  const id = useId();

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 text-white/[0.04]",
        className
      )}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={`grid-${id}`}
          x={patternOffset[0] - 1}
          y={patternOffset[1] - 1}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect fill={`url(#grid-${id})`} width="100%" height="100%" />
    </svg>
  );
}
