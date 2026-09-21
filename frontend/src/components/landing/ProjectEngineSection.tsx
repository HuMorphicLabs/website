"use client";

import React, { useState } from "react";
import {
  GitFork,
  CheckCircle2,
  Clock,
  Activity,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Layers,
} from "lucide-react";

export default function ProjectEngineSection() {
  const [selectedSubLevel, setSelectedSubLevel] = useState("fea-bogie");

  const levels = [
    {
      level: "TIER 1 · ROOT",
      type: "PROJECT",
      title: "Autonomous Martian Rover Prototype",
      status: "ACTIVE",
      statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      desc: "Flagship cross-functional rover system integrating locomotion, perception, and RTOS navigation.",
    },
    {
      level: "TIER 2 · PHASE",
      type: "PROJECT PHASE",
      title: "Phase 1: Locomotion Subsystem",
      status: "88% DONE",
      statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      desc: "Mechanical design, suspension kinematics, wheel hubs, and DC motor mounts.",
    },
    {
      level: "TIER 3 · STAGE",
      type: "SUB-STAGE",
      title: "Sub-Stage: Rocker-Bogie Suspension",
      status: "IN PROGRESS",
      statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      desc: "Passive mechanical linkage allowing the rover to climb obstacles twice the wheel diameter.",
    },
    {
      level: "TIER 4 · LEAF",
      type: "SUB-LEVEL",
      title: "Sub-Level: FEA of Bogie Arm (Stress Simulation)",
      status: "REVIEW",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      desc: "Finite element analysis under 350N static load to ensure aluminum 6061-T6 safety factor > 2.5.",
    },
  ];

  return (
    <section id="project-engine" className="py-24 relative overflow-hidden bg-[#030712] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-4">
            <GitFork className="w-3.5 h-3.5" />
            HIERARCHICAL WBS COMPUTATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            ENGINEER PROJECTS <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              THE WAY ROBOTS ARE ACTUALLY BUILT.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Flat Kanban boards fail when mechanics, PCB hardware, and algorithms are deeply intertwined.
            HumorphicOS computes progress deterministically across a 4-tier tree.
          </p>
        </div>

        {/* Interactive Progress Meter Banner */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 mb-12 shadow-[0_0_30px_rgba(0,229,255,0.15)]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                ACTIVE ROVER SYSTEM TELEMETRY
              </span>
              <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
                <span>PROJECT PROGRESS</span>
                <span className="text-cyan-400 font-mono font-black text-2xl">78%</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              STATUS: ON TRACK
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3.5 bg-slate-900 rounded-full p-0.5 border border-slate-700/80 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(0,229,255,0.8)]"
              style={{ width: "78%" }}
            />
          </div>

          <div className="mt-3 flex justify-between text-[11px] font-mono text-slate-400">
            <span>Formula: Progress = (∑ Completed Sub-Levels / ∑ Total Sub-Levels) × 100</span>
            <span className="text-cyan-400">22 of 28 Sub-Levels Complete</span>
          </div>
        </div>

        {/* 4-Tier Interactive Cascade Diagram */}
        <div className="max-w-4xl mx-auto space-y-4">
          {levels.map((lvl, index) => (
            <div key={index} className="relative group">
              {/* Vertical connector line */}
              {index < levels.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-purple-500/50 z-0 hidden sm:block" />
              )}

              <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 shrink-0 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
                    T{index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                        {lvl.level}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                        {lvl.type}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold font-mono text-white">
                      {lvl.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 font-sans max-w-xl leading-relaxed">
                      {lvl.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex sm:flex-col items-end justify-between gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase border ${lvl.statusColor}`}
                  >
                    {lvl.status}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                    AUTO_SYNCED
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
