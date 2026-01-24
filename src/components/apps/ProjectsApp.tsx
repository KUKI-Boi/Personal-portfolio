"use client";

import { ExternalLink, Github } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
}

const PROJECTS: Project[] = [
    {
        title: "AI Hardware Designer",
        description: "An intelligent platform for automating hardware design workflows using Groq and OpenRouter APIs.",
        tags: ["Next.js", "Groq", "Tailwind"],
    },
    {
        title: "Lumen EdTech",
        description: "A creative educational platform focused on project-based and experiential learning for modern students.",
        tags: ["React", "State-Mgmt", "GSAP"],
    },
    {
        title: "AQMD Monitoring",
        description: "Real-time air quality monitoring dashboard with advanced data visualization and live updates.",
        tags: ["TypeScript", "Dashboard", "Charts"],
    },
];

/**
 * ProjectsApp component
 * Displays a list of projects with details.
 */
export default function ProjectsApp() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-zinc-800/50 border border-white/5 rounded-xl p-6 transition-all hover:bg-zinc-800/80 hover:border-white/10 flex flex-col justify-between"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-zinc-100">{project.title}</h3>
                                <div className="flex items-center gap-2">
                                    <a href="#" className="p-2 rounded-lg hover:bg-white/5 text-zinc-500 hover:text-zinc-200 transition-colors">
                                        <Github size={16} />
                                    </a>
                                    <a href="#" className="p-2 rounded-lg hover:bg-white/5 text-zinc-500 hover:text-zinc-200 transition-colors">
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-zinc-900 border border-white/5 rounded text-[10px] font-medium text-zinc-500 uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center pt-8 border-t border-white/5 text-sm text-zinc-500 italic">
                Viewing 3 of 12 highlighted projects.
            </div>
        </div>
    );
}
