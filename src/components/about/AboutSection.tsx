"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/content";

export function AboutSection() {
  return (
    <section className="py-24 border-b border-border bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Header & Label */}
          <div className="lg:col-span-5">
            <span className="mono-tag block mb-1">[ 01 // IDENTITY ]</span>
            <h2 className="text-3xl sm:text-4xl font-syne font-extrabold uppercase text-foreground">
              SO <span className="font-playfair italic font-normal text-secondary lowercase">basically...</span>
            </h2>
            <div className="w-16 h-0.5 bg-secondary mt-3 mb-6" />

            <div className="p-4 border border-border bg-card">
              <span className="mono-tag block text-muted-foreground mb-1">// STATUS DOSSIER</span>
              <p className="font-mono text-xs text-foreground">
                B.Tech in Electronics & CS · SAKEC Mumbai
                <br />
                Semester 1 CGPA: <span className="text-secondary font-bold">8.5</span>
                <br />
                Database Head · SAKEC Alumni Association
                <br />
                Web App Head · Pratishtha &apos;27
              </p>
            </div>
          </div>

          {/* Narrative Body */}
          <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground font-sans leading-relaxed">
            <p>
              I am a second-year B.Tech student in Electronics & Computer Science Engineering at Shah & Anchor Kutchhi Engineering College (SAKEC), Mumbai. My work bridges physical computing and scalable web applications — moving smoothly between custom circuit routing, microcontrollers, and low-latency distributed systems.
            </p>
            <p>
              Over the past year, I led the student research curation for <strong className="text-foreground font-medium">Bridge IT</strong>, pitched to the Biotech-KISAN Hub under the Department of Biotechnology (Govt. of India), and architected <strong className="text-foreground font-medium">Cafe La Roche</strong>, an automated cafeteria ordering infrastructure that cut lecture-break queues across campus.
            </p>
            <p>
              Beyond production web apps, I explore quantitative finance primitives like zero-allocation Limit Order Books in C++20 and resilient transactional key-value ledgers with Write-Ahead Logging.
            </p>

            <div className="pt-4">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-secondary hover:underline"
              >
                VIEW FULL CURRICULUM VITAE
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
