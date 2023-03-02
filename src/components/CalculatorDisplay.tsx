import { useBearStore } from "../store/zustand";
import { DisplayProps } from "../type/interface";

function CalculatorDisplay() {
  const calData = useBearStore((state) => state);
  return <>{calData.displayNumber}</>;
}
export default CalculatorDisplay;
