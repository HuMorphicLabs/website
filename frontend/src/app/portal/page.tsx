"use client";

import { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { organizationsApi, eventsApi } from "@/lib/api";
import { 
  Bot, 
  Sparkles, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Activity, 
  ArrowRight, 
  Calendar, 
  Building2, 
  Users, 
  QrCode, 
  ChevronRight,
  Terminal,
  Radio,
  Clock,
  Compass,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { RollingTiltCard } from "@/components/ui/rolling-tilt-card";
import { TelemetryTerminal } from "@/components/portal/telemetry-terminal";
import { NeuralBackground } from "@/components/ui/neural-background";
import { FloatingHud } from "@/components/ui/floating-hud";
import { RollingMarquee } from "@/components/ui/rolling-marquee";
import { Robotics3DModel } from "@/components/ui/robotics-3d-model";

export default function PublicPortalPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const { data: orgs } = useQuery({
    queryKey: ["public-orgs"],
    queryFn: organizationsApi.public,
  });

  const { data: events } = useQuery({
    queryKey: ["public-events"],
    queryFn: eventsApi.publicList,
  });

  // Feature cards data
  const features = [
    {
      icon: Cpu,
      title: "Robotics Hardware Lab",
      badge: "Real-time Telemetry",
      glowColor: "rgba(6, 182, 212, 0.3)",
      tagColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
      description:
        "Track microcontrollers, LiDARs, motor drivers, sensors, and 3D printer allocations. Instant QR-code checkouts with automated component return alerts.",
    },
    {
      icon: Sparkles,
      title: "Gen-AI Mission Control",
      badge: "Autonomous Triage",
      glowColor: "rgba(139, 92, 246, 0.3)",
      tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
      description:
        "Embedded LLM copilot that digests CAD specs, generates ROS2 path planning code, synthesizes daily standups, and flags critical project bottlenecks.",
    },
    {
      icon: Layers,
      title: "Sprint & Kanban Matrix",
      badge: "ROS2 & Agile",
      glowColor: "rgba(99, 102, 241, 0.3)",
      tagColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/30",
      description:
        "Multi-disciplinary engineering sprints connecting Mechanical, AI/Vision, and Firmware teams into a unified dependency graph with milestone auto-tracking.",
    },
    {
      icon: ShieldCheck,
      title: "Biometric & QR Attendance",
      badge: "Multi-Modal",
      glowColor: "rgba(16, 185, 129, 0.3)",
      tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
      description:
        "Dynamic geofenced lab check-in, encrypted QR tokens, and AI facial recognition stubs ensuring verifiable presence for high-stakes robotics builds.",
    },
    {
      icon: Award,
      title: "Gamified Builder XP",
      badge: "Skill Trees",
      glowColor: "rgba(245, 158, 11, 0.3)",
      tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
      description:
        "Earn XP for closed PRs, hardware calibrations, and workshop mentorship. Level up builder ranks from Novice Apprentice to Grandmaster Autonomous Engineer.",
    },
    {
      icon: QrCode,
      title: "Cryptographic Certificates",
      badge: "Instant Verification",
      glowColor: "rgba(239, 68, 68, 0.3)",
      tagColor: "text-rose-400 bg-rose-400/10 border-rose-400/30",
      description:
        "Automated verifiable certificate generation for hackathons, workshop graduations, and project completions with tamper-proof public verification.",
    },
  ];

  // Stats data
  const stats = [
    { label: "Hardware Nodes Tracked", value: "2,400+", change: "+18% this month" },
    { label: "Autonomous Telemetry Uptime", value: "99.98%", change: "Real-time sync" },
    { label: "Multi-Club Organizations", value: "12+", change: "Pan-university mesh" },
    { label: "Completed Engineering Tasks", value: "8,500+", change: "AI Triaged" },
  ];

  // Display events fallback if none in database yet
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
    <div className="min-h-screen bg-background text-foreground cyber-grid-bg relative overflow-x-hidden selection:bg-primary selection:text-white">
      {/* ── Interactive Cyber Neural Particle Mesh Canvas ── */}
      <NeuralBackground />

      {/* ── Top Ambient Light Accents ── */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-primary/20 via-cyan-500/10 to-transparent blur-3xl opacity-60 -z-10" />
      <div className="pointer-events-none absolute top-[600px] -left-40 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-[900px] -right-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl -z-10" />

      {/* ── Floating Header ── */}
      <header className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-panel-glow rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl transition-all">
          {/* Logo & Brand */}
          <Link href="/portal" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-indigo-600 to-cyan-500 p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                  <Bot className="h-5 w-5 text-cyan-400 group-hover:text-primary transition-colors" />
                </div>
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                Humorphic<span className="text-cyan-400">OS</span>
              </span>
              <span className="text-[10px] font-mono text-muted tracking-widest block -mt-0.5">
                AUTONOMOUS LABS
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-muted">
            <a href="#features" className="hover:text-cyan-400 transition-colors">
              Platform Features
            </a>
            <a href="#models3d" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-cyan-400" />
              3D Digital Twin
            </a>
            <a href="#telemetry" className="hover:text-cyan-400 transition-colors">
              Live Telemetry
            </a>
            <a href="#events" className="hover:text-cyan-400 transition-colors">
              Events & Sprints
            </a>
            <Link href="/verify" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Verify Credentials
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/login">
              <Button size="sm" className="rolling-shine-btn bg-primary hover:bg-primary-hover font-semibold px-4 text-xs shadow-md">
                Launch Terminal
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION WITH 3D FLOATING HUD ── */}
      <section className="relative pt-20 pb-20 px-6 sm:px-8 max-w-7xl mx-auto text-center">
        {/* Dynamic Floating Robotics HUD Elements */}
        <FloatingHud />

        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs font-medium text-cyan-300 mb-8 backdrop-blur-md animate-float">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="tracking-wide font-mono font-semibold">NEXT-GEN ROBOTICS OS · GEN-AI & ROS2 INTEGRATED</span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] mb-6 relative z-10">
          The Autonomous Operating System for{" "}
          <span className="shimmer-text">Next-Gen Robotics</span> Clubs.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-10 relative z-10">
          Orchestrate multi-disciplinary robotics teams, track laboratory hardware inventory, automate ROS2 telemetry, and deploy autonomous AI mission triage in one unified platform.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 relative z-10">
          <Link href="/register">
            <button className="rolling-shine-btn flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl hover:shadow-cyan-500/25">
              Join The Club & Build
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
          <Link href="/login">
            <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm backdrop-blur-md transition-all hover:border-cyan-400/50">
              <Terminal className="h-4 w-4 text-cyan-400" />
              Member Sign In
            </button>
          </Link>
          <Link href="/verify">
            <button className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 hover:border-emerald-500/40 text-muted hover:text-white font-medium text-sm transition-all">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Verify Certificate
            </button>
          </Link>
        </div>

        {/* Live Rolling Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto relative z-10">
          {stats.map((s, idx) => (
            <RollingTiltCard
              key={idx}
              maxTilt={8}
              className="h-full"
              glowColor="rgba(99, 102, 241, 0.2)"
            >
              <div className="p-5 text-left h-full flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-wider">{s.label}</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-mono tracking-tight">
                    {s.value}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                  {s.change}
                </div>
              </div>
            </RollingTiltCard>
          ))}
        </div>
      </section>

      {/* ── CONTINUOUS INFINITE ROLLING TICKER MARQUEE ── */}
      <RollingMarquee />

      {/* ── 3D DIGITAL ROBOTICS TWIN & LIVE TELEMETRY SHOWCASE ── */}
      <section id="models3d" className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5 animate-spin" />
            3D DIGITAL TWIN & TELEMETRY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Real-Time 3D Kinematics & Mission Control
          </h2>
          <p className="text-muted text-sm sm:text-base">
            Interact with our 3D digital robotics twins in real-time space while streaming telemetry, task dependencies, and ROS2 message buses.
          </p>
        </div>

        {/* 2-Column High-Tech 3D Dual Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Column 1: Interactive 3D Model with drag-to-orbit controls */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/25 via-primary/20 to-purple-600/25 rounded-3xl blur-2xl opacity-60 -z-10" />
            <Robotics3DModel />
          </div>

          {/* Column 2: Interactive Telemetry Matrix & Task Board */}
          <div id="telemetry" className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/25 via-indigo-600/20 to-cyan-500/25 rounded-3xl blur-2xl opacity-60 -z-10" />
            <TelemetryTerminal />
          </div>
        </div>
      </section>

      {/* ── CORE PLATFORM FEATURES (3D ROLLING CARDS) ── */}
      <section id="features" className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-purple-400 bg-purple-400/10 border border-purple-400/20 px-3 py-1 rounded-full mb-3">
              <Layers className="h-3.5 w-3.5" />
              INTELLIGENT ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Engineered for Hardware & Robotics Innovators
            </h2>
          </div>
          <p className="text-muted text-sm max-w-md">
            Built from the ground up for high-velocity university and maker robotics labs with full hardware-in-the-loop awareness.
          </p>
        </div>

        {/* 6 High-Performance 3D Rolling Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <RollingTiltCard
                key={idx}
                maxTilt={14}
                scale={1.03}
                glowColor={feat.glowColor}
                className="h-full"
              >
                <div className="p-7 flex flex-col justify-between h-full bg-gradient-to-b from-white/5 to-transparent">
                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-white">
                        <Icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${feat.tagColor}`}>
                        {feat.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                      {feat.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-white/60">
                    <span className="font-mono text-[11px]">System Ready</span>
                    <span className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300">
                      Explore module <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </RollingTiltCard>
            );
          })}
        </div>
      </section>

      {/* ── LIVE ORGANIZATIONS & TEAMS SHOWCASE ── */}
      <section className="py-16 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2.5">
              <Building2 className="h-6 w-6 text-primary" />
              Connected Robotics Organizations
            </h2>
            <p className="text-sm text-muted mt-1">Multi-club workspace hierarchy supporting chapters, labs, and research divisions.</p>
          </div>
          <Link href="/register">
            <Button size="sm" variant="outline" className="text-xs gap-1.5">
              Register Your Club Chapter <ArrowRight className="h-3 w-3" />
            </Button>
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
            <RollingTiltCard key={org.id} maxTilt={10} glowColor="rgba(99, 102, 241, 0.25)">
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block shadow-sm" />
                    <span className="text-[10px] font-mono text-muted uppercase">Active Node</span>
                  </div>
                  <h4 className="font-bold text-base text-white">{org.name}</h4>
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

      {/* ── UPCOMING EVENTS & HACKATHONS ── */}
      <section id="events" className="py-16 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2.5">
              <Calendar className="h-6 w-6 text-cyan-400" />
              Upcoming Sprints, Trials & Events
            </h2>
            <p className="text-sm text-muted mt-1">Open hardware hackathons, field trials, and hands-on robotics workshops.</p>
          </div>
          <Link href="/register">
            <Button size="sm" className="rolling-shine-btn text-xs gap-1.5 font-semibold">
              Get Event Pass <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sampleEvents.map((ev: any) => (
            <RollingTiltCard key={ev.id} maxTilt={10} glowColor="rgba(6, 182, 212, 0.25)">
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                      {ev.event_type}
                    </span>
                    <span className="text-[11px] font-mono text-muted flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {ev.start_time || "Coming Soon"}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-white">{ev.title}</h4>
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

      {/* ── VERIFICATION CALLOUT BANNER ── */}
      <section className="py-16 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/15 via-cyan-500/10 to-purple-600/15 p-8 sm:p-12 relative overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full mb-4">
              <ShieldCheck className="h-4 w-4" />
              CRYPTOGRAPHIC CREDENTIAL ENGINE
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Instant Certificate & Membership Verification
            </h3>
            <p className="text-muted text-sm sm:text-base mb-6 leading-relaxed">
              Every completed robotics hackathon, team tenure, and leadership milestone is cryptographically logged. Verify builder certificates or download authenticated transcripts in seconds.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/verify">
                <Button size="lg" className="rolling-shine-btn bg-emerald-600 hover:bg-emerald-500 text-white font-bold gap-2 text-sm shadow-lg shadow-emerald-600/30">
                  <ShieldCheck className="h-4 w-4" />
                  Verify Certificate Online
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="secondary" className="text-sm font-semibold text-white">
                  Explore Club Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 bg-black/40 py-12 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Bot className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <p className="font-bold text-sm text-white">HumorphicOS</p>
              <p className="text-xs text-muted font-mono">Autonomous Operating System for Robotics</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted">
            <Link href="/login" className="hover:text-white transition-colors">Sign In</Link>
            <Link href="/register" className="hover:text-white transition-colors">Join Club</Link>
            <Link href="/verify" className="hover:text-white transition-colors">Verify Certificate</Link>
            <a href="#telemetry" className="hover:text-white transition-colors">Telemetry</a>
          </div>

          <p className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} Humorphic Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
