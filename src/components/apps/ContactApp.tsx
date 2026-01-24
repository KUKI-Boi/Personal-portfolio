"use client";

import { Mail, Globe, Twitter, Github, Linkedin, MapPin } from "lucide-react";

const CONTACT_METHODS = [
    { icon: <Mail size={18} />, label: "Email", value: "contact@likith.dev" },
    { icon: <Globe size={18} />, label: "Website", value: "likith.dev" },
    { icon: <Github size={18} />, label: "GitHub", value: "github.com/KUKI-Boi" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/likith" },
    { icon: <Twitter size={18} />, label: "X / Twitter", value: "@KUKI_Boi" },
    { icon: <MapPin size={18} />, label: "Location", value: "Remote / Global" },
];

/**
 * ContactApp component
 * Displays static contact information in an OS-like directory style.
 */
export default function ContactApp() {
    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-zinc-800/50 border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {CONTACT_METHODS.map((method, index) => (
                            <div key={index} className="flex items-center gap-4 group cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-zinc-200 group-hover:bg-zinc-800 transition-all">
                                    {method.icon}
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider leading-none">
                                        {method.label}
                                    </p>
                                    <p className="text-sm font-medium text-zinc-300">
                                        {method.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 p-4 border-t border-white/5 text-center">
                    <p className="text-xs text-zinc-400">
                        Available for consulting and high-impact engineering roles.
                    </p>
                </div>
            </div>

            <div className="text-center text-sm text-zinc-600">
                Let's build something extraordinary together.
            </div>
        </div>
    );
}
