"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface WindowProps {
    title: string;
    onClose: () => void;
    onPointerDown?: () => void;
    children: ReactNode;
}

/**
 * Window component
 * macOS-style window inspired by the reference site.
 * Features traffic light buttons and top navigation inside the header.
 */
export default function Window({ title, onClose, onPointerDown, children }: WindowProps) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center pointer-events-none p-4 md:p-12"
            onPointerDown={onPointerDown}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full max-w-5xl max-h-[80vh] glass-window rounded-xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col pointer-events-auto overflow-hidden border border-white/5"
            >
                {/* Window Header */}
                <div className="h-12 bg-black flex items-center justify-between px-4 border-b border-white/5 select-none shrink-0">
                    <div className="flex items-center gap-6">
                        <div className="flex gap-2">
                            <button onClick={onClose} className="btn-red hover:brightness-110 transition-all shadow-[0_0_5px_rgba(255,95,87,0.3)]" />
                            <div className="btn-yellow opacity-50" />
                            <div className="btn-green opacity-50" />
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                                {title}
                            </span>
                        </div>
                    </div>

                    {/* Reference-style Internal Nav */}
                    <div className="hidden md:flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
                        <button className="hover:text-white transition-colors">Experience</button>
                        <button className="hover:text-white transition-colors">Projects</button>
                        <button className="hover:text-white transition-colors">Skills</button>
                        <button className="hover:text-white transition-colors">Contact</button>
                    </div>

                    <div className="w-16" /> {/* Spacer for symmetry */}
                </div>

                {/* Window Content */}
                <div className="flex-1 overflow-y-auto bg-black p-6 md:p-12 text-white">
                    <div className="max-w-4xl mx-auto h-full">
                        {children}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
