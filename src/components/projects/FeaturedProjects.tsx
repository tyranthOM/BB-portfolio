"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check, ArrowUpRight, Terminal, Activity } from "lucide-react";

interface LabProject {
  id: string;
  batch: string;
  number: string;
  symbol: string;
  tagline: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  category: "quant" | "systems";
  facts: string[];
  installCmd: string;
  formulaNotes: string[];
  note?: string;
  tags: string[];
  githubUrl: string;
  slug: string;
  liveUrl?: string;
}

const LAB_PROJECTS: LabProject[] = [
  {
    id: "bridge-it",
    batch: "FORMULA / 001",
    number: "01",
    symbol: "Bi",
    tagline: "FARM TO BOARDROOM",
    kicker: "THE SIGNATURE FORMULA",
    title: "Bridge IT",
    subtitle: "Farm to boardroom. One marketplace, AI doing the haggling.",
    description:
      "A dual-portal AgriTech digital marketplace connecting farmers directly with industrial buyers under the DBT Biotech-KISAN Hub scheme. Features an AI-powered negotiation chatbot enforcing a protected minimum floor price.",
    category: "quant",
    facts: ["Pitched to Biotech-KISAN Hub", "12 Supply Chains Mapped", "6-Person Team"],
    installCmd: "git clone https://github.com/tyranthOM/Bridge-IT.git",
    formulaNotes: [
      "Research proposal submitted under the Biotech-KISAN Hub scheme (DBT, Govt. of India)",
      "Protected minimum price mechanism: floor price calculated from cultivation cost + 20–30% fair return margin enforced as a hard limit during AI-driven negotiations",
      "Dual portals: dedicated farmer-first workflows alongside enterprise buyer discovery & procurement",
      "AI-powered negotiation chatbot, produce listing, and digital payments",
      "Multilingual low-bandwidth support for rural deployment, built and validated by SAKEC ECS student team",
    ],
    note: "Led 6-member student research team across platform dev, research, and field outreach.",
    tags: ["Dual Portals", "AI Negotiation", "Python", "Biotech-KISAN", "SAKEC ECS"],
    githubUrl: "https://github.com/tyranthOM",
    slug: "bridge-it",
    liveUrl: "https://github.com/tyranthOM",
  },
  {
    id: "la-roche-cafe",
    batch: "BATCH / 002",
    number: "02",
    symbol: "Lr",
    tagline: "CAMPUS OPERATION",
    kicker: "A BETTER OPERATION",
    title: "Cafe La Roche",
    subtitle: "Order in lecture. Pick up when it ends.",
    description:
      "A full-stack canteen preorder app & real-time kitchen operations dashboard engineered for SAKEC. Students order ahead, avoid lunchtime congestion, and collect food right when lecture ends.",
    category: "systems",
    facts: ["Prepaid Orders", "Razorpay Live", "College-Email Login Only"],
    installCmd: "git clone https://github.com/tyranthOM/la-roche-cafe.git",
    formulaNotes: [
      "Prepaid orders: order meals during lecture, pick up the instant class dismisses",
      "Strict college-email restricted authentication preventing unverified orders",
      "Live Razorpay online payment gateway integration with instant token generation",
      "Real-time kitchen display synchronization and queue optimization for peak breaks",
      "Deployed live on SAKEC campus network infrastructure",
    ],
    note: "Credits: Om Bhalerao, Ranjeet Epili and Mitansh Jambusariya.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "WebSockets"],
    githubUrl: "https://github.com/tyranthOM",
    slug: "la-roche-cafe",
    liveUrl: "http://121.241.29.115:5050",
  },
  {
    id: "aegis-engine",
    batch: "BATCH / 003",
    number: "03",
    symbol: "Ae",
    tagline: "SUB-MICROSECOND",
    kicker: "THE MATCHING FORMULA",
    title: "Aegis-Match",
    subtitle: "A sub-microsecond limit order book. Built from the elements.",
    description:
      "Ultra-low latency limit order book and price-time priority matching engine built with zero-allocation ring buffers and sub-microsecond fill guarantees in C++20.",
    category: "quant",
    facts: ["v2.4.0", "380ns P99", "C++20 & POSIX"],
    installCmd: "git clone https://github.com/tyranthOM/aegis-engine.git && make benchmark",
    formulaNotes: [
      "Cache-aligned contiguous price-ladder array without pointer indirection",
      "Lock-free intrusive doubly-linked list for each price tier",
      "Vectorized SIMD order evaluation matching buy/sell crosses in 18 clock cycles",
      "Deterministic FIX 4.4 parser operating directly on raw network buffers",
      "Zero-heap allocations inside critical execution loop",
    ],
    note: "Engineered for high-frequency trading and low-latency exchange infrastructure.",
    tags: ["C++20", "POSIX", "FIX 4.4", "Lock-Free", "Market Microstructure"],
    githubUrl: "https://github.com/tyranthOM",
    slug: "aegis-engine",
    liveUrl: "https://github.com/tyranthOM",
  },
  {
    id: "krypton-kv",
    batch: "BATCH / 004",
    number: "04",
    symbol: "Kr",
    tagline: "AUDIT LEDGER",
    kicker: "AUDIT COMPLIANT LEDGER",
    title: "Krypton-KV",
    subtitle: "Crash-resilient LSM-tree transactional storage engine for corporate ledgers.",
    description:
      "Engineered for high-velocity financial transaction feeds, double-entry audit compliance, and Write-Ahead Log (WAL) resilience under unexpected power outages.",
    category: "quant",
    facts: ["v1.2.0", "185k ops/s", "Zero Data Loss"],
    installCmd: "git clone https://github.com/tyranthOM/krypton-kv.git && make",
    formulaNotes: [
      "Concurrent SkipList memtable allowing non-blocking reads during write bursts",
      "CRC32-checksummed write-ahead log with fsync durability guarantees",
      "10-bit-per-key Bloom filter eliminating negative disk lookup seeks",
      "Size-tiered background compaction balancing accounts and archiving settled runs",
    ],
    note: "Benchmarked against LevelDB with 18% lower write amplification.",
    tags: ["C++20", "POSIX", "Bloom Filters", "WAL", "Ledger Accounting"],
    githubUrl: "https://github.com/tyranthOM",
    slug: "krypton-kv",
    liveUrl: "https://github.com/tyranthOM",
  },
];

