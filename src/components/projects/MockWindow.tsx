"use client";

import React from "react";

interface MockWindowProps {
  filename: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function MockWindow({
  filename,
  subtitle,
  children,
  className = "",
}: MockWindowProps) {
  return (
    <div
      className={`w-full bg-[#080b10] border border-white/10 rounded-sm overflow-hidden shadow-2xl flex flex-col font-mono text-xs ${className}`}
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-950 border-b border-white/[0.08] select-none">
        {/* Three Dots in grayscale */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
          <span className="ml-2 font-mono text-[11px] text-zinc-400 font-medium">
            {filename}
          </span>
        </div>

        {/* Subtitle / Status */}
        {subtitle && (
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline">
            {subtitle}
          </span>
        )}
      </div>

      {/* Window Body */}
      <div className="relative flex-1 bg-[#070a0f]">{children}</div>
    </div>
  );
}
