"use client";

import React from "react";
import {
  Award,
  Zap,
  Flame,
  Bug,
  Code2,
  CheckCircle2,
  Trophy,
  Crown,
  Sparkles,
} from "lucide-react";

export default function GamificationSection() {
  const topEngineers = [
    { rank: "01", name: "Alex Mercer", role: "Embedded Lead", xp: "4,820 XP", level: 49 },
    { rank: "02", name: "Rahul Sharma", role: "AI / Pathfinding", xp: "4,250 XP", level: 43 },
    { rank: "03", name: "Priya Sundaram", role: "Mechanical Lead", xp: "3,980 XP", level: 40 },
    { rank: "04", name: "Aman Tiwari", role: "Electronics Engineer", xp: "3,720 XP", level: 38 },
  ];

  const badges = [
    {
      name: "Lab Master",
      desc: "50+ physical lab sessions without safety violation",
      icon: Crown,
      color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    },
    {
      name: "Bug Hunter",
      desc: "Resolved 20+ critical hardware & firmware blockers",
      icon: Bug,
      color: "text-red-400 bg-red-500/10 border-red-500/30",
    },
    {
      name: "Code Contributor",
      desc: "Pushed 50+ tested ROS2 & micro-ROS commits",
      icon: Code2,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      name: "First Task Complete",
      desc: "Successfully closed initial onboarding sprint task",
      icon: CheckCircle2,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      name: "7-Day Streak",
      desc: "7 consecutive days of on-time daily update submissions",
      icon: Flame,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    },
  ];

  return (
    <section id="gamification" className="py-24 relative overflow-hidden bg-[#040816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 font-mono text-xs tracking-widest uppercase mb-4">
            <Trophy className="w-3.5 h-3.5" />
            ENGINEERING INCENTIVE MATRIX
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            ENGINEERING SHOULD <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-200 to-cyan-400">
              FEEL REWARDING.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Level up by building hardware, solving firmware bugs, attending lab reviews, and submitting daily updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Top Engineers Leaderboard */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-yellow-400" />
                <span className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  TOP ENGINEERS · ALL TIME
                </span>
              </div>
              <span className="text-[10px] font-mono text-yellow-400 font-bold bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/30">
                SEASON 2026
              </span>
            </div>

            <div className="space-y-3">
              {topEngineers.map((eng, i) => (
                <div
                  key={eng.rank}
                  className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                    i === 0
                      ? "bg-yellow-500/10 border-yellow-500/40 shadow-[0_0_15px_rgba(234,179,8,0.15)]"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-base font-black ${
                        i === 0 ? "text-yellow-400" : "text-slate-400"
                      }`}
                    >
                      {eng.rank}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold font-mono text-white flex items-center gap-1.5">
                        {eng.name}
                        {i === 0 && <Sparkles className="w-3.5 h-3.5 text-yellow-400" />}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">{eng.role}</span>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <div className="text-sm font-bold text-cyan-400">{eng.xp}</div>
                    <div className="text-[10px] text-slate-400 uppercase">LVL {eng.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Unlockable Badges */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>UNLOCKABLE MERIT BADGES</span>
            </div>

            {badges.map((b) => {
              const BadgeIcon = b.icon;
              return (
                <div
                  key={b.name}
                  className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all flex items-center gap-4 group"
                >
                  <div className={`p-3 rounded-xl border shrink-0 ${b.color}`}>
                    <BadgeIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                      {b.name}
                    </h4>
                    <p className="text-xs text-slate-300 font-sans mt-0.5">{b.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold shrink-0 hidden sm:inline">
                    +XP REWARD
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
