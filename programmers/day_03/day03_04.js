function makeOdd(num){
    let str = '';

    for(let i = 1; i <= num; i++){
      if(i % 2 !== 0){
        str = str + i // 같은 식 : str += i
      }
    } return str
}







//Q5.
function bigNum(str){
  let biggest = 0;
  
  for(let i = 0; i<=str.length; i++){
    if(Number(str[i]) > biggest){
      biggest = Number(str[i])
    }
  } return biggest
}

bigNum("8586934");