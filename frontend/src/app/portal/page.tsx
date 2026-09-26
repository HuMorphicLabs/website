"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { organizationsApi, eventsApi } from "@/lib/api";
import { 
  Bot, 
  Building2, 
  Calendar, 
  Clock, 
  Compass, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight,
  ChevronRight,
  Terminal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { RollingTiltCard } from "@/components/ui/rolling-tilt-card";
import { NeuralBackground } from "@/components/ui/neural-background";

export default function PublicPortalPage() {
  const { data: orgs } = useQuery({ queryKey: ["public-orgs"], queryFn: organizationsApi.public });
  const { data: events } = useQuery({
    queryKey: ["public-events"],
    queryFn: eventsApi.publicList,
  });

  const displayEvents = (events ?? []).filter((e) => e.is_public);
  const sampleEvents = displayEvents.length > 0 ? displayEvents : [
    {
      id: 901,
      title: "Autonomous Rover Field Trials 2026",
      event_type: "competition",
      location: "Robotics Arena & Testing Field",
      start_time: "Oct 12, 2026 · 10:00 AM",
      description: "Testing obstacle navigation, stereo vision SLAM, and terrain traversing on rover chassis.",
    },
    {
      id: 902,
      title: "ROS2 & Embedded Micro-ROS Workshop",
      event_type: "workshop",
      location: "Hardware Systems Lab 3",
      start_time: "Oct 18, 2026 · 02:00 PM",
      description: "Hands-on tutorial building custom DDS publishers on ESP32 microcontrollers connected to ROS2 Galactic.",
    },
    {
      id: 903,
      title: "Computer Vision & Edge TensorRT Hackathon",
      event_type: "hackathon",
      location: "Innovation Hub Main Auditorium",
      start_time: "Nov 04, 2026 · 09:00 AM",
      description: "48-hour build marathon deploying ultra-low latency neural networks on NVIDIA Jetson modules.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground cyber-grid relative overflow-x-hidden">
      <NeuralBackground />

      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-card/85 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-cyan-400 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Overview Home</span>
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Bot className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <span className="font-bold text-sm text-white">Humorphic Public Hub</span>
              <span className="text-[10px] font-mono text-muted block -mt-0.5">ROBOTICS DIRECTORY</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login">
            <Button size="sm" className="rolling-shine-btn text-xs font-bold gap-1.5">
              <Terminal className="h-3.5 w-3.5" />
              Member Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white mb-3">
            Connected Chapters & Robotics Labs
          </h1>
          <p className="text-sm text-muted">
            Explore member chapters, upcoming hardware field trials, and cryptographically verified club certificates.
          </p>
        </div>

        {/* Organizations Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Active Organizations & Labs
            </h2>
            <Link href="/register" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1">
              Register Club Node <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(orgs && orgs.length > 0 ? orgs : [
              {
                id: 1,
                name: "Humorphic Central Robotics Lab",
                description: "Core autonomous systems chapter focusing on ROS2 manipulation, SLAM rovers, and UAV swarm research.",
                slug: "humorphic-central",
              },
              {
                id: 2,
                name: "AI & Embedded Computing Squad",
                description: "Dedicated hardware acceleration unit specializing in Jetson edge AI, custom PCB routing, and real-time RTOS.",
                slug: "ai-embedded",
              },
              {
                id: 3,
                name: "Mechatronics & Dynamics Division",
                description: "High-precision CAD modeling, 3D additive manufacturing, inverse kinematics simulation, and payload testing.",
                slug: "mechatronics-dynamics",
              },
            ]).map((org) => (
              <RollingTiltCard key={org.id} maxTilt={8} glowColor="rgba(99, 102, 241, 0.2)">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block shadow-sm" />
                      <span className="text-[10px] font-mono text-muted uppercase">Active Node</span>
                    </div>
                    <h3 className="font-bold text-base text-white">{org.name}</h3>
                    <p className="text-xs text-muted mt-2 leading-relaxed">{org.description}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400 font-mono">
                    <span>/org/{org.slug || "node"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </RollingTiltCard>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-400" />
              Upcoming Sprints & Competitions
            </h2>
            <Link href="/register" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1">
              View All Sprints <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sampleEvents.map((ev: any) => (
              <RollingTiltCard key={ev.id} maxTilt={8} glowColor="rgba(6, 182, 212, 0.2)">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                        {ev.event_type}
                      </span>
                      <span className="text-[11px] font-mono text-muted flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {ev.start_time || "Oct 2026"}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-white">{ev.title}</h3>
                    <p className="text-xs text-muted mt-2 leading-relaxed">{ev.description || ev.location}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-muted font-medium flex items-center gap-1">
                      <Compass className="h-3.5 w-3.5 text-primary" /> {ev.location}
                    </span>
                    <Link href="/register" className="text-cyan-400 font-semibold hover:underline flex items-center gap-1">
                      RSVP <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </RollingTiltCard>
            ))}
          </div>
        </section>

        {/* Certificate Verification Callout */}
        <section className="rounded-2xl border border-white/10 bg-card/60 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Cryptographic Certificate Verification</h3>
              <p className="text-xs text-muted mt-1">Verify membership credentials and hackathon awards securely.</p>
            </div>
          </div>
          <Link href="/verify">
            <Button className="rolling-shine-btn text-xs font-bold gap-2">
              <ShieldCheck className="h-4 w-4" />
              Verify Certificate Online
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}