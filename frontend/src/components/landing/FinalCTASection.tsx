"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Sparkles, Terminal, ShieldCheck } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative py-24 flex flex-col justify-center items-center overflow-hidden cyber-grid bg-[#02050f]">
      {/* Intense Cyan & Purple Radial Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-cyan-500/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-purple-600/15 blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center relative z-20">
        {/* Cyber Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(0,229,255,0.25)] animate-pulse-glow">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
            READY TO REVOLUTIONIZE YOUR CLUB?
          </span>
        </div>

        {/* Primary Brand Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tight uppercase text-white leading-[1.0] max-w-4xl">
          BUILD ROBOTS. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-100 to-purple-400 neon-text-cyan">
            NOT SPREADSHEETS.
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-sans leading-relaxed">
          Bring projects, engineering squads, hardware labs, and autonomous AI telemetry into one unified operating system.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-30">
          <Link
            href="/login"
            className="rolling-shine-btn px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 hover:from-cyan-400 hover:to-cyan-200 text-slate-950 font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_35px_rgba(0,229,255,0.5)] hover:scale-105 flex items-center gap-2"
          >
            <span>Launch Member Terminal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/verify"
            className="px-7 py-3.5 rounded-xl glass-panel border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-white font-mono text-sm tracking-wider uppercase transition-all flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verify Certificates</span>
          </Link>
        </div>

        {/* Telemetry Footer Badge */}
        <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] font-mono text-muted">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>HUMORPHICOS NEURAL ENCLAVE v3.2 · PRODUCTION READY</span>
        </div>
      </div>
    </section>
  );
}