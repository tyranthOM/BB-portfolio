"use client";

import React, { useState } from "react";
import { Play, RotateCcw, CheckCircle2 } from "lucide-react";

interface Step {
  stepNum: number;
  code: string;
  output: string;
  annotation: string;
  stats: { memtable: string; wal_bytes: string; bloom_matches: string };
}

const REPL_STEPS: Step[] = [
  {
    stepNum: 1,
    code: `>>> ledger.record_entry(debit="AC_TREASURY_CORP", credit="AC_SETTLEMENT_ESCROW", amount_inr=14850000.00)`,
    output: `[WAL] CRC32=0x9A2F8B10 committed to immutable disk journal in 0.12ms
[MemTable] Inserted double-entry balance into SkipList (height=4, count=1,420 entries)`,
    annotation: "Zero-copy transactional insertion preserving debit-credit balance invariant",
    stats: { memtable: "1.42 MB / 4 MB", wal_bytes: "185 KB", bloom_matches: "100%" },
  },
  {
    stepNum: 2,
    code: `>>> ledger.verify_audit_trail(account="AC_SETTLEMENT_ESCROW")`,
    output: `[Bloom] Probe bits: [hash1=34, hash2=108, hash3=892] -> HIT
[MemTable] Cache hit in O(log N) -> Balance: ₹14,850,000.00 (verified in 0.4μs)`,
    annotation: "Bloom filter positive lookup bypassing disk seeks for instant audit verification",
    stats: { memtable: "1.42 MB / 4 MB", wal_bytes: "185 KB", bloom_matches: "100%" },
  },
  {
    stepNum: 3,
    code: `>>> ledger.trigger_settlement_compaction(level=0, target_level=1)`,
    output: `[Compactor] Merging 4 SSTables (L0: 16MB) -> (L1: 15.2MB)
[Compactor] Reconciled 320 settled transactions. Zero delta error.`,
    annotation: "Background k-way merge archiving reconciled ledger runs",
    stats: { memtable: "0.20 MB (Flushed)", wal_bytes: "0 KB (Rotated)", bloom_matches: "99.2%" },
  },
  {
    stepNum: 4,
    code: `>>> ledger.verify_crash_recovery(simulate_datacenter_outage=True)`,
    output: `[Replay] Scanning WAL transaction header from offset 0x000400...
[Replay] 1,420 valid balance transfers recovered. Ledger integrity: 100.00% [PASSED]`,
    annotation: "Crash recovery verified without any corrupted balance records",
    stats: { memtable: "Restored", wal_bytes: "Clean", bloom_matches: "Verified" },
  },
];

export function PythonRepl() {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const activeStep = REPL_STEPS[currentStepIdx];

  const handleNext = () => {
    setCurrentStepIdx((prev) => (prev + 1) % REPL_STEPS.length);
  };

  const handleReset = () => {
    setCurrentStepIdx(0);
  };

  return (
    <div className="flex flex-col h-72 sm:h-80 font-mono text-xs select-none">
      {/* Top REPL controls */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-950 border-b border-white/[0.06] text-[10px]">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="text-zinc-200 font-semibold">Python 3.12 (Krypton-KV Financial REPL)</span>
          <span className="text-zinc-600">//</span>
          <span className="text-zinc-500">
            STEP {activeStep.stepNum} OF {REPL_STEPS.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-zinc-900 border border-white/10 hover:border-white/30 text-zinc-200 hover:text-white transition-colors cursor-pointer"
          >
            <Play className="w-2.5 h-2.5" />
            <span>EXECUTE NEXT</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1 rounded bg-zinc-900 border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Reset REPL"
          >
            <RotateCcw className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>

      {/* REPL interactive body */}
      <div className="flex-1 p-3.5 flex flex-col justify-between bg-[#05070a]/90 space-y-3 overflow-y-auto">
        <div className="space-y-2">
          {/* Code input */}
          <div className="bg-zinc-950/70 p-2.5 border border-white/[0.08] rounded-sm text-zinc-100 font-mono text-[11px] leading-relaxed overflow-x-auto">
            {activeStep.code}
          </div>

          {/* Execution output */}
          <div className="bg-black/50 p-2.5 border-l-2 border-white/20 text-zinc-300 font-mono text-[11px] leading-relaxed whitespace-pre-line">
            {activeStep.output}
          </div>
        </div>

        {/* Live Step Explanation Badge */}
        <div className="flex items-center gap-2 text-[10px] text-zinc-400 bg-white/[0.02] border border-white/[0.05] px-2.5 py-1 rounded-sm">
          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
          <span>{activeStep.annotation}</span>
        </div>
      </div>

      {/* REPL Footer Telemetry Stats */}
      <div className="px-3 py-1.5 bg-zinc-950 border-t border-white/[0.06] grid grid-cols-3 gap-2 text-[10px] font-mono text-zinc-500">
        <div>
          MEMTABLE: <span className="text-zinc-300">{activeStep.stats.memtable}</span>
        </div>
        <div>
          WAL BUFFER: <span className="text-zinc-300">{activeStep.stats.wal_bytes}</span>
        </div>
        <div className="text-right">
          BLOOM ACC: <span className="text-zinc-300">{activeStep.stats.bloom_matches}</span>
        </div>
      </div>
    </div>
  );
}
