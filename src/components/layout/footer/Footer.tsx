"use client";

import React, { useState, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const SOCIAL_ICONS = [
  { icon: <Github size={16} />, label: "GitHub" },
  { icon: <Twitter size={16} />, label: "Twitter" },
  { icon: <Linkedin size={16} />, label: "LinkedIn" },
  { icon: <Mail size={16} />, label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleClick = useCallback((label: string) => {
    setActiveIcon(label);
    setTimeout(() => setActiveIcon((prev) => (prev === label ? null : prev)), 2000);
  }, []);

  return (
    <footer className="relative z-20 border-t border-white/10 bg-black/20 backdrop-blur-sm mt-auto">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-4">
          
          {/* Left: Copyright Only */}
          <div className="text-xs font-mono text-gray-600">
            <span>© {currentYear} Zak.dev</span>
          </div>

          {/* Right: Social Links */}
          <div className="relative flex items-center gap-6">
            {/* Single shared tooltip — positioned above whichever icon is active */}
            {SOCIAL_ICONS.map(({ label }, i) => (
              <div key={label} className="relative">
                <span
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-gray-500 italic transition-all duration-300 pointer-events-none ${
                    activeIcon === label
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1"
                  }`}
                >
                  too lazy to add links 😅
                </span>

                <button
                  onClick={() => handleClick(label)}
                  className={`text-gray-500 hover:text-white transition-colors duration-300 ${
                    activeIcon === label ? "animate-[shake_0.4s_ease-in-out]" : ""
                  }`}
                  aria-label={label}
                >
                  {SOCIAL_ICONS[i].icon}
                </button>
              </div>
            ))}
          </div>

        </div>
      </Container>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-3px) rotate(-5deg); }
          40% { transform: translateX(3px) rotate(5deg); }
          60% { transform: translateX(-2px) rotate(-3deg); }
          80% { transform: translateX(2px) rotate(3deg); }
        }
      `}</style>
    </footer>
  );
}