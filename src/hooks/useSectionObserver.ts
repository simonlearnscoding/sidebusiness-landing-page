import { useEffect } from "react";
import { useSectionStore } from "@/store/useSectionStore";

const useSectionObserver = (sectionIds: string[]) => {
  const setActiveSection = useSectionStore((state) => state.setActiveSection);
  const setIsLastSectionFullyVisible = useSectionStore(
    (state) => state.setIsLastSectionFullyVisible,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);

            // Check if the last section is fully visible
            if (entry.target.id === sectionIds[sectionIds.length - 1]) {
              setIsLastSectionFullyVisible(entry.intersectionRatio === 1);
            }
          }
        });
      },
      {
        root: null,
        threshold: 1, // Full visibility threshold for last section
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, setActiveSection, setIsLastSectionFullyVisible]);
};

export default useSectionObserver;
