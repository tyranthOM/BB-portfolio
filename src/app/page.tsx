"use client";

import React, { useState } from "react";
import { ReadingProgressBar } from "@/components/layout/ReadingProgressBar";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ManifestoStrip } from "@/components/hero/ManifestoStrip";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <>
      {/* 2px Radioactive Green Scroll Progress Bar */}
      <ReadingProgressBar />

      {/* Breaking Bad / The Lab Fixed Header */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Flow */}
      <main id="main">
        {/* Hero Section: Say my name. [O]M BHALERAO. */}
        <Hero />

        {/* Manifesto Strip: No Half Measures */}
        <ManifestoStrip />

        {/* 01 / THE LAB: The good stuff (Selected Experiments) */}
        <FeaturedProjects />

        {/* 02 / THE BACKSTORY: Meet the mind behind the formula & Official Dossier */}
        <AboutSection />

        {/* 03 / THE FORMULA: Good chemistry. Better engineering. */}
        <SkillsSection />

        {/* 04 / CONTACT: Let's [Co]ok. */}
        <ContactSection />
      </main>

      {/* The Lab Footer */}
      <Footer />

      {/* Command Palette (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}
