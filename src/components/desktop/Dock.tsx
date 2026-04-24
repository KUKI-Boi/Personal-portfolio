"use client";

import { motion } from "framer-motion";
import { AppId, APPS } from "./Desktop";

interface DockProps {
    onAppClick: (id: AppId) => void;
    activeApp: AppId | null;
    openApps: AppId[];
    minimizedApps: AppId[];
}

/**
 * Dock component
 * Centered pill-shaped dock with Deep Indigo theme and Amber accents.
 */
export default function Dock({ onAppClick, activeApp, openApps, minimizedApps }: DockProps) {
    return (
        <div className="max-w-[calc(100vw-2rem)] px-3 py-2 md:py-3 bg-[var(--card)]/80 backdrop-blur-xl border border-[var(--muted)]/10 rounded-3xl flex items-center gap-1 md:gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500 pointer-events-auto overflow-x-auto no-scrollbar">
            {APPS.map((app) => {
                const isActive = activeApp === app.id;
                const isOpen = openApps.includes(app.id);

                return (
                    <button
                        key={app.id}
                        onClick={() => onAppClick(app.id)}
                        className="group relative shrink-0"
                        aria-label={`Open ${app.label}`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, y: -10 }}
                            className={`
                                w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300
                                ${app.id === 'play' ? 'dock-play-badge' : ''}
                                ${isActive ? 'bg-[var(--accent)] text-[var(--background)]' : 'text-[var(--muted)] hover:text-[var(--accent)]'}
                                ${minimizedApps.includes(app.id) ? 'opacity-40 grayscale-[0.5]' : 'opacity-100'}
                            `}
                        >
                            {/* Scale icon based on container size */}
                            <div className="scale-90 md:scale-100">
                                {app.icon}
                            </div>
                        </motion.div>

                        {/* Open indicator dot */}
                        {isOpen && (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--accent)] rounded-full shadow-[0_0_5px_rgba(244,162,97,0.5)]" />
                        )}

                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--card)] text-[10px] font-black uppercase text-[var(--foreground)] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[var(--muted)]/10 whitespace-nowrap">
                            {app.label}
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
