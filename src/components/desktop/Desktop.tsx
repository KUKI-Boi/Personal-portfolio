"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Window from "./Window";
import Dock from "./Dock";
import CosmicBackground from "./CosmicBackground";
import { CalendarWidget, InfoWidget } from "./Widgets";

// App Content Components
import AboutApp from "../apps/AboutApp";
import ProjectsApp from "../apps/ProjectsApp";
import ContactApp from "../apps/ContactApp";
import SkillsApp from "../apps/SkillsApp";
import PlayApp from "../apps/PlayApp";
import EducationApp from "../apps/EducationApp";
import VolunteeringApp from "../apps/VolunteeringApp";

import {
    User,
    Folder,
    Cpu,
    Mail,
    Terminal,
    Gamepad,
    Zap,
    Search,
    Sun,
    Moon
} from "lucide-react";

export type AppId = "about" | "projects" | "contact" | "skills" | "volunteering" | "education" | "play";

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
    { id: "volunteering", label: "Outreach", icon: <Zap size={24} /> },
    { id: "play", label: "Play", icon: <Gamepad size={24} /> },
];

const BACKGROUND_TAGS = [
    "Next.js", "TypeScript", "React", "Node.js", "Vercel", "Tailwind CSS",
    "Express.js", "Redis", "Supabase", "PostgreSQL", "Framer Motion"
];

