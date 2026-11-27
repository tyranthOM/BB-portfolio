"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

const TOKENS = [
  "01", "10", "</>", "ptr*", "bool", "db", "git", "bash", "ram", "tcp",
  "esp32", "pcb", "c++", "py", "rs", "io", "wal", "lock", "fifo", "reg",
  "0x7F", "hex", "bit", "sync", "vcc", "gnd", "rx", "tx", "clk", "int"
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  size: number;
  opacity: number;
  alphaSpeed: number;
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(32, Math.floor(width / 40));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.2 - Math.random() * 0.3, // gently drifting upward
        text: TOKENS[Math.floor(Math.random() * TOKENS.length)],
        size: 11 + Math.random() * 3,
        opacity: 0.15 + Math.random() * 0.3,
        alphaSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === "dark" || document.documentElement.classList.contains("dark");
      const baseColor = isDark ? "rgba(148, 163, 184," : "rgba(71, 85, 105,";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.alphaSpeed;

        if (p.opacity > 0.45 || p.opacity < 0.1) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.font = `${p.size}px ui-monospace, SFMono-Regular, Menlo, Monaco, monospace`;
        ctx.fillStyle = `${baseColor} ${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}
