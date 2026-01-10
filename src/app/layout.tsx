import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { CinematicLoader } from "@/components/ui/loader/CinematicLoader";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zaheer Khan - Full Stack Web Developer",
  description: "Building the next generation of web products. Let's create something amazing together.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "SaaS", "Zaheer Khan", "Portfolio"],
  authors: [{ name: "Zaheer Khan" }],
  creator: "Zaheer Khan",

  // Favicon
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iamzak.xyz",
    siteName: "Zaheer Khan - Full Stack Web Developer",
    title: "Zaheer Khan - Full Stack Web Developer",
    description: "Building the next generation of web products. Let's create something amazing together.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zaheer Khan - Full Stack Web Developer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Zaheer Khan - Full Stack Web Developer",
    description: "Building the next generation of web products. Let's create something amazing together.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} antialiased`}
        style={{ backgroundColor: "#000000" }} // CRITICAL: Prevents white flash before CSS loads
      >
        <CinematicLoader />
        {children}
      </body>
    </html>
  );
}
