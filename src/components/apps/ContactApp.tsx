"use client";

import { Mail, Github, Linkedin, MessageSquare, ArrowUpRight } from "lucide-react";

/**
 * ContactApp component
 * Minimal, high-impact connection portal.
 */
export default function ContactApp() {
    return (
        <div className="max-w-4xl mx-auto h-full flex flex-col justify-center py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-6 mb-16 select-none">
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Get in <span className="text-accent-cyan">touch.</span></h2>
                <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
                    Open for internship opportunities and collaborative engineering projects starting late 2024.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: <Mail size={32} />, label: "Email", value: "likith@example.com", color: "text-blue-400", href: "mailto:placeholder@example.com" },
                    { icon: <Linkedin size={32} />, label: "LinkedIn", value: "Likith Kumar B M", color: "text-accent-cyan", href: "https://www.linkedin.com/in/likith-kumar-b-m-602ba8315/" },
                    { icon: <Github size={32} />, label: "GitHub", value: "@KUKI-Boi", color: "text-white", href: "https://github.com/placeholder" }
                ].map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        target={item.href.startsWith('http') ? "_blank" : undefined}
                        rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="group relative p-10 bg-white/[0.02] border border-white/5 rounded-[40px] flex flex-col items-center gap-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-2 shadow-2xl"
                    >
                        <div className={`w-20 h-20 rounded-[28px] bg-zinc-900 border border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                            {item.icon}
                        </div>
                        <div className="text-center space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">{item.label}</span>
                            <p className="text-sm font-bold text-zinc-100 group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                                {item.value} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-20 flex flex-col items-center gap-4">
                <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="flex items-center gap-3 px-6 py-3 glass rounded-full text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                    <MessageSquare size={14} /> Global Availability
                </div>
            </div>
        </div>
    );
}
