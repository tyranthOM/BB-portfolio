"use client";

import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Activity } from "lucide-react";

export function OscilloscopeWave() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [waveType, setWaveType] = useState<"sine" | "square" | "noise">("sine");
  const [freq, setFreq] = useState<number>(3);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const isCoffee = theme === "coffee";

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Background with decay trail
      ctx.fillStyle = isCoffee ? "rgba(246, 242, 234, 0.45)" : "rgba(5, 7, 10, 0.4)";
      ctx.fillRect(0, 0, width, height);

      // Draw faint oscilloscope grid lines
      ctx.strokeStyle = isCoffee ? "rgba(64, 44, 30, 0.08)" : "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 24;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center crosshair
      ctx.strokeStyle = isCoffee ? "rgba(64, 44, 30, 0.18)" : "rgba(255, 255, 255, 0.1)";
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Draw waveform
      ctx.strokeStyle = isCoffee ? "#a8612c" : "#ffffff";
      ctx.lineWidth = 1.6;
      ctx.shadowBlur = isCoffee ? 4 : 6;
      ctx.shadowColor = isCoffee ? "rgba(168, 97, 44, 0.45)" : "rgba(255, 255, 255, 0.6)";

      ctx.beginPath();
      const centerY = height / 2;
      const amplitude = height * 0.32;

      for (let x = 0; x < width; x++) {
        const t = (x / width) * Math.PI * 2 * freq + phase;
        let y = centerY;

        if (waveType === "sine") {
          y = centerY + Math.sin(t) * amplitude;
        } else if (waveType === "square") {
          y = centerY + (Math.sin(t) >= 0 ? 1 : -1) * amplitude * 0.9;
        } else if (waveType === "noise") {
          y = centerY + (Math.sin(t) * 0.6 + (Math.random() - 0.5) * 0.8) * amplitude;
        }

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      phase += 0.045;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [waveType, freq, theme]);

  return (
    <div className="flex flex-col h-72 sm:h-80 font-mono text-xs select-none">
      {/* Top Wave Controls */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-950 border-b border-white/[0.06] text-[10px]">
        <div className="flex items-center gap-2 text-zinc-400">
          <Activity className="w-3.5 h-3.5 text-zinc-300" />
          <span className="text-zinc-200 font-semibold">MARKET DEPTH &amp; VOLATILITY OSCILLATOR</span>
        </div>

        <div className="flex items-center gap-1.5">
          {[
            { id: "sine", label: "IV Curve" },
            { id: "square", label: "Depth Wall" },
            { id: "noise", label: "Tick Spread" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setWaveType(id as "sine" | "square" | "noise")}
              className={`px-2 py-0.5 rounded text-[9px] transition-colors cursor-pointer ${waveType === id
                  ? "bg-white text-black font-semibold"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-white/10"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Canvas view */}
      <div className="flex-1 relative bg-[#05070a] flex items-center justify-center p-2">
        <canvas
          ref={canvasRef}
          width={400}
          height={180}
          className="w-full h-full object-cover rounded-sm"
        />

        {/* Live overlay badge */}
        <div className="absolute top-3 left-3 bg-zinc-950/80 border border-white/10 px-2 py-0.5 rounded text-[9px] text-zinc-400">
          STREAM: NSE L2 WEBSOCKET // WINDOW: 2048 TICKS
        </div>
      </div>

      {/* Figure Caption requirement */}
      <div className="px-3 py-2 bg-zinc-950 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] text-zinc-500 font-mono">
        <span className="font-semibold text-zinc-400">
          FIG. 01 // REAL-TIME VOLATILITY SURFACE &amp; ORDER-FLOW IMPLICIT SPREAD
        </span>
        <div className="flex items-center gap-2">
          <span>VOLATILITY: {freq * 10}%</span>
          <input
            type="range"
            min={1}
            max={8}
            step={1}
            value={freq}
            onChange={(e) => setFreq(Number(e.target.value))}
            className="w-16 accent-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
