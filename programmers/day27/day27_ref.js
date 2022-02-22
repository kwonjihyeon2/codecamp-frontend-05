function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const stageArr = [];

  for (let i = 1; i <= N; i++) {
    stageArr.push({
      stage: i, //스테이지 번호
      fail: 0, //실패율
      users: 0, // 통과하지못한 유저의 수
    });
  }

  let allUsers = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (stageArr[stages[i] - 1]) {
      stageArr[stages[i] - 1].users++;

      if (stages[i] !== stages[i + 1]) {
        const fail = stageArr[stages[i] - 1].users / allUsers;
        allUsers -= stageArr[stages[i] - 1].users;

        stageArr[stages[i] - 1].fail = fail;
      }
    }
  }

  const answer = stageArr
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
  return answer;
}

//배열 메서드 사용
//lastIndexOf() = 배열의 뒤에서부터 찾아줌.
function solution(N, stages) {
  stages.sort((a, b) => a - b);

  let allUsers = stages.length;
  const answer = new Array(N)
    .fill(1)
    .map((el, i) => {
      const stage = el + i;
      const arr = stages.alice(
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );
      const fail = aarr.length / allUsers;
      allUsers -= arr.length;

      return { stage, fail };
    })
    .sort((a, b) => {
      return (b.fail = a.fail);
    })
    .map((el) => el.stage);
  return answer;
}
