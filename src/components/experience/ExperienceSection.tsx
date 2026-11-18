"use client";

import React from "react";
import { portfolioContent } from "@/data/content";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  const { experience } = portfolioContent;

  return (
    <section id="experience" className="w-full py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
              <span className="w-2 h-2 bg-white rounded-none" />
              <span>// 03. ENGINEERING TIMELINE</span>
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
              Experience & Leadership
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 max-w-sm">
            Research appointments, student engineering cells, and open source infrastructure work.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-px before:bg-white/[0.08]">
          {experience.map((item, idx) => (
            <div
              key={`${item.organization}-${idx}`}
              className="relative pl-10 sm:pl-12 group"
            >
              {/* Timeline marker node */}
              <div className="absolute left-2 sm:left-2.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#05070a] border-2 border-zinc-500 group-hover:border-white transition-colors" />

              <div className="p-6 bg-[#080b10] border border-white/[0.08] hover:border-white/20 rounded-sm transition-all space-y-4">
                {/* Header row: Role, Org, Dates */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 border-b border-white/[0.05] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-base sm:text-lg font-bold text-white">
                        {item.role}
                      </span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/10">
                        {item.type}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-zinc-400 mt-1 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                      <span className="text-zinc-200">{item.organization}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{item.dates}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 font-mono text-[10px] bg-zinc-900 border border-white/5 text-zinc-400 rounded-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

