"use client";

import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function EducationApp() {
    return (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[var(--foreground)]">Education</h2>
                <p className="text-[var(--muted)] text-sm font-black uppercase tracking-widest max-w-xl mx-auto">
                    Academic background and core engineering research.
                </p>
            </div>

            <div className="p-10 cosmic-glass rounded-[40px] space-y-12">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-[var(--accent)] font-black uppercase tracking-[0.4em] text-[10px]">
                            <GraduationCap size={16} /> Bachelor’s Degree
                        </div>
                        <h3 className="text-4xl font-black text-[var(--foreground)] uppercase tracking-tighter leading-tight">
                            Engineering in <br /><span className="text-[var(--muted)]">Electronics</span>
                        </h3>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-3 text-[var(--muted)]/60 text-xs font-black uppercase tracking-widest">
                                <MapPin size={14} /> Christ University
                            </div>
                            <div className="flex items-center gap-3 text-[var(--muted)]/60 text-xs font-black uppercase tracking-widest">
                                <Calendar size={14} /> 2021 – 2025
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-[var(--background)] border border-[var(--muted)]/10 rounded-3xl flex flex-col items-center gap-2 shadow-inner">
                        <span className="text-3xl font-black text-[var(--foreground)]">78%</span>
                        <span className="text-[8px] font-black uppercase tracking-[var(--accent-hover)em] text-[var(--muted)]/40">Aggregate</span>
                    </div>
                </div>

                <div className="pt-10 border-t border-[var(--muted)]/10 space-y-8">
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--muted)]/40 italic">Coursework</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Embedded Systems", "Control Systems", "Web Technologies"].map(item => (
                                <span key={item} className="px-4 py-1.5 bg-[var(--accent)]/10 rounded-full text-[10px] font-black uppercase tracking-widest text-[var(--accent)] border border-[var(--accent)]/20">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6 p-6 bg-[var(--card)] rounded-2xl border border-[var(--muted)]/10">
                        <div className="text-[var(--accent)] opacity-50"><Award size={32} /></div>
                        <p className="text-xs font-black text-[var(--muted)] leading-relaxed uppercase tracking-widest">
                            Focused on efficient, automated systems for environmental monitoring.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
