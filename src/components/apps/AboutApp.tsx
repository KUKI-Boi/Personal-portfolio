"use client";

import { Download, Mail } from "lucide-react";

/**
 * AboutApp component
 * Reference-style minimalist bio.
 */
export default function AboutApp() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Hey, I'm Likith!</h2>
                <p className="text-xl md:text-2xl font-black text-zinc-400 leading-tight">
                    Frontend Developer focused on <span className="text-white">Next.js + design systems</span>
                </p>
            </div>

            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl font-black">
                "I am a motivated engineering student with a strong interest in frontend development, UI/UX design, and embedded systems. I enjoy transforming ideas into functional, user-friendly solutions—whether it’s a web interface, an automation workflow, or a hardware-software integrated system."
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-8">
                <button className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    <Download size={14} /> Download CV
                </button>
                <a href="mailto:placeholder" className="text-zinc-400 hover:text-white transition-colors text-xs font-black flex items-center gap-2">
                    <Mail size={16} /> likith.engineer@example.com
                </a>
            </div>

            <div className="pt-12 border-t border-white/5">
                <p className="text-zinc-600 text-sm font-black italic">
                    Thanks for taking the time to explore my website. I hope you enjoy it as much as I enjoyed developing it!
                </p>
            </div>
        </div>
    );
}
