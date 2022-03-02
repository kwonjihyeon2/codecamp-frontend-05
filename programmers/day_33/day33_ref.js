const bonus = ["S", "D", "T"]; //보너스를 판단하기 위해서 배열 보너스 데이터를 저장

function solution(dartResult) {
  const answer = 0;

  let score = "";
  for (let i = 0; i < dartResult.length; i++) {
    //isNaN = false -> 숫자
    if (isNaN(dartResult[i]) === false) {
      score += dartResult[i];
    } else {
      //숫자가 아닌경우 : S,D,T,*,#
      if (bonus.includes(dartResult[i])) {
        score = Number(score);
        if (dartResult[i] === "D") {
          // score = score ** 2
          score = Math.pow(score, 2);
        } else if (dartResult[i] === "T") {
          score = Math.pow(score, 3);
        }
        answer.push(score);
        score = "";
      } else {
        //옵션이 있는 경우
        if (dartResult[i] === "#") {
          answer[answer.length - 1] *= -1; //아차상 = 점수 * -1
        } else {
          answer[answer.length - 1] *= 2;
          if (answer.length > 1) {
            answer[answer.length - 2] *= 2;
          }
        }
      }
    }
  }
  return answer.reduce((acc, cur) => acc + cur);
}

// Use reduce method
