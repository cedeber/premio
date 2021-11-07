import create from "zustand";
import { GUI } from "dat.gui";

interface GuiState {
    gui: GUI;
}

const useGuiStore = create<GuiState>(() => ({
    gui: new GUI({ width: 320 }),
}));

export { useGuiStore };
