// ═══════════════════════════════════════════════════════════════
// zak-dev — Portfolio Layout (Route Group)
//
// Wraps ALL portfolio pages with the shared visual shell:
//   - Starfield (Three.js rotating stars — fixed background)
//   - ObsidianShell (rounded container with blade-scroll)
//
// WHY: Instead of every page.tsx manually wiring Starfield +
//      ObsidianShell, this layout handles it once. Every page
//      under app/(portfolio)/ automatically gets the shell.
//
// LAYER STACK (back to front):
//   z-0  Starfield canvas (fixed, behind everything)
//   z-10 ObsidianShell (semi-transparent, stars bleed through)
//   z-20 Content (sections, scrollable via blade-scroll)
//
// Server Component — no "use client" needed.
// USED BY: /, /250, and all future portfolio pages
// ═══════════════════════════════════════════════════════════════

import Starfield from "@/components/layout/backgrounds/Starfield";
import { ObsidianShell } from "@/components/layout/shell/ObsidianShell";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Starfield />
      <ObsidianShell>
        {children}
      </ObsidianShell>
    </main>
  );
}
