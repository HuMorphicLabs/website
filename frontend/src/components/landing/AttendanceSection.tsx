"use client";

import React, { useState } from "react";
import {
  QrCode,
  Users,
  Video,
  ScanFace,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export default function AttendanceSection() {
  const [activeMethod, setActiveMethod] = useState("qr");

  const methods = [
    {
      id: "qr",
      name: "Dynamic QR Check-in",
      desc: "Rotating cryptographic token projected on lab screens. Scanned instantly via mobile browser.",
      icon: QrCode,
      status: "LIVE ON-SITE",
    },
    {
      id: "manual",
      name: "Manual Lead Override",
      desc: "Authorized Team Leads or Presidents manually verify check-ins with role-based audit trail.",
      icon: Users,
      status: "ROLE PROTECTED",
    },
    {
      id: "meeting",
      name: "Meeting Sync (Google Meet/Zoom)",
      desc: "Automatically logs attendance when members participate in technical design reviews.",
      icon: Video,
      status: "AUTO-DETECT",
    },
    {
      id: "face",
      name: "Face Verification Stub",
      desc: "Edge CV integration ready for Jetson/Raspberry Pi lab entrance security cameras.",
      icon: ScanFace,
      status: "PHASE 3 READY",
    },
  ];

  return (
    <section id="attendance" className="py-24 relative overflow-hidden bg-[#030712] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            MULTIMODAL ATTENDANCE ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            ACCURACY YOU CAN TRUST. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-400">
              SMART LAB VERIFICATION.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Whether in the physical lab, remote online sprint review, or high-security clean room, attendance is verified with zero manual paperwork.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Verification Methods Selector */}
          <div className="lg:col-span-6 space-y-3.5">
            {methods.map((m) => {
              const Icon = m.icon;
              const isSelected = activeMethod === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMethod(m.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? "glass-panel border-cyan-400/60 shadow-[0_0_20px_rgba(0,229,255,0.2)] bg-cyan-500/10"
                      : "glass-panel border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl border ${
                      isSelected
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold font-mono text-white">{m.name}</h4>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400 font-bold uppercase">
                        {m.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">{m.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Attendance Dashboard Metric Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-[0_0_35px_rgba(0,229,255,0.1)] scanline-effect">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-bold">
                  LIVE LAB ATTENDANCE MONITOR
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  SESSION ACTIVE
                </span>
              </div>

              {/* Progress Percentage Display */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2 font-mono">
                  <span className="text-xs uppercase text-slate-400">TODAY&apos;S RATE</span>
                  <span className="text-3xl font-black text-cyan-400 neon-text-cyan">91%</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full p-0.5 border border-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                    style={{ width: "91%" }}
                  />
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-3 gap-3 font-mono text-center mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">PRESENT</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">42</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">LATE</div>
                  <div className="text-xl font-bold text-amber-400 mt-1">3</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">ABSENT</div>
                  <div className="text-xl font-bold text-red-400 mt-1">5</div>
                </div>
              </div>

              {/* Security & Audit guarantee */}
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-2.5 text-cyan-300 font-mono text-xs">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Geofenced & cryptographically salted against proxy check-ins.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
