"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Coffee, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/90 border border-white/10 hover:border-white/25 text-xs font-mono transition-all cursor-pointer group ${className}`}
      title={theme === "dark" ? "Switch to Coffee & Off-White UI (☕)" : "Switch to Terminal Dark UI (⚡)"}
    >
      {theme === "dark" ? (
        <>
          <Coffee className="w-3.5 h-3.5 text-amber-300 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] text-amber-200/90 font-medium">Coffee</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-zinc-700 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] text-zinc-800 font-medium">Dark</span>
        </>
      )}
    </button>
  );
}

