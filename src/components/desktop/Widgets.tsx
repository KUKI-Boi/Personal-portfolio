"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, SkipBack, SkipForward } from "lucide-react";

/**
 * CalendarWidget
 * Simple reference-style date card.
 */
export function CalendarWidget() {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <div className="w-32 h-40 bg-[#25295A]/60 backdrop-blur-xl border border-[#B8B9E6]/10 rounded-3xl flex flex-col items-center justify-center opacity-0" />
    );

    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'short' });
    const month = now.toLocaleDateString('en-US', { month: 'short' });
    const date = now.getDate();

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-32 h-40 bg-[#25295A]/60 backdrop-blur-xl border border-[#B8B9E6]/10 rounded-3xl flex flex-col items-center justify-center select-none shadow-2xl"
        >
            <span className="text-[#F4A261] text-[10px] font-black uppercase tracking-widest mb-1">{day} {month}</span>
            <span className="text-5xl font-black text-[#E6E6F0]">{date}</span>
        </motion.div>
    );
}

/**
 * InfoWidget
 * "Life in a Nutshell" style text card.
 */
export function InfoWidget() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="w-64 p-6 bg-[#25295A]/60 backdrop-blur-xl border border-[#B8B9E6]/10 rounded-3xl space-y-4 shadow-2xl"
        >
            <h3 className="text-[#B8B9E6]/40 text-[10px] font-black uppercase tracking-[0.2em]">My Life in a Nutshell</h3>
            <p className="text-[#E6E6F0] text-lg font-black leading-tight">
                &quot;I swear I didn&apos;t use <span className="text-[#F4A261]">AI</span> to build this&quot;
            </p>
        </motion.div>
    );
}

/**
 * MusicWidget
 * Bottom-left floating music player.
 */
export function MusicWidget() {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-24 left-8 w-40 p-4 bg-zinc-900/40 border border-white/5 rounded-3xl flex flex-col items-center gap-4 shadow-2xl select-none"
        >
            <div className="text-center">
                <h4 className="text-white text-[11px] font-black truncate w-full">My Eyes</h4>
                <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Travis Scott</p>
            </div>

            <div className="flex items-center gap-2 text-zinc-400">
                <SkipBack size={14} className="hover:text-white cursor-pointer" />
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-red-500 hover:bg-white/10 cursor-pointer">
                    <Play size={14} fill="currentColor" />
                </div>
                <SkipForward size={14} className="hover:text-white cursor-pointer" />
            </div>

            <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-zinc-600" />
                <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_5px_#fff]" />
                <div className="w-1 h-1 rounded-full bg-zinc-600" />
            </div>
        </motion.div>
    );
}
