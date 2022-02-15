const answerTable = [
  //1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  //2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  //3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  let score = [0, 0, 0]; //점수를 저장하는 배열
  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answers[i] === answerTable[l][i % answerTable[l].length]) {
        score[l]++;
      }
    }
  }
  //가장 많이 맞춘 학생의 점수를 저장
  const biggest = Math.max(...score);
  const answer = [];
  for (
    let i = 0;
    i < score.length;
    i++ //점수 하나씩 비교
  ) {
    console.log(score[i], biggest);
    if (biggest === score[i]) {
      //가장 많이 맞춘 학생의 점수와 동일할 때만
      answer.push(i + 1);
    }
  }
  return answer;
}

//메서드 활용
function solution(answers) {
  const answer = answerTable.map((el, i) => {
    const score = answers.reduce((acc, cur, l) => {
      return acc + (el[l % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score };
  });
  // 가장 많이 맞춘 학생의 점수
  const biggest = Math.max(
    ...answer.map((el) => {
      return el.score;
    })
  ); //map 사용 시 => return 의미 =>{} 사용하려면 값 받을 때 return 써주어야함

  return answer
    .filter((el) => {
      return el.score === biggest;
    })
    .map((el) => el.student);
}
