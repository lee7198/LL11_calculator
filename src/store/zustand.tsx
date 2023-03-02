import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CalculState } from "./data/interface";
import { Operator } from "./data/type.d";

export const useBearStore = create<CalculState>()(
  devtools(
    persist(
      (set) => ({
        // 기본 값
        prevNumber: 0,
        postNumber: 0,
        displayNumber: 0,
        plusMinus: 1,
        isFloat: false,
        operator: Operator.PLUS,

        // 출력창에 숫자 입력
        putDisplayNumber: (number) =>
          set((state) => ({
            displayNumber: Number(
              state.plusMinus > 0
                ? state.displayNumber * state.plusMinus + number
                : -state.displayNumber * state.plusMinus + -number
            ),
          })),
        putDisplayNumberFloat: (number) =>
          set((state) => ({
            displayNumber: Number(
              state.plusMinus > 0
                ? state.displayNumber * state.plusMinus + number
                : -state.displayNumber * state.plusMinus + -number
            ),
          })),
        // 출력창 초기화
        resetDisplayNumber: () =>
          set(() => ({
            displayNumber: 0,
          })),
        // ± 기호 변경
        switchSymbol: () => {
          set((state) => ({
            plusMinus: (state.plusMinus *= -1),
            displayNumber: (state.displayNumber *= -1),
          }));
        },
        // 연산자 교체
        setOperator: (operator: Operator) => {
          set((state) => ({
            prevNumber: state.displayNumber,
            displayNumber: 0,
            operator,
          }));
        },
        // 계산하는 식
        calculate: () => {
          set((state) => ({
            displayNumber: eval(
              `${state.prevNumber} ${state.operator} ${state.displayNumber}`
            ),
          }));
        },
      }),
      {
        name: "cal-storage",
      }
    )
  )
);
