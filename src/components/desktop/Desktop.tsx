"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Window from "./Window";
import Dock from "./Dock";
import { CalendarWidget, InfoWidget, MusicWidget } from "./Widgets";

// App Content Components
import AboutApp from "../apps/AboutApp";
import ProjectsApp from "../apps/ProjectsApp";
import ContactApp from "../apps/ContactApp";
import SkillsApp from "../apps/SkillsApp";
import VolunteeringApp from "../apps/VolunteeringApp";
import EducationApp from "../apps/EducationApp";

import {
    User,
    Folder,
    Cpu,
    Mail,
    Terminal,
    Gamepad,
    Search
} from "lucide-react";

export type AppId = "about" | "projects" | "contact" | "skills" | "volunteering" | "education";

export interface AppConfig {
    id: AppId;
    label: string;
    icon: React.ReactNode;
}

export const APPS: AppConfig[] = [
    { id: "about", label: "About", icon: <User size={24} /> },
    { id: "projects", label: "Projects", icon: <Folder size={24} /> },
    { id: "skills", label: "Skills", icon: <Cpu size={24} /> },
    { id: "contact", label: "Contact", icon: <Mail size={24} /> },
    { id: "education", label: "Terminal", icon: <Terminal size={24} /> },
    { id: "volunteering", label: "Play", icon: <Gamepad size={24} /> },
];

const BACKGROUND_TAGS = [
    "Next.js", "TypeScript", "React", "Node.js", "Vercel", "Tailwind CSS",
    "Express.js", "Redis", "Supabase", "PostgreSQL", "Framer Motion"
];

export default function Desktop() {
    const [openApps, setOpenApps] = useState<AppId[]>([]);
    const [activeApp, setActiveApp] = useState<AppId | null>(null);
    const container = useRef<HTMLDivElement>(null);

    const focusApp = (id: AppId) => {
        setActiveApp(id);
        setOpenApps(prev => {
            const rest = prev.filter(appId => appId !== id);
            return [...rest, id];
        });
    };

    const openApp = (id: AppId) => {
        if (!openApps.includes(id)) {
            setOpenApps(prev => [...prev, id]);
        }
        focusApp(id);
    };

    const closeApp = (id: AppId) => {
        setOpenApps(prev => prev.filter((appId) => appId !== id));
        if (activeApp === id) {
            setActiveApp(null);
        }
    };

    return (
        <div ref={container} className="relative h-screen w-screen overflow-hidden bg-black text-white font-mono flex flex-col">
            {/* Background Stipple Pattern */}
            <div className="absolute inset-0 stipple-bg opacity-30 pointer-events-none" />
            <div className="noise-overlay absolute inset-0 z-0" />

            {/* Top Bar */}
            <header className="fixed top-0 left-0 w-full h-8 px-4 flex items-center justify-between z-50 bg-black/50 backdrop-blur-sm border-b border-white/5 select-none">
                <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em]">
                    <span className="text-white">Likith</span>
                    <span className="text-zinc-500">Desktop</span>
                </div>
                <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">
                    <div className="flex items-center gap-2">
                        <Search size={10} />
                        <span>Spotlight</span>
                    </div>
                    <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                </div>
            </header>

            {/* Floating Background Text */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-20">
                {BACKGROUND_TAGS.map((tag, i) => (
                    <div
                        key={tag}
                        className="absolute text-[10px] font-black uppercase tracking-widest whitespace-nowrap"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            color: i % 2 === 0 ? '#fff' : '#ff0000'
                        }}
                    >
                        {tag}
                    </div>
                ))}
            </div>

            {/* Hero Statue Placement */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 z-0">
                <img
                    src="/artifacts/stippled_statue_bust.png"
                    alt="Hero Bust"
                    className="h-[80%] object-contain mix-blend-screen"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                />
            </div>

            {/* Central Identity Section */}
            <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-8 select-none">
                <div className="max-w-5xl w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <h1 className="text-giant font-black">
                            <span className="text-white">Likith</span>
                            <br />
                            <span className="text-[#ff0000] ml-24 md:ml-48">Kumar</span>
                        </h1>

                        <div className="mt-12 max-w-lg space-y-6">
                            <p className="text-sm md:text-xl font-black uppercase tracking-[0.2em] leading-relaxed">
                                I build digital experiences with <br />
                                <span className="text-[#ff0000]">passion,</span> precision and <span className="text-zinc-400">innovation</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Widgets */}
            <div className="fixed top-24 right-8 flex flex-col gap-6 z-20">
                <InfoWidget />
                <CalendarWidget />
            </div>
            <MusicWidget />

            {/* Windows Layer */}
            <AnimatePresence>
                {openApps.map((appId, index) => {
                    const app = APPS.find(a => a.id === appId);
                    if (!app) return null;

                    return (
                        <div key={appId} style={{ zIndex: 10 + index }} className="fixed inset-0 pointer-events-none">
                            <Window
                                title={app.label}
                                onClose={() => closeApp(appId)}
                                onPointerDown={() => focusApp(appId)}
                            >
                                {appId === "about" && <AboutApp />}
                                {appId === "projects" && <ProjectsApp />}
                                {appId === "skills" && <SkillsApp />}
                                {appId === "contact" && <ContactApp />}
                                {appId === "education" && <EducationApp />}
                                {appId === "volunteering" && <VolunteeringApp />}
                            </Window>
                        </div>
                    );
                })}
            </AnimatePresence>

            <Dock
                openApps={openApps}
                activeApp={activeApp}
                onAppClick={openApp}
            />
        </div>
    );
}
