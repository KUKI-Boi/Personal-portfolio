"use client";

import { ExternalLink, Github, ChevronRight } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
}

const PROJECTS: Project[] = [
    {
        title: "Collision-Free Vehicle Overtaking",
        description: "MATLAB simulation modeling safe overtaking maneuvers using state-based logic.",
        tags: ["MATLAB", "Logic", "Sim"]
    },
    {
        title: "IoT Fire Alerting System",
        description: "Detection system using ESP32 to monitor fire hazards and provide real-time alerts.",
        tags: ["ESP32", "IoT", "C++"]
    },
    {
        title: "HR Email Automation",
        description: "Automated rejection workflows for applicants using Google Sheets and Apps Script.",
        tags: ["Apps Script", "Automation"]
    },
];

export default function ProjectsApp() {
    return (
        <div className="space-y-10 md:space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[var(--foreground)]">Showcasing My Work</h2>
                <p className="text-[var(--muted)] text-sm font-black uppercase tracking-widest">A showcase of my recent work and side projects</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="group p-6 md:p-8 cosmic-glass rounded-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    >
                        <div className="flex flex-col md:flex-row justify-between gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">{project.title}</h3>
                                    <div className="flex gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 py-0.5 bg-[var(--accent)]/10 rounded text-[8px] font-black uppercase text-[var(--accent)] border border-[var(--accent)]/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-[var(--muted)] text-sm font-medium leading-relaxed max-w-xl">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4 pt-2">
                                    <button className="px-5 py-2 cosmic-glass cosmic-button rounded-xl text-[10px] font-black uppercase tracking-widest transition-all gap-2">
                                        <ExternalLink size={12} className="relative z-10" /> <span className="relative z-10">Preview</span>
                                    </button>
                                    <button className="px-5 py-2 cosmic-glass cosmic-button rounded-xl text-[10px] font-black uppercase tracking-widest transition-all gap-2">
                                        <Github size={12} className="relative z-10" /> <span className="relative z-10">Source</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                                <div className="w-8 h-8 rounded-full border border-[var(--muted)]/20 flex items-center justify-center text-[var(--muted)]">
                                    <ChevronRight size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
