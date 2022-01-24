//이상한 문자 만들기
function solution(s) {
    let answer = "";
    let idx = 0;

    for(let i=0; i< s.length; i++){
        console.log(s[i], i,idx)

        if(s[i] === " "){
            answer += " ";
            idx = 0;
        } else{
            answer += idx % 2 === 0
            ?  s[i].toUpperCase()
            :  s[i].toLowerCase()
            idx++;
        }  
    }
    return answer
}


//메서드이용해서 풀이한다면?
//for each와 map (반복)
//.split("") -> 문자열을 배열로 만듬
//.join("") -> 배열을 문자열로 만듬

function solution(s) {
    //map 사용하기위해 배열로 만들어줌
     const answer = s.split(" ")
                     .map( word => {
                         return word.split("")
                                     .map((letter,i)=>{
                             return i % 2 === 0
                                 ? letter.toUpperCase()
                                 : letter.toLowerCase()
                         }).join("")
                     }).join(" ")
     return answer
}