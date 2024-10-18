
// components/HeaderSection.tsx
"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer"; import useMousePositionStore from "@/store/useMousePositionStore";

const HeaderSection = () => {
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
      className="w-screen h-screen bg-zinc-900  overflow-x-hidden"
    >
      <div className="absolute bottom-0 h-1/4 w-full z-10 sm:hidden bg-gradient-to-t from-zinc-900/80 to-zinc-900/0">
        {" "}
      </div>

      {/* Background Overlay */}
      {/* <Image */}
      {/*   alt={"noise"} */}
      {/*   src={"/noise.png"} */}
      {/*   fill */}
      {/*   className="absolute inset-0 z-0 " */}
      {/* /> */}

      {/* Content */}
      <Footer
      />
      <div className="flex flex-col w-full h-full bg-noise-texture bg-cover bg-center bg-blend-overlay px-5 sm:px-20 z-10">
        <Header />

        <div
          className="sm:absolute  opacity-80 sm:translate-x-60  xl:-translate-x-24  top-1/2    sm:scale-100 scale-150 z-0 translate-y-40 sm:-translate-y-[400px] xs:bottom-[-160px]"
          style={{
            right: `${mouseXPos / 30 - 120}px`,
            bottom: `${mouseYPos / 30 - 120}px`,
          }}
        >
          <Image
            src={"/Comet.png"}
            alt={"meteor"}
            width={800}
            height={800}
          />
        </div>
      </div>

    </div>
  );
};


export default HeaderSection;
