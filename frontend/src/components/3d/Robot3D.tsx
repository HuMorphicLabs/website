"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Robot3DProps {
  mode?: "hero" | "cta";
  className?: string;
}

export default function Robot3D({ mode = "hero", className = "" }: Robot3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.04);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    if (mode === "hero") {
      camera.position.set(0, 1.2, 5.2);
    } else {
      camera.position.set(0, 1.0, 4.6);
    }

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 4. Lighting System
    const ambientLight = new THREE.AmbientLight(0x0b1329, 2.5);
    scene.add(ambientLight);

    const cyanKeyLight = new THREE.DirectionalLight(0x00e5ff, 4.0);
    cyanKeyLight.position.set(3, 4, 4);
    scene.add(cyanKeyLight);

    const purpleRimLight = new THREE.DirectionalLight(0x7c3aed, 4.5);
    purpleRimLight.position.set(-4, 3, -3);
    scene.add(purpleRimLight);

    const chestPointLight = new THREE.PointLight(0x00e5ff, 3, 4);
    chestPointLight.position.set(0, 1.5, 0.6);
    scene.add(chestPointLight);

    // 5. Materials
    const darkMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.25,
      metalness: 0.9,
    });

    const alloyAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f293d,
      roughness: 0.3,
      metalness: 0.85,
    });

    const cyanEmissiveMaterial = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 2.2,
      roughness: 0.1,
      metalness: 0.5,
    });

    const purpleEmissiveMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      emissive: 0x7c3aed,
      emissiveIntensity: 1.8,
      roughness: 0.2,
      metalness: 0.5,
    });

    const visorMaterial = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 3.5,
      roughness: 0.05,
      metalness: 0.2,
    });

    // 6. Construct 3D Humanoid Robot
    const robotGroup = new THREE.Group();
    const upperBodyGroup = new THREE.Group();
    const headGroup = new THREE.Group();

    // --- Head ---
    const skullGeom = new THREE.BoxGeometry(0.48, 0.52, 0.46);
    const skull = new THREE.Mesh(skullGeom, darkMetalMaterial);
    headGroup.add(skull);

    // Sleek helmet crown
    const crownGeom = new THREE.CylinderGeometry(0.22, 0.28, 0.18, 6);
    const crown = new THREE.Mesh(crownGeom, alloyAccentMaterial);
    crown.position.set(0, 0.3, -0.02);
    headGroup.add(crown);

    // Glowing Horizontal Visor (Eyes / Optical sensor)
    const visorGeom = new THREE.BoxGeometry(0.38, 0.11, 0.12);
    const visor = new THREE.Mesh(visorGeom, visorMaterial);
    visor.position.set(0, 0.06, 0.22);
    headGroup.add(visor);

    // Visor brow plate
    const browGeom = new THREE.BoxGeometry(0.42, 0.06, 0.14);
    const brow = new THREE.Mesh(browGeom, alloyAccentMaterial);
    brow.position.set(0, 0.14, 0.21);
    headGroup.add(brow);

    // Chin plate
    const chinGeom = new THREE.BoxGeometry(0.24, 0.12, 0.16);
    const chin = new THREE.Mesh(chinGeom, alloyAccentMaterial);
    chin.position.set(0, -0.22, 0.18);
    headGroup.add(chin);

    // Lateral Cyber Ears / Audio Sensors
    const earLGeom = new THREE.CylinderGeometry(0.06, 0.06, 0.1, 8);
    earLGeom.rotateZ(Math.PI / 2);
    const earL = new THREE.Mesh(earLGeom, cyanEmissiveMaterial);
    earL.position.set(-0.27, 0.05, 0);
    headGroup.add(earL);

    const earR = earL.clone();
    earR.position.set(0.27, 0.05, 0);
    headGroup.add(earR);

    // Antenna
    const antennaGeom = new THREE.CylinderGeometry(0.015, 0.02, 0.35, 6);
    const antenna = new THREE.Mesh(antennaGeom, darkMetalMaterial);
    antenna.position.set(0.2, 0.38, -0.1);
    antenna.rotation.z = -0.15;
    headGroup.add(antenna);

    const antennaTipGeom = new THREE.SphereGeometry(0.035, 8, 8);
    const antennaTip = new THREE.Mesh(antennaTipGeom, cyanEmissiveMaterial);
    antennaTip.position.set(0.24, 0.54, -0.1);
    headGroup.add(antennaTip);

    headGroup.position.set(0, 2.15, 0);
    upperBodyGroup.add(headGroup);

    // --- Neck ---
    const neckGeom = new THREE.CylinderGeometry(0.12, 0.14, 0.22, 12);
    const neck = new THREE.Mesh(neckGeom, alloyAccentMaterial);
    neck.position.set(0, 1.88, 0);
    upperBodyGroup.add(neck);

    // Neck Piston hydraulics
    const neckPistonLGeom = new THREE.CylinderGeometry(0.025, 0.025, 0.2, 8);
    const neckPistonL = new THREE.Mesh(neckPistonLGeom, cyanEmissiveMaterial);
    neckPistonL.position.set(-0.08, 1.88, 0.05);
    upperBodyGroup.add(neckPistonL);

    const neckPistonR = neckPistonL.clone();
    neckPistonR.position.set(0.08, 1.88, 0.05);
    upperBodyGroup.add(neckPistonR);

    // --- Chest & Upper Torso ---
    const chestGeom = new THREE.BoxGeometry(0.96, 0.65, 0.52);
    const chest = new THREE.Mesh(chestGeom, darkMetalMaterial);
    chest.position.set(0, 1.48, 0);
    upperBodyGroup.add(chest);

    // Angular Pectoral Armor Plates
    const plateLGeom = new THREE.BoxGeometry(0.38, 0.45, 0.08);
    const plateL = new THREE.Mesh(plateLGeom, alloyAccentMaterial);
    plateL.position.set(-0.22, 1.52, 0.26);
    plateL.rotation.y = 0.12;
    upperBodyGroup.add(plateL);

    const plateR = plateL.clone();
    plateR.position.set(0.22, 1.52, 0.26);
    plateR.rotation.y = -0.12;
    upperBodyGroup.add(plateR);

    // Glowing Arc Core / Reactor in Center of Chest
    const coreOuterGeom = new THREE.TorusGeometry(0.13, 0.03, 16, 32);
    const coreOuter = new THREE.Mesh(coreOuterGeom, cyanEmissiveMaterial);
    coreOuter.position.set(0, 1.48, 0.28);
    upperBodyGroup.add(coreOuter);

    const coreInnerGeom = new THREE.CylinderGeometry(0.09, 0.09, 0.05, 24);
    coreInnerGeom.rotateX(Math.PI / 2);
    const coreInner = new THREE.Mesh(coreInnerGeom, cyanEmissiveMaterial);
    coreInner.position.set(0, 1.48, 0.28);
    upperBodyGroup.add(coreInner);

    // Cyber Chest Trim Vents
    const ventLGeom = new THREE.BoxGeometry(0.18, 0.04, 0.02);
    const ventL = new THREE.Mesh(ventLGeom, purpleEmissiveMaterial);
    ventL.position.set(-0.22, 1.32, 0.31);
    upperBodyGroup.add(ventL);

    const ventR = ventL.clone();
    ventR.position.set(0.22, 1.32, 0.31);
    upperBodyGroup.add(ventR);

    // --- Spine & Abdomen ---
    const spineGeom = new THREE.CylinderGeometry(0.14, 0.16, 0.45, 12);
    const spine = new THREE.Mesh(spineGeom, alloyAccentMaterial);
    spine.position.set(0, 0.98, -0.02);
    upperBodyGroup.add(spine);

    // Abdominal Armor Segments
    for (let i = 0; i < 3; i++) {
      const ribGeom = new THREE.BoxGeometry(0.58 - i * 0.06, 0.09, 0.42);
      const rib = new THREE.Mesh(ribGeom, darkMetalMaterial);
      rib.position.set(0, 1.1 - i * 0.13, 0.02);
      upperBodyGroup.add(rib);

      // Spine LED nodes
      const nodeGeom = new THREE.SphereGeometry(0.025, 8, 8);
      const node = new THREE.Mesh(nodeGeom, cyanEmissiveMaterial);
      node.position.set(0, 1.1 - i * 0.13, 0.24);
      upperBodyGroup.add(node);
    }

    // --- Shoulders & Arms ---
    const buildArm = (isLeft: boolean) => {
      const armGroup = new THREE.Group();
      const side = isLeft ? -1 : 1;

      // Shoulder Pauldron
      const pauldronGeom = new THREE.SphereGeometry(0.24, 16, 12);
      const pauldron = new THREE.Mesh(pauldronGeom, alloyAccentMaterial);
      pauldron.scale.set(1, 0.9, 0.9);
      pauldron.position.set(side * 0.65, 1.62, 0);
      armGroup.add(pauldron);

      const pauldronRingGeom = new THREE.TorusGeometry(0.22, 0.025, 8, 24);
      pauldronRingGeom.rotateY(Math.PI / 2);
      const pauldronRing = new THREE.Mesh(pauldronRingGeom, isLeft ? cyanEmissiveMaterial : purpleEmissiveMaterial);
      pauldronRing.position.set(side * 0.65, 1.62, 0);
      armGroup.add(pauldronRing);

      // Bicep
      const bicepGeom = new THREE.CylinderGeometry(0.09, 0.08, 0.45, 10);
      const bicep = new THREE.Mesh(bicepGeom, darkMetalMaterial);
      bicep.position.set(side * 0.68, 1.25, 0);
      armGroup.add(bicep);

      // Elbow Servo
      const elbowGeom = new THREE.SphereGeometry(0.09, 10, 10);
      const elbow = new THREE.Mesh(elbowGeom, alloyAccentMaterial);
      elbow.position.set(side * 0.69, 0.98, 0);
      armGroup.add(elbow);

      // Forearm
      const forearmGeom = new THREE.BoxGeometry(0.14, 0.42, 0.15);
      const forearm = new THREE.Mesh(forearmGeom, darkMetalMaterial);
      forearm.position.set(side * 0.71, 0.72, 0.04);
      armGroup.add(forearm);

      // Forearm glowing interface line
      const lineGeom = new THREE.BoxGeometry(0.02, 0.32, 0.02);
      const line = new THREE.Mesh(lineGeom, cyanEmissiveMaterial);
      line.position.set(side * 0.78, 0.72, 0.06);
      armGroup.add(line);

      // Robotic Hand / Gauntlet
      const handGeom = new THREE.BoxGeometry(0.12, 0.16, 0.08);
      const hand = new THREE.Mesh(handGeom, alloyAccentMaterial);
      hand.position.set(side * 0.71, 0.44, 0.06);
      armGroup.add(hand);

      return armGroup;
    };

    const leftArm = buildArm(true);
    const rightArm = buildArm(false);
    upperBodyGroup.add(leftArm);
    upperBodyGroup.add(rightArm);

    // Add Upper Body to Robot
    robotGroup.add(upperBodyGroup);

    // --- Pelvis & Lower Torso ---
    const pelvisGeom = new THREE.BoxGeometry(0.72, 0.32, 0.44);
    const pelvis = new THREE.Mesh(pelvisGeom, alloyAccentMaterial);
    pelvis.position.set(0, 0.66, 0);
    robotGroup.add(pelvis);

    const pelvisBeltGeom = new THREE.BoxGeometry(0.76, 0.06, 0.46);
    const pelvisBelt = new THREE.Mesh(pelvisBeltGeom, cyanEmissiveMaterial);
    pelvisBelt.position.set(0, 0.75, 0);
    robotGroup.add(pelvisBelt);

    // --- Legs ---
    const buildLeg = (isLeft: boolean) => {
      const legGroup = new THREE.Group();
      const side = isLeft ? -1 : 1;

      // Hip Joint
      const hipGeom = new THREE.SphereGeometry(0.12, 10, 10);
      const hip = new THREE.Mesh(hipGeom, alloyAccentMaterial);
      hip.position.set(side * 0.26, 0.56, 0);
      legGroup.add(hip);

      // Thigh
      const thighGeom = new THREE.CylinderGeometry(0.11, 0.09, 0.62, 10);
      const thigh = new THREE.Mesh(thighGeom, darkMetalMaterial);
      thigh.position.set(side * 0.27, 0.22, 0);
      legGroup.add(thigh);

      // Thigh Armor Plate
      const thighArmorGeom = new THREE.BoxGeometry(0.18, 0.45, 0.08);
      const thighArmor = new THREE.Mesh(thighArmorGeom, alloyAccentMaterial);
      thighArmor.position.set(side * 0.27, 0.22, 0.08);
      legGroup.add(thighArmor);

      // Knee Joint
      const kneeGeom = new THREE.CylinderGeometry(0.09, 0.09, 0.16, 12);
      kneeGeom.rotateZ(Math.PI / 2);
      const knee = new THREE.Mesh(kneeGeom, cyanEmissiveMaterial);
      knee.position.set(side * 0.27, -0.14, 0.02);
      legGroup.add(knee);

      // Shin
      const shinGeom = new THREE.BoxGeometry(0.16, 0.64, 0.18);
      const shin = new THREE.Mesh(shinGeom, darkMetalMaterial);
      shin.position.set(side * 0.27, -0.52, 0);
      legGroup.add(shin);

      // Futuristic Boot / Thruster Foot
      const footGeom = new THREE.BoxGeometry(0.2, 0.14, 0.38);
      const foot = new THREE.Mesh(footGeom, alloyAccentMaterial);
      foot.position.set(side * 0.27, -0.88, 0.08);
      legGroup.add(foot);

      // Foot sole thruster glow
      const soleGeom = new THREE.BoxGeometry(0.16, 0.03, 0.3);
      const sole = new THREE.Mesh(soleGeom, cyanEmissiveMaterial);
      sole.position.set(side * 0.27, -0.96, 0.08);
      legGroup.add(sole);

      return legGroup;
    };

    const leftLeg = buildLeg(true);
    const rightLeg = buildLeg(false);
    robotGroup.add(leftLeg);
    robotGroup.add(rightLeg);

    // Center robot in viewport
    robotGroup.position.set(0, -0.3, 0);
    scene.add(robotGroup);

    // 7. Holographic Scanning Rings
    const ringGroup = new THREE.Group();
    const ring1Geom = new THREE.RingGeometry(1.4, 1.44, 64);
    ring1Geom.rotateX(Math.PI / 2);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.position.y = -1.28;
    ringGroup.add(ring1);

    const ring2Geom = new THREE.RingGeometry(1.8, 1.82, 64);
    ring2Geom.rotateX(Math.PI / 2);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.position.y = -1.3;
    ringGroup.add(ring2);

    const ring3Geom = new THREE.RingGeometry(2.2, 2.22, 64);
    ring3Geom.rotateX(Math.PI / 2);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.position.y = -1.32;
    ringGroup.add(ring3);

    scene.add(ringGroup);

    // 8. Background Particle Field
    const particleCount = 280;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 1] = Math.random() * 8 - 2;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
      particleSpeeds[i] = 0.003 + Math.random() * 0.007;
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeom, particleMat);
    scene.add(particleSystem);

    setIsLoaded(true);

    // 9. Mouse Tracking & Parallax
    let targetRotationY = 0;
    let targetRotationX = 0;
    let targetHeadY = 0;
    let targetHeadX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = mouseX * 0.3;
      targetRotationX = -mouseY * 0.15;
      targetHeadY = mouseX * 0.45;
      targetHeadX = -mouseY * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 10. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle Floating (harmonic oscillation)
      const floatOffset = Math.sin(elapsedTime * 1.6) * 0.08;
      robotGroup.position.y = -0.3 + floatOffset;

      // Chest breathing expansion
      const breath = 1 + Math.sin(elapsedTime * 2.2) * 0.015;
      chest.scale.set(breath, breath, breath);

      // Core light pulsing
      coreOuter.rotation.z += 0.02;
      chestPointLight.intensity = 2.4 + Math.sin(elapsedTime * 3) * 0.8;

      // Smooth Head & Torso Mouse Tracking (Lerp)
      robotGroup.rotation.y += (targetRotationY - robotGroup.rotation.y) * 0.05;
      robotGroup.rotation.x += (targetRotationX - robotGroup.rotation.x) * 0.05;

      headGroup.rotation.y += (targetHeadY - headGroup.rotation.y) * 0.08;
      headGroup.rotation.x += (targetHeadX - headGroup.rotation.x) * 0.08;

      // Rotate Holographic Rings
      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;
      ring3.rotation.z += 0.003;

      // Animate Particle Field
      const positions = particleGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i];
        if (positions[i * 3 + 1] > 6) {
          positions[i * 3 + 1] = -2;
        }
      }
      particleGeom.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [mode]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div ref={containerRef} className="w-full h-full select-none pointer-events-none" />

      {/* Subtle Radial Glow Aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow" />
        <div className="w-[320px] h-[320px] rounded-full bg-purple-600/10 blur-[90px]" />
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-cyan-400 font-mono text-xs tracking-widest animate-pulse">
          INITIALIZING 3D ROBOTICS CORE...
        </div>
      )}
    </div>
  );
}
