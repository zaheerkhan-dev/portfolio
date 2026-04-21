// ═══════════════════════════════════════════════════════════════
// zak-dev — Challenge Stats Section
//
// 3-column stat counter with ruled dividers (Dub.co pattern)
// inside a glassmorphic card. Shows live progress.
//
// DESIGN:
//   - Stats: divide-x divide-white/10 (shared hairlines)
//   - Card: same glassmorphic style as About/Projects cards
//   - Progress bar: emerald gradient fill
//   - Numbers: tabular-nums for monospace alignment
//
// USED BY: views/challenge/ChallengeView.tsx
// ═══════════════════════════════════════════════════════════════

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/animations/ScrollReveal";
import { CHALLENGE_COMMENTS, CHALLENGE_META } from "@/data/challenge";

export function ChallengeStats() {
  const total = CHALLENGE_COMMENTS.length;
  const goal = CHALLENGE_META.goal;
  const percentage = Math.round((total / goal) * 100);

  const stats = [
    {
      value: total.toString(),
      label: "Comments",
      sublabel: `of ${goal}`,
    },
    {
      value: `${percentage}%`,
      label: "Complete",
      sublabel: percentage >= 100 ? "🎉 Goal reached" : `${goal - total} remaining`,
    },
    {
      value: CHALLENGE_META.date.split(",")[0].trim(),
      label: "Challenge Day",
      sublabel: CHALLENGE_META.startTime,
    },
  ];

  return (
    <section className="relative py-4 md:py-6 z-20">
      <Container>
        <ScrollReveal direction="up" delay={0.1}>

          {/* Glassmorphic Card */}
          <div className="relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden">

            {/* Ambient Glow */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.06] blur-[100px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4" />

            {/* Stats Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center py-8 md:py-10 px-6 text-center"
                >
                  <span className="text-4xl md:text-5xl font-bold text-white tabular-nums tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-medium">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-gray-600 mt-1">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="relative z-10 border-t border-white/10 px-6 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
                  Progress
                </span>
                <span className="text-[11px] text-gray-500 font-mono">
                  {total}/{goal}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-1000 ease-out"
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>

            {/* Post-challenge result message */}
            {CHALLENGE_META.status !== "pending" && (
              <div className="relative z-10 border-t border-white/10 px-6 py-4 text-center">
                {CHALLENGE_META.status === "completed" ? (
                  <p className="text-sm text-gray-400 italic font-light">
                    I actually did it. never doing this again 😭 ...or will I?
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 italic font-light">
                    I didn&apos;t make it. but honestly? I might try again 😭😂
                  </p>
                )}
              </div>
            )}

          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
