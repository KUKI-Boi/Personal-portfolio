"use client";

import { Award, Zap, Users, Heart } from "lucide-react";

/**
 * VolunteeringApp component
 * Highlights volunteering and leadership experiences.
 */
export default function VolunteeringApp() {
    return (
        <div className="max-w-3xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-8">
                <section className="bg-zinc-800/50 border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">
                        <Zap size={120} />
                    </div>

                    <div className="relative z-10 space-y-6">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold text-zinc-100">School Outreach Program</h2>
                            <p className="text-blue-400 font-medium">Sustainable Energy Education</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
                                    <Award size={18} />
                                </div>
                                <span className="text-zinc-300">IEEE Student Branch, CHRIST University</span>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/5">
                            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest italic">Highlights</h3>
                            <ul className="space-y-3">
                                {[
                                    "Explained renewable energy concepts like solar power in a student-friendly manner",
                                    "Conducted interactive learning sessions",
                                    "Organized and participated in educational games",
                                    "Created a positive learning environment"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-zinc-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-sm font-bold text-zinc-500 uppercase mb-4 flex items-center gap-2">
                        <Heart size={14} className="text-red-400" /> Impact Statement
                    </h3>
                    <p className="text-lg text-zinc-100 italic font-serif leading-relaxed">
                        "This experience strengthened communication, teamwork, and leadership skills and reinforced a commitment to socially responsible engineering."
                    </p>
                </section>
            </div>
        </div>
    );
}
