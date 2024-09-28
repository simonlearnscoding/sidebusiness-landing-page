"use client";

import { useRef } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useMousePositionStore from "@/store/useMousePositionStore";

export default function Home() {
  const setMousePosition = useMousePositionStore(
    (state) => state.setMousePosition,
  );
  const mouseXPos = useMousePositionStore((state) => state.mouseX);
  const mouseYPos = useMousePositionStore((state) => state.mouseY);
  const animationFrameId = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      setMousePosition(e.clientX, e.clientY);
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-screen h-screen relative overflow-hidden"
    >
      {/* Background Overlay */}
      <Image
        alt={"noise"}
        src={"/noise.png"}
        fill
        className="absolute inset-0  z-0 pointer-events-none"
      />

      {/* Content */}
      <Footer />
      <div className="flex flex-col w-full h-full bg-zinc-900 bg-noise-texture bg-cover bg-center bg-blend-overlay px-20 z-10">
        <Navbar />
        <Header />

        <div
          className="absolute bottom-[-160px]"
          style={{
            right: `${mouseXPos / 30 - 120}px`,
            bottom: `${mouseYPos / 30 - 120}px`,
          }}
        >
          <Image src={"/meteor.png"} alt={"meteor"} width={800} height={800} />
        </div>
      </div>
    </div>
  );
}
