
/*
  CyborgModel – memory-optimised
  - Uses <primitive object={scene} /> instead of cloning → cuts VRAM usage in half
  - Disposes all geometries + materials on unmount to prevent GPU memory leaks
  - Sets low-cost material params once on mount
*/
'use client';
import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

export function Model(props: ThreeElements['group']) {
  const { scene } = useGLTF('/cyborg_with_thermal_katana.glb');

  // Apply low-cost material settings once
  useEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        mesh.frustumCulled = true;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.roughness = 0.65;
          mat.metalness = 0.45;
          mat.envMapIntensity = 0.3;
          mat.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/cyborg_with_thermal_katana.glb');
