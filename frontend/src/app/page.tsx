"use client";

import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import MetricsStrip from "@/components/landing/MetricsStrip";
import { RollingMarquee } from "@/components/ui/rolling-marquee";
import { Robotics3DModel } from "@/components/ui/robotics-3d-model";
import { TelemetryTerminal } from "@/components/portal/telemetry-terminal";
import ProductSolutionSection from "@/components/landing/ProductSolutionSection";
import KanbanSection from "@/components/landing/KanbanSection";
import HardwareLabSection from "@/components/landing/HardwareLabSection";
import AICopilotSection from "@/components/landing/AICopilotSection";
import EventsSection from "@/components/landing/EventsSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-cyan-500 selection:text-slate-950 font-sans relative transition-colors duration-300">
      {/* 1. Dynamic Navigation Header */}
      <Navbar />

      {/* 2. Hero with 3D Humanoid Robot, Hologram HUD & Neural Particles */}
      <HeroSection />

      {/* 3. Continuous Infinite Rolling Ticker */}
      <RollingMarquee />

      {/* 4. Product Metrics Strip */}
      <MetricsStrip />

      {/* 5. Interactive 3D Digital Twin & Mission Control Showcase */}
      <section id="telemetry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5 animate-spin" />
            3D DIGITAL TWIN & REAL-TIME TELEMETRY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white mb-4">
            Interactive Robotics Kinematics
          </h2>
          <p className="text-muted text-sm sm:text-base font-sans">
            Rotate 3D digital robotics twins (6-DOF Arm, Rover, Drone Swarm, Neural Core) while monitoring autonomous ROS2 tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/25 via-primary/20 to-purple-600/25 rounded-3xl blur-2xl opacity-60 -z-10" />
            <Robotics3DModel />
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/25 via-indigo-600/20 to-cyan-500/25 rounded-3xl blur-2xl opacity-60 -z-10" />
            <TelemetryTerminal />
          </div>
        </div>
      </section>

      {/* 6. Product Solution: 5 Major Pillars */}
      <ProductSolutionSection />

      {/* 7. Robotics-Aware Interactive Kanban Board */}
      <KanbanSection />

      {/* 8. Hardware Lab & Serialized Inventory */}
      <HardwareLabSection />

      {/* 9. AI Copilot Interactive Terminal */}
      <AICopilotSection />

      {/* 10. Upcoming Events & Autonomous Hackathons */}
      <EventsSection />

      {/* 11. Cinematic Final CTA (Without Duplicate 3D Robot) */}
      <FinalCTASection />

      {/* 12. Footer */}
      <Footer />
    </main>
  );
}