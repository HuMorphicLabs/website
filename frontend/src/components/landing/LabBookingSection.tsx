"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Radio,
  Sliders,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function LabBookingSection() {
  const [selectedArena, setSelectedArena] = useState("TESTING ARENA");
  const [selectedSlot, setSelectedSlot] = useState("14:00 — 16:00");
  const [selectedEquip, setSelectedEquip] = useState<string[]>([
    "LiDAR VLP-16",
    "Rigol 100MHz Scope",
  ]);

  const arenas = [
    { name: "TESTING ARENA", desc: "Full-scale obstacle & sand course", icon: MapPin },
    { name: "DRONE CAGE", desc: "High-ceiling netted UAV flight zone", icon: Radio },
    { name: "CLEAN ASSEMBLY ROOM", desc: "ESD-protected PCB soldering benches", icon: Sliders },
  ];

  const slots = [
    "09:00 — 11:00",
    "11:30 — 13:30",
    "14:00 — 16:00",
    "16:30 — 18:30",
    "19:00 — 21:00",
  ];

  const toggleEquip = (name: string) => {
    if (selectedEquip.includes(name)) {
      setSelectedEquip(selectedEquip.filter((e) => e !== name));
    } else {
      setSelectedEquip([...selectedEquip, name]);
    }
  };

  return (
    <section id="lab-booking" className="py-24 relative overflow-hidden bg-[#040817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-xs tracking-widest uppercase mb-4">
            <Calendar className="w-3.5 h-3.5" />
            SPACE & INSTRUMENT SCHEDULING
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            AUTONOMOUS <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-300">
              LAB RESERVATION & CONFLICT ENGINE.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Coordinate physical test tracks, drone flight cages, and precision soldering benches without scheduling clashes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Booking Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Arena Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                Select Facility Arena
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {arenas.map((a) => (
                  <button
                    key={a.name}
                    onClick={() => setSelectedArena(a.name)}
                    className={`p-3 rounded-xl text-left border font-mono text-xs transition-all cursor-pointer ${
                      selectedArena === a.name
                        ? "bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                        : "glass-panel border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-bold text-[11px] uppercase tracking-wider">{a.name}</div>
                    <div className="text-[9px] text-slate-400 mt-1 line-clamp-1">{a.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                Reservation Time Window (Today)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSlot(s)}
                    className={`px-3 py-2 rounded-lg font-mono text-xs border text-center transition-all cursor-pointer ${
                      selectedSlot === s
                        ? "bg-purple-500/20 border-purple-400 text-purple-300 font-bold shadow-[0_0_15px_rgba(124,58,237,0.25)]"
                        : "glass-panel border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Attached Equipment */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                Attached Instruments
              </label>
              <div className="flex flex-wrap gap-2">
                {["LiDAR VLP-16", "Rigol 100MHz Scope", "24V 30A Lab Bench PSU", "CAN Analyzer"].map(
                  (eq) => {
                    const isSelected = selectedEquip.includes(eq);
                    return (
                      <button
                        key={eq}
                        onClick={() => toggleEquip(eq)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold"
                            : "glass-panel border-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        {isSelected ? "✓ " : "+ "} {eq}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Live Booking Confirmation Voucher */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/40 shadow-[0_0_30px_rgba(0,229,255,0.15)] relative scanline-effect">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
                  RESERVATION TELEMETRY
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] font-bold uppercase">
                  CONFIRMED
                </span>
              </div>

              {/* Conflict Detection Banner */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>✓ NO CONFLICTS DETECTED</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">RESERVED ARENA</span>
                  <div className="text-white font-bold text-sm tracking-wide mt-0.5">
                    {selectedArena}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 uppercase">TIME SLOT</span>
                  <div className="text-cyan-400 font-bold mt-0.5">{selectedSlot}</div>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 uppercase">ALLOCATED EQUIPMENT</span>
                  <div className="mt-1 space-y-1">
                    {selectedEquip.length > 0 ? (
                      selectedEquip.map((e) => (
                        <div key={e} className="flex items-center gap-1.5 text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                          <span>{e}</span>
                        </div>
                      ))
                    ) : (
                      <span className="text-slate-400 text-[11px]">No extra instruments booked</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>SLOT ID: #LBR-8492-AX</span>
                <span className="text-cyan-400 font-bold">DISPATCHED TO LAB HUD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
