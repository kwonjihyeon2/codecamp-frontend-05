//문자열 갯수

function solution(s){
    let countP = 0;
    let countY = 0;
    
    s = s.toLowerCase();
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'p'){
            countP += 1
        }
        if(s[i] === 'y'){
            countY += 1
        }
    }
    // if(countP === countY){
    //     return true
    // } else{
    //     return false
    // }
    return countP === countY;
}

//찾아야할 문자가 많아진다면?
//객체를 만들어서 로직을 구성

function solution(s){

    s = s.toLowerCase();
    const obj = {};
    for(let i = 0; i< s.length; i++){
        if(obj[s[i]] === undefined){
            obj[s[i]] = 1;    
        } else{}
    }
    obj[s[i]] ++;

    return obj.p === obj.y;
}


//메서드 이용 .map,.filter 는 배열에서만
//단순반복을 위한 메서드 for each !!
function solution(s){
    const obj = {};
    s.toLowerCase()
        .split("")
        .forEach(str =>{
            obj[str] === undefined
                ? obj[str] = 1
                : obj[str] ++
        })
    return obj.p === obj.y;

}