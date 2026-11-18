"use client";

import React from "react";
import Link from "next/link";
import { portfolioContent } from "@/data/content";

export function Hero() {
  const { personal } = portfolioContent;

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      {/* Background Photo & Graduated Shadow (Breaking Bad Lab Truck) */}
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />

      {/* Chemical Molecular Bonds Floating Graphic */}
      <div className="hero-chemistry" aria-hidden="true">
        <span>H</span>
        <span>N</span>
        <span>C</span>
        <i></i>
        <i></i>
        <i></i>
      </div>

      {/* Main Hero Content */}
      <div className="hero-content container">
        <p className="eyebrow">
          <span className="status-dot"></span> MUMBAI, INDIA{" "}
          <span className="eyebrow-rule"></span> ELECTRONICS &amp; COMPUTER SCIENCE
        </p>

        <p className="say-name">Say my name.</p>

        <h1 id="hero-title" aria-label="Om Bhalerao">
          <span className="name-line" aria-hidden="true">
            <span className="element name-element">
              <small>08</small>
              <b>O</b>
              <em>Oxygen</em>
            </span>
            <span>M</span>
          </span>
          <span className="name-line second-line" aria-hidden="true">
            BHALERAO<span className="name-period">.</span>
          </span>
        </h1>

        <p className="hero-role">
          ELECTRONICS &amp; COMPUTER SCIENCE <span>×</span> SYSTEMS &amp; AI
        </p>

        <p className="hero-description">
          A little science. A lot of obsession.
          <br />
          From hardware and robotics to high-throughput platforms and applied machine learning in finance.
        </p>

        <div className="hero-actions">
          <Link className="button button-green" href="#work">
            ENTER THE LAB <span>↗</span>
          </Link>
          <a
            className="text-link"
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB <span>↗</span>
          </a>
        </div>
      </div>

      {/* Corner Caption */}
      <div className="hero-caption">
        <span className="crosshair">+</span>
        <span>
          THE LAB IS WHERE
          <br />
          THE FORMULAS BECOME REAL.
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="hero-bottom container">
        <Link href="#work" className="scroll-cue">
          <span>↓</span> SCROLL TO INVESTIGATE
        </Link>
        <span className="hero-file">
          PERSONAL FILE <b>OB—2026</b>
        </span>
        <span className="hero-coordinate">
          HIGH-FREQUENCY · DISTRIBUTED · FINTECH
        </span>
      </div>
    </section>
  );
}
