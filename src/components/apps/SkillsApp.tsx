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
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Skills & Technologies</h2>
                <p className="text-zinc-500 text-sm font-black uppercase tracking-widest">Technologies and tools I work with</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 border-b border-white/5 pb-2">
                            {category.title}
                        </h3>

                        <div className="grid grid-cols-4 gap-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="group flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-zinc-800 transition-all duration-300">
                                        <span className="text-xs font-black">{skill.icon}</span>
                                    </div>
                                    <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-wrap justify-between gap-8 opacity-50">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-500"><Cpu size={14} /> Embedded</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-500"><Globe size={14} /> Web Dev</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-500"><Terminal size={14} /> Automation</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-500"><Layers size={14} /> Design Systems</div>
            </div>
        </div>
    );
}
