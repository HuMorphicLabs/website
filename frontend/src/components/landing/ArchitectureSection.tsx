"use client";

import React from "react";
import {
  Layers,
  Server,
  Database,
  Cpu,
  Terminal,
  Shield,
  Zap,
  Box,
  HardDrive,
} from "lucide-react";

export default function ArchitectureSection() {
  const stack = [
    { name: "Next.js 15", category: "FRONTEND CORE", color: "text-cyan-400" },
    { name: "TypeScript", category: "TYPE SAFETY", color: "text-blue-400" },
    { name: "Tailwind CSS", category: "CYBERNETIC UI", color: "text-cyan-400" },
    { name: "Django 5.0 DRF", category: "BACKEND APIS", color: "text-emerald-400" },
    { name: "PostgreSQL 16", category: "RELATIONAL STORE", color: "text-indigo-400" },
    { name: "Redis 7", category: "CACHE & BROKER", color: "text-red-400" },
    { name: "Celery Beat", category: "ASYNC SCHEDULER", color: "text-emerald-400" },
    { name: "MinIO / S3", category: "OBJECT STORAGE", color: "text-amber-400" },
    { name: "Docker Compose", category: "CONTAINER RUNTIME", color: "text-blue-400" },
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-[#040816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-4">
            <Server className="w-3.5 h-3.5" />
            ENTERPRISE DISTRIBUTED SYSTEM
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            ENGINEERED FOR <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-400">
              MODERN ROBOTICS ORGANIZATIONS.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Built on a decoupled, resilient architecture capable of scaling from a 20-member collegiate club to multi-campus research laboratories.
          </p>
        </div>

        {/* Animated Architecture Topology Diagram */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(0,0,0,0.6)] mb-12 relative scanline-effect">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Top Root Node: HumorphicOS Gateway */}
            <div className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,229,255,0.3)]">
              <span className="text-[10px] font-mono text-cyan-300 block uppercase tracking-widest">
                API GATEWAY & UNIFIED ORCHESTRATOR
              </span>
              <span className="text-xl font-black font-mono text-white tracking-widest">
                HUMORPHICOS KERNEL
              </span>
            </div>

            {/* Vertical Connector Line */}
            <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-slate-700" />

            {/* Tier 2: Next.js + Django Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/40 text-center shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                <span className="text-[9px] font-mono text-cyan-400 font-bold block uppercase tracking-widest">
                  CLIENT PRESENTATION LAYER
                </span>
                <span className="text-base font-bold font-mono text-white">NEXT.JS 15 (REACT 19)</span>
                <p className="text-[11px] text-slate-400 font-sans mt-1">
                  SSR Portals · 60 FPS 3D WebGL · Tailwind UI
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/40 text-center shadow-[0_0_20px_rgba(124,58,237,0.1)]">
                <span className="text-[9px] font-mono text-purple-400 font-bold block uppercase tracking-widest">
                  APPLICATION & SERVICE APIS
                </span>
                <span className="text-base font-bold font-mono text-white">DJANGO REST FRAMEWORK</span>
                <p className="text-[11px] text-slate-400 font-sans mt-1">
                  8-Tier RBAC · WBS Calculator · AI Integrations
                </p>
              </div>
            </div>

            {/* Connector Line */}
            <div className="w-0.5 h-8 bg-gradient-to-b from-slate-700 to-emerald-400" />

            {/* Tier 3: Storage & Async Queue Trio */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <Database className="w-5 h-5 text-indigo-400 mx-auto mb-1.5" />
                <span className="text-xs font-bold font-mono text-white block">POSTGRESQL 16</span>
                <span className="text-[10px] text-slate-400 font-mono">Relational Data Store</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <Zap className="w-5 h-5 text-red-400 mx-auto mb-1.5" />
                <span className="text-xs font-bold font-mono text-white block">REDIS + CELERY</span>
                <span className="text-[10px] text-slate-400 font-mono">Async Reminders & Jobs</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <HardDrive className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                <span className="text-xs font-bold font-mono text-white block">MINIO / AWS S3</span>
                <span className="text-[10px] text-slate-400 font-mono">CAD & Media Storage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Chips Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
          {stack.map((s) => (
            <div
              key={s.name}
              className="glass-panel p-3 rounded-xl border border-slate-800 text-center hover:border-cyan-500/40 transition-colors"
            >
              <div className={`text-xs font-bold font-mono ${s.color}`}>{s.name}</div>
              <div className="text-[8px] font-mono text-slate-500 uppercase mt-0.5 tracking-wider">
                {s.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
