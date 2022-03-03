const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";
//제거 대상이 아닌 문자열

function solution(new_id) {
  // 1단계 : 대문자 -> 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자를 제거
  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      answer += new_id[i];
    }
  }
  // 3단계 : 연속된 마침표 -> 하나의 마침표
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }
  // 4단계 : 마침표(.)가 양끝에 있다면 제거
  if (answer[0] === ".") {
    answer = answer.substring(1); //slice() = substring()
  }
  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer = answer.substring(0, answer.length - 1);
    }
  }
  removeLastDot();
  // 5단계 : 빈문자열 -> "a"
  if (answer === "") {
    answer = "a";
  }
  //6단계 : 문자열의 길이가 16자 이상이면, 15자로 줄인다. 마지막 : 마침표 ? -> 삭제
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
    removeLastDot();
  }
  //7단계 : 문자열 길이가 2이하라면, 문자열 3이상 될 때까지 추가
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }
  return answer;
}

//메서드 이용

const filterStr = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";
//제거 대상이 아닌 문자열

function solution(new_id) {
  // 1단계 : 대문자 -> 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자를 제거
  let answer = new_id.split("").filter((str) => filterStr.includes(str));

  // 3단계 : 연속된 마침표 -> 하나의 마침표
  answer = answer.filter((str, i) => {
    return str != "." || (str === "." && answer[i + 1] !== ".");
  });

  // 4단계 : 마침표(.)가 양끝에 있다면 제거
  if (answer[0] === ".") {
    answer.splice(0, 1); // answer.shift() : 맨 앞 데이터 제거, .slice()
  }
  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer.splice(answer.length - 1, 1); // answer.pop()
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열 -> "a"
  if (answer.length === 0) {
    answer = ["a"];
  }

  //6단계 : 문자열의 길이가 16자 이상이면, 15자로 줄인다. 마지막 : 마침표 ? -> 삭제
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }

  //7단계 : 문자열 길이가 2이하라면, 문자열 3이상 될 때까지 추가
  if (answer.length <= 2) {
    const add = new Array(3 - answer.length).fill(answer[answer.length - 1]);
    answer = answer.concat(add);
  }
  return answer.join("");
}
