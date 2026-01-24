"use client";

import { GraduationCap, Calendar, BookOpen, MapPin, ChevronRight, Award } from "lucide-react";

/**
 * EducationApp component
 * Professional academic background layout.
 */
export default function EducationApp() {
    return (
        <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent-violet/20 rounded-[42px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

                <div className="relative bg-[#0a0b14] border border-white/5 rounded-[40px] overflow-hidden">
                    <div className="h-4 bg-gradient-to-r from-primary to-accent-violet" />
                    <div className="p-10 md:p-14 space-y-10">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                                    <GraduationCap size={16} /> Academic Background
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                                    Bachelor’s Degree in <br /><span className="text-accent-cyan">Engineering</span>
                                </h1>
                                <div className="flex flex-col gap-3 pt-4 font-medium">
                                    <div className="flex items-center gap-3 text-zinc-300">
                                        <div className="p-2 bg-white/5 rounded-lg"><MapPin size={16} className="text-zinc-500" /></div>
                                        <span>CHRIST (Deemed to be University)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-300">
                                        <div className="p-2 bg-white/5 rounded-lg"><Calendar size={16} className="text-zinc-500" /></div>
                                        <span>2021 – 2025</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative pt-2">
                                <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center p-2">
                                    <div className="w-full h-full rounded-full bg-primary/5 flex items-center justify-center text-primary font-black text-xl">
                                        78%
                                    </div>
                                </div>
                                <p className="text-[10px] text-center mt-3 font-black text-zinc-500 uppercase tracking-widest">Aggregate</p>
                            </div>
                        </div>

                        <div className="space-y-10 pt-10 border-t border-white/5">
                            <div className="space-y-6">
                                <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] flex items-center gap-2">
                                    <BookOpen size={14} /> Core Coursework
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Embedded Systems", "Control Systems", "Web Technologies", "Signal Processing", "IoT Architecture"].map((course) => (
                                        <span key={course} className="px-5 py-2 bg-white/5 border border-white/5 rounded-2xl text-sm font-bold text-zinc-400 hover:text-white hover:border-white/10 transition-all">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/5 rounded-3xl">
                                <div className="p-4 bg-white/5 rounded-2xl text-accent-violet">
                                    <Award size={28} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-black text-white uppercase tracking-wider">Research Focus</h4>
                                    <p className="text-sm text-zinc-400 font-medium leading-relaxed italic">
                                        Hardware-software co-design focusing on efficient, automated systems for environmental monitoring.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
