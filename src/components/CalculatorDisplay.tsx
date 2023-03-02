import { useBearStore } from "../store/zustand";
import { DisplayProps } from "../store/data/interface";

function CalculatorDisplay() {
  const calData = useBearStore((state) => state);
  return (
    <>
      {calData.plusMinus} <br />
      {calData.displayNumber == 0
        ? calData.plusMinus > 0
          ? "0"
          : "-0"
        : calData.displayNumber}
    </>
  );
}
export default CalculatorDisplay;
