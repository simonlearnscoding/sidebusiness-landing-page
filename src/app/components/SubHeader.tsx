"use client";
import useMousePositionStore from "@/store/useMousePositionStore";
import RotatingShape from "./RotatingShape";

export default function SubHeader() {
  const scrollPos = useMousePositionStore((state) => state.scrollPos);
  const roundedScrollPos = Math.floor(scrollPos / 33);
  const blurValue = Math.min(roundedScrollPos, 20);

  return (
    <section className="w-full mt-6 overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      {/* Main container with dynamic blur */}
      <div
        className="left-0 z-0 h-48 lg:h-[480px] w-full"
        style={{
          filter: `blur(${blurValue}px)`,
          transform: `translateY(${scrollPos / 2}px)`,
          willChange: "filter",
        }}
      >
        <RotatingShape />
      </div>
    </section>
  );
}
