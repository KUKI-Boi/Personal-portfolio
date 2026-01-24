"use client";

import { User } from "lucide-react";

/**
 * AboutApp component
 * Displays Likith's bio and professional role.
 */
export default function AboutApp() {
    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8 border-b border-white/5 pb-8">
                <div className="w-24 h-24 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-300 shadow-xl">
                    <User size={48} />
                </div>
                <div className="text-center md:text-left space-y-2">
                    <h1 className="text-3xl font-bold text-zinc-100 tracking-tight">Likith Kumar B M</h1>
                    <p className="text-xl text-zinc-400 font-medium">Frontend Developer | UI/UX Enthusiast | Electronics & Embedded Systems Learner</p>
                </div>
            </div>

            <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
                <p className="font-medium text-zinc-100 border-l-2 border-blue-500 pl-4 py-1 italic">
                    "I build clean, responsive user interfaces and work on practical engineering projects that bridge software, hardware, and real-world impact."
                </p>

                <p>
                    I am a motivated engineering student with a strong interest in frontend development, UI/UX design, and embedded systems. I enjoy transforming ideas into functional, user-friendly solutions—whether it’s a web interface, an automation workflow, or a hardware-software integrated system.
                </p>

                <p>
                    Alongside technical work, I actively participate in volunteering and outreach programs, believing that engineering should create meaningful social impact. I am currently seeking opportunities to grow as a developer and engineer through internships and hands-on projects.
                </p>

                <div className="pt-4 flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <span className="font-bold uppercase tracking-widest text-zinc-500 text-[10px]">Location:</span>
                        <span>India</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-500 italic">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Currently seeking internships and hands-on projects
                    </div>
                </div>
            </div>
        </div>
    );
}
