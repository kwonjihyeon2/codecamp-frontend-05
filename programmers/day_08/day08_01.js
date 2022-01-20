//자연수 구하기
function solution(n){
    
    let answer = 0;
    let str = String(n)
    
    for(let i=0; i<str.length; i++){
        answer = answer + Number(str[i])
    }
    return answer
}