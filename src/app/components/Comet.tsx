"use client";
import useMousePositionStore from "@/store/useMousePositionStore";
import Image from "next/image";

const Comet = () => {
  // Access scroll and mouse positions from the Zustand store
  const mouseXPos = useMousePositionStore((state) => state.mouseX);
  const mouseYPos = useMousePositionStore((state) => state.mouseY);
  const scrollPos = useMousePositionStore((state) => state.scrollPos);

  // Check screen width to apply different translateY on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const translateYMobileOffset = isMobile ? 300 : 0; // Add extra offset for mobile
  const translateXMobileOffset = isMobile ? 80 : 0; // Add extra offset for mobile

  return (
    <div
      className="absolute opacity-30 right-0 max-w-screen  sm:scale-100 overflow-x-hidden scale-150 top-20 z-0 translate-x-0"
      style={{
        opacity: 1 - scrollPos / 1000, // Fade out as user scrolls
        filter: `blur(${scrollPos / 200}px)`, // Apply blur effect based on scroll position
        transform: `translateX(${Math.min(mouseXPos / 30 - 80, 0) + translateXMobileOffset}px) translateY(${
          scrollPos / 10 + mouseYPos / 30 + translateYMobileOffset
        }px) scale(${1 + scrollPos / 2 / 1000})`, // Add mobile-specific offset to translateY
      }}
    >
      <Image src={"/Comet.png"} alt={"meteor"} width={800} height={800} />
    </div>
  );
};

export default Comet;
