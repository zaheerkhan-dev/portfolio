import { cn } from "@/lib/utils";
import React from "react";

interface ObsidianShellProps {
    children: React.ReactNode;
    className?: string;
}

export function ObsidianShell({ children, className }: ObsidianShellProps) {
    return (
        <div className="flex h-screen w-screen items-center justify-center relative z-10">
            <div
                className={cn(
                    "relative flex flex-col overflow-hidden shadow-2xl transition-all duration-300",
                    // Desktop: rounded corners and border
                    "md:rounded-xl md:border md:border-[#1f1f1f]",
                    // Mobile: no rounding, no border, full edge
                    "rounded-none border-0",
                    "bg-[#050505]",
                    className
                )}
                style={{
                    width: "calc(100vw - (var(--shell-gap) * 2))",
                    height: "calc(100svh - (var(--shell-gap) * 2))",
                    background: "radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(5,5,5,0.8) 60%, #050505 100%)"
                }}
            >
                <div className="blade-scroll flex-1 overflow-y-auto relative z-20">
                    {children}
                </div>
            </div>
        </div>
    );
}
