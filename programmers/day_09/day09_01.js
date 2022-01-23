//문자열 정렬
//문자열을 배열로(split), 배열 정렬 메서드(.sort)

function solution(s) {
    let arr = s.split("")
    
    arr.sort(function(a, b){
        if(a > b) return -1
        if(a < b) return 1
        if(a === b) return 0
    })
    
    arr = arr.join("")
    return arr
}


//for문 사용해도됨
function solution(s) {
    const answer = [];
    
    for(let i = 0; i < s.length; i++){
        answer.push(s[i])
    }
    
    answer.sort((a,b)=>{
        return a> b ? -1 : 1;
    })
    
    //이렇게 만들고 배열을 for문 다시 사용해서 answer에 넣어줌s
}


function solution(s) {
    const answer = s.split("")
                    .sort((a,b)=>{
                        return a > b ? -1 : 1;
                    }).join("")
    return answer;
}