"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Play } from "lucide-react";

const Robot3D = dynamic(() => import("@/components/3d/Robot3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-cyan-400 font-mono text-xs tracking-widest animate-pulse">
      <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      <span>INITIALIZING 360° ROBOTICS CORE...</span>
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] pt-20 sm:pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden cyber-grid">
      {/* Background Radial Light Beams & Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[600px] rounded-full bg-cyan-500/15 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-purple-600/15 blur-[170px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center relative z-20">
        
        {/* 1. 3D ROBOT CENTERPIECE DIRECTLY AT THE VERY TOP */}
        <div className="relative w-full max-w-4xl h-[480px] sm:h-[560px] md:h-[620px] lg:h-[660px]">
          <Robot3D mode="hero" className="w-full h-full" showControls={true} />
        </div>

        {/* 2. DIRECTLY UNDER THE 3D ROBOT: ONLY THE TWO OPTIONS (BUTTONS) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mt-2">
          <Link
            href="/portal"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 hover:from-cyan-400 hover:to-cyan-200 text-slate-950 font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(0,229,255,0.45)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>LAUNCH HUMORPHICOS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="#solution"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-panel border border-slate-700/50 hover:border-cyan-500/40 text-foreground font-mono text-sm tracking-wider uppercase transition-all hover:bg-cyan-500/5 flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>EXPLORE PLATFORM</span>
          </a>
        </div>

        {/* Subtle Drag & Zoom Hint */}
        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-mono tracking-widest uppercase text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>CLICK & DRAG ROBOT TO ROTATE 360° · SCROLL TO ZOOM</span>
        </div>

      </div>
    </section>
  );
}
