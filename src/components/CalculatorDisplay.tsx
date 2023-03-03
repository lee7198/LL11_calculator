import { useBearStore } from "../store/zustand";

function CalculatorDisplay() {
  const calData = useBearStore((state) => state);
  return (
    <>
      {calData.plusMinus} <br />
      {calData.isFloat ? "float" : "integer"} <br />
      {calData.displayNumber == 0
        ? calData.plusMinus > 0
          ? "0"
          : "-0"
        : calData.displayNumber}
    </>
  );
}
export default CalculatorDisplay;
