//배열의 평균 구하기
function solution(arr) {
    let answer = 0;
    let sum = 0;
    
    for(let i=0;i<arr.length;i++){
        sum += arr[i] //sum = sum + arr[i]
    }
    answer = sum / arr.length
    
    return answer;
}

//메서드 방식
function solution(arr){
    return arr.reduce((cu, el) => {
      //cu : current - 누적된 값 : return의 값을 누적시킴
      //el : element - 배열의 각 요소를 가져옴
      return cu + el  
    }, 0) / arr.length
    //최초 요소에 대한 값을 넣어줌
}
    
    
    