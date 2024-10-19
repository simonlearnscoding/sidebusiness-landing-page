import { create } from "zustand";

interface MousePositionState {
  mouseX: number;
  mouseY: number;
  scrollPos: number;
  setMousePosition: (x: number, y: number) => void;
  setScrollPosition: (y: number) => void;
}

const useMousePositionStore = create<MousePositionState>((set) => ({
  mouseX: 0,
  mouseY: 0,
  scrollPos: 0,
  setMousePosition: (x, y) => set(() => ({ mouseX: x, mouseY: y })),
  setScrollPosition: (scrollY: number) => set({ scrollPos: scrollY }),
}));

export default useMousePositionStore;
