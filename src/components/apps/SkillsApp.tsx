"use client";

import { Cpu, Globe, Terminal, Layers } from "lucide-react";

interface SkillItem {
    name: string;
    icon: string;
}

interface SkillCategory {
    title: string;
    skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "C", icon: "C" },
            { name: "C++", icon: "C++" },
            { name: "JavaScript", icon: "JS" },
            { name: "TypeScript", icon: "TS" }
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: "RE" },
            { name: "Next.js", icon: "NX" },
            { name: "Tailwind", icon: "TW" }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: "NO" },
            { name: "Express", icon: "EX" }
        ]
    }
];

export default function SkillsApp() {
    return (
        <div className="space-y-10 md:space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[var(--foreground)]">Skills & Technologies</h2>
                <p className="text-[var(--muted)] text-sm font-black uppercase tracking-widest">Technologies and tools I work with</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--muted)]/60 border-b border-[var(--muted)]/10 pb-2">
                            {category.title}
                        </h3>

                        <div className="grid grid-cols-4 gap-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="group flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 rounded-2xl cosmic-glass flex items-center justify-center text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:shadow-[0_0_25px_rgba(244,162,97,0.2)] transition-all duration-300">
                                        <span className="text-xs font-black relative z-10">{skill.icon}</span>
                                    </div>
                                    <span className="text-[8px] font-black uppercase tracking-widest text-[var(--muted)]/40 group-hover:text-[var(--accent)] transition-colors relative z-10">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-12 border-t border-[var(--muted)]/10 flex flex-wrap justify-between gap-8 opacity-50">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[var(--muted)]"><Cpu size={14} /> Embedded</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[var(--muted)]"><Globe size={14} /> Web Dev</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[var(--muted)]"><Terminal size={14} /> Automation</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[var(--muted)]"><Layers size={14} /> Design Systems</div>
            </div>
        </div>
    );
}
