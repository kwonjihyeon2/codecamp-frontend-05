// 2진법 : 0과 1로 이루어진 숫자
// 10진법 : 0과 9로 이루어진 숫자
// 3진법 : 0, 1, 2로 이루어진 숫자

a = 125;
String(a);
a = a.toString(3); // 3진법으로 변경 -> 11122

Number();
parseInt(a, 3); // 원래 진법(숫자 타입)으로 변환

function solution(n) {
  // 3진법으로 변환
  n = n.toString(3);

  // 앞뒤를 반전
  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }

  // 뒤집은 3진법 데이터를 10진법으로 변환
  return parseInt(reverse, 3);
}

//메서드
function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}

// 이진 변환하기
function solution(s) {
  let count = 0; // 이진 변환된 횟수
  let remove = 0; // 0이 제거된 횟수

  //원하는 결과가 나올때까지 반복 - while
  while (s !== "1") {
    count++;

    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue;
      }
      temp += s[i];
    }
    s = temp.length;
    s = s.toString(2);
  }
  return [count, remove];
}

//재귀함수(recursion function)

// 1.함수를 반복해서 실행한다, 자기 자신을 반복해서 실행한다.
// 2.종료되는 시점을 꼭 정해줘야함.

function recursion(count) {
  //count 하면 0나옴

  if (count >= 5) {
    return;
  } // 재귀함수 종료 시점 설정 필수 -> 아니면 무한으로 로직이 실행됨.

  count++;
  console.log(count);
  return recursion(count);
}

recursion(0);

function solution(s) {
  let [count, remove] = [0, 0];

  function recursion() {
    if (s === "1") {
      return [count, remove];
    }

    remove += s.split("").filter((el) => el === "0").length;
    s = s.split("").filter((el) => el === "1").length;

    count++;

    return recursion(s.toString(2));
  }

  return recursion(s); //함수 안의 결과를 표출
  //효율성이 좋지는 않음. while ⚡️
}
