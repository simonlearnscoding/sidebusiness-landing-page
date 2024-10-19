"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import useMousePositionStore from "@/store/useMousePositionStore";

const HeaderSection = () => {
  const setMousePosition = useMousePositionStore(
    (state) => state.setMousePosition,
  );
  const mouseXPos = useMousePositionStore((state) => state.mouseX);
  const mouseYPos = useMousePositionStore((state) => state.mouseY);
  const animationFrameId = useRef<number | null>(null);

  const [scrollPos, setScrollPos] = useState(0);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      setMousePosition(e.clientX, e.clientY);
    });
  };

  // Handle scroll to add a parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-screen h-screen bg-zinc-900 overflow-x-hidden"
    >
      <div className="absolute bottom-0 h-1/4 w-full z-10 sm:hidden bg-gradient-to-t from-zinc-900/80 to-zinc-900/0">
        {" "}
      </div>

      {/* Content */}
      <Footer />
      <div className="flex flex-col overflow-x-hidden relative w-full h-full bg-noise-texture bg-cover bg-center bg-blend-overlay px-5 sm:px-20 z-10">
        <Header />

        {/* Parallax-animated image */}
      </div>
    </div>
  );
};

export default HeaderSection;
