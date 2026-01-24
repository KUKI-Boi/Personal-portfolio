"use client";

import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

/**
 * ContactApp component
 * Displays Likith's professional contact links.
 */
export default function ContactApp() {
    return (
        <div className="max-w-2xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col justify-center py-10">
            <div className="text-center space-y-4 mb-8">
                <h2 className="text-4xl font-bold text-zinc-100 tracking-tight">Let's Connect</h2>
                <p className="text-zinc-500 max-w-sm mx-auto">
                    Interested in working together or just want to chat about engineering and design?
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <a
                    href="mailto:placeholder@example.com"
                    className="group p-6 bg-zinc-800/50 border border-white/5 rounded-2xl flex flex-col items-center gap-4 transition-all hover:bg-zinc-800 hover:border-white/10 shadow-xl"
                >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                        <Mail size={24} />
                    </div>
                    <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-100">Email</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/likith-kumar-b-m-602ba8315/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-zinc-800/50 border border-white/5 rounded-2xl flex flex-col items-center gap-4 transition-all hover:bg-zinc-800 hover:border-white/10 shadow-xl"
                >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-all">
                        <Linkedin size={24} />
                    </div>
                    <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-100">LinkedIn</span>
                </a>

                <a
                    href="https://github.com/placeholder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-zinc-800/50 border border-white/5 rounded-2xl flex flex-col items-center gap-4 transition-all hover:bg-zinc-800 hover:border-white/10 shadow-xl"
                >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-zinc-100 group-hover:border-white/30 transition-all">
                        <Github size={24} />
                    </div>
                    <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-100">GitHub</span>
                </a>
            </div>

            <div className="flex flex-col items-center gap-2 pt-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    <MessageSquare size={12} /> Response time: ~24 hours
                </div>
            </div>
        </div>
    );
}
