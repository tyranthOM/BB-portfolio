"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { LeadershipSection } from "@/components/experience/ExperienceSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ContactCta } from "@/components/contact/ContactCta";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero: Name, Headline, Ask, and 2 Action Buttons */}
        <Hero />

        {/* 2. 3 Featured Projects: Bridge IT, Cafe La Roche, Aegis-Match */}
        <FeaturedProjects />

        {/* 3. Leadership & Experience Timeline */}
        <LeadershipSection />

        {/* 4. Skills (3 Defensible Groups Only) */}
        <SkillsSection />

        {/* 5. Contact Callout Banner */}
        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
