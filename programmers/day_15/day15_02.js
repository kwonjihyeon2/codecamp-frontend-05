function solution(arr) {
  let answer = [];

  if (arr.length === 1) {
    return (answer = [-1]);
  } else {
    return (answer = arr.filter((el) => el > Math.min(...arr)));
  }
}
