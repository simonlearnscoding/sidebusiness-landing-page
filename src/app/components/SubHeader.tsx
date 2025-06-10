"use client";
import useMousePositionStore from "@/store/useMousePositionStore";
import { OurWorkCarousell } from "./OurWorkCarousell";

export default function SubHeader() {
  const scrollPos = useMousePositionStore((state) => state.scrollPos);
  const roundedScrollPos = Math.floor(scrollPos / 60);
  const blurValue = Math.min(roundedScrollPos, 20);

  return (
    <section className="w-full overflow-hidden">
      <div
        className="left-0  mb-28 lg:mb-40 mt-12 lg:h-[480px] w-full"
        style={{
          filter: `blur(${blurValue}px)`,
          transform: `translateY(${scrollPos / 2}px)`,
          willChange: "filter",
        }}
      >
        <OurWorkCarousell />
      </div>
    </section>
  );
}
