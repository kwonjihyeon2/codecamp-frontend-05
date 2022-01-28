function solution(a, b) {
  let answer = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  if (a === b) return a;

  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}

//제곱근 찾기
function solution(n) {
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    console.log(i, i * i);
    if (i * i === n) {
      //제곱근을 찾은 경우
      answer = i + 1;
      return answer * answer;
    } //찾지 못한 경우에도 answer(-1)로 리턴됨
  }
  return answer;
}
//for while
function solution(n) {
  let answer = 1;
  //제곱된 값이 N보다 작을 경우에만 반복문 실행
  while (answer * answer < n) {
    answer++;
  }

  return answer * answer === n ? (answer + 1) * (answer + 1) : -1;
}

//메서드 이용 - 반복문 없이 문제 풀이 가능
function solution(n) {
  let answer = Math.sqrt(n);
  //제곱근을 찾아주는 메서드 Math.sqrt(n)
  //데이터가 정수인지 판단하는 메서드 Number.isInteger()

  if (Number.isInteger(answer) === true) {
    //true : 정수
    answer++;

    return answer * answer;
    //3제곱 , 10제곱 일때는 ?
    // answer ** 3, answer ** 10 : 거듭제곱 연산자
    // Math.pow(answer , 횟수) : 거듭제곱 메서드
  } else {
    //false : 정수가 아니다.
    return -1;
  }
}
