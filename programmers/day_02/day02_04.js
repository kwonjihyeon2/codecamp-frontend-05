//조건문으로 month 구하기

function days(month) {
	if( month === 2) {
    return "28일"
  } else if( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
    return "31일"
  } else {
    return "30일"
  }
}

function days(month) {
	if( month === 2) {
    return "28일"
  } else if( month < 8 && month % 2 !==0 ){
    return "31일"
  } else if( month >= 8 && month % 2 === 0){
    return "31일"
  } else {
    return "30일"
  }
}

const monthList = {
    1 : 31,
    2 : 28,
    3 : 31,
    4 : 30,
    5 : 31,
    6 : 30,
    7 : 31,
    8 : 31,
    9 : 30,
    10 : 31,
    11 : 30,
    12 : 31
}
  
function days(month) {
    return monthList[month]
    //객체를 변수에 할당하고 키값을 리턴해주면 됨.
    //이 방식은 배열의 인덱스와 헷갈릴 수도 있는데 "객체"라는 점 생각할 것
    //객체 키값 알아낼 때 : 1.monthList.name 2.monthList[name]
}


//세 방법 모두 같은 값 확인
days(2) // 결과 : "28일"
days(11) // 결과 : "30일"
days(7) // 결과 : "31일"