import { useBearStore } from "../store/zustand";
import { CalculatorDisplayStyle } from "../styles/components/CalculatorDisplayStyle";

function CalculatorDisplay() {
  const calData = useBearStore((state) => state);
  return (
    <CalculatorDisplayStyle>
      {calData.displayNumber == 0
        ? calData.plusMinus > 0
          ? "0"
          : "-0"
        : calData.displayNumber}
    </CalculatorDisplayStyle>
  );
}
export default CalculatorDisplay;
