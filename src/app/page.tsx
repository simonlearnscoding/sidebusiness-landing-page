"use client";
import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useMousePositionStore from "@/store/useMousePositionStore";

export default function Home() {
  const [selectedImageUrls, setSelectedImageUrl] = useState<string>("");
  const setMousePosition = useMousePositionStore(
    (state) => state.setMousePosition,
  );
  const mouseXPos = useMousePositionStore((state) => state.mouseX);
  const mouseYPos = useMousePositionStore((state) => state.mouseY);
  const animationFrameId = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

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
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Content */}
      <Footer
        setIsHovered={setIsHovered}
        setSelectedImageUrl={setSelectedImageUrl}
      />
      <div className="flex flex-col w-full h-full bg-zinc-900 bg-noise-texture bg-cover bg-center bg-blend-overlay px-5 sm:px-20 z-10">
        <Navbar />
        <Header />

        <div
          className="absolute  opacity-80 sm:-translate-x-24 -translate-x-6  top-1/2   scale-100 z-0 translate-y-36 sm:-translate-y-[400px] sm:bottom-[-160px]"
          style={{
            right: `${mouseXPos / 30 - 120}px`,
            bottom: `${mouseYPos / 30 - 120}px`,
          }}
        >
          <Image
            src={"/meteor.png"}
            alt={"meteor"}
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {isHovered && (
        <div
          className="absolute rounded-sm top-0 left-0 w-96 h-96"
          style={{
            left: `${Math.min(mouseXPos + 20, window.innerWidth - 160)}px`,
            top: `${Math.min(mouseYPos - 400, window.innerHeight - 160)}px`,
            zIndex: 50,
          }}
        >
          {/* First image with a slight tilt */}
          <div
            className="absolute w-full h-full rotate-12 shadow-lg shadow-zinc-900"
            style={{
              transform: "rotate(12deg)",
            }}
          >
            <Image
              src={selectedImageUrls}
              className="rounded-md  opacity-80"
              alt={"hovered"}
              fill
            />
          </div>

          {/* Second image stacked with a different tilt */}
          <div
            className="absolute w-full h-full rotate-[18] shadow-lg shadow-zinc-900"
            style={{
              transform: "rotate(8deg)", // Slightly different rotation
            }}
          >
            <Image
              src={selectedImageUrls}
              className="rounded-md "
              alt={"hovered"}
              fill
            />
          </div>
        </div>
      )}
    </div>
  );
}
