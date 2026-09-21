"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles, Terminal, Shield, Play } from "lucide-react";
import HologramHUD from "@/components/3d/HologramHUD";

const Robot3D = dynamic(() => import("@/components/3d/Robot3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-cyan-400 font-mono text-xs tracking-widest animate-pulse">
      INITIALIZING 3D ROBOTICS CORE...
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 flex flex-col justify-center items-center overflow-hidden cyber-grid">
      {/* Background Radial Light Beams & Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-purple-600/10 blur-[160px] pointer-events-none -z-10" />

      {/* Cybernetic Scanning Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center relative z-20">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,229,255,0.15)] animate-pulse-glow">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            HUMORPHICOS v3.4 ENGINE · OPERATIONAL
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono tracking-tight uppercase max-w-5xl leading-[0.95] text-white">
          THE OPERATING SYSTEM <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-500 neon-text-cyan">
            FOR ROBOTICS TEAMS.
          </span>
        </h1>

        {/* Supporting Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans font-normal">
          Plan projects. Track hardware. Automate operations. <br className="hidden sm:inline" />
          Let AI handle the repetitive work while your team builds the future.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/portal"
            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 hover:from-cyan-400 hover:to-cyan-200 text-slate-950 font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(0,229,255,0.45)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] hover:scale-105 flex items-center gap-2"
          >
            <span>Launch HumorphicOS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="#solution"
            className="px-6 py-3.5 rounded-xl glass-panel border border-slate-700 hover:border-cyan-500/40 text-slate-200 hover:text-white font-mono text-sm tracking-wider uppercase transition-all hover:bg-cyan-500/5 flex items-center gap-2"
          >
            <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>Explore Platform</span>
          </a>
        </div>

        {/* Central 3D Humanoid Robot Viewport & Surrounding Hologram HUD */}
        <div className="relative w-full max-w-4xl h-[460px] sm:h-[540px] md:h-[620px] mt-6">
          <Robot3D mode="hero" className="w-full h-full" />
          <HologramHUD />
        </div>

        {/* Command Center Footnote */}
        <div className="mt-2 flex items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>8-Tier RBAC Architecture</span>
          </div>
          <span className="text-slate-700">·</span>
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>Autonomous Telemetry & WBS Sync</span>
          </div>
        </div>
      </div>
    </section>
  );
}
