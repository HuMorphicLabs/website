"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface RollingTiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  scale?: number;
  glowColor?: string;
}

export function RollingTiltCard({
  children,
  className,
  maxTilt = 12,
  glare = true,
  scale = 1.02,
  glowColor = "rgba(99, 102, 241, 0.25)",
  ...props
}: RollingTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
    isHovered: false,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (-maxTilt to +maxTilt)
      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      // Glare position in percentage
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      setTransform({
        rotateX,
        rotateY,
        glareX,
        glareY,
        glareOpacity: 0.6,
        isHovered: true,
      });
    },
    [maxTilt]
  );

  const handleMouseEnter = useCallback(() => {
    setTransform((prev) => ({ ...prev, isHovered: true, glareOpacity: 0.5 }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
      isHovered: false,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("perspective-1000 relative select-none", className)}
      style={{ perspective: 1000 }}
      {...props}
    >
      <div
        className={cn(
          "preserve-3d relative w-full h-full rounded-2xl transition-all duration-200 ease-out border border-white/10 backdrop-blur-xl bg-card/80 overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/40",
          transform.isHovered ? "ring-1 ring-primary/30" : ""
        )}
        style={{
          transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(${
            transform.isHovered ? scale : 1
          }, ${transform.isHovered ? scale : 1}, 1)`,
          boxShadow: transform.isHovered
            ? `0 20px 40px -15px ${glowColor}, 0 0 25px -5px ${glowColor}`
            : undefined,
        }}
      >
        {/* Dynamic Specular Glare Layer */}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-2xl"
            style={{
              opacity: transform.glareOpacity,
              background: `radial-gradient(circle 320px at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.18), transparent 70%)`,
            }}
          />
        )}

        {/* Ambient Corner Accent */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 transition-opacity duration-300"
          style={{ background: glowColor }}
        />

        {/* Inner Content with 3D Depth */}
        <div className="relative z-10 w-full h-full" style={{ transform: "translateZ(20px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
