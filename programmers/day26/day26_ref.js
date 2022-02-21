const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      answer += s[i]; //공백
      continue;
    }

    let index = alphabet.indexOf(s[i]);
    const word =
      index > 25 ? alphabet.slice(26, alphabet.length) : alphabet.slice(0, 26);
    index = word.indexOf(s[i]) + n;

    if (word[index] === undefined) {
      index -= 26;
    }
    answer += word[index];
  }
  return answer;
}

const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      answer += "";
      continue;
    }

    const word = lower.includes(s[i]) ? lower : upper;
    let index = word.indexOF(s[i]) + n;

    if (index >= 26) {
      index -= 26;
    }
  }
}

//reduce 메서드
const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장

function solution(s, n) {
  const answer = s.split("").reduce((acc, cur) => {
    if (cur === " ") {
      return acc + " ";
    }

    const word = lower.includes(cur) ? lower : upper;
    let index = word.indexOf(cur) + n;
    if (index >= 26) {
      index -= 26;
    }

    return acc + word[index];
  }, "");
}

//아스키 코드
//어떠한 문자를 해당되는 숫자 데이터로 변환
//소문자 : 97~122 까지, 대문자 : 65~90
//String.fromCharCode(122) : "z" => 숫자를 문자로 변환

// str = "A"
// str.charCodeAt(); 결과 : 90
function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      answer += "";
      continue;
    }
    let index = s[i].charCodeAt() + n;
    // 소문자 z(122)이상, 대문자 Z(90) 넘어가거나
    // 대문자이면서 소문자 a(97) 넘지 않을 때
    if (index > 122 || (index > 90 && index - n < 97)) {
      index -= 26;
    }
    answer += String.fromCharCode(index);
  }
  return answer;
}
