"use client";

import React from "react";
import Link from "next/link";
import { portfolioContent } from "@/data/content";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export function OtherProjects() {
  const { other } = portfolioContent.projects;

  return (
    <section className="w-full py-14 sm:py-20 border-b border-white/[0.08] bg-[#06080d]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
              <span className="w-1.5 h-1.5 bg-zinc-400" />
              <span>// 02. SECONDARY SYSTEMS & UTILITIES</span>
            </div>
            <h3 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              Archive & Tools Index
            </h3>
          </div>
          <span className="font-mono text-xs text-zinc-500">
            {other.length} financial utilities &amp; distributed tools
          </span>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {other.map((item: any) => (
            <Link
              key={item.title}
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-[#080b10] border border-white/[0.08] hover:border-white/25 rounded-sm transition-all duration-200 flex flex-col justify-between space-y-4 cursor-pointer"
            >
              <div className="space-y-3">
                {/* Header row: Icon, Year, Stars */}
                <div className="flex items-center justify-between text-zinc-400 font-mono text-xs">
                  <div className="flex items-center gap-2 text-zinc-300 group-hover:text-white">
                    <FolderGit2 className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" />
                    <span className="font-semibold text-sm">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.stars && (
                      <span className="text-[11px] text-amber-400/90 font-mono">
                        {item.stars}
                      </span>
                    )}
                    <span className="text-[10px] text-zinc-600 font-mono">
                      {item.year}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                {item.stack?.map((t: any) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 font-mono text-[10px] bg-zinc-900/80 text-zinc-400 border border-white/5 rounded-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

