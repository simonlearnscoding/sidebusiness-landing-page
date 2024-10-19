import { useRef, useEffect } from "react";
import useMousePositionStore from "@/store/useMousePositionStore";

// Custom hook to handle scroll and mouse position logic
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

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      setMousePosition(e.clientX, e.clientY);
    });
  };

  // Handle scroll
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // Add event listeners for scroll and mouse move
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { scrollPos, mouseXPos, mouseYPos };
};

export default useScrollAndMousePosition;
