"use client";

import { ReactNode } from "react";

interface AppIconProps {
    label: string;
    icon: ReactNode;
    onClick: () => void;
}

/**
 * AppIcon component
 * Updated icon with glassmorphism and enhanced hover effects.
 */
export default function AppIcon({ label, icon, onClick }: AppIconProps) {
    return (
        <button
            onClick={onClick}
            aria-label={`Open ${label}`}
            className="app-icon group flex flex-col items-center gap-3 p-5 rounded-3xl transition-all duration-300 hover:bg-white/5 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
            <div className="relative w-20 h-20 glass rounded-3xl flex items-center justify-center border border-white/10 group-hover:border-primary/30 shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 text-zinc-400 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110">
                    {icon}
                </div>

                {/* Surface reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            <span className="text-[11px] font-bold text-zinc-500 group-hover:text-zinc-100 uppercase tracking-[0.2em] transition-all duration-300 text-center w-full">
                {label}
            </span>
        </button>
    );
}
