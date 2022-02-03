function solution(x) {
  let num = 0;
  let arr = [];
  arr = (x + "").split("");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    num += arr[i];
  }

  if (x % num === 0) {
    return true;
  } else return false;
}

//메서드 .reduce() 이용 - 연산된 값을 가져오는 메서드
function solution(x) {
  //같은 방식 : const answer = String(x)
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      // console.log(acc,cur)
      return Number(acc) + Number(cur);
    });
  return x % answer === 0;
}

//reduce에서 초기값을 0으로 설정하면 현재값에만 Number설정을 해주면 됨.
