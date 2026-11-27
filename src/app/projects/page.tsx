"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PROJECTS, PERSONAL_INFO } from "@/data/projects";
import { ExternalLink, ArrowUpRight, Eye } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"ALL" | "AI" | "WEB" | "SYSTEMS">("ALL");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "ALL") return true;
    if (filter === "AI") return p.category === "AI";
    if (filter === "WEB") return p.category === "Web";
    if (filter === "SYSTEMS") return p.category === "Systems";
    return true;
  });

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-32 pb-24 grid-bg">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-border">
            <div>
              <span className="mono-tag block mb-1">[ PRODUCT & SYSTEMS ARCHIVE ]</span>
              <h1 className="text-4xl sm:text-5xl font-syne font-extrabold uppercase text-foreground">
                PROJECTS
              </h1>
              <p className="mt-2 text-sm text-muted-foreground font-mono">
                Showing: {filter} ({filteredProjects.length} of {PROJECTS.length})
              </p>
            </div>

            {/* Filter Tabs: All / AI / Web / Systems */}
            <div className="mt-6 md:mt-0 flex flex-wrap gap-1 p-1 border border-border bg-card">
              {(["ALL", "AI", "WEB", "SYSTEMS"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    filter === tab
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="flex flex-col justify-between p-6 border border-border bg-card hover:border-secondary/50 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="mono-tag text-[10px] px-2 py-0.5 border border-border bg-muted/60">
                      {project.tag}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase">
                      //{project.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-syne font-bold uppercase text-foreground">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-secondary transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm text-foreground font-medium font-sans leading-relaxed">
                    {project.oneLiner}
                  </p>

                  <p className="mt-2 text-xs text-muted-foreground font-sans leading-relaxed">
                    {project.result}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-5 pt-3 border-t border-border flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono border border-border bg-background text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-border bg-muted/50 hover:bg-muted text-foreground font-mono text-xs font-bold uppercase tracking-wider transition-colors text-center"
                  >
                    CASE STUDY
                    <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
                  </Link>

                  {project.slug === "bridge-it" && (
                    <Link
                      href={`/projects/${project.slug}#dbt-paper`}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-secondary/40 bg-secondary/15 text-secondary font-mono text-xs font-bold uppercase tracking-wider hover:bg-secondary/25 transition-colors text-center"
                      title="Read DBT Research Proposal Paper"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      PAPER
                    </Link>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-primary bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity text-center"
                      title="Live Deployment"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      LIVE
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Earlier hardware work note */}
          <div className="mt-12 p-4 border border-border bg-card text-xs font-mono text-muted-foreground flex items-center justify-between">
            <span>{PERSONAL_INFO.earlierHardwareNote}</span>
            <span className="mono-tag text-[10px] hidden sm:inline">// HARDWARE LABS</span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
