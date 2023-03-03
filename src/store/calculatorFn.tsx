export function putDecimal(preNum: number, value: number, plusMin: number) {
  if (preNum % 1 === 0) return preNum + (0.1 * value * plusMin) / 10; //첫 자리만 예외처리
  let result;
  const length = preNum.toString().split(".")[1].length + 1;
  if (preNum.toString().split(".")[1].length + 1 >= 7) return preNum; //7자리 이상 사용불가 (e-표현식)
  result = preNum + Number(Math.pow(0.1, length).toFixed(length)) * value;
  console.log(Number(Math.pow(0.1, length).toFixed(length)));
  if (plusMin < 0) value *= -value;
  return result;
}
