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
        { label: "Email", icon: <Mail size={20} />, href: "#contact-form" },
        { label: "Phone", icon: <Phone size={20} />, href: "#" },
    ];

    return (
        <div className="pb-32 space-y-10 md:space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
                        href={link.label === "Email" ? "#contact-form" : link.href}
                        target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                        onClick={(e) => {
                            if (link.label === "Email") {
                                e.preventDefault();
                                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
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
                        <div className={`transition-all duration-300 ${link.label === "Phone" || link.label === "Email" ? "group-hover:opacity-0 group-hover:translate-x-4" : ""}`}>
                            <ArrowUpRight size={16} className="text-[var(--muted)]/20 group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                    </a>
                ))}
            </div>

            {/* Direct Email Form */}
            <div id="contact-form" className="pt-8 scroll-mt-8">
                <div className="cosmic-glass p-8 rounded-[30px] shadow-[0_0_50px_rgba(244,162,97,0.05)]">
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-[var(--foreground)] mb-6 text-center">
                        Send a Message
                    </h3>
                    
                    <form 
                        action="https://api.web3forms.com/submit" 
                        method="POST" 
                        className="space-y-4"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const formData = new FormData(form);
                            const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                            const originalText = submitBtn.innerText;
                            
                            submitBtn.innerText = "Sending...";
                            submitBtn.disabled = true;

                            try {
                                const response = await fetch("https://api.web3forms.com/submit", {
                                    method: "POST",
                                    body: formData
                                });
                                const data = await response.json();
                                
                                if (data.success) {
                                    submitBtn.innerText = "Message Sent!";
                                    form.reset();
                                    setTimeout(() => {
                                        submitBtn.innerText = originalText;
                                        submitBtn.disabled = false;
                                    }, 3000);
                                } else {
                                    submitBtn.innerText = "Error!";
                                    setTimeout(() => {
                                        submitBtn.innerText = originalText;
                                        submitBtn.disabled = false;
                                    }, 3000);
                                }
                            } catch (error) {
                                submitBtn.innerText = "Error!";
                                setTimeout(() => {
                                    submitBtn.innerText = originalText;
                                    submitBtn.disabled = false;
                                }, 3000);
                            }
                        }}
                    >
                        <input type="hidden" name="access_key" value="4a6cb5b4-60c6-4136-a032-236ba48207a8" />
                        <input type="hidden" name="subject" value="New Submission from Personal Portfolio" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                placeholder="Your Name" 
                                className="w-full bg-[var(--background)]/50 border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors"
                            />
                            <input 
                                type="email" 
                                name="email" 
                                required 
                                placeholder="Your Email" 
                                className="w-full bg-[var(--background)]/50 border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors"
                            />
                        </div>
                        <textarea 
                            name="message" 
                            required 
                            placeholder="Your Message" 
                            rows={4}
                            className="w-full bg-[var(--background)]/50 border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                        ></textarea>
                        
                        <button 
                            type="submit" 
                            className="w-full cosmic-glass cosmic-button py-4 text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(244,162,97,0.1)] hover:shadow-[0_0_30px_rgba(244,162,97,0.3)] mt-2"
                        >
                            <Mail size={16} className="mr-2 inline-block relative z-10" />
                            <span className="relative z-10">Send Direct Mail</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

