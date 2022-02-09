function solution(n, m) {
  var answer = [];
  let num = [];
  let N = n.toString();
  let M = m.toString();
  for (let i = 1; i <= M; i++) {
    if (M % i === 0 && N % i === 0) {
      answer.push(i);
    }
  }
  num[0] = Math.max(...answer);
  if (num[0] !== 1) {
    num[1] = m;
  } else {
    num[1] = m * n;
  }
  return num;
}
