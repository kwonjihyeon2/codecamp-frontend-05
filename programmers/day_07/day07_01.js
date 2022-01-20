//김서방 찾기

function solution(seoul) {
    let answer = '';
    
    for(let i=0;i<seoul.length; i++){
        if(seoul[i] === "Kim" ){
            // return "김서방은 " + i + "에 있다"
            return `김서방은 ${i}에 있다.`
        }
    } 
}

//값을 찾았으면 break를 걸어주어 굳이 다른 값을 찾을 필요없음.

//indexOf - 배열 요소를 찾아서 해당 인덱스값 도출 false = -1
function solution(seoul) {
    let answer = seoul.indexOf("Kim");
    
    return "김서방은 " + answer + "에 있다"
}