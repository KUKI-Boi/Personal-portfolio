"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
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
    GraduationCap,
    ChevronRight
} from "lucide-react";

// Lazy load 3D to maintain performance
const Hero3D = dynamic(() => import("./Hero3D"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black/20 animate-pulse" />
});

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
 * Redesigned with premium 3D hero and improved visual hierarchy.
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

        // Profile focal point comes in
        tl.from(".profile-focal", {
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: "power3.out",
        }, "-=0.5");

        // Items stagger in
        tl.from(".app-icon", {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
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
        <div ref={container} className="relative h-screen w-screen overflow-hidden bg-[#0a0b14] text-zinc-100 flex flex-col font-sans">
            {/* 3D Reactive Backdrop */}
            <Hero3D />

            {/* Desktop Background / Mesh Gradient Overlay */}
            <div className="desktop-bg absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(79,195,247,0.05)_0%,_transparent_100%),radial-gradient(circle_at_60%_60%,_rgba(179,157,219,0.05)_0%,_transparent_100%)] pointer-events-none" />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-8">

                {/* Profile Focal Point */}
                <div className="profile-focal text-center space-y-8 mb-16 select-none cursor-default max-w-3xl">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gradient pb-2 drop-shadow-2xl">
                            Likith Kumar B M
                        </h1>
                        <p className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase text-primary/80 flex items-center justify-center gap-4">
                            <span className="w-12 h-px bg-primary/30" />
                            Frontend Developer | Electronics Learner
                            <span className="w-12 h-px bg-primary/30" />
                        </p>
                    </div>

                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                        "I build clean, responsive user interfaces and work on practical engineering projects that bridge software, hardware, and real-world impact."
                    </p>

                    <div className="pt-4">
                        <button
                            onClick={() => openApp("about")}
                            className="group flex items-center gap-3 mx-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-full transition-all duration-300 text-zinc-100 font-bold tracking-widest uppercase text-xs"
                        >
                            Start Exploring <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform text-primary" />
                        </button>
                    </div>
                </div>

                {/* Dynamic App Icons (Now more spacious and secondary) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-12 w-full max-w-5xl opacity-80 hover:opacity-100 transition-opacity duration-500">
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
