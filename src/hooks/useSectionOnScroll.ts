import { useEffect, useState } from "react";
import { useSectionStore } from "@/store/useSectionStore";

export default function useSectionOnScroll() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isControlledScroll, setIsControlledScroll] = useState(true);
  const sections = ["first", "second"];
  const scrollToSection = useSectionStore((state) => state.scrollToSection);
  const activeSection = useSectionStore((state) => state.activeSection);
  const isLastSectionFullyVisible = useSectionStore(
    (state) => state.isLastSectionFullyVisible,
  );

  const getCurrentSectionIndex = () =>
    sections.findIndex((section) => section === activeSection);

  const scrollToRelativeSection = (n) => {
    const targetIndex = getCurrentSectionIndex() + n;
    if (targetIndex >= 0 && targetIndex < sections.length) {
      scrollToSection(sections[targetIndex]);
    }
  };

  // Disable native scroll when in controlled scroll mode
  useEffect(() => {
    document.body.style.overflow = isControlledScroll ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isControlledScroll]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling) return;

      const currentIndex = getCurrentSectionIndex();

      if (event.deltaY > 0) {
        // Scroll down
        if (currentIndex === sections.length - 1) {
          setIsControlledScroll(false); // Detach controlled scroll at the last section
        } else if (isControlledScroll) {
          scrollToRelativeSection(1); // Move to the next section
        }
      } else if (event.deltaY < 0) {
        // Scroll up
        if (
          !isControlledScroll &&
          currentIndex === sections.length - 1 &&
          isLastSectionFullyVisible
        ) {
          // Reattach controlled scroll when scrolling up and last section is fully visible
          setIsControlledScroll(true);
        } else if (isControlledScroll) {
          scrollToRelativeSection(-1); // Move to the previous section
        }
      }

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [
    isScrolling,
    isControlledScroll,
    activeSection,
    isLastSectionFullyVisible,
  ]);

  return { scrollToRelativeSection, isControlledScroll };
}
