"use client";

import { User } from "lucide-react";

/**
 * AboutApp component
 * Displays bio and role information.
 */
export default function AboutApp() {
    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8 border-b border-white/5 pb-8">
                <div className="w-24 h-24 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-500">
                    <User size={48} />
                </div>
                <div className="text-center md:text-left space-y-2">
                    <h1 className="text-3xl font-bold text-zinc-100 italic">Likith</h1>
                    <p className="text-xl text-zinc-400 font-medium">Senior Frontend Engineer</p>
                </div>
            </div>

            <div className="space-y-6 text-zinc-400 leading-relaxed">
                <section className="space-y-3">
                    <h2 className="text-lg font-semibold text-zinc-100 uppercase tracking-wider">The Mission</h2>
                    <p>
                        Dedicated to building high-performance, accessible, and visually stunning web experiences.
                        Specializing in React, Next.js, and the modern frontend ecosystem to bridge the gap
                        between advanced functionality and human-centric design.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-lg font-semibold text-zinc-100 uppercase tracking-wider">Core Philosophy</h2>
                    <p>
                        Clean code isn't just a requirement; it's a craft. I believe in minimalism,
                        efficiency, and the power of subtle animations to create interfaces that feel
                        intuitive and premium.
                    </p>
                </section>
            </div>
        </div>
    );
}
