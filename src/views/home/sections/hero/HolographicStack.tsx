"use client";

import React from 'react';
import { cn } from '@/lib/utils';

// Tech Stack Data
const stackLayers = [
    {
        title: 'Frontend',
        tech: 'React • Next.js • Tailwind',
        icon: 'react', // SimpleIcons slug
        delay: '0s',
    },
    {
        title: 'Backend',
        tech: 'Node • Express • GraphQL',
        icon: 'nodedotjs',
        delay: '1s',
    },
    {
        title: 'Database',
        tech: 'Supabase • MySQL • Redis',
        icon: 'supabase',
        delay: '2s',
    },
    {
        title: 'Cloud System',
        tech: 'Cloudflare',
        icon: 'cloudflare',
        delay: '3s',
    },
];

export const HolographicStack = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8">
            {/* 3D Container with Perspective */}
            <div
                className="relative w-[320px] h-[450px]"
                style={{ perspective: '1000px' }}
            >
                {stackLayers.map((layer, index) => (
                    <div
                        key={layer.title}
                        className="group relative w-full h-20 mb-6 flex items-center px-6 gap-5
                       bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md
                       transition-all duration-500 ease-out cursor-pointer
                       hover:bg-white/10 hover:border-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                        style={{
                            transform: 'rotateY(-20deg) rotateX(10deg)',
                            animation: 'floatLayer 6s ease-in-out infinite',
                            animationDelay: layer.delay,
                        }}
                    >
                        {/* Hover Lift Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl ring-1 ring-white/20 shadow-[0_0_30px_rgba(99,102,241,0.2)]" />

                        {/* Icon Box */}
                        <div className="w-11 h-11 rounded-lg bg-black/30 flex items-center justify-center shrink-0">
                            {/* Using CDN for consistency with approved mockup. 
                   In production, consider local SVGs or an icon library. */}
                            <img
                                src={`https://cdn.simpleicons.org/${layer.icon}/white`}
                                alt={layer.title}
                                className="w-6 h-6 opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Text Info */}
                        <div className="flex flex-col">
                            <h3 className="text-white font-bold text-base m-0 leading-tight">
                                {layer.title}
                            </h3>
                            <p className="text-gray-400 text-[11px] uppercase tracking-wider font-medium mt-1 group-hover:text-gray-300">
                                {layer.tech}
                            </p>
                        </div>

                        {/* Shiny Edge Highlight (Optional Polish) */}
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/20 pointer-events-none" />
                    </div>
                ))}
            </div>
        </div>
    );
};
