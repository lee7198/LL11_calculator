import { useBearStore } from "../store/zustand";

function CalculatorInput() {
  const calState = useBearStore((state) => state);

  return (
    <>
      <br />
      {[...Array(10).keys()].map((key) => (
        <button onClick={() => calState.putDisplayNumber(key)} key={key}>
          {key}
        </button>
      ))}
      <br />
      <button onClick={calState.resetDisplayNumber}>AC</button>
      <button>+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
      <button>%</button>
      <button onClick={calState.switchSymbol}>+/-</button>
      <button>=</button>
    </>
  );
}
export default CalculatorInput;
