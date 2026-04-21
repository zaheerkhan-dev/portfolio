// ═══════════════════════════════════════════════════════════════
// zak-dev — Challenge Rules Section
//
// The 4 challenge rules from the LinkedIn post, displayed as a
// personal quote. One flowing statement + attribution. These are
// Zaheer's own words — reads like he's talking, not listing.
//
// DESIGN:
//   - Single flowing quote text (italic, gray-400, large)
//   - Centered, no border accents, no attribution
//   - max-w-3xl for comfortable reading width
//   - Personal, not editorial
//
// USED BY: views/challenge/ChallengeView.tsx
// ═══════════════════════════════════════════════════════════════

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/animations/ScrollReveal";

export function ChallengeRules() {
  return (
    <section className="relative py-10 md:py-14 z-20">
      <Container>
        <ScrollReveal direction="up" delay={0.1}>

          <div className="max-w-3xl mx-auto text-center">
            <blockquote>
              <p className="text-gray-400 text-lg md:text-2xl italic leading-relaxed font-light">
                &ldquo;every comment has to add something new. no copy paste.
                no templates. if I can&apos;t say something genuine, I scroll
                past.&rdquo;
              </p>
            </blockquote>
          </div>

        </ScrollReveal>
      </Container>
    </section>
  );
}
