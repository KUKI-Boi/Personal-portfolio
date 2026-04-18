"use client";

import { Cpu, Globe, Terminal, Layers } from "lucide-react";

interface SkillItem {
    name: string;
    iconUrl: string;
}

interface SkillCategory {
    title: string;
    skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Web Technologies",
        skills: [
            { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Three.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
            { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
        ]
    },
    {
        title: "Engineering & Auto",
        skills: [
            { name: "MATLAB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" },
            { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
            { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "Arduino", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" }
        ]
    },
    {
        title: "Core Fundamentals",
        skills: [
            { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
            { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "C Language", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" }
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
                                    <div className="w-14 h-14 rounded-2xl cosmic-glass flex items-center justify-center p-3 text-[var(--muted)] group-hover:shadow-[0_0_25px_rgba(244,162,97,0.2)] transition-all duration-300">
                                        <img 
                                            src={skill.iconUrl} 
                                            alt={`${skill.name} logo`} 
                                            className="w-full h-full object-contain filter group-hover:scale-110 drop-shadow-md transition-all duration-300"
                                            // Handle Next.js dark svg inversions using css class dynamically if necessary
                                            style={skill.name === "Next.js" ? { filter: "invert(1) brightness(2)" } : {}}
                                        />
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
