//약수 더하기
function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= n; i++){
        if(n% i === 0){
            answer += i;
        }
        
    }return answer;
}


//반복문 동작 횟수 줄여보자
function solution(n) {
    let answer = n;
    
    for(let i = 1; i <= n / 2; i++){
        if(n% i === 0){
            answer += i;
        }  
    } return answer;
}

//reduce() 메서드 이용하자
//reduce는 배열에서 사용할 수 있기때문에 새로운 배열을 만들어줘야함.

function solution(n) {
    //실제 값은 비어있는 배열, 길이는 n만큼 있지만
    const answer = new Array(n) //해당 갯수만큼 배열 생성
                        .fill(1) //배열의 데이터마다 해당 인자를 할당
                        .reduce((cu,el, i)=>{
                            const num = el + i;
                            return n % num === 0
                                ? cu + num
                                : cu
                        },0)
    return answer;
}