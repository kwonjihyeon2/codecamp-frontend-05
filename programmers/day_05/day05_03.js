function solution(phone_number) {
    let answer = '';
    
    answer = answer.padStart(phone_number.length-4,"*")
    
    answer = answer + phone_number.slice(phone_number.length-4,phone_number.length)
    console.log(answer)
    return answer;
}

//두가지방법
function solution(phone_number) {
    let answer = '';
    
    for(let i=0;i<phone_number.length;i++){
        if(i < phone_number.length-4){
            answer = answer + '*'
        } else{
            answer = answer + phone_number[i]
        }
    }
    console.log(answer)
    return answer;
}