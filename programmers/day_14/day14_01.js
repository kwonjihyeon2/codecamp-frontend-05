//음수, 양수 더하기

function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else if (!signs[i]) {
      answer -= absolutes[i];
    }

    //삼항 연산자 이용
    // answer += signs[i]
    //     ? absolutes[i]
    //     : -absolutes[i]
  }
  return answer;
}

// 배열 메서드 .reduce() 이용
function solution(absolutes, signs) {
  let answer = absolutes.reduce((acc, cur, i) => {
    // console.log(acc,cur,signs[i])
    return signs[i] ? acc + cur : acc - cur;
  }, 0);

  return answer;
}
