"use client";

import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Taskbar from "./Taskbar";
import AppIcon from "./AppIcon";
import Window from "./Window";
import AboutApp from "../apps/AboutApp";
import ProjectsApp from "../apps/ProjectsApp";
import ContactApp from "../apps/ContactApp";
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
        }, "-=1");

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
                                {appId === "about" && <AboutApp />}
                                {appId === "projects" && <ProjectsApp />}
                                {appId === "contact" && <ContactApp />}

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
