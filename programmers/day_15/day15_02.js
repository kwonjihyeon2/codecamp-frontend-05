function solution(arr) {
  let answer = [];

  if (arr.length === 1) {
    return (answer = [-1]);
  } else {
    return (answer = arr.filter((el) => el > Math.min(...arr)));
  }
}

//for, if 반복문 이용
function solution(arr) {
  let answer = [];

  //1. 제일 작은 수를 찾는 과정
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  //2.제일 작은 수를 제외한 나머지 값들을 새로운 배열에 저장
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }

  return answer.length === 0 ? [-1] : answer;
}
