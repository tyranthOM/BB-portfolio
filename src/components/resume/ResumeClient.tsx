"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  LEADERSHIP_EXPERIENCE,
  PERSONAL_INFO,
  SKILLS_GROUPS,
} from "@/data/projects";
import { Download, CheckCircle2, GraduationCap, Briefcase, Wrench } from "lucide-react";

export function ResumeClient() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-32 pb-24 grid-bg">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-border">
            <div>
              <span className="mono-tag block mb-1">[ CURRICULUM VITAE ]</span>
              <h1 className="text-4xl sm:text-5xl font-syne font-extrabold uppercase text-foreground">
                RESUME
              </h1>
              <p className="mt-2 text-sm text-muted-foreground font-sans">
                Academic standing, technical leadership, and engineering achievements.
              </p>
            </div>

            {/* Download Button */}
            <a
              href={PERSONAL_INFO.resumePdf}
              download
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 border border-primary bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD RESUME PDF
            </a>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="mb-12 border border-border bg-card overflow-hidden">
            <div className="p-3 border-b border-border bg-muted/40 flex items-center justify-between text-xs font-mono">
              <span className="text-foreground font-bold">// EMBEDDED RESUME DOCUMENT</span>
              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                OPEN IN NEW TAB ↗
              </a>
            </div>
            <div className="w-full h-[650px] bg-muted/20">
              <iframe
                src={`${PERSONAL_INFO.resumePdf}#toolbar=0&navpanes=0`}
                className="w-full h-full border-none"
                title="Om Bhalerao Curriculum Vitae PDF"
              />
            </div>
          </div>

          {/* Resume Matching Text Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Experience / Leadership (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <Briefcase className="w-4 h-4 text-secondary" />
                <h2 className="font-syne font-extrabold text-xl uppercase tracking-wider text-foreground">
                  Leadership & Experience
                </h2>
              </div>

              <div className="space-y-6">
                {LEADERSHIP_EXPERIENCE.map((exp, i) => (
                  <div key={i} className="p-6 border border-border bg-card">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <span className="mono-tag text-xs font-semibold">{exp.period}</span>
                      <span className="font-syne font-bold text-xs uppercase text-foreground">
                        {exp.organization}
                      </span>
                    </div>

                    <h3 className="text-lg font-syne font-bold text-foreground">
                      {exp.role}
                    </h3>

                    <ul className="mt-3 space-y-2 border-t border-border pt-3">
                      {exp.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-xs text-muted-foreground font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Skills (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Education */}
              <div>
                <div className="flex items-center gap-2 pb-2 border-b border-border mb-6">
                  <GraduationCap className="w-4 h-4 text-secondary" />
                  <h2 className="font-syne font-extrabold text-xl uppercase tracking-wider text-foreground">
                    Education
                  </h2>
                </div>

                <div className="p-6 border border-border bg-card">
                  <span className="mono-tag text-xs font-semibold block mb-1">
                    {PERSONAL_INFO.education.period}
                  </span>
                  <h3 className="font-syne font-bold text-base uppercase text-foreground">
                    {PERSONAL_INFO.education.degree}
                  </h3>
                  <p className="font-sans text-xs text-secondary font-medium mt-1">
                    {PERSONAL_INFO.education.institution}
                  </p>
                  <div className="mt-3 inline-block px-2.5 py-1 border border-secondary/30 bg-secondary/10 font-mono text-xs font-bold text-secondary">
                    {PERSONAL_INFO.education.cgpa} · {PERSONAL_INFO.education.yearSem}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center gap-2 pb-2 border-b border-border mb-6">
                  <Wrench className="w-4 h-4 text-secondary" />
                  <h2 className="font-syne font-extrabold text-xl uppercase tracking-wider text-foreground">
                    Technical & Product Skills
                  </h2>
                </div>

                <div className="space-y-4">
                  {SKILLS_GROUPS.map((group) => (
                    <div key={group.category} className="p-4 border border-border bg-card">
                      <span className="mono-tag text-[10px] block mb-2">// {group.category}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 border border-border bg-background text-[11px] font-mono text-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
