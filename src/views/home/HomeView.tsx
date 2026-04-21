// ═══════════════════════════════════════════════════════════════
// zak-dev — HomeView (Page Orchestrator)
//
// Assembles the homepage sections in order. This is a thin
// orchestration layer — all logic lives inside each section.
//
// PATTERN: Same as Linkryse/Sturga HomeView.tsx
//   app/(portfolio)/page.tsx → imports HomeView (one-liner)
//   HomeView → composes sections in order
//
// Server Component — no "use client" needed.
// USED BY: app/(portfolio)/page.tsx
// ═══════════════════════════════════════════════════════════════

import { GlitchHero } from "./sections/hero";
import { AboutSection } from "./sections/about";
import { ProjectsSection } from "./sections/projects";
import { Footer } from "@/components/layout/footer/Footer";

export function HomeView() {
  return (
    <>
      <GlitchHero />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
