"use client";

import React, { useState, useEffect } from "react";
import { 
  Bot, 
  Cpu, 
  Activity, 
  Terminal, 
  Zap, 
  Award, 
  Layers, 
  Radio, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

type TabKey = "tasks" | "telemetry" | "ai" | "gamification";

export function TelemetryTerminal() {
  const [activeTab, setActiveTab] = useState<TabKey>("tasks");
  const [logTicks, setLogTicks] = useState(1);
  const [batteryLevel, setBatteryLevel] = useState(94);

  // Gentle live telemetry simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setLogTicks((prev) => prev + 1);
      setBatteryLevel((prev) => (prev <= 88 ? 96 : prev - 0.2));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-card/90 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-300">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-xs" />
          </div>
          <span className="text-xs font-mono font-semibold text-muted ml-2 tracking-wider flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-primary" />
            HUMORPHIC_SYSTEMS_INTERFACE v3.2
          </span>
        </div>

        {/* Live Badges */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            LIVE LINK ONLINE
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <Radio className="h-3 w-3 animate-pulse" />
            ROS2 MESH: 24 NODES
          </div>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="px-4 pt-3 border-b border-white/10 flex flex-wrap gap-2 bg-black/20">
        {[
          { key: "tasks" as TabKey, label: "Neural Task Matrix", icon: Layers, badge: "AI Active" },
          { key: "telemetry" as TabKey, label: "Robot Telemetry & Lab", icon: Cpu, badge: "99.4%" },
          { key: "ai" as TabKey, label: "GenAI Mission Agent", icon: Sparkles, badge: "Autonomous" },
          { key: "gamification" as TabKey, label: "Club XP & Ranks", icon: Award, badge: "Sprint #4" },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-t-xl transition-all relative border-b-2",
                isActive
                  ? "bg-white/10 text-white border-primary shadow-sm"
                  : "text-muted hover:text-white hover:bg-white/5 border-transparent"
              )}
            >
              <Icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted")} />
              <span>{tab.label}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-mono font-semibold",
                  isActive
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-white/5 text-muted-foreground"
                )}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Terminal Viewport */}
      <div className="p-6 text-foreground bg-gradient-to-b from-card/90 to-background/95 min-h-[340px]">
        {/* TAB 1: Neural Task Matrix */}
        {activeTab === "tasks" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/5">
              <div>
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Layers className="h-4 w-4 text-primary" />
                  Autonomous Robotics Sprint Board
                </h4>
                <p className="text-xs text-muted">AI automatically prioritizes hardware bottlenecks & deliverables</p>
              </div>
              <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-md">
                18 Tasks Completed · 3 In Progress
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Task 1 */}
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded text-[10px]">
                    #ROBOT-104
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="h-3 w-3" /> Ready for Test
                  </span>
                </div>
                <h5 className="font-medium text-xs text-white">Calibrate 6-DOF Arm Inverse Kinematics</h5>
                <p className="text-[11px] text-muted mt-1">ROS2 MoveIt package tuning for pick-and-place precision</p>
                <div className="mt-3 flex items-center justify-between text-[11px] text-muted font-mono">
                  <span>Hardware Lab A</span>
                  <span className="text-amber-400 font-semibold">Priority: High</span>
                </div>
              </div>

              {/* Task 2 */}
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded text-[10px]">
                    #VISION-089
                  </span>
                  <span className="text-cyan-400 flex items-center gap-1 text-[11px]">
                    <Activity className="h-3 w-3 animate-pulse" /> In Execution
                  </span>
                </div>
                <h5 className="font-medium text-xs text-white">YOLOv11 Edge Inference on Jetson Orin</h5>
                <p className="text-[11px] text-muted mt-1">Real-time obstacle segmentation at 90 FPS with TensorRT</p>
                <div className="mt-3 flex items-center justify-between text-[11px] text-muted font-mono">
                  <span>AI/ML Core</span>
                  <span className="text-cyan-400 font-semibold">ETA: 2h</span>
                </div>
              </div>

              {/* Task 3 */}
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded text-[10px]">
                    #PCB-042
                  </span>
                  <span className="text-amber-400 flex items-center gap-1 text-[11px]">
                    <Zap className="h-3 w-3" /> Reviewing CAD
                  </span>
                </div>
                <h5 className="font-medium text-xs text-white">Custom 48V Dual Motor Driver PCB</h5>
                <p className="text-[11px] text-muted mt-1">DRV8301 gate driver thermal simulation & routing check</p>
                <div className="mt-3 flex items-center justify-between text-[11px] text-muted font-mono">
                  <span>Embedded Systems</span>
                  <span className="text-emerald-400 font-semibold">Passed ERC</span>
                </div>
              </div>
            </div>

            {/* Live Progress Bar */}
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-muted">Sprint Milestone Completion</span>
              <span className="font-mono text-primary font-bold">84%</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 h-full w-[84%] rounded-full animate-pulse" />
            </div>
          </div>
        )}

        {/* TAB 2: Robot Telemetry & Lab */}
        {activeTab === "telemetry" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-muted font-mono">ROVER BATTERY</div>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                  {batteryLevel.toFixed(1)}%
                </div>
                <div className="text-[10px] text-emerald-300/80 mt-1">24.2V · 4.8A Draw</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-muted font-mono">LIDAR FREQUENCY</div>
                <div className="text-xl font-bold font-mono text-cyan-400 mt-1">20.4 Hz</div>
                <div className="text-[10px] text-cyan-300/80 mt-1">360° Point Cloud: Stable</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-muted font-mono">MOTOR DRIVE TEMP</div>
                <div className="text-xl font-bold font-mono text-amber-400 mt-1">42.8°C</div>
                <div className="text-[10px] text-amber-300/80 mt-1">Active Fan Cooling: 60%</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-muted font-mono">LAB WORKBENCHES</div>
                <div className="text-xl font-bold font-mono text-purple-400 mt-1">6 / 8</div>
                <div className="text-[10px] text-purple-300/80 mt-1">Active Hardware Bookings</div>
              </div>
            </div>

            {/* Telemetry Stream Log */}
            <div className="rounded-xl bg-black/60 border border-white/10 p-3.5 font-mono text-xs text-emerald-400/90 space-y-1 overflow-x-auto">
              <div className="text-muted-foreground flex items-center justify-between text-[11px] pb-1 border-b border-white/10">
                <span>[ROS2 TOPIC: /humorphic/telemetry/odom]</span>
                <span className="text-white/60">Node Hash: 0x7fa2c</span>
              </div>
              <p className="text-xs pt-1">
                &gt; [T+{logTicks}s] POSE_ESTIMATE: x=3.142 y=-1.024 yaw=+0.412 rad | IMU drift: 0.002°
              </p>
              <p className="text-xs text-cyan-400">
                &gt; [T+{logTicks}s] CAN_BUS_RECV: 4x BLDC odometry frames acknowledged (CRC ok)
              </p>
              <p className="text-xs text-purple-400">
                &gt; [T+{logTicks}s] AI_NAV_PLANNER: Waypoint #7 reached. Switching to autonomous docking.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: GenAI Mission Agent */}
        {activeTab === "ai" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary text-white">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Humorphic Neural Co-Pilot</h4>
                <p className="text-xs text-muted">Specialized LLM agent tuned for Robotics CAD, ROS2, and embedded firmware</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <p className="text-xs font-mono text-muted mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                  MEMBER PROMPT:
                </p>
                <p className="text-xs text-white font-medium">
                  &ldquo;Analyze our drone quadrotor PID controller oscillations during high wind turbulence.&rdquo;
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-primary/10 via-cyan-500/10 to-transparent border border-primary/30 p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-primary font-bold flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-spin" />
                    NEURAL AGENT RESPONSE:
                  </span>
                  <span className="text-[10px] font-mono text-muted">Execution: 340ms</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Based on the flight telemetry log, the D-gain on the pitch axis is over-amplifying sensor noise above 400Hz. 
                  <strong className="text-white ml-1">Recommendation:</strong> Apply a 2nd-order low-pass biquad filter at 85Hz cutoff and decrease <code className="text-cyan-300 bg-black/40 px-1 py-0.5 rounded font-mono">Kd</code> by 18%.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Club XP & Ranks */}
        {activeTab === "gamification" && (
          <div className="space-y-3 animate-in fade-in duration-300">
            <div className="flex items-center justify-between text-xs pb-1">
              <span className="font-semibold text-white">Season 2026 Robotics Sprint Leaderboard</span>
              <span className="text-muted font-mono">Updated 10m ago</span>
            </div>

            <div className="space-y-2">
              {[
                { rank: "01", name: "Aarav Sharma", role: "AI Vision Lead", xp: "4,820 XP", badge: "🏆 Grandmaster Builder" },
                { rank: "02", name: "Riya Verma", role: "Robotics Kinematics", xp: "4,150 XP", badge: "⚡ Circuit Wizard" },
                { rank: "03", name: "Vikram Nair", role: "Embedded Firmware", xp: "3,910 XP", badge: "🦾 ROS2 Architect" },
              ].map((user) => (
                <div
                  key={user.rank}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-primary w-6 text-center">{user.rank}</span>
                    <div>
                      <p className="text-xs font-bold text-white">{user.name}</p>
                      <p className="text-[11px] text-muted">{user.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-cyan-400">{user.xp}</span>
                    <p className="text-[10px] text-muted-foreground">{user.badge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2.5 bg-black/40 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-muted">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Autonomous Club Scheduling: ACTIVE
        </span>
        <span className="text-white/60">HUMORPHIC_NODE_01 // SECURE ENCLAVE</span>
      </div>
    </div>
  );
}
