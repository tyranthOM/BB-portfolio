"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioContent } from "@/data/content";
import { HalftoneCanvas } from "@/components/hero/HalftoneCanvas";
import { Sparkles, Eye, ArrowUpRight } from "lucide-react";

export function AboutSection() {
  const { personal, experience } = portfolioContent;
  const [photoMode, setPhotoMode] = useState<"photo" | "dots">("photo");

  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="container">
        {/* Main 2-Column About Grid */}
        <div className="about-grid">
          {/* Left Column: Narrative Copy */}
          <div className="about-copy">
            <p className="eyebrow">
              <span className="section-number">02 /</span> THE BACKSTORY
            </p>
            <h2 id="about-title">
              Meet the mind
              <br />
              behind the <em>formula.</em>
            </h2>

            <p className="about-intro">
              I’m Om. I like knowing
              <br />
              what makes complex systems tick.
            </p>

            <p>
              I’m a Computer Science student and quantitative systems builder in Mumbai.
              I understand systems by engineering them myself — from sub-microsecond
              matching engines and distributed transactional ledgers to real-world operational platforms like La Roche Cafe.
            </p>

            <p>
              Currently studying Computer Science at Shah &amp; Anchor Kutchhi Engineering
              College (SAKEC), Mumbai. When an architectural challenge catches my curiosity,
              I build my way to an answer.
            </p>

            <div className="about-interest">
              <span>WHAT KEEPS THE LAB RUNNING</span>
              <p>
                Market microstructure &amp; order-book matching · Distributed consensus
                &amp; LSM ledgers · Unit economics &amp; venture models · High-density tactile software design
              </p>
            </div>

            {/* Photo Preview Card with Instant Toggle */}
            <div className="mt-8 p-4 bg-[#141c12] border border-[#2b3a20] rounded-sm">
              <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-[#a6ac9c]">
                <span>LAB SPECIMEN // PORTRAIT RECORD</span>
                <button
                  type="button"
                  onClick={() => setPhotoMode(photoMode === "photo" ? "dots" : "photo")}
                  className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1c2917] border border-[#3e562f] hover:border-[#b6d88b] text-[#d4e5bd] text-[9px] cursor-pointer"
                >
                  {photoMode === "photo" ? (
                    <>
                      <Sparkles className="w-3 h-3 text-[#b6d88b]" />
                      <span>Switch to Dot Matrix</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3 h-3 text-[#b6d88b]" />
                      <span>Switch to Real Photo</span>
                    </>
                  )}
                </button>
              </div>

              {photoMode === "photo" ? (
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-[#3e562f]">
                  <Image
                    src={personal.avatarUrl}
                    alt="Om Bhalerao — SAKEC Mumbai"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    className="object-cover filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10150f]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 font-mono text-[9px] text-[#ecebdc] bg-black/60 px-2 py-0.5 rounded">
                    OM BHALERAO // SAKEC MUMBAI
                  </div>
                </div>
              ) : (
                <div className="w-full flex justify-center">
                  <HalftoneCanvas imageSrc={personal.avatarUrl} className="max-w-[320px]" />
                </div>
              )}
            </div>
          </div>

          {/* Right Column: The Official Tilted Dossier */}
          <aside className="dossier" aria-label="Om's education and current work">
            <div className="dossier-top">
              <span>PERSONNEL RECORD</span>
              <span>OB—2026</span>
            </div>

            <div className="dossier-identity">
              <span className="element dossier-element">
                <small>08</small>
                <b>O</b>
                <em>Oxygen</em>
              </span>
              <div>
                <small>SUBJECT</small>
                <h3>Om Bhalerao</h3>
                <span>ELECTRONICS &amp; CS ENGINEER</span>
              </div>
            </div>

            <dl>
              <div>
                <dt>BASE OF OPERATIONS</dt>
                <dd>Mumbai, India</dd>
              </div>
              <div>
                <dt>EDUCATION &amp; STANDING</dt>
                <dd>
                  Electronics &amp; Computer Science @ SAKEC
                  <br />
                  <span>CGPA 8.5 · Start Aug 2025</span>
                </dd>
              </div>
              <div>
                <dt>ACTIVE ROLES</dt>
                <dd>
                  • Database Head, SAKEC Alumni Association
                  <br />
                  • Web App Head, SAKEC Pratishtha&apos;27
                  <br />
                  • Team Lead, Bridge IT
                </dd>
              </div>
              <div>
                <dt>KEY DELIVERABLES</dt>
                <dd>
                  • Bridge IT (Pitched to Biotech-KISAN Hub)
                  <br />
                  • Cafe La Roche (Campus Canteen Pre-order)
                </dd>
              </div>
              <div>
                <dt>COFFEE FUEL</dt>
                <dd>
                  0 black coffees a day. 4 the night before an exam.
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        {/* Timeline: Every Chapter Counts */}
        <div className="mt-20 pt-12 border-t border-[#30382a]">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-number">CHRONOLOGY /</span> FIELD EXPERIENCE
              </p>
              <h3>Every chapter counts.</h3>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item, idx) => (
              <article key={item.organization} className="experience-row">
                <div className="experience-date">
                  {item.dates}
                  <span>0{idx + 1} / {item.type.toUpperCase()}</span>
                </div>
                <div className="experience-body">
                  <h4>{item.role}</h4>
                  <p className="organization">{item.organization}</p>
                  <ul>
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 font-mono text-[9px] bg-[#162111] border border-[#2b3a20] text-[#aeb89b] rounded-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
