"use client";

import React, { useState } from "react";
import { portfolioContent } from "@/data/content";
import { Check, Copy } from "lucide-react";

export function ContactSection() {
  const { personal } = portfolioContent;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      {/* Background Chemical Smoke Glow & Subtle Grid */}
      <div className="contact-smoke" aria-hidden="true" style={{ display: "block" }}></div>

      <div className="container contact-inner">
        <p className="eyebrow">
          <span className="section-number">04 /</span> YOUR NEXT GOOD IDEA STARTS HERE
        </p>

        {/* Breaking Bad Style Title: Let's [Co]ok. */}
        <h2 id="contact-title" aria-label="Let’s cook">
          Let’s{" "}
          <span className="element contact-element">
            <small>27</small>
            <b>Co</b>
            <em>Cobalt</em>
          </span>
          ok.
        </h2>

        <p>
          Got a high-throughput system or venture worth obsessing over?
          <br />
          Let’s build something that scales.
        </p>

        {/* Email Row with Copy Button */}
        <div className="email-row">
          <a className="contact-email" href={`mailto:${personal.email}`}>
            {personal.email} <span>↗</span>
          </a>
          <button
            className="copy-email cursor-pointer"
            onClick={handleCopy}
            type="button"
            aria-label="Copy email address"
            style={{ display: "inline-flex" }}
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#b6d88b]" /> : "⧉"}
          </button>
        </div>

        {/* Social Links Bar */}
        <div className="social-links">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            LINKEDIN <span>↗</span>
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">
            GITHUB <span>↗</span>
          </a>
          <a href={personal.twitter} target="_blank" rel="noopener noreferrer">
            X (TWITTER) <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
