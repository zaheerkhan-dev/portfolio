// ═══════════════════════════════════════════════════════════════
// zak-dev — Homepage Route
//
// ONE-LINER pattern: the route file only imports the view.
// All section logic lives in views/home/HomeView.tsx.
//
// This file also exports the homepage-specific metadata
// (OG images, Twitter cards) that override the root layout's
// generic metadata.
//
// PATTERN: Same as Linkryse app/(marketing)/page.tsx
// ═══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { HomeView } from "@/views/home/HomeView";

export const metadata: Metadata = {
  title: "Zaheer Khan - Full Stack Web Developer",
  description:
    "Building the next generation of web products. Let's create something amazing together.",

  openGraph: {
    title: "Zaheer Khan - Full Stack Web Developer",
    description:
      "Building the next generation of web products. Let's create something amazing together.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zaheer Khan - Full Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zaheer Khan - Full Stack Web Developer",
    description:
      "Building the next generation of web products. Let's create something amazing together.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
