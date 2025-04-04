import { useEffect } from "react";
import useMousePositionStore from "@/store/useMousePositionStore";
import RotatingShape from "./RotatingShape";

export default function SubHeader() {
  const scrollPos = useMousePositionStore((state) => state.scrollPos);
  const roundedScrollPos = Math.floor(scrollPos / 33);

  // Clamp the blur value to a maximum of 20px for better control
  const blurValue = Math.min(roundedScrollPos, 20);

  return (
    <section className="w-full mt-6">
      {/* Main container with dynamic blur */}
      <div
        className="left-0 z-0 h-48 lg:h-[480px]  min-w-full"
        style={{
          filter: `blur(${blurValue}px)`,
          transform: `translateY(${scrollPos / 2}px)`,
          willChange: "filter", // Improves animation performance
        }}
      >
        {/* Gradient overlay 1 */}
        <div className="w-[500px] blur-3xl absolute rounded-full opacity-40 h-96 bg-gradient-to-br right-1/2 translate-x-1/2 from-pink-400 to-blue-500" />

        {/* Gradient overlay 2 */}
        <div className="w-[500px] blur-3xl absolute rounded-full opacity-20 h-96 bg-gradient-to-br translate-x-1/2 right-40 from-violet-400 to-emerald-100" />

        {/* 3D Shape */}

        <RotatingShape />
      </div>
    </section>
  );
}
