"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { GithubIcon } from "@/components/ui/SocialIcons";

export function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="py-20 border-b border-border bg-background/50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-border">
          <div>
            <span className="mono-tag block mb-1">[ 01 // SELECTED WORKS ]</span>
            <h2 className="text-3xl sm:text-4xl font-syne font-extrabold uppercase text-foreground">
              FEATURED <span className="font-playfair italic font-normal text-secondary lowercase">products & systems</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-secondary hover:underline"
          >
            ALL PROJECTS ARCHIVE
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col justify-between border border-border bg-card p-6 hover:border-secondary/60 transition-colors shadow-sm"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="mono-tag text-[10px] px-2 py-0.5 border border-border bg-muted/60">
                    {project.tag}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">
                    //{project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-syne font-bold uppercase text-foreground">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>

                {/* One-Line Outcome with Numbers/Impact */}
                <p className="mt-3 text-sm text-foreground font-medium font-sans leading-relaxed">
                  {project.oneLiner}
                </p>

                {/* Key Result Summary */}
                <p className="mt-2 text-xs text-muted-foreground font-sans leading-relaxed">
                  {project.result}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-1.5">
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

              {/* Action Buttons with Project's OWN Links Only */}
              <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-border bg-muted/50 hover:bg-muted text-foreground font-mono text-[11px] font-bold uppercase tracking-wider text-center transition-colors"
                >
                  CASE STUDY
                  <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
                </Link>

                {project.slug === "bridge-it" ? (
                  <Link
                    href={`/projects/${project.slug}#dbt-paper`}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-secondary/40 bg-secondary/15 text-secondary font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-secondary/25 transition-colors text-center"
                    title="Read DBT Research Proposal Paper"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    PAPER
                  </Link>
                ) : (
                  project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-border bg-card text-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-muted transition-colors text-center"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      REPO
                    </a>
                  )
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-primary bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity text-center"
                    title="Open Live Application"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    LIVE
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
