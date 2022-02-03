function solution(x) {
  let num = 0;
  let arr = [];
  arr = (x + "").split("");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    num += arr[i];
  }

  if (x % num === 0) {
    return true;
  } else return false;
}
