//가운데값구하기 - 가운데 인덱스값 구하기 
//반복되는 값이 있으면 변수로 지정해주는 것도 팁 ! 가독성

function solution(s) {
    let answer = '';
    
    if(s.length % 2 === 1){
        answer = s[Math.floor((s.length)/2)]
    } else{
        answer = s[s.length/2 -1] + s[s.length/2]
    }

    return answer;
}



//삼항연산자
function solution(s) {
    let answer = '';
    let length = Number(s.length)
    
    return (length % 2 ) ? s[Math.floor(length/2)] : s[length/2 -1] + s[length/2];
}

//(조건문이) ? "참이라면" : "거짓이라면" 형식




//reference code
function solution(s) {
    const center = Math.floor(s.length /2)
    let answer = s[center];
    
    if(s.length % 2 === 0){
        answer = s[center -1] + answer;
    }

    return answer;
}

//메서드 slice & 삼항연산자

//slice ? 
// 1. 문자열과 배열에 사용 가능
// 2. 배열을 얕게 복사 가능

function solution(s) {
    const center = Math.floor(s.length /2)
    let answer = s.length % 2 === 1
        ? s[center] //홀수
        : s.slice(center-1,center + 1) //짝수
   
    return answer;
}