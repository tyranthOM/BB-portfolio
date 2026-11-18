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
    id: "aegis-engine",
    batch: "FORMULA / 001",
    number: "01",
    symbol: "Ae",
    tagline: "SUB-MICROSECOND",
    kicker: "THE SIGNATURE FORMULA",
    title: "Aegis-Match",
    subtitle: "A sub-microsecond limit order book. Built from the elements.",
    description:
      "Ultra-low latency limit order book and price-time priority matching engine built with zero-allocation ring buffers and sub-microsecond fill guarantees in C++20.",
    category: "quant",
    facts: ["v2.4.0", "380ns P99", "C++20 & POSIX"],
    installCmd: "git clone https://github.com/ombhalerao/aegis-engine.git && make benchmark",
    formulaNotes: [
      "Cache-aligned contiguous price-ladder array without pointer indirection",
      "Lock-free intrusive doubly-linked list for each price tier",
      "Vectorized SIMD order evaluation matching buy/sell crosses in 18 clock cycles",
      "Deterministic FIX 4.4 parser operating directly on raw network buffers",
      "Zero-heap allocations inside critical execution loop",
    ],
    note: "Engineered for high-frequency trading and low-latency exchange infrastructure.",
    tags: ["C++20", "POSIX", "FIX 4.4", "Lock-Free", "Market Microstructure"],
    githubUrl: "https://github.com/ombhalerao/aegis-engine",
    slug: "aegis-engine",
    liveUrl: "https://github.com/ombhalerao/aegis-engine#telemetry",
  },
  {
    id: "la-roche-cafe",
    batch: "BATCH / 002",
    number: "02",
    symbol: "Lr",
    tagline: "CAMPUS OPERATION",
    kicker: "A BETTER OPERATION",
    title: "La Roche Cafe",
    subtitle: "A full-stack canteen preorder app & real-time kitchen operations dashboard.",
    description:
      "A digital ordering and counter-pickup platform engineered for our SAKEC campus canteen. Students order ahead, avoid lunchtime congestion, and track orders while staff manage preparation queues in real-time.",
    category: "systems",
    facts: ["PWA", "Live at SAKEC", "WebSockets"],
    installCmd: "git clone https://github.com/ombhalerao/la-roche-cafe.git",
    formulaNotes: [
      "Real-time bidirectional WebSocket event synchronization across kitchen display and client phones",
      "Secure payment processing integration with instant counter token generation",
      "Optimistic UI updates with offline service worker fallback caching",
      "Order batching and kitchen throughput optimization to eliminate queue bottlenecks",
    ],
    note: "Co-created with Ranjeet Epili and Mitansh Jambusariya at SAKEC Mumbai.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Razorpay"],
    githubUrl: "https://github.com/ombhalerao/la-roche-cafe",
    slug: "aegis-engine",
    liveUrl: "https://larochecafe.in",
  },
  {
    id: "krypton-kv",
    batch: "BATCH / 003",
    number: "03",
    symbol: "Kr",
    tagline: "AUDIT LEDGER",
    kicker: "AUDIT COMPLIANT LEDGER",
    title: "Krypton-KV",
    subtitle: "Crash-resilient LSM-tree transactional storage engine for corporate ledgers.",
    description:
      "Engineered for high-velocity financial transaction feeds, double-entry audit compliance, and Write-Ahead Log (WAL) resilience under unexpected power outages.",
    category: "quant",
    facts: ["v1.2.0", "185k ops/s", "Zero Data Loss"],
    installCmd: "git clone https://github.com/ombhalerao/krypton-kv.git && make",
    formulaNotes: [
      "Concurrent SkipList memtable allowing non-blocking reads during write bursts",
      "CRC32-checksummed write-ahead log with fsync durability guarantees",
      "10-bit-per-key Bloom filter eliminating negative disk lookup seeks",
      "Size-tiered background compaction balancing accounts and archiving settled runs",
    ],
    note: "Benchmarked against LevelDB with 18% lower write amplification.",
    tags: ["C++20", "POSIX", "Bloom Filters", "WAL", "Ledger Accounting"],
    githubUrl: "https://github.com/ombhalerao/krypton-kv",
    slug: "krypton-kv",
    liveUrl: "https://github.com/ombhalerao/krypton-kv#benchmarks",
  },
  {
    id: "pulseflow",
    batch: "BATCH / 004",
    number: "04",
    symbol: "Qf",
    tagline: "VOLATILITY OSCILLATOR",
    kicker: "A DIFFERENT KIND OF CHEMISTRY",
    title: "QuantFlow",
    subtitle: "High-rate market analytics & real-time liquidity depth visualizer in WebAssembly.",
    description:
      "Streams tick-level order book depth and rolling volatility surfaces directly to a 120 FPS web canvas. Features Radix-2 FFT spectral estimation and Web Worker data decoupling.",
    category: "systems",
    facts: ["120 FPS", "0.14ms FFT", "WebAssembly"],
    installCmd: "git clone https://github.com/ombhalerao/pulseflow.git && npm install",
    formulaNotes: [
      "C++ statistical volatility kernel compiled to WebAssembly with 128-bit SIMD intrinsics",
      "Lock-free SharedArrayBuffer ring buffer transmitting market ticks from WebSocket workers",
      "Offscreen double-buffered HTML5 canvas rendering bid/ask walls without main-thread jank",
    ],
    note: "Used for backtesting algorithmic order flow and intraday volatility spreads.",
    tags: ["WebAssembly", "C++", "Next.js", "Canvas API", "Financial Time Series"],
    githubUrl: "https://github.com/ombhalerao/pulseflow",
    slug: "pulseflow",
    liveUrl: "https://github.com/ombhalerao/pulseflow#live-demo",
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
    <section className="work-section section-pad" id="work" aria-labelledby="work-title">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-number">01 /</span> SELECTED EXPERIMENTS
            </p>
            <h2 id="work-title">
              The good <em>stuff.</em>
            </h2>
          </div>
          <p className="section-description">
            Formulas taken off the whiteboard.
            <br />
            From matching engines to high-velocity ledgers.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="work-controls">
          <div className="filters" role="group" aria-label="Filter projects">
            <button
              className={`filter ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
            >
              ALL BATCHES <span>04</span>
            </button>
            <button
              className={`filter ${filter === "quant" ? "active" : ""}`}
              onClick={() => setFilter("quant")}
              aria-pressed={filter === "quant"}
            >
              FINTECH &amp; QUANT <span>02</span>
            </button>
            <button
              className={`filter ${filter === "systems" ? "active" : ""}`}
              onClick={() => setFilter("systems")}
              aria-pressed={filter === "systems"}
            >
              DISTRIBUTED SYSTEMS <span>02</span>
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
                  proj.id === "aegis-engine"
                    ? "token-visual"
                    : proj.id === "la-roche-cafe"
                    ? "cafe-visual"
                    : proj.id === "krypton-kv"
                    ? "swap-visual"
                    : "echoes-visual"
                }`}
              >
                <div className="visual-top">
                  <span>{proj.batch}</span>
                  <span>{proj.tagline}</span>
                </div>

                {/* Custom Themed Visual Graphic for Each Project */}
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

                {proj.id === "la-roche-cafe" && (
                  <div className="order-ticket">
                    <span className="ticket-top">LA ROCHE CAFE <i>↗</i></span>
                    <div className="ticket-dash"></div>
                    <small>CAMPUS CANTEEN / ORDER AHEAD</small>
                    <strong>SKIP THE<br />WAIT.</strong>
                    <div className="ticket-status">
                      <span><i></i> ORDER</span>
                      <b>→</b>
                      <span><i></i> PREPARE</span>
                      <b>→</b>
                      <span><i></i> PICK UP</span>
                    </div>
                    <div className="barcode" aria-hidden="true"></div>
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

                {proj.id === "pulseflow" && (
                  <div className="echoes-art">
                    <div className="sound-wave" aria-hidden="true"></div>
                    <span>ORDER-FLOW<br />HAS A <em>PULSE.</em></span>
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
