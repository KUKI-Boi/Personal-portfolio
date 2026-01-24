"use client";

import { ExternalLink, Github, Code, Cpu, Mail } from "lucide-react";

interface Project {
    title: string;
    description: string;
    contributions: string[];
    techStack: string[];
    icon: React.ReactNode;
}

const PROJECTS: Project[] = [
    {
        title: "Collision-Free Vehicle Overtaking",
        description: "Developed a MATLAB-based simulation to model a safe overtaking maneuver between two vehicles using state-based logic and collision avoidance principles.",
        contributions: [
            "Designed vehicle motion logic and lane-change states",
            "Visualized vehicle movement using dynamic plotting",
            "Ensured collision-free transitions during overtaking"
        ],
        techStack: ["MATLAB"],
        icon: <Code size={20} className="text-blue-400" />,
    },
    {
        title: "IoT-Based Fire Alerting System",
        description: "Designed an IoT fire detection system using ESP32/ESP8266 to monitor fire hazards and provide alerts.",
        contributions: [
            "Designed circuit connections and simulations",
            "Implemented sensor logic and alert mechanism",
            "Simulated system behavior using Wokwi"
        ],
        techStack: ["ESP32", "ESP8266", "IoT Sensors"],
        icon: <Cpu size={20} className="text-orange-400" />,
    },
    {
        title: "HR Email Automation System",
        description: "Automated rejection emails for job applicants using Google Sheets and Apps Script.",
        contributions: [
            "Built custom Google Apps Script logic",
            "Integrated UI sidebar for one-click email sending",
            "Managed applicant status tracking"
        ],
        techStack: ["Google Sheets", "Apps Script"],
        icon: <Mail size={20} className="text-green-400" />,
    },
];

/**
 * ProjectsApp component
 * Displays Likith's engineering projects.
 */
export default function ProjectsApp() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 gap-8">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all shadow-lg"
                    >
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400">
                                        {project.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-zinc-100">{project.title}</h3>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="p-2 rounded-lg bg-zinc-800 border border-white/5 text-zinc-500 cursor-not-allowed opacity-50">
                                        <Github size={18} />
                                    </span>
                                    <span className="p-2 rounded-lg bg-zinc-800 border border-white/5 text-zinc-500 cursor-not-allowed opacity-50">
                                        <ExternalLink size={18} />
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-zinc-400 leading-relaxed italic">
                                    {project.description}
                                </p>

                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Key Contributions</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                        {project.contributions.map((contribution, idx) => (
                                            <li key={idx} className="text-sm text-zinc-300 flex items-start gap-2">
                                                <span className="text-zinc-600 mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                                                {contribution}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
