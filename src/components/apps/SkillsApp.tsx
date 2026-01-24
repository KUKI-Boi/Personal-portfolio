"use client";

import { Cpu, Wrench, Terminal } from "lucide-react";

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Technical Skills",
        icon: <Cpu size={18} className="text-blue-400" />,
        skills: ["HTML5", "CSS3", "JavaScript", "React (Beginner–Intermediate)", "MATLAB (Simulation & Visualization)", "Embedded Systems (ESP32, ESP8266)", "IoT System Design"],
    },
    {
        title: "Tools & Platforms",
        icon: <Wrench size={18} className="text-orange-400" />,
        skills: ["Figma", "Git & GitHub", "Google Sheets & Apps Script", "VS Code", "Wokwi Simulator"],
    },
];

/**
 * SkillsApp component
 * Displays categorized skill lists.
 */
export default function SkillsApp() {
    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                            {category.icon}
                            <h2 className="text-lg font-bold text-zinc-100 uppercase tracking-wider">{category.title}</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-3 py-1.5 bg-zinc-800/80 border border-white/10 rounded-lg text-sm font-medium text-zinc-300 hover:border-white/20 hover:bg-zinc-800 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 mt-8">
                <h3 className="text-sm font-bold text-zinc-500 uppercase mb-4 flex items-center gap-2">
                    <Terminal size={14} /> My Learning Path
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed italic">
                    Currently focusing on deep-diving into React internals and expanding my knowledge of Embedded C for complex IoT architectures.
                </p>
            </div>
        </div>
    );
}
