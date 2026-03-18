"use client";

import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

/**
 * ContactApp component
 * Reference-style grid of social links.
 */
export default function ContactApp() {
    const links = [
        { label: "GitHub", icon: <Github size={20} />, href: "https://github.com/KUKI-Boi" },
        { label: "LinkedIn", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/likith-kumar-b-m-602ba8315/" },
        { label: "Email", icon: <Mail size={20} />, href: "mailto:likithkumarbm@gmail.com" },
        { label: "Phone", icon: <Phone size={20} />, href: "#" },
    ];

    return (
        <div className="space-y-10 md:space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4">
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-[var(--foreground)]">Get in Touch</h2>
                <p className="text-[var(--muted)] text-sm font-black uppercase tracking-widest max-w-md mx-auto">
                    Let’s brainstorm, build, and break limits.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {links.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-between p-6 cosmic-glass rounded-2xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="relative flex-1 h-10 overflow-hidden">
                            {/* Icon & Label Group - Slides UP */}
                            <div className={`flex items-center gap-4 h-full transition-all duration-500 ease-in-out ${link.label === "Phone" ? "group-hover:-translate-y-12 group-hover:opacity-0" : ""}`}>
                                <div className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                                    {link.icon}
                                </div>
                                <span className="text-sm font-black uppercase tracking-widest text-[var(--muted)]/60 group-hover:text-[var(--foreground)]">
                                    {link.label}
                                </span>
                            </div>

                            {/* Message Group - Slides UP into the SAME space */}
                            {link.label === "Phone" && (
                                <div className="absolute inset-0 flex items-center transition-all duration-500 ease-in-out translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <div className="flex items-center gap-3">
                                        <div className="text-[var(--accent)] animate-pulse">
                                            {link.icon}
                                        </div>
                                        <span className="text-[11px] md:text-sm font-black italic text-[var(--accent)] whitespace-nowrap tracking-tight">
                                            Signal detected. Calling… not yet.
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Arrow Icon - Hide on Phone hover to give more space */}
                        <div className={`transition-all duration-300 ${link.label === "Phone" ? "group-hover:opacity-0 group-hover:translate-x-4" : ""}`}>
                            <ArrowUpRight size={16} className="text-[var(--muted)]/20 group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                    </a>
                ))}
            </div>

            <div className="text-center pt-8">
                <p className="text-[var(--muted)]/40 text-xs font-black uppercase tracking-widest">
                    Prefer email? <a href="mailto:likithkumarbm@gmail.com" className="text-[var(--accent)] hover:text-[var(--accent-hover)] underline underline-offset-4 px-2">Send me a message</a>
                </p>
            </div>
        </div>
    );
}
