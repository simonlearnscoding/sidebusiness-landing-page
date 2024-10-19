"use client";
import useMousePositionStore from "@/store/useMousePositionStore";
import Image from "next/image";

const Comet = () => {
  // Access scroll and mouse positions from the Zustand store
  const mouseXPos = useMousePositionStore((state) => state.mouseX);
  const mouseYPos = useMousePositionStore((state) => state.mouseY);
  const scrollPos = useMousePositionStore((state) => state.scrollPos);

  return (
    <div
      className="absolute opacity-80 right-0 max-w-screen sm:scale-100 overflow-x-hidden scale-150 top-20 z-0 translate-x-0 translate-y-40 sm:-translate-y-[400px] xs:bottom-[-160px]"
      style={{
        opacity: 1 - scrollPos / 1000, // Fade out as user scrolls
        filter: `blur(${scrollPos / 200}px)`, // Apply blur effect based on scroll position
        transform: `translateX(${Math.min(mouseXPos / 30 - 80, 0)}px) translateY(${
          scrollPos / 10 + mouseYPos / 30
        }px) scale(${1 + scrollPos / 2 / 1000})`, // Clamp translateX to avoid exceeding the viewport
      }}
    >
      <Image src={"/Comet.png"} alt={"meteor"} width={800} height={800} />
    </div>
  );
};

export default Comet;
