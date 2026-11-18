"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Command, Coffee, Moon, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Brand with Oxygen 08 Element Tile */}
      <Link href="#home" className="brand" aria-label="Om Bhalerao, home">
        <span className="element brand-element">
          <small>08</small>
          <b>O</b>
        </span>
        <span>
          OM BHALERAO
          <small>QUANT &amp; SYSTEMS ENGINEER</small>
        </span>
      </Link>

      {/* Center Navigation Links */}
      <nav id="main-nav" aria-label="Main navigation" className={mobileMenuOpen ? "active" : ""}>
        <Link href="#work" onClick={() => setMobileMenuOpen(false)}>
          <span>01</span> THE LAB
        </Link>
        <Link href="#about" onClick={() => setMobileMenuOpen(false)}>
          <span>02</span> THE STORY
        </Link>
        <Link href="#formula" onClick={() => setMobileMenuOpen(false)}>
          <span>03</span> THE FORMULA
        </Link>
        <Link href="#contact" className="nav-contact" onClick={() => setMobileMenuOpen(false)}>
          LET’S TALK <span>↗</span>
        </Link>
      </nav>

      {/* Right Controls: Coffee Mode Toggle & Command Palette */}
      <div className="flex items-center gap-2 z-10">
        <button
          onClick={toggleTheme}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-[#162111] border border-[#445b32] hover:border-[#b6d88b] text-[10px] font-mono transition-all cursor-pointer text-[#d4e5bd]"
          title={theme === "dark" ? "Switch to Coffee & Off-White UI (☕)" : "Switch to The Lab Dark UI (⚗️)"}
        >
          {theme === "dark" ? (
            <>
              <Coffee className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">COFFEE</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-[#b6d88b]" />
              <span className="hidden sm:inline">THE LAB</span>
            </>
          )}
        </button>

        <button
          onClick={onOpenCommandPalette}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-[#162111] border border-[#445b32] hover:border-[#b6d88b] text-[10px] font-mono text-[#d4e5bd] transition-all cursor-pointer"
          title="Open Command Menu (⌘K or Ctrl+K)"
        >
          <Command className="w-3 h-3 text-[#b6d88b]" />
          <kbd className="hidden sm:inline text-[9px] bg-[#11190d] px-1 rounded border border-[#2b3a20]">
            ⌘K
          </kbd>
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className="menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-controls="main-nav"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
    </header>
  );
}
