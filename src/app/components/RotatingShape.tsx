"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function ImportedModel() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/mobius.glb");

  const primaryColor = new THREE.Color("#000862");

  useEffect(() => {
    scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          // Set main color and material properties
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.color = primaryColor;
          material.metalness = 0.2; // Reduce metalness (0-1)
          material.roughness = 0.8; // Increase roughness (0-1)
          material.side = THREE.DoubleSide;
          material.emissive = new THREE.Color(0x000000);
          material.needsUpdate = true;
        }
      }
    });
  }, [scene, primaryColor]);

  // Rotate the model continuously
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return <primitive object={scene} ref={ref} />;
}

export default function ModelScene() {
  return (
    <Canvas
      shadows
      className="w-full h-64"
      camera={{ position: [0, 1, 5], fov: 50 }}
    >
      {/* Basic ambient light */}
      <ambientLight
        color="#2A0345" // Dark purple hex code
        intensity={1.5}
      />
      {/* Directional light with shadows */}
      <directionalLight
        castShadow
        intensity={7}
        position={[5, 10, 5]}
        shadow-mapSize={2048}
      />
      {/* Environment light can help PBR materials look more natural */}
      <Environment preset="sunset" />
      <ImportedModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
