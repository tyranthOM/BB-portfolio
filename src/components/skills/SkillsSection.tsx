"use client";

import React from "react";
import { SKILLS_GROUPS } from "@/data/projects";
import { Users, BrainCircuit, Code2 } from "lucide-react";

export function SkillsSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-4 h-4 text-secondary" />;
      case 1:
        return <BrainCircuit className="w-4 h-4 text-secondary" />;
      default:
        return <Code2 className="w-4 h-4 text-secondary" />;
    }
  };

  return (
    <section className="py-20 border-b border-border bg-background/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-10 pb-4 border-b border-border">
          <span className="mono-tag block mb-1">[ 03 // DEFENSIBLE CAPABILITIES ]</span>
          <h2 className="text-3xl sm:text-4xl font-syne font-extrabold uppercase text-foreground">
            CORE <span className="font-playfair italic font-normal text-secondary lowercase">skills & toolset</span>
          </h2>
          <p className="mt-2 text-xs font-mono text-muted-foreground">
            // Exclusively verified competencies defensible in technical and product founder interviews.
          </p>
        </div>

        {/* 3 Skill Groups Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_GROUPS.map((group, idx) => (
            <div
              key={group.category}
              className="p-6 border border-border bg-card hover:border-secondary/50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                {getIcon(idx)}
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  // {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-border bg-background text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {skill}
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
