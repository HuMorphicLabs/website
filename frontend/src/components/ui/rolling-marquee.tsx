"use client";

import React from "react";
import { Cpu, Zap, Activity, Radio, Sparkles, Bot, Shield, Award } from "lucide-react";

export function RollingMarquee() {
  const items = [
    { icon: Bot, label: "ROS2 Galactic & Humble Nodes", tag: "Mesh Active", color: "text-cyan-400" },
    { icon: Cpu, label: "NVIDIA Jetson Orin 120 FPS TensorRT", tag: "Neural Edge", color: "text-indigo-400" },
    { icon: Zap, label: "Custom 48V GaN Motor Driver Inverters", tag: "Hardware", color: "text-amber-400" },
    { icon: Radio, label: "Micro-ROS ESP32 DDS Transport", tag: "Telemetry", color: "text-emerald-400" },
    { icon: Sparkles, label: "Gen-AI Autonomous Task Dispatch", tag: "Agentic", color: "text-purple-400" },
    { icon: Activity, label: "LiDAR 360° Real-time SLAM Cloud", tag: "Sensor Hub", color: "text-cyan-400" },
    { icon: Shield, label: "Biometric Lab Access & QR Pass", tag: "Security", color: "text-emerald-400" },
    { icon: Award, label: "Cryptographic Verified Builder XP", tag: "Ranks", color: "text-rose-400" },
  ];

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-black/40 backdrop-blur-md py-3 relative z-10 select-none group">
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-20" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Double array for infinite continuous loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 mx-4 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xs text-xs font-mono text-white/90 whitespace-nowrap hover:border-primary/50 transition-colors"
            >
              <Icon className={`h-3.5 w-3.5 ${item.color} animate-pulse`} />
              <span className="font-semibold">{item.label}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-cyan-300 font-bold border border-white/10">
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
