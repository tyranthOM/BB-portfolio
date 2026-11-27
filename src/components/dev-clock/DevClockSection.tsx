"use client";

import React, { useState, useEffect } from "react";
import { portfolioContent } from "@/data/content";
import { Timer, Radio, Terminal } from "lucide-react";

interface Uptime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function DevClockSection() {
  const { devClock } = portfolioContent;
  const [uptime, setUptime] = useState<Uptime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const start = new Date(devClock.collegeStartDate).getTime();

    const calculateUptime = () => {
      const now = Date.now();
      const diffMs = Math.max(0, now - start);

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      setUptime({ days, hours, minutes, seconds });
    };

    calculateUptime();
    const timer = setInterval(calculateUptime, 1000);
    return () => clearInterval(timer);
  }, [devClock.collegeStartDate]);

  return (
    <section id="dev-clock" className="w-full py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
              <span className="w-2 h-2 bg-emerald-400 rounded-none animate-pulse" />
              <span>// 05. TELEMETRY & HARDWARE UPTIME</span>
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
              Live Systems Dev Clock
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1 rounded-sm">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>HEARTBEAT OK // SAKEC MUMBAI</span>
          </div>
        </div>

        {/* Big Uptime Instrument Panel */}
        <div className="p-6 sm:p-8 bg-[#080b10] border border-white/10 rounded-sm space-y-8 font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
              <Timer className="w-4 h-4 text-zinc-400" />
              <span>COLLEGE SYSTEMS RUNTIME SINCE AUG 2024</span>
            </div>
            <span className="text-[11px] text-zinc-500">
              FREQ: 1 Hz // PRECISION: SECONDS
            </span>
          </div>

          {/* Time digits grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-zinc-950/80 border border-white/[0.06] rounded-sm">
              <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {String(uptime.days).padStart(3, "0")}
              </div>
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mt-1 block">
                DAYS ELAPSED
              </span>
            </div>

            <div className="p-4 bg-zinc-950/80 border border-white/[0.06] rounded-sm">
              <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {String(uptime.hours).padStart(2, "0")}
              </div>
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mt-1 block">
                HOURS
              </span>
            </div>

            <div className="p-4 bg-zinc-950/80 border border-white/[0.06] rounded-sm">
              <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {String(uptime.minutes).padStart(2, "0")}
              </div>
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mt-1 block">
                MINUTES
              </span>
            </div>

            <div className="p-4 bg-zinc-950/80 border border-white/[0.06] rounded-sm">
              <div className="text-3xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight">
                {String(uptime.seconds).padStart(2, "0")}
              </div>
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mt-1 block">
                SECONDS
              </span>
            </div>
          </div>

          {/* 4 Metric Counters Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
            {devClock.metrics.map((m: any) => (
              <div key={m.label} className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-zinc-100 font-mono">
                    {m.value.toLocaleString()}
                  </span>
                  <span className="text-zinc-400 text-xs font-mono">{m.suffix}</span>
                </div>
                <p className="text-[11px] text-zinc-500 font-mono leading-tight">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

