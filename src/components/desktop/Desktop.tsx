"use client";

import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Taskbar from "./Taskbar";
import AppIcon from "./AppIcon";
import Window from "./Window";

// App Content Components
import AboutApp from "../apps/AboutApp";
import ProjectsApp from "../apps/ProjectsApp";
import ContactApp from "../apps/ContactApp";
import SkillsApp from "../apps/SkillsApp";
import VolunteeringApp from "../apps/VolunteeringApp";
import EducationApp from "../apps/EducationApp";

import {
    User,
    Briefcase,
    Mail,
    Award,
    Heart,
    GraduationCap
} from "lucide-react";

export type AppId = "about" | "projects" | "contact" | "skills" | "volunteering" | "education";

export interface AppConfig {
    id: AppId;
    label: string;
    icon: React.ReactNode;
}

export const APPS: AppConfig[] = [
    { id: "about", label: "About", icon: <User size={28} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={28} /> },
    { id: "skills", label: "Skills", icon: <Award size={28} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={28} /> },
    { id: "volunteering", label: "Volunteering", icon: <Heart size={28} /> },
    { id: "contact", label: "Contact", icon: <Mail size={28} /> },
];

/**
 * Desktop component
 * Main container for Likith's Portfolio OS.
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

        // Desktop identity text fade in
        tl.from(".desktop-identity", {
            opacity: 0,
            y: 10,
            duration: 1,
            delay: 0.5,
            ease: "power2.out"
        }, "-=0.5");

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

            {/* Desktop Identity Overlay (Subtle) */}
            <div className="desktop-identity absolute top-12 left-12 z-0 pointer-events-none hidden md:block select-none max-w-lg">
                <h1 className="text-4xl font-black text-white/10 tracking-tighter uppercase italic">Likith Kumar B M</h1>
                <p className="text-white/5 font-bold tracking-widest text-xs uppercase mt-2">Frontend Developer | UI/UX Enthusiast | Electronics & Embedded Systems Learner</p>
                <p className="text-white/5 text-sm mt-4 leading-relaxed font-medium">
                    "I build clean, responsive user interfaces and work on practical engineering projects that bridge software, hardware, and real-world impact."
                </p>
            </div>

            {/* App Icons Grid */}
            <main className="flex-1 flex items-center justify-center p-8 pb-12 relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl w-full">
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
                                {appId === "skills" && <SkillsApp />}
                                {appId === "volunteering" && <VolunteeringApp />}
                                {appId === "education" && <EducationApp />}
                                {appId === "contact" && <ContactApp />}
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
