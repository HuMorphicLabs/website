"use client";

import React, { useState } from "react";
import {
  Wrench,
  Boxes,
  Cpu,
  Radio,
  Sliders,
  CheckCircle,
  AlertTriangle,
  Clock,
  Sparkles,
  Search,
} from "lucide-react";

export default function HardwareLabSection() {
  const [filterCategory, setFilterCategory] = useState("ALL");

  const components = [
    {
      sku: "SEN-LIDAR-VLP16",
      name: "Velodyne LiDAR VLP-16 (16-Channel)",
      category: "SENSOR",
      qty: 2,
      minStock: 1,
      location: "Lab Bay 1 · Cab A",
      status: "AVAILABLE",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      sku: "MCU-STM32-F407",
      name: "STM32F407 Discovery Board ARM-M4",
      category: "CONTROLLER",
      qty: 12,
      minStock: 5,
      location: "Rack 2 · Bin C-04",
      status: "IN STOCK",
      statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      sku: "MOT-BLDC-42BLF",
      name: "High-Torque Brushless DC Motor 24V",
      category: "ACTUATOR",
      qty: 24,
      minStock: 8,
      location: "Heavy Shelf 3 · Bin 12",
      status: "IN STOCK",
      statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      sku: "EQP-OSC-RIGOL",
      name: "Rigol DS1054Z 50MHz Digital Oscilloscope",
      category: "EQUIPMENT",
      qty: 1,
      minStock: 1,
      location: "Workbench Station 3",
      status: "IN USE",
      statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    },
    {
      sku: "SEN-IMU-BNO055",
      name: "Bosch BNO055 9-DOF Absolute IMU",
      category: "SENSOR",
      qty: 3,
      minStock: 5,
      location: "Precision Drawer 1",
      status: "LOW STOCK",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    },
    {
      sku: "EQP-CNC-ROUTER",
      name: "Genmitsu 3018-PROVer CNC Milling Machine",
      category: "EQUIPMENT",
      qty: 1,
      minStock: 1,
      location: "Fabrication Lab Bay 2",
      status: "MAINTENANCE",
      statusColor: "text-red-400 bg-red-500/10 border-red-500/30",
    },
  ];

  const categories = ["ALL", "SENSOR", "CONTROLLER", "ACTUATOR", "EQUIPMENT"];

  const filtered =
    filterCategory === "ALL"
      ? components
      : components.filter((c) => c.category === filterCategory);

  return (
    <section id="hardware-lab" className="py-24 relative overflow-hidden bg-[#030712] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-4">
            <Boxes className="w-3.5 h-3.5" />
            LABORATORY RESOURCE TELEMETRY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            YOUR LAB. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-400">
              FINALLY UNDER CONTROL.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Serialized tracking for every sensor, microcontroller, motor driver, and test instrument.
            No more lost components or double-booked lab testing arenas.
          </p>
        </div>

        {/* Top Telemetry Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="glass-panel p-4 rounded-xl border border-emerald-500/30 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">STATUS</span>
              <div className="text-sm font-bold font-mono text-white">48 AVAILABLE</div>
            </div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-purple-500/30 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-purple-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">IN USE</span>
              <div className="text-sm font-bold font-mono text-white">14 STATIONS</div>
            </div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-amber-500/30 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-amber-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">LOW STOCK ALERT</span>
              <div className="text-sm font-bold font-mono text-amber-400">3 SKUS</div>
            </div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-red-500/30 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">MAINTENANCE</span>
              <div className="text-sm font-bold font-mono text-red-400">1 UNIT</div>
            </div>
          </div>
        </div>

        {/* Interactive Dashboard Container */}
        <div className="glass-panel rounded-2xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,229,255,0.08)] overflow-hidden">
          {/* Dashboard Control Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Boxes className="w-5 h-5 text-cyan-400" />
              <span className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                CENTRAL HARDWARE REPOSITORY
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    filterCategory === cat
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-bold"
                      : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#02050f] text-slate-400 uppercase tracking-widest text-[10px] border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-6">SKU Code</th>
                  <th className="py-3.5 px-6">Component / Equipment</th>
                  <th className="py-3.5 px-6">Category</th>
                  <th className="py-3.5 px-6">Quantity</th>
                  <th className="py-3.5 px-6">Lab Location</th>
                  <th className="py-3.5 px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filtered.map((item) => (
                  <tr
                    key={item.sku}
                    className="hover:bg-cyan-500/5 transition-colors group"
                  >
                    <td className="py-4 px-6 text-cyan-400 font-bold">{item.sku}</td>
                    <td className="py-4 px-6 text-white font-medium group-hover:text-cyan-300">
                      {item.name}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px]">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-white font-bold">
                      {item.qty}{" "}
                      <span className="text-[10px] text-slate-400 font-normal">
                        (min: {item.minStock})
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-300">{item.location}</td>
                    <td className="py-4 px-6 text-right">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
