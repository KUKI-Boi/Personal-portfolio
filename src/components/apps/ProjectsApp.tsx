"use client";

import { ExternalLink, Github, Code, Cpu, Mail, ChevronRight } from "lucide-react";

interface Project {
    title: string;
    description: string;
    contributions: string[];
    techStack: string[];
    icon: React.ReactNode;
    accent: string;
}

const PROJECTS: Project[] = [
    {
        title: "Collision-Free Vehicle Overtaking",
        description: "MATLAB simulation modeling safe overtaking maneuvers using state-based logic and collision avoidance.",
        contributions: [
            "Designed vehicle motion logic & lane-change states",
            "Visualized dynamic movement via plotting",
            "Ensured collision-free safe transitions"
        ],
        techStack: ["MATLAB", "Logic Design"],
        icon: <Code size={24} />,
        accent: "blue",
    },
    {
        title: "IoT Fire Alerting System",
        description: "Detection system using ESP32/ESP8266 to monitor fire hazards and provide real-time alerts.",
        contributions: [
            "Designed circuit connections and simulations",
            "Implemented sensor logic and alert mechanism",
            "Simulated system behavior via Wokwi"
        ],
        techStack: ["ESP32", "C++", "IoT"],
        icon: <Cpu size={24} />,
        accent: "orange",
    },
    {
        title: "HR Email Automation",
        description: "Automated rejection workflows for applicants using Google Sheets and Apps Script.",
        contributions: [
            "Built custom Google Apps Script logic",
            "Integrated UI sidebar for one-click utility",
            "Managed status tracking & templates"
        ],
        techStack: ["Apps Script", "Automation"],
        icon: <Mail size={24} />,
        accent: "green",
    },
];

/**
 * ProjectsApp component
 * Engineering-first project showcase optimized for skimming.
 */
export default function ProjectsApp() {
    return (
        <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 gap-12">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12 transition-all hover:bg-white/[0.04] hover:border-white/10"
                    >
                        {/* Project Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                            <div className="flex items-center gap-6">
                                <div className={`w-16 h-16 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 duration-500`}>
                                    <div className={
                                        project.accent === 'blue' ? 'text-accent-cyan' :
                                            project.accent === 'orange' ? 'text-orange-400' :
                                                'text-green-400'
                                    }>
                                        {project.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white tracking-tight">{project.title}</h3>
                                    <div className="flex flex-wrap gap-3 mt-3">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-500 border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl text-xs font-bold text-zinc-400 hover:text-white transition-all border border-white/5">
                                    Case Study
                                </button>
                                <button className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20 hover:bg-primary/20 transition-all">
                                    <ExternalLink size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Description</h4>
                                <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                                    {project.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Contributions</h4>
                                <ul className="space-y-4">
                                    {project.contributions.map((contribution, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-zinc-300 text-sm font-medium">
                                            <ChevronRight size={14} className="mt-1 text-primary/50 shrink-0" />
                                            {contribution}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Subtle number indicator */}
                        <div className="absolute top-8 right-12 text-6xl font-black text-white/[0.02] pointer-events-none select-none">
                            0{index + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
