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
  metadataBase: new URL("https://iamzak.xyz"),
  title: {
    template: "%s | Zaheer Khan",
    default: "Zaheer Khan - Full Stack Web Developer",
  },
  description: "Building the next generation of web products. Let's create something amazing together.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "SaaS", "Zaheer Khan", "Portfolio"],
  authors: [{ name: "Zaheer Khan" }],
  creator: "Zaheer Khan",

  // Favicon
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  // Default Open Graph (pages can override)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iamzak.xyz",
    siteName: "Zaheer Khan",
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
