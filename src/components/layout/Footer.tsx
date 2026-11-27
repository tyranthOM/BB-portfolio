"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/projects";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-14">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Left Brand */}
          <div className="max-w-md">
            <h3 className="font-syne font-extrabold text-2xl uppercase tracking-wider text-foreground">
              {PERSONAL_INFO.name}
            </h3>
            <p className="mt-1 text-xs font-mono uppercase tracking-wider text-secondary font-medium">
              {PERSONAL_INFO.headline}
            </p>
            <p className="mt-2 text-xs font-sans text-muted-foreground">
              {PERSONAL_INFO.aboutText}
            </p>
            <p className="mt-3 font-mono text-[11px] text-muted-foreground italic">
              ☕ &ldquo;{PERSONAL_INFO.funFact}&rdquo;
            </p>
          </div>

          {/* Right Connect Icons & Resume Link */}
          <div>
            <span className="mono-tag block mb-3 md:text-right">[ CONTACT & CHANNELS ]</span>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border bg-background flex items-center justify-center text-foreground hover:border-secondary hover:text-secondary transition-colors"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border bg-background flex items-center justify-center text-foreground hover:border-secondary hover:text-secondary transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 border border-border bg-background flex items-center justify-center text-foreground hover:border-secondary hover:text-secondary transition-colors"
                aria-label="Send Email"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.resumePdf}
                className="px-3 h-10 border border-border bg-background flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-foreground hover:border-secondary hover:text-secondary transition-colors"
                title="View Resume PDF"
              >
                <FileText className="w-3.5 h-3.5 text-secondary" />
                <span>RESUME</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Hairline Bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono text-muted-foreground uppercase">
          <span>© 2026 {PERSONAL_INFO.fullName}. ALL RIGHTS RESERVED.</span>
          <span className="mono-tag text-[10px]">
            [ BUILT FOR FOUNDERS · SAKEC ECS ]
          </span>
        </div>
      </div>
    </footer>
  );
}
