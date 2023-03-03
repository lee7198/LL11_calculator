import { Operator } from "./type.d";

export interface DisplayProps {
  number: number;
}

export interface CalculState {
  prevNumber: number;
  postNumber: number;
  displayNumber: number;
  plusMinus: number;
  isFloat: boolean;
  operator: Operator;
  putDisplayNumber: (number: number) => void;
  putDisplayNumberFloat: (number: number) => void;
  resetDisplayNumber: () => void;
  switchSymbol: () => void;
  switchFloat: () => void;
  setOperator: (operator: Operator) => void;
  calculate: () => void;
}
