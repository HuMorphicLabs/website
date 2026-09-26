"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { RotateCw, RotateCcw, Compass, Sparkles } from "lucide-react";

interface Robot3DProps {
  mode?: "hero" | "cta";
  className?: string;
  showControls?: boolean;
}

export default function Robot3D({
  mode = "hero",
  className = "",
  showControls = true,
}: Robot3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [azimuthDeg, setAzimuthDeg] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  // Shared ref for render loop
  const stateRef = useRef({
    autoRotate: true,
    resetTrigger: 0,
    setAzimuthDeg: (deg: number) => {},
  });

  useEffect(() => {
    stateRef.current.autoRotate = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    stateRef.current.setAzimuthDeg = setAzimuthDeg;
  }, []);

  const handleResetAngle = useCallback(() => {
    stateRef.current.resetTrigger += 1;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.04);

    // 2. Camera Setup
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);

    if (mode === "hero") {
      camera.position.set(0, 0.85, 4.8);
    } else {
      camera.position.set(0, 0.75, 4.4);
    }

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.replaceChildren(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.outline = "none";

    // 4. Lighting System (Cinema-grade Sci-Fi Studio Lighting)
    const ambientLight = new THREE.AmbientLight(0x0b1329, 3.0);
    scene.add(ambientLight);

    // Key Light - Bright Cyan
    const cyanKeyLight = new THREE.DirectionalLight(0x00e5ff, 4.5);
    cyanKeyLight.position.set(4, 5, 4);
    scene.add(cyanKeyLight);

    // Rim Light - Vivid Purple
    const purpleRimLight = new THREE.DirectionalLight(0x8b5cf6, 5.0);
    purpleRimLight.position.set(-4, 4, -4);
    scene.add(purpleRimLight);

    // Fill Light - Soft Steel Blue
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    fillLight.position.set(0, -3, 3);
    scene.add(fillLight);

    // Chest Core Dynamic Point Light
    const corePointLight = new THREE.PointLight(0x00e5ff, 4.2, 4.5);
    corePointLight.position.set(0, 1.25, 0.75);
    scene.add(corePointLight);

    // Ground Hover Glow Point Light
    const hoverPointLight = new THREE.PointLight(0x00e5ff, 3.0, 3.5);
    hoverPointLight.position.set(0, -1.2, 0);
    scene.add(hoverPointLight);

    // 5. High-Tech PBR Materials
    const darkArmorMat = new THREE.MeshStandardMaterial({
      color: 0x090e1a,
      roughness: 0.18,
      metalness: 0.95,
    });

    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x2d3748,
      roughness: 0.25,
      metalness: 0.9,
    });

    const chromeTrimMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.12,
      metalness: 0.98,
    });

    const cyanGlowMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 3.5,
      roughness: 0.08,
      metalness: 0.3,
    });

    const purpleGlowMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x8b5cf6,
      emissiveIntensity: 2.8,
      roughness: 0.1,
      metalness: 0.3,
    });

    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 5.0,
      roughness: 0.04,
      metalness: 0.1,
    });

    // 6. Sculpt Sophisticated 3D Humanoid Robot Mech
    const robotGroup = new THREE.Group();
    const upperBodyGroup = new THREE.Group();
    const headGroup = new THREE.Group();

    // =========================================================================
    // A. HEAD ASSEMBLY
    // =========================================================================
    // Cranium / Helmet Base (Faceted Sleek Cylinder)
    const craniumGeom = new THREE.CylinderGeometry(0.24, 0.28, 0.44, 16);
    const cranium = new THREE.Mesh(craniumGeom, darkArmorMat);
    headGroup.add(cranium);

    // Helmet Top Crown Armor
    const crownGeom = new THREE.ConeGeometry(0.25, 0.18, 16);
    const crown = new THREE.Mesh(crownGeom, titaniumMat);
    crown.position.set(0, 0.28, -0.02);
    headGroup.add(crown);

    // Crown Center Cyan Crest Line
    const crestGeom = new THREE.BoxGeometry(0.035, 0.22, 0.32);
    const crest = new THREE.Mesh(crestGeom, cyanGlowMat);
    crest.position.set(0, 0.26, 0.02);
    headGroup.add(crest);

    // Glowing Optical Sensor Visor (Sleek Curved Panoramic Eye)
    const visorGeom = new THREE.CylinderGeometry(0.26, 0.26, 0.09, 16, 1, false, -Math.PI / 3, (2 * Math.PI) / 3);
    const visor = new THREE.Mesh(visorGeom, visorMat);
    visor.position.set(0, 0.06, 0.02);
    headGroup.add(visor);

    // Titanium Visor Brow Shroud
    const browGeom = new THREE.BoxGeometry(0.44, 0.05, 0.18);
    const brow = new THREE.Mesh(browGeom, titaniumMat);
    brow.position.set(0, 0.14, 0.18);
    headGroup.add(brow);

    // Sculpted Chin & Mandible Plates
    const chinGeom = new THREE.BoxGeometry(0.22, 0.12, 0.18);
    const chin = new THREE.Mesh(chinGeom, chromeTrimMat);
    chin.position.set(0, -0.2, 0.15);
    headGroup.add(chin);

    // Vocoder / Intake Vent
    const vocoderGeom = new THREE.BoxGeometry(0.14, 0.025, 0.03);
    const vocoder = new THREE.Mesh(vocoderGeom, purpleGlowMat);
    vocoder.position.set(0, -0.14, 0.23);
    headGroup.add(vocoder);

    // Ear Sensor Nodes (Lateral Audio/Comms)
    const earGeom = new THREE.CylinderGeometry(0.06, 0.06, 0.1, 12);
    earGeom.rotateZ(Math.PI / 2);
    const earL = new THREE.Mesh(earGeom, cyanGlowMat);
    earL.position.set(-0.27, 0.05, 0);
    headGroup.add(earL);

    const earR = new THREE.Mesh(earGeom, purpleGlowMat);
    earR.position.set(0.27, 0.05, 0);
    headGroup.add(earR);

    // Cyber Antenna Mast
    const antennaGeom = new THREE.CylinderGeometry(0.012, 0.018, 0.36, 8);
    const antenna = new THREE.Mesh(antennaGeom, chromeTrimMat);
    antenna.position.set(0.2, 0.38, -0.08);
    antenna.rotation.z = -0.14;
    headGroup.add(antenna);

    const antennaTipGeom = new THREE.SphereGeometry(0.032, 10, 10);
    const antennaTip = new THREE.Mesh(antennaTipGeom, cyanGlowMat);
    antennaTip.position.set(0.24, 0.54, -0.08);
    headGroup.add(antennaTip);

    headGroup.position.set(0, 2.14, 0);
    upperBodyGroup.add(headGroup);

    // =========================================================================
    // B. NECK & HYDRAULIC ACTUATORS
    // =========================================================================
    const neckGeom = new THREE.CylinderGeometry(0.12, 0.15, 0.22, 16);
    const neck = new THREE.Mesh(neckGeom, titaniumMat);
    neck.position.set(0, 1.88, 0);
    upperBodyGroup.add(neck);

    // Chrome Hydraulic Cylinders on Neck
    const neckPistonGeom = new THREE.CylinderGeometry(0.022, 0.022, 0.2, 8);
    const neckPistonL = new THREE.Mesh(neckPistonGeom, chromeTrimMat);
    neckPistonL.position.set(-0.08, 1.88, 0.05);
    upperBodyGroup.add(neckPistonL);

    const neckPistonR = new THREE.Mesh(neckPistonGeom, chromeTrimMat);
    neckPistonR.position.set(0.08, 1.88, 0.05);
    upperBodyGroup.add(neckPistonR);

    // =========================================================================
    // C. CHEST & QUANTUM ARC REACTOR
    // =========================================================================
    // Core Torso Block
    const chestGeom = new THREE.BoxGeometry(0.92, 0.65, 0.52);
    const chest = new THREE.Mesh(chestGeom, darkArmorMat);
    chest.position.set(0, 1.48, 0);
    upperBodyGroup.add(chest);

    // Left & Right Sculpted Angled Breastplates
    const breastplateGeom = new THREE.BoxGeometry(0.38, 0.46, 0.09);
    const plateL = new THREE.Mesh(breastplateGeom, titaniumMat);
    plateL.position.set(-0.22, 1.52, 0.26);
    plateL.rotation.y = 0.12;
    upperBodyGroup.add(plateL);

    const plateR = new THREE.Mesh(breastplateGeom, titaniumMat);
    plateR.position.set(0.22, 1.52, 0.26);
    plateR.rotation.y = -0.12;
    upperBodyGroup.add(plateR);

    // Center Arc Reactor - Outer Torus Ring
    const coreTorusGeom = new THREE.TorusGeometry(0.14, 0.035, 16, 32);
    const coreOuterRing = new THREE.Mesh(coreTorusGeom, cyanGlowMat);
    coreOuterRing.position.set(0, 1.48, 0.29);
    upperBodyGroup.add(coreOuterRing);

    // Inner Glowing Core Reactor Cylinder
    const coreCylinderGeom = new THREE.CylinderGeometry(0.09, 0.09, 0.05, 24);
    coreCylinderGeom.rotateX(Math.PI / 2);
    const coreInner = new THREE.Mesh(coreCylinderGeom, cyanGlowMat);
    coreInner.position.set(0, 1.48, 0.29);
    upperBodyGroup.add(coreInner);

    // Shoulder Vent Ports
    const ventGeom = new THREE.BoxGeometry(0.18, 0.035, 0.03);
    const ventL = new THREE.Mesh(ventGeom, purpleGlowMat);
    ventL.position.set(-0.22, 1.3, 0.3);
    upperBodyGroup.add(ventL);

    const ventR = new THREE.Mesh(ventGeom, purpleGlowMat);
    ventR.position.set(0.22, 1.3, 0.3);
    upperBodyGroup.add(ventR);

    // =========================================================================
    // D. CYBER SPINE & ABDOMEN
    // =========================================================================
    const spineGeom = new THREE.CylinderGeometry(0.14, 0.16, 0.44, 16);
    const spine = new THREE.Mesh(spineGeom, titaniumMat);
    spine.position.set(0, 0.98, -0.02);
    upperBodyGroup.add(spine);

    // Segmented Vertebrae Ribs with Glowing Nodes
    for (let i = 0; i < 3; i++) {
      const ribGeom = new THREE.BoxGeometry(0.58 - i * 0.05, 0.09, 0.42);
      const rib = new THREE.Mesh(ribGeom, darkArmorMat);
      rib.position.set(0, 1.1 - i * 0.13, 0.02);
      upperBodyGroup.add(rib);

      // Vertebra status LED
      const ledGeom = new THREE.SphereGeometry(0.028, 8, 8);
      const led = new THREE.Mesh(ledGeom, i === 1 ? purpleGlowMat : cyanGlowMat);
      led.position.set(0, 1.1 - i * 0.13, 0.24);
      upperBodyGroup.add(led);
    }

    // =========================================================================
    // E. ARTICULATED SHOULDERS & ARMS
    // =========================================================================
    const buildArm = (isLeft: boolean) => {
      const armGroup = new THREE.Group();
      const side = isLeft ? -1 : 1;

      // Shoulder Pauldron Sphere
      const pauldronGeom = new THREE.SphereGeometry(0.25, 18, 14);
      const pauldron = new THREE.Mesh(pauldronGeom, titaniumMat);
      pauldron.scale.set(1, 0.88, 0.88);
      pauldron.position.set(side * 0.65, 1.62, 0);
      armGroup.add(pauldron);

      // Glowing Shoulder Accelerator Ring
      const ringGeom = new THREE.TorusGeometry(0.23, 0.025, 8, 24);
      ringGeom.rotateY(Math.PI / 2);
      const ring = new THREE.Mesh(ringGeom, isLeft ? cyanGlowMat : purpleGlowMat);
      ring.position.set(side * 0.65, 1.62, 0);
      armGroup.add(ring);

      // Bicep Segment
      const bicepGeom = new THREE.CylinderGeometry(0.09, 0.08, 0.44, 12);
      const bicep = new THREE.Mesh(bicepGeom, darkArmorMat);
      bicep.position.set(side * 0.68, 1.24, 0);
      armGroup.add(bicep);

      // Elbow Joint Servo
      const elbowGeom = new THREE.SphereGeometry(0.09, 12, 12);
      const elbow = new THREE.Mesh(elbowGeom, chromeTrimMat);
      elbow.position.set(side * 0.69, 0.96, 0);
      armGroup.add(elbow);

      // Forearm Gauntlet
      const forearmGeom = new THREE.BoxGeometry(0.14, 0.42, 0.15);
      const forearm = new THREE.Mesh(forearmGeom, darkArmorMat);
      forearm.position.set(side * 0.71, 0.7, 0.03);
      armGroup.add(forearm);

      // Illuminated Power Conduit on Forearm
      const conduitGeom = new THREE.BoxGeometry(0.02, 0.32, 0.02);
      const conduit = new THREE.Mesh(conduitGeom, cyanGlowMat);
      conduit.position.set(side * 0.79, 0.7, 0.05);
      armGroup.add(conduit);

      // Robotic Hand / Manipulator
      const handGeom = new THREE.BoxGeometry(0.12, 0.16, 0.08);
      const hand = new THREE.Mesh(handGeom, chromeTrimMat);
      hand.position.set(side * 0.71, 0.42, 0.05);
      armGroup.add(hand);

      return armGroup;
    };

    const leftArm = buildArm(true);
    const rightArm = buildArm(false);
    upperBodyGroup.add(leftArm);
    upperBodyGroup.add(rightArm);
    robotGroup.add(upperBodyGroup);

    // =========================================================================
    // F. PELVIS & LOWER CHASSIS
    // =========================================================================
    const pelvisGeom = new THREE.BoxGeometry(0.72, 0.32, 0.44);
    const pelvis = new THREE.Mesh(pelvisGeom, titaniumMat);
    pelvis.position.set(0, 0.64, 0);
    robotGroup.add(pelvis);

    const pelvisBeltGeom = new THREE.BoxGeometry(0.76, 0.06, 0.46);
    const pelvisBelt = new THREE.Mesh(pelvisBeltGeom, cyanGlowMat);
    pelvisBelt.position.set(0, 0.74, 0);
    robotGroup.add(pelvisBelt);

    // =========================================================================
    // G. ARTICULATED LEGS & HOVER BOOTS
    // =========================================================================
    const buildLeg = (isLeft: boolean) => {
      const legGroup = new THREE.Group();
      const side = isLeft ? -1 : 1;

      // Hip Servo Joint
      const hipGeom = new THREE.SphereGeometry(0.12, 12, 12);
      const hip = new THREE.Mesh(hipGeom, chromeTrimMat);
      hip.position.set(side * 0.26, 0.54, 0);
      legGroup.add(hip);

      // Thigh Structure
      const thighGeom = new THREE.CylinderGeometry(0.11, 0.09, 0.62, 12);
      const thigh = new THREE.Mesh(thighGeom, darkArmorMat);
      thigh.position.set(side * 0.27, 0.18, 0);
      legGroup.add(thigh);

      // Thigh Front Armor Plate
      const thighArmorGeom = new THREE.BoxGeometry(0.18, 0.44, 0.08);
      const thighArmor = new THREE.Mesh(thighArmorGeom, titaniumMat);
      thighArmor.position.set(side * 0.27, 0.18, 0.08);
      legGroup.add(thighArmor);

      // Knee Joint Ring
      const kneeGeom = new THREE.CylinderGeometry(0.09, 0.09, 0.16, 16);
      kneeGeom.rotateZ(Math.PI / 2);
      const knee = new THREE.Mesh(kneeGeom, cyanGlowMat);
      knee.position.set(side * 0.27, -0.16, 0.02);
      legGroup.add(knee);

      // Shin Structure
      const shinGeom = new THREE.BoxGeometry(0.16, 0.64, 0.18);
      const shin = new THREE.Mesh(shinGeom, darkArmorMat);
      shin.position.set(side * 0.27, -0.54, 0);
      legGroup.add(shin);

      // Futuristic Boot
      const footGeom = new THREE.BoxGeometry(0.2, 0.14, 0.38);
      const foot = new THREE.Mesh(footGeom, titaniumMat);
      foot.position.set(side * 0.27, -0.9, 0.08);
      legGroup.add(foot);

      // Anti-Gravity Hover Plasma Sole
      const soleGeom = new THREE.BoxGeometry(0.16, 0.03, 0.3);
      const sole = new THREE.Mesh(soleGeom, cyanGlowMat);
      sole.position.set(side * 0.27, -0.98, 0.08);
      legGroup.add(sole);

      return legGroup;
    };

    const leftLeg = buildLeg(true);
    const rightLeg = buildLeg(false);
    robotGroup.add(leftLeg);
    robotGroup.add(rightLeg);

    // Initial positioning of robot
    robotGroup.position.set(0, -0.12, 0);
    scene.add(robotGroup);

    // =========================================================================
    // H. HOLOGRAPHIC 360° PEDESTAL & COMPASS
    // =========================================================================
    const pedestalGroup = new THREE.Group();

    // Primary Glowing Cyan Ring
    const ring1Geom = new THREE.RingGeometry(1.5, 1.53, 72);
    ring1Geom.rotateX(Math.PI / 2);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.position.y = -1.24;
    pedestalGroup.add(ring1);

    // Secondary Purple Orbital Ring
    const ring2Geom = new THREE.RingGeometry(1.85, 1.87, 72);
    ring2Geom.rotateX(Math.PI / 2);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.position.y = -1.26;
    pedestalGroup.add(ring2);

    // 8 Cardinal Compass Pointers (0°, 45°, 90°, 135°, 180°, etc.)
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const tickGeom = new THREE.BoxGeometry(0.025, 0.01, 0.3);
      const tickMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00e5ff : 0x8b5cf6,
        transparent: true,
        opacity: 0.75,
      });
      const tick = new THREE.Mesh(tickGeom, tickMat);
      tick.position.set(Math.sin(angle) * 1.68, -1.25, Math.cos(angle) * 1.68);
      tick.rotation.y = angle;
      pedestalGroup.add(tick);
    }

    // Outer Thin Orbit Ring
    const ring3Geom = new THREE.RingGeometry(2.2, 2.22, 64);
    ring3Geom.rotateX(Math.PI / 2);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.position.y = -1.28;
    pedestalGroup.add(ring3);

    scene.add(pedestalGroup);

    // =========================================================================
    // I. PARTICLES (Ascending Cyber Motes)
    // =========================================================================
    const particleCount = 220;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 1] = Math.random() * 8 - 2.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
      particleSpeeds[i] = 0.003 + Math.random() * 0.005;
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeom, particleMat);
    // Dynamic Theme Sync for 3D Canvas Environment
    const applyThemeToScene = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      if (isLight) {
        scene.fog = new THREE.FogExp2(0xf8fafc, 0.03);
        ambientLight.color.setHex(0xf1f5f9);
        ambientLight.intensity = 3.6;
        cyanKeyLight.intensity = 3.8;
        purpleRimLight.intensity = 3.0;
        darkArmorMat.color.setHex(0xe2e8f0);
        titaniumMat.color.setHex(0x94a3b8);
        ring1Mat.color.setHex(0x0284c7);
        particleMat.color.setHex(0x0284c7);
      } else {
        scene.fog = new THREE.FogExp2(0x030712, 0.04);
        ambientLight.color.setHex(0x0b1329);
        ambientLight.intensity = 3.0;
        cyanKeyLight.intensity = 4.5;
        purpleRimLight.intensity = 5.0;
        darkArmorMat.color.setHex(0x090e1a);
        titaniumMat.color.setHex(0x2d3748);
        ring1Mat.color.setHex(0x00e5ff);
        particleMat.color.setHex(0x00e5ff);
      }
    };

    applyThemeToScene();
    window.addEventListener("theme-change", applyThemeToScene);

    setIsLoaded(true);

    // =========================================================================
    // J. INTERACTIVE 360° DRAG & MOMENTUM ENGINE
    // =========================================================================
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let currentRotationY = 0;
    let currentRotationX = 0;
    let velocityY = 0.007; // Default 360 spin velocity
    let targetZoom = camera.position.z;
    let lastResetTrigger = stateRef.current.resetTrigger;

    const onPointerDown = (clientX: number, clientY: number) => {
      isDragging = true;
      setIsInteracting(true);
      previousPointerX = clientX;
      previousPointerY = clientY;
      velocityY = 0;
    };

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!isDragging) return;

      const deltaX = clientX - previousPointerX;
      const deltaY = clientY - previousPointerY;

      // Full continuous 360-degree rotation
      currentRotationY += deltaX * 0.009;
      // Vertical pitch with smooth clamp
      currentRotationX += deltaY * 0.006;
      currentRotationX = Math.max(-0.4, Math.min(0.4, currentRotationX));

      velocityY = deltaX * 0.004;

      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Mouse Listeners
    const handleMouseDown = (e: MouseEvent) => {
      onPointerDown(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      onPointerMove(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      onPointerUp();
    };

    // Touch Listeners
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      onPointerUp();
    };

    // Mouse Wheel Zoom
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetZoom = Math.max(3.2, Math.min(6.2, targetZoom + e.deltaY * 0.0035));
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    domElement.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    domElement.addEventListener("wheel", handleWheel, { passive: false });

    // =========================================================================
    // K. ANIMATION LOOP
    // =========================================================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const state = stateRef.current;

      // Handle Reset trigger to 0 degrees front view
      if (state.resetTrigger !== lastResetTrigger) {
        lastResetTrigger = state.resetTrigger;
        currentRotationY = 0;
        currentRotationX = 0;
        velocityY = 0.007;
      }

      // 360-Degree Continuous Rotation
      if (!isDragging) {
        if (state.autoRotate) {
          currentRotationY += 0.008;
        } else {
          currentRotationY += velocityY;
          velocityY *= 0.94;
        }

        // Return pitch smoothly to level
        currentRotationX += (0 - currentRotationX) * 0.05;
      }

      // Camera Zoom Lerp
      camera.position.z += (targetZoom - camera.position.z) * 0.08;

      // Apply Rotations to Robot Group
      robotGroup.rotation.y = currentRotationY;
      robotGroup.rotation.x = currentRotationX;

      // Calculate Azimuth 0°-360° for HUD
      const rawDeg = ((currentRotationY * 180) / Math.PI) % 360;
      const normalizedDeg = Math.round((rawDeg + 360) % 360);
      state.setAzimuthDeg(normalizedDeg);

      // Idle Floating Animation (Harmonic Levitation)
      const floatOffset = Math.sin(elapsedTime * 1.8) * 0.06;
      robotGroup.position.y = -0.12 + floatOffset;

      // Chest Reactor Breathing Pulse
      const breath = 1 + Math.sin(elapsedTime * 2.2) * 0.015;
      chest.scale.set(breath, breath, breath);

      // Core Light Glow Oscillation
      coreOuterRing.rotation.z += 0.03;
      corePointLight.intensity = 3.5 + Math.sin(elapsedTime * 3.2) * 1.2;

      // Head Subtle Look-Around
      headGroup.rotation.y = Math.sin(elapsedTime * 1.2) * 0.1;

      // Counter-Rotating Holographic Ground Rings
      ring1.rotation.z += 0.007;
      ring2.rotation.z -= 0.005;
      ring3.rotation.z += 0.003;

      // Particle Field Ascension
      const positions = particleGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i];
        if (positions[i * 3 + 1] > 5.5) {
          positions[i * 3 + 1] = -2.5;
        }
      }
      particleGeom.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // =========================================================================
    // L. RESIZE OBSERVER
    // =========================================================================
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      domElement.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      domElement.removeEventListener("wheel", handleWheel);
      window.removeEventListener("theme-change", applyThemeToScene);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [mode]);

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* 3D WebGL Canvas Viewport with Grab Cursor */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing relative z-10 ${
          isInteracting ? "cursor-grabbing" : ""
        }`}
        title="Click and drag to rotate robot 360°"
      />

      {/* Cybernetic Ambient Glow Aura Behind Robot */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[480px] h-[480px] rounded-full bg-cyan-500/15 blur-[130px] animate-pulse-glow" />
        <div className="w-[340px] h-[340px] rounded-full bg-purple-600/15 blur-[100px]" />
      </div>

      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-cyan-400 font-mono text-xs tracking-widest animate-pulse z-20">
          <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
          <span>SYNCHRONIZING 360° ROBOTICS CORE...</span>
        </div>
      )}

      {/* Minimalist Floating HUD Over 3D Canvas */}
      {showControls && isLoaded && (
        <>
          {/* Top-Left Live Azimuth Angle */}
          <div className="absolute top-3 left-4 z-20 pointer-events-auto">
            <div className="glass-panel px-3 py-1.5 rounded-lg border border-cyan-500/30 flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
              <div
                className="w-3.5 h-3.5 rounded-full border border-cyan-400 flex items-center justify-center transition-transform duration-75"
                style={{ transform: `rotate(${azimuthDeg}deg)` }}
                title="Azimuth Compass"
              >
                <div className="w-1 h-1 bg-cyan-400 rounded-full" />
              </div>
              <span className="text-[10px] font-mono font-bold text-cyan-300">
                BEARING: {azimuthDeg.toString().padStart(3, "0")}°
              </span>
            </div>
          </div>

          {/* Top-Right Quick 360° Spin Toggle & Reset */}
          <div className="absolute top-3 right-4 z-20 pointer-events-auto flex items-center gap-1.5 bg-slate-950/70 p-1 rounded-lg border border-slate-800/80 backdrop-blur-md">
            <button
              onClick={() => setAutoRotate((prev) => !prev)}
              className={`p-1.5 rounded text-xs transition-all ${
                autoRotate
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
              title={autoRotate ? "Pause 360° Auto-Spin" : "Resume 360° Auto-Spin"}
            >
              <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={handleResetAngle}
              className="p-1.5 rounded text-slate-400 hover:text-cyan-300 transition-all text-xs"
              title="Snap to Front Facing (0°)"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
