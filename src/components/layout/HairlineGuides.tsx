"use client";

import React from "react";

export function HairlineGuides() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background dot grid with edge fade */}
      <div className="dot-grid" />

      {/* Centered content column vertical framing hairlines */}
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 relative">
        {/* Left hairline guide */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-6 w-px bg-white/[0.05]" />
        
        {/* Right hairline guide */}
        <div className="absolute top-0 bottom-0 right-4 sm:right-6 w-px bg-white/[0.05]" />

        {/* Crosshair accents at top corners */}
        <div className="absolute top-24 left-4 sm:left-6 -translate-x-1/2 -translate-y-1/2 text-white/20 font-mono text-[9px] select-none">
          +
        </div>
        <div className="absolute top-24 right-4 sm:right-6 translate-x-1/2 -translate-y-1/2 text-white/20 font-mono text-[9px] select-none">
          +
        </div>
      </div>
    </div>
  );
}
