"use client";

import { Briefcase, MapPin, Calendar, Award, Zap } from "lucide-react";

const EXPERIENCES = [
    {
        title: "Co-Founder",
        company: "Verblyn Labs",
        duration: "2024 – Present",
        location: "Autonomous Systems",
        icon: <Zap size={20} />,
        description: "Driving innovation in electric mobility and intelligent systems. Leading product strategy and hardware-software integration for autonomous solutions."
    },
    {
        title: "Webmaster",
        company: "IEEE PELS",
        duration: "2024 – Present",
        location: "Student Branch",
        icon: <Briefcase size={20} />,
        description: "Managing digital presence and technical infrastructure for the IEEE Power Electronics Society student wing."
    },
    {
        title: "Student Member",
        company: "IEEE Power & Energy Society (PES)",
        duration: "Active",
        location: "Professional Body",
        icon: <Briefcase size={20} />,
        description: "Contributing to technical discussions and staying at the forefront of power systems engineering and smart grid technology."
    }
];

export default function ExperienceApp() {
    return (
        <div className="space-y-10 md:space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[var(--foreground)]">Professional Experience</h2>
                <p className="text-[var(--muted)] text-sm font-black uppercase tracking-widest max-w-xl mx-auto">
                    Building the future of intelligent mobility and energy systems.
                </p>
            </div>

            <div className="space-y-6">
                {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="p-8 md:p-10 cosmic-glass rounded-[40px] transition-all duration-500 hover:scale-[1.01]">
                        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                            <div className="space-y-6 flex-1">
                                <div className="flex items-center gap-2 text-[var(--accent)] font-black uppercase tracking-[0.4em] text-[10px]">
                                    {exp.icon} {exp.title}
                                </div>
                                <h3 className="text-3xl font-black text-[var(--foreground)] uppercase tracking-tighter leading-tight">
                                    {exp.company}
                                </h3>

                                <div className="flex flex-wrap gap-6 pt-2">
                                    <div className="flex items-center gap-3 text-[var(--muted)]/60 text-[10px] font-black uppercase tracking-widest">
                                        <MapPin size={14} /> {exp.location}
                                    </div>
                                    <div className="flex items-center gap-3 text-[var(--muted)]/60 text-[10px] font-black uppercase tracking-widest">
                                        <Calendar size={14} /> {exp.duration}
                                    </div>
                                </div>

                                <p className="text-sm font-medium text-[var(--muted)]/80 leading-relaxed max-w-2xl pt-4">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Achievement Highlight */}
                <div className="flex items-center gap-8 p-8 cosmic-glass rounded-[30px] border border-[var(--accent)]/20 shadow-[0_0_50px_rgba(244,162,97,0.05)] transition-all animate-pulse">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
                        <Award size={40} />
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent)]">Achievement</span>
                        <h4 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tighter">Hackathon Winner — 2025</h4>
                        <p className="text-xs font-black text-[var(--muted)]/60 uppercase tracking-widest">
                            Recognized for developing high-impact engineering solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
