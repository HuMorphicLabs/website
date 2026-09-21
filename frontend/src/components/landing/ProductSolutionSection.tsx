"use client";

import React, { useState } from "react";
import {
  Cpu,
  Wrench,
  Bot,
  Users,
  Award,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function ProductSolutionSection() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "engineering",
      title: "Engineering Engine",
      subtitle: "Hardware-to-code sprint workflows",
      icon: Cpu,
      color: "text-cyan-400",
      accent: "border-cyan-500/40 bg-cyan-500/10",
      features: [
        { name: "4-Tier WBS Hierarchy", desc: "Project -> Phase -> Sub-Stage -> Sub-Level" },
        { name: "Interactive Kanban", desc: "Drag-like sprint cards with priority & hours tracking" },
        { name: "Sprint Management", desc: "Deadlines, blockers, and dependencies mapping" },
        { name: "Subsystem Milestones", desc: "Mathematical progress aggregation based on components" },
        { name: "Automated Velocity", desc: "Instant insight into team throughput and delays" },
      ],
      previewHeadline: "ENGINEERING COMMAND MATRIX",
      previewSnippet: `[PROJECT: Autonomous Rover V2]
  ├── [PHASE 1: Locomotion Subsystem] (100% DONE)
  ├── [PHASE 2: Computer Vision & LiDAR] (82% IN_PROGRESS)
  └── [PHASE 3: Autonomous Pathfinding] (45% ACTIVE)
>>> OVERALL PROGRESS: 78% · HEALTH: ON_TRACK`,
    },
    {
      id: "hardware",
      title: "Hardware Lab",
      subtitle: "Component registry & lab scheduling",
      icon: Wrench,
      color: "text-purple-400",
      accent: "border-purple-500/40 bg-purple-500/10",
      features: [
        { name: "Component Inventory", desc: "SKU catalog, min-stock thresholds, and lab rack coordinates" },
        { name: "Equipment Tracking", desc: "Serialized tracking of 3D printers, oscilloscopes, and tools" },
        { name: "Maintenance Logbook", desc: "Scheduled service dates, calibration records, and repair costs" },
        { name: "Arena Lab Booking", desc: "Time-window reservations for drone cages & testing courses" },
        { name: "Conflict Detection", desc: "Automatic prevention of double-booked lab assets" },
      ],
      previewHeadline: "REAL-TIME HARDWARE TELEMETRY",
      previewSnippet: `[HARDWARE INVENTORY STATUS]
• LiDAR VLP-16 ......... [AVAILABLE] · BAY 1
• STM32F407 Micro ...... [12 IN STOCK] (MIN: 5)
• BLDC Motor 24V ....... [24 UNITS] (RACK 2B)
• Rigol 100MHz Scope ... [IN USE: BAY 3] (Lead: Priya)
>>> SYSTEM STATUS: ALL EQUIPMENT CALIBRATED`,
    },
    {
      id: "ai",
      title: "AI Intelligence",
      subtitle: "Continuous autonomous operations",
      icon: Bot,
      color: "text-cyan-400",
      accent: "border-cyan-500/40 bg-cyan-500/10",
      features: [
        { name: "Context-Aware Copilot", desc: "System prompt injected with member tasks and club status" },
        { name: "Daily Club Pulse", desc: "Nightly automated executive briefing of all daily submissions" },
        { name: "Meeting Minutes (MoM)", desc: "Converts transcripts into structured deliverable action items" },
        { name: "Technical Assistance", desc: "Pinout troubleshooting, ROS2 configuration, and sensor debugging" },
        { name: "Blocker Extraction", desc: "Autonomous alert dispatch when critical hardware blockers emerge" },
      ],
      previewHeadline: "HUMORPHIC AI AGENT STREAM",
      previewSnippet: `[COPILOT QUERY: "Analyze today's blockers"]
AI: I detected 2 critical bottlenecks:
1. CAN Bus transceiver termination resistor mismatch (Bay 2).
2. Stereo camera calibration pending ROS2 topic remap.
Recommendation: Reassign Bay 1 oscilloscope to embedded team.`,
    },
    {
      id: "operations",
      title: "Team Operations",
      subtitle: "People, attendance & accountability",
      icon: Users,
      color: "text-emerald-400",
      accent: "border-emerald-500/40 bg-emerald-500/10",
      features: [
        { name: "Multimodal Attendance", desc: "Dynamic rotating QR codes, manual check-ins, and meeting sync" },
        { name: "Daily Work Updates", desc: "Mandatory EOD updates with GitHub and Drive proof-of-work links" },
        { name: "13 Club Departments", desc: "AI, CV, Embedded, Electronics, Mechanical, Media, and more" },
        { name: "Team Channels & DMs", desc: "Contextual discussion threads linked directly to project boards" },
        { name: "Celery Reminders", desc: "Automated nightly email reminders to defaulting members" },
      ],
      previewHeadline: "OPERATIONAL COMPLIANCE METRICS",
      previewSnippet: `[DAILY SUBMISSIONS · TODAY]
• Updates Logged: 46 / 51 members (90.2% compliance)
• Physical Lab Check-ins: 42 present, 3 late, 5 excused
• Next Scheduled Sync: Tomorrow 18:00 (Weekly Club Review)
>>> AUTOMATED CELERY REMINDER DISPATCHED AT 20:00`,
    },
    {
      id: "recognition",
      title: "Growth & Recognition",
      subtitle: "Gamification & verified credentials",
      icon: Award,
      color: "text-yellow-400",
      accent: "border-yellow-500/40 bg-yellow-500/10",
      features: [
        { name: "Experience Points (XP)", desc: "Earned for completed tasks, daily updates, and workshop attendance" },
        { name: "Dynamic Levels", desc: "Level progression calculated deterministically from member XP" },
        { name: "Achievement Badges", desc: "Unlockable badges: Lab Master, Bug Hunter, 7-Day Streak" },
        { name: "Digital Certificates", desc: "HTML template generation with custom signatures and borders" },
        { name: "Public Verification", desc: "Tamper-proof /verify/:id portal for universities and recruiters" },
      ],
      previewHeadline: "ENGINEERING EXCELLENCE BOARD",
      previewSnippet: `[LEADERBOARD HIGHLIGHTS]
#1 Alex (Embedded Lead) ..... 4,820 XP [LEVEL 49]
#2 Rahul (AI / Pathfinding) ... 4,250 XP [LEVEL 43]
#3 Priya (Robotics Mech) .... 3,980 XP [LEVEL 40]
>>> CERTIFICATE ISSUED: Workshop 2026 #HUM-CERT-94B8`,
    },
  ];

  const current = pillars[activePillar];
  const Icon = current.icon;

  return (
    <section id="solution" className="py-24 relative overflow-hidden bg-[#050a17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-4">
            COMPREHENSIVE ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            ONE PLATFORM. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-300 to-cyan-300">
              EVERY LAYER OF YOUR ROBOTICS ORGANIZATION.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Modular, interlinked, and purpose-built for student societies and high-performance engineering clubs.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {pillars.map((p, idx) => {
            const TabIcon = p.icon;
            const isSelected = activePillar === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? `${p.accent} ${p.color} border shadow-[0_0_20px_rgba(0,229,255,0.2)] font-bold scale-105`
                    : "glass-panel border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/20 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          {/* Left Column: Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-700">
                <Icon className={`w-7 h-7 ${current.color}`} />
              </div>
              <div>
                <h3 className="text-2xl font-black font-mono text-white tracking-wide uppercase">
                  {current.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {current.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-3.5 pt-2">
              {current.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className={`w-4 h-4 ${current.color} shrink-0 mt-0.5`} />
                  <div>
                    <h4 className="text-sm font-bold font-mono text-white tracking-wide">
                      {f.name}
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed font-sans">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-tech Live Terminal Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#030712] border border-cyan-500/30 p-5 shadow-[0_0_30px_rgba(0,229,255,0.1)] font-mono scanline-effect">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-slate-400 font-mono ml-2">
                    {current.previewHeadline}
                  </span>
                </div>
                <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Code / Telemetry Content */}
              <pre className="text-xs text-cyan-300/90 whitespace-pre-wrap leading-relaxed overflow-x-auto py-2">
                {current.previewSnippet}
              </pre>

              {/* Terminal Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  FEED_SYNC_OK
                </span>
                <span className="text-slate-400">HUMORPHICOS KERNEL v3.4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
