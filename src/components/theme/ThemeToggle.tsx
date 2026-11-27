"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative w-8 h-8 rounded-full flex items-center justify-center border border-border bg-card/80 hover:bg-muted text-foreground transition-all duration-300 cursor-pointer shadow-sm ${className}`}
      aria-label="Toggle theme"
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} theme`}
    >
      {theme === "light" ? (
        <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-blue-400 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
