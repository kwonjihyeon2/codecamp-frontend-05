//조건문 점수에 따른 등급

function grade(score){

  if( score < 0 || score > 100){
    return "잘못된 점수입니다." //예외처리를 제일 먼저 해두는 게 좋음 //return 으로 값을 출력하면 함수가 종료됨 else if로 조건문을 이어나가지않아도됨 if를 써줘도가능.
  } else if ( score >= 90){
    return "A"
  } else if( score >= 80 ){
    return "B"
  } else if( score >= 70){
    return "C"
  } else if(score >= 60){
    return "D"
  } else {
    return "F"
  }
}


//또다른 방법
function grade( score ){

  if( score > 100 || score < 0){
    return "잘못된 점수입니다."
  } 

  let answer = "";

  if(score >= 90){
    answer = "A";
  } else if(score >= 80){
    answer = "B";
  } else if(score >= 70){
    answer = "C"
  } else if(score >= 60){
    answer = "D"
  } else {
    answer = "F"
  }
  
  return answer
}