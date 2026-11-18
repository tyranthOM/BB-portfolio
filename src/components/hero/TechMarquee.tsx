"use client";

import React from "react";
import { portfolioContent } from "@/data/content";

export function TechMarquee() {
  const items = portfolioContent.techMarquee;
  // Repeat array twice to create seamless loop
  const doubleItems = [...items, ...items, ...items];

  return (
    <div className="w-full border-y border-white/[0.08] bg-zinc-950/40 py-3 overflow-hidden select-none relative">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#05070a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#05070a] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-6">
        {doubleItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/[0.06] rounded-sm shrink-0 hover:border-white/20 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            <span className="font-mono text-xs font-semibold text-zinc-300 tracking-wide">
              {tech.name}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-600 uppercase">
              [{tech.category}]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
