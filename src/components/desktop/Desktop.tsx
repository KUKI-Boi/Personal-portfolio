"use client";

import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Taskbar from "./Taskbar";
import AppIcon from "./AppIcon";
import Window from "./Window";
import { User, Briefcase, Mail, FileText, Award, History, Terminal, Settings } from "lucide-react";

export type AppId = "about" | "projects" | "contact" | "resume" | "skills" | "experience" | "terminal" | "settings";

export interface AppConfig {
    id: AppId;
    label: string;
    icon: React.ReactNode;
}

export const APPS: AppConfig[] = [
    { id: "about", label: "About", icon: <User size={28} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={28} /> },
    { id: "contact", label: "Contact", icon: <Mail size={28} /> },
    { id: "resume", label: "Resume", icon: <FileText size={28} /> },
    { id: "skills", label: "Skills", icon: <Award size={28} /> },
    { id: "experience", label: "Experience", icon: <History size={28} /> },
    { id: "terminal", label: "Terminal", icon: <Terminal size={28} /> },
    { id: "settings", label: "Settings", icon: <Settings size={28} /> },
];

/**
 * Desktop component
 * Main container for the OS-like interface.
 */
export default function Desktop() {
    const [openApps, setOpenApps] = useState<AppId[]>([]);
    const [activeApp, setActiveApp] = useState<AppId | null>(null);
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Fade in desktop background
        tl.from(".desktop-bg", {
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
        });

        // Stagger app icons
        tl.from(".app-icon", {
            opacity: 0,
            y: 20,
            scale: 0.8,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
        }, "-=1"); // Start staggering before background fade ends

    }, { scope: container });

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
        <div ref={container} className="relative h-screen w-screen overflow-hidden bg-[#0a0a0a] text-zinc-100 flex flex-col">
            {/* Desktop Background / Wallpaper Area */}
            <div className="desktop-bg absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50 pointer-events-none" />

            {/* App Icons Grid */}
            <main className="flex-1 flex items-center justify-center p-8 pb-12 relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl w-full">
                    {APPS.map((app) => (
                        <AppIcon
                            key={app.id}
                            label={app.label}
                            icon={app.icon}
                            onClick={() => openApp(app.id)}
                        />
                    ))}
                </div>
            </main>

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
                                {appId === "about" && (
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold">Hello, I'm a Senior Frontend Engineer.</h2>
                                        <p>I build clean, production-ready code using modern technologies like Next.js and Tailwind CSS.</p>
                                    </div>
                                )}

                                {appId === "projects" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="p-4 rounded-lg bg-zinc-800/50 border border-white/5">
                                                <h3 className="font-medium">Project {i}</h3>
                                                <p className="text-sm text-zinc-400">A sample project description for the portfolio.</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {appId === "contact" && (
                                    <form className="space-y-4 max-w-md mx-auto">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Name</label>
                                            <input className="w-full bg-zinc-800 border border-white/10 rounded-lg p-2 outline-none focus:border-zinc-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Email</label>
                                            <input className="w-full bg-zinc-800 border border-white/10 rounded-lg p-2 outline-none focus:border-zinc-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Message</label>
                                            <textarea className="w-full bg-zinc-800 border border-white/10 rounded-lg p-2 outline-none focus:border-zinc-500 h-32" />
                                        </div>
                                        <button className="bg-zinc-100 text-zinc-900 font-bold py-2 px-4 rounded-lg w-full">Send Message</button>
                                    </form>
                                )}

                                {!["about", "projects", "contact"].includes(appId) && (
                                    <div className="flex items-center justify-center h-full text-zinc-500 italic">
                                        Coming soon...
                                    </div>
                                )}
                            </Window>
                        </div>
                    );
                })}
            </AnimatePresence>

            <Taskbar
                openApps={openApps}
                activeApp={activeApp}
                onAppClick={focusApp}
            />
        </div>
    );
}
