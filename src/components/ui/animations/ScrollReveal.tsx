"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    once?: boolean;
}

/**
 * ScrollReveal - A reusable component for scroll-triggered animations
 * 
 * @param direction - Direction the element animates from ("up" | "down" | "left" | "right" | "none")
 * @param delay - Animation delay in seconds
 * @param duration - Animation duration in seconds
 * @param distance - Distance in pixels the element travels
 * @param once - If true, animation only plays once (default: true)
 */
export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    direction = "up",
    distance = 40,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once,
        margin: "-100px 0px -100px 0px" // Trigger slightly before element is fully visible
    });

    // Calculate initial position based on direction
    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance, x: 0 };
            case "down":
                return { y: -distance, x: 0 };
            case "left":
                return { y: 0, x: distance };
            case "right":
                return { y: 0, x: -distance };
            case "none":
                return { y: 0, x: 0 };
            default:
                return { y: distance, x: 0 };
        }
    };

    const initialPosition = getInitialPosition();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                y: initialPosition.y,
                x: initialPosition.x,
            }}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : initialPosition.y,
                x: isInView ? 0 : initialPosition.x,
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1], // Custom cubic-bezier for smooth feel
            }}
        >
            {children}
        </motion.div>
    );
}

/**
 * StaggerContainer - Wrapper for staggered child animations
 */
interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

/**
 * StaggerItem - Child item for StaggerContainer
 */
interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.4, 0.25, 1],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