export default function Desktop() {
    const [openApps, setOpenApps] = useState<AppId[]>([]);
    const [minimizedApps, setMinimizedApps] = useState<AppId[]>([]);
    const [maximizedApps, setMaximizedApps] = useState<AppId[]>([]);
    const [activeApp, setActiveApp] = useState<AppId | null>(null);
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState("");
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [isImmersive, setIsImmersive] = useState(false);
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mountTimer = setTimeout(() => {
            setMounted(true);
            const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light';
            if (savedTheme) setTheme(savedTheme);
        }, 0);

        const clockTimer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);
        return () => {
            clearTimeout(mountTimer);
            clearInterval(clockTimer);
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
    };

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
        // Restore if minimized
        if (minimizedApps.includes(id)) {
            setMinimizedApps(prev => prev.filter(appId => appId !== id));
        }
        focusApp(id);
    };

    const closeApp = (id: AppId) => {
        setOpenApps(prev => prev.filter((appId) => appId !== id));
        setMinimizedApps(prev => prev.filter((appId) => appId !== id));
        setMaximizedApps(prev => prev.filter((appId) => appId !== id));
        if (activeApp === id) {
            setActiveApp(null);
        }
    };

    const toggleMinimize = (id: AppId) => {
        if (minimizedApps.includes(id)) {
            setMinimizedApps(prev => prev.filter(appId => appId !== id));
            focusApp(id);
        } else {
            setMinimizedApps(prev => [...prev, id]);
            if (activeApp === id) setActiveApp(null);
        }
    };

    const toggleMaximize = (id: AppId) => {
        if (maximizedApps.includes(id)) {
            setMaximizedApps(prev => prev.filter(appId => appId !== id));
        } else {
            setMaximizedApps(prev => [...prev, id]);
        }
    };

    return (
        <div
            ref={container}
            className={`relative h-screen w-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] font-mono transition-colors duration-500 ${theme === 'light' ? 'theme-light' : ''}`}
        >
            {/* Background Stipple Pattern */}
            <div className="absolute inset-0 stipple-bg opacity-30 pointer-events-none" />
            <div className="noise-overlay absolute inset-0 z-0" />

            {/* Top Bar */}
            <AnimatePresence>
                {!isImmersive && (
                    <motion.header
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        className="fixed top-0 left-0 w-full h-8 px-4 flex items-center justify-between z-50 bg-[var(--header-bg)] backdrop-blur-sm border-b border-[var(--muted)]/5 select-none transition-colors duration-500"
                    >
                        <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em]">
                            <span className="text-[var(--foreground)]">Likith</span>
                            <span className="text-[var(--muted)] hidden sm:inline">Desktop</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <motion.button
                                onClick={toggleTheme}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="h-8 px-4 flex items-center justify-center cosmic-glass rounded-full cosmic-button transition-all duration-500 group"
                            >
                                <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                                <motion.div
                                    key={theme}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10"
                                >
                                    {theme === 'dark' ? <Sun size={12} strokeWidth={2.5} /> : <Moon size={12} strokeWidth={2.5} />}
                                </motion.div>
                            </motion.button>

                            <div className="hidden sm:flex items-center gap-2 text-[var(--muted)]">
                                <Search size={10} />
                                <span>Spotlight</span>
                            </div>
                            {mounted && <span className="text-[var(--muted)]">{time}</span>}
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>

            {/* Bottom-Right Diagonal Tech Stack */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none z-0 overflow-hidden select-none opacity-20 md:opacity-40">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-40deg]">
                    <motion.div
                        animate={{
                            x: [0, -1000],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="whitespace-nowrap flex gap-12 items-center"
                    >
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="flex gap-12 items-center">
                                {BACKGROUND_TAGS.map((tag, idx) => (
                                    <span
                                        key={`${tag}-${idx}`}
                                        className={`text-6xl font-black uppercase tracking-tighter transition-colors duration-500 ${idx % 2 === 0 ? 'text-[var(--foreground)]' : 'text-[var(--accent)]'}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Cosmic Background */}
            <CosmicBackground
                imageSrc={theme === 'dark' ? '/cosmic-bg.jpg' : '/cosmic-light-bg.png'}
                theme={theme}
            />

            {/* Top-Left Identity Section */}
            <div className="relative z-10 flex flex-col items-start justify-start h-full px-8 md:px-16 pt-32 md:pt-40 pointer-events-none">
                {/* Minimalist Hero */}
                <div className="max-w-4xl w-full flex flex-col items-start gap-6 pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <h1 className="text-[14vw] sm:text-[10vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter select-none flex flex-col items-start transition-colors duration-500">
                            <span className="text-[var(--foreground)]">LIKITH</span>
                            <span className="text-[var(--accent)]">KUMAR</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col items-start gap-6"
                    >
                        <div className="space-y-1 transition-colors duration-500">
                            <p className="text-[var(--foreground)] text-xl md:text-2xl font-black tracking-tight leading-tight uppercase">
                                Engineering Ideas with
                            </p>
                            <p className="text-[var(--accent)] text-2xl md:text-4xl font-black tracking-tighter leading-tight uppercase">
                                Passion, Precision and Innovation
                            </p>
                        </div>

                        <div className="flex gap-4 flex-wrap">
                            {["REACT", "NEXT.JS", "PYTHON", "AI/ML", "UI/UX"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 border border-[var(--muted)]/20 bg-[var(--card)]/40 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-[var(--muted)] transition-all duration-500"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Widgets */}
            <div className="fixed top-24 right-4 md:right-8 hidden lg:flex flex-col gap-6 z-[5]">
                <InfoWidget />
                <CalendarWidget />
            </div>

            {/* Windows Layer */}
            <AnimatePresence>
                {openApps.map((appId, index) => {
                    const app = APPS.find(a => a.id === appId);
                    if (!app) return null;
                    if (minimizedApps.includes(appId)) return null;

                    return (
                        <div key={appId} style={{ zIndex: 100 + index }} className="fixed inset-0 pointer-events-none">
                            <Window
                                title={app.label}
                                isMaximized={maximizedApps.includes(appId)}
                                immersive={isImmersive && appId === "play"}
                                onClose={() => closeApp(appId)}
                                onMinimize={() => toggleMinimize(appId)}
                                onMaximize={() => toggleMaximize(appId)}
                                onPointerDown={() => focusApp(appId)}
                            >
                                {appId === "about" && <AboutApp />}
                                {appId === "projects" && <ProjectsApp />}
                                {appId === "skills" && <SkillsApp />}
                                {appId === "contact" && <ContactApp />}
                                {appId === "volunteering" && <VolunteeringApp />}
                                {appId === "education" && <EducationApp />}
                                {appId === "play" && <PlayApp onImmersiveChange={setIsImmersive} />}
                            </Window>
                        </div>
                    );
                })}
            </AnimatePresence>

            <AnimatePresence>
                {!isImmersive && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-6 left-0 right-0 z-[1001] flex justify-center pointer-events-none"
                    >
                        <Dock
                            openApps={openApps}
                            activeApp={activeApp}
                            minimizedApps={minimizedApps}
                            onAppClick={openApp}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
