"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { ArrowRight, User } from "lucide-react";

export function AboutSection() {
  return (
   <section className="relative py-24 z-20" id="about">
    
      <Container>
        
        {/* SECTION HEADER */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-gray-600"></div>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 leading-[1.1] tracking-tight">
              Architecting Scalable Solutions.
          </h2>
        </div>
        
        {/* THE HOLOGRAPHIC CONTAINER (Split Layout) */}
        <div className="group relative w-full rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/20">
          
          {/* Ambient Glow (Always Visible) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-100"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
            
            {/* LEFT: Profile Visual */}
            <div className="relative h-[400px] lg:h-auto bg-white/5 border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden flex items-center justify-center p-8 perspective-[1000px]">
              
              {/* Background Grid Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

              {/* The Profile Card (3D Tilt) */}
              <div className="relative w-64 h-80 bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl transform transition-transform duration-700 ease-out group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] group-hover:scale-105 flex flex-col overflow-hidden">
                
                {/* Image Placeholder */}
                <div className="flex-1 bg-white/5 flex items-center justify-center relative overflow-hidden group/image">
                    {/* Replace this Icon with an <img src="/your-photo.jpg" /> tag later */}
                    <User size={64} className="text-white/20 group-hover/image:text-white/40 transition-colors duration-500" />
                    
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover/image:translate-y-full transition-transform duration-1000 ease-in-out"></div>
                </div>

                {/* Card Footer */}
                <div className="h-16 border-t border-white/10 bg-[#050505] flex items-center px-6">
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-white tracking-wide">Zaheer Khan</span>
                        <span className="text-[10px] text-blue-400 font-mono">aka "Zak"</span>
                    </div>
                </div>
              </div>
            </div>

            {/* RIGHT: The Narrative */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              
              <div className="space-y-6 text-sm md:text-lg text-gray-400 font-light leading-relaxed">
                <p>
                  I am a Full Stack Engineer based in India. I specialize in architecting <strong className="text-white font-normal">scalable web applications</strong> that prioritize speed, security, and reliability.
                </p>
                
                <p>
                  I believe the best way to master architecture is to build it. I am the <strong className="text-white font-normal">Creator & Lead Engineer</strong> of <strong className="text-white font-normal">Linkryse</strong>. Building it taught me how to handle viral traffic spikes, optimize edge computing, and structure complex databases—experience I now bring to every client project.
                </p>

                <p>
                  I believe great engineering goes unnoticed. I build systems that are robust and secure on the server, but feel <span className="text-gray-200 italic">instant and effortless</span> to the user.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-8 mt-auto">
                <button className="w-full md:w-auto group relative inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden transition-all hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <span className="relative z-10 text-sm font-bold text-white tracking-wide">Let's build something together</span>
                  <ArrowRight className="w-4 h-4 text-white relative z-10 group-hover:translate-x-1 transition-transform" />
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </button>
              </div>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}