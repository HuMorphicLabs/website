"use client";

import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import MetricsStrip from "@/components/landing/MetricsStrip";
import { RollingMarquee } from "@/components/ui/rolling-marquee";
import ProblemSection from "@/components/landing/ProblemSection";
import ProductSolutionSection from "@/components/landing/ProductSolutionSection";
import ProjectEngineSection from "@/components/landing/ProjectEngineSection";
import KanbanSection from "@/components/landing/KanbanSection";
import HardwareLabSection from "@/components/landing/HardwareLabSection";
import LabBookingSection from "@/components/landing/LabBookingSection";
import AICopilotSection from "@/components/landing/AICopilotSection";
import DailyOperationsSection from "@/components/landing/DailyOperationsSection";
import AttendanceSection from "@/components/landing/AttendanceSection";
import GamificationSection from "@/components/landing/GamificationSection";
import CertificateSection from "@/components/landing/CertificateSection";
import PublicShowcaseSection from "@/components/landing/PublicShowcaseSection";
import EventsSection from "@/components/landing/EventsSection";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import SecuritySection from "@/components/landing/SecuritySection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-cyan-500 selection:text-slate-950 font-sans relative transition-colors duration-300">
      {/* Dynamic Navigation Header */}
      <Navbar />

      {/* 1. Hero with 3D Humanoid Robot & Hologram HUD */}
      <HeroSection />

      {/* 2. Continuous Infinite Rolling Ticker */}
      <RollingMarquee />

      {/* 3. Product Metrics Strip */}
      <MetricsStrip />

      {/* 4. The Problem: Robotics is Complex */}
      <ProblemSection />

      {/* 5. Product Solution: 5 Major Pillars */}
      <ProductSolutionSection />

      {/* 6. 4-Tier Project Management (WBS Engine) */}
      <ProjectEngineSection />

      {/* 7. Robotics-Aware Interactive Kanban Board */}
      <KanbanSection />

      {/* 8. Hardware Lab & Serialized Inventory */}
      <HardwareLabSection />

      {/* 9. Lab Booking & Real-Time Conflict Detection */}
      <LabBookingSection />

      {/* 10. AI Copilot Interactive Terminal */}
      <AICopilotSection />

      {/* 11. Daily Operations & AI Pulse Timeline */}
      <DailyOperationsSection />

      {/* 12. Multimodal Attendance & Verification */}
      <AttendanceSection />

      {/* 13. Gamification, XP & Merit Badges */}
      <GamificationSection />

      {/* 14. Verifiable Digital Certificate Engine */}
      <CertificateSection />

      {/* 15. Public Showcase: Active Robotics Systems */}
      <PublicShowcaseSection />

      {/* 16. Upcoming Events & Autonomous Hackathons */}
      <EventsSection />

      {/* 17. Distributed Enterprise Architecture */}
      <ArchitectureSection />

      {/* 18. Security, 8-Tier RBAC & Governance */}
      <SecuritySection />

      {/* 19. Cinematic Final 3D Robot CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}