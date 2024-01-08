import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type BearStore = {
  count: number;
  inc: () => void;
  dec: () => void;
};

export const useStore = create<BearStore>()(
  devtools(
    persist(
      (set) => ({
        count: 1,
        inc: () => set((state) => ({ count: state.count + 1 })),
        dec: () => set((state) => ({ count: state.count - 1 })),
      }),
      { name: "bear-storage" }
    )
  )
);
