import { useBearStore } from "../store/zustand";

function CalculatorInput() {
  const calData = useBearStore((state) => state);

  return (
    <>
      <br />
      {[...Array(10).keys()].map((key) => (
        <button onClick={() => calData.putNumber(key)} key={key}>
          {key}
        </button>
      ))}
      <button onClick={calData.resetDisplayNumber}>AC</button>
    </>
  );
}
export default CalculatorInput;
