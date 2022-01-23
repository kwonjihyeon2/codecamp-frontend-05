function solution(array, commands) {
    let answer = [];
    
    for(let a=0; a<commands.length; a++){
        
         let i = commands[a][0]-1
         let j = commands[a][1]
         
         let arr = array.slice(i,j)
         arr.sort()
        
         let k = arr[commands[a][2]-1] 
         
        console.log(i,j,k)
        answer.push(k)
    }
    
    //배열자르기 split
    //sort()
    //그 배열의 index값
    //이 값의 원소들로 새 배열 만들기
    return answer;
}



//sort 활요 주의
function solution(array, commands){
    let answer = [];
    
    for(let i=0; i<commands.length; i++){
        let i = commands[a][0]-1
        let j = commands[a][1]
        let k = arr[commands[a][2]-1] 

        const result = array.slice(i-1,j)
                            .sort(a,b =>{
                                //return a-b
                                return a < b ? -1 : 1
                            })
       answer.push(result[k-1])
    }
}


//map 활용
function solution(array, commands){
    
    const answer = commands.map(nums => {
        const result = array.slice(nums[0] - 1, nums[1])
                            .sort((a,b)=>{
                                return a < b ? -1 : 1;
                            })
        return result[nums[2] - 1];
    })
    return answer
}






function solution(array, commands) {
    let answer = [];
    
    for(let a=0; a<commands.length; a++){
        
         let i = commands[a][0]-1
         let j = commands[a][1]
         
         let arr = array.slice(i,j)
         arr.sort((a,b)=>{
            return a < b ? -1 : 1
         })
        
         let k = arr[commands[a][2]-1] 
         
        console.log(i,j,k)
        answer.push(k)
    }
    
    //배열자르기 split
    //sort()
    //그 배열의 index값
    //이 값의 원소들로 새 배열 만들기
    return answer;
}