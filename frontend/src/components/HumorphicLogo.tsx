"use client";

import React from "react";
import Image from "next/image";

interface HumorphicLogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export default function HumorphicLogo({
  size = 36,
  className = "",
  glow = true,
}: HumorphicLogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Subtle Warm Amber / Bronze Ambient Glow */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full bg-amber-500/20 blur-md pointer-events-none -z-10 animate-pulse-glow"
          style={{ width: size * 1.15, height: size * 1.15 }}
        />
      )}
      <Image
        src="/logo.png"
        alt="Humorphic Labs Official Logo"
        width={size}
        height={size}
        className="w-full h-full object-contain drop-shadow-[0_2px_10px_rgba(217,119,6,0.35)] transition-transform duration-300 hover:scale-105"
        priority
      />
    </div>
  );
}
