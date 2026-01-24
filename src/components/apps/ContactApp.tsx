"use client";

import { Github, Linkedin, Twitter, Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";

/**
 * ContactApp component
 * Reference-style grid of social links.
 */
export default function ContactApp() {
    const links = [
        { label: "GitHub", icon: <Github size={20} />, href: "https://github.com/placeholder" },
        { label: "LinkedIn", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/likith-kumar-b-m-602ba8315/" },
        { label: "Twitter", icon: <Twitter size={20} />, href: "#" },
        { label: "Instagram", icon: <Instagram size={20} />, href: "#" },
        { label: "Email", icon: <Mail size={20} />, href: "mailto:placeholder" },
        { label: "Phone", icon: <Phone size={20} />, href: "#" },
    ];

    return (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4">
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">Get in Touch</h2>
                <p className="text-zinc-500 text-sm font-black uppercase tracking-widest max-w-md mx-auto">
                    I'm always ready to collaborate and build things together!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {links.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-6 bg-zinc-900/30 border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-zinc-500 group-hover:text-red-500 transition-colors">
                                {link.icon}
                            </div>
                            <span className="text-sm font-black uppercase tracking-widest text-zinc-400 group-hover:text-white">
                                {link.label}
                            </span>
                        </div>
                        <ArrowUpRight size={16} className="text-zinc-800 group-hover:text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                ))}
            </div>

            <div className="text-center pt-8">
                <p className="text-zinc-500 text-xs font-black uppercase tracking-widest">
                    Prefer email? <a href="mailto:placeholder" className="text-red-500 hover:text-red-400 underline underline-offset-4 px-2">Send me a message</a>
                </p>
            </div>
        </div>
    );
}
