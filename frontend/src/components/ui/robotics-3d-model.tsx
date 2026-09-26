"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Bot, RotateCw, ZoomIn, Eye, Sparkles, Layers, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

type ModelType = "arm" | "rover" | "drone" | "core";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Edge {
  p1: number;
  p2: number;
  color?: string;
  glow?: boolean;
}

export function Robotics3DModel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [modelType, setModelType] = useState<ModelType>("arm");
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeTelemetry, setActiveTelemetry] = useState({
    joint1: 32.4,
    joint2: -18.2,
    joint3: 74.0,
    speed: "120 FPS",
    status: "KINEMATICS NOMINAL",
  });

  // 3D rotation angles in radians
  const rotRef = useRef({ x: 0.35, y: 0.8, targetX: 0.35, targetY: 0.8 });
  const mouseRef = useRef({ lastX: 0, lastY: 0 });

  // Generate 3D geometry vertices & edges for different robotics models
  const generateModelData = useCallback((type: ModelType): { points: Point3D[]; edges: Edge[] } => {
    const points: Point3D[] = [];
    const edges: Edge[] = [];

    if (type === "arm") {
      // ── 6-DOF Robotic Arm Geometry ──
      // Base platform (circular polygon at bottom)
      const basePoints = 8;
      const baseRadius = 80;
      for (let i = 0; i < basePoints; i++) {
        const theta = (i / basePoints) * Math.PI * 2;
        points.push({ x: Math.cos(theta) * baseRadius, y: 100, z: Math.sin(theta) * baseRadius });
      }
      for (let i = 0; i < basePoints; i++) {
        edges.push({ p1: i, p2: (i + 1) % basePoints, color: "#6366f1" });
      }

      // Base joint
      const baseCenter = points.length;
      points.push({ x: 0, y: 80, z: 0 }); // p8
      for (let i = 0; i < basePoints; i++) {
        edges.push({ p1: i, p2: baseCenter, color: "rgba(99, 102, 241, 0.4)" });
      }

      // Link 1 (Shoulder)
      const j1 = points.length;
      points.push({ x: 0, y: 20, z: 0 }); // p9
      edges.push({ p1: baseCenter, p2: j1, color: "#06b6d4", glow: true });

      // Link 2 (Upper Arm)
      const j2 = points.length;
      points.push({ x: 45, y: -40, z: 25 }); // p10
      edges.push({ p1: j1, p2: j2, color: "#06b6d4", glow: true });

      // Link 3 (Forearm)
      const j3 = points.length;
      points.push({ x: -10, y: -90, z: 45 }); // p11
      edges.push({ p1: j2, p2: j3, color: "#38bdf8", glow: true });

      // Wrist + Gripper
      const wrist = points.length;
      points.push({ x: -35, y: -125, z: 20 }); // p12
      edges.push({ p1: j3, p2: wrist, color: "#c084fc", glow: true });

      // Gripper Fingers (left and right claws)
      const claw1 = points.length;
      points.push({ x: -48, y: -145, z: 32 }); // p13
      const claw2 = points.length;
      points.push({ x: -22, y: -145, z: 8 });  // p14
      edges.push({ p1: wrist, p2: claw1, color: "#ec4899" });
      edges.push({ p1: wrist, p2: claw2, color: "#ec4899" });

      // Joint articulation rings
      [j1, j2, j3].forEach((jIdx) => {
        const p = points[jIdx];
        const ringStart = points.length;
        for (let r = 0; r < 6; r++) {
          const a = (r / 6) * Math.PI * 2;
          points.push({ x: p.x + Math.cos(a) * 14, y: p.y + Math.sin(a) * 14, z: p.z });
        }
        for (let r = 0; r < 6; r++) {
          edges.push({ p1: ringStart + r, p2: ringStart + ((r + 1) % 6), color: "#10b981" });
        }
      });
    } else if (type === "rover") {
      // ── Mars Autonomous Rover Geometry ──
      // Main Chassis Box
      const w = 70, h = 30, d = 90;
      const box = [
        { x: -w, y: 0, z: -d }, { x: w, y: 0, z: -d }, { x: w, y: h, z: -d }, { x: -w, y: h, z: -d },
        { x: -w, y: 0, z: d },  { x: w, y: 0, z: d },  { x: w, y: h, z: d },  { x: -w, y: h, z: d }
      ];
      box.forEach(p => points.push(p));
      const boxEdges = [
        [0,1],[1,2],[2,3],[3,0],
        [4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7]
      ];
      boxEdges.forEach(([p1, p2]) => edges.push({ p1, p2, color: "#06b6d4", glow: true }));

      // Mast / Stereo Camera Turret
      const mastBase = points.length;
      points.push({ x: 0, y: 0, z: -40 });
      const mastTop = points.length;
      points.push({ x: 0, y: -50, z: -40 });
      edges.push({ p1: mastBase, p2: mastTop, color: "#6366f1" });

      const cam1 = points.length;
      points.push({ x: -16, y: -50, z: -40 });
      const cam2 = points.length;
      points.push({ x: 16, y: -50, z: -40 });
      edges.push({ p1: mastTop, p2: cam1, color: "#ec4899" });
      edges.push({ p1: mastTop, p2: cam2, color: "#ec4899" });

      // 6 Wheels with Rocker-Bogie links
      const wheelOffsets = [
        [-w - 18, 45, -d + 15], [w + 18, 45, -d + 15],
        [-w - 22, 45, 0],       [w + 22, 45, 0],
        [-w - 18, 45, d - 15],  [w + 18, 45, d - 15]
      ];

      wheelOffsets.forEach(([wx, wy, wz], wIdx) => {
        const wCenter = points.length;
        points.push({ x: wx, y: wy, z: wz });
        // Link to chassis
        const chassisRef = wIdx % 2 === 0 ? (wIdx < 2 ? 0 : wIdx < 4 ? 4 : 7) : (wIdx < 2 ? 1 : wIdx < 4 ? 5 : 6);
        edges.push({ p1: chassisRef, p2: wCenter, color: "rgba(16, 185, 129, 0.6)" });

        // Wheel polygon
        const wStart = points.length;
        for (let a = 0; a < 6; a++) {
          const theta = (a / 6) * Math.PI * 2;
          points.push({ x: wx + Math.cos(theta) * 16, y: wy + Math.sin(theta) * 16, z: wz });
        }
        for (let a = 0; a < 6; a++) {
          edges.push({ p1: wStart + a, p2: wStart + ((a + 1) % 6), color: "#38bdf8" });
        }
      });
    } else if (type === "drone") {
      // ── Hexacopter Drone Swarm ──
      // Central Hub
      const hubPoints = 6;
      const hubRadius = 35;
      for (let i = 0; i < hubPoints; i++) {
        const theta = (i / hubPoints) * Math.PI * 2;
        points.push({ x: Math.cos(theta) * hubRadius, y: 0, z: Math.sin(theta) * hubRadius });
      }
      for (let i = 0; i < hubPoints; i++) {
        edges.push({ p1: i, p2: (i + 1) % hubPoints, color: "#6366f1" });
      }

      // 6 Arms extending outwards
      for (let i = 0; i < hubPoints; i++) {
        const theta = (i / hubPoints) * Math.PI * 2;
        const motorP = points.length;
        points.push({ x: Math.cos(theta) * 115, y: -5, z: Math.sin(theta) * 115 });
        edges.push({ p1: i, p2: motorP, color: "#06b6d4", glow: true });

        // Propeller Rotor Ring
        const ringP = points.length;
        for (let r = 0; r < 5; r++) {
          const ra = (r / 5) * Math.PI * 2;
          points.push({
            x: Math.cos(theta) * 115 + Math.cos(ra) * 22,
            y: -12,
            z: Math.sin(theta) * 115 + Math.sin(ra) * 22
          });
        }
        for (let r = 0; r < 5; r++) {
          edges.push({ p1: ringP + r, p2: ringP + ((r + 1) % 5), color: "#10b981" });
        }
      }
    } else {
      // ── Quantum Neural Cyber-Core (Icosahedron + Concentric Orbitals) ──
      const phi = (1 + Math.sqrt(5)) / 2;
      const scale = 50;
      const ico = [
        [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
        [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
        [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
      ];
      ico.forEach(([x, y, z]) => points.push({ x: x * scale, y: y * scale, z: z * scale }));

      for (let i = 0; i < 12; i++) {
        for (let j = i + 1; j < 12; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dz = points[i].z - points[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < scale * 2.1) {
            edges.push({ p1: i, p2: j, color: "#8b5cf6", glow: true });
          }
        }
      }

      // Outer Gimbal Rings
      const ringRadius = 120;
      const r1 = points.length;
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        points.push({ x: Math.cos(a) * ringRadius, y: Math.sin(a) * ringRadius, z: 0 });
      }
      for (let i = 0; i < 16; i++) {
        edges.push({ p1: r1 + i, p2: r1 + ((i + 1) % 16), color: "#06b6d4" });
      }

      const r2 = points.length;
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        points.push({ x: 0, y: Math.cos(a) * (ringRadius + 15), z: Math.sin(a) * (ringRadius + 15) });
      }
      for (let i = 0; i < 16; i++) {
        edges.push({ p1: r2 + i, p2: r2 + ((i + 1) % 16), color: "#6366f1" });
      }
    }

    return { points, edges };
  }, []);

  // Mouse & Touch Interaction Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    mouseRef.current = { lastX: e.clientX, lastY: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - mouseRef.current.lastX;
    const deltaY = e.clientY - mouseRef.current.lastY;

    rotRef.current.targetY += deltaX * 0.008;
    rotRef.current.targetX += deltaY * 0.008;

    mouseRef.current = { lastX: e.clientX, lastY: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      mouseRef.current = { lastX: e.touches[0].clientX, lastY: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - mouseRef.current.lastX;
    const deltaY = e.touches[0].clientY - mouseRef.current.lastY;

    rotRef.current.targetY += deltaX * 0.008;
    rotRef.current.targetX += deltaY * 0.008;

    mouseRef.current = { lastX: e.touches[0].clientX, lastY: e.touches[0].clientY };
  };

  // Main 3D Animation & Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const fov = 340;
    const cameraDist = 380;
    let tick = 0;

    const render = () => {
      tick++;

      // Smooth interpolation for rotation
      if (autoRotate && !isDragging) {
        rotRef.current.targetY += 0.008;
        rotRef.current.targetX = 0.3 + Math.sin(tick * 0.015) * 0.12;
      }

      rotRef.current.x += (rotRef.current.targetX - rotRef.current.x) * 0.1;
      rotRef.current.y += (rotRef.current.targetY - rotRef.current.y) * 0.1;

      // Update telemetry display occasionally
      if (tick % 60 === 0) {
        setActiveTelemetry({
          joint1: +(Math.sin(tick * 0.02) * 45).toFixed(1),
          joint2: +(Math.cos(tick * 0.03) * 30).toFixed(1),
          joint3: +(60 + Math.sin(tick * 0.01) * 20).toFixed(1),
          speed: "120 FPS",
          status: "KINEMATICS NOMINAL",
        });
      }

      const rx = rotRef.current.x;
      const ry = rotRef.current.y;
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);

      const { points, edges } = generateModelData(modelType);

      ctx.clearRect(0, 0, width, height);

      // Draw background 3D coordinate floor grid
      const gridSize = 4;
      const gridStep = 55;
      const floorY = 120;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(99, 102, 241, 0.12)";
      ctx.lineWidth = 1;

      for (let i = -gridSize; i <= gridSize; i++) {
        for (let d of [-gridSize, gridSize]) {
          // X lines
          const p1X = i * gridStep;
          const p1Z = -gridSize * gridStep;
          const p2X = i * gridStep;
          const p2Z = gridSize * gridStep;

          const projP1 = project3D(p1X, floorY, p1Z, cosX, sinX, cosY, sinY, fov, cameraDist, width, height);
          const projP2 = project3D(p2X, floorY, p2Z, cosX, sinX, cosY, sinY, fov, cameraDist, width, height);

          ctx.moveTo(projP1.x, projP1.y);
          ctx.lineTo(projP2.x, projP2.y);

          // Z lines
          const projZ1 = project3D(-gridSize * gridStep, floorY, i * gridStep, cosX, sinX, cosY, sinY, fov, cameraDist, width, height);
          const projZ2 = project3D(gridSize * gridStep, floorY, i * gridStep, cosX, sinX, cosY, sinY, fov, cameraDist, width, height);

          ctx.moveTo(projZ1.x, projZ1.y);
          ctx.lineTo(projZ2.x, projZ2.y);
        }
      }
      ctx.stroke();

      // Transform & project all model vertices
      const projected = points.map((p) =>
        project3D(p.x, p.y, p.z, cosX, sinX, cosY, sinY, fov, cameraDist, width, height)
      );

      // Render 3D Edges
      edges.forEach((edge) => {
        const p1 = projected[edge.p1];
        const p2 = projected[edge.p2];
        if (!p1 || !p2) return;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        if (edge.glow) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = edge.color || "#06b6d4";
          ctx.lineWidth = 2.2;
          ctx.strokeStyle = edge.color || "#06b6d4";
        } else {
          ctx.shadowBlur = 0;
          ctx.lineWidth = 1.3;
          ctx.strokeStyle = edge.color || "rgba(255, 255, 255, 0.4)";
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Render 3D Vertices (Glowing holographic nodes)
      projected.forEach((p, idx) => {
        // Vertex pulse
        const radius = idx % 3 === 0 ? 3 : 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = idx % 2 === 0 ? "#22d3ee" : "#818cf8";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#38bdf8";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [modelType, autoRotate, isDragging, generateModelData]);

  // 3D Matrix Projection Helper
  function project3D(
    x: number,
    y: number,
    z: number,
    cosX: number,
    sinX: number,
    cosY: number,
    sinY: number,
    fov: number,
    cameraDist: number,
    width: number,
    height: number
  ) {
    // Rotate Y
    const x1 = x * cosY + z * sinY;
    const z1 = -x * sinY + z * cosY;

    // Rotate X
    const y2 = y * cosX - z1 * sinX;
    const z2 = y * sinX + z1 * cosX;

    // Perspective Projection
    const distance = cameraDist + z2;
    const scale = distance > 0 ? fov / distance : 0;

    return {
      x: width / 2 + x1 * scale,
      y: height / 2 + y2 * scale,
      z: z2,
      scale,
    };
  }

  return (
    <div className="w-full rounded-3xl border border-white/15 bg-card/85 backdrop-blur-2xl shadow-2xl overflow-hidden relative group">
      {/* ── 3D Viewport Header ── */}
      <div className="px-5 py-3.5 border-b border-white/10 bg-white/5 flex flex-wrap items-center justify-between gap-3 relative z-20">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
              3D DIGITAL ROBOTICS TWIN
              <span className="text-[10px] font-normal text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/25">
                INTERACTIVE 3D
              </span>
            </h4>
            <p className="text-[10px] font-mono text-muted">Click & drag to rotate in real-time 3D</p>
          </div>
        </div>

        {/* Model Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 text-xs">
          {[
            { key: "arm" as ModelType, label: "6-DOF Arm" },
            { key: "rover" as ModelType, label: "Rover" },
            { key: "drone" as ModelType, label: "Drone Swarm" },
            { key: "core" as ModelType, label: "Neural Core" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setModelType(tab.key)}
              className={cn(
                "px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all",
                modelType === tab.key
                  ? "bg-primary text-white shadow-md font-bold"
                  : "text-muted hover:text-white hover:bg-white/5"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Interactive 3D Canvas Area ── */}
      <div
        className="relative w-full h-[400px] cursor-grab active:cursor-grabbing select-none overflow-hidden bg-gradient-to-b from-black/60 via-card/70 to-black/80"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Ambient Radial Glowing Orbs behind the 3D Model */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-cyan-500/20 via-primary/20 to-purple-600/20 rounded-full blur-3xl opacity-60 -z-0" />

        {/* Real-time Telemetry HUD Overlay (Top Right) */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none space-y-1.5 text-right font-mono text-[11px]">
          <div className="px-2.5 py-1 rounded-lg bg-black/60 border border-cyan-500/30 text-cyan-300 backdrop-blur-md inline-block">
            θ₁: <span className="text-white font-bold">{activeTelemetry.joint1}°</span> · 
            θ₂: <span className="text-white font-bold">{activeTelemetry.joint2}°</span> · 
            θ₃: <span className="text-white font-bold">{activeTelemetry.joint3}°</span>
          </div>
          <div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ● {activeTelemetry.status}
            </span>
          </div>
        </div>

        {/* Controls Overlay (Bottom Left) */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={cn(
              "px-3 py-1.5 rounded-xl border text-xs font-mono font-medium backdrop-blur-md flex items-center gap-1.5 transition-colors",
              autoRotate
                ? "bg-primary/20 border-primary/40 text-primary"
                : "bg-black/60 border-white/10 text-muted hover:text-white"
            )}
          >
            <RotateCw className={cn("h-3.5 w-3.5", autoRotate ? "animate-spin" : "")} />
            {autoRotate ? "Auto-Orbit: ON" : "Auto-Orbit: OFF"}
          </button>
        </div>

        {/* Hologram Reticle Center Pointer */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-cyan-400/30 rounded-full flex items-center justify-center opacity-40">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
        </div>
      </div>

      {/* ── Footer Status ── */}
      <div className="px-5 py-2.5 bg-black/50 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-muted">
        <span className="flex items-center gap-2">
          <Radio className="h-3 w-3 text-emerald-400 animate-pulse" />
          WebGL / 3D Canvas Projection: 60 FPS Smooth
        </span>
        <span className="text-cyan-400">ROS2 URDF / KINEMATIC RESOLVER ACTIVE</span>
      </div>
    </div>
  );
}
