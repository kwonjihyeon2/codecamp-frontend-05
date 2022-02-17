// int 의 범위 : 2 ** 53 -1
// 범위 내에 있는 지 true / false 로 결과 반환

// Number.isSafeInteger(a) 


function solution(n) {
    let prev = 0; //F(n-2) : 0번째 피보나치 수
    let next = 1; //F(n-1) : 1번째 피보나치 수
    let sum = 1; //F(n-2) + F(n-1) : 2번째 피보나치 수
    
    const answer = [];
    for (let i=2; i<=n; i++){
        sum = ( prev + next ) % 1234567;
        // 이전의 값과 그 이전의 값을 서로 더해준 값
        // 컴퓨터가 표현할 수 있는 범위의 수로 만들기위해
        prev = next; //n-2의 값에 n-1의 값을 할당
        next = sum;
        
        answer.push(sum)
    }
    return answer[n-2];
}



//메서드 사용
function solution(n - 1){
    let prev = 0; //F(n-2) : 0번째 피보나치 수
    let next = 1; //F(n-1) : 1번째 피보나치 수
    let sum = 1; //F(n-2) + F(n-1) : 2번째 피보나치 수

    const answer = new Array(n).fill(1).reduce(acc => {
        sum = ( prev + next ) % 1234567;
        prev = acc;
        next = sum;

        return sum;
    }, sum )
    return answer;
}