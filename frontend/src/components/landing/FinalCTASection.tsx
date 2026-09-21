"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Bot, Sparkles, Terminal } from "lucide-react";

const Robot3D = dynamic(() => import("@/components/3d/Robot3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-cyan-400 font-mono text-xs tracking-widest animate-pulse">
      INITIALIZING 3D ROBOTICS CORE...
    </div>
  ),
});

export default function FinalCTASection() {
  return (
    <section className="relative min-h-screen py-24 flex flex-col justify-center items-center overflow-hidden cyber-grid bg-[#02050f]">
      {/* Intense Cyan & Purple Radial Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-cyan-500/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-purple-600/15 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center relative z-20">
        {/* Subtle Cyber Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(0,229,255,0.25)] animate-pulse-glow">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
            READY TO REVOLUTIONIZE YOUR CLUB?
          </span>
        </div>

        {/* Primary Brand Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono tracking-tight uppercase text-white leading-[0.95] max-w-5xl">
          BUILD ROBOTS. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-100 to-purple-400 neon-text-cyan">
            NOT SPREADSHEETS.
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl font-sans leading-relaxed">
          Bring projects, people, hardware, lab resources and autonomous AI intelligence into one unified operating system.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-30">
          <Link
            href="/portal"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 hover:from-cyan-400 hover:to-cyan-200 text-slate-950 font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_35px_rgba(0,229,255,0.5)] hover:shadow-[0_0_55px_rgba(0,229,255,0.8)] hover:scale-105 flex items-center gap-2"
          >
            <span>Start Building Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/login"
            className="px-7 py-4 rounded-xl glass-panel border border-slate-700 hover:border-cyan-500/40 text-slate-200 hover:text-white font-mono text-sm tracking-wider uppercase transition-all hover:bg-cyan-500/5 flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Terminal Login</span>
          </Link>
        </div>

        {/* Secondary 3D Robot Centerpiece in Final CTA */}
        <div className="relative w-full max-w-3xl h-[420px] sm:h-[500px] mt-6 pointer-events-none">
          <Robot3D mode="cta" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
