"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bot, ChevronRight, Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#solution" },
    { label: "WBS Engine", href: "#project-engine" },
    { label: "Hardware Lab", href: "#hardware-lab" },
    { label: "AI Copilot", href: "#ai-copilot" },
    { label: "Showcase", href: "#showcase" },
    { label: "Events", href: "#events" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.25)]">
            <Bot className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-lg font-black tracking-wider text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1">
              HUMORPHIC<span className="text-cyan-400">OS</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 -mt-1 uppercase">
              AI Robotics OS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 glass-panel border border-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-cyan-500/10"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
          >
            Terminal Login
          </Link>
          <Link
            href="/portal"
            className="relative group px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] flex items-center gap-1.5"
          >
            <span>Launch OS</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-slate-800 text-slate-300 hover:text-cyan-400"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-mono uppercase tracking-wider text-slate-300 hover:text-cyan-400 py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <Link
              href="/login"
              className="w-full text-center py-2.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Terminal Login
            </Link>
            <Link
              href="/portal"
              className="w-full text-center py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase"
            >
              Launch HumorphicOS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
