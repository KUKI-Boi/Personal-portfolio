"use client";

import { Cpu, Wrench, Terminal, Layers, Sparkles } from "lucide-react";

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Technical Skills",
        icon: <Cpu size={24} className="text-accent-cyan" />,
        skills: ["HTML5", "CSS3", "JavaScript", "React (Intermediate)", "MATLAB", "Embedded Systems (ESP32, ESP8266)", "IoT System Design"],
    },
    {
        title: "Tools & Platforms",
        icon: <Wrench size={24} className="text-accent-violet" />,
        skills: ["Figma", "Git & GitHub", "Google Sheets & Apps Script", "VS Code", "Wokwi Simulator"],
    },
];

/**
 * SkillsApp component
 * Visual grid of skills with clear labels and category icons.
 */
export default function SkillsApp() {
    return (
        <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="space-y-8">
                        <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                                {category.icon}
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-white uppercase tracking-wider">{category.title}</h2>
                                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Core Competencies</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {category.skills.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group"
                                >
                                    <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                                        {skill}
                                    </span>
                                    <Layers size={14} className="text-white/10 group-hover:text-primary transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass p-10 rounded-[40px] border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                    <Terminal size={120} />
                </div>

                <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                        <Sparkles size={14} /> The Learning Path
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Focusing on Embedded C & Deep React.</h3>
                    <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
                        Currently expanding my knowledge of Embedded C for complex IoT architectures and exploring React internals to build even more efficient web interfaces.
                    </p>
                </div>
            </div>
        </div>
    );
}
