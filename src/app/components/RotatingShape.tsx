"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function RotatingSShape() {
  const meshRef = useRef();

  // Define control points that form an S-shaped curve with a subtle Z-axis variation.
  // This twist adds extra dimensionality while still evoking your seamless S logo.
  const curve = useMemo(() => {
    const points = [
      new THREE.Vector3(0, 2, 0),
      new THREE.Vector3(1, 0.5, 0.3),
      new THREE.Vector3(0, 0, -0.3),
      new THREE.Vector3(-1, -0.5, 0.3),
      new THREE.Vector3(0, -1, 0),
    ];
    return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.8);
  }, []);

  // Create a TubeGeometry that follows the S curve with a thicker radius.
  const tubeGeometry = useMemo(() => {
    // Increased the tube radius from 0.06 to 0.15 to make it noticeably thicker.
    return new THREE.TubeGeometry(curve, 100, 0.15, 16, false);
  }, [curve]);

  // Slowly rotate the shape to add dynamism.
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      {/* Attach the custom, thicker tube geometry */}
      <primitive object={tubeGeometry} attach="geometry" />
      <meshStandardMaterial
        attach="material"
        color="#44A5DD"
        emissive="#43A4DC"
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function RotatingShape() {
  return (
    <Canvas
      shadows
      className="w-full h-64"
      camera={{ position: [0, 0, 3], fov: 50 }}
    >
      {/* Ambient light for soft overall illumination */}
      <ambientLight intensity={0.5} />
      {/* Directional light for dynamic shadows and highlights */}
      <directionalLight
        castShadow
        intensity={0.8}
        position={[3, 3, 3]}
        shadow-mapSize={{ width: 1024, height: 1024 }}
      />
      <RotatingSShape />
      {/* OrbitControls for gentle manual inspection */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
