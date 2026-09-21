"use client";

import React from "react";
import {
  Clock,
  Sparkles,
  CheckCircle,
  Calendar,
  Layers,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function DailyOperationsSection() {
  const timelineEvents = [
    {
      time: "08:00",
      title: "Team Check-in & Lab Gate Open",
      desc: "Members verify attendance via QR scanner or mobile portal.",
      status: "COMPLETED",
      color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
    },
    {
      time: "10:30",
      title: "Sprint Work & CAD Iteration",
      desc: "Mechanical and Electronics teams iterate on Rocker-Bogie CNC models.",
      status: "COMPLETED",
      color: "text-purple-400 border-purple-500/40 bg-purple-500/10",
    },
    {
      time: "14:00",
      title: "Lab Testing Arena Session",
      desc: "Full obstacle navigation test with LiDAR and stereo depth camera.",
      status: "COMPLETED",
      color: "text-blue-400 border-blue-500/40 bg-blue-500/10",
    },
    {
      time: "18:00",
      title: "Mandatory Daily EOD Updates",
      desc: "Engineers submit hours worked, GitHub commits, and blocker flags.",
      status: "ACTIVE",
      color: "text-amber-400 border-amber-500/40 bg-amber-500/10",
    },
    {
      time: "20:00",
      title: "Autonomous AI Club Pulse",
      desc: "AI consolidates all reports into an executive digest for leadership.",
      status: "DISPATCHED",
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
    },
  ];

  return (
    <section id="daily-ops" className="py-24 relative overflow-hidden bg-[#040816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-xs tracking-widest uppercase mb-4">
            <Clock className="w-3.5 h-3.5" />
            SYNCHRONIZED LAB CADENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            FROM DAILY UPDATES <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-400">
              TO AUTOMATIC INSIGHTS.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Eliminate standup chaos. Asynchronous daily reporting feeds directly into real-time club metrics and Celery automated reminders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-6 space-y-4">
            {timelineEvents.map((evt, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start gap-4"
              >
                <div className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-cyan-400 shrink-0">
                  {evt.time}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold font-mono text-white">{evt.title}</h4>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded uppercase border font-bold ${evt.color}`}
                    >
                      {evt.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: AI Club Pulse Summary Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/40 shadow-[0_0_35px_rgba(0,229,255,0.15)] relative scanline-effect">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <span className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                    TODAY&apos;S CLUB PULSE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                  20:00 DISPATCH
                </span>
              </div>

              {/* Compliance Stat Counter */}
              <div className="mb-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    COMPLIANCE RATE
                  </span>
                  <div className="text-2xl font-black font-mono text-white flex items-baseline gap-1.5">
                    <span className="text-cyan-400">91%</span>
                    <span className="text-xs text-slate-400 font-normal">
                      (46 / 51 Submissions)
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <p>
                    <strong className="text-white font-mono">Rover navigation reached 82%:</strong> Waypoint test completed successfully in testing arena.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <p>
                    <strong className="text-white font-mono">3 hardware blockers flagged:</strong> CAN transceiver termination, 2 motor brackets await CNC.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong className="text-white font-mono">Zero unexcused absences:</strong> 42 verified on-site check-ins recorded at main entrance kiosk.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>REPORTS AUTO-GENERATED (PDF/CSV)</span>
                <span className="text-cyan-400 font-bold">READY IN LEADERSHIP HUB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
