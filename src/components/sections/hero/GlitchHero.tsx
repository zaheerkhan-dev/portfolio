import React from "react";
import { GlitchText } from "@/components/ui/glitch/GlitchText";
import { HolographicStack } from "./HolographicStack";
import { ChevronDown, MessageCircle } from "lucide-react";

// Tech stack data for mobile cards
const techStack = [
  {
    category: "Frontend",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    techs: "React • Next.js • Tailwind",
  },
  {
    category: "Backend",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    techs: "Node • Express • GraphQL",
  },
  {
    category: "Database",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    techs: "MySQL • Redis • Supabase",
  },
  {
    category: "Cloud",
    icon: "https://cdn.simpleicons.org/cloudflare/F38020",
    techs: "Cloudflare • Vercel • AWS",
  },
];

export function GlitchHero() {
  return (
    <div className="relative w-full min-h-full flex flex-col lg:flex-row text-white animate-hero-enter opacity-0 [animation-fill-mode:forwards] lg:overflow-visible">

      {/* Header: Brand + Nav */}
      <header className="absolute top-6 md:top-8 left-6 right-6 md:left-8 md:right-8 flex justify-between items-start z-50 pointer-events-auto">
        <span className="text-xl md:text-2xl font-black tracking-tighter">ZAK.</span>
        <nav className="flex flex-col text-right gap-0.5 md:gap-1 text-xs md:text-sm font-bold text-gray-400">
          <a href="#about" className="hover:text-white hover:pr-2 transition-all duration-300">ABOUT ME</a>
          <a href="#projects" className="hover:text-white hover:pr-2 transition-all duration-300">PROJECTS</a>
        </nav>
      </header>

      {/* LEFT COLUMN: Main Content */}
      <main className="flex-1 flex flex-col justify-center px-6 md:px-20 lg:pl-32 lg:pr-10 pt-24 md:pt-32 lg:pt-0 pb-24 md:pb-0 relative z-20 shrink-0">

        {/* Heading */}
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-3 md:mb-4 tracking-tighter leading-none whitespace-nowrap">
          I AM <GlitchText text="ZAK" />.
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-3xl text-gray-500 font-light mb-6 md:mb-8 max-w-xl">
          I solve <span className="text-white line-through decoration-white">hard</span> interesting problems.
        </p>

        {/* MOBILE ONLY: Stats Line */}
        <div className="flex md:hidden items-center gap-3 mb-8 animate-[fadeIn_0.5s_ease-out_0.3s_forwards] opacity-0">
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-white font-bold">6+</span>
            <span className="text-gray-500">Years</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-white font-bold">10+</span>
            <span className="text-gray-500">Projects</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-sm font-medium">Available</span>
          </div>
        </div>

        {/* Primary CTA: WhatsApp */}
        <div className="relative z-10 mb-8 md:mb-0">
          <a
            href="https://wa.me/917887714953?text=Hi%20Zak,%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-12 md:h-14 overflow-hidden rounded-full p-[1px] group focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            {/* Spinning Gradient Border */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            {/* Button Content */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 md:gap-3 rounded-full bg-[#0a0a0a] px-6 md:px-8 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-black/80 tracking-wider md:tracking-widest uppercase">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
              Start a Project
            </span>
          </a>
        </div>

        {/* MOBILE ONLY: Tech Stack Grid */}
        <div className="grid md:hidden grid-cols-2 gap-3 animate-[fadeIn_0.5s_ease-out_0.5s_forwards] opacity-0">
          {techStack.map((item, index) => (
            <div
              key={item.category}
              className="p-3.5 bg-white/5 border border-white/10 rounded-xl transition-all hover:border-white/20"
              style={{
                animation: `floatCard 3s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <img src={item.icon} className="w-4 h-4" alt={item.category} />
                <span className="text-sm font-bold text-white">{item.category}</span>
              </div>
              <p className="text-[10px] text-gray-500">{item.techs}</p>
            </div>
          ))}
        </div>
      </main>

      {/* RIGHT COLUMN: Holographic Stack (Desktop Only) */}
      <div className="hidden md:flex flex-1 items-center justify-center relative z-10 py-20 lg:py-0 lg:translate-y-[10%] shrink-0">
        <HolographicStack />
      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer group p-4"
      >
        {/* Desktop: Mouse Animation */}
        <div className="hidden md:flex flex-col items-center gap-2 text-gray-500 group-hover:text-white transition-colors duration-300">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-current rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Mobile: Chevron Arrow */}
        <div className="flex md:hidden flex-col items-center text-gray-500 group-hover:text-white transition-colors duration-300">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </a>
    </div>
  );
}