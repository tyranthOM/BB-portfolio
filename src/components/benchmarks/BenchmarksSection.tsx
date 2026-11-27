"use client";

import React from "react";
import { portfolioContent } from "@/data/content";
import { Award, ShieldCheck, Flame, Star } from "lucide-react";

export function BenchmarksSection() {
  const { benchmarks } = portfolioContent;

  return (
    <section id="benchmarks" className="w-full py-16 sm:py-24 border-b border-white/[0.08] bg-[#06080d]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
              <span className="w-2 h-2 bg-white rounded-none" />
              <span>// 06. VERIFIED PERFORMANCE</span>
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
              Benchmarks & Proof of Work
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 max-w-sm">
            Objective metrics, competitive problem solving, honors, and verified engineering achievements.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benchmarks.map((bm: any) => (
            <div
              key={bm.id}
              className={`p-6 bg-[#080b10] border rounded-sm flex flex-col justify-between space-y-4 transition-all hover:border-white/30 ${
                bm.rarity === "LEGENDARY"
                  ? "border-amber-500/30 bg-gradient-to-br from-[#0c0d12] via-[#080b10] to-[#120f0a]"
                  : "border-white/[0.08]"
              }`}
            >
              {/* Top Row: Category, Rarity Badge */}
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-500 uppercase tracking-widest text-[10px]">
                  {bm.category} // {bm.issuer}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                    bm.rarity === "LEGENDARY"
                      ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                      : "bg-zinc-800 text-zinc-300 border border-white/10"
                  }`}
                >
                  {bm.rarity === "LEGENDARY" ? (
                    <Flame className="w-3 h-3 text-amber-400" />
                  ) : (
                    <Star className="w-3 h-3 text-zinc-400" />
                  )}
                  {bm.rarity}
                </span>
              </div>

              {/* Title & Metric */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white tracking-tight">
                  {bm.metric}
                </div>
                <h3 className="font-mono text-base font-bold text-zinc-200">
                  {bm.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed pt-1">
                  {bm.subtext}
                </p>
              </div>

              {/* Tags bar */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                {bm.tags.map((tag: any) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 font-mono text-[10px] bg-zinc-950 text-zinc-400 border border-white/5 rounded-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

