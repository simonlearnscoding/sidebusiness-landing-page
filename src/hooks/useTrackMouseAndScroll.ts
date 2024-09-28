import { useEffect } from "react";
import useMousePositionStore from "@/store/useMousePositionStore";

const useTrackMouseAndScroll = () => {
  const setMousePosition = useMousePositionStore(
    (state) => state.setMousePosition,
  );
  const setScrollPosition = useMousePositionStore(
    (state) => state.setScrollPosition,
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition(event.clientX, event.clientY);
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollX, window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setMousePosition, setScrollPosition]);
};

export default useTrackMouseAndScroll;
