function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }
  console.log(answer.sort((a, b) => a - b));
  // console.log(answer)
}

//newSet 방식
function solution(numbers) {
  let answer = new Set([]);

  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];

      answer.add(sum);
    }
  }
  return Array.from(answer).sort((a, b) => a - b);
  // console.log(answer)
}

//newSet + forEach + slice
function solution(numbers) {
  const answer = new Set([]);

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      const sum = num1 + num2;
      answer.add(sum); //answer.push(sum) newSet으로 배열만든것
    });
  });
  return Array.from(answer).sort((a, b) => a - b);
}
// map()과 filter()를 이용하는 방법도 있음. map으로 배열 중복하고 filter 로 거름
