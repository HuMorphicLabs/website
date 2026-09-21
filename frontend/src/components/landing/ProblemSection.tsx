"use client";

import React from "react";
import { Cpu, Boxes, AlertTriangle, FileText, ArrowUpRight } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      id: "01",
      title: "Hardware-Software Disconnect",
      desc: "Traditional sprint tools track git commits but ignore physical chassis, microcontrollers, and actuators. HumorphicOS links hardware milestones directly with sprint tasks.",
      icon: Cpu,
      tag: "WBS INTEGRATION",
      glow: "hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.2)]",
    },
    {
      id: "02",
      title: "Inventory Chaos",
      desc: "Costly LiDAR units, test oscilloscopes, and motor drivers vanish into lab drawers. HumorphicOS provides serialized tracking, storage bin coordinates, and low-stock alerts.",
      icon: Boxes,
      tag: "LAB CONTROL",
      glow: "hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(124,58,237,0.2)]",
    },
    {
      id: "03",
      title: "Accountability Gaps",
      desc: "Student engineering teams suffer from standup friction and lost chat logs. Asynchronous EOD updates, blocker flags, and automated pulse summaries ensure daily progress.",
      icon: AlertTriangle,
      tag: "DAILY PULSE",
      glow: "hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.2)]",
    },
    {
      id: "04",
      title: "Administrative Overhead",
      desc: "Club executives waste days issuing participation certificates, taking roll calls, and writing faculty reports. Everything is automated with one-click exports and public verification.",
      icon: FileText,
      tag: "AUTOMATION",
      glow: "hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(124,58,237,0.2)]",
    },
  ];

  return (
    <section id="problem" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background Subtle Cyber Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-xs tracking-widest uppercase mb-4">
            THE SYSTEM BOTTLENECK
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            ROBOTICS IS COMPLEX. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              YOUR OPERATIONS SHOULDN&apos;T BE.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Engineering teams manage hardware, software, people, projects and physical lab resources simultaneously.
            HumorphicOS unifies every layer into a single command center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.id}
                className={`p-8 rounded-2xl glass-panel border border-slate-800 transition-all duration-300 group flex flex-col justify-between ${prob.glow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
                      {prob.tag}
                    </span>
                    <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-cyan-400/40 transition-colors">
                      {prob.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 group-hover:border-cyan-400 transition-colors">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold font-mono text-white tracking-wide">
                      {prob.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 font-sans text-sm leading-relaxed mt-2">
                    {prob.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>RESOLVED IN HUMORPHICOS</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
