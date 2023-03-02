import { Operator } from "./type";

export interface DisplayProps {
  number: number;
}

export interface CalculState {
  prevNumber: number;
  postNumber: number;
  displayNumber: number;
  plusMinus: number;
  operator: string;
  putDisplayNumber: (number: number) => void;
  resetDisplayNumber: () => void;
  switchSymbol: () => void;
  setOperator: (operator: Operator) => void;
}
