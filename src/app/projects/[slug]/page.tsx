import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found // Om Bhalerao",
    };
  }

  return {
    title: `${project.title} — Case Study // Om Bhalerao`,
    description: project.oneLiner,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-32 pb-24 grid-bg">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            BACK TO ALL PROJECTS
          </Link>

          {/* Header */}
          <div className="pb-8 border-b border-border">
            <div className="flex items-center gap-2 mb-3">
              <span className="mono-tag text-xs px-2 py-0.5 border border-border bg-card">
                {project.tag}
              </span>
              <span className="font-mono text-xs text-muted-foreground uppercase">
                //{project.category}
              </span>
              <span className="font-mono text-xs text-muted-foreground ml-auto">
                {project.dates}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-syne font-extrabold uppercase text-foreground">
              {project.title}
            </h1>

            <p className="mt-4 text-lg text-foreground font-medium font-sans leading-relaxed">
              &ldquo;{project.oneLiner}&rdquo;
            </p>

            {project.framing && (
              <p className="mt-2 text-xs font-mono text-secondary font-semibold">
                // {project.framing}
              </p>
            )}

            {/* Direct Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-card text-foreground font-mono text-xs font-bold uppercase hover:bg-muted transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  PROJECT REPOSITORY
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-primary bg-primary text-primary-foreground font-mono text-xs font-bold uppercase hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  LIVE APPLICATION
                </a>
              )}
            </div>
          </div>

          {/* Structured Founder-Focused Case Study Format: Problem, Users, My Role, Key Decisions, Result */}
          <div className="py-10 space-y-10 border-b border-border">
            {/* 1. Problem */}
            <div>
              <span className="mono-tag block mb-2">[ 01 // THE PROBLEM ]</span>
              <h2 className="text-xl font-syne font-bold uppercase text-foreground mb-3">
                Operational Inefficiency & Bottleneck
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 2. My Role */}
            <div>
              <span className="mono-tag block mb-2">[ 02 // MY ROLE & LEADERSHIP ]</span>
              <h2 className="text-xl font-syne font-bold uppercase text-foreground mb-3">
                Ownership & Coordination
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                {project.role}
              </p>
            </div>

            {/* 3. Solution */}
            <div>
              <span className="mono-tag block mb-2">[ 03 // ARCHITECTURE & SOLUTION ]</span>
              <h2 className="text-xl font-syne font-bold uppercase text-foreground mb-3">
                Engineering Approach
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* 4. Key Decisions (if present) */}
            {project.keyDecisions && (
              <div>
                <span className="mono-tag block mb-2">[ 04 // KEY DECISIONS & INVARIANTS ]</span>
                <h2 className="text-xl font-syne font-bold uppercase text-foreground mb-3">
                  Strategic Product Choices
                </h2>
                <div className="p-4 border-l-2 border-secondary bg-secondary/10">
                  <p className="text-sm text-foreground font-sans leading-relaxed">
                    {project.keyDecisions}
                  </p>
                </div>
              </div>
            )}

            {/* 5. Result */}
            <div>
              <span className="mono-tag block mb-2">[ 05 // OUTCOME & MEASURED IMPACT ]</span>
              <h2 className="text-xl font-syne font-bold uppercase text-foreground mb-3">
                Verified Result
              </h2>
              <div className="flex items-start gap-3 p-4 border border-border bg-card">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium font-sans leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <span className="mono-tag block mb-3">[ TECHNOLOGIES USED ]</span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 border border-border bg-card font-mono text-xs text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
