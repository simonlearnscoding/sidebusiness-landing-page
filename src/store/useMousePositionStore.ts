import { create } from "zustand";

interface MousePositionState {
  mouseX: number;
  mouseY: number;
  scrollX: number;
  scrollY: number;
  setMousePosition: (x: number, y: number) => void;
  setScrollPosition: (x: number, y: number) => void;
}

const useMousePositionStore = create<MousePositionState>((set) => ({
  mouseX: 0,
  mouseY: 0,
  scrollX: 0,
  scrollY: 0,
  setMousePosition: (x, y) => set(() => ({ mouseX: x, mouseY: y })),
  setScrollPosition: (x, y) => set(() => ({ scrollX: x, scrollY: y })),
}));

export default useMousePositionStore;
