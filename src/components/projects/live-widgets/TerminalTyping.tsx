"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, RefreshCw } from "lucide-react";

const LOG_SEQUENCES = [
  "[0.000000] Aegis-Match v2.4 initialized. Memory-mapped L3 Limit Order Book active.",
  "[0.000142] Instrument bound: NSE:NIFTY50 // Pre-allocated 1,000 price ticks",
  "[0.000288] Ingesting FIX 4.4 order flow over low-latency TCP lock-free ring buffer",
  "[0.000412] INCOMING #108422: BUY 250 units @ ₹2,940.50 [LIMIT, IOC]",
  "[0.000620] MATCHED: Order #108422 vs RESTING ASK #108390 (250 units @ ₹2,940.50)",
  "[0.000890] Execution latency: 380ns P99. Ring buffer dispatched to clearinghouse",
  "[0.001150] Risk arbiter check: Margin coverage ratio 1.42x [HEALTHY, OK]",
  "[0.001410] INCOMING #108423: SELL 500 units @ ₹2,941.00 [MAKER, POST-ONLY]",
  "[0.001780] Inserted into Ask ladder Tier-1. Depth updated: Bid ₹2,940.50 / Ask ₹2,941.00",
  "[0.002014] >>> CROSS_MATCH: 100 units matched at mid-spread (Zero slippage)",
  "[0.002340] UDP Multicast: Broadcast market snapshot to 18 market-maker peers",
  "[0.002810] Lock-free atomic sequence counter: committed tx #2,840,119",
  "[0.003190] >>> SLA_CHECK: P99 latency 380ns | P99.9 latency 540ns [PASS]",
  "[0.003600] Zero heap allocations across 4,200,000 processed orders",
  "[0.004120] Daily clearing volume: ₹148.5 Crore settled without reconcile discrepancy",
  "[0.004890] Order buffer health: 100% throughput, zero dropped packets",
];

export function TerminalTyping() {
  const [lines, setLines] = useState<string[]>(LOG_SEQUENCES.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setLines((prev) => {
        const nextLine = LOG_SEQUENCES[currentIndex % LOG_SEQUENCES.length];
        const updated = [...prev, nextLine];
        if (updated.length > 12) {
          return updated.slice(updated.length - 12);
        }
        return updated;
      });
      setCurrentIndex((prev) => prev + 1);
    }, 1100);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleReset = () => {
    setLines(LOG_SEQUENCES.slice(0, 4));
    setCurrentIndex(4);
  };

  return (
    <div className="flex flex-col h-72 sm:h-80 font-mono text-xs select-none">
      {/* Terminal action bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-950/90 border-b border-white/[0.06] text-[10px] text-zinc-400">
        <span className="flex items-center gap-1.5 text-zinc-300">
          <Terminal className="w-3 h-3 text-zinc-400" />
          <span>NSE_L3_MATCHING_ENGINE</span>
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            {isPaused ? "RESUME" : "PAUSE"}
          </button>
          <button
            onClick={handleReset}
            className="p-1 rounded bg-zinc-900 border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Reset Terminal Log"
          >
            <RefreshCw className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output */}
      <div
        ref={scrollRef}
        className="flex-1 p-3.5 overflow-y-auto space-y-1.5 bg-[#05070a]/90 text-zinc-300 text-[11px] leading-relaxed scanlines"
      >
        {lines.map((line, idx) => {
          const isHighlight = line.includes(">>> CROSS_MATCH") || line.includes("MATCHED") || line.includes("SLA_CHECK");
          return (
            <div
              key={`${line}-${idx}`}
              className={`font-mono ${
                isHighlight ? "text-emerald-400 font-semibold" : "text-zinc-400"
              }`}
            >
              <span className="text-zinc-600 select-none mr-1">$</span>
              {line}
            </div>
          );
        })}
        <div className="flex items-center gap-1 text-zinc-500 font-mono pt-1">
          <span className="text-zinc-600 select-none">$</span>
          <span>await_incoming_order_tick()</span>
          <span className="w-2 h-3.5 bg-zinc-300 inline-block animate-pulse ml-1" />
        </div>
      </div>

      {/* Terminal Footer Info */}
      <div className="px-3 py-1.5 bg-zinc-950 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500 font-mono">
        <span>ORDER_RATE: 4.2M/SEC</span>
        <span>LATENCY: 380ns P99</span>
      </div>
    </div>
  );
}
