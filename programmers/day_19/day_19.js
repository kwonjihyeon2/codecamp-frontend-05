arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 0); //몇번째인덱스부터 제거 ? 몇개까지(0 : 제거안됨) ? 추가할 값
arr; // [1,2,0,4,5]

function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      //배열에서 해당 인덱스값을 삭제하거나 추가할때 ? splice
      //원본이 저장이 된다.(원본 변경)
      participant.slice(participant.indexOf(completion[i]), 1);
    }
  }
  return participant[0];
}

//효율성 증가
function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1)); //오름차순
  completion.sort(); //문자열은 조건 없어도됨.

  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

//배열 메서드 filter : 조건에맞는 요소 새로운 배열로만듬
function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1)); //오름차순
  completion.sort(); //문자열은 조건 없어도됨.

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}
