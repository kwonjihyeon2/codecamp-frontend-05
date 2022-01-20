//짝수와 홀수
function solution(num) {
    let answer = '';
    
    if(num % 2 === 0 || num === 0){
        answer = "Even"
    } else{
        answer = "Odd"
    }
    return answer;
}


//삼항연산자
function solution(num) {
    
    return (num%2 === 0 || num === 0) ? "Even" : "Odd";
    
}