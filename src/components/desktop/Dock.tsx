"use client";

import { motion } from "framer-motion";
import { AppId, APPS } from "./Desktop";

interface DockProps {
    onAppClick: (id: AppId) => void;
    activeApp: AppId | null;
    openApps: AppId[];
}

/**
 * Dock component
 * Centered pill-shaped dock inspired by macOS and the reference site.
 */
export default function Dock({ onAppClick, activeApp, openApps }: DockProps) {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] px-3 py-3 dock-blur rounded-3xl flex items-center gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {APPS.map((app) => {
                const isActive = activeApp === app.id;
                const isOpen = openApps.includes(app.id);

                return (
                    <button
                        key={app.id}
                        onClick={() => onAppClick(app.id)}
                        className="group relative"
                        aria-label={`Open ${app.label}`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, y: -10 }}
                            className={`
                w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
                ${isActive ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-white'}
              `}
                        >
                            {app.icon}
                        </motion.div>

                        {/* Open indicator dot */}
                        {isOpen && (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]" />
                        )}

                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-[10px] font-black uppercase text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                            {app.label}
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
