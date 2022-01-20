// 019. 조건문으로 홀짝 구별

function evenOdd(num) {
	if(num === 0) {
    return "Zero"
  } else if(num % 2 === 0){
    // % 나누고 나머지값을 출력하기 때문에 -> 2로 나눴을때 나머지가 0이면 이라는 식
    return "Even"
  } else{
    return "Odd"
  }
}

//결과 표출 확인
evenOdd(12) //"Even"
evenOdd(15) //"Odd"
evenOdd(0) //"Zero"