import React from "react";
import { GlitchText } from "@/components/ui/glitch/GlitchText";
import { SpotlightSocials } from "@/components/ui/social/SpotlightSocials";
import { HolographicStack } from "./HolographicStack";
import { ChevronDown, MessageCircle } from "lucide-react";

export function GlitchHero() {
  return (
    <div className="relative w-full min-h-full flex flex-col lg:flex-row text-white animate-hero-enter opacity-0 [animation-fill-mode:forwards] lg:overflow-visible">
      
      {/* Floating Nav in Corner */}
      <header className="absolute top-8 right-8 flex flex-col items-end gap-2 z-50 pointer-events-auto">
        <nav className="flex flex-col text-right gap-1 text-sm font-bold text-gray-400">
          <a href="#about" className="hover:text-white hover:pr-2 transition-all duration-300">ABOUT ME</a>
          <a href="#projects" className="hover:text-white hover:pr-2 transition-all duration-300">PROJECTS</a>
        </nav>
      </header>

      {/* Brand Top Left */}
      <div className="absolute top-8 left-8 text-2xl font-black tracking-tighter z-50">ZAK.</div>

      {/* LEFT COLUMN: Main Content */}
      <main className="flex-1 flex flex-col justify-center px-12 md:px-20 lg:pl-32 lg:pr-10 pt-32 lg:pt-0 relative z-20 shrink-0">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tighter leading-none whitespace-nowrap">
          I AM <GlitchText text="ZAK" />.
        </h1>
        <p className="text-xl md:text-3xl text-gray-500 font-light mb-12 max-w-xl">
          I solve <span className="text-white line-through decoration-white">hard</span> interesting problems.
        </p>

        {/* Primary CTA: WhatsApp (Silky Flow Style) */}
        <div className="relative z-10">
          <a 
            href="https://wa.me/917887714953?text=Hi%20Zak,%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] group focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            {/* Spinning Gradient Border - Slower (4s) for Silky Effect */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            
            {/* Button Content */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#0a0a0a] px-8 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-black/80 tracking-widest uppercase">
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Start a Project
            </span>
          </a>
        </div>
      </main>

      {/* RIGHT COLUMN: Holographic Stack */}
      <div className="hidden md:flex flex-1 items-center justify-center relative z-10 py-20 lg:py-0 lg:translate-y-[10%] shrink-0">
        <HolographicStack />
      </div>

      {/* SCROLL INDICATOR (Adaptive) */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer group p-4"
      >
        {/* 1. DESKTOP: Mouse Animation */}
        <div className="hidden md:flex flex-col items-center gap-2 text-gray-500 group-hover:text-white transition-colors duration-300">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-current rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* 2. MOBILE: Chevron Arrow */}
        <div className="flex md:hidden flex-col items-center text-gray-500 group-hover:text-white transition-colors duration-300">
           <ChevronDown className="w-8 h-8 animate-bounce" />
        </div>
      </a>

    </div>
  );
}