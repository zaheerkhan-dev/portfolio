// ═══════════════════════════════════════════════════════════════
// zak-dev — /250 Challenge Route
//
// ONE-LINER pattern: imports ChallengeView and renders it.
// Exports page-specific metadata for OG/Twitter.
//
// PATTERN: Same as (portfolio)/page.tsx
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { ChallengeView } from "@/views/challenge/ChallengeView";

export const metadata: Metadata = {
  title: "250 Comments Challenge",
  description:
    "250 genuine LinkedIn comments in 24 hours. No templates. No spam. Live tracking at iamzak.xyz/250.",

  openGraph: {
    title: "250 Comments Challenge | Zaheer Khan",
    description:
      "250 genuine LinkedIn comments in 24 hours. No templates. No spam. Live tracking.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "250 Comments Challenge - Zaheer Khan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "250 Comments Challenge | Zaheer Khan",
    description:
      "250 genuine LinkedIn comments in 24 hours. No templates. No spam. Live tracking.",
    images: ["/og-image.png"],
  },
};

export default function ChallengePage() {
  return <ChallengeView />;
}
