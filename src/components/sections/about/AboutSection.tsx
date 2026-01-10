"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/animations/ScrollReveal";
import { ArrowRight } from "lucide-react";

// Timeline data - easy to update
const timelineData = [
  {
    year: "2018",
    title: "Started Coding Journey",
    description: "Self-taught web development",
    color: "blue",
  },
  {
    year: "2020",
    title: "First Client Project",
    description: "Entered the freelance world",
    color: "purple",
  },
  {
    year: "2023",
    title: "10+ Projects Shipped",
    description: "Production-ready client work",
    color: "violet",
  },
  {
    year: "Now",
    title: "Building Linkryse",
    description: "Enterprise link management SaaS",
    color: "emerald",
  },
];

export function AboutSection() {
  return (
    <section className="relative py-16 md:py-20 z-20" id="about">

      <Container>

        {/* SECTION HEADER */}
        <ScrollReveal direction="left" delay={0}>
          <div className="mb-8 md:mb-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-gray-600"></div>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">About Me</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 leading-[1.1] tracking-tight">
              Architecting Scalable Solutions.
            </h2>
          </div>
        </ScrollReveal>

        {/* THE HOLOGRAPHIC CONTAINER (Split Layout) */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="group relative w-full rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/20">

            {/* Ambient Glow (Always Visible) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-100"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">

              {/* LEFT: Profile + Timeline */}
              <div className="relative bg-white/5 border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden flex flex-col p-8 md:p-10">

                {/* Background Grid Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

                {/* Content */}
                <div className="relative z-10">

                  {/* Avatar Row */}
                  <div className="flex items-center gap-4 mb-8">
                    {/* Avatar */}
                    <div className="relative group/avatar">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-full blur-md opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 group-hover/avatar:border-white/40 transition-colors duration-300">
                        <img
                          src="/profile-pic.png"
                          alt="Zaheer Khan"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-white tracking-wide">Zaheer Khan</span>
                      <span className="text-xs text-blue-400 font-mono">aka "Zak"</span>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="relative pl-6">

                    {/* Timeline Line - Gradient */}
                    <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-blue-500/80 via-purple-500/80 to-emerald-500/80"></div>

                    {/* Timeline Items */}
                    <div className="space-y-5">
                      {timelineData.map((item, index) => (
                        <div
                          key={item.year}
                          className="relative flex gap-4 group/item"
                          style={{
                            animationDelay: `${index * 0.15}s`,
                          }}
                        >
                          {/* Dot */}
                          <div
                            className={`absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0a] transition-transform duration-300 group-hover/item:scale-125 ${item.color === 'blue' ? 'bg-blue-500' :
                              item.color === 'purple' ? 'bg-purple-500' :
                                item.color === 'emerald' ? 'bg-emerald-500' :
                                  'bg-violet-500'
                              }`}
                          ></div>

                          {/* Content */}
                          <div className="flex-1 pb-1">
                            <div className="flex items-center gap-3 mb-0.5">
                              <span
                                className={`font-mono text-xs font-semibold ${item.color === 'blue' ? 'text-blue-400' :
                                  item.color === 'purple' ? 'text-purple-400' :
                                    item.color === 'emerald' ? 'text-emerald-400' :
                                      'text-violet-400'
                                  }`}
                              >
                                {item.year}
                              </span>
                            </div>
                            <p className="text-white font-medium text-sm leading-tight">{item.title}</p>
                            <p className="text-gray-500 text-xs mt-0.5">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: The Narrative */}
              <div className="p-8 md:p-12 flex flex-col justify-center">

                <div className="space-y-6 text-sm md:text-base text-gray-400 font-light leading-relaxed">
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
                  <a
                    href="https://wa.me/917887714953?text=Hi%20Zak,%20I'd%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto group relative inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden transition-all hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <span className="relative z-10 text-sm font-bold text-white tracking-wide">Let's build something together</span>
                    <ArrowRight className="w-4 h-4 text-white relative z-10 group-hover:translate-x-1 transition-transform" />

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </ScrollReveal>

      </Container>
    </section>
  );
}