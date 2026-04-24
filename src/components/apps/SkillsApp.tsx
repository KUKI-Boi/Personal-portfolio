"use client";

import { Cpu, Globe, Terminal, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface SkillItem {
    name: string;
    iconUrl: string;
    /** CSS color used for the glow on hover */
    glowColor: string;
}

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Web Technologies",
        icon: <Globe size={14} />,
        skills: [
            { name: "Next.js",     iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",         glowColor: "rgba(255,255,255,0.6)" },
            { name: "React",       iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",            glowColor: "#61DAFB" },
            { name: "Three.js",    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",        glowColor: "rgba(255,255,255,0.5)" },
            { name: "JavaScript",  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",  glowColor: "#F7DF1E" },
        ]
    },
    {
        title: "Engineering & Embedded",
        icon: <Cpu size={14} />,
        skills: [
            { name: "MATLAB",   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",       glowColor: "#e16737" },
            { name: "C++",      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", glowColor: "#659AD2" },
            { name: "Python",   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",       glowColor: "#FFD43B" },
            { name: "Arduino",  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",     glowColor: "#00979D" },
        ]
    },
    {
        title: "Core Fundamentals",
        icon: <Terminal size={14} />,
        skills: [
            { name: "HTML5",       iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",                     glowColor: "#E34F26" },
            { name: "CSS3",        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",                       glowColor: "#1572B6" },
            { name: "Tailwind",    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",          glowColor: "#38BDF8" },
            { name: "C Language",  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",                             glowColor: "#A8B9CC" },
        ]
    },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0 }
} as const;

export default function SkillsApp() {
    return (
        <div className="space-y-10 md:space-y-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[var(--foreground)]">Skills &amp; Technologies</h2>
                <p className="text-[var(--muted)] text-sm font-black uppercase tracking-widest">Technologies and tools I work with</p>
            </div>

            <div className="section-divider" />

            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {SKILL_CATEGORIES.map((category) => (
                    <motion.div key={category.title} variants={item} className="space-y-6">
                        <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--muted)]/60 border-b border-[var(--muted)]/10 pb-2">
                            <span className="text-[var(--accent)]">{category.icon}</span>
                            {category.title}
                        </h3>

                        <div className="grid grid-cols-4 gap-4">
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ y: -4, scale: 1.08 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="skill-icon-card group flex flex-col items-center gap-3"
                                    style={{"--glow" : skill.glowColor} as React.CSSProperties}
                                >
                                    <div
                                        className="w-14 h-14 rounded-2xl cosmic-glass flex items-center justify-center p-3 group-hover:shadow-[0_0_20px_var(--glow)] transition-all duration-300"
                                    >
                                        <img
                                            src={skill.iconUrl}
                                            alt={`${skill.name} logo`}
                                            className={`w-full h-full object-contain drop-shadow-md transition-all duration-300${skill.name === "Next.js" || skill.name === "Three.js" ? " icon-invert" : ""}`}
                                        />
                                    </div>
                                    <span className="text-[8px] font-black uppercase tracking-widest text-[var(--muted)]/40 group-hover:text-[var(--accent)] transition-colors text-center">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="section-divider" />

            <div className="pt-4 flex flex-wrap justify-between gap-8 opacity-50">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[var(--muted)]"><Cpu size={14} /> Embedded</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[var(--muted)]"><Globe size={14} /> Web</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[var(--muted)]"><Terminal size={14} /> Automation</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[var(--muted)]"><Layers size={14} /> Design Systems</div>
            </div>
        </div>
    );
}
