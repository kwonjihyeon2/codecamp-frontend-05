//018. 조건문 연습

function boolean(input1, input2){
    if(input1 === true || input2 ===true){
      return true
    } else if(input1 === false && input2 === false){  
        return false
    }
}


//return 함수값이 맞다면 값을 출력함
  
boolean(true, false) //결과 : true
boolean(false, true) 
boolean(false, false) //결과 : false