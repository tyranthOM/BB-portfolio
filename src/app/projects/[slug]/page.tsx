import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioContent, FeaturedProject } from "@/data/content";
import { MockWindow } from "@/components/projects/MockWindow";
import { TerminalTyping } from "@/components/projects/live-widgets/TerminalTyping";
import { PythonRepl } from "@/components/projects/live-widgets/PythonRepl";
import { PipelineDiagram } from "@/components/projects/live-widgets/PipelineDiagram";
import { OscilloscopeWave } from "@/components/projects/live-widgets/OscilloscopeWave";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HairlineGuides } from "@/components/layout/HairlineGuides";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  Layers,
  ChevronRight 
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export async function generateStaticParams() {
  return portfolioContent.projects.featured.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioContent.projects.featured.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found // Om Bhalerao",
    };
  }

  return {
    title: `${project.title} — Case Study // Om Bhalerao`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioContent.projects.featured.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const renderWidget = (type: FeaturedProject["mockWindow"]["type"]) => {
    switch (type) {
      case "terminal":
        return <TerminalTyping />;
      case "repl":
        return <PythonRepl />;
      case "pipeline":
        return <PipelineDiagram />;
      case "oscilloscope":
        return <OscilloscopeWave />;
      default:
        return null;
    }
  };

  const currentIndex = portfolioContent.projects.featured.findIndex((p) => p.slug === slug);
  const nextProject =
    portfolioContent.projects.featured[(currentIndex + 1) % portfolioContent.projects.featured.length];

  return (
    <div className="relative min-h-screen bg-[#05070a] text-[#e6e8eb] flex flex-col font-sans selection:bg-white selection:text-black">
      <HairlineGuides />

      {/* Simplified Top Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between font-mono text-xs">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO WORK INDEX</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden sm:flex items-center gap-2 text-zinc-500">
              <span>SYS_ID:</span>
              <span className="text-zinc-200 uppercase">{project.slug}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-16">
        {/* Title & Metadata Header */}
        <div className="space-y-6 pb-10 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500">
            <span className="px-2.5 py-0.5 rounded bg-white/[0.05] border border-white/10 text-zinc-300">
              {project.category.toUpperCase()}
            </span>
            <span>YEAR: {project.year} // HARDWARE SPEC: VERIFIED</span>
          </div>

          <h1 className="font-mono text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl font-sans leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Stack Pills & Repo Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 font-mono text-xs bg-zinc-900 border border-white/10 text-zinc-200 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white text-black font-semibold rounded-sm hover:bg-zinc-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Live Interactive Widget Showcase */}
        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-xs text-zinc-500">
            <span className="uppercase tracking-wider">
              FIG. 01 // INTERACTIVE SYSTEM EMULATION
            </span>
            <span>LIVE INTERFACE</span>
          </div>
          <MockWindow
            filename={project.mockWindow.filename}
            subtitle={project.mockWindow.subtitle}
          >
            {renderWidget(project.mockWindow.type)}
          </MockWindow>
        </div>

        {/* Key Metrics Benchmarks Grid */}
        <div className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            // TELEMETRY & MEASURED PERFORMANCE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.caseStudy.metrics.map((m) => (
              <div
                key={m.label}
                className="p-5 bg-[#080b10] border border-white/[0.08] rounded-sm space-y-1 font-mono"
              >
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">
                  {m.label}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {m.value}
                </div>
                <p className="text-xs text-zinc-400 font-sans pt-1">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Thesis Card */}
        <div className="p-6 bg-[#080b10] border border-white/[0.08] rounded-sm space-y-3 font-mono text-xs">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold block">
            {project.thesis.headline}
          </span>
          <p className="text-zinc-200 italic text-sm border-l-2 border-zinc-600 pl-4 py-1 leading-relaxed">
            &ldquo;{project.thesis.quote}&rdquo;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.05]">
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase">Friction</span>
              <span className="text-zinc-300 font-sans text-xs">{project.thesis.friction}</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase">Architecture</span>
              <span className="text-zinc-300 font-sans text-xs">{project.thesis.architecture}</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase">Verified Proof</span>
              <span className="text-emerald-400 font-sans text-xs">{project.thesis.proof}</span>
            </div>
          </div>
        </div>

        {/* Problem Statement & Challenge */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>THE ENGINEERING FRICTION & CHALLENGE</span>
          </div>
          <div className="space-y-3 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            {project.caseStudy.problem.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Solution Approach */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>ARCHITECTURAL APPROACH & DESIGN PRINCIPLES</span>
          </div>
          <div className="space-y-3 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            {project.caseStudy.approach.map((a, idx) => (
              <p key={idx}>{a}</p>
            ))}
          </div>
        </div>

        {/* Architectural Breakdown Cards */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <Layers className="w-4 h-4 text-zinc-300" />
            <span>SUBSYSTEM BREAKDOWN</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.caseStudy.architectureBreakdown.map((item) => (
              <div
                key={item.title}
                className="p-5 bg-[#080b10] border border-white/[0.08] rounded-sm space-y-2"
              >
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Verification */}
        <div className="p-6 bg-zinc-950 border border-white/[0.08] rounded-sm space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block font-semibold">
            EMPIRICAL RESULTS & DEPLOYMENT VERIFICATION
          </span>
          <div className="space-y-2 text-sm text-zinc-300 font-sans leading-relaxed">
            {project.caseStudy.result.map((res, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <Link
            href="/#work"
            className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>INDEX OF ALL WORK</span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
          >
            <span>NEXT SYSTEM: {nextProject.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
