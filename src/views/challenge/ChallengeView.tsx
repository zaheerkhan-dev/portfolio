// ═══════════════════════════════════════════════════════════════
// zak-dev — ChallengeView (Page Orchestrator)
//
// Assembles the /250 challenge page sections in order.
// Thin orchestration layer — all logic lives inside each section.
//
// PATTERN: Same as HomeView.tsx
//   app/(portfolio)/250/page.tsx → imports ChallengeView
//   ChallengeView → composes challenge sections in order
//
// Server Component — no "use client" needed.
// USED BY: app/(portfolio)/250/page.tsx
// ═══════════════════════════════════════════════════════════════

import { ChallengeHero } from "./sections/challenge-hero";
import { ChallengeStats } from "./sections/challenge-stats";
import { ChallengeRules } from "./sections/challenge-rules";
import { ChallengeFeed } from "./sections/challenge-feed";
import { Footer } from "@/components/layout/footer/Footer";

export function ChallengeView() {
  return (
    <>
      <ChallengeHero />
      <ChallengeStats />
      <ChallengeRules />
      <ChallengeFeed />
      <Footer />
    </>
  );
}
