function solution(arr, divisor) {
  let answer = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    } else if (arr[i] % divisor !== 0) {
      count++;
    }
    if (count >= arr.length) {
      answer.push(-1);
    }
  }

  answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}

function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], arr[i] % divisor);
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
  //빈 배열이 아니라면 오름차순으로 정렬
}

//메서드 풀이 방식
//조건에 만족하는 인덱스만 거름 : filter

function solution(arr, divisor) {
  const answer = arr.filter((num) => {
    // console.log(num)
    return num % divisor === 0;
  });

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
