"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Sparkles, Eye } from "lucide-react";

interface HalftoneCanvasProps {
  imageSrc?: string;
  className?: string;
}

interface Particle {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  brightness: number;
  radius: number;
  vx: number;
  vy: number;
}

export function HalftoneCanvas({
  imageSrc = "/om.jpg",
  className = "",
}: HalftoneCanvasProps) {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [viewMode, setViewMode] = useState<"dots" | "photo">("dots");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, radius: 75 };

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const width = 420;
      const height = 420;
      canvas.width = width;
      canvas.height = height;

      // Offscreen canvas to downsample and extract luminance
      const offscreen = document.createElement("canvas");
      const sampleSize = 84; // 84x84 sampling grid
      offscreen.width = sampleSize;
      offscreen.height = sampleSize;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, sampleSize, sampleSize);
      const imgData = offCtx.getImageData(0, 0, sampleSize, sampleSize).data;

      const spacingX = width / sampleSize;
      const spacingY = height / sampleSize;
      const centerX = width / 2;
      const centerY = height / 2;
      const maxDist = width * 0.48;

      particles = [];

      for (let y = 0; y < sampleSize; y++) {
        for (let x = 0; x < sampleSize; x++) {
          const index = (y * sampleSize + x) * 4;
          const r = imgData[index];
          const g = imgData[index + 1];
          const b = imgData[index + 2];
          // Perceived luminance
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

          const posX = x * spacingX + spacingX / 2;
          const posY = y * spacingY + spacingY / 2;

          // Radial vignette fade toward edges
          const dx = posX - centerX;
          const dy = posY - centerY;
          const distFromCenter = Math.sqrt(dx * dx + dy * dy);
          const vignette = Math.max(0, 1 - Math.pow(distFromCenter / maxDist, 2.2));

          const finalBrightness = luminance * vignette;

          if (finalBrightness > 0.06) {
            const maxRadius = spacingX * 0.58;
            const radius = Math.max(0.6, finalBrightness * maxRadius);

            particles.push({
              baseX: posX,
              baseY: posY,
              x: posX,
              y: posY,
              brightness: finalBrightness,
              radius,
              vx: 0,
              vy: 0,
            });
          }
        }
      }

      setIsLoaded(true);

      const render = () => {
        const isCoffee = theme === "coffee";
        ctx.fillStyle = isCoffee ? "#f6f2ea" : "#05070a";
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Mouse scatter and glow interaction
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            const pushX = Math.cos(angle) * force * 16;
            const pushY = Math.sin(angle) * force * 16;

            p.x -= pushX * 0.15;
            p.y -= pushY * 0.15;

            if (isCoffee) {
              ctx.fillStyle = `rgba(40, 24, 15, ${Math.min(1, p.brightness + force * 0.5)})`;
            } else {
              ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, p.brightness + force * 0.6)})`;
            }
          } else {
            p.x += (p.baseX - p.x) * 0.1;
            p.y += (p.baseY - p.y) * 0.1;

            if (isCoffee) {
              ctx.fillStyle = `rgba(58, 38, 25, ${Math.max(0.2, p.brightness * 1.1)})`;
            } else {
              ctx.fillStyle = `rgba(235, 238, 242, ${p.brightness * 0.95})`;
            }
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        animationFrameId = requestAnimationFrame(render);
      };

      render();
    };

    img.onerror = () => {
      setLoadError(true);
    };

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouse.x = (mouseEvent.clientX - rect.left) * scaleX;
      mouse.y = (mouseEvent.clientY - rect.top) * scaleY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const targetEl = containerRef.current || canvas;
    targetEl.addEventListener("mousemove", handleMouseMove);
    targetEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      targetEl.removeEventListener("mousemove", handleMouseMove);
      targetEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [imageSrc, theme]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none overflow-hidden group ${className}`}
    >
      {/* Decorative frame border & corner markers */}
      <div className="absolute inset-0 border border-white/[0.08] rounded-sm pointer-events-none z-10">
        <div className="absolute top-1.5 left-2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
          SAMPLING :: 84x84 DOT-MATRIX
        </div>
        <div className="absolute bottom-1.5 right-2 font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
          INTERACTIVE // SCATTER ON HOVER
        </div>
      </div>

      {/* Switch Mode Button: Dot Matrix vs Real Photo */}
      <div className="absolute top-2 right-2 z-20">
        <button
          type="button"
          onClick={() => setViewMode(viewMode === "dots" ? "photo" : "dots")}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 hover:border-white/30 text-[10px] font-mono text-zinc-200 transition-all cursor-pointer shadow-lg"
          title="Toggle between Interactive Halftone Dot Matrix and Crisp Photo"
        >
          {viewMode === "dots" ? (
            <>
              <Eye className="w-3 h-3 text-zinc-400" />
              <span>Real Photo</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Dot Matrix</span>
            </>
          )}
        </button>
      </div>

      {/* Mode 1: Halftone Dot Matrix Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full max-w-[420px] aspect-square object-contain transition-opacity duration-500 ${
          viewMode === "dots" && isLoaded && !loadError ? "opacity-100" : "hidden"
        }`}
      />

      {/* Mode 2: Crisp Original Photo View */}
      {viewMode === "photo" && (
        <div className="relative w-full max-w-[420px] aspect-square overflow-hidden rounded-sm bg-zinc-950 p-2 flex items-center justify-center">
          <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10">
            <Image
              src={imageSrc}
              alt="Om Bhalerao — SAKEC Mumbai"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-115"
            />
            {/* Subtle Vignette overlay */}
            <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />
          </div>
        </div>
      )}

      {/* Static Fallback (shown if canvas has error or while loading) */}
      {viewMode === "dots" && (!isLoaded || loadError) && (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-[380px] aspect-square overflow-hidden rounded-sm filter grayscale contrast-125">
            <Image
              src={imageSrc}
              alt="Om Bhalerao - SAKEC Mumbai"
              fill
              priority
              className="object-cover"
              onError={() => setLoadError(true)}
            />
            <div className="absolute inset-0 bg-radial from-transparent via-[#05070a]/40 to-[#05070a]" />
          </div>
        </div>
      )}
    </div>
  );
}
