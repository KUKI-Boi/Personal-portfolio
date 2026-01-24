"use client";

import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function EducationApp() {
    return (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Education</h2>
                <p className="text-zinc-500 text-sm font-black uppercase tracking-widest max-w-xl mx-auto">
                    Academic background and core engineering research.
                </p>
            </div>

            <div className="p-10 bg-zinc-900/30 border border-white/5 rounded-[40px] space-y-12">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-red-500 font-black uppercase tracking-[0.4em] text-[10px]">
                            <GraduationCap size={16} /> Bachelor’s Degree
                        </div>
                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-tight">
                            Engineering in <br /><span className="text-zinc-400">Electronics</span>
                        </h3>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-3 text-zinc-500 text-xs font-black uppercase tracking-widest">
                                <MapPin size={14} /> Christ University
                            </div>
                            <div className="flex items-center gap-3 text-zinc-500 text-xs font-black uppercase tracking-widest">
                                <Calendar size={14} /> 2021 – 2025
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-black border border-white/10 rounded-3xl flex flex-col items-center gap-2">
                        <span className="text-3xl font-black text-white">78%</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600">Aggregate</span>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 space-y-8">
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 italic">Coursework</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Embedded Systems", "Control Systems", "Web Technologies"].map(item => (
                                <span key={item} className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-300 border border-white/5">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6 p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                        <div className="text-red-500/50"><Award size={32} /></div>
                        <p className="text-xs font-black text-zinc-400 leading-relaxed uppercase tracking-widest">
                            Focused on efficient, automated systems for environmental monitoring.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
