"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, Mail, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/projects";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 border-b border-border grid-bg overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Clear Founder-Facing Positioning */}
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/90 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span className="font-mono text-xs font-semibold tracking-wider text-foreground">
                {PERSONAL_INFO.location} · SAKEC MUMBAI
              </span>
            </div>

            {/* Clear, Unobscured Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-syne font-extrabold uppercase tracking-tight text-foreground leading-[1.05]">
              {PERSONAL_INFO.name}
            </h1>

            {/* Headline */}
            <p className="mt-3 font-syne text-xl sm:text-2xl font-bold text-secondary">
              {PERSONAL_INFO.headline}
            </p>

            {/* Tagline */}
            <p className="mt-3 text-base sm:text-lg text-foreground font-medium font-sans">
              &ldquo;{PERSONAL_INFO.tagline}&rdquo;
            </p>

            {/* The One-Line Ask */}
            <div className="mt-4 p-3.5 border-l-2 border-secondary bg-secondary/10 text-foreground font-mono text-xs sm:text-sm font-semibold">
              <span className="text-secondary mr-2">ASK:</span>
              {PERSONAL_INFO.heroAsk}
            </div>

            {/* 2 Buttons Visible Without Scrolling */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.resumePdf}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity border border-primary shadow-sm"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD RESUME
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-card text-foreground font-mono text-xs font-bold uppercase tracking-wider border border-border hover:bg-muted transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4 text-secondary" />
                EMAIL ME
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-muted-foreground hover:text-foreground font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                VIEW WORK <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Professional Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 aspect-[3/4] border-2 border-border bg-card p-2 shadow-2xl">
              <div className="relative w-full h-full overflow-hidden border border-border bg-muted">
                <Image
                  src="/om-portrait.jpg"
                  alt="Om Bhalerao delivering a presentation at SAKEC"
                  fill
                  priority
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-2 border border-border text-center">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-foreground block">
                  OM KUNDALIK BHALERAO
                </span>
                <span className="font-mono text-[9px] text-muted-foreground block">
                  B.Tech ECS · Team Lead & AI Product Builder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
