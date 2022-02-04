function solution(a, b) {
  let answer = 0;
  // return answer;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

//연산 메서드 .reduce() 이용 가능
function solution(a, b) {
  let answer = a.reduce((acc, cur, i) => {
    // console.log(acc,cur,b[i])
    return acc + cur * b[i];
  }, 0);

  return answer;
}
