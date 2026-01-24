"use client";

import { User, MapPin, Target, Sparkles } from "lucide-react";

/**
 * AboutApp component
 * Detailed profile with high-contrast typography and structured sections.
 */
export default function AboutApp() {
    return (
        <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Bio Header */}
            <section className="space-y-6">
                <div className="flex items-center gap-4 text-primary">
                    <Sparkles size={20} />
                    <h2 className="text-xs font-black uppercase tracking-[0.4em]">Personal Profile</h2>
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    I am a motivated engineering student transforming complex ideas into <span className="text-accent-cyan">functional, human-centric solutions</span>.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed">
                    My passion lies at the intersection of frontend development and hardware automation. Whether it's crafting a pixel-perfect interface or architecting an IoT system, I focus on performance, accessibility, and real-world impact.
                </p>
            </section>

            {/* Structured Stats/Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-4">
                    <div className="flex items-center gap-3 text-accent-violet">
                        <Target size={20} />
                        <h3 className="font-black uppercase tracking-widest text-[10px]">The Mission</h3>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                        To bridge the gap between advanced software functionality and embedded hardware, creating seamless
                        experiences that solve practical problems.
                    </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-4">
                    <div className="flex items-center gap-3 text-accent-cyan">
                        <MapPin size={20} />
                        <h3 className="font-black uppercase tracking-widest text-[10px]">Current Status</h3>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                        Based in India. Available for engineering internships and high-impact development projects starting 2024.
                    </p>
                </div>
            </div>

            <div className="pt-8 border-t border-white/5">
                <p className="text-zinc-500 text-sm italic">
                    Outside of technical work, I am an active volunteer and outreach organizer, committed to using engineering for social progress.
                </p>
            </div>
        </div>
    );
}
