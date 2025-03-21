import { useRef, useEffect } from "react";
import useMousePositionStore from "@/store/useMousePositionStore";

// Custom hook to handle scroll and mouse position logic efficiently
const useScrollAndMousePosition = () => {
  const setMousePosition = useMousePositionStore(
    (state) => state.setMousePosition,
  );
  const setScrollPosition = useMousePositionStore(
    (state) => state.setScrollPosition,
  );
  const mouseXPos = useMousePositionStore((state) => state.mouseX);
  const mouseYPos = useMousePositionStore((state) => state.mouseY);
  const scrollPos = useMousePositionStore((state) => state.scrollPos);

  const animationFrameId = useRef<number | null>(null);
  const lastScrollTime = useRef<number>(0);

  // Handle mouse movement (already optimized with requestAnimationFrame)
  const handleMouseMove = (e: MouseEvent) => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      setMousePosition(e.clientX, e.clientY);
    });
  };

  // Handle scroll with throttling (fires every 100ms max)
  const handleScroll = () => {
    const now = Date.now();
    if (now - lastScrollTime.current > 13) {
      // Adjust throttle interval (100ms)
      lastScrollTime.current = now;
      setScrollPosition(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true }); // Passive improves performance
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { scrollPos, mouseXPos, mouseYPos };
};

export default useScrollAndMousePosition;
