"use client";

import React from "react";
import { portfolioContent } from "@/data/content";

export function SkillsSection() {
  const { skills } = portfolioContent;

  const symbolMap: Record<number, { symbol: string; num: string }> = {
    0: { symbol: "Hf", num: "01" }, // High Frequency / High Throughput
    1: { symbol: "Fs", num: "02" }, // Full Stack
    2: { symbol: "Qm", num: "03" }, // Quantitative Methods
    3: { symbol: "Bs", num: "04" }, // Business Strategy
  };

  return (
    <section className="formula-section section-pad" id="formula" aria-labelledby="formula-title">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-number">03 /</span> THE INGREDIENTS
            </p>
            <h2 id="formula-title">
              Good chemistry.
              <br />
              <em>Better engineering.</em>
            </h2>
          </div>
          <p className="section-description">
            The tools on my bench.
            <br />
            The business acumen that brings them together.
          </p>
        </div>

        {/* Formula Grid */}
        <div className="formula-grid">
          {skills.map((cat, idx) => {
            const sym = symbolMap[idx] || { symbol: "Ex", num: `0${idx + 1}` };
            return (
              <article key={cat.category} className="skill-group">
                <span className="skill-symbol" aria-hidden="true">
                  {sym.symbol}
                  <small>{sym.num}</small>
                </span>
                <div>
                  <h3>{cat.category}</h3>
                  <ul className="tags">
                    {cat.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}

          {/* 5th Skill Group: The Human Element & Leadership */}
          <article className="skill-group">
            <span className="skill-symbol" aria-hidden="true">
              Hu
              <small>05</small>
            </span>
            <div>
              <h3>The Human Element</h3>
              <ul className="tags">
                <li>Cross-Functional Leadership</li>
                <li>Product Roadmapping</li>
                <li>Stakeholder Management</li>
                <li>Technical Writing</li>
                <li>Student Mentorship</li>
                <li>High-Stakes Execution</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
