//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    let answer = [];
    
    //n = 배열의 갯수
    //x = 배열 첫번째 인덱스, x만큼 증가
    
    for(let i=0; i<=n; i++){
        answer[i] = x * i
    }
    answer.shift()
    return answer;
}



function solution(x, n) {
    //해당 갯수를 가지는 배열을 직접 만들어줘야함
    const answer = new Array( n)
                     .fill(1)
                    .map((num,i)=>{
                        return x * (num + i)
                    })
    
    return answer;
    
    //undefined를 가진 배열은 메서드 사용 불가
    
}