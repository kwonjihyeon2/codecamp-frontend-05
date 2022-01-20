//조건문으로 온도 관련 함수 구하기

function temperature(num){
	if(num >= 24 && num <=30) {
      return "조금 덥습니다."
	} else if(num >= 19){
        //조건 num >=19 && num <=23 이라고 써줘도되지만 위에 이미 num >=24의 조건이 있기때문에 23은 굳이 써주지않아도됨.
      return "날씨가 좋네요."
  } else if(num <=18 && num >=10){ 
      return "조금 춥네요."
  } else{
      return "10~30사이로 입력하세요."
  }
}

//결과
temperature(13) //'조금 춥네요.'
temperature(3) //'10~30사이로 입력하세요.'
temperature(27) //'조금 덥습니다.'
temperature(23) //'날씨가 좋네요.'