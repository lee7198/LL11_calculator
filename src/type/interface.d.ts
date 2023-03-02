export interface DisplayProps {
  number: number;
}

export interface CalculState {
  prevNumber: number;
  postNumber: number;
  displayNumber: number;
  plusMinus: number;
  operator: string;
  putNumber: (number: number) => void;
  resetDisplayNumber: () => void;
}
