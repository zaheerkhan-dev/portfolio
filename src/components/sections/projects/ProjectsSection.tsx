"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/animations/ScrollReveal";
import { ExternalLink, Globe, Database, ArrowRight, Sparkles, Cpu, Plus } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="relative py-16 md:py-20 z-20" id="projects">
      <Container>

        {/* Section Header */}
        <ScrollReveal direction="left" delay={0}>
          <div className="mb-10 md:mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-gray-600"></div>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Selected Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 leading-[1.1] tracking-tight">
              Engineering Case Studies.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-20">

          {/* ========================================== */}
          {/* PROJECT 1: LINKRYSE (The Proof)            */}
          {/* ========================================== */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="group relative w-full rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/20">

              {/* Ambient Glow (Blue - Always Visible) */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-100"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">

                {/* LEFT: The Visual */}
                <div className="relative bg-white/5 border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

                  {/* Browser Window - Aspect ratio matched to image (2044x1202) */}
                  <div className="relative w-full max-w-lg bg-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl transform transition-transform duration-700 ease-out group-hover:scale-105 overflow-hidden">
                    <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="relative w-full" style={{ aspectRatio: '2044/1202' }}>
                      <img
                        src="/linkryse-ss-dashboard.png"
                        alt="Linkryse Dashboard Interface"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT: The Details */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Linkryse</h3>
                      <p className="text-blue-400 font-mono text-xs uppercase tracking-wider">Enterprise Link Management</p>
                    </div>
                    <a
                      href="https://linkryse.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    A high-performance SaaS platform designed to handle viral traffic spikes.
                    I engineered a hybrid architecture that offloads redirect logic to the Edge,
                    ensuring <strong className="text-white">zero latency</strong> and <strong className="text-white">100% uptime</strong> even during heavy load.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 text-white font-bold mb-1">
                        <Globe size={16} className="text-blue-400" />
                        <span>Edge First</span>
                      </div>
                      <p className="text-xs text-gray-500">Cloudflare Workers for global routing.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 text-white font-bold mb-1">
                        <Database size={16} className="text-purple-400" />
                        <span>Hybrid DB</span>
                      </div>
                      <p className="text-xs text-gray-500">MySQL + Redis for real-time analytics.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["Next.js", "TypeScript", "Cloudflare", "Tailwind", "MySQL"].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-md bg-black/50 border border-white/10 text-xs text-gray-400 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ========================================== */}
          {/* PROJECT 2: THE UPSELL (The Nebula)         */}
          {/* ========================================== */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="group relative w-full rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]">

              {/* Ambient Glow (Emerald - Right Side) */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-100"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">

                {/* LEFT: The Visual (Minimalist Core) */}
                <div className="relative h-[400px] lg:h-auto bg-white/5 border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden flex items-center justify-center p-8">

                  {/* Dotted Grid Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

                  {/* The Breathing Core */}
                  <div className="relative flex items-center justify-center">

                    {/* Soft Pulse Glow */}
                    <div className="absolute w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>

                    {/* The Glass Circle */}
                    <div className="relative z-10 w-20 h-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.1)] group-hover:scale-110 group-hover:border-emerald-500/30 transition-all duration-500">
                      <Plus className="w-8 h-8 text-white/40 group-hover:text-white transition-colors duration-300" />
                    </div>

                  </div>

                </div>

                {/* RIGHT: The Pitch */}
                <div className="p-8 md:p-12 flex flex-col justify-center">

                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Your Project</h3>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    This slot is reserved for an ambitious founder who wants to build a market-leading product.
                    Whether it's a complex SaaS, a high-traffic e-commerce platform, or a custom internal tool,
                    I am ready to architect it from the ground up.
                  </p>

                  {/* Key Metrics / Features Placeholder */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 border-dashed group-hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-2 text-gray-300 font-bold mb-1">
                        <Cpu size={16} />
                        <span>Scalable</span>
                      </div>
                      <p className="text-xs text-gray-500">Built to handle growth.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 border-dashed group-hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-2 text-gray-300 font-bold mb-1">
                        <Sparkles size={16} />
                        <span>Polished</span>
                      </div>
                      <p className="text-xs text-gray-500">Pixel-perfect UI/UX.</p>
                    </div>
                  </div>

                  {/* Empty Tech Stack Slots */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-6">
                    {[1, 2, 3, 4].map((i) => (
                      <span key={i} className="px-3 py-1 rounded-md border border-white/10 border-dashed text-xs text-gray-600 font-mono min-w-[60px] text-center">
                        ?
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div>
                    <a
                      href="https://wa.me/917887714953?text=Hi%20Zak,%20I'd%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    >
                      <span className="relative z-10 text-sm font-bold tracking-wide">Start Your Project</span>
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </Container>
    </section >
  );
}