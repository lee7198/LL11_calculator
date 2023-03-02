import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CalculState } from "../type/interface";

export const useBearStore = create<CalculState>()(
  devtools(
    persist(
      (set) => ({
        prevNumber: 0,
        postNumber: 0,
        displayNumber: 0,
        plusMinus: 10,
        operator: "+",
        putNumber: (number) =>
          set((state) => ({
            displayNumber: Number(
              state.displayNumber * state.plusMinus + number
            ),
          })),
        resetDisplayNumber: () =>
          set(() => ({
            displayNumber: 0,
          })),
      }),
      {
        name: "cal-storage",
      }
    )
  )
);
