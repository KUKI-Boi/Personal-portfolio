"use client";

import { useState, useEffect } from "react";
import { AppId, APPS } from "./Desktop";

interface TaskbarProps {
    openApps: AppId[];
    activeApp: AppId | null;
    onAppClick: (id: AppId) => void;
}

/**
 * Taskbar component
 * Bottom navigation bar for the desktop.
 * Shows open apps and system controls.
 * Updated with enhanced contrast and glassmorphism.
 */
export default function Taskbar({ openApps, activeApp, onAppClick }: TaskbarProps) {
    const [time, setTime] = useState<string>("");
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            setDate(now.toLocaleDateString([], { month: '2-digit', day: '2-digit', year: 'numeric' }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-16 w-full glass-dark border-t border-white/5 flex items-center px-6 justify-between relative z-[999] shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-6">
                {/* Start Button */}
                <button
                    aria-label="Start Menu"
                    className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-primary/50"
                >
                    <div className="w-5 h-5 grid grid-cols-2 gap-0.5 group-hover:scale-110 transition-transform">
                        <div className="bg-primary/80 rounded-sm" />
                        <div className="bg-primary/80 rounded-sm opacity-60" />
                        <div className="bg-primary/80 rounded-sm opacity-60" />
                        <div className="bg-primary/80 rounded-sm" />
                    </div>
                </button>

                {/* Separator */}
                <div className="h-8 w-px bg-white/10 mx-2" />

                {/* Open Apps */}
                <div className="flex items-center gap-2">
                    {openApps.map((appId) => {
                        const app = APPS.find(a => a.id === appId);
                        if (!app) return null;

                        const isActive = activeApp === appId;

                        return (
                            <button
                                key={appId}
                                onClick={() => onAppClick(appId)}
                                aria-label={`Switch to ${app.label}`}
                                className={`
                  relative w-11 h-11 rounded-xl flex items-center justify-center transition-all group outline-none
                  ${isActive ? 'bg-white/10 border border-white/10 shadow-lg' : 'hover:bg-white/5 border border-transparent'}
                  focus-visible:ring-1 focus-visible:ring-primary/50
                `}
                            >
                                <div className={`text-zinc-400 group-hover:text-zinc-100 transition-all ${isActive ? 'text-primary scale-90' : 'group-hover:scale-110'}`}>
                                    {app.icon}
                                </div>

                                {isActive && (
                                    <div className="absolute -bottom-1 w-5 h-0.5 bg-primary rounded-full shadow-[0_0_10px_#4fc3f7]" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Right Side: System Tray */}
            <div className="flex items-center gap-6 text-[11px] font-bold text-zinc-400">
                <div className="flex items-center gap-3">
                    <span className="tracking-widest uppercase text-white/30">Network</span>
                    <div className="flex items-center gap-1">
                        <div className="w-1 h-3 bg-primary rounded-full opacity-30" />
                        <div className="w-1 h-3 bg-primary rounded-full opacity-60" />
                        <div className="w-1 h-3 bg-primary rounded-full lg:block hidden" />
                    </div>
                </div>
                <div className="flex flex-col items-end leading-none min-w-[70px] border-l border-white/10 pl-6 space-y-1">
                    <span className="text-zinc-100 font-mono text-sm tracking-tight">{time}</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">{date}</span>
                </div>
            </div>
        </div>
    );
}
