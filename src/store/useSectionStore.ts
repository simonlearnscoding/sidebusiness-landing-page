import { create } from "zustand";

interface SectionStore {
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (sectionId: string) => void;
  isLastSectionFullyVisible: boolean;
  setIsLastSectionFullyVisible: (isVisible: boolean) => void;
}

export const useSectionStore = create<SectionStore>((set) => ({
  activeSection: "",
  setActiveSection: (section: string) => set({ activeSection: section }),
  scrollToSection: (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  },
  isLastSectionFullyVisible: false,
  setIsLastSectionFullyVisible: (isVisible: boolean) =>
    set({ isLastSectionFullyVisible: isVisible }),
}));
