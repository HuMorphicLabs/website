"use client";

import React, { useState } from "react";
import {
  Bot,
  Terminal,
  Send,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  CornerDownLeft,
} from "lucide-react";

export default function AICopilotSection() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  const sampleConversations = [
    {
      userQuery: "What is blocking Rover V2 right now?",
      aiResponse: {
        headline: "I analyzed active sprint tasks, Git commits, and Bay 2 lab sensors.",
        blockers: [
          { status: "blocker", text: "LiDAR point cloud calibration pending ROS2 TF transform" },
          { status: "blocker", text: "Motor controller thermal test requires Bay 3 oscilloscope" },
          { status: "done", text: "Autonomous navigation waypoint planner node ready" },
        ],
        recommendation:
          "Complete LiDAR calibration before the 16:00 autonomous sand track test. Reassign Bay 1 oscilloscope to the embedded team.",
      },
    },
    {
      userQuery: "Summarize today's 18:00 daily work updates for Club President",
      aiResponse: {
        headline: "Daily pulse aggregated across 51 members (90.2% compliance).",
        blockers: [
          { status: "done", text: "Computer Vision team pushed Yolov8 rover obstacle detection (PR #44)" },
          { status: "done", text: "Mechanical team completed 4 CNC milled bogie linkages" },
          { status: "blocker", text: "Electronics team reports CAN-Bus transceiver bus-off error on Chassis #1" },
        ],
        recommendation:
          "Team velocity is +14% ahead of schedule for Rover V2. Electronics team requires mentor review tomorrow 10:00.",
      },
    },
    {
      userQuery: "Draft Meeting Minutes & Action Items from yesterday's sync",
      aiResponse: {
        headline: "Parsed 45-minute audio transcript into 4 structured deliverables.",
        blockers: [
          { status: "done", text: "Alex: Finalize STM32 firmware CAN driver by Thursday" },
          { status: "done", text: "Priya: Complete Rocker-Bogie FEA stress report for faculty advisor" },
          { status: "done", text: "Rahul: Order 5 backup HC-SR04 ultrasonic sensors from lab budget" },
        ],
        recommendation:
          "All deliverables have been automatically created as Kanban task cards under 'Locomotion Phase'.",
      },
    },
  ];

  const current = sampleConversations[activeQueryIndex];

  return (
    <section id="ai-copilot" className="py-24 relative overflow-hidden bg-[#030712] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-4">
            <Bot className="w-3.5 h-3.5" />
            DEEP LAB CONTEXT INTELLIGENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            MEET YOUR <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-400 neon-text-cyan">
              ENGINEERING COPILOT.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Injected with live telemetry, member sprint tasks, WBS hierarchies, and lab hardware status.
            Ask anything — from blocker triage to automated executive recaps.
          </p>
        </div>

        {/* Interactive Chat Console Window */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(0,229,255,0.15)] overflow-hidden font-mono">
          {/* Terminal Title Bar */}
          <div className="px-6 py-4 bg-[#050a17] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-slate-400 ml-3 flex items-center gap-1.5 font-bold">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                HUMORPHIC AI KERNEL v3.4 · ACTIVE SESSION
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">
                CONTEXT SYNCED
              </span>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#030712]/90 min-h-[380px]">
            {/* User Prompt */}
            <div className="flex items-start gap-3.5 justify-end">
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 max-w-xl text-white text-xs sm:text-sm leading-relaxed shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                <div className="text-[10px] text-cyan-400 font-bold uppercase mb-1 flex items-center gap-1">
                  <span>CLUB LEAD QUERY</span>
                </div>
                {current.userQuery}
              </div>
            </div>

            {/* AI Response Bubble */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-bold shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                <Bot className="w-5 h-5 text-slate-950" />
              </div>

              <div className="flex-1 p-5 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-3.5">
                <p className="text-slate-300 font-sans text-xs">
                  {current.aiResponse.headline}
                </p>

                {/* Status Deliverables List */}
                <div className="space-y-2 pt-1">
                  {current.aiResponse.blockers.map((b, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg text-xs font-mono border ${
                        b.status === "blocker"
                          ? "bg-red-500/10 border-red-500/30 text-red-300"
                          : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                      }`}
                    >
                      {b.status === "blocker" ? (
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>

                {/* Actionable Next Step */}
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 block mb-1">
                    RECOMMENDED ACTION:
                  </span>
                  <p className="text-cyan-200 font-sans">{current.aiResponse.recommendation}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Query Selector Chips */}
          <div className="p-4 bg-[#050a17] border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-[10px] text-slate-400 uppercase font-bold mr-2">
              Try Prompts:
            </span>
            {sampleConversations.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveQueryIndex(i)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                  activeQueryIndex === i
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                &ldquo;{c.userQuery.slice(0, 32)}...&rdquo;
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
