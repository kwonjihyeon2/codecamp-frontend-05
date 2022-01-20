//반복문 숫자 더하기

function sum(num){
    let count = 0;
    
    for( let i = 1; i <= num; i++){
      count = count + i // count +- i 이렇게 사용 가능

      //이 위치에서 return쓰면 break와 같은 역할 (함수 종료 가능)
    } return count
}


//for(let(변수) 초기식; 조건식; 증감식){}
//조건식 - 조건이 true일때만 실행
// if~ break - 원하는 구간에서 반복문 종료
//continue - 해당 구간의 반복문은 실행하지않음.

//for -in : 객체 반복

const obj = {
  name : "철수",
  age : 12
}

for(let key in obj){
  console.log(key, obj[key])
} //key : 변수명일뿐, 아무거나 상관없음

//결과 'name' '철수'
//    'age' 12

//for -of : 처리 속도가 느려 잘 안씀. 각 요소의 값을 가져옴

//forEach : 배열에서만 사용
const arr = ["a","b","c"];

arr.forEach( (data, index)=>{
  console.log(data, index)
}) //함수명 - data


//while - 반복을 언제까지 할 지 모를때 사용
let current = 1; //현재 층수
let answer = 0; //이동횟수

while(current !== 100){
  current++;
  answer++;
}

answer; //99