//문자열 다루기
function solution(s) {
    if(s.length !== 4 && s.length !== 6){
        return false;
    }
    
    for(let i = 0; i < s.length; i++){
        if(isNaN(s[i])){
            return false;
        }
    } return true;
}


//for 대신 filter메서드 이용 가능 **대신 필터는 배열에만 사용
//split("") 문자열을 하나의 요소를 가지는 배열로 만들수있음
function solution(s) {
    if(s.length !== 4 && s.length !== 6){
        return false;
    }
    
    const answer = s.split("")
                    .filter((num) =>{
                        //문자데이터만 남기는 것
                        //isNaN의 결과가 true 값인 데이터
                        return isNaN(num)
                    })
    return answer.length === 0
    //return 값이 맞으면 true 틀리면 false
}