import { useBearStore } from "../store/zustand";
import { Operator } from "../store/data/type.d";

function CalculatorInput() {
  const calState = useBearStore((state) => state);

  return (
    <>
      <br />
      {[...Array(10).keys()].map((key) => (
        <button
          onClick={() =>
            calState.isFloat
              ? calState.putDisplayNumberFloat(key)
              : calState.putDisplayNumber(key)
          }
          key={key}
        >
          {key}
        </button>
      ))}
      <button onClick={calState.switchFloat}>.</button>
      <br />
      <button onClick={calState.resetDisplayNumber}>AC</button>
      <button onClick={() => calState.setOperator(Operator.PLUS)}>+</button>
      <button onClick={() => calState.setOperator(Operator.MINUS)}>-</button>
      <button onClick={() => calState.setOperator(Operator.MULTIPLY)}>*</button>
      <button onClick={() => calState.setOperator(Operator.DIVIDE)}>/</button>
      <button onClick={() => calState.setOperator(Operator.REMIND)}>%</button>
      <button onClick={calState.switchSymbol}>+/-</button>
      <button onClick={calState.calculate}>=</button>
    </>
  );
}
export default CalculatorInput;
