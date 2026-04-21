// ═══════════════════════════════════════════════════════════════
// zak-dev — Challenge Hero Section
//
// Compact hero for the /250 page. NOT full-screen like the
// homepage hero — this is a focused header with back navigation.
//
// VISUAL ELEMENTS:
//   - SVG Grid background (subtle, masked with radial gradient)
//   - Emerald ambient glow (matches "Now" timeline dot)
//   - Back link to portfolio homepage
//   - SectionHeading with emerald overline
//   - Subtitle text
//
// USED BY: views/challenge/ChallengeView.tsx
// ═══════════════════════════════════════════════════════════════

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { CHALLENGE_META } from "@/data/challenge";

export function ChallengeHero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-20">

      {/* SVG Grid Background — subtle, masked to fade out */}
      <div className="absolute inset-0 z-0">
        <Grid
          cellSize={80}
          patternOffset={[0, -20]}
          className="text-white/[0.03] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_20%,transparent_70%)]"
        />
      </div>

      {/* Emerald Ambient Glow — positioned at bottom to flow into stats card */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[800px] h-[600px] bg-emerald-500/[0.07] blur-[150px] rounded-full pointer-events-none" />

      <Container className="relative z-10">

        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-300 mb-10 md:mb-14 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to portfolio
        </Link>

        {/* Centered Heading + Subtitle */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 leading-[1.1] tracking-tight">
            250 Comments. 24 Hours.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            {CHALLENGE_META.subtitle}
          </p>
        </div>

      </Container>
    </section>
  );
}
