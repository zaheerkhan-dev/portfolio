"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CinematicLoader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Start fade out after 500ms
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={cn(
                "fixed inset-0 z-[9999] bg-black pointer-events-none transition-opacity duration-1500 ease-out",
                isVisible ? "opacity-100" : "opacity-0 invisible"
            )}
        />
    );
}
