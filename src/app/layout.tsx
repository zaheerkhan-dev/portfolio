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
  title: "ZAK.DEV | Full Stack Engineer",
  description: "Developer Portfolio of Zak.",
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
