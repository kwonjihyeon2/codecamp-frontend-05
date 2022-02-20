function solution(n, lost, reserve) {
  const losted = [...lost];
  // 여벌 체육복을 가진 학생의 경우는 미리 제거
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b);

  // 체육복을 잃어버린 학생들의 수를 뺀 값을 초기값으로 지정 = 수업을 들을 수 있는 학생 수
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      //잃어버린 학생의 앞 번호를 조회
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;
    } else if (reserve.includes(lost[i] + 1)) {
      //잃어버린 학생의 뒷 번호를 조회
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

function solution(n, lost, reserve) {
  const losted = [...lost];
  // 여벌 체육복을 가진 학생의 경우는 미리 제거
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b);

  // 체육복을 잃어버린 학생들의 수를 뺀 값을 초기값으로 지정 = 수업을 들을 수 있는 학생 수
  let answer = n - lost.length;

  lost.forEach((student) => {
    const prev = reserve.indexOf(student - 1);
    const next = reserve.indexOf(student + 1);

    if (prev !== -1) {
      answer++;
      reserve.splice(prev, 1);
    } else if (next !== -1) {
      answer++;
      reserve.splice(next, 1);
    }
  });
  return answer;
}
