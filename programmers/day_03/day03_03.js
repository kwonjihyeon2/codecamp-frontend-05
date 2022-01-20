//문자열 삽입

function makeNumber(num){
    let str = '1';
    for(let i = 2; i <= num; i++){
      str = str + "-" + i
    } return str
} 
  

//이 방식도 있음
function makeNumber(num){
  let answer = "";
  for(let i = 1; i <= num; i++){
    answer = answer + i
    if( i !== num){
      answer = answer + "-"
    }
  } return answer;
}

makeNumber(5)