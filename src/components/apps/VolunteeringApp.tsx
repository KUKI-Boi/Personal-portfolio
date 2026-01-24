"use client";

import { Award, Zap, Users, Heart, ChevronRight } from "lucide-react";

/**
 * VolunteeringApp component
 * High-impact section for outreach and leadership.
 */
export default function VolunteeringApp() {
    return (
        <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-12">
                <section className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12 relative overflow-hidden group">
                    {/* Abstract background element */}
                    <div className="absolute top-0 right-0 p-12 text-white/[0.03] group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                        <Zap size={200} />
                    </div>

                    <div className="relative z-10 space-y-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                                <Users size={14} /> Leadership & Outreach
                            </div>
                            <h2 className="text-4xl font-black text-white tracking-tighter">School Outreach Program</h2>
                            <p className="text-xl text-accent-cyan font-bold tracking-tight">Sustainable Energy Education</p>
                        </div>

                        <div className="flex items-center gap-4 py-4 px-6 bg-white/5 border border-white/5 rounded-2xl w-fit">
                            <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-primary shadow-lg border border-white/10">
                                <Award size={20} />
                            </div>
                            <span className="text-zinc-200 font-bold text-sm">IEEE Student Branch, CHRIST University</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-10 border-t border-white/5">
                            {[
                                { title: "Conceptual Clarity", text: "Explained renewable energy & solar power in student-friendly modules." },
                                { title: "Interactive Learning", text: "Conducted hands-on sessions and educational games." },
                                { title: "Session Design", text: "Created engaging agendas to foster positive learning environments." },
                                { title: "Organization", text: "Led logistical planning for school-level technical outreach." }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-2">
                                    <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">{item.title}</h4>
                                    <p className="text-sm text-zinc-400 leading-relaxed font-medium">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="glass p-12 rounded-[40px] border border-white/5 text-center">
                    <div className="max-w-xl mx-auto space-y-6">
                        <div className="flex justify-center">
                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/20">
                                <Heart size={24} fill="currentColor" className="opacity-20" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-black text-white tracking-tight">The Impact</h3>
                        <p className="text-zinc-300 text-lg italic leading-relaxed font-serif">
                            "This experience strengthened my communication and leadership skills while reinforcing my commitment to socially responsible engineering."
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
