"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NewsItem } from "../../data/newspapers";

interface NewspaperCardProps {
    item: NewsItem;
    isOpen: boolean;
    onClick: () => void;
    onCtaClick?: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export default function NewspaperCard({ item, isOpen, onClick, onCtaClick, isFirst, isLast }: NewspaperCardProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div 
            ref={contentRef}
            className={`border-b border-[#c8b89a]/40 overflow-hidden transition-colors duration-150
                ${isFirst ? "rounded-t-lg" : ""}
                ${isLast ? "rounded-b-lg border-b-0" : ""}
                ${!isOpen ? "hover:bg-[#e8e0cc] cursor-pointer" : ""}
                bg-[#f5f0e8] text-[#1a1a1a]
            `}
            style={{ 
                boxShadow: !isOpen ? "0 2px 4px rgba(0,0,0,0.08)" : "none",
            }}
            onClick={!isOpen ? onClick : undefined}
        >
            {/* Compact Header Bar */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                }}
                aria-expanded={isOpen}
                aria-controls={`news-content-${item.id}`}
                className="w-full flex items-center justify-between px-3 py-2.5 text-left focus:outline-none"
            >
                <div className="flex items-center gap-2 min-w-0">
                    <span className="font-playfair text-[13px] font-bold leading-none truncate">{item.masthead}</span>
                    <span className="font-mono text-[7px] uppercase tracking-wider text-[#888] hidden md:inline shrink-0">
                        {item.dateline}
                    </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[7px] uppercase tracking-wider bg-[#2a2a2a] text-[#f5f0e8] px-1.5 py-0.5 leading-none rounded-sm">
                        {item.tag}
                    </span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#666]"
                    >
                        <ChevronDown size={10} />
                    </motion.div>
                </div>
            </button>

            {/* Unfolding Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`news-content-${item.id}`}
                        role="region"
                        initial={{ height: 0, opacity: 0, scaleY: 0.95 }}
                        animate={{ height: "auto", opacity: 1, scaleY: 1 }}
                        exit={{ height: 0, opacity: 0, scaleY: 0.95 }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ transformOrigin: "top" }}
                    >
                        <div className="px-3 pb-4 pt-1 space-y-2.5">
                            {/* Classic double rule */}
                            <div className="space-y-[1px]">
                                <div className="border-t-[2px] border-double border-[#2a2a2a]" />
                                <div className="border-t border-[#2a2a2a]/30" />
                            </div>

                            <div className="text-center">
                                <span className="text-[10px] text-[#999]">❧</span>
                            </div>

                            {/* Headline */}
                            <h2 className="font-playfair text-[13px] font-bold text-center uppercase leading-snug tracking-tight text-[#111]">
                                {item.headline}
                            </h2>

                            {/* Body */}
                            <p className="text-[11px] text-[#444] leading-relaxed text-center" style={{ fontFamily: 'Georgia, serif' }}>
                                {item.body}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-2 border-t border-[#2a2a2a]/10">
                                {item.cta ? (
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (onCtaClick) {
                                                onCtaClick();
                                            } else {
                                                document.querySelector(item.cta!.href)?.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        className="text-[8px] font-bold uppercase tracking-widest bg-[#2a2a2a] text-[#f5f0e8] px-3 py-1.5 rounded-sm hover:bg-[#111] transition-colors"
                                    >
                                        {item.cta.label}
                                    </button>
                                ) : <div />}
                                <span className="font-mono text-[8px] text-[#999]">
                                    {item.edition}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
