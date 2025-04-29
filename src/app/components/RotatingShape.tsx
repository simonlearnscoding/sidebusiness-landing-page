"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function ImportedModel() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/mobius.glb");

  const primaryColor = new THREE.Color("#4A6BFF"); // Lighter blue

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
      ref.current.rotation.y += 0.0016;
    }
  });

  return <primitive object={scene} ref={ref} scale={[0.75, 0.75, 0.75]} />;
}

export default function ModelScene() {
  return (
    <div className="absolute  w-full h-96">
      {/* Your existing Canvas */}
      <Canvas
        shadows
        className="w-full h-full"
        camera={{ position: [0, 1, 5], fov: 50 }}
      >
        {/* lights, model, controls… */}
        <ambientLight color="#2A0345" intensity={1.5} />
        <directionalLight
          castShadow
          intensity={7}
          position={[5, 10, 5]}
          shadow-mapSize={2048}
        />
        <Environment preset="sunset" />
        <ImportedModel />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Invisible div that sits on top and blocks pointer events */}
      <div
        className="absolute inset-0 z-10 bg-transparent"
        // stops all pointer events from reaching the Canvas underneath:
        style={{ pointerEvents: "all" }}
      />
    </div>
  );
}
