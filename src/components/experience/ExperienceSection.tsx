"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LEADERSHIP_EXPERIENCE, PERSONAL_INFO } from "@/data/projects";

export function LeadershipSection() {
  return (
    <section className="py-20 border-b border-border bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-border">
          <div>
            <span className="mono-tag block mb-1">[ 02 // LEADERSHIP & EXPERIENCE ]</span>
            <h2 className="text-3xl sm:text-4xl font-syne font-extrabold uppercase text-foreground">
              PROVEN <span className="font-playfair italic font-normal text-secondary lowercase">track record</span>
            </h2>
          </div>
          <Link
            href="/resume"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-secondary hover:underline"
          >
            VIEW FULL CURRICULUM VITAE
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Timeline Stacked Cards */}
        <div className="space-y-4">
          {LEADERSHIP_EXPERIENCE.map((exp, index) => (
            <div
              key={index}
              className="p-6 border border-border bg-card hover:border-secondary/50 transition-colors shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <span className="mono-tag text-xs font-semibold">{exp.period}</span>
                <span className="font-syne font-bold text-xs uppercase text-foreground">
                  {exp.organization}
                </span>
              </div>

              <h3 className="text-xl font-syne font-bold text-foreground">
                {exp.role}
              </h3>

              <ul className="mt-3 space-y-1.5">
                {exp.bullets.map((bullet, bi) => (
                  <li key={bi} className="text-sm text-muted-foreground font-sans leading-relaxed flex items-start gap-2">
                    <span className="text-secondary font-mono text-xs mt-0.5">▪</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Single-line note for earlier hardware work */}
        <div className="mt-8 p-4 border border-border bg-muted/30 text-xs font-mono text-muted-foreground flex items-center justify-between">
          <span>{PERSONAL_INFO.earlierHardwareNote}</span>
          <span className="mono-tag text-[10px] hidden sm:inline">// HARDWARE ROOTS</span>
        </div>
      </div>
    </section>
  );
}
