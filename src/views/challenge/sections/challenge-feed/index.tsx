// ═══════════════════════════════════════════════════════════════
// zak-dev — Challenge Feed Section
//
// The main event — scrolling feed of comment entries.
// Responsive: table layout on desktop, card stack on mobile.
//
// DESIGN:
//   - SectionHeading with "Live Feed" overline
//   - Empty state when no comments
//   - Desktop: table-like rows (CommentRow) with header
//   - Mobile: card stack (CommentCard) — hidden on md+
//   - Glassmorphic card wrapper
//   - Vertical dividers between columns (desktop)
//
// USED BY: views/challenge/ChallengeView.tsx
// ═══════════════════════════════════════════════════════════════

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/animations/ScrollReveal";
import { CHALLENGE_COMMENTS } from "@/data/challenge";
import { CommentRow } from "./CommentRow";
import { CommentCard } from "./CommentCard";
import { MessageSquare } from "lucide-react";

export function ChallengeFeed() {
  const comments = CHALLENGE_COMMENTS;
  const isEmpty = comments.length === 0;

  return (
    <section className="relative py-10 md:py-16 z-20">
      <Container>

        <ScrollReveal direction="left" delay={0}>
          <div className="mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 leading-[1.1] tracking-tight">
              how&apos;s it going?
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>

          {/* Glassmorphic Card */}
          <div className="relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden">

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.05] blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="relative z-10">

              {isEmpty ? (
                /* ─── EMPTY STATE ─────────────────────── */
                <div className="flex flex-col items-center justify-center py-20 md:py-28 text-center px-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                    <MessageSquare className="w-6 h-6 text-gray-600" />
                  </div>
                  <p className="text-gray-500 text-base font-light mb-1">
                    Challenge hasn&apos;t started yet.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Check back on {" "}
                    <span className="text-gray-400 font-mono text-xs">
                      {CHALLENGE_COMMENTS.length === 0 ? "challenge day" : "soon"}
                    </span>
                  </p>
                </div>
              ) : (
                /* ─── POPULATED FEED ─────────────────── */
                <>
                  {/* DESKTOP: Table layout */}
                  <div className="hidden md:block">

                    {/* Table Header */}
                    <div className="flex items-center gap-0 border-b border-white/10 bg-white/[0.02]">
                      <div className="w-20 shrink-0 py-3 px-4">
                        <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">Time</span>
                      </div>
                      <div className="w-px bg-white/10 self-stretch shrink-0" />
                      <div className="flex-1 py-3 px-4">
                        <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">Comment</span>
                      </div>
                      <div className="w-px bg-white/10 self-stretch shrink-0" />
                      <div className="w-12 shrink-0 py-3 flex items-center justify-center">
                        <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">Link</span>
                      </div>
                    </div>

                    {/* Rows */}
                    {comments.map((comment) => (
                      <CommentRow key={comment.id} comment={comment} />
                    ))}
                  </div>

                  {/* MOBILE: Card stack */}
                  <div className="md:hidden px-5">
                    {comments.map((comment) => (
                      <CommentCard key={comment.id} comment={comment} />
                    ))}
                  </div>
                </>
              )}

            </div>
          </div>

        </ScrollReveal>
      </Container>
    </section>
  );
}
