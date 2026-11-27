"use client";

import React, { useState } from "react";
import { FileText, Eye, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

export function ProposalReader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border bg-card mt-6 select-none overflow-hidden">
      {/* Header bar */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-muted/40 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded border border-secondary/30 bg-secondary/10 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-syne font-bold text-sm uppercase text-foreground">
                DBT RESEARCH PROPOSAL — PROJECT X
              </span>
              <span className="mono-tag text-[9px] px-1.5 py-0.5 border border-border bg-background">
                READ-ONLY
              </span>
            </div>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">
              Department of Biotechnology (DBT), Govt. of India · Research Lead: Om Bhalerao
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="font-mono text-xs text-secondary font-bold flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            {isOpen ? "COLLAPSE PAPER" : "READ PROPOSAL PAPER"}
          </span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-secondary" />
          ) : (
            <ChevronDown className="w-4 h-4 text-secondary" />
          )}
        </div>
      </div>

      {/* Reader Panel */}
      {isOpen && (
        <div className="border-t border-border bg-background/95">
          {/* Security notice banner */}
          <div className="px-5 py-2.5 bg-muted/60 border-b border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5 text-foreground font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
              CONFIDENTIAL RESEARCH DOCUMENT · EMBEDDED IN-BROWSER READER
            </span>
            <span className="text-[10px] text-muted-foreground hidden md:inline">
              [ COPY / DOWNLOAD PERMISSIONS RESTRICTED ]
            </span>
          </div>

          {/* Paper Content Display */}
          <div className="p-6 sm:p-10 max-w-3xl mx-auto space-y-10 font-sans text-foreground leading-relaxed">
            {/* Title Block */}
            <div className="text-center pb-8 border-b border-border space-y-2">
              <span className="mono-tag text-xs block mb-1">
                RESEARCH PROPOSAL SUBMITTED TO DEPARTMENT OF BIOTECHNOLOGY (DBT)
              </span>
              <h3 className="font-syne font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-foreground">
                PROJECT X
              </h3>
              <p className="font-playfair italic text-base sm:text-lg text-secondary">
                Restructuring Rural Economics Through Digital Empowerment
              </p>
              <div className="pt-4 text-xs font-mono text-muted-foreground space-y-1">
                <p>
                  <strong>Institution:</strong> Shah &amp; Anchor Kutchhi Engineering College (SAKEC), Mumbai
                </p>
                <p>
                  <strong>Principal Investigator 1:</strong> Dr. Asha Durafe ·{" "}
                  <strong>PI 2:</strong> Ms. SivaNaga Sowjanya Reddy
                </p>
                <p className="text-secondary font-semibold">
                  <strong>Research Lead:</strong> Om Bhalerao
                </p>
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase pt-1">
                  Confidential | Not for Circulation
                </p>
              </div>
            </div>

            {/* 1. Research Plan */}
            <div className="space-y-4">
              <h4 className="font-syne font-bold text-lg uppercase text-foreground border-b border-border pb-2">
                1. Research Plan
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our overall objective is to design and develop a farmer-first AgriTech platform that helps farmers connect directly with buyers, improves price transparency, reduces dependence on intermediaries, and supports fairer agricultural trade. We aim to build a practical and scalable digital system that is not merely a marketplace, but a complete support mechanism covering listing, negotiation, payment, and adoption under real field conditions.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                India&apos;s agricultural system is dominated by intermediaries, resulting in farmers receiving only 20–30% of the final value of their produce. The objective of Project X is to close this gap by creating a farmer-first digital marketplace that connects farmers directly with industrial buyers, ensuring transparency, fair pricing, and improved income.
              </p>

              <div className="p-4 bg-card border border-border space-y-2">
                <span className="mono-tag text-[10px] block">// SPECIFIC AIMS</span>
                <ul className="text-xs space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-mono">1.</span>
                    <span>To develop a dual-portal digital marketplace for farmers and buyers allowing direct listing, discovery, and negotiation of agricultural produce.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-mono">2.</span>
                    <span>To introduce a protected minimum pricing mechanism based on cultivation cost and fair return so farmers are never forced to sell below a safe floor price.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-mono">3.</span>
                    <span>To build a low-bandwidth, mobile-friendly, and multilingual system usable under real rural field connectivity constraints.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-mono">4.</span>
                    <span>To integrate digital payments, transaction tracking, and logistics support so the platform operates under real market conditions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-mono">5.</span>
                    <span>To pilot the platform with farmers and institutional buyers through field-based support and refine the system for wider regional deployment.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Problem Statement */}
            <div className="space-y-4">
              <h4 className="font-syne font-bold text-lg uppercase text-foreground border-b border-border pb-2">
                2. Problem Statement &amp; Middleman Extraction
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                India&apos;s agricultural supply chain has long been dominated by intermediaries — mandis, Aadhatiya traders, and APMC brokers — who stand between the farmer and the end buyer. Small and marginal farmers, who constitute the vast majority of India&apos;s agricultural workforce, have little to no visibility into what companies are actually willing to pay for their produce.
              </p>
              <div className="p-4 border-l-2 border-secondary bg-secondary/10 text-xs font-mono text-foreground space-y-1">
                <p>Traditional Chain: Farmer → Local Broker → Mandi Trader → Wholesaler → Retailer → Consumer</p>
                <p className="text-secondary font-bold">
                  Result: Farmer receives only 20–30% of the final paid value.
                </p>
              </div>
            </div>

            {/* 3. Strategy Statement & Floor Price */}
            <div className="space-y-4">
              <h4 className="font-syne font-bold text-lg uppercase text-foreground border-b border-border pb-2">
                3. Strategy Statement &amp; Protected Minimum Price
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Project X introduces an integrated AI negotiation chatbox. Companies can initiate price negotiations directly with farmers transparently in real time.
              </p>
              <div className="p-4 border border-border bg-card space-y-2">
                <span className="mono-tag text-[10px] block">// CORE INVARIANT: PROTECTED FLOOR PRICE</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  When a farmer lists a crop, they input total cultivation cost (seeds, labour, water, fertiliser). The platform automatically calculates a floor price by adding <strong>20–30%</strong> on top of this investment as fair return. During negotiations, companies <strong>cannot submit or finalise any offer below this floor price</strong>.
                </p>
              </div>
            </div>

            {/* 4. Team Composition */}
            <div className="space-y-4">
              <h4 className="font-syne font-bold text-lg uppercase text-foreground border-b border-border pb-2">
                4. Team Structure &amp; Institutional Resources
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 border border-border bg-card">
                  <span className="text-secondary font-bold block mb-1">Dr. Asha Durafe</span>
                  <span className="text-muted-foreground">Principal Investigator · SAKEC ECS</span>
                </div>
                <div className="p-3 border border-border bg-card">
                  <span className="text-secondary font-bold block mb-1">Ms. S. Sowjanya Reddy</span>
                  <span className="text-muted-foreground">Principal Investigator · SAKEC ECS</span>
                </div>
                <div className="p-3 border border-border bg-card sm:col-span-2">
                  <span className="text-secondary font-bold block mb-1">Om Bhalerao (Research Lead)</span>
                  <span className="text-muted-foreground">
                    Heads 6-member student research team across Platform Development, AI &amp; Intelligent Systems, and Farmer Onboarding &amp; Field Outreach.
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                Institutional Support: SAKEC AICTE IDEA Lab (AICTE Scheme co-funded facility with ₹1.1 crore infrastructure).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
