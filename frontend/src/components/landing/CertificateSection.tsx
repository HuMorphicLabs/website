"use client";

import React, { useState } from "react";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  QrCode,
  Sparkles,
  Search,
  Scan,
} from "lucide-react";
import Link from "next/link";

export default function CertificateSection() {
  const [certCode, setCertCode] = useState("HUM-ROBOTICS-2026-X89");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(true);

  const handleTestVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 600);
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-[#030712] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            CRYPTOGRAPHIC CREDENTIAL ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            CREDENTIALS THAT <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-purple-400 neon-text-cyan">
              CAN BE VERIFIED.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Every workshop, hackathon, and club leadership role produces an automated, verifiable digital certificate with public verification URL.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Live Certificate Visual Mockup */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(0,229,255,0.2)] relative scanline-effect bg-gradient-to-br from-[#070e24] via-[#050a1b] to-[#020512]">
              {/* Corner Ornaments */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

              {/* Verified Ribbon */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-cyan-400" />
                  <span className="font-mono text-xs font-black tracking-widest text-white uppercase">
                    HUMORPHIC OFFICIAL CREDENTIAL
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>AUTHENTIC</span>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="text-center space-y-3 py-4">
                <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-widest">
                  THIS CERTIFIES THAT
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-mono text-white tracking-wide">
                  ROHIT SHARMA
                </h3>
                <p className="text-xs font-sans text-slate-300 max-w-md mx-auto leading-relaxed">
                  has successfully completed the advanced hands-on autonomous systems curriculum at{" "}
                  <strong className="text-cyan-400 font-mono">Robotics Workshop 2026</strong>.
                </p>
              </div>

              {/* Certificate Footer with QR & Signature */}
              <div className="mt-8 pt-6 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                    <QrCode className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">TOKEN ID</span>
                    <span className="text-cyan-400 font-bold">{certCode}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase">ISSUED BY</span>
                  <span className="text-white font-bold">Humorphic Robotics Club</span>
                  <div className="text-[9px] text-slate-400">Cryptographically Signed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Verification Tester */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
              <h4 className="text-lg font-bold font-mono text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                <Scan className="w-5 h-5 text-cyan-400" />
                <span>Instant Verification</span>
              </h4>
              <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                Recruiters, faculty advisors, and competition judges can verify any credential in real-time by entering its unique token ID.
              </p>

              <form onSubmit={handleTestVerify} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={certCode}
                    onChange={(e) => setCertCode(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none uppercase"
                    placeholder="Enter Token ID..."
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1.5 bottom-1.5 px-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                  >
                    {isVerifying ? "Scanning..." : "Verify"}
                  </button>
                </div>
              </form>

              {isVerified && (
                <div className="mt-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>CERTIFICATE VERIFIED ✓</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Recipient: Rohit Sharma · Status: Authentic
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-slate-800">
                <Link
                  href="/verify"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Open Public Verification Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
