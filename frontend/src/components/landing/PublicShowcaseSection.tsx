"use client";

import React from "react";
import {
  Compass,
  Plane,
  Layers,
  Eye,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import Link from "next/link";

export default function PublicShowcaseSection() {
  const projects = [
    {
      title: "Autonomous Martian Rover V2",
      department: "AI & MECHANICAL",
      status: "ACTIVE TESTING",
      statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      progress: 87,
      team: "12 Engineers · Lead: Alex M.",
      desc: "Terrain-traversing 6-wheel rover with rocker-bogie passive suspension and real-time obstacle avoidance.",
      icon: Compass,
      tags: ["ROS2", "LiDAR", "SolidWorks", "Jetson Orin"],
    },
    {
      title: "Autonomous Hexacopter Drone",
      department: "EMBEDDED & FLIGHT",
      status: "FLIGHT VALIDATION",
      statusColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      progress: 74,
      team: "8 Engineers · Lead: Rahul S.",
      desc: "UAV platform with PX4 autopilot, optical flow positioning, and automated search-and-rescue payload.",
      icon: Plane,
      tags: ["PX4 Autopilot", "STM32", "Carbon Fiber", "Optical Flow"],
    },
    {
      title: "6-DoF Industrial Robotic Arm",
      department: "MECHATRONICS",
      status: "CALIBRATION",
      statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      progress: 92,
      team: "6 Engineers · Lead: Priya S.",
      desc: "High-precision inverse kinematics arm with planetary gear reduction and sub-millimeter repeatable precision.",
      icon: Layers,
      tags: ["Kinematics", "CAN-Bus", "Cycloidal Drives", "MoveIt2"],
    },
    {
      title: "Edge Computer Vision Stack",
      department: "COMPUTER VISION",
      status: "PRODUCTION",
      statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      progress: 98,
      team: "5 Engineers · Lead: Dev P.",
      desc: "YOLOv8 deep learning pipeline optimized via TensorRT for 60 FPS real-time hazard detection on rover cameras.",
      icon: Eye,
      tags: ["TensorRT", "YOLOv8", "OpenCV", "CUDA"],
    },
  ];

  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-[#040816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            ENGINEERING EXCELLENCE SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            BUILT BY ENGINEERS. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-400">
              POWERED BY HUMORPHICOS.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Real robots. Real code commits. From CAD blue-prints to autonomous arena test runs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.title}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        {proj.department}
                      </span>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[9px] font-mono font-bold uppercase border ${proj.statusColor}`}
                    >
                      {proj.status}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
                    {proj.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Progress & Lead */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <div className="space-y-1 mb-3">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-slate-400">Project Completion</span>
                      <span className="text-cyan-400 font-bold">{proj.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{proj.team}</span>
                    <Link
                      href="/portal"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Inspect</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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
