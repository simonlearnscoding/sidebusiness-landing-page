// hooks/useSectionObserver.ts
import { useEffect } from "react";
import { useSectionStore } from "@/store/useSectionStore";

export const useSectionObserver = (sectionIds: string[]) => {
  const setActiveSection = useSectionStore((state) => state.setActiveSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Adjust the threshold as needed
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
  }, [sectionIds, setActiveSection]);
};
