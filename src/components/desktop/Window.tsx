"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Minus, Square, X } from "lucide-react";

interface WindowProps {
    title: string;
    onClose: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
    onPointerDown?: () => void;
    children: ReactNode;
    isMaximized?: boolean;
    immersive?: boolean;
}

/**
 * Window component
 * Windows-style window with functional Minimize, Maximize, and Close buttons.
 */
export default function Window({
    title,
    onClose,
    onMinimize,
    onMaximize,
    onPointerDown,
    children,
    isMaximized = false,
    immersive = false
}: WindowProps) {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center pointer-events-none z-50 transition-all duration-300 ${isMaximized || immersive ? 'p-0' : 'p-4 md:p-12'} ${immersive ? 'z-[100]' : ''}`}
            onPointerDown={onPointerDown}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    width: isMaximized || immersive ? "100%" : "auto",
                    height: isMaximized || immersive ? "100%" : "auto"
                }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`w-full bg-[var(--background)] shadow-[0_20px_70px_rgba(0,0,0,0.6)] flex flex-col pointer-events-auto overflow-hidden transition-all duration-500 
                    ${isMaximized || immersive ? 'max-w-none max-h-none h-screen rounded-none border-none' : 'max-w-5xl max-h-[85vh] rounded-lg border border-[var(--muted)]/20'}`}
            >
                {/* Window Header */}
                {!immersive && (
                    <div className="h-10 bg-[var(--card)] flex items-center justify-between px-4 border-b border-[var(--muted)]/10 select-none shrink-0 transition-colors duration-500">
                        <div className="flex items-center gap-3">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)] transition-colors duration-500">
                                {title}
                            </span>
                        </div>

                        <div className="flex items-center cosmic-glass rounded-full px-2 py-1 gap-1 border border-[var(--muted)]/10">
                            <motion.button
                                onClick={onMinimize}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="h-7 w-8 flex items-center justify-center cosmic-button"
                            >
                                <Minus size={12} strokeWidth={2.5} />
                            </motion.button>
                            <motion.button
                                onClick={onMaximize}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="h-7 w-8 flex items-center justify-center cosmic-button"
                            >
                                <Square size={10} strokeWidth={2.5} />
                            </motion.button>
                            <motion.button
                                onClick={onClose}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="h-7 w-8 flex items-center justify-center cosmic-button group/close"
                            >
                                <X size={14} strokeWidth={2.5} className="group-hover/close:text-red-400 transition-colors" />
                            </motion.button>
                        </div>
                    </div>
                )}

                {/* Window Content */}
                <div className={`flex-1 overflow-y-auto bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500 ${immersive ? 'p-0' : 'p-6 md:p-12'}`}>
                    <div className={`${immersive ? 'max-w-none' : 'max-w-4xl'} mx-auto h-full`}>
                        {children}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
