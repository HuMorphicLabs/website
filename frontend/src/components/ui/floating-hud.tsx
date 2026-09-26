"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Zap, Activity, Radio, Sparkles } from "lucide-react";

export function FloatingHud() {
  const [fps, setFps] = useState(120);
  const [angles, setAngles] = useState({ roll: 1.2, pitch: -0.6, yaw: 45.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setFps(Math.floor(118 + Math.random() * 6));
      setAngles({
        roll: +(1.2 + (Math.random() - 0.5) * 0.4).toFixed(1),
        pitch: +(-0.6 + (Math.random() - 0.5) * 0.3).toFixed(1),
        yaw: +(45.2 + (Math.random() - 0.5) * 0.8).toFixed(1),
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-5">
      {/* ── Floating Badge 1 (Top Left) ── */}
      <div className="hidden lg:flex absolute top-32 left-8 xl:left-16 animate-hud-1 pointer-events-auto">
        <div className="glass-panel-glow px-4 py-3 rounded-2xl flex items-center gap-3.5 shadow-2xl border border-cyan-500/30 bg-black/60 backdrop-blur-xl hover:scale-105 transition-transform cursor-default">
          <div className="relative">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Cpu className="h-5 w-5 animate-pulse" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white">JETSON ORIN · YOLOv11</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                EDGE AI
              </span>
            </div>
            <p className="text-[11px] font-mono text-cyan-300 mt-0.5 flex items-center gap-1.5">
              <Activity className="h-3 w-3 text-cyan-400" />
              Inference: <strong className="text-white">{fps} FPS</strong> · TensorRT 16-bit
            </p>
          </div>
        </div>
      </div>

      {/* ── Floating Badge 2 (Top Right) ── */}
      <div className="hidden lg:flex absolute top-40 right-8 xl:right-16 animate-hud-2 pointer-events-auto">
        <div className="glass-panel-glow px-4 py-3 rounded-2xl flex items-center gap-3.5 shadow-2xl border border-primary/30 bg-black/60 backdrop-blur-xl hover:scale-105 transition-transform cursor-default">
          <div className="p-2 rounded-xl bg-primary/20 text-indigo-400 border border-primary/30">
            <Radio className="h-5 w-5 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white">ROS2 SWARM TELEMETRY</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-primary/20 text-indigo-300 border border-primary/30">
                SYNCED
              </span>
            </div>
            <p className="text-[11px] font-mono text-indigo-300 mt-0.5">
              Roll: <span className="text-white font-bold">{angles.roll > 0 ? `+${angles.roll}` : angles.roll}°</span> · 
              Pitch: <span className="text-white font-bold">{angles.pitch}°</span> · 
              Yaw: <span className="text-white font-bold">{angles.yaw}°</span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Floating Badge 3 (Middle Right Bottom) ── */}
      <div className="hidden xl:flex absolute top-[520px] -right-4 animate-hud-1 pointer-events-auto">
        <div className="glass-panel px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-xl border border-emerald-500/30 bg-black/70 backdrop-blur-xl hover:scale-105 transition-transform cursor-default">
          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Zap className="h-4 w-4 animate-pulse" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-white block">LAB 48V SMART BUS</span>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              98.4% Efficiency · 40.2A Peak
            </span>
          </div>
        </div>
      </div>

      {/* ── Floating Badge 4 (Middle Left Bottom) ── */}
      <div className="hidden xl:flex absolute top-[560px] -left-4 animate-hud-2 pointer-events-auto">
        <div className="glass-panel px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-xl border border-purple-500/30 bg-black/70 backdrop-blur-xl hover:scale-105 transition-transform cursor-default">
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Sparkles className="h-4 w-4 animate-spin" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-white block">AI KINEMATICS CO-PILOT</span>
            <span className="text-[10px] font-mono text-purple-300">
              Autonomous Trajectory Solved
            </span>
          </div>
        </div>
      </div>

      {/* ── Background Radar Circle Visual ── */}
      <div className="hidden sm:block absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none opacity-20 -z-10">
        <div className="w-full h-full rounded-full border border-primary/40 relative flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full border border-cyan-500/30 relative flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-indigo-500/40 relative flex items-center justify-center">
              {/* Radar sweep beam */}
              <div 
                className="absolute inset-0 rounded-full animate-radar"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(6, 182, 212, 0.4) 360deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
