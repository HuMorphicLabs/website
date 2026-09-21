"use client";

import React, { useState, useEffect } from "react";
import { Layers, ShieldCheck, GitCommit, Sparkles } from "lucide-react";

export default function MetricsStrip() {
  const [counts, setCounts] = useState({ modules: 0, rbac: 0, wbs: 0, compliance: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ modules: 15, rbac: 8, wbs: 4, compliance: 99 });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    {
      value: `${counts.modules}+`,
      label: "CORE MODULES",
      desc: "End-to-end robotics command suite",
      icon: Layers,
      color: "text-cyan-400",
      border: "border-cyan-500/20",
    },
    {
      value: `${counts.rbac}-TIER`,
      label: "RBAC ARCHITECTURE",
      desc: "Granular university lab permissions",
      icon: ShieldCheck,
      color: "text-purple-400",
      border: "border-purple-500/20",
    },
    {
      value: `${counts.wbs}-TIER`,
      label: "PROJECT MANAGEMENT",
      desc: "Hardware-to-code WBS hierarchy",
      icon: GitCommit,
      color: "text-cyan-400",
      border: "border-cyan-500/20",
    },
    {
      value: "AI-POWERED",
      label: "OPERATIONS",
      desc: "Continuous autonomous pulse & MoM",
      icon: Sparkles,
      color: "text-emerald-400",
      border: "border-emerald-500/20",
    },
  ];

  return (
    <section className="relative z-20 py-10 border-y border-slate-800/80 bg-[#070d1d]/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl glass-panel border ${m.border} flex flex-col justify-between transition-all hover:scale-[1.02] hover:border-cyan-400/40`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 font-semibold uppercase">
                    SYS_METRIC_0{idx + 1}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <Icon className={`w-4 h-4 ${m.color}`} />
                  </div>
                </div>
                <div>
                  <div className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${m.color} neon-text-cyan`}>
                    {m.value}
                  </div>
                  <div className="text-xs font-mono font-bold tracking-wider text-white uppercase mt-1">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                    {m.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
