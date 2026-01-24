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
 */
export default function Window({ title, onClose, onPointerDown, children }: WindowProps) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center pointer-events-none p-4 md:p-8"
            onPointerDown={onPointerDown}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                    duration: 0.2
                }}
                className="w-full max-w-4xl max-h-[80vh] bg-zinc-900 border border-white/10 rounded-xl shadow-2xl flex flex-col pointer-events-auto overflow-hidden"
            >
                {/* Window Header / Title Bar */}
                <div className="h-11 bg-zinc-800/80 backdrop-blur-md flex items-center justify-between px-4 border-b border-white/5 select-none">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-zinc-300">{title}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <button
                            aria-label="Minimize"
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-zinc-500 transition-colors"
                        >
                            <Minus size={14} />
                        </button>
                        <button
                            aria-label="Maximize"
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-zinc-500 transition-colors"
                        >
                            <Square size={12} />
                        </button>
                        <button
                            onClick={onClose}
                            aria-label="Close Window"
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-500/20 text-zinc-500 hover:text-red-400 transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {/* Window Content */}
                <div className="flex-1 overflow-y-auto bg-zinc-900/50 p-6 text-zinc-300">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
