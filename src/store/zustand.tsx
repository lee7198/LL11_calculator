import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CalculState } from "../type/interface";
import { Operator } from "../type/type";

export const useBearStore = create<CalculState>()(
  devtools(
    persist(
      (set) => ({
        //기본 값
        prevNumber: 0,
        postNumber: 0,
        displayNumber: 0,
        plusMinus: 1,
        operator: "+",

        //출력창에 숫자 입력
        putDisplayNumber: (number) =>
          set((state) => ({
            displayNumber: Number(
              state.plusMinus > 0
                ? state.displayNumber * state.plusMinus + number
                : -state.displayNumber * state.plusMinus + -number
            ),
          })),
        //출력창 초기화
        resetDisplayNumber: () =>
          set(() => ({
            displayNumber: 0,
          })),
        //± 기호 변경
        switchSymbol: () => {
          set((state) => ({
            plusMinus: (state.plusMinus *= -1),
            displayNumber: (state.displayNumber *= -1),
          }));
        },
        // 연산자 교체
        setOperator: (operator: Operator) => {},
      }),
      {
        name: "cal-storage",
      }
    )
  )
);
