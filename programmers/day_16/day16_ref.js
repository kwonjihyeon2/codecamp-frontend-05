function solution(arr1, arr2) {
  const answer = [[]];

  //1. arr1 전체 배열 데이터 조회
  for (let i = 0; i < arr1.length; i++) {
    //2. arr1 에 있는 배열의 각 요소 데이터를 조회
    for (let l = 0; l < arr1[i].length; l++) {
      const sum = arr1[i][l] + arr2[i][l];
      //3. 행과 열에 해당되는 부분에 데이터를 넣기 위해 빈 배열값을 추가
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      // 4. 행과 열에 해당되는 부분에 데이터를 추가
      answer[i][l] = sum;
    }
  }
  return answer;
}

// 메서드이용해서 풀이 .map()
function solution(arr1, arr2) {
  //.map() -> .map() : 이중배열로 값을 받아올 수 있음.
  //filter도 사용할 수 있음 원하는 데이터를 걸러서 받을 수 있기때문에.
  const answer = arr1.map((num1, i) => {
    console.log(num1, arr2[i]);
    return num1.map((num2, l) => {
      console.log(num2, arr2[i][l]);
      return num2 + arr2[i][l];
    });
  });
  return answer;
}
