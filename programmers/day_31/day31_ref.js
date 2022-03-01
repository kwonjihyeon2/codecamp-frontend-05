function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    //지도 1을 해독한 결과
    const map1 = arr1[i].toString(2).padStart(n, "0");
    //지도 2를 해독한 결과
    const map2 = arr2[i].toString(2).padStart(n, "0");

    for (let l = 0; l < map1.length; l++) {
      if (map1[l] === "1" || map2[l] === "1") {
        answer[i] += "#";
      } else {
        answer[i] += " ";
      }
    }
  }
  return answer;
}

//메서드 이용
function solution(n, arr1, arr2) {
  const answer = arr1.map((map1, i) => {
    map1 = map1.toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");

    const result = map1.split("").reduce((acc, cur) => {
      return acc + (cur === "1" || map2[i] === "1") ? "#" : " ";
    }, "");
    return result;
  });
}
