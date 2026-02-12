import { create } from "zustand";

interface VideoStore {
    isVideo: boolean;
    toggle: () => void;
}

export const useVideo = create<VideoStore>((set) => ({
    isVideo: false,
    toggle: () => set((state) => ({ isVideo: !state.isVideo })),
}));
