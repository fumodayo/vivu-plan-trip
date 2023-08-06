import { create } from "zustand";

interface TipsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useTipsModal = create<TipsModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useTipsModal;
