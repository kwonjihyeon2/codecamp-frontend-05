function solution(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  //특정한 문자열을 해당되는 문자열로 변경 replace
  //원본저장x 중복되면 가장 앞에 있는 단어 하나만 바뀜
  //전체 변경 - replaceAll
  let str = "abced";
  for (let i = 0; i < numbers.length; i++) {
    while (s.includes(numbers[i])) {
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s);
}

function solution(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numbers.forEach((el, i) => {
    s = s.split(el).join(i);
  });
  return Number(s);
}

function solution(s) {
  // 정규표현식 -> g : 전역검사
  // s = s.replace( /zero/g , '0')
  // s = s.replace( /one/g , '1')
  // s = s.replace( /two/g , '2') ... 이런식도되지만
  // 정규표현식 동적으로 ?
  for (let i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}
