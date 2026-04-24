"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    tags: string[];
    sourceUrl?: string;
    previewUrl?: string;
}

const PROJECTS: Project[] = [
    {
        title: "Altitude Hold Controller",
        description: "A controller system designed for maintaining stable UAV altitude.",
        tags: ["Control Systems", "UAV", "MATLAB"],
        sourceUrl: "https://github.com/KUKI-Boi/altitude-hold-controller.git"
    },
    {
        title: "Solar Battery Charging System",
        description: "Simulation and management system for solar battery charging dynamics.",
        tags: ["Power Systems", "Simulink", "Energy"],
        sourceUrl: "https://github.com/KUKI-Boi/Solar-Battery-Charging-System.git"
    },
    {
        title: "Y-bus Matrix Builder",
        description: "Computational tool tailored for generating Y-bus matrices in power system analysis.",
        tags: ["Power Systems", "Matrix", "Algorithm"],
        sourceUrl: "https://github.com/KUKI-Boi/Y-bus-Matrix-Builder.git"
    },
    {
        title: "Z-bus Matrix Builder",
        description: "Analytical builder for deriving Z-bus matrices used in fault analysis algorithms.",
        tags: ["Fault Analysis", "Power Systems", "Algorithm"],
        sourceUrl: "https://github.com/KUKI-Boi/zbus-matrix-builder.git"
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.10 } }
};
const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0 }
} as const;

export default function ProjectsApp() {
    return (
        <div className="space-y-10 md:space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[var(--foreground)]">Showcasing My Work</h2>
                <p className="text-[var(--muted)] text-sm font-black uppercase tracking-widest">A showcase of my recent work and side projects</p>
            </div>

            <div className="section-divider" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-5"
            >
                {PROJECTS.map((project) => (
                    <motion.div
                        key={project.title}
                        variants={cardVariant}
                        whileHover={{ y: -4 }}
                        className="project-card group p-6 md:p-8"
                    >
                        <div className="flex flex-col md:flex-row justify-between gap-6">
                            <div className="space-y-4 flex-1">
                                {/* Title */}
                                <h3 className="text-xl font-black text-[var(--foreground)] uppercase tracking-tight">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[var(--muted)] text-sm font-medium leading-relaxed max-w-xl">
                                    {project.description}
                                </p>

                                {/* Tech badge pills */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-0.5 text-[11px] font-black uppercase tracking-widest bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-full text-[var(--muted)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action buttons */}
                                <div className="flex items-center gap-4 pt-2">
                                    {project.previewUrl && (
                                        <a
                                            href={project.previewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-5 py-2 cosmic-glass cosmic-button rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                                        >
                                            <ExternalLink size={12} className="relative z-10" />
                                            <span className="relative z-10">Live Demo →</span>
                                        </a>
                                    )}
                                    {project.sourceUrl && (
                                        <a
                                            href={project.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-5 py-2 cosmic-glass cosmic-button rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                                        >
                                            <Github size={12} className="relative z-10" />
                                            <span className="relative z-10">GitHub</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
