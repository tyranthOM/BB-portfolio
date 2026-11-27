"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "RESUME", href: "/resume" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-4xl px-4 py-2 rounded-full border border-border backdrop-blur-xl transition-all duration-300 shadow-[0_12px_40px_0_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_0_rgba(0,0,0,0.35)] ${
            scrolled ? "bg-background/85 dark:bg-card/80 py-2" : "bg-background/65 dark:bg-card/60 py-2.5"
          }`}
        >
          {/* Brand Monogram */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-7 h-7 flex items-center justify-center rounded bg-primary text-primary-foreground font-syne font-extrabold text-sm tracking-tighter group-hover:bg-secondary transition-colors">
              O
            </span>
            <span className="font-syne font-extrabold text-xs md:text-sm tracking-wider uppercase text-foreground">
              OM BHALERAO
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-secondary/15 text-secondary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full flex items-center justify-center border border-border text-foreground hover:bg-muted transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden pt-24 px-6 flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            <span className="mono-tag text-muted-foreground mb-2">// DIRECT NAVIGATION</span>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3 rounded-md text-base font-syne font-bold uppercase tracking-wider flex items-center justify-between border ${
                    isActive
                      ? "border-secondary/40 bg-secondary/10 text-secondary"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">→</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 pt-6 border-t border-border flex justify-between items-center text-xs font-mono text-muted-foreground">
            <span>LOCATION: MUMBAI, IN</span>
            <span>SYSTEM READY</span>
          </div>
        </div>
      )}
    </>
  );
}
