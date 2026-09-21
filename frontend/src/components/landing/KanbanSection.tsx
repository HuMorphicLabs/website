"use client";

import React, { useState } from "react";
import {
  Kanban,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  User,
  Tag,
  ArrowRight,
} from "lucide-react";

interface TaskItem {
  id: string;
  title: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  assignee: string;
  department: string;
  progress: number;
  status: "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE" | "BLOCKED";
}

export default function KanbanSection() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: "TSK-101",
      title: "ROS2 Node DDS Cyclone Setup",
      priority: "MEDIUM",
      assignee: "Alex M.",
      department: "AI / ML",
      progress: 25,
      status: "TODO",
    },
    {
      id: "TSK-102",
      title: "LiDAR Calibration & Point Cloud Remap",
      priority: "URGENT",
      assignee: "Priya S.",
      department: "COMP VISION",
      progress: 80,
      status: "IN_PROGRESS",
    },
    {
      id: "TSK-103",
      title: "STM32 Dual Motor Driver PCB Layout",
      priority: "HIGH",
      assignee: "Rahul K.",
      department: "EMBEDDED",
      progress: 65,
      status: "IN_PROGRESS",
    },
    {
      id: "TSK-104",
      title: "Rocker-Bogie Stress FEA Simulation",
      priority: "HIGH",
      assignee: "Dev P.",
      department: "MECHANICAL",
      progress: 95,
      status: "REVIEW",
    },
    {
      id: "TSK-105",
      title: "Chassis CNC Milling & Anodizing",
      priority: "MEDIUM",
      assignee: "Rohit B.",
      department: "MECHANICAL",
      progress: 100,
      status: "DONE",
    },
    {
      id: "TSK-106",
      title: "CAN-Bus Transceiver Resistor Termination",
      priority: "URGENT",
      assignee: "Aman T.",
      department: "ELECTRONICS",
      progress: 40,
      status: "BLOCKED",
    },
  ]);

  const columns: { id: TaskItem["status"]; title: string; color: string; border: string }[] = [
    { id: "TODO", title: "TO DO", color: "text-slate-300", border: "border-slate-700" },
    { id: "IN_PROGRESS", title: "IN PROGRESS", color: "text-cyan-400", border: "border-cyan-500/40" },
    { id: "REVIEW", title: "REVIEW", color: "text-purple-400", border: "border-purple-500/40" },
    { id: "DONE", title: "DONE", color: "text-emerald-400", border: "border-emerald-500/40" },
    { id: "BLOCKED", title: "BLOCKED", color: "text-red-400", border: "border-red-500/40" },
  ];

  const getPriorityStyle = (priority: TaskItem["priority"]) => {
    switch (priority) {
      case "URGENT":
        return "bg-red-500/20 text-red-400 border-red-500/40";
      case "HIGH":
        return "bg-amber-500/20 text-amber-400 border-amber-500/40";
      case "MEDIUM":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/40";
      case "LOW":
        return "bg-slate-500/20 text-slate-300 border-slate-500/40";
    }
  };

  return (
    <section id="kanban" className="py-24 relative overflow-hidden bg-[#040816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-xs tracking-widest uppercase mb-4">
            <Kanban className="w-3.5 h-3.5" />
            SPRINT EXECUTION ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            ROBOTICS-AWARE <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-400">
              INTERACTIVE KANBAN BOARD.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Every task is directly linked to hardware inventory parts, WBS milestone phases, and engineering departments.
          </p>
        </div>

        {/* Futuristic Kanban Board Canvas */}
        <div className="overflow-x-auto pb-6">
          <div className="min-w-[1000px] grid grid-cols-5 gap-4">
            {columns.map((col) => {
              const colTasks = tasks.filter((t) => t.status === col.id);
              return (
                <div
                  key={col.id}
                  className="rounded-2xl bg-[#080d1e]/80 border border-slate-800 p-4 flex flex-col justify-start"
                >
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <span className={`text-xs font-mono font-bold tracking-wider uppercase ${col.color}`}>
                      {col.title}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-700">
                      {colTasks.length}
                    </span>
                  </div>

                  {/* Task Cards */}
                  <div className="space-y-3 flex-1">
                    {colTasks.map((t) => (
                      <div
                        key={t.id}
                        className="glass-panel p-4 rounded-xl border border-slate-800/90 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 cursor-grab active:cursor-grabbing hover:-translate-y-1 group"
                      >
                        {/* Card Header: ID & Priority */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono text-slate-400">
                            {t.id}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase border ${getPriorityStyle(
                              t.priority
                            )}`}
                          >
                            {t.priority}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-xs font-bold font-mono text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {t.title}
                        </h4>

                        {/* Department Tag */}
                        <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 w-fit">
                          <Tag className="w-2.5 h-2.5" />
                          <span>{t.department}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-3 space-y-1">
                          <div className="flex justify-between text-[9px] font-mono text-slate-400">
                            <span>Subsystem Progress</span>
                            <span className="text-cyan-400 font-bold">{t.progress}%</span>
                          </div>
                          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                              style={{ width: `${t.progress}%` }}
                            />
                          </div>
                        </div>

                        {/* Footer: Assignee */}
                        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span className="flex items-center gap-1 text-slate-300">
                            <User className="w-3 h-3 text-cyan-400" />
                            {t.assignee}
                          </span>
                          <span className="text-[9px] text-slate-400">SYNCED</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
