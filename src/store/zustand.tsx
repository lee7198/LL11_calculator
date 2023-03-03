import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { putDecimal } from "./calculatorFn";
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
        isFloat: false as boolean,
        operator: Operator.PLUS,

        // 출력창에 숫자 입력
        putDisplayNumber: (number) =>
          set((state) => ({
            displayNumber:
              state.displayNumber * state.plusMinus +
              (state.plusMinus > 0 ? number : -number),
          })),
        putDisplayNumberFloat: (number) =>
          set((state) => ({
            displayNumber: putDecimal(
              state.displayNumber,
              number,
              state.plusMinus
            ),
          })),
        // 출력창 초기화
        resetDisplayNumber: () =>
          set(() => ({
            displayNumber: 0,
            isFloat: false,
            plusMinus: 10,
          })),
        // ± 기호 변경
        switchSymbol: () => {
          set((state) => ({
            plusMinus: (state.plusMinus *= -1),
            displayNumber: (state.displayNumber *= -1),
          }));
        },
        // 소수점 모드 변경
        switchFloat: () => {
          set(() => ({
            isFloat: true,
          }));
        },
        // 연산자 교체
        setOperator: (_operator: Operator) => {
          set((state) => ({
            prevNumber: state.displayNumber,
            displayNumber: 0,
            operator: _operator,
            isFloat: true,
          }));
        },
        // 계산하는 식
        calculate: () => {
          set((state) => ({
            displayNumber: eval(
              `${state.prevNumber} ${state.operator} ${state.displayNumber}`
            ),
            isFloat: true,
          }));
        },
      }),
      {
        name: "cal-storage",
      }
    )
  )
);
