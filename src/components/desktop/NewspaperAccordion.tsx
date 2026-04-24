"use client";

import React, { useState } from "react";
import { NewsItem, NEWSPAPERS } from "../../data/newspapers";
import NewspaperCard from "./NewspaperCard";

/**
 * NewspaperAccordion
 * A stack of 5 vintage newspaper cards that unfold theatricaly.
 * Replaces the "My Life in a Nutshell" section.
 */
interface NewspaperAccordionProps {
    onContactClick?: () => void;
}

export default function NewspaperAccordion({ onContactClick }: NewspaperAccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="w-full space-y-3">
            {/* Section Label */}
            <div className="flex flex-col gap-1">
                <h3 className="text-[#B8B9E6]/40 text-[10px] font-black uppercase tracking-[0.3em]">
                    My Life in a Nutshell
                </h3>
                <div className="h-[1px] w-full bg-white/5" />
            </div>

            {/* Accordion Stack */}
            <div className="rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/5">
                {NEWSPAPERS.map((item, index) => (
                    <NewspaperCard
                        key={item.id}
                        item={item}
                        isOpen={activeIndex === index}
                        isFirst={index === 0}
                        isLast={index === NEWSPAPERS.length - 1}
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        onCtaClick={item.cta ? onContactClick : undefined}
                    />
                ))}
            </div>
        </div>
    );
}
