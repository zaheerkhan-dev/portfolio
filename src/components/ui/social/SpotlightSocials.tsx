"use client";

import React, { useRef, useEffect } from "react";
import { Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

// Reddit Icon as custom SVG to match Lucide style (thin stroke)
const RedditIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 2a10 10 0 1 0 10 10"></path>
        <path d="M17 12h-2"></path>
        <path d="M12 7v2"></path>
        <path d="M12 17v-2"></path>
        <path d="M7 12h2"></path>
    </svg>
);

export function SpotlightSocials() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const btns = container.querySelectorAll<HTMLElement>(".spotlight-btn");
            btns.forEach((btn) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                btn.style.setProperty("--x", `${x}px`);
                btn.style.setProperty("--y", `${y}px`);
            });
        };

        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative z-10">
            <p className="text-sm text-gray-500 font-bold mb-4 tracking-widest uppercase">
                Find me on the internet
            </p>

            <div ref={containerRef} className="inline-flex gap-4 p-2 relative">
                <SocialButton
                    icon={<Linkedin strokeWidth={1.5} />}
                    label="Professional Network"
                    href="#"
                    accentColor="group-hover:border-[#0077b5]"
                    glowColor="rgba(0,119,181,0.3)"
                />
                <SocialButton
                    icon={<Twitter strokeWidth={1.5} />}
                    label="Thoughts & Updates"
                    href="#"
                    accentColor="group-hover:border-white"
                    glowColor="rgba(255,255,255,0.2)"
                />
                <SocialButton
                    icon={<RedditIcon />}
                    label="Dev Discussions"
                    href="#"
                    accentColor="group-hover:border-[#ff4500]"
                    glowColor="rgba(255,69,0,0.3)"
                />
            </div>
        </div>
    );
}

interface SocialButtonProps {
    icon: React.ReactNode;
    label: string;
    href: string;
    accentColor: string;
    glowColor: string;
}

function SocialButton({ icon, label, href, accentColor, glowColor }: SocialButtonProps) {
    return (
        <div className="relative group">
            <a
                href={href}
                className={cn(
                    "spotlight-btn relative w-[60px] h-[60px] flex items-center justify-center",
                    "bg-[#0a0a0a] border border-[#222] rounded-2xl overflow-hidden",
                    "transition-all duration-200 ease-out",
                    "hover:-translate-y-1 hover:bg-[#111]",
                    accentColor
                )}
            >
                {/* Spotlight Glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.15), transparent 60%)`,
                    }}
                />

                {/* Icon */}
                <div className="relative z-10 text-white transition-transform duration-200 group-hover:scale-110">
                    {icon}
                </div>
            </a>

            {/* Tooltip */}
            <div
                className={cn(
                    "absolute bottom-[-45px] left-1/2 -translate-x-1/2 translate-y-[5px]",
                    "bg-white/95 text-black text-xs font-bold tracking-wide py-1.5 px-3 rounded-md whitespace-nowrap",
                    "opacity-0 group-hover:opacity-100 group-hover:translate-y-0",
                    "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none shadow-lg z-50"
                )}
            >
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-b-white/95"></div>
                {label}
            </div>
        </div>
    );
}
