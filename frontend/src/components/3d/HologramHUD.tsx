"use client";

import React from "react";
import { Cpu, Activity, ShieldCheck, Layers, Radio } from "lucide-react";

export default function HologramHUD() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10 hidden sm:block">
      {/* Top Left: AI Copilot Telemetry */}
      <div className="absolute top-[18%] left-[4%] lg:left-[8%] pointer-events-auto animate-float">
        <div className="glass-panel p-3.5 rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(0,229,255,0.15)] max-w-[200px] transition-all hover:scale-105 hover:border-cyan-400">
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-300 font-semibold">
                AI COPILOT
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[9px] font-mono font-bold text-emerald-400">ONLINE</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-300 leading-tight">
            Autonomous trajectory & vision pipeline optimized.
          </p>
          <div className="mt-2 pt-1.5 border-t border-cyan-500/20 flex items-center justify-between text-[9px] font-mono text-cyan-400/80">
            <span>LATENCY: 12ms</span>
            <span>CONF: 99.4%</span>
          </div>
        </div>
      </div>

      {/* Top Right: Project Rover V2 */}
      <div className="absolute top-[16%] right-[4%] lg:right-[8%] pointer-events-auto animate-float-delayed">
        <div className="glass-panel p-3.5 rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(0,229,255,0.15)] max-w-[220px] transition-all hover:scale-105 hover:border-cyan-400">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                ACTIVE PROJECT
              </span>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              PHASE 3
            </span>
          </div>
          <h4 className="text-xs font-bold text-white tracking-wide">ROVER V2 — MARS SIM</h4>
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-[10px] font-mono text-slate-300">
              <span>WBS Progress</span>
              <span className="text-cyan-400 font-bold">87%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                style={{ width: "87%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left: Lab Status */}
      <div className="absolute bottom-[24%] left-[3%] lg:left-[7%] pointer-events-auto animate-float-delayed">
        <div className="glass-panel p-3.5 rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(0,229,255,0.15)] max-w-[210px] transition-all hover:scale-105 hover:border-cyan-400">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] font-mono tracking-widest text-cyan-300 font-semibold">
                LAB STATUS
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold text-cyan-400">ACTIVE</span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xl font-black font-mono text-white">12</span>
            <span className="text-[11px] text-slate-300">Tasks In Progress</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400">
            <ShieldCheck className="w-3 h-3" />
            <span>Telemetry Stream Sync: 100%</span>
          </div>
        </div>
      </div>

      {/* Bottom Right: Hardware Status */}
      <div className="absolute bottom-[22%] right-[3%] lg:right-[7%] pointer-events-auto animate-float">
        <div className="glass-panel p-3.5 rounded-xl border border-purple-500/30 shadow-[0_0_20px_rgba(124,58,237,0.15)] max-w-[210px] transition-all hover:scale-105 hover:border-purple-400">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px] font-mono tracking-widest text-purple-300 font-semibold">
                HARDWARE LAB
              </span>
            </div>
          </div>
          <div className="space-y-1.5 text-[10px] font-mono">
            <div className="flex justify-between items-center py-0.5 border-b border-purple-500/15">
              <span className="text-slate-300">LiDAR Module</span>
              <span className="text-emerald-400 font-bold">AVAILABLE</span>
            </div>
            <div className="flex justify-between items-center py-0.5 border-b border-purple-500/15">
              <span className="text-slate-300">BLDC Motors</span>
              <span className="text-cyan-400 font-bold">24 UNITS</span>
            </div>
            <div className="flex justify-between items-center pt-0.5">
              <span className="text-slate-300">Oscilloscope</span>
              <span className="text-purple-400 font-bold">IN USE (BAY 2)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
