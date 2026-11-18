"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { portfolioContent } from "@/data/content";
import { useTheme } from "@/components/theme/ThemeProvider";
import { 
  Command, 
  Search, 
  X, 
  FileText, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Code, 
  User, 
  Briefcase, 
  Cpu, 
  Terminal, 
  Award, 
  Mail,
  Coffee,
  Moon
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: "NAVIGATION" | "PROJECTS" | "ACTIONS" | "EXTERNAL";
  shortcut?: string;
  icon: React.ReactNode;
  perform: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const { theme, toggleTheme, setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
      onClose();
    }, 900);
  };

  const commands: CommandItem[] = useMemo(() => {
    return [
      // Sections
      {
        id: "nav-work",
        title: "Jump to: Featured Projects",
        category: "NAVIGATION",
        icon: <Code className="w-4 h-4 text-zinc-400" />,
        perform: () => {
          router.push("/#work");
          onClose();
        },
      },
      {
        id: "nav-exp",
        title: "Jump to: Experience Timeline",
        category: "NAVIGATION",
        icon: <Briefcase className="w-4 h-4 text-zinc-400" />,
        perform: () => {
          router.push("/#experience");
          onClose();
        },
      },
      {
        id: "nav-skills",
        title: "Jump to: Skills & Architecture",
        category: "NAVIGATION",
        icon: <Cpu className="w-4 h-4 text-zinc-400" />,
        perform: () => {
          router.push("/#skills");
          onClose();
        },
      },
      {
        id: "nav-about",
        title: "Jump to: About & Interests",
        category: "NAVIGATION",
        icon: <User className="w-4 h-4 text-zinc-400" />,
        perform: () => {
          router.push("/#about");
          onClose();
        },
      },
      {
        id: "nav-metrics",
        title: "Jump to: Live Dev Terminal Clock",
        category: "NAVIGATION",
        icon: <Terminal className="w-4 h-4 text-zinc-400" />,
        perform: () => {
          router.push("/#dev-clock");
          onClose();
        },
      },
      {
        id: "nav-benchmarks",
        title: "Jump to: Benchmarks & Badges",
        category: "NAVIGATION",
        icon: <Award className="w-4 h-4 text-zinc-400" />,
        perform: () => {
          router.push("/#benchmarks");
          onClose();
        },
      },
      {
        id: "nav-contact",
        title: "Jump to: Contact Form",
        category: "NAVIGATION",
        icon: <Mail className="w-4 h-4 text-zinc-400" />,
        perform: () => {
          router.push("/#contact");
          onClose();
        },
      },

      // Project Case Studies
      ...portfolioContent.projects.featured.map((proj) => ({
        id: `proj-${proj.slug}`,
        title: `Case Study: ${proj.title} (${proj.category})`,
        category: "PROJECTS" as const,
        icon: <FileText className="w-4 h-4 text-zinc-400" />,
        perform: () => {
          router.push(`/projects/${proj.slug}`);
          onClose();
        },
      })),

      // Actions
      {
        id: "act-toggle-theme",
        title: theme === "dark" ? "Switch Theme: Coffee & Off-White UI (☕)" : "Switch Theme: Terminal Dark (⚡)",
        category: "ACTIONS",
        shortcut: "THEME",
        icon: <Coffee className="w-4 h-4 text-amber-400" />,
        perform: () => {
          toggleTheme();
          onClose();
        },
      },
      {
        id: "act-copy-email",
        title: `Copy Email (${portfolioContent.personal.email})`,
        category: "ACTIONS",
        icon: <Copy className="w-4 h-4 text-zinc-400" />,
        perform: () => copyToClipboard(portfolioContent.personal.email, "Email copied!"),
      },
      {
        id: "act-copy-github",
        title: "Copy GitHub Profile URL",
        category: "ACTIONS",
        icon: <Copy className="w-4 h-4 text-zinc-400" />,
        perform: () => copyToClipboard(portfolioContent.personal.github, "GitHub URL copied!"),
      },
      {
        id: "act-resume",
        title: "View / Download Resume PDF",
        category: "EXTERNAL",
        shortcut: "PDF",
        icon: <ArrowUpRight className="w-4 h-4 text-zinc-400" />,
        perform: () => {
          window.open(portfolioContent.personal.resumeUrl, "_blank");
          onClose();
        },
      },
      {
        id: "act-github-open",
        title: "Open GitHub Profile",
        category: "EXTERNAL",
        shortcut: "↗",
        icon: <ArrowUpRight className="w-4 h-4 text-zinc-400" />,
        perform: () => {
          window.open(portfolioContent.personal.github, "_blank");
          onClose();
        },
      },
    ];
  }, [router, onClose]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const lower = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.title.toLowerCase().includes(lower) ||
        c.category.toLowerCase().includes(lower)
    );
  }, [commands, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-xl bg-[#090c10] border border-white/20 rounded-md shadow-2xl overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-zinc-950/60">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search sections / projects..."
            className="w-full bg-transparent text-zinc-100 placeholder-zinc-500 focus:outline-none text-xs font-mono"
          />
          {copiedText && (
            <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-2 py-0.5 rounded">
              <Check className="w-3 h-3" /> {copiedText}
            </span>
          )}
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-zinc-500 text-xs">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.perform}
                className="w-full text-left flex items-center justify-between px-3 py-2 rounded hover:bg-white/[0.06] text-zinc-300 hover:text-white transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span className="font-mono text-xs">{item.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-600 group-hover:text-zinc-400">
                    {item.category}
                  </span>
                  {item.shortcut && (
                    <kbd className="px-1.5 py-0.5 text-[9px] bg-zinc-800 text-zinc-400 border border-zinc-700 rounded">
                      {item.shortcut}
                    </kbd>
                  )}
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2 bg-zinc-950 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
          <span>Navigation: Click or Enter</span>
          <span className="flex items-center gap-1">
            <Command className="w-3 h-3" /> ESC to dismiss
          </span>
        </div>
      </div>
    </div>
  );
}
