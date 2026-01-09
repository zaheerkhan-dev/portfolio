import React from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
    return (
        <div className={cn("relative inline-block", className)}>
            <span className="relative z-10">{text}</span>
            <span
                className="absolute top-0 left-[2px] w-full h-full text-white opacity-70 animate-pulse"
                style={{
                    textShadow: "-2px 0 red",
                    clipPath: "inset(0 0 0 0)",
                    animation: "glitch-anim-2 3s infinite linear alternate-reverse"
                }}
                aria-hidden="true"
            >
                {text}
            </span>
            <span
                className="absolute top-0 -left-[2px] w-full h-full text-white opacity-70"
                style={{
                    textShadow: "-2px 0 blue",
                    clipPath: "inset(0 0 0 0)",
                    animation: "glitch-anim 2.5s infinite linear alternate-reverse"
                }}
                aria-hidden="true"
            >
                {text}
            </span>
        </div>
    );
}
