"use client";

import React, { useState } from "react";
import { Layers, ArrowRight, Zap, Check } from "lucide-react";

interface PipelineNode {
  id: string;
  name: string;
  stage: string;
  status: "ACTIVE" | "PASS" | "READY";
  metrics: string;
  payload: string;
}

const NODES: PipelineNode[] = [
  {
    id: "01",
    name: "L2 ORDER FEED",
    stage: "INGESTION",
    status: "PASS",
    metrics: "50k ticks/sec",
    payload: "WebSocket Stream: Multicast tick stream from NSE/BSE [50,000 updates/s]",
  },
  {
    id: "02",
    name: "QUANT SIGNALS",
    stage: "CALCULATION",
    status: "PASS",
    metrics: "3.2x SHARPE",
    payload: "Multi-factor statistical model: momentum cross, order imbalance ratio (0.84), EWMA volatility",
  },
  {
    id: "03",
    name: "RISK ARBITER",
    stage: "COMPLIANCE",
    status: "ACTIVE",
    metrics: "VaR: 0.42%",
    payload: "Real-time Value-at-Risk bounds: Max position ₹2.5 Cr; portfolio margin headroom 28.4%",
  },
  {
    id: "04",
    name: "SMART ROUTER",
    stage: "DISPATCH",
    status: "READY",
    metrics: "14ms P99",
    payload: "TWAP/VWAP execution slice: Split order across 3 liquidity pools to minimize market impact",
  },
];

export function PipelineDiagram() {
  const [selectedNode, setSelectedNode] = useState<PipelineNode>(NODES[2]);

  return (
    <div className="flex flex-col h-72 sm:h-80 font-mono text-xs select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-950 border-b border-white/[0.06] text-[10px]">
        <div className="flex items-center gap-2 text-zinc-400">
          <Layers className="w-3.5 h-3.5 text-zinc-300" />
          <span className="text-zinc-200 font-semibold">QUANTITATIVE RISK & ORDER ROUTING DAG</span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>RISK STATUS: NORMAL // LIMITS OK</span>
        </div>
      </div>

      {/* Main Interactive Diagram */}
      <div className="flex-1 p-4 bg-[#05070a]/90 flex flex-col justify-between">
        {/* Horizontal Node Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          {NODES.map((node, idx) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`p-2.5 rounded-sm border transition-all cursor-pointer flex flex-col justify-between relative group ${isSelected
                    ? "border-white/50 bg-white/[0.06] shadow-lg"
                    : "border-white/10 bg-zinc-950/60 hover:border-white/25"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[9px] text-zinc-500 mb-1">
                    <span>STAGE {node.id}</span>
                    {node.status === "PASS" ? (
                      <Check className="w-2.5 h-2.5 text-zinc-400" />
                    ) : node.status === "ACTIVE" ? (
                      <Zap className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    )}
                  </div>
                  <div className="font-semibold text-zinc-200 text-[11px] leading-tight group-hover:text-white">
                    {node.name}
                  </div>
                </div>

                <div className="mt-2 text-[10px] text-zinc-400 font-mono">
                  {node.metrics}
                </div>

                {/* Arrow connector between nodes */}
                {idx < NODES.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-600 pointer-events-none">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Inspector */}
        <div className="mt-3 p-3 bg-zinc-950 border border-white/[0.08] rounded-sm space-y-1">
          <div className="flex items-center justify-between text-[10px] text-zinc-500">
            <span className="uppercase tracking-widest text-zinc-400">
              STAGE {selectedNode.id} // {selectedNode.stage}
            </span>
            <span className="text-zinc-500 font-mono">CLICK ANY STAGE TO INSPECT</span>
          </div>
          <div className="text-[11px] text-zinc-300 font-mono leading-relaxed">
            {selectedNode.payload}
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="px-3 py-1.5 bg-zinc-950 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500 font-mono">
        <span>PORTFOLIO CLUSTER: MULTI-REGION</span>
        <span>MAX SLIPPAGE: &lt;0.02%</span>
      </div>
    </div>
  );
}
