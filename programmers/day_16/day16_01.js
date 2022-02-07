function solution(arr1, arr2) {
  let answer = [[], []];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[0].length !== 1) {
      for (let j = 0; j < arr1[0].length; j++) {
        answer[i][j] = arr1[i][j] + arr2[i][j];
      }
    } else {
      answer[i][0] = arr1[i][0] + arr2[i][0];
    }
  }

  // if(arr1[0].length !== 1){
  //     for(let k=0; k<arr1.length; k++){
  //         for(let j = 0; j < arr1[0].length; j++){
  //          answer[k][j] = arr1[k][j]+arr2[k][j]
  //         }
  //     }
  // } else{
  //     for(let i = 0; i <= arr1[0].length; i++){
  //         answer[i][0] = arr1[i][0]+arr2[i][0]
  //     }
  // }
  return answer;
}
