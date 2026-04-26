"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { Model as CyborgModel } from "./CyborgModel";

/* ─── Animated Cyborg GLTF Model ─────────────────────────────── */
function AnimatedModel() {
  const groupRef = useRef<THREE.Group>(null!);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRot = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    targetRot.current.x += (-mouseRef.current.y * 0.05 - targetRot.current.x) * 0.055;
    targetRot.current.y += (mouseRef.current.x * 0.10 - targetRot.current.y) * 0.055;
    groupRef.current.rotation.x = targetRot.current.x;
    groupRef.current.rotation.y = targetRot.current.y;
  });

  return (
    <group position={[0, -1.8, 0]} scale={3.4}>
      <group ref={groupRef}>
        <CyborgModel />
      </group>
    </group>
  );
}

/* ─── Lights ─────────────────────────────────────────────────── */
function Lights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[-3, 2, 4]} intensity={2.5} color="#ffffff" />
      <pointLight position={[2, 0.5, 3]} intensity={4} color="#e05910" distance={10} decay={2} />
      <spotLight position={[3, 2, -4]} intensity={3} color="#ffffff" angle={0.6} penumbra={0.5} distance={15} />
    </>
  );
}

/* ─── Main Export ─────────────────────────────────────────────── */
export default function HeroScene() {
  return (
    <div id="hero-canvas" className="absolute inset-0 w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 3.6, 5.2], fov: 25 }}
        onCreated={({ camera }) => camera.lookAt(0, 3.6, 0)}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.4,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        dpr={[1, 2]}
      >
        <Lights />
        <Suspense fallback={null}>
          <AnimatedModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
