"use client";

import { ReactNode } from "react";
import { X, Minus, Square } from "lucide-react";
import { motion } from "framer-motion";

interface WindowProps {
    title: string;
    onClose: () => void;
    onPointerDown?: () => void;
    children: ReactNode;
}

/**
 * Window component
 * Generic container for content that mimics an OS window.
 * Updated with premium glassmorphism and high-contrast typography.
 */
export default function Window({ title, onClose, onPointerDown, children }: WindowProps) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center pointer-events-none p-4 md:p-8"
            onPointerDown={onPointerDown}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                    duration: 0.3
                }}
                className="w-full max-w-4xl max-h-[85vh] glass rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col pointer-events-auto overflow-hidden border border-white/10"
            >
                {/* Window Header / Title Bar */}
                <div className="h-14 bg-white/[0.03] backdrop-blur-3xl flex items-center justify-between px-6 border-b border-white/5 select-none">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-400/20" />
                        </div>
                        <span className="text-sm font-bold text-zinc-100 tracking-tight uppercase px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                            {title}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/10 text-zinc-400 hover:text-white transition-all">
                            <Minus size={16} />
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/10 text-zinc-400 hover:text-white transition-all">
                            <Square size={14} />
                        </button>
                        <button
                            onClick={onClose}
                            className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-red-500/30 text-zinc-400 hover:text-red-300 transition-all"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Window Content */}
                <div className="flex-1 overflow-y-auto bg-black/5 p-8 text-zinc-200">
                    <div className="max-w-3xl mx-auto h-full">
                        {children}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
