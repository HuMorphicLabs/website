"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import MetricsStrip from "@/components/landing/MetricsStrip";
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

      {/* 2. Product Metrics Strip */}
      <MetricsStrip />

      {/* 3. The Problem: Robotics is Complex */}
      <ProblemSection />

      {/* 4. Product Solution: 5 Major Pillars */}
      <ProductSolutionSection />

      {/* 5. 4-Tier Project Management (WBS Engine) */}
      <ProjectEngineSection />

      {/* 6. Robotics-Aware Interactive Kanban Board */}
      <KanbanSection />

      {/* 7. Hardware Lab & Serialized Inventory */}
      <HardwareLabSection />

      {/* 8. Lab Booking & Real-Time Conflict Detection */}
      <LabBookingSection />

      {/* 9. AI Copilot Interactive Terminal */}
      <AICopilotSection />

      {/* 10. Daily Operations & AI Pulse Timeline */}
      <DailyOperationsSection />

      {/* 11. Multimodal Attendance & Verification */}
      <AttendanceSection />

      {/* 12. Gamification, XP & Merit Badges */}
      <GamificationSection />

      {/* 13. Verifiable Digital Certificate Engine */}
      <CertificateSection />

      {/* 14. Public Showcase: Active Robotics Systems */}
      <PublicShowcaseSection />

      {/* 15. Upcoming Events & Autonomous Hackathons */}
      <EventsSection />

      {/* 16. Distributed Enterprise Architecture */}
      <ArchitectureSection />

      {/* 17. Security, 8-Tier RBAC & Governance */}
      <SecuritySection />

      {/* 18. Cinematic Final 3D Robot CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
