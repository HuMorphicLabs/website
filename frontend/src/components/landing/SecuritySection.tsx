"use client";

import React from "react";
import {
  ShieldCheck,
  Lock,
  Key,
  FileCheck,
  EyeOff,
  Fingerprint,
} from "lucide-react";

export default function SecuritySection() {
  const securityFeatures = [
    {
      title: "8-Tier Granular RBAC",
      desc: "Distinct privileges from Super Admin to Guest; ensures members cannot alter equipment status without lead approval.",
      icon: ShieldCheck,
      color: "text-cyan-400",
    },
    {
      title: "Stateless JWT + Google OAuth",
      desc: "Argon2/PBKDF2 password hashing, rotating refresh tokens, and university domain single-sign-on validation.",
      icon: Key,
      color: "text-purple-400",
    },
    {
      title: "Immutable System Audit Trail",
      desc: "Every inventory adjustment, role elevation, and certificate creation logged with actor ID and IP timestamp.",
      icon: FileCheck,
      color: "text-emerald-400",
    },
    {
      title: "Server-Side Permission Guards",
      desc: "Django DRF RBACMixin strictly validates every API resource endpoint against database permission tables.",
      icon: Lock,
      color: "text-amber-400",
    },
    {
      title: "Multi-Tenant Isolation",
      desc: "Organizational slug-based tenancy cleanly isolates membership rosters, budgets, and project repositories.",
      icon: Fingerprint,
      color: "text-blue-400",
    },
    {
      title: "Encrypted Cloud Storage",
      desc: "Confidential CAD designs, hardware schematics, and student profile data secured at rest and in transit.",
      icon: EyeOff,
      color: "text-red-400",
    },
  ];

  return (
    <section id="security" className="py-24 relative overflow-hidden bg-[#030712] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-mono text-xs tracking-widest uppercase mb-4">
            <Lock className="w-3.5 h-3.5" />
            ENTERPRISE GOVERNANCE & COMPLIANCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-white leading-tight">
            BUILT FOR <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-300">
              REAL ORGANIZATIONS.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Collegiate clubs manage university budgets, expensive hardware, and sensitive member credentials.
            HumorphicOS enforces defense-in-depth across every transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-4 group-hover:border-emerald-500/40 transition-colors">
                    <Icon className={`w-5 h-5 ${sec.color}`} />
                  </div>
                  <h3 className="text-base font-bold font-mono text-white group-hover:text-emerald-300 transition-colors">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <span>VERIFIED SECURE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