export function FeaturedProjects() {
  const [filter, setFilter] = useState<"all" | "quant" | "systems">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = LAB_PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const handleCopy = (cmd: string, id: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <section className="projects-section section-pad" id="work" aria-labelledby="work-title">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-number">01 /</span> THE LAB
            </p>
            <h2 id="work-title">
              The good stuff.
              <br />
              <em>The pure product.</em>
            </h2>
          </div>
          <p className="section-description">
            Selected experiments, systems, and platforms.
            <br />
            Built with strict specifications and zero compromises.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="filter-buttons" role="toolbar" aria-label="Filter experiments">
            <button
              onClick={() => setFilter("all")}
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              type="button"
              aria-pressed={filter === "all"}
            >
              ALL BATCHES <span>04</span>
            </button>
            <button
              onClick={() => setFilter("quant")}
              className={`filter-btn ${filter === "quant" ? "active" : ""}`}
              type="button"
              aria-pressed={filter === "quant"}
            >
              AGRITECH &amp; QUANT <span>03</span>
            </button>
            <button
              onClick={() => setFilter("systems")}
              className={`filter-btn ${filter === "systems" ? "active" : ""}`}
              type="button"
              aria-pressed={filter === "systems"}
            >
              WEB &amp; CAMPUS <span>01</span>
            </button>
          </div>
          <span className="results-label" aria-live="polite">
            {filtered.length} experiments on record
          </span>
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {filtered.map((proj, idx) => (
            <article
              key={proj.id}
              className={`project ${idx === 0 ? "project-featured" : "project-small"}`}
            >
              {/* Visual Side */}
              <div
                className={`project-visual ${
                  proj.id === "bridge-it"
                    ? "token-visual"
                    : proj.id === "la-roche-cafe"
                    ? "cafe-visual"
                    : proj.id === "aegis-engine"
                    ? "token-visual"
                    : "swap-visual"
                }`}
              >
                <div className="visual-top">
                  <span>{proj.batch}</span>
                  <span>{proj.tagline}</span>
                </div>

                {/* Custom Themed Visual Graphic for Each Project */}
                {proj.id === "bridge-it" && (
                  <div className="token-art" aria-hidden="true">
                    <div className="orbit orbit-one"></div>
                    <div className="orbit orbit-two"></div>
                    <div className="token-tile">
                      <small>{proj.number}</small>
                      <b>{proj.symbol}</b>
                      <span>{proj.title.toUpperCase()}</span>
                      <em>FARM TO BOARDROOM</em>
                    </div>
                    <span className="orbit-label label-one">BIOTECH-KISAN</span>
                    <span className="orbit-label label-two">AI HAGGLING</span>
                    <span className="orbit-label label-three">12 CHAINS</span>
                  </div>
                )}

                {proj.id === "la-roche-cafe" && (
                  <div className="order-ticket">
                    <span className="ticket-top">CAFE LA ROCHE <i>↗</i></span>
                    <div className="ticket-dash"></div>
                    <small>CAMPUS CANTEEN / PRE-ORDER</small>
                    <strong>ORDER IN<br />LECTURE.</strong>
                    <div className="ticket-status">
                      <span><i></i> PREPAID</span>
                      <b>→</b>
                      <span><i></i> RAZORPAY</span>
                      <b>→</b>
                      <span><i></i> PICK UP</span>
                    </div>
                    <div className="barcode" aria-hidden="true"></div>
                  </div>
                )}

                {proj.id === "aegis-engine" && (
                  <div className="token-art" aria-hidden="true">
                    <div className="orbit orbit-one"></div>
                    <div className="orbit orbit-two"></div>
                    <div className="token-tile">
                      <small>{proj.number}</small>
                      <b>{proj.symbol}</b>
                      <span>{proj.title.toUpperCase()}</span>
                      <em>SUB-MICROSECOND</em>
                    </div>
                    <span className="orbit-label label-one">ORDER BOOK</span>
                    <span className="orbit-label label-two">LOCK-FREE</span>
                    <span className="orbit-label label-three">380ns P99</span>
                  </div>
                )}

                {proj.id === "krypton-kv" && (
                  <div className="document-art" aria-hidden="true">
                    <div className="paper paper-back">
                      <small>RAW_TX.LOG</small>
                      <i></i><i></i><i></i>
                      <span>UNSORTED DEBITS</span>
                    </div>
                    <span className="swap-arrow">↗</span>
                    <div className="paper paper-front">
                      <small>SETTLED.LSM</small>
                      <i></i><i></i><i></i>
                      <span>AUDIT RECONCILED ✓</span>
                    </div>
                  </div>
                )}

                <div className="visual-bottom">
                  <span>{proj.facts[2] || "PRODUCTION"}</span>
                  <span className="mini-dot"></span>
                  <span>OPEN ACCESS</span>
                </div>
              </div>

              {/* Info Side */}
              <div className="project-info">
                <p className="project-kicker">
                  <span className="status-dot"></span> {proj.kicker}
                </p>

                <h3>
                  {proj.title}
                  <span className="project-index">{proj.number}</span>
                </h3>

                <p className="project-subtitle">{proj.subtitle}</p>
                <p>{proj.description}</p>

                {/* Facts bar */}
                <div className="project-facts">
                  {proj.facts.map((fact) => (
                    <span key={fact}>{fact}</span>
                  ))}
                </div>

                {/* Install / Clone Bar */}
                <div className="install">
                  <code>{proj.installCmd}</code>
                  <button
                    onClick={() => handleCopy(proj.installCmd, proj.id)}
                    type="button"
                    aria-label={`Copy ${proj.title} command`}
                    className="cursor-pointer"
                  >
                    {copiedId === proj.id ? (
                      <span className="text-[#b6d88b]">COPIED ✓</span>
                    ) : (
                      <>
                        COPY <span>⧉</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Expandable Case Notes Accordion */}
                <details className="case-notes">
                  <summary>
                    EXAMINE THE FORMULA <span>+</span>
                  </summary>
                  <div>
                    <ul>
                      {proj.formulaNotes.map((note, nIdx) => (
                        <li key={nIdx}>{note}</li>
                      ))}
                    </ul>
                    {proj.note && <p className="note">{proj.note}</p>}
                  </div>
                </details>

                {/* Tags */}
                <ul className="tags pt-2">
                  {proj.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className="project-links pt-4">
                  <Link href={`/projects/${proj.slug}`}>
                    CASE STUDY <span>↗</span>
                  </Link>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB <span>↗</span>
                  </a>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE LINK <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
