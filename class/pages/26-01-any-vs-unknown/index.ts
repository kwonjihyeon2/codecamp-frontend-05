export const getAny = (args: any) => {
  const answer = args + 2;
  return answer;
};

const myResult = getAny("철수");

console.log(myResult); //철수2 -> any : 기존 자바스크립트와 차이 x

// 2. unknown type
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    const answer = args + 2;
    return answer;
  } else {
    return "숫자를 넣어주세요";
  }
};

const myResult2 = getUnknown("철수");
console.log(myResult2);
