function solution(n) {
  let answer = [];
  n = n.toString();

  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  console.log(answer);
}

//반복문 시작을 처음으로하고싶다면?
//.reverse() 사용
//배열의 순서를 바꿔줌

//메서드 풀이 방식
function solution(n) {
  const answer = n
    .toString() //문자열로 만든 상태
    .split("") //문자열을 각각의 인덱스로 나눠 배열로 바꿈
    .map((el) => {
      return Number(el);
    }) //동일한 요소에 식 적용(반복문처럼)
    .reverse(); //인덱스값 반대로 배치
  return answer;
}
