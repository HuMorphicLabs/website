"use client";

import React, { useState } from "react";
import {
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  Sparkles,
  Ticket,
  CheckCircle2,
} from "lucide-react";

export default function EventsSection() {
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);

  const events = [
    {
      title: "Robotics Workshop 2026",
      type: "HANDS-ON WORKSHOP",
      typeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      date: "24 OCT 2026",
      time: "10:00 — 17:00 IST",
      location: "Central Robotics Lab Block A",
      seats: "120 SEATS",
      seatsLeft: "14 REMAINING",
      desc: "Comprehensive masterclass on ROS2 architecture, motor controllers, and sensor fusion for collegiate rovers.",
    },
    {
      title: "Autonomous Rover Hackathon",
      type: "48H HACKATHON",
      typeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      date: "12 NOV 2026",
      time: "48 Hours Non-Stop",
      location: "Hardware Hackerspace Arena",
      seats: "200 SEATS",
      seatsLeft: "38 REMAINING",
      desc: "Design and build an autonomous terrain-navigating robot with computer vision. ₹1.5L prize pool.",
    },
    {
      title: "Edge AI & Jetson Seminar",
      type: "TECH SEMINAR",
      typeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      date: "28 NOV 2026",
      time: "14:00 — 16:30 IST",
      location: "Auditorium Hall & Virtual Stream",
      seats: "350 SEATS",
      seatsLeft: "82 REMAINING",
      desc: "NVIDIA TensorRT acceleration for embedded robotics perception with guest faculty advisors.",
    },
  ];

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-[#030712] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-xs tracking-widest uppercase mb-4">
            <Ticket className="w-3.5 h-3.5" />
            COMMUNITY & HACKATHONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            UPCOMING EVENTS & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-300">
              ROBOTICS CHALLENGES.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Level up your skills through hands-on bootcamps, autonomous hardware hackathons, and guest engineering seminars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((evt) => {
            const isDone = registeredEvent === evt.title;
            return (
              <div
                key={evt.title}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase border ${evt.typeColor}`}
                    >
                      {evt.type}
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 font-bold">
                      {evt.seatsLeft}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
                    {evt.desc}
                  </p>

                  <div className="mt-5 space-y-2 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-slate-300 font-bold">{evt.date}</span>
                      <span className="text-slate-500">·</span>
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="line-clamp-1">{evt.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{evt.seats}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setRegisteredEvent(evt.title)}
                    className={`w-full py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isDone
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        : "bg-cyan-500/15 hover:bg-cyan-400 text-cyan-300 hover:text-slate-950 border border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                    }`}
                  >
                    {isDone ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>REGISTERED ✓</span>
                      </>
                    ) : (
                      <>
                        <span>REGISTER NOW</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
